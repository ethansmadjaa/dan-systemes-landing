import { IStats } from '@/types';

import { BarChart, Globe, Star } from 'lucide-react';

export const stats: IStats[] = [
    {
        title: '500K+',
        icon: <BarChart size={34} className='text-blue-500' />,
        description: 'Stories created and enjoyed by families turning screen time into creativity.'
    },
    {
        title: '5.0',
        icon: <Star size={34} className='text-yellow-500' />,
        description: 'Average rating from parents who value meaningful and positive screen time.'
    },
    {
        title: '30+',
        icon: <Globe size={34} className='text-green-600' />,
        description: 'Countries where families use Dansystemes to build stories and share magical moments.'
    }
];
