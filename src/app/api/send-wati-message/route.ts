
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { phoneNumber, name } = await request.json();

        if (!phoneNumber) {
            return NextResponse.json({ error: 'Phone number is required' }, { status: 400 });
        }

        // Clean phone number: remove non-digits
        const cleanPhone = phoneNumber.replace(/\D/g, '');
        // Prefix with 91 if it's a 10-digit number
        const formattedPhone = cleanPhone.length === 10 ? `91${cleanPhone}` : cleanPhone;

        // WATI API Configuration
        const WATI_API_KEY = process.env.WATI_API_KEY;
        // Check for custom endpoint in env, otherwise fallback to common app.wati.io
        const WATI_API_URL = process.env.WATI_API_ENDPOINT || 'https://app.wati.io/api/v1';

        if (!WATI_API_KEY) {
            console.error('WATI_API_KEY is not defined in environment variables');
            return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
        }

        const templateName = 'ama_legal_start_message';
        const targetUrl = `${WATI_API_URL}/sendTemplateMessage?whatsappNumber=${formattedPhone}`;

        console.log(`Sending WATI message to: ${targetUrl}`);

        const response = await fetch(targetUrl, {
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

        const responseText = await response.text();
        let data;
        try {
            data = responseText ? JSON.parse(responseText) : {};
        } catch (e) {
            console.error('Failed to parse WATI response as JSON:', responseText);
            return NextResponse.json({
                error: 'WATI returned invalid JSON',
                status: response.status,
                details: responseText
            }, { status: 502 });
        }

        if (!response.ok) {
            console.error('WATI API error:', data);
            return NextResponse.json({ error: 'Failed to send WhatsApp message', details: data }, { status: response.status });
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('Error in send-wati-message:', error);
        return NextResponse.json({ error: 'Internal server error', details: error instanceof Error ? error.message : String(error) }, { status: 500 });
    }
}
