import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import Container from '@/components/Container';
import { Badge } from '@/components/ui/badge';
import { services } from '@/data/services';

const Services: React.FC = () => {
    return (
        <section id="services" className="py-20 md:py-28">
            <Container>
                <div className="text-center mb-16">
                    <Badge
                        variant="secondary"
                        className="bg-accent/20 text-accent-foreground border-accent/30 px-4 py-1.5 text-sm font-medium mb-4"
                    >
                        Nos Services
                    </Badge>
                    <h2 className="text-primary text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                        Des solutions IT <span className="text-accent">complètes</span>
                    </h2>
                    <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
                        Nous vous accompagnons sur l&apos;ensemble de vos besoins informatiques
                    </p>
                </div>

                {/* First row - 3 items */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                    {services.slice(0, 3).map((service, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-2xl p-8 border border-primary/10 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10"
                        >
                            {/* Icon */}
                            <div className="bg-primary/5 group-hover:bg-accent/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                                <div className="text-primary group-hover:text-accent transition-colors duration-300">
                                    {service.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-primary text-xl font-bold mb-3">
                                {service.title}
                            </h3>
                            <p className="text-muted-foreground mb-4">
                                {service.description}
                            </p>

                            {/* Features list */}
                            {service.features && service.features.length > 0 && (
                                <ul className="space-y-2 mb-6">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {/* Link */}
                            {service.href && (
                                <Link
                                    href={service.href}
                                    className="inline-flex items-center gap-2 text-primary font-medium group-hover:text-accent transition-colors"
                                >
                                    En savoir plus
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            )}

                            {/* Decorative corner */}
                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent/10 to-transparent rounded-tr-2xl rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    ))}
                </div>

                {/* Second row - 2 items full width */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.slice(3).map((service, index) => (
                        <div
                            key={index + 3}
                            className="group relative bg-white rounded-2xl p-8 border border-primary/10 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10"
                        >
                            {/* Icon */}
                            <div className="bg-primary/5 group-hover:bg-accent/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                                <div className="text-primary group-hover:text-accent transition-colors duration-300">
                                    {service.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-primary text-xl font-bold mb-3">
                                {service.title}
                            </h3>
                            <p className="text-muted-foreground mb-4">
                                {service.description}
                            </p>

                            {/* Features list */}
                            {service.features && service.features.length > 0 && (
                                <ul className="space-y-2 mb-6">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {/* Link */}
                            {service.href && (
                                <Link
                                    href={service.href}
                                    className="inline-flex items-center gap-2 text-primary font-medium group-hover:text-accent transition-colors"
                                >
                                    En savoir plus
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            )}

                            {/* Decorative corner */}
                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent/10 to-transparent rounded-tr-2xl rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Services;
