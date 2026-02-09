'use client';

import Link from 'next/link';
import { Menu, X, Hammer, Instagram } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/lib/LanguageContext';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useLanguage();

    return (
        <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <Hammer className="h-8 w-8 text-amber-600" />
                        <span className="font-bold text-xl text-gray-900 tracking-tight">CivilCraft</span>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-gray-600 hover:text-amber-600 transition-colors font-medium">{t.navbar.home}</Link>
                        <Link href="/about" className="text-gray-600 hover:text-amber-600 transition-colors font-medium">{t.navbar.about}</Link>
                        <Link href="/services" className="text-gray-600 hover:text-amber-600 transition-colors font-medium">{t.navbar.services}</Link>
                        <Link href="/calculator" className="text-gray-600 hover:text-amber-600 transition-colors font-medium">{t.navbar.calculator}</Link>
                        <Link href="/projects" className="text-gray-600 hover:text-amber-600 transition-colors font-medium">{t.navbar.projects}</Link>
                        <Link href="/contact" className="text-gray-600 hover:text-amber-600 transition-colors font-medium">{t.navbar.contact}</Link>

                        <div className="pl-4 border-l border-gray-200 flex items-center gap-4">
                            <a
                                href="https://www.instagram.com/nageshjadhav529?igsh=cWNxeXVveDF2aWN6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-amber-600 transition-colors"
                                title="Follow us on Instagram"
                            >
                                <Instagram className="h-5 w-5" />
                            </a>
                            <LanguageSwitcher />
                        </div>
                    </div>

                    <div className="md:hidden flex items-center gap-4">
                        <LanguageSwitcher />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-gray-900 p-2"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="md:hidden bg-white border-b border-gray-100 absolute w-full shadow-xl"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link
                                href="/"
                                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-gray-50 rounded-md"
                                onClick={() => setIsOpen(false)}
                            >
                                {t.navbar.home}
                            </Link>
                            <Link
                                href="/about"
                                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-gray-50 rounded-md"
                                onClick={() => setIsOpen(false)}
                            >
                                {t.navbar.about}
                            </Link>
                            <Link
                                href="/services"
                                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-gray-50 rounded-md"
                                onClick={() => setIsOpen(false)}
                            >
                                {t.navbar.services}
                            </Link>
                            <Link
                                href="/calculator"
                                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-gray-50 rounded-md"
                                onClick={() => setIsOpen(false)}
                            >
                                {t.navbar.calculator}
                            </Link>
                            <Link
                                href="/projects"
                                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-gray-50 rounded-md"
                                onClick={() => setIsOpen(false)}
                            >
                                {t.navbar.projects}
                            </Link>
                            <Link
                                href="/contact"
                                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-gray-50 rounded-md"
                                onClick={() => setIsOpen(false)}
                            >
                                {t.navbar.contact}
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
