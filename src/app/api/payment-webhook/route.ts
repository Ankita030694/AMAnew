import { NextResponse } from 'next/server';
import { adminDb } from '../../../lib/firebase-admin';

export async function POST(request: Request) {
    try {
        const contentType = request.headers.get('content-type') || '';
        let body: any = {};
        
        if (contentType.includes('application/json')) {
            body = await request.json();
        } else if (contentType.includes('application/x-www-form-urlencoded') || contentType.includes('multipart/form-data')) {
            const formData = await request.formData();
            body = Object.fromEntries(formData.entries());
        } else {
            const text = await request.text();
            try {
                body = JSON.parse(text);
            } catch (e) {
                // If parsing fails, try URLSearchParams
                body = Object.fromEntries(new URLSearchParams(text).entries());
            }
        }

        console.log('Webhook payload received:', body);

        // Extract possible identifiers
        const email = body.email || body.customer_email || body.customerEmail;
        let phone = body.phone || body.customer_phone || body.customerPhone || body.contact;
        
        // Normalize status
        const rawStatus = (body.status || body.event || body.payment_status || '').toLowerCase();
        
        const txnid = body.txnid || body.id || body.payment_id || body.razorpay_payment_id || body.transaction_id;

        if (!email && !phone) {
            return NextResponse.json({ error: 'No email or phone found in payload' }, { status: 400 });
        }

        // Clean phone number to exactly 10 digits (matching how contact form requires 10 digits)
        let cleanedPhone = '';
        if (phone) {
            cleanedPhone = phone.toString().replace(/\D/g, '');
            if (cleanedPhone.length > 10 && cleanedPhone.startsWith('91')) {
                cleanedPhone = cleanedPhone.slice(-10); // get last 10 digits
            }
        }

        let docToUpdate = null;

        // Try searching by phone first
        if (cleanedPhone && cleanedPhone.length === 10) {
            const phoneQuery = await adminDb.collection('form')
                .where('phone', '==', cleanedPhone)
                .get();
                
            if (!phoneQuery.empty) {
                // Sort in memory to avoid needing a composite index on (phone, timestamp)
                const docs = phoneQuery.docs.sort((a, b) => {
                    const aTime = a.data().timestamp?.toMillis?.() || 0;
                    const bTime = b.data().timestamp?.toMillis?.() || 0;
                    return bTime - aTime;
                });
                docToUpdate = docs[0];
            }
        }

        // If not found by phone, try email
        if (!docToUpdate && email) {
            const emailQuery = await adminDb.collection('form')
                .where('email', '==', email)
                .get();
                
            if (!emailQuery.empty) {
                const docs = emailQuery.docs.sort((a, b) => {
                    const aTime = a.data().timestamp?.toMillis?.() || 0;
                    const bTime = b.data().timestamp?.toMillis?.() || 0;
                    return bTime - aTime;
                });
                docToUpdate = docs[0];
            }
        }

        if (docToUpdate) {
            // Determine if paid
            // PayU uses 'success', Razorpay uses 'captured' or 'payment.captured'
            const isPaid = rawStatus.includes('success') || rawStatus.includes('captured') || rawStatus === 'paid' || rawStatus.includes('authorized');
            
            await docToUpdate.ref.update({
                paymentStatus: isPaid ? 'Paid' : 'Failed',
                paymentRawStatus: rawStatus,
                paymentDetails: body,
                paymentTxnId: txnid || 'unknown',
                paymentUpdatedAt: new Date(),
            });

            console.log(`Updated lead ${docToUpdate.id} payment status to ${isPaid ? 'Paid' : 'Failed'} based on status: ${rawStatus}`);
            return NextResponse.json({ success: true, message: 'Lead payment status updated', leadId: docToUpdate.id });
        } else {
            console.log(`No lead found matching email: ${email} or phone: ${cleanedPhone}`);
            // Return 200 anyway so the payment gateway doesn't retry infinitely
            return NextResponse.json({ success: true, message: 'Lead not found, but webhook received' });
        }

    } catch (error) {
        console.error('Webhook error:', error);
        return NextResponse.json(
            { error: 'Internal server error', details: error instanceof Error ? error.message : String(error) }, 
            { status: 500 }
        );
    }
}
