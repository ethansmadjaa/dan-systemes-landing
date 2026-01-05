import { ReactNode } from 'react';

export interface IMenuItem {
    text: string;
    url: string;
    highlight?: boolean;
}

export interface IBenefit {
    title: string;
    description: string;
    imageSrc: string;
    bullets: IBenefitBullet[]
}

export interface IBenefitBullet {
    title: string;
    description: string;
    icon: ReactNode;
}

export interface IPricing {
    name: string;
    price: number;
    type: 'subscription' | 'one-time';
    credits: number;
    stories: number;
    description?: string;
    highlight?: boolean;
}

export interface IFAQ {
    question: string;
    answer: string;
}

export interface ITestimonial {
    name: string;
    role: string;
    message: string;
    avatar: string;
}

export interface IStats {
    title: string;
    icon: ReactNode;
    description: string;
}

export interface ISocials {
    facebook?: string;
    github?: string;
    instagram?: string;
    linkedin?: string;
    threads?: string;
    twitter?: string;
    youtube?: string;
    x?: string;
    [key: string]: string | undefined;
}

export interface IBlogPost {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    date: string;
    readTime: string;
    coverImage?: string;
    tags?: string[];
}


export interface ILogoCloud {
    url: string;
    name?: string;
    image?: string;
    svg?: string;
    alt: string;
}

export interface IService {
    title: string;
    description: string;
    icon: ReactNode;
    features?: string[];
    href?: string;
}
