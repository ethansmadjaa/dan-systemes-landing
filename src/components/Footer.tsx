'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { footerDetails } from '@/data/footer';
import { menuItems } from '@/data/menuItems';
import { siteDetails } from '@/data/siteDetails';

const Footer: React.FC = () => {
    return (
        <footer
            className='text-primary-foreground py-10'
            style={{
                background:
                    'radial-gradient(ellipse at top left, var(--accent) 0%, var(--primary) 50%, var(--primary) 100%)'
            }}>
            <div className='mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-3'>
                <div>
                    <Link href='/' className='mb-4 flex w-fit items-center gap-2 rounded-lg bg-white px-3 py-2'>
                        <Image src={siteDetails.siteLogo} alt={siteDetails.siteName} width={120} height={50} />
                    </Link>
                    <p className='text-primary-foreground/80'>{siteDetails.metadata.description}</p>
                </div>
                <div>
                    <p className='mb-4 text-lg font-semibold'>Liens rapides</p>
                    <ul className='text-primary-foreground/80'>
                        {menuItems.map((item, index) => (
                            <li key={index} className='mb-2'>
                                <Link href={item.url} className='hover:text-primary-foreground'>
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <p className='mb-4 text-lg font-semibold'>Contact</p>

                    {footerDetails.email && (
                        <a
                            href={`mailto:${footerDetails.email}`}
                            className='text-primary-foreground/80 hover:text-primary-foreground block'>
                            Email: {footerDetails.email}
                        </a>
                    )}

                    {footerDetails.telephone && (
                        <a
                            href={`tel:${footerDetails.telephone}`}
                            className='text-primary-foreground/80 hover:text-primary-foreground block'>
                            Téléphone: {footerDetails.telephone}
                        </a>
                    )}

                    {footerDetails.socials && (
                        <div className='mt-5 flex flex-wrap items-center gap-5'>
                            {Object.keys(footerDetails.socials).map((platformName) => {
                                if (platformName && footerDetails.socials[platformName]) {
                                    return (
                                        <Link
                                            href={footerDetails.socials[platformName] || ''}
                                            key={platformName}
                                            aria-label={platformName}
                                            className='text-primary-foreground/80 hover:text-primary-foreground'>
                                            {platformName}
                                        </Link>
                                    );
                                }
                            })}
                        </div>
                    )}
                </div>
            </div>
            <div className='border-primary-foreground/20 mx-auto mt-10 w-full max-w-7xl border-t px-6 pt-6'>
                <p className='text-primary-foreground/60 text-center text-sm'>
                    © {new Date().getFullYear()} {siteDetails.siteName}. Tous droits réservés.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
