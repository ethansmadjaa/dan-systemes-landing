'use client';

import React, { useState } from 'react';

import { useSearchParams } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { generateEmailTemplate } from '@/lib/emailTemplate';

import { toast } from 'sonner';

export type ContactFormVariant = 'default' | 'project';

const variantContent = {
    default: {
        title: 'Contactez-nous',
        subtitle: "Une question ? Un projet ? N'hésitez pas à nous contacter.",
        messagePlaceholder: 'Décrivez votre projet ou posez votre question...',
        messageTitle: 'Message',
        messageRequired: false
    },
    project: {
        title: 'Parlez-nous de votre projet',
        subtitle: 'Décrivez-nous votre projet et nous vous recontacterons rapidement.',
        messagePlaceholder: 'Décrivez votre projet : objectifs, contraintes, délais...',
        messageTitle: 'Parlez-nous de votre projet',
        messageRequired: true
    }
};

const ContactForm: React.FC = () => {
    const searchParams = useSearchParams();
    const source = searchParams.get('source');
    const variant: ContactFormVariant = source === 'project' ? 'project' : 'default';
    const content = variantContent[variant];
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const response = await fetch('/api/mail', {
            method: 'POST',
            body: JSON.stringify(formData)
        });

        setIsSubmitting(false);
        if (response.ok) {
            toast.success('Votre demande a été envoyée avec succès');
        } else {
            toast.error("Une erreur est survenue lors de l'envoi du message");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <section className='relative flex items-center justify-center px-5 py-16 md:py-24'>
            <div className='absolute top-0 bottom-0 left-0 -z-10 w-full'>
                <div className='bg-hero-background absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] bg-[size:40px_40px]'></div>
            </div>

            <div className='w-full max-w-lg'>
                <div className='mb-10 text-center'>
                    <h1 className='text-foreground text-3xl font-bold md:text-4xl'>{content.title}</h1>
                    <p className='text-muted-foreground mt-3'>{content.subtitle}</p>
                </div>
                {process.env.NODE_ENV === 'development' && (
                    <>
                        <div className='flex flex-col gap-4'>
                            <Button
                                onClick={() => {
                                    setFormData({
                                        name: 'John Doe',
                                        email: 'ethan@smadja.biz',
                                        phone: '1234567890',
                                        company: 'Example Inc.',
                                        message: 'Test message'
                                    });
                                }}>
                                Fill form
                            </Button>
                        </div>

                        <div
                            className='mt-4 rounded-lg border bg-white p-4'
                            dangerouslySetInnerHTML={{
                                __html: generateEmailTemplate({
                                    name: 'John Doe',
                                    email: 'ethan@smadja.biz',
                                    phone: '1234567890',
                                    company: 'Example Inc.',
                                    message: 'Test message'
                                })
                            }}
                        />
                    </>
                )}
                <div className='flex flex-col gap-4'></div>

                <form
                    onSubmit={handleSubmit}
                    className='bg-card/50 space-y-6 rounded-xl border p-6 shadow-sm backdrop-blur-sm md:p-8'>
                    <div className='space-y-2'>
                        <Label htmlFor='name'>
                            Nom <span className='text-destructive'>*</span>
                        </Label>
                        <Input
                            id='name'
                            name='name'
                            type='text'
                            placeholder='Votre nom'
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className='bg-white'
                        />
                    </div>

                    <div className='space-y-2'>
                        <Label htmlFor='email'>
                            Email <span className='text-destructive'>*</span>
                        </Label>
                        <Input
                            id='email'
                            name='email'
                            type='email'
                            placeholder='votre@email.com'
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className='bg-white'
                        />
                    </div>

                    <div className='space-y-2'>
                        <Label htmlFor='company'>
                            Nom de l&apos;entreprise <span className='text-destructive'>*</span>
                        </Label>
                        <Input
                            id='company'
                            name='company'
                            type='text'
                            placeholder='Votre entreprise'
                            required
                            value={formData.company}
                            onChange={handleChange}
                            className='bg-white'
                        />
                    </div>

                    <div className='space-y-2'>
                        <Label htmlFor='phone'>Téléphone (facultatif)</Label>
                        <Input
                            id='phone'
                            name='phone'
                            type='tel'
                            placeholder='06 12 34 56 78'
                            value={formData.phone}
                            onChange={handleChange}
                            className='bg-white'
                        />
                    </div>

                    <div className='space-y-2'>
                        <Label htmlFor='message'>
                            {content.messageTitle}{' '}
                            {content.messageRequired ? <span className='text-destructive'>*</span> : ''}
                        </Label>
                        <Textarea
                            id='message'
                            name='message'
                            placeholder={content.messagePlaceholder}
                            rows={5}
                            required={content.messageRequired}
                            value={formData.message}
                            onChange={handleChange}
                            className='bg-white'
                        />
                    </div>

                    <Button
                        type='submit'
                        disabled={isSubmitting}
                        className='bg-accent text-accent-foreground border-primary-dark hover:bg-accent/90 w-full rounded-lg border-2 py-6 text-lg font-semibold shadow-[0_4px_0_0_var(--primary-dark)] transition-all duration-150 hover:translate-y-[2px] hover:shadow-[0_2px_0_0_var(--primary-dark)] disabled:opacity-50'>
                        {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                    </Button>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
