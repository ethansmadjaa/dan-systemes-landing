import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { ILogoCloud } from '@/types';

interface LogoCloudProps {
    title?: string;
    subtitle?: string;
    logos: ILogoCloud[];
    variant?: 'logo' | 'name';
    className?: string;
}

const LogoCloud = ({ title, subtitle, logos, variant = 'logo', className }: LogoCloudProps) => {
    return (
        <section className={cn('relative w-full py-12 md:py-16', className)}>
            <div className='container mx-auto px-4 md:px-6'>
                <div className='mx-auto max-w-5xl'>
                    {/* Header */}
                    {(title || subtitle) && (
                        <div className='mb-10 space-y-3 text-center'>
                            {title && <h3 className='text-primary text-xl font-semibold md:text-2xl'>{title}</h3>}
                            {subtitle && <p className='text-muted-foreground text-sm md:text-base'>{subtitle}</p>}
                        </div>
                    )}

                    {/* Logo Grid */}
                    <div className='relative w-full'>
                        <div className='flex w-full items-center justify-between gap-2 md:gap-4'>
                            {logos.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.url}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='group flex min-w-0 flex-1 items-center justify-center transition-opacity hover:opacity-100'>
                                    {variant === 'logo' && item.svg ? (
                                        <div
                                            className='relative flex h-8 w-full max-w-[100px] items-center justify-center opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 sm:h-10 sm:max-w-[120px] md:h-12 md:max-w-[140px] [&>svg]:max-h-full [&>svg]:max-w-full [&>svg]:object-contain'
                                            dangerouslySetInnerHTML={{ __html: item.svg }}
                                        />
                                    ) : variant === 'logo' && item.image ? (
                                        <div className='relative h-8 w-full max-w-[100px] opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 sm:h-10 sm:max-w-[120px] md:h-12 md:max-w-[140px]'>
                                            <Image src={item.image} alt={item.alt} fill className='object-contain' />
                                        </div>
                                    ) : (
                                        <span className='text-primary/70 group-hover:text-primary truncate text-sm font-semibold transition-colors duration-300 sm:text-base md:text-lg lg:text-xl'>
                                            {item.name || item.alt}
                                        </span>
                                    )}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LogoCloud;
