'use client';

import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const ContactPage: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        company: '',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // TODO: Implement email sending logic
        // - Use a service like Resend, SendGrid, or Nodemailer
        // - Create an API route in /api/contact
        // - Send formData to the API route
        console.log('Form submitted:', formData);

        // Simulate submission delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setIsSubmitting(false);
        // TODO: Show success/error toast notification
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
                    <h1 className='text-foreground text-3xl font-bold md:text-4xl'>Contactez-nous</h1>
                    <p className='text-muted-foreground mt-3'>
                        Une question ? Un projet ? N&apos;hésitez pas à nous contacter.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className='bg-card/50 space-y-6 rounded-xl border p-6 shadow-sm backdrop-blur-sm md:p-8'>
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
                        <Label htmlFor='message'>Message (facultatif)</Label>
                        <Textarea
                            id='message'
                            name='message'
                            placeholder='Décrivez votre projet ou posez votre question...'
                            rows={5}
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

export default ContactPage;
