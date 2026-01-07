import { NextRequest, NextResponse } from 'next/server';

import { generateEmailTemplate } from '@/lib/emailTemplate';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

async function verifyCaptcha(token: string): Promise<boolean> {
    const response = await fetch('https://api.hcaptcha.com/siteverify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            secret: process.env.HCAPTCHA_SECRET_KEY!,
            response: token
        })
    });

    const data = await response.json();

    return data.success === true;
}

export async function POST(request: NextRequest) {
    const { name, email, phone, company, message, captchaToken } = await request.json();

    if (!captchaToken) {
        return NextResponse.json({ error: 'Captcha manquant' }, { status: 400 });
    }

    const isCaptchaValid = await verifyCaptcha(captchaToken);
    if (!isCaptchaValid) {
        return NextResponse.json({ error: 'Captcha invalide' }, { status: 400 });
    }

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
