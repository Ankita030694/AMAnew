import { NextResponse } from 'next/server';
import { adminDb } from '../../../../lib/firebase-admin';
import * as admin from 'firebase-admin';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { pendingId, otp } = body;

        if (!pendingId || !otp) {
            return NextResponse.json({ error: 'Pending ID and OTP are required' }, { status: 400 });
        }

        // 1. Fetch the pending lead
        const pendingRef = adminDb.collection('pending_leads').doc(pendingId);
        const pendingSnap = await pendingRef.get();

        if (!pendingSnap.exists) {
            return NextResponse.json({ error: 'Invalid or expired OTP session' }, { status: 400 });
        }

        const data = pendingSnap.data();
        if (!data) {
            return NextResponse.json({ error: 'No data found' }, { status: 400 });
        }

        // 2. Verify OTP
        if (data.otp !== otp) {
            return NextResponse.json({ error: 'Invalid OTP' }, { status: 400 });
        }

        // 3. Check expiry
        const now = new Date();
        const expiresAt = data.expiresAt.toDate();
        if (now > expiresAt) {
            await pendingRef.delete();
            return NextResponse.json({ error: 'OTP has expired' }, { status: 400 });
        }

        // 4. Move to main collection
        const { otp: _, createdAt: __, expiresAt: ___, ...formData } = data;
        const mainData = {
            ...formData,
            timestamp: admin.firestore.FieldValue.serverTimestamp(),
            verified: true
        };

        const docRef = await adminDb.collection('form').add(mainData);
        console.log('Lead verified and saved: ', docRef.id);

        // 5. Delete pending record
        await pendingRef.delete();

        return NextResponse.json({
            success: true,
            message: 'OTP verified and lead saved successfully',
            redirectUrl: 'https://pmny.in/DIMRKGkGQz6L'
        });

    } catch (error) {
        console.error('Error in otp-verify API:', error);
        return NextResponse.json({
            error: 'Internal server error',
            details: error instanceof Error ? error.message : String(error)
        }, { status: 500 });
    }
}
