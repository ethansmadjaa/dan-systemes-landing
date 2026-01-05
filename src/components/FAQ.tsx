"use client"
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Minus, Plus } from "lucide-react";

import SectionTitle from "./SectionTitle";
import { faqs } from "@/data/faq";

const FAQ: React.FC = () => {

    return (
        <section id="faq" className="py-10 lg:py-20">
            <div className="flex flex-col lg:flex-row gap-10 pl-4 lg:pl-10">
                <div className="">
                    <p className="hidden lg:block text-primary font-semibold">FAQ</p>
                    <SectionTitle>
                        <h2 className="my-3 leading-snug! lg:max-w-sm text-center lg:text-left">Questions Fréquentes</h2>
                    </SectionTitle>
                    <p className="lg:mt-10 text-primary text-center lg:text-left">
                        Trouvez les réponses à vos questions ici
                    </p>
                    <a href="mailto:armand@dansystemes.com" className="mt-3 block text-xl lg:text-4xl text-primary font-semibold hover:underline text-center lg:text-left">armand@dansystemes.com</a>
                </div>

                <div className="w-full lg:max-w-2xl mx-auto border-b border-secondary">
                    {faqs.map((faq, index) => (
                        <div key={index} className="mb-7">
                            <Disclosure>
                                {({ open }) => (
                                    <>
                                        <DisclosureButton className="flex items-center justify-between w-full px-4 pt-7 text-lg text-left border-t border-secondary">
                                                <span className="text-2xl font-semibold text-foreground">{faq.question}</span>
                                                {open ? <Minus className="w-6 h-6 text-secondary" /> : <Plus className="w-6 h-6 text-primary" />}
                                        </DisclosureButton>
                                        <DisclosurePanel className="px-4 pt-4 pb-2 text-foreground-accent">
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
