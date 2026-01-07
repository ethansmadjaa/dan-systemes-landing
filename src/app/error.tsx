'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <section className='flex min-h-[60vh] flex-col items-center justify-center px-4 text-center'>
            <h1 className='text-primary mb-4 text-4xl font-bold'>Une erreur est survenue</h1>
            <p className='text-muted-foreground mb-8 max-w-md'>
                Désolé, quelque chose s&apos;est mal passé. Veuillez réessayer.
            </p>
            <button
                onClick={reset}
                className='bg-accent text-accent-foreground hover:bg-accent/90 focus:ring-accent inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none'
                aria-label='Réessayer de charger la page'>
                Réessayer
            </button>
        </section>
    );
}
