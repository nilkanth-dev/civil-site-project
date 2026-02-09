'use client';

import { useState, useEffect } from 'react';
import { Calculator, Home, Building2, Layers, ShieldCheck, Info, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';

export default function CostCalculator() {
    const { language, t } = useLanguage();
    const [projectType, setProjectType] = useState<'residential' | 'commercial'>('residential');
    const [area, setArea] = useState<number>(1000);
    const [quality, setQuality] = useState<'basic' | 'premium' | 'luxury'>('premium');
    const [totalCost, setTotalCost] = useState<number>(0);

    // Rates per sq ft (approximate for India)
    const rates = {
        residential: {
            basic: 1600,
            premium: 2200,
            luxury: 3500
        },
        commercial: {
            basic: 2000,
            premium: 2800,
            luxury: 4500
        }
    };

    const qualityDetails = {
        basic: {
            flooring: language === 'en' ? "Standard Vitrified Tiles (2'x2')" : language === 'hi' ? "स्टैंडर्ड विट्रीफाइड टाइल्स (2'x2')" : "प्रमाणित विट्रीफाइड टाइल्स (2'x2')",
            painting: language === 'en' ? "Distemper/Simple Emulsion" : language === 'hi' ? "डिस्टेंपर/सिंपल इमल्शन" : "डिस्टेंपर/सिंपल इमल्शन",
            fittings: language === 'en' ? "Standard Branded (Local/Basic)" : language === 'hi' ? "स्टैंडर्ड ब्रांडेड (लोकल/बेसिक)" : "प्रमाणित ब्रांडेड (लोकल/बेसिक)",
            kitchen: language === 'en' ? "Stainless Steel Sink, Granite Slab" : language === 'hi' ? "स्टेनलेस स्टील सिंक, ग्रेनाइट स्लैब" : "स्टेनलेस स्टील सिंक, ग्रॅनाइट स्लॅब",
            electrical: language === 'en' ? "Standard ISI Mark Wiring & Switches" : language === 'hi' ? "स्टैंडर्ड ISI मार्क वायरिंग और स्विच" : "प्रमाणित ISI मार्क वायरिंग आणि स्विचेस",
            windows: language === 'en' ? "Powder Coated Aluminum" : language === 'hi' ? "पाउडर कोटेड एल्युमिनियम" : "पावडर कोटेड ॲल्युमिनियम"
        },
        premium: {
            flooring: language === 'en' ? "Large Vitrified Tiles (4'x2') / Granite" : language === 'hi' ? "बड़े विट्रीफाइड टाइल्स (4'x2') / ग्रेनाइट" : "मोठ्या विट्रीफाइड टाइल्स (4'x2') / ग्रॅनाइट",
            painting: language === 'en' ? "Premium Emulsion / Texture Paint" : language === 'hi' ? "प्रीमियम इमल्शन / टेक्सचर पेंट" : "प्रीमियम इमल्शन / टेक्सचर पेंट",
            fittings: language === 'en' ? "Premium Branded (Jaguar/Hindware)" : language === 'hi' ? "प्रीमियम ब्रांडेड (जगुआर/हिंदवेयर)" : "प्रीमियम ब्रांडेड (जॅग्वार/हिंदवेअर)",
            kitchen: language === 'en' ? "Modular Kitchen, High-end Sink" : language === 'hi' ? "मॉड्यूलर किचन, हाई-एंड सिंक" : "मॉड्यूलर किचन, हाय-एंड सिंक",
            electrical: language === 'en' ? "Branded Modular Switches & Safe Wiring" : language === 'hi' ? "ब्रांडेड मॉड्यूलर स्विच और सुरक्षित वायरिंग" : "ब्रँडेड मॉड्यूलर स्विचेस आणि सुरक्षित वायरिंग",
            windows: language === 'en' ? "High-quality UPVC Windows" : language === 'hi' ? "उच्च गुणवत्ता वाले UPVC विंडोज" : "उच्च गुणवत्तेचे UPVC विंडोज"
        },
        luxury: {
            flooring: language === 'en' ? "Italian Marble / High-end Engineered Wood" : language === 'hi' ? "इटालियन मार्बल / हाई-एंड इंजीनियर वुड" : "इटालियन मार्बल / हाय-एंड इंजिनिअर्ड वुड",
            painting: language === 'en' ? "Luxury Finishes / Wallpaper / Paneling" : language === 'hi' ? "लक्जरी फिनिश / वॉलपेपर / पैनलिंग" : "लक्झरी फिनिश / वॉलपेपर / पँलिंग",
            fittings: language === 'en' ? "International Branded (Kohler/Grohe)" : language === 'hi' ? "अंतर्राष्ट्रीय ब्रांडेड (कोहलर/ग्रोहे)" : "आंतरराष्ट्रीय ब्रँडेड (कोहलर/ग्रोहे)",
            kitchen: language === 'en' ? "Fully Automated High-end Modular Kitchen" : language === 'hi' ? "पूरी तरह से स्वचालित हाई-एंड मॉड्यूलर किचन" : "पूर्णपणे स्वयंचलित हाय-एंड मॉड्यूलर किचन",
            electrical: language === 'en' ? "Smart Home Automation & Designer Lighting" : language === 'hi' ? "स्मार्ट होम ऑटोमेशन और डिजाइनर लाइटिंग" : "स्मार्ट होम ऑटोमेशन आणि डिझाइनर लायटिंग",
            windows: language === 'en' ? "Double Glazed System Windows" : language === 'hi' ? "डबल ग्लेज्ड सिस्टम विंडोज" : "डबल ग्लेज्ड सिस्टम विंडोज"
        }
    };

    useEffect(() => {
        const rate = rates[projectType][quality];
        setTotalCost(area * rate);
    }, [projectType, area, quality]);

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(amount);
    };

    return (
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left: Inputs */}
                <div className="p-8 md:p-12 space-y-8">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                            <Calculator className="h-8 w-8 text-amber-600" />
                            {t.calculator.title}
                        </h2>
                        <p className="text-gray-500">{t.calculator.subtitle}</p>
                    </div>

                    <div className="space-y-6">
                        {/* Project Type */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">{t.calculator.projectType}</label>
                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    onClick={() => setProjectType('residential')}
                                    className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${projectType === 'residential'
                                        ? 'border-amber-600 bg-amber-50 text-amber-700'
                                        : 'border-gray-100 bg-gray-50 text-gray-500 hover:border-gray-200'
                                        }`}
                                >
                                    <Home className="h-6 w-6 mb-2" />
                                    <span className="font-bold">{t.calculator.residential}</span>
                                </button>
                                <button
                                    onClick={() => setProjectType('commercial')}
                                    className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${projectType === 'commercial'
                                        ? 'border-amber-600 bg-amber-50 text-amber-700'
                                        : 'border-gray-100 bg-gray-50 text-gray-500 hover:border-gray-200'
                                        }`}
                                >
                                    <Building2 className="h-6 w-6 mb-2" />
                                    <span className="font-bold">{t.calculator.commercial}</span>
                                </button>
                            </div>
                        </div>

                        {/* Area Input */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">
                                {t.calculator.area}
                            </label>
                            <div className="relative">
                                <input
                                    type="number"
                                    value={area}
                                    onChange={(e) => setArea(Number(e.target.value))}
                                    className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none text-xl font-bold text-gray-900"
                                    placeholder="e.g. 1500"
                                />
                                <span className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 font-bold">{language === 'en' ? 'SQ FT' : language === 'hi' ? 'वर्ग फुट' : 'चौ. फूट'}</span>
                            </div>
                            <input
                                type="range"
                                min="500"
                                max="10000"
                                step="100"
                                value={area}
                                onChange={(e) => setArea(Number(e.target.value))}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-amber-600 mt-6"
                            />
                            <div className="flex justify-between text-xs text-gray-400 mt-2 font-medium">
                                <span>500 {language === 'en' ? 'SQ FT' : language === 'hi' ? 'वर्ग फुट' : 'चौ. फूट'}</span>
                                <span>10,000 {language === 'en' ? 'SQ FT' : language === 'hi' ? 'वर्ग फुट' : 'चौ. फूट'}</span>
                            </div>
                        </div>

                        {/* Quality Selection */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">{t.calculator.quality}</label>
                            <div className="flex flex-col space-y-3">
                                {[
                                    { id: 'basic', label: t.calculator.basic, desc: language === 'en' ? 'Standard materials, simple finishes' : language === 'hi' ? 'मानक सामग्री, साधारण फिनिश' : 'प्रमाणित साहित्य, साधे फिनिश', icon: Layers },
                                    { id: 'premium', label: t.calculator.premium, desc: language === 'en' ? 'Branded materials, modern finishes' : language === 'hi' ? 'ब्रांडेड सामग्री, आधुनिक फिनिश' : 'ब्रँडेड साहित्य, आधुनिक फिनिश', icon: ShieldCheck },
                                    { id: 'luxury', label: t.calculator.luxury, desc: language === 'en' ? 'Imported materials, high-end luxury' : language === 'hi' ? 'आयातित सामग्री, उच्च-स्तरीय लक्जरी' : 'आयात केलेले साहित्य, उच्च-स्तरीय लक्झरी', icon: Award }
                                ].map((q) => (
                                    <button
                                        key={q.id}
                                        onClick={() => setQuality(q.id as any)}
                                        className={`flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all ${quality === q.id
                                            ? 'border-amber-600 bg-amber-50 shadow-sm'
                                            : 'border-gray-100 bg-gray-50 hover:border-gray-200'
                                            }`}
                                    >
                                        <div className={`p-2 rounded-lg ${quality === q.id ? 'bg-amber-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                                            <q.icon className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className={`font-bold ${quality === q.id ? 'text-amber-900' : 'text-gray-900'}`}>{q.label}</p>
                                            <p className="text-xs text-gray-500">{q.desc}</p>
                                        </div>
                                    </button>
                                ))}
                            </div>

                            {/* Detailed Specs Display */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                key={quality}
                                className="mt-6 bg-amber-50/50 rounded-2xl p-5 border border-amber-100"
                            >
                                <h4 className="text-sm font-bold text-amber-900 mb-4 flex items-center gap-2">
                                    <Info className="h-4 w-4" />
                                    {language === 'en' ? "What's Included in " + quality.charAt(0).toUpperCase() + quality.slice(1) + "?" : language === 'hi' ? quality.charAt(0).toUpperCase() + quality.slice(1) + " में क्या शामिल है?" : quality.charAt(0).toUpperCase() + quality.slice(1) + " मध्ये काय समाविष्ट आहे?"}
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {Object.entries(qualityDetails[quality]).map(([key, value]) => (
                                        <div key={key} className="flex items-start gap-2">
                                            <div className="mt-1 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                                            <div>
                                                <span className="text-[10px] uppercase font-black text-amber-700/60 block leading-none mb-1">{key}</span>
                                                <span className="text-xs text-gray-700 font-medium leading-tight">{value}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Right: Results */}
                <div className="bg-gray-900 p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
                    {/* Background Decorative Circles */}
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-amber-600/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl"></div>

                    <div className="relative z-10 text-center space-y-8">
                        <h3 className="text-amber-500 font-bold uppercase tracking-[0.2em] text-sm tracking-widest">{t.calculator.totalCost}</h3>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={totalCost}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-5xl md:text-6xl font-black text-white"
                            >
                                {formatCurrency(totalCost)}
                            </motion.div>
                        </AnimatePresence>

                        <div className="grid grid-cols-1 gap-4 text-left">
                            <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex justify-between items-center">
                                <span className="text-gray-400 text-sm">{t.calculator.duration}</span>
                                <span className="text-white font-bold">{Math.ceil(area / 100) + 6}-{Math.ceil(area / 100) + 12} {language === 'en' ? 'Months' : 'महीने'}</span>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex justify-between items-center">
                                <span className="text-gray-400 text-sm">{t.calculator.rate}</span>
                                <span className="text-amber-500 font-bold">₹{rates[projectType][quality]}/{language === 'en' ? 'sqft' : 'वर्ग फुट'}</span>
                            </div>
                        </div>

                        <div className="pt-8">
                            <a
                                href="/contact"
                                className="block w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-5 rounded-xl text-lg shadow-xl shadow-amber-900/40 transition-all hover:-translate-y-1"
                            >
                                {t.calculator.getQuote}
                            </a>
                            <p className="text-gray-500 text-xs mt-4 flex items-center justify-center gap-2">
                                <Info className="h-3 w-3" />
                                {t.calculator.disclaimer}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
