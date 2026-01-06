import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Toaster } from '@/components/ui/sonner';
import { metadata as siteMetadata } from '@/lib/metadata';
import { Analytics } from '@vercel/analytics/next';

import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin']
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin']
});

export const metadata: Metadata = siteMetadata;

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#0c2760'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='fr' className='h-full'>
            <body className={`${geistSans.variable} ${geistMono.variable} flex min-h-full flex-col antialiased`}>
                <Header />
                <main className='flex-1 pt-20 md:pt-28'>{children}</main>
                <Footer />
                <Toaster />
            </body>
            <Analytics />
        </html>
    );
}
