import { IService } from '@/types';

import { Cloud, FileBox, Headphones, Monitor, Server, Shield } from 'lucide-react';

export const services: IService[] = [
    {
        title: 'Postes de travail & Mobilité',
        description: 'À remplir',
        icon: <Monitor size={32} />,
        features: []
    },
    {
        title: 'Solutions Cloud & Virtualisation',
        description: 'À remplir',
        icon: <Cloud size={32} />,
        features: []
    },
    {
        title: 'Cybersécurité',
        description: 'À remplir',
        icon: <Shield size={32} />,
        features: []
    },
    {
        title: 'Logiciels & Licences',
        description: 'À remplir',
        icon: <FileBox size={32} />,
        features: []
    },
    {
        title: 'Services & Accompagnement',
        description: 'À remplir',
        icon: <Headphones size={32} />,
        features: []
    }
];
