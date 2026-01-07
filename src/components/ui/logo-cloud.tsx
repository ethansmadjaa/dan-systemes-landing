import Image from 'next/image';
import Link from 'next/link';

import { logoCloudCloud, logoCloudNetwork, logoCloudWorkstation } from '@/data/logoCloud';
import { cn } from '@/lib/utils';
import { ILogoCloud } from '@/types';

// Fonction de mélange Fisher-Yates avec seed pour consistance SSR
function shuffleArray<T>(array: T[], seed: number): T[] {
    const shuffled = [...array];
    let currentIndex = shuffled.length;
    let randomValue = seed;

    while (currentIndex !== 0) {
        // Générateur de nombres pseudo-aléatoires simple
        randomValue = (randomValue * 9301 + 49297) % 233280;
        const randomIndex = Math.floor((randomValue / 233280) * currentIndex);
        currentIndex--;

        [shuffled[currentIndex], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[currentIndex]];
    }

    return shuffled;
}

// Récupère tous les logos mélangés
function getAllLogosShuffled(): ILogoCloud[] {
    const allLogos = [...logoCloudWorkstation, ...logoCloudNetwork, ...logoCloudCloud];

    // Utilise une seed fixe pour éviter les problèmes d'hydratation SSR/client
    return shuffleArray(allLogos, 42);
}

interface LogoCloudProps {
    title?: string;
    subtitle?: string;
    logos?: ILogoCloud[];
    variant?: 'logo' | 'name' | 'all';
    className?: string;
}

const LogoCloud = ({ title, subtitle, logos, variant = 'logo', className }: LogoCloudProps) => {
    // Si variant === 'all', on récupère tous les logos mélangés
    const displayLogos = variant === 'all' ? getAllLogosShuffled() : logos || [];

    // Variante "all" avec défilement infini
    if (variant === 'all') {
        return (
            <section className={cn('relative w-full overflow-hidden py-12 md:py-16', className)}>
                <div className='container mx-auto px-4 md:px-6'>
                    {/* Header */}
                    {(title || subtitle) && (
                        <div className='mb-10 space-y-3 text-center'>
                            {title && <h2 className='text-primary text-xxl font-semibold md:text-2xl'>{title}</h2>}
                            {subtitle && <p className='text-muted-foreground text-sm md:text-base'>{subtitle}</p>}
                        </div>
                    )}
                </div>

                {/* Infinite scroll container */}
                <div className='relative'>
                    {/* Gradient masks */}
                    <div className='from-background pointer-events-none absolute top-0 left-0 z-10 h-full w-16 bg-linear-to-r to-transparent md:w-32' />
                    <div className='from-background pointer-events-none absolute top-0 right-0 z-10 h-full w-16 bg-linear-to-l to-transparent md:w-32' />

                    {/* Scrolling track */}
                    <div className='animate-scroll-slow flex w-max'>
                        {/* First set of logos */}
                        <div className='flex shrink-0 items-center gap-8 pr-8 md:gap-12 md:pr-12'>
                            {displayLogos.map((item, index) => (
                                <Link
                                    key={`first-${index}`}
                                    href={item.url}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    aria-label={`Visiter le site de ${item.name || item.alt}`}
                                    className='group flex shrink-0 items-center justify-center transition-opacity hover:opacity-100'>
                                    {item.svg ? (
                                        <div
                                            className='relative flex h-10 w-[120px] items-center justify-center opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 md:h-12 md:w-[150px] [&>svg]:max-h-full [&>svg]:max-w-full [&>svg]:object-contain'
                                            dangerouslySetInnerHTML={{ __html: item.svg }}
                                        />
                                    ) : item.image ? (
                                        <div className='relative h-10 w-[120px] opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 md:h-12 md:w-[150px]'>
                                            <Image src={item.image} alt={item.alt} fill className='object-contain' />
                                        </div>
                                    ) : (
                                        <span className='text-primary/70 group-hover:text-primary text-sm font-semibold transition-colors duration-300 md:text-lg'>
                                            {item.name || item.alt}
                                        </span>
                                    )}
                                </Link>
                            ))}
                        </div>
                        {/* Duplicate set for seamless loop */}
                        <div className='flex shrink-0 items-center gap-8 pr-8 md:gap-12 md:pr-12'>
                            {displayLogos.map((item, index) => (
                                <Link
                                    key={`second-${index}`}
                                    href={item.url}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    aria-label={`Visiter le site de ${item.name || item.alt}`}
                                    className='group flex shrink-0 items-center justify-center transition-opacity hover:opacity-100'>
                                    {item.svg ? (
                                        <div
                                            className='relative flex h-10 w-[120px] items-center justify-center opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 md:h-12 md:w-[150px] [&>svg]:max-h-full [&>svg]:max-w-full [&>svg]:object-contain'
                                            dangerouslySetInnerHTML={{ __html: item.svg }}
                                        />
                                    ) : item.image ? (
                                        <div className='relative h-10 w-[120px] opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 md:h-12 md:w-[150px]'>
                                            <Image src={item.image} alt={item.alt} fill className='object-contain' />
                                        </div>
                                    ) : (
                                        <span className='text-primary/70 group-hover:text-primary text-sm font-semibold transition-colors duration-300 md:text-lg'>
                                            {item.name || item.alt}
                                        </span>
                                    )}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    // Variantes 'logo' et 'name' originales
    return (
        <section className={cn('relative w-full py-12 md:py-16', className)}>
            <div className='container mx-auto px-4 md:px-6'>
                <div className='mx-auto max-w-5xl'>
                    {/* Header */}
                    {(title || subtitle) && (
                        <div className='mb-10 space-y-3 text-center'>
                            {title && <h2 className='text-primary text-xl font-semibold md:text-2xl'>{title}</h2>}
                            {subtitle && <p className='text-muted-foreground text-sm md:text-base'>{subtitle}</p>}
                        </div>
                    )}

                    {/* Logo Grid */}
                    <div className='relative w-full'>
                        <div className='flex w-full items-center justify-between gap-2 md:gap-4'>
                            {displayLogos.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.url}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    aria-label={`Visiter le site de ${item.name || item.alt}`}
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
