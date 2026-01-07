export interface EmailFormData {
    name: string;
    email: string;
    phone: string;
    company: string;
    message: string;
}

export function generateEmailTemplate(data: EmailFormData) {
    const { name, email, phone, company, message } = data;

    return `
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Confirmation de votre demande - Dan Systèmes</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
    <table role="presentation" style="width: 100%; border-collapse: collapse;">
        <tr>
            <td align="center" style="padding: 40px 20px;">
                <table role="presentation" style="width: 100%; max-width: 600px; border-collapse: collapse; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">

                    <!-- Header -->
                    <tr>
                        <td style="background-color: #0c2760; padding: 30px 40px; text-align: center;">
                            <table role="presentation" style="margin: 0 auto; border-collapse: collapse;">
                                <tr>
                                    <td style="background-color: rgba(255, 255, 255, 0.5); border-radius: 8px; padding: 12px 20px;">
                                        <img src="https://dansystemes.com/images/logo.png" alt="Dan Systèmes" width="150" style="display: block; margin: 0 auto;" />
                                    </td>
                                </tr>
                            </table>
                            <p style="margin: 15px 0 0 0; color: #a8c823; font-size: 14px; font-weight: 700; font-style: italic;">Votre partenaire IT depuis 2003</p>
                        </td>
                    </tr>

                    <!-- Main Content -->
                    <tr>
                        <td style="padding: 40px;">
                            <h2 style="margin: 0 0 20px 0; color: #0c2760; font-size: 22px; font-weight: 600;">
                                Merci pour votre demande !
                            </h2>
                            <p style="margin: 0 0 25px 0; color: #555555; font-size: 16px; line-height: 1.6;">
                                Bonjour <strong>${name}</strong>,<br><br>
                                Nous avons bien reçu votre demande de contact et nous vous en remercions. Notre équipe vous répondra dans les plus brefs délais.
                            </p>

                            <!-- Recap Box -->
                            <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f8f9fa; border-radius: 8px; margin-bottom: 25px;">
                                <tr>
                                    <td style="padding: 25px;">
                                        <h3 style="margin: 0 0 20px 0; color: #0c2760; font-size: 16px; font-weight: 600; border-bottom: 2px solid #a8c823; padding-bottom: 10px;">
                                            Récapitulatif de votre demande
                                        </h3>

                                        <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                            <tr>
                                                <td style="padding: 8px 0; color: #777777; font-size: 14px; width: 120px; vertical-align: top;">Nom</td>
                                                <td style="padding: 8px 0; color: #333333; font-size: 14px; font-weight: 500;">${name}</td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 8px 0; color: #777777; font-size: 14px; vertical-align: top;">Email</td>
                                                <td style="padding: 8px 0; color: #333333; font-size: 14px; font-weight: 500;">${email}</td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 8px 0; color: #777777; font-size: 14px; vertical-align: top;">Téléphone</td>
                                                <td style="padding: 8px 0; color: #333333; font-size: 14px; font-weight: 500;">${phone || 'Non renseigné'}</td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 8px 0; color: #777777; font-size: 14px; vertical-align: top;">Entreprise</td>
                                                <td style="padding: 8px 0; color: #333333; font-size: 14px; font-weight: 500;">${company}</td>
                                            </tr>
                                            ${
                                                message
                                                    ? `
                                            <tr>
                                                <td style="padding: 8px 0; color: #777777; font-size: 14px; vertical-align: top;">Message</td>
                                                <td style="padding: 8px 0; color: #333333; font-size: 14px; font-weight: 500; white-space: pre-wrap;">${message}</td>
                                            </tr>
                                            `
                                                    : ''
                                            }
                                        </table>
                                    </td>
                                </tr>
                            </table>

                            <!-- CTA -->
                            <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                <tr>
                                    <td align="center">
                                        <a href="https://dansystemes.com" style="display: inline-block; background-color: #a8c823; color: #0c2760; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-size: 16px; font-weight: 600;">
                                            Visiter notre site
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #091d48; padding: 30px 40px;">
                            <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                <tr>
                                    <!-- Logo à gauche -->
                                    <td style="vertical-align: middle; width: 50%; background-color: white; border-radius: 8px; padding-left: 10px;">
                                        <img src="https://dansystemes.com/images/logo.png" alt="Dan Systèmes" width="150" style="display: block;" />
                                    </td>
                                    <!-- Contact à droite -->
                                    <td style="vertical-align: middle; text-align: right; width: 50%;">
                                        <p style="margin: 0 0 12px 0; color: #ffffff; font-size: 16px; font-weight: 600;">
                                            Contact
                                        </p>
                                        <table role="presentation" style="border-collapse: collapse; margin-left: auto;">
                                            <tr>
                                                <td style="padding: 0 6px 8px 0; vertical-align: middle;">
                                                    <img src="https://dansystemes.com/icons/mail.png" alt="Email" width="14" height="14" style="display: block;" />
                                                </td>
                                                <td style="padding: 0 0 8px 0; vertical-align: middle;">
                                                    <a href="mailto:info@dansystemes.com" style="color: #cccccc; font-size: 13px; text-decoration: none;">
                                                        info@dansystemes.com
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 0 6px 0 0; vertical-align: middle;">
                                                    <img src="https://dansystemes.com/icons/phone.png" alt="Téléphone" width="14" height="14" style="display: block;" />
                                                </td>
                                                <td style="padding: 0; vertical-align: middle;">
                                                    <a href="tel:+33145546060" style="color: #cccccc; font-size: 13px; text-decoration: none;">
                                                        01 45 54 60 60
                                                    </a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            <p style="margin: 20px 0 0 0; color: #888888; font-size: 12px; text-align: center;">
                                © ${new Date().getFullYear()} Dan Systèmes. Tous droits réservés.
                            </p>
                        </td>
                    </tr>

                </table>
            </td>
        </tr>
    </table>
</body>
</html>
    `.trim();
}
