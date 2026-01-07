'use client';

import React from 'react';

import NextLink from 'next/link';

import { heroDetails } from '@/data/hero';
import { Button } from '@headlessui/react';

const Hero: React.FC = () => {
    return (
        <section id='hero' className='relative flex items-center justify-center px-5 pt-32 pb-0 md:pt-40'>
            <div className='absolute top-0 bottom-0 left-0 -z-10 w-full'>
                <div className='bg-hero-background absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] bg-[size:40px_40px]'></div>
            </div>

            <div className='bg-linear-gradient(to bottom, transparent, rgba(233,238,255,0.5), rgba(202,208,230,0.5)) absolute right-0 bottom-0 left-0 h-40 backdrop-blur-[2px]'></div>

            <div className='relative z-10 pb-10 text-center'>
                <h1
                    className='text-primary mx-auto max-w-2xl text-4xl font-bold md:max-w-4xl md:text-6xl md:leading-tight'
                    dangerouslySetInnerHTML={{ __html: heroDetails.heading }}
                />
                <p className='text-foreground mx-auto mt-4 max-w-xl md:max-w-2xl'>{heroDetails.subheading}</p>
                <div className='mx-auto mt-6 flex w-fit flex-col items-center sm:flex-row sm:gap-4'>
                    <Button
                        as={NextLink}
                        href='/contact?source=project'
                        className='bg-accent text-accent-foreground border-primary-dark rounded-lg border-2 px-8 py-4 text-lg font-semibold shadow-[0_4px_0_0_var(--primary-dark)] transition-all duration-150 hover:translate-y-[2px] hover:shadow-[0_2px_0_0_var(--primary-dark)]'>
                        Parlez nous de votre projet
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
