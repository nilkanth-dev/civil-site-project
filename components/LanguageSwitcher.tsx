'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { Languages } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const langs = [
        { code: 'en', label: 'English', short: 'EN' },
        { code: 'hi', label: 'हिन्दी', short: 'HI' },
        { code: 'mr', label: 'मराठी', short: 'MR' }
    ];

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 hover:bg-amber-100 text-gray-700 hover:text-amber-700 rounded-full transition-all border border-gray-200 hover:border-amber-200"
            >
                <Languages className="h-4 w-4" />
                <span className="text-xs font-bold uppercase">{language}</span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <div
                            className="fixed inset-0 z-40"
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-2xl border border-gray-100 p-2 z-50 origin-top-right"
                        >
                            {langs.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => {
                                        setLanguage(lang.code as any);
                                        setIsOpen(false);
                                    }}
                                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${language === lang.code
                                            ? 'bg-amber-600 text-white font-bold'
                                            : 'text-gray-700 hover:bg-gray-50'
                                        }`}
                                >
                                    <div className="flex justify-between items-center">
                                        <span>{lang.label}</span>
                                        {language === lang.code && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                                    </div>
                                </button>
                            ))}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
