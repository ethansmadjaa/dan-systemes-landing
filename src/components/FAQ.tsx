'use client';
import { faqs } from '@/data/faq';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';

import SectionTitle from './SectionTitle';
import { Minus, Plus } from 'lucide-react';

const FAQ: React.FC = () => {
    return (
        <section id='faq' className='py-10 lg:py-20'>
            <div className='flex flex-col gap-10 pl-4 lg:flex-row lg:pl-10'>
                <div className=''>
                    <p className='text-primary hidden font-semibold lg:block'>FAQ</p>
                    <SectionTitle>
                        <h2 className='my-3 text-center leading-snug! lg:max-w-sm lg:text-left'>
                            Questions Fréquentes
                        </h2>
                    </SectionTitle>
                    <p className='text-primary text-center lg:mt-10 lg:text-left'>
                        Trouvez les réponses à vos questions ici
                    </p>
                    <a
                        href='mailto:info@dansystemes.com'
                        className='text-primary mt-3 block text-center text-xl font-semibold hover:underline lg:text-left lg:text-4xl'>
                        info@dansystemes.com
                    </a>
                </div>

                <div className='border-secondary mx-auto w-full border-b lg:max-w-2xl'>
                    {faqs.map((faq, index) => (
                        <div key={index} className='mb-7'>
                            <Disclosure>
                                {({ open }) => (
                                    <>
                                        <DisclosureButton className='border-secondary flex w-full items-center justify-between border-t px-4 pt-7 text-left text-lg'>
                                            <span className='text-foreground text-2xl font-semibold'>
                                                {faq.question}
                                            </span>
                                            {open ? (
                                                <Minus className='text-secondary h-6 w-6' />
                                            ) : (
                                                <Plus className='text-primary h-6 w-6' />
                                            )}
                                        </DisclosureButton>
                                        <DisclosurePanel className='text-foreground-accent px-4 pt-4 pb-2'>
                                            {faq.answer}
                                        </DisclosurePanel>
                                    </>
                                )}
                            </Disclosure>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
