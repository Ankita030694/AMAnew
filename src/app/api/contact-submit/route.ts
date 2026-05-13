import { NextResponse } from 'next/server';
import { adminDb } from '../../../lib/firebase-admin';
import * as admin from 'firebase-admin';

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

        // 1. Basic Validation
        if (!name || !phone) {
            return NextResponse.json({ error: 'Name and phone are required' }, { status: 400 });
        }

        // 2. Save to Firestore
        const formData = {
            name,
            email: email || '',
            phone,
            serviceRequired: serviceRequired || '',
            message: message || '',
            source: source || 'Contact Form',
            submissionUrl: submissionUrl || '',
            timestamp: admin.firestore.FieldValue.serverTimestamp(),
        };

        const docRef = await adminDb.collection('form').add(formData);
        
        // 3. Trigger WATI Message (WhatsApp)
        try {
            const WATI_API_KEY = process.env.WATI_API_KEY;
            const WATI_API_URL = process.env.WATI_API_ENDPOINT || 'https://app.wati.io/api/v1';

            if (WATI_API_KEY) {
                const cleanPhone = phone.replace(/\D/g, '');
                const formattedPhone = cleanPhone.length === 10 ? `91${cleanPhone}` : cleanPhone;

                const templateName = 'ama_legal_query';
                const targetUrl = `${WATI_API_URL}/sendTemplateMessage?whatsappNumber=${formattedPhone}`;

                await fetch(targetUrl, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${WATI_API_KEY}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        template_name: templateName,
                        broadcast_name: 'contact_form_submission',
                        parameters: [
                            {
                                name: 'name',
                                value: name || 'User'
                            }
                        ],
                    }),
                });
            }
        } catch (watiError) {
            console.error('Error sending WATI message:', watiError);
        }

        return NextResponse.json({
            success: true,
            id: docRef.id,
            message: 'Contact form submitted successfully'
        });

    } catch (error) {
        console.error('Error in contact-submit API:', error);
        return NextResponse.json({
            error: 'Internal server error',
            details: error instanceof Error ? error.message : String(error)
        }, { status: 500 });
    }
}
