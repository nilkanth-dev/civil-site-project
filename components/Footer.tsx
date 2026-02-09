import { Hammer, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <Hammer className="h-8 w-8 text-amber-500" />
                            <span className="font-bold text-xl">CivilCraft</span>
                        </div>
                        <p className="text-gray-400">
                            Transforming visions into reality with superior construction and design excellence.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="/" className="hover:text-amber-500 transition-colors">Home</a></li>
                            <li><a href="/projects" className="hover:text-amber-500 transition-colors">Projects</a></li>
                            <li><a href="/contact" className="hover:text-amber-500 transition-colors">Contact</a></li>
                            <li><a href="/admin" className="hover:text-amber-500 transition-colors">Admin Portal</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4">Contact Info</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>123 Construction Ave</li>
                            <li>Cityville, ST 12345</li>
                            <li>+1 (555) 123-4567</li>
                            <li>jpramod1919@gmail.com</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4">Follow Us</h4>
                        <div className="flex gap-4">
                            <a
                                href="https://www.instagram.com/nageshjadhav529?igsh=cWNxeXVveDF2aWN6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-gray-800 rounded-full hover:bg-amber-600 transition-colors"
                            >
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-amber-600 transition-colors"><Twitter className="h-5 w-5" /></a>
                            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-amber-600 transition-colors"><Linkedin className="h-5 w-5" /></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    © {new Date().getFullYear()} CivilCraft Construction. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
