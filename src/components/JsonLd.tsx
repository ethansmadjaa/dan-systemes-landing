import { faqs } from '@/data/faq';
import { services } from '@/data/services';
import { siteDetails } from '@/data/siteDetails';

// Organization Schema - Main company information
export function OrganizationJsonLd() {
    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': `${siteDetails.siteUrl}/#organization`,
        name: siteDetails.siteName,
        url: siteDetails.siteUrl,
        logo: {
            '@type': 'ImageObject',
            url: `${siteDetails.siteUrl}/images/logo.png`,
            width: 200,
            height: 60
        },
        description: siteDetails.metadata.description,
        foundingDate: '2003',
        slogan: 'Des solutions IT performantes et adaptées à votre entreprise',
        knowsAbout: [
            'Solutions IT',
            'Cloud Computing',
            'Cybersécurité',
            'Infrastructure informatique',
            'Virtualisation',
            'Microsoft 365',
            'AWS'
        ],
        areaServed: {
            '@type': 'Country',
            name: 'France'
        },
        contactPoint: {
            '@type': 'ContactPoint',
            email: 'armand@dansystemes.com',
            contactType: 'customer service',
            availableLanguage: ['French']
        }
    };

    return (
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
    );
}

// Local Business Schema - For local SEO
export function LocalBusinessJsonLd() {
    const localBusinessSchema = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        '@id': `${siteDetails.siteUrl}/#localbusiness`,
        name: siteDetails.siteName,
        url: siteDetails.siteUrl,
        logo: `${siteDetails.siteUrl}/images/logo.png`,
        image: `${siteDetails.siteUrl}/images/logo.png`,
        description: siteDetails.metadata.description,
        priceRange: '€€',
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'FR'
        },
        areaServed: {
            '@type': 'Country',
            name: 'France'
        },
        serviceArea: {
            '@type': 'Country',
            name: 'France'
        },
        knowsLanguage: ['fr'],
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Services IT',
            itemListElement: services.map((service, index) => ({
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: service.title,
                    description: service.description
                },
                position: index + 1
            }))
        }
    };

    return (
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
    );
}

// Website Schema - Site-wide metadata
export function WebsiteJsonLd() {
    const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${siteDetails.siteUrl}/#website`,
        name: siteDetails.siteName,
        url: siteDetails.siteUrl,
        description: siteDetails.metadata.description,
        inLanguage: 'fr-FR',
        publisher: {
            '@id': `${siteDetails.siteUrl}/#organization`
        }
    };

    return <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />;
}

// Services Schema - Detailed service offerings
export function ServicesJsonLd() {
    const servicesSchema = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        '@id': `${siteDetails.siteUrl}/#services`,
        name: 'Services IT Dan Systèmes',
        description: 'Nos services de conseil, intégration et solutions IT',
        numberOfItems: services.length,
        itemListElement: services.map((service, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
                '@type': 'Service',
                name: service.title,
                description: service.description,
                provider: {
                    '@id': `${siteDetails.siteUrl}/#organization`
                },
                areaServed: {
                    '@type': 'Country',
                    name: 'France'
                },
                ...(service.features && {
                    hasOfferCatalog: {
                        '@type': 'OfferCatalog',
                        name: service.title,
                        itemListElement: service.features.map((feature, featureIndex) => ({
                            '@type': 'Offer',
                            itemOffered: {
                                '@type': 'Service',
                                name: feature
                            },
                            position: featureIndex + 1
                        }))
                    }
                })
            }
        }))
    };

    return <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />;
}

// FAQ Schema - For FAQ section
export function FAQJsonLd() {
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        '@id': `${siteDetails.siteUrl}/#faq`,
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer
            }
        }))
    };

    return <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />;
}

// Breadcrumb Schema - For navigation
interface BreadcrumbItem {
    name: string;
    url: string;
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url
        }))
    };

    return <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />;
}

// WebPage Schema - For individual pages
interface WebPageJsonLdProps {
    title: string;
    description: string;
    url: string;
    datePublished?: string;
    dateModified?: string;
}

export function WebPageJsonLd({
    title,
    description,
    url,
    datePublished = '2003-01-01',
    dateModified
}: WebPageJsonLdProps) {
    const webPageSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        name: title,
        description: description,
        url: url,
        isPartOf: {
            '@id': `${siteDetails.siteUrl}/#website`
        },
        about: {
            '@id': `${siteDetails.siteUrl}/#organization`
        },
        inLanguage: 'fr-FR',
        datePublished: datePublished,
        dateModified: dateModified || new Date().toISOString().split('T')[0]
    };

    return <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />;
}

// Contact Page Schema
export function ContactPageJsonLd() {
    const contactPageSchema = {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        '@id': `${siteDetails.siteUrl}/contact#webpage`,
        name: 'Contactez Dan Systèmes',
        description:
            'Contactez Dan Systèmes pour vos projets IT : conseil, intégration et solutions informatiques pour entreprises.',
        url: `${siteDetails.siteUrl}/contact`,
        isPartOf: {
            '@id': `${siteDetails.siteUrl}/#website`
        },
        about: {
            '@id': `${siteDetails.siteUrl}/#organization`
        },
        inLanguage: 'fr-FR',
        mainEntity: {
            '@type': 'Organization',
            '@id': `${siteDetails.siteUrl}/#organization`
        }
    };

    return (
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />
    );
}

// Home Page JSON-LD - All schemas for homepage
export function HomePageJsonLd() {
    return (
        <>
            <OrganizationJsonLd />
            <LocalBusinessJsonLd />
            <WebsiteJsonLd />
            <ServicesJsonLd />
            <FAQJsonLd />
            <WebPageJsonLd
                title={siteDetails.metadata.title}
                description={siteDetails.metadata.description}
                url={siteDetails.siteUrl}
            />
            <BreadcrumbJsonLd items={[{ name: 'Accueil', url: siteDetails.siteUrl }]} />
        </>
    );
}

// Contact Page JSON-LD
export function ContactJsonLd() {
    return (
        <>
            <OrganizationJsonLd />
            <WebsiteJsonLd />
            <ContactPageJsonLd />
            <BreadcrumbJsonLd
                items={[
                    { name: 'Accueil', url: siteDetails.siteUrl },
                    { name: 'Contact', url: `${siteDetails.siteUrl}/contact` }
                ]}
            />
        </>
    );
}

// Legacy export for backward compatibility
export function AllJsonLd() {
    return <HomePageJsonLd />;
}
