'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Phone, MapPin, Send, Clock } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name') as string,
            phone: formData.get('phone') as string,
            message: formData.get('message') as string || '',
        };

        try {
            const res = await fetch('/api/inquiries', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!res.ok) throw new Error('Failed to submit');

            setSubmitted(true);
        } catch (error) {
            alert('Failed to submit inquiry. Please try again.');
        }
    };

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Navbar />

            <style jsx global>{`
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:active,
        textarea:-webkit-autofill,
        textarea:-webkit-autofill:hover,
        textarea:-webkit-autofill:focus,
        textarea:-webkit-autofill:active {
          -webkit-box-shadow: 0 0 0 30px white inset !important;
          -webkit-text-fill-color: #111827 !important;
          box-shadow: 0 0 0 30px white inset !important;
          color: #111827 !important;
          font-weight: 500 !important;
        }
      `}</style>

            <main className="flex-grow pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h1>
                        <p className="text-xl text-gray-600">Submit your inquiry and we'll contact you!</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="bg-amber-50 p-8 rounded-2xl">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-amber-100 p-3 rounded-full">
                                            <Phone className="h-6 w-6 text-amber-700" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900">Phone</p>
                                            <p className="text-gray-600">+1 (555) 123-4567</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="bg-amber-100 p-3 rounded-full">
                                            <MapPin className="h-6 w-6 text-amber-700" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900">Office</p>
                                            <p className="text-gray-600">123 Construction Ave, Cityville, ST 12345</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="bg-amber-100 p-3 rounded-full">
                                            <Clock className="h-6 w-6 text-amber-700" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900">Business Hours</p>
                                            <p className="text-gray-600">Mon - Sat: 9:00 AM - 6:00 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-gray-50 p-8 rounded-2xl">
                            {submitted ? (
                                <div className="h-full flex flex-col items-center justify-center text-center">
                                    <div className="bg-green-100 p-4 rounded-full mb-4">
                                        <Send className="h-8 w-8 text-green-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">Inquiry Received!</h3>
                                    <p className="text-gray-600 mt-2">We'll contact you shortly.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-800 mb-2">Your Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            autoComplete="name"
                                            style={{
                                                color: '#111827',
                                                fontWeight: '500'
                                            }}
                                            className="w-full px-4 py-3 text-base rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none bg-white text-gray-900 font-medium placeholder-gray-400"
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-800 mb-2">Phone Number *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            autoComplete="tel"
                                            pattern="[0-9+\s\-()]+"
                                            style={{
                                                color: '#111827',
                                                fontWeight: '500'
                                            }}
                                            className="w-full px-4 py-3 text-base rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none bg-white text-gray-900 font-medium placeholder-gray-400"
                                            placeholder="+91 98765 43210"
                                        />
                                        <p className="text-xs text-gray-500 mt-1">We'll contact you on this number</p>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-800 mb-2">Message (Optional)</label>
                                        <textarea
                                            name="message"
                                            rows={4}
                                            style={{
                                                color: '#111827',
                                                fontWeight: '500'
                                            }}
                                            className="w-full px-4 py-3 text-base rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none bg-white text-gray-900 font-medium placeholder-gray-400 resize-none"
                                            placeholder="Brief description of your project..."
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 rounded-lg transition-colors shadow-lg hover:shadow-xl">
                                        Submit Inquiry
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
