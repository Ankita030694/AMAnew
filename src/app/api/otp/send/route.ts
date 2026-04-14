import { NextResponse } from 'next/server';
import { db, collection, addDoc } from '../../../../lib/firebase';
import { serverTimestamp, query, where, getDocs, limit } from 'firebase/firestore';
import crypto from 'crypto';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const {
            name,
            email,
            phone,
            serviceRequired,
            message,
            source,
            submissionUrl
        } = body;

        if (!name || !phone) {
            return NextResponse.json({ error: 'Name and phone are required' }, { status: 400 });
        }

        // 0. Check for duplicate lead in 'form' collection (within the last 7 days)
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

        const q = query(
            collection(db, 'form'), 
            where('phone', '==', phone)
        );
        const querySnapshot = await getDocs(q);
        
        const isDuplicate = querySnapshot.docs.some(doc => {
            const data = doc.data();
            const timestamp = data.timestamp?.toDate ? data.timestamp.toDate() : data.timestamp;
            return timestamp && new Date(timestamp) > oneWeekAgo;
        });

        if (isDuplicate) {
            return NextResponse.json({ 
                error: 'DUPLICATE_LEAD', 
                message: 'You have already submitted your info with us recently. To connect again, check your whatsapp for your assigned executive to contact them again.' 
            }, { status: 409 });
        }

        // Generate 6-digit OTP
        const otp = crypto.randomInt(100000, 999999).toString();

        // 1. Store in pending_leads
        const pendingData = {
            name,
            email: email || '',
            phone,
            serviceRequired: serviceRequired || '',
            message: message || '',
            source: source || 'Contact Form',
            submissionUrl: submissionUrl || '',
            otp,
            createdAt: serverTimestamp(),
            expiresAt: new Date(Date.now() + 10 * 60 * 1000), // 10 minutes
        };

        const docRef = await addDoc(collection(db, 'pending_leads'), pendingData);
        console.log('Pending lead created: ', docRef.id);

        // 2. Send WATI OTP Message
        try {
            const WATI_API_KEY = process.env.WATI_API_KEY;
            const WATI_API_URL = process.env.WATI_API_ENDPOINT || 'https://app.wati.io/api/v1';

            if (WATI_API_KEY) {
                const cleanPhone = phone.replace(/\D/g, '');
                const formattedPhone = cleanPhone.length === 10 ? `91${cleanPhone}` : cleanPhone;

                const templateName = 'ama_otp_11112025';
                const targetUrl = `${WATI_API_URL}/sendTemplateMessage?whatsappNumber=${formattedPhone}`;

                const watiResponse = await fetch(targetUrl, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${WATI_API_KEY}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        template_name: templateName,
                        broadcast_name: 'otp_verification',
                        parameters: [
                            {
                                name: '1',
                                value: otp
                            }
                        ],
                    }),
                });

                const watiData = await watiResponse.json();
                if (!watiResponse.ok) {
                    console.error('WATI API error:', watiData);
                }
            } else {
                console.warn('WATI_API_KEY not found');
            }
        } catch (watiError) {
            console.error('Error sending WATI OTP:', watiError);
        }

        return NextResponse.json({
            success: true,
            pendingId: docRef.id,
            message: 'OTP sent successfully'
        });

    } catch (error) {
        console.error('Error in otp-send API:', error);
        return NextResponse.json({
            error: 'Internal server error',
            details: error instanceof Error ? error.message : String(error)
        }, { status: 500 });
    }
}
