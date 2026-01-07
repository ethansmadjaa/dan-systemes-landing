import { NextRequest, NextResponse } from 'next/server';

import { EmailFormData, generateEmailTemplate } from '@/lib/emailTemplate';

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
    let formData: EmailFormData;
    try {
        formData = await request.json();
    } catch (error) {
        return NextResponse.json({ error: 'Format de données invalide' }, { status: 400 });
    }

    if (!formData.captchaToken) {
        return NextResponse.json({ error: 'Captcha manquant' }, { status: 400, statusText: 'Captcha manquant' });
    }

    const isCaptchaValid = await verifyCaptcha(formData.captchaToken);
    if (!isCaptchaValid) {
        return NextResponse.json({ error: 'Captcha invalide' }, { status: 400, statusText: 'Captcha invalide' });
    }

    const htmlContent = generateEmailTemplate(formData);

    const { data, error } = await resend.emails.send({
        from: 'Dan Systemes <info@dansystemes.com>',
        to: formData.email,
        replyTo: 'info@dansystemes.com',
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
