'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { X, Hamburger } from 'lucide-react';
import Image from 'next/image';

import Container from '@/components/Container';
import { siteDetails } from '@/data/siteDetails';
import { menuItems } from '@/data/menuItems';


const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuButtonPressed, setIsMenuButtonPressed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    return (
        <>
        <header
            className={`fixed top-0 left-0 right-0 z-50 mx-auto w-full transition-all duration-500 ease-in-out ${
                isScrolled ? 'backdrop-blur-md shadow-md' : ''
            }`}
        >
            {/* Background layers for smooth transition */}
            <div
                className="absolute inset-0 transition-opacity duration-500 ease-in-out"
                style={{
                    background: 'radial-gradient(ellipse at top left, var(--accent) 0%, var(--primary) 50%, var(--primary) 100%)',
                    opacity: isScrolled ? 0 : 1,
                }}
            />
            <div
                className="absolute inset-0 transition-opacity duration-500 ease-in-out"
                style={{
                    background: 'linear-gradient(to right, rgba(168, 200, 35, 0.5), rgba(12, 39, 96, 0.5))',
                    opacity: isScrolled ? 1 : 0,
                }}
            />
            <Container className="relative px-0">
                <nav className={`shadow-md md:shadow-none md:bg-transparent mx-auto flex justify-between items-center py-2 px-5 transition-all duration-500 ease-in-out ${
                        isScrolled ? 'md:py-2' : 'md:py-5'
                    }`}>
                    {/* Logo */}
                    <Link href={'/'} className="flex items-center gap-2 bg-white rounded-lg px-3 py-2">
                        <Image src={siteDetails.siteLogo} alt={siteDetails.siteName} width={120} height={50} />
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center space-x-6">
                        {menuItems.map(item => (
                            <li key={item.text}>
                                <Link href={item.url} className={`transition-colors ${isScrolled ? 'text-primary hover:text-accent' : 'text-primary-foreground hover:text-accent'} ${item.highlight ? 'font-semibold' : ''}`}>
                                    <span>{item.text}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            onMouseDown={() => setIsMenuButtonPressed(true)}
                            onMouseUp={() => setIsMenuButtonPressed(false)}
                            onMouseLeave={() => setIsMenuButtonPressed(false)}
                            onTouchStart={() => setIsMenuButtonPressed(true)}
                            onTouchEnd={() => setIsMenuButtonPressed(false)}
                            type="button"
                            className="bg-accent text-primary focus:outline-none rounded-2xl w-10 h-10 flex items-center justify-center border-2 border-primary-dark transition-transform duration-75 select-none"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                            style={{
                                boxShadow: isMenuButtonPressed
                                    ? 'none'
                                    : '0 4px 0 0 var(--primary-dark)',
                                transform: isMenuButtonPressed ? 'translateY(4px)' : 'translateY(0)',
                            }}
                        >
                            {isOpen ? (
                                <X className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Hamburger className="h-6 w-6" aria-hidden="true" />
                            )}
                            <span className="sr-only">Toggle navigation</span>
                        </button>
                    </div>
                </nav>
            </Container>

            {/* Mobile Menu with Transition */}
            <Transition
                show={isOpen}
                enter="transition ease-out duration-200 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <div id="mobile-menu" className="md:hidden bg-card shadow-lg">
                    <ul className="flex flex-col space-y-4 pt-1 pb-6 px-6">
                        {menuItems.map(item => (
                            <li key={item.text}>
                                <Link href={item.url} className="text-primary hover:text-accent block" onClick={toggleMenu}>
                                    {item.text}
                                </Link>
                            </li>
                        ))}

                        <li>
                            <Link href={'/contact'} className="text-primary hover:text-accent block" onClick={toggleMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </Transition>
        </header>
        {/* Spacer pour éviter que le contenu soit caché sous le header fixe */}
        <div className="h-16 md:h-24" />
        </>
    );
};

export default Header;
