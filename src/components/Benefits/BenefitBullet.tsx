import { IBenefitBullet } from '@/types';

import { childVariants } from './BenefitSection';
import { Variants, motion } from 'framer-motion';

const BenefitBullet: React.FC<IBenefitBullet> = ({ title, description, icon }: IBenefitBullet) => {
    return (
        <motion.div
            className='mt-8 flex flex-col items-center gap-3 lg:flex-row lg:items-start lg:gap-5'
            variants={childVariants as Variants}>
            <div className='mx-auto mt-3 flex w-fit shrink-0 justify-center lg:mx-0'>{icon}</div>
            <div>
                <p className='text-lg font-semibold'>{title}</p>
                <p className='text-foreground-accent text-base'>{description}</p>
            </div>
        </motion.div>
    );
};

export default BenefitBullet;
