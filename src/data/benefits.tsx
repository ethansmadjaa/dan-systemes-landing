import { IBenefit } from '@/types';

import { BarChart3, Cpu, Handshake, Headphones, Package, Scale, Target, TrendingUp, Users } from 'lucide-react';

// VARIANTE 1: Textes complets
export const benefitsText: IBenefit[] = [
    {
        title: 'Notre Positionnement',
        description:
            "Nous plaçons la performance, la durabilité et l'innovation au cœur de notre positionnement afin de renforcer la compétitivité de nos clients. En tant que revendeur IT s'appuyant sur un canal de distribution indirect, nous avons accès à l'ensemble des constructeurs hardware et software du marché, ce qui nous permet de proposer des solutions innovantes, rentables et parfaitement adaptées à des décisions stratégiques et pérennes.",
        bullets: [],
        imageSrc: '/images/benefits/1.jpg'
    },
    {
        title: 'Notre Accompagnement',
        description:
            'La bonne solution, pour le bon usage, au juste prix. Grâce à une écoute attentive et à notre expertise du marché, nous vous orientons vers les plateformes et technologies les plus adaptées à vos besoins.',
        bullets: [],
        imageSrc: '/images/benefits/3.jpg'
    },
    {
        title: 'Notre Offre',
        description:
            'Des offres transparentes, au juste prix. Nous comparons des solutions équivalentes et mettons en concurrence les constructeurs afin de garantir le meilleur rapport qualité-prix, en parfaite adéquation avec vos exigences.',
        bullets: [],
        imageSrc: '/images/benefits/2.jpg'
    }
];

// VARIANTE 2: Avec bullet points
export const benefitsBullets: IBenefit[] = [
    {
        title: 'Notre Positionnement',
        description: 'Performance, durabilité et innovation au service de votre compétitivité.',
        bullets: [
            {
                title: 'Performance & Innovation',
                description: 'Des solutions innovantes et rentables pour renforcer votre compétitivité',
                icon: <TrendingUp size={26} />
            },
            {
                title: 'Accès Multi-Constructeurs',
                description:
                    'Canal de distribution indirect donnant accès à tous les constructeurs hardware et software',
                icon: <Cpu size={26} />
            },
            {
                title: 'Décisions Stratégiques',
                description: 'Solutions parfaitement adaptées pour des choix pérennes et durables',
                icon: <Target size={26} />
            }
        ],
        imageSrc: '/images/benefits/1.jpg'
    },
    {
        title: 'Notre Accompagnement',
        description: 'La bonne solution, pour le bon usage, au juste prix.',
        bullets: [
            {
                title: 'Écoute Attentive',
                description: 'Compréhension approfondie de vos besoins et enjeux métier',
                icon: <Headphones size={26} />
            },
            {
                title: 'Expertise Marché',
                description: 'Connaissance pointue des plateformes et technologies disponibles',
                icon: <Users size={26} />
            },
            {
                title: 'Conseil Personnalisé',
                description: 'Orientation vers les solutions les plus adaptées à vos besoins spécifiques',
                icon: <Handshake size={26} />
            }
        ],
        imageSrc: '/images/benefits/3.jpg'
    },
    {
        title: 'Notre Offre',
        description: 'Des offres transparentes, au juste prix.',
        bullets: [
            {
                title: 'Transparence Totale',
                description: 'Comparaison claire de solutions équivalentes sur le marché',
                icon: <BarChart3 size={26} />
            },
            {
                title: 'Mise en Concurrence',
                description: 'Négociation auprès des constructeurs pour le meilleur tarif',
                icon: <Scale size={26} />
            },
            {
                title: 'Rapport Qualité-Prix',
                description: "Garantie d'une adéquation parfaite avec vos exigences et votre budget",
                icon: <Package size={26} />
            }
        ],
        imageSrc: '/images/benefits/2.jpg'
    }
];
