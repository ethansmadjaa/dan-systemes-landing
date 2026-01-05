import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `Qui est ${siteDetails.siteName} ?`,
        answer: `${siteDetails.siteName} est une entreprise spécialisée dans la revente et l’intégration de solutions IT pour les entreprises. Nous accompagnons nos clients dans leurs projets d’infrastructure, de cloud, de cybersécurité, de matériel et de logiciels professionnels.`,
    },
    {
        question: `À quels types d’entreprises vous adressez-vous ?`,
        answer: `Nous accompagnons principalement les PME et les ETI, tous secteurs confondus, en leur proposant des solutions IT adaptées à leurs enjeux métiers, à leur taille et à leur budget.`,
    },
    {
        question: `Êtes-vous un revendeur multi-constructeurs ?`,
        answer: `Oui. En tant que revendeur IT via un canal de distribution indirect, nous avons accès à l’ensemble des principaux constructeurs hardware et éditeurs software du marché, ce qui garantit des recommandations neutres et objectives.`,
    },
    {
        question: `Quels types de solutions IT proposez-vous ?`,
        answer: `Nous proposons des solutions complètes couvrant l’infrastructure IT, le cloud, la cybersécurité, les réseaux, les postes de travail, les serveurs, le stockage ainsi que les logiciels professionnels.`,
    },
    {
        question: `Proposez-vous un accompagnement personnalisé ?`,
        answer: `Oui. Chaque projet débute par une analyse approfondie de vos besoins afin de concevoir une solution sur mesure, alignée avec vos usages, vos contraintes techniques et vos objectifs business.`,
    },
    {
        question: `Intervenez-vous uniquement lors de l’achat de matériel ou de logiciels ?`,
        answer: `Non. Nous intervenons à chaque étape de votre projet IT : conseil, choix des solutions, intégration, déploiement et accompagnement, afin de garantir la performance et la pérennité de votre système d’information.`,
    },
    {
        question: `Pourquoi choisir ${siteDetails.siteName} comme partenaire IT ?`,
        answer: `Notre expertise, notre indépendance vis-à-vis des constructeurs et notre approche orientée performance nous permettent de proposer des solutions fiables, durables et optimisées, tout en conservant une relation de proximité avec nos clients.`,
    },
    {
        question: `Comment contacter ${siteDetails.siteName} pour un projet IT ?`,
        answer: `Vous pouvez nous contacter directement via la page Contact du site afin d’échanger avec nos équipes et étudier ensemble votre projet IT.`,
    }
];
