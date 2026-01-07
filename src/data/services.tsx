import { IService } from '@/types';

import { Cloud, FileBox, Headphones, Monitor, Network, Shield } from 'lucide-react';

export const services: IService[] = [
    {
        title: 'Postes de travail & Mobilité',
        description:
            'Nous accompagnons nos clients dans le choix et le déploiement de postes de travail fiables et adaptés à leurs usages, en privilégiant des solutions pérennes et éprouvées.',
        icon: <Monitor size={32} />,
        features: [
            'Fourniture et préparation de PC portables et stations de travail',
            'Postes sécurisés pour la mobilité et le télétravail',
            'Standardisation et renouvellement de parcs informatiques'
        ]
    },
    {
        title: 'Solutions Cloud & Virtualisation',
        description:
            'Nous déployons des solutions cloud et de virtualisation simples, efficaces et adaptées aux besoins réels des entreprises, avec un objectif clair de performance et de continuité.',
        icon: <Cloud size={32} />,
        features: [
            'Migration vers des environnements cloud ou hybrides',
            'Virtualisation de serveurs et de postes de travail',
            'Solutions collaboratives hébergées'
        ]
    },
    {
        title: 'Cybersécurité',
        description:
            'La sécurité est intégrée dès la conception des projets. Nous mettons en place des protections adaptées pour sécuriser les données, les accès et les utilisateurs.',
        icon: <Shield size={32} />,
        features: [
            'Protection des postes et des accès distants',
            'Sécurisation des identités et des données',
            'Accompagnement aux bonnes pratiques de sécurité'
        ]
    },
    {
        title: 'Logiciels & Licences',
        description:
            'Nous conseillons et fournissons les licences logicielles les mieux adaptées aux usages, avec une approche transparente et maîtrisée des coûts.',
        icon: <FileBox size={32} />,
        features: [
            'Licences bureautiques et collaboratives',
            'Optimisation et suivi des abonnements',
            'Accompagnement sur les évolutions de licences'
        ]
    },
    {
        title: 'Services & Accompagnement',
        description:
            'Depuis plus de 20 ans, nous accompagnons nos clients avec proximité, écoute et expertise, en construisant des solutions durables et adaptées à leur organisation.',
        icon: <Headphones size={32} />,
        features: [
            'Conseil et accompagnement personnalisé',
            'Déploiement et mise en production',
            'Support et suivi dans la durée'
        ]
    },
    {
        title: 'Réseau & Infrastructure',
        description:
            'Nous concevons, déployons et maintenons des infrastructures réseau fiables et évolutives, adaptées aux besoins actuels et futurs des entreprises. Notre priorité : performance, sécurité et stabilité.',
        icon: <Network size={32} />,
        features: [
            'Mise en place et sécurisation de réseaux filaires et Wi-Fi',
            'Installation et configuration de serveurs et équipements réseau',
            'Optimisation et supervision des infrastructures existantes'
        ]
    }
];
