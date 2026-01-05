import React from 'react';

import About from '@/components/About';
import Benefits from '@/components/Benefits/Benefits';
import FAQ from '@/components/FAQ';
import { logoCloudCloud, logoCloudNetwork, logoCloudWorkstation } from '@/data/logoCloud';

import Hero from './Hero';
import Services from './Services';
import LogoCloud from './ui/logo-cloud';

const HomePage: React.FC = () => {
    return (
        <div>
            <Hero />
            <LogoCloud logos={logoCloudWorkstation} />
            <About />

            <Benefits variant='bullets' />
            <LogoCloud
                logos={logoCloudNetwork}
                title='Réseau, sécurité & infrastructure'
                subtitle="Nous proposons une gamme complète de solutions de réseau, de sécurité et d'infrastructure pour votre entreprise."
            />
            <Services />
            <LogoCloud
                logos={logoCloudCloud}
                title='Cloud & logiciels'
                subtitle='Nous proposons une gamme complète de solutions de cloud et de logiciels pour votre entreprise.'
            />
            <FAQ />
        </div>
    );
};

export default HomePage;
