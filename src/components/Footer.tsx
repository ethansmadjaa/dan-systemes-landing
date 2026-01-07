'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { footerDetails } from '@/data/footer';
import { menuItems } from '@/data/menuItems';
import { siteDetails } from '@/data/siteDetails';

const Footer: React.FC = () => {
    return (
        <footer
            role='contentinfo'
            aria-label='Pied de page'
            className='text-primary-foreground py-10'
            style={{
                background:
                    'radial-gradient(ellipse at top left, var(--accent) 0%, var(--primary) 50%, var(--primary) 100%)'
            }}>
            <div className='mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-3'>
                <div>
                    <Link
                        href='/'
                        className='mb-4 flex w-fit flex-col items-start'
                        aria-label="Dan Systèmes - Retour à l'accueil">
                        <Image src={siteDetails.siteLogo} alt={siteDetails.siteName} width={180} height={75} />
                        <span className='text-primary-foreground -mt-2 text-xs italic'>
                            Votre partenaire IT depuis 2003
                        </span>
                    </Link>
                    <p className='text-primary-foreground/80 text-sm'>{siteDetails.metadata.description}</p>
                </div>
                <div>
                    <p className='mb-4 text-base font-semibold'>Liens rapides</p>
                    <ul className='text-primary-foreground/80 text-sm' role='list' aria-label='Liens rapides'>
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
                    <p className='mb-4 text-base font-semibold'>Contact</p>

                    {footerDetails.email && (
                        <a
                            href={`mailto:${footerDetails.email}`}
                            className='text-primary-foreground/80 hover:text-primary-foreground block text-sm'
                            aria-label={`Envoyer un email à ${footerDetails.email}`}>
                            Email: {footerDetails.email}
                        </a>
                    )}

                    {footerDetails.telephone && (
                        <a
                            href={`tel:${footerDetails.telephone}`}
                            className='text-primary-foreground/80 hover:text-primary-foreground block text-sm'
                            aria-label={`Appeler le ${footerDetails.telephone}`}>
                            Téléphone: {footerDetails.telephone}
                        </a>
                    )}

                    <div className='justify-left flex pt-8'>
                        <Button asChild variant='accent' size='lg'>
                            <Link href='/contact?source=project'>Un projet IT ? Parlons-en</Link>
                        </Button>
                    </div>

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
