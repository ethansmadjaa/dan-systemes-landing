import React from 'react';
import { Building2, Users, Award, Clock } from 'lucide-react';

import Container from '@/components/Container';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const highlights = [
    {
        icon: Clock,
        value: '2003',
        label: 'Année de création',
    },
    {
        icon: Award,
        value: '20+',
        label: "Années d'expérience",
    },
    {
        icon: Users,
        value: 'PME',
        label: 'Entreprise à taille humaine',
    },
    {
        icon: Building2,
        value: 'IT',
        label: 'Solutions sur mesure',
    },
];

const About: React.FC = () => {
    return (
        <section id="about" className="bg-muted/50 py-20 md:py-28">
            <Container>
                <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
                    {/* Left side - Content */}
                    <div className="flex-1 space-y-6">
                        <div className="space-y-4">
                            <Badge
                                variant="secondary"
                                className="bg-accent/20 text-accent-foreground border-accent/30 px-4 py-1.5 text-sm font-medium"
                            >
                                À propos de nous
                            </Badge>
                            <h2 className="text-primary text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                                Votre partenaire IT
                                <span className="text-accent"> depuis 2003</span>
                            </h2>
                        </div>

                        <Separator className="bg-accent/30 my-6 w-24" />

                        <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
                            Fondée en 2003,{' '}
                            <span className="text-primary font-semibold">Dan Systèmes</span> est une
                            entreprise à taille humaine spécialisée dans la revente et
                            l&apos;intégration de solutions IT.
                        </p>

                        <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
                            Depuis plus de deux décennies, nous accompagnons nos clients avec un
                            souci constant de <span className="text-accent font-medium">performance</span>,
                            d&apos;<span className="text-accent font-medium">innovation</span> et de{' '}
                            <span className="text-accent font-medium">satisfaction</span>.
                        </p>

                        <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
                            Notre dimension humaine est un véritable atout pour offrir un service
                            personnalisé et cultiver une relation de confiance. Traverser toutes ces
                            années en évoluant avec les besoins du marché est pour nous un gage de
                            sérieux et de fiabilité.
                        </p>
                    </div>

                    {/* Right side - Stats cards */}
                    <div className="w-full shrink-0 lg:w-auto">
                        <Card className="border-primary/10 bg-white shadow-lg">
                            <CardContent className="p-8">
                                <div className="grid grid-cols-2 gap-6">
                                    {highlights.map((item, index) => (
                                        <div
                                            key={index}
                                            className="group flex flex-col items-center rounded-xl p-4 text-center transition-colors hover:bg-muted/50"
                                        >
                                            <div className="bg-accent/10 group-hover:bg-accent/20 mb-3 rounded-full p-3 transition-colors">
                                                <item.icon className="text-accent h-6 w-6" />
                                            </div>
                                            <span className="text-primary text-2xl font-bold">
                                                {item.value}
                                            </span>
                                            <span className="text-muted-foreground text-sm">
                                                {item.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default About;
