import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Toaster } from '@/components/ui/sonner';
import { metadata as siteMetadata } from '@/lib/metadata';

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
        <html lang='fr'>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <Header />
                <main>{children}</main>
                <Footer />
                <Toaster />
            </body>
        </html>
    );
}
