import { NextRequest, NextResponse } from 'next/server';

import { generateEmailTemplate } from '@/lib/emailTemplate';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    const { name, email, phone, company, message } = await request.json();

    const htmlContent = generateEmailTemplate({ name, email, phone, company, message });

    const { data, error } = await resend.emails.send({
        from: 'Dan Systemes <info@dansystemes.com>',
        to: email,
        bcc: ['info@dansystemes.com', 'ethan@smadja.biz'],
        subject: 'Confirmation de votre demande - Dan Systèmes',
        html: htmlContent
    });

    if (error || !data) {
        return NextResponse.json(
            { error: error?.message || "Une erreur est survenue lors de l'envoi du message" },
            { status: 500 }
        );
    }

    return NextResponse.json({ data, message: 'Votre demande a été envoyée avec succès' }, { status: 200 });
}
