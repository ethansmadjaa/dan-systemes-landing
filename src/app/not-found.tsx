import Link from 'next/link';

export default function NotFound() {
    return (
        <section className='flex min-h-[60vh] flex-col items-center justify-center px-4 text-center'>
            <h1 className='text-primary mb-4 text-6xl font-bold'>404</h1>
            <h2 className='text-foreground mb-4 text-2xl font-semibold'>Page introuvable</h2>
            <p className='text-muted-foreground mb-8 max-w-md'>
                Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée.
            </p>
            <Link
                href='/'
                className='bg-accent text-accent-foreground hover:bg-accent/90 focus:ring-accent inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none'
                aria-label="Retourner à la page d'accueil">
                Retour à l&apos;accueil
            </Link>
        </section>
    );
}
