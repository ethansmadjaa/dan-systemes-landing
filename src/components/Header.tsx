'use client';

import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Container from '@/components/Container';
import { menuItems } from '@/data/menuItems';
import { siteDetails } from '@/data/siteDetails';
import { Transition } from '@headlessui/react';

import { Menu, X } from 'lucide-react';

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
                className={`fixed top-0 right-0 left-0 z-50 mx-auto w-full transition-all duration-500 ease-in-out ${
                    isScrolled ? 'shadow-md backdrop-blur-md' : ''
                }`}>
                {/* Background layers for smooth transition */}
                <div
                    className='absolute inset-0 transition-opacity duration-500 ease-in-out'
                    style={{
                        background:
                            'radial-gradient(ellipse at top left, rgba(168, 200, 35, 0.5) 0%, rgba(12, 39, 96, 0.5) 50%, rgba(12, 39, 96, 0.5) 100%)',
                        opacity: isScrolled ? 0 : 1
                    }}
                />
                <div
                    className='absolute inset-0 transition-opacity duration-500 ease-in-out'
                    style={{
                        background: 'linear-gradient(to right, rgba(168, 200, 35, 0.25), rgba(12, 39, 96, 0.25))',
                        opacity: isScrolled ? 1 : 0
                    }}
                />
                <Container className='relative px-0'>
                    <nav
                        className={`mx-auto flex items-center justify-between px-5 py-2 shadow-md transition-all duration-500 ease-in-out md:bg-transparent md:shadow-none ${
                            isScrolled ? 'md:py-2' : 'md:py-5'
                        }`}>
                        {/* Logo */}
                        <Link href={'/'} className='flex flex-col items-start'>
                            <Image
                                src={siteDetails.siteLogo}
                                alt={siteDetails.siteName}
                                width={180}
                                height={75}
                                className='h-auto w-[90px] md:w-[180px]'
                            />
                            <span
                                className={`-mt-1 text-[8px] font-bold italic md:-mt-2 md:text-xs ${isScrolled ? 'text-primary' : 'text-primary-foreground'}`}>
                                Votre partenaire IT depuis 2003
                            </span>
                        </Link>

                        {/* Desktop Menu */}
                        <ul className='hidden items-center space-x-6 md:flex'>
                            {menuItems.map((item) => (
                                <li key={item.text}>
                                    {item.highlight ? (
                                        <Link
                                            href={item.url}
                                            className='bg-accent text-accent-foreground border-primary-dark rounded-lg border-2 px-6 py-3 font-semibold shadow-[0_4px_0_0_var(--primary-dark)] transition-all duration-150 hover:translate-y-[2px] hover:shadow-[0_2px_0_0_var(--primary-dark)]'>
                                            {item.text}
                                        </Link>
                                    ) : (
                                        <Link
                                            href={item.url}
                                            className={`transition-colors ${isScrolled ? 'text-primary hover:text-accent' : 'text-primary-foreground hover:text-accent'}`}>
                                            <span>{item.text}</span>
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>

                        {/* Mobile Menu Button */}
                        <div className='flex items-center md:hidden'>
                            <button
                                onClick={toggleMenu}
                                onMouseDown={() => setIsMenuButtonPressed(true)}
                                onMouseUp={() => setIsMenuButtonPressed(false)}
                                onMouseLeave={() => setIsMenuButtonPressed(false)}
                                onTouchStart={() => setIsMenuButtonPressed(true)}
                                onTouchEnd={() => setIsMenuButtonPressed(false)}
                                type='button'
                                className='bg-accent text-primary border-primary-dark flex h-10 w-10 items-center justify-center rounded-2xl border-2 transition-transform duration-75 select-none focus:outline-none'
                                aria-controls='mobile-menu'
                                aria-expanded={isOpen}
                                style={{
                                    boxShadow: isMenuButtonPressed ? 'none' : '0 4px 0 0 var(--primary-dark)',
                                    transform: isMenuButtonPressed ? 'translateY(4px)' : 'translateY(0)'
                                }}>
                                {isOpen ? (
                                    <X className='h-6 w-6' aria-hidden='true' />
                                ) : (
                                    <Menu className='h-6 w-6' aria-hidden='true' />
                                )}
                                <span className='sr-only'>Toggle navigation</span>
                            </button>
                        </div>
                    </nav>
                </Container>

                {/* Mobile Menu with Transition */}
                <Transition
                    show={isOpen}
                    enter='transition ease-out duration-200 transform'
                    enterFrom='opacity-0 -translate-y-2'
                    enterTo='opacity-100 translate-y-0'
                    leave='transition ease-in duration-150 transform'
                    leaveFrom='opacity-100 translate-y-0'
                    leaveTo='opacity-0 -translate-y-2'>
                    <div id='mobile-menu' className='bg-card relative z-10 shadow-lg md:hidden'>
                        <ul className='flex flex-col space-y-4 px-6 pt-4 pb-6'>
                            {menuItems.map((item) => (
                                <li key={item.text}>
                                    <Link
                                        href={item.url}
                                        className='text-primary hover:text-accent block text-lg font-medium'
                                        onClick={toggleMenu}>
                                        {item.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Transition>
            </header>
            {/* Spacer pour éviter que le contenu soit caché sous le header fixe */}
            <div className='h-10 md:h-16' />
        </>
    );
};

export default Header;
