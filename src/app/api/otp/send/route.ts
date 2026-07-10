import { NextResponse } from 'next/server';
import { adminDb } from '../../../../lib/firebase-admin';
import * as admin from 'firebase-admin';
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
            submissionUrl,
            recaptchaToken,
            renderTime
        } = body;

        if (!name || !phone) {
            return NextResponse.json({ error: 'Name and phone are required' }, { status: 400 });
        }

        // Speed Trap: Block if form submitted in under 4 seconds (4000ms)
        const currentTime = Date.now();
        if (!renderTime || (currentTime - renderTime) < 4000) {
            console.error(`Speed trap triggered. renderTime: ${renderTime}, diff: ${currentTime - renderTime}`);
            // Return fake success to bots so they don't retry with a different method
            return NextResponse.json({
                success: true,
                pendingId: `fake_${currentTime}`,
                message: 'OTP sent successfully'
            });
        }

        // Verify reCAPTCHA token
        if (!recaptchaToken) {
            return NextResponse.json({ error: 'reCAPTCHA verification failed. Please try again.' }, { status: 403 });
        }

        const recaptchaSecretKey = process.env.SITE_SECRET_KEY;
        if (!recaptchaSecretKey) {
            console.error('CRITICAL ERROR: SITE_SECRET_KEY is missing in environment variables!');
            return NextResponse.json({ error: 'Server misconfiguration. Please contact support.' }, { status: 500 });
        }

        const params = new URLSearchParams();
        params.append('secret', recaptchaSecretKey);
        params.append('response', recaptchaToken);

        const recaptchaVerifyResponse = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
            method: 'POST',
            body: params,
        });
        const recaptchaVerifyData = await recaptchaVerifyResponse.json();
        
        // Log the score for debugging
        console.log('\n--- reCAPTCHA Verification ---');
        console.log('Success:', recaptchaVerifyData.success);
        console.log('Score:', recaptchaVerifyData.score);
        console.log('------------------------------\n');

        // We use 0.3 as a safer threshold to ensure real users don't get blocked
        if (!recaptchaVerifyData.success || recaptchaVerifyData.score < 0.3) {
            console.error('reCAPTCHA failed:', recaptchaVerifyData);
            return NextResponse.json({ error: 'Bot behavior detected. If you are human, please contact us directly.' }, { status: 403 });
        }

        // 0. Check for duplicate lead in 'form' collection (within the last 7 days)
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

        const q = adminDb.collection('form').where('phone', '==', phone);
        const querySnapshot = await q.get();
        
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

        // 0.5 Phone Number Rate Limiting (Max 2 OTPs per 10 mins)
        // We filter in-memory to avoid requiring a composite index in Firestore
        const rateLimitQuery = adminDb.collection('pending_leads').where('phone', '==', phone);
        const rateLimitSnapshot = await rateLimitQuery.get();
        
        const tenMinsAgoMs = Date.now() - 10 * 60 * 1000;
        let recentOtpCount = 0;
        
        rateLimitSnapshot.forEach(doc => {
            const data = doc.data();
            if (data.createdAt && typeof data.createdAt.toDate === 'function') {
                const createdAtMs = data.createdAt.toDate().getTime();
                if (createdAtMs > tenMinsAgoMs) {
                    recentOtpCount++;
                }
            }
        });

        if (recentOtpCount >= 2) {
            return NextResponse.json({
                error: 'RATE_LIMIT_EXCEEDED',
                message: 'You have requested too many OTPs recently. Please wait 10 minutes before trying again.'
            }, { status: 429 });
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
            createdAt: admin.firestore.FieldValue.serverTimestamp(),
            expiresAt: admin.firestore.Timestamp.fromDate(new Date(Date.now() + 10 * 60 * 1000)), // 10 minutes
        };

        const docRef = await adminDb.collection('pending_leads').add(pendingData);
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
