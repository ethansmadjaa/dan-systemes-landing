import type { Metadata } from 'next';

import ContactForm, { type ContactFormVariant } from '@/components/ContactForm';
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

interface ContactPageProps {
    searchParams: Promise<{ source?: string }>;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
    const { source } = await searchParams;
    const variant: ContactFormVariant = source === 'project' ? 'project' : 'default';

    return (
        <>
            <ContactJsonLd />
            <ContactForm variant={variant} />
        </>
    );
}
