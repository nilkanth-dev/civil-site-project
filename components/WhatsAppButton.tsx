'use client';

import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

export default function WhatsAppButton() {
    const [showTooltip, setShowTooltip] = useState(false);

    // Your WhatsApp number (replace with actual number)
    const phoneNumber = '919876543210'; // Format: country code + number (no + or spaces)
    const message = 'Hello! I am interested in your construction services.';

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <>
            {/* Floating WhatsApp Button */}
            <div className="fixed bottom-6 right-6 z-50">
                <div className="relative">
                    {/* Tooltip */}
                    {showTooltip && (
                        <div className="absolute bottom-full right-0 mb-2 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg whitespace-nowrap">
                            <p className="text-sm font-medium">Chat with us on WhatsApp!</p>
                            <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
                        </div>
                    )}

                    {/* Button */}
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => setShowTooltip(true)}
                        onMouseLeave={() => setShowTooltip(false)}
                        className="flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 group"
                        aria-label="Chat on WhatsApp"
                    >
                        <MessageCircle className="h-8 w-8 group-hover:scale-110 transition-transform" />

                        {/* Pulse animation */}
                        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                    </a>
                </div>
            </div>
        </>
    );
}
