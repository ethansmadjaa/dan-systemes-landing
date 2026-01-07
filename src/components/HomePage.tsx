import React from 'react';

import Link from 'next/link';

import About from '@/components/About';
import Benefits from '@/components/Benefits/Benefits';
import FAQ from '@/components/FAQ';
import { HomePageJsonLd } from '@/components/JsonLd';
import { Button } from '@/components/ui/button';
import { logoCloudCloud, logoCloudNetwork, logoCloudWorkstation } from '@/data/logoCloud';

import Hero from './Hero';
import Services from './Services';
import LogoCloud from './ui/logo-cloud';

const HomePage: React.FC = () => {
    return (
        <>
            <HomePageJsonLd />
            <div>
                <Hero />
                <LogoCloud variant='all' />
                <Services />
                <LogoCloud
                    logos={logoCloudCloud}
                    title='Cloud & logiciels'
                    subtitle='Nous proposons une gamme complète de solutions de cloud et de logiciels pour votre entreprise.'
                />
                <div className='flex justify-center pb-10'>
                    <Button asChild variant='accent' size='xl'>
                        <Link href='/contact?source=project'>Échangeons sur vos besoins</Link>
                    </Button>
                </div>

                <About />

                <Benefits variant='bullets' />

                <FAQ />
            </div>
        </>
    );
};

export default HomePage;
