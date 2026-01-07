import type { MetadataRoute } from 'next';

import { siteDetails } from '@/data/siteDetails';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = siteDetails.siteUrl;

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/_next/', '/static/']
            }
        ],
        sitemap: `${baseUrl}/sitemap.xml`
    };
}
