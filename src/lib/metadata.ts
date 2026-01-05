import { Metadata } from 'next';

import { siteDetails } from '@/data/siteDetails';

export const metadata: Metadata = {
    title: {
        template: `%s | ${siteDetails.siteName}`,
        default: siteDetails.metadata.title
    },
    description: siteDetails.metadata.description,
    metadataBase: new URL(siteDetails.siteUrl),
    icons: {
        icon: siteDetails.favicon,
        apple: siteDetails.appleTouchIcon
    },
    alternates: {
        canonical: '/',
        languages: {
            fr: '/fr',
            'x-default': '/'
        }
    },
    keywords: [
        'revendeur informatique',
        'revendeur IT France',
        'intégrateur informatique',
        'intégrateur IT',
        'solutions informatiques pour entreprises',
        'prestataire informatique',
        'infrastructure informatique',
        'matériel informatique professionnel',
        'logiciels professionnels',
        'cloud computing entreprise',
        'solutions cloud',
        'Microsoft 365',
        'Microsoft Cloud',
        'AWS entreprise',
        'cybersécurité entreprise',
        'sécurité informatique',
        'firewall entreprise',
        'antivirus professionnel',
        'protection des données',
        'sauvegarde informatique',
        'continuité d’activité IT',
        'réseau informatique entreprise',
        'serveurs professionnels',
        'stockage de données',
        'virtualisation',
        'poste de travail professionnel',
        'conseil informatique',
        'accompagnement IT',
        'offre informatique optimisée',
        'solutions IT sur mesure',
        'PME',
        'ETI'
    ],

    authors: [{ name: siteDetails.siteName }],
    creator: siteDetails.siteName,
    publisher: siteDetails.siteName,
    category: 'IT & Cloud Computing',
    applicationName: siteDetails.siteName,
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1
        }
    },
    openGraph: {
        title: siteDetails.metadata.title,
        description: siteDetails.metadata.description,
        url: siteDetails.siteUrl,
        siteName: siteDetails.siteName,
        locale: siteDetails.locale,
        alternateLocale: 'fr_FR',
        type: 'website'
    },
    twitter: {
        card: 'summary_large_image',
        title: siteDetails.metadata.title,
        description: siteDetails.metadata.description
    },
    appleWebApp: {
        title: siteDetails.siteName,
        capable: true,
        statusBarStyle: 'default'
    }
};
