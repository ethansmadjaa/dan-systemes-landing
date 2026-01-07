import React from 'react';

import Link from 'next/link';

import Container from '@/components/Container';
import { Badge } from '@/components/ui/badge';
import { logoCloudNetwork } from '@/data/logoCloud';
import { services } from '@/data/services';

import LogoCloud from './ui/logo-cloud';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
    return (
        <section id='expertise' className='py-20 md:py-28'>
            <Container>
                <div className='mb-16 text-center'>
                    <Badge
                        variant='secondary'
                        className='bg-accent/20 text-accent-foreground border-accent/30 mb-4 px-4 py-1.5 text-sm font-medium'>
                        Notre expertise
                    </Badge>
                    <h2 className='text-primary text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl'>
                        Une offre IT <span className='text-accent'>complète</span>
                    </h2>
                    <p className='text-muted-foreground mx-auto mt-4 max-w-2xl text-lg'>
                        Nous vous accompagnons sur l&apos;ensemble de vos besoins informatiques
                    </p>
                    <LogoCloud logos={logoCloudNetwork} />
                </div>



                {/* Services grid - 2 rows of 3 */}
                <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className='group border-primary/10 hover:border-accent/50 hover:shadow-accent/10 relative rounded-2xl border bg-white p-8 transition-all duration-300 hover:shadow-xl'>
                            {/* Icon */}
                            <div className='bg-primary/5 group-hover:bg-accent/20 mb-6 flex h-16 w-16 items-center justify-center rounded-xl transition-colors duration-300'>
                                <div className='text-primary group-hover:text-accent transition-colors duration-300'>
                                    {service.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className='text-primary mb-3 text-xl font-bold'>{service.title}</h3>
                            <p className='text-muted-foreground mb-4'>{service.description}</p>

                            {/* Features list */}
                            {service.features && service.features.length > 0 && (
                                <ul className='mb-6 space-y-2'>
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className='text-muted-foreground flex items-center gap-2 text-sm'>
                                            <span className='bg-accent h-1.5 w-1.5 rounded-full' />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {/* Link */}
                            {service.href && (
                                <Link
                                    href={service.href}
                                    className='text-primary group-hover:text-accent inline-flex items-center gap-2 font-medium transition-colors'>
                                    En savoir plus
                                    <ArrowRight size={16} className='transition-transform group-hover:translate-x-1' />
                                </Link>
                            )}

                            {/* Decorative corner */}
                            <div className='from-accent/10 absolute top-0 right-0 h-20 w-20 rounded-tr-2xl rounded-bl-[100px] bg-gradient-to-bl to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Services;
