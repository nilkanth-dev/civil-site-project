import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Award, Users, Building, Target, CheckCircle, TrendingUp } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Navbar />
            <WhatsAppButton />

            <main className="flex-grow pt-24 pb-20">
                {/* Hero Section */}
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">About CivilCraft</h1>
                        <p className="text-xl text-gray-300 max-w-3xl">
                            Building dreams into reality with over a decade of excellence in construction.
                        </p>
                    </div>
                </div>

                {/* Company Story */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                Founded in 2010, CivilCraft has grown from a small construction firm to one of the most trusted names in the industry. Our journey began with a simple mission: to deliver quality construction services that exceed client expectations.
                            </p>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                Today, we've completed over 500+ projects across residential, commercial, and industrial sectors. Our commitment to innovation, sustainability, and customer satisfaction has made us the preferred choice for clients nationwide.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                We believe in building not just structures, but lasting relationships with our clients, partners, and communities.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-amber-50 p-6 rounded-xl text-center">
                                <div className="text-4xl font-bold text-amber-600 mb-2">15+</div>
                                <div className="text-gray-700 font-medium">Years Experience</div>
                            </div>
                            <div className="bg-amber-50 p-6 rounded-xl text-center">
                                <div className="text-4xl font-bold text-amber-600 mb-2">500+</div>
                                <div className="text-gray-700 font-medium">Projects Completed</div>
                            </div>
                            <div className="bg-amber-50 p-6 rounded-xl text-center">
                                <div className="text-4xl font-bold text-amber-600 mb-2">200+</div>
                                <div className="text-gray-700 font-medium">Happy Clients</div>
                            </div>
                            <div className="bg-amber-50 p-6 rounded-xl text-center">
                                <div className="text-4xl font-bold text-amber-600 mb-2">50+</div>
                                <div className="text-gray-700 font-medium">Team Members</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mission & Vision */}
                <div className="bg-gray-50 py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-8 rounded-xl shadow-lg">
                                <Target className="h-12 w-12 text-amber-600 mb-4" />
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    To deliver exceptional construction services through innovation, quality craftsmanship, and unwavering commitment to client satisfaction. We strive to build sustainable structures that stand the test of time.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-xl shadow-lg">
                                <TrendingUp className="h-12 w-12 text-amber-600 mb-4" />
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    To be the most trusted and innovative construction company, setting industry standards for quality, safety, and sustainability while creating value for our clients and communities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Us</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Award className="h-10 w-10 text-amber-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Assurance</h3>
                            <p className="text-gray-600">
                                ISO certified processes and rigorous quality checks at every stage ensure superior results.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="h-10 w-10 text-amber-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Team</h3>
                            <p className="text-gray-600">
                                Skilled engineers, architects, and craftsmen with decades of combined experience.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="h-10 w-10 text-amber-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Timely Delivery</h3>
                            <p className="text-gray-600">
                                98% on-time project completion rate with transparent progress tracking.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-amber-600 text-white py-16">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold mb-4">Let's Build Something Great Together</h2>
                        <p className="text-xl text-amber-100 mb-8">
                            Ready to start your construction project? Contact us today!
                        </p>
                        <a
                            href="/contact"
                            className="inline-block bg-white text-amber-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
