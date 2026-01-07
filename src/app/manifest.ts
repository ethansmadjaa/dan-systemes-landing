import type { MetadataRoute } from 'next';

import { siteDetails } from '@/data/siteDetails';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: siteDetails.siteName,
        short_name: 'Dan Systèmes',
        description: siteDetails.metadata.description,
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#0c2760',
        lang: 'fr',
        icons: [
            {
                src: '/images/favicon/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon'
            },
            {
                src: '/images/favicon/apple-touch-icon.png',
                sizes: '180x180',
                type: 'image/png'
            }
        ]
    };
}
