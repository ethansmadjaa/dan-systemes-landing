import type { Metadata } from 'next';

import ContactForm from '@/components/ContactForm';
import { ContactJsonLd } from '@/components/JsonLd';
import { siteDetails } from '@/data/siteDetails';

export const metadata: Metadata = {
    title: 'Contact',
    description:
        'Contactez Dan Systèmes pour vos projets IT : conseil, intégration et solutions informatiques pour entreprises.',
    alternates: {
        canonical: '/contact'
    },
    openGraph: {
        title: `Contact | ${siteDetails.siteName}`,
        description:
            'Contactez Dan Systèmes pour vos projets IT : conseil, intégration et solutions informatiques pour entreprises.',
        url: `${siteDetails.siteUrl}/contact`,
        siteName: siteDetails.siteName,
        locale: siteDetails.locale,
        type: 'website'
    },
    twitter: {
        card: 'summary_large_image',
        title: `Contact | ${siteDetails.siteName}`,
        description:
            'Contactez Dan Systèmes pour vos projets IT : conseil, intégration et solutions informatiques pour entreprises.'
    }
};

export default function ContactPage() {
    return (
        <>
            <ContactJsonLd />
            <ContactForm />
        </>
    );
}
