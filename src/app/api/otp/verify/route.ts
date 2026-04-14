import { NextResponse } from 'next/server';
import { db, collection, addDoc } from '../../../../lib/firebase';
import { doc, getDoc, deleteDoc, serverTimestamp } from 'firebase/firestore';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { pendingId, otp } = body;

        if (!pendingId || !otp) {
            return NextResponse.json({ error: 'Pending ID and OTP are required' }, { status: 400 });
        }

        // 1. Fetch the pending lead
        const pendingRef = doc(db, 'pending_leads', pendingId);
        const pendingSnap = await getDoc(pendingRef);

        if (!pendingSnap.exists()) {
            return NextResponse.json({ error: 'Invalid or expired OTP session' }, { status: 400 });
        }

        const data = pendingSnap.data();

        // 2. Verify OTP
        if (data.otp !== otp) {
            return NextResponse.json({ error: 'Invalid OTP' }, { status: 400 });
        }

        // 3. Check expiry
        const now = new Date();
        const expiresAt = data.expiresAt.toDate();
        if (now > expiresAt) {
            await deleteDoc(pendingRef);
            return NextResponse.json({ error: 'OTP has expired' }, { status: 400 });
        }

        // 4. Move to main collection
        const { otp: _, createdAt: __, expiresAt: ___, ...formData } = data;
        const mainData = {
            ...formData,
            timestamp: serverTimestamp(),
            verified: true
        };

        const docRef = await addDoc(collection(db, 'form'), mainData);
        console.log('Lead verified and saved: ', docRef.id);

        // 5. Delete pending record
        await deleteDoc(pendingRef);

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
