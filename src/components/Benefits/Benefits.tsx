'use client';

import NextLink from 'next/link';

import { benefitsBullets, benefitsText } from '@/data/benefits';
import { Button } from '@headlessui/react';

import BenefitSection from './BenefitSection';

const Benefits: React.FC<{ variant: 'text' | 'bullets' }> = ({ variant }) => {
    const benefits = variant === 'text' ? benefitsText : benefitsBullets;

    return (
        <div id='mission'>
            <h2 className='sr-only'>Notre accompagnement</h2>
            {benefits.map((item, index) => {
                return (
                    <BenefitSection
                        key={index}
                        benefit={item}
                        imageAtRight={index % 2 !== 0}
                        isLast={index === benefits.length - 1}
                    />
                );
            })}

            <div className='flex justify-center'>
                <Button
                    as={NextLink}
                    href='/contact?source=project'
                    className='bg-accent text-accent-foreground border-primary-dark rounded-lg border-2 px-8 py-4 text-lg font-semibold shadow-[0_4px_0_0_var(--primary-dark)] transition-all duration-150 hover:translate-y-[2px] hover:shadow-[0_2px_0_0_var(--primary-dark)]'>
                    Un projet IT ? Parlons-en
                </Button>
            </div>
        </div>
    );
};

export default Benefits;
