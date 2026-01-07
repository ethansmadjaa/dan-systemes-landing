import { IMenuItem, ISocials } from '@/types';

import { siteDetails } from './siteDetails';

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone?: string;
    socials: ISocials;
} = {
    subheading: siteDetails.metadata.description,
    quickLinks: [],
    email: 'info@dansystemes.com',
    socials: {}
};
