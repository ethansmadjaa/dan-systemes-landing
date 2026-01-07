import { IMenuItem, ISocials } from '@/types';

import { footerMenuItems } from './menuItems';
import { siteDetails } from './siteDetails';

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone?: string;
    socials: ISocials;
} = {
    subheading: siteDetails.metadata.description,
    quickLinks: footerMenuItems,
    email: 'info@dansystemes.com',
    socials: {}
};
