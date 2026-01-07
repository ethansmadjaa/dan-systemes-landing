'use client';

import { benefitsBullets, benefitsText } from '@/data/benefits';

import BenefitSection from './BenefitSection';

const Benefits: React.FC<{ variant: 'text' | 'bullets' }> = ({ variant }) => {
    const benefits = variant === 'text' ? benefitsText : benefitsBullets;

    return (
        <div id='accompaniment'>
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
        </div>
    );
};

export default Benefits;
