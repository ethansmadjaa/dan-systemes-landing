'use client';

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

import { siteDetails } from '@/data/siteDetails';
import { footerDetails } from '@/data/footer';

const Footer: React.FC = () => {
    const quickLinks = [
        { key: 'À propos', url: '#about' },
        { key: 'Nos solutions', url: '#solutions' },
        { key: 'Contact', url: '#contact' },
    ];

    return (
        <footer
            className="text-primary-foreground py-10"
            style={{
                background: 'radial-gradient(ellipse at top left, var(--accent) 0%, var(--primary) 50%, var(--primary) 100%)'
            }}
        >
            <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
                <div>
                    <Link href="/" className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 w-fit mb-4">
                        <Image src={siteDetails.siteLogo} alt={siteDetails.siteName} width={120} height={50} />
                    </Link>
                    <p className="text-primary-foreground/80">{siteDetails.metadata.description}</p>
                </div>
                <div>
                    <p className="text-lg font-semibold mb-4">Liens rapides</p>
                    <ul className="text-primary-foreground/80">
                        {quickLinks.map(link => (
                            <li key={link.key} className="mb-2">
                                <Link href={link.url} className="hover:text-primary-foreground">{link.key}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <p className="text-lg font-semibold mb-4">Contact</p>

                    {footerDetails.email && <a href={`mailto:${footerDetails.email}`} className="block text-primary-foreground/80 hover:text-primary-foreground">Email: {footerDetails.email}</a>}

                    {footerDetails.telephone && <a href={`tel:${footerDetails.telephone}`} className="block text-primary-foreground/80 hover:text-primary-foreground">Téléphone: {footerDetails.telephone}</a>}

                    {footerDetails.socials && (
                        <div className="mt-5 flex items-center gap-5 flex-wrap">
                            {Object.keys(footerDetails.socials).map(platformName => {
                                if (platformName && footerDetails.socials[platformName])
                                {
                                    return (
                                        <Link
                                            href={footerDetails.socials[platformName] || ''}
                                            key={platformName}
                                            aria-label={platformName}
                                            className="text-primary-foreground/80 hover:text-primary-foreground"
                                        >
                                            {platformName}
                                        </Link>
                                    )
                                }
                            })}
                        </div>
                    )}
                </div>
            </div>
            <div className="max-w-7xl w-full mx-auto px-6 mt-10 pt-6 border-t border-primary-foreground/20">
                <p className="text-primary-foreground/60 text-sm text-center">
                    © {new Date().getFullYear()} {siteDetails.siteName}. Tous droits réservés.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
