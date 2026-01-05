'use client';

import { benefitsText, benefitsBullets } from "@/data/benefits";
import BenefitSection from "./BenefitSection"

const Benefits: React.FC<{  variant: 'text' | 'bullets' }> = ({ variant }) => {
    const benefits = variant === 'text' ? benefitsText : benefitsBullets;

    return (
        <div id="features">
            <h2 className="sr-only">Notre Positionnement</h2>
            {benefits.map((item, index) => {
                return <BenefitSection key={index} benefit={item} imageAtRight={index % 2 !== 0} isLast={index === benefits.length - 1} />
            })}
        </div>
    )
}

export default Benefits
