import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Home, Building2, Wrench, Paintbrush, ClipboardList, Hammer } from 'lucide-react';

const services = [
    {
        icon: Home,
        title: 'Residential Construction',
        description: 'Custom home building, villas, and residential complexes with modern designs and quality craftsmanship.',
        features: ['Custom Home Design', 'Villa Construction', 'Apartment Buildings', 'Interior Finishing']
    },
    {
        icon: Building2,
        title: 'Commercial Construction',
        description: 'Office buildings, shopping malls, and commercial spaces built to industry standards.',
        features: ['Office Complexes', 'Retail Spaces', 'Shopping Malls', 'Industrial Buildings']
    },
    {
        icon: Wrench,
        title: 'Renovation & Remodeling',
        description: 'Transform existing spaces with our expert renovation and remodeling services.',
        features: ['Home Renovation', 'Office Remodeling', 'Kitchen & Bathroom', 'Structural Changes']
    },
    {
        icon: Paintbrush,
        title: 'Interior Design',
        description: 'Complete interior design solutions from concept to execution for residential and commercial spaces.',
        features: ['Space Planning', 'Furniture Design', 'Lighting Design', '3D Visualization']
    },
    {
        icon: ClipboardList,
        title: 'Project Management',
        description: 'End-to-end project management ensuring timely delivery and quality control.',
        features: ['Timeline Planning', 'Budget Management', 'Quality Control', 'Vendor Coordination']
    },
    {
        icon: Hammer,
        title: 'Consultation Services',
        description: 'Expert consultation for construction planning, permits, and feasibility studies.',
        features: ['Site Analysis', 'Permit Assistance', 'Cost Estimation', 'Technical Guidance']
    }
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Navbar />
            <WhatsAppButton />

            <main className="flex-grow pt-24 pb-20">
                {/* Hero Section */}
                <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
                        <p className="text-xl text-amber-100 max-w-3xl mx-auto">
                            Comprehensive construction solutions tailored to your needs. From concept to completion, we deliver excellence.
                        </p>
                    </div>
                </div>

                {/* Services Grid */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-t-4 border-amber-500 hover:-translate-y-2"
                                >
                                    <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                        <Icon className="h-8 w-8 text-amber-600" />
                                    </div>

                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                    <p className="text-gray-600 mb-6">{service.description}</p>

                                    <ul className="space-y-2">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-sm text-gray-700">
                                                <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gray-50 py-16">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Get in touch with us today for a free consultation and quote.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/contact"
                                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
                            >
                                Request a Quote
                            </a>
                            <a
                                href="/projects"
                                className="bg-white hover:bg-gray-50 text-amber-600 border-2 border-amber-600 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
                            >
                                View Our Work
                            </a>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
