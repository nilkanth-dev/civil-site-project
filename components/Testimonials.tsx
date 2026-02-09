'use client';

import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: "Rajesh Sharma",
        role: "Villa Owner",
        content: "CivilCraft transformed my vision into a beautiful reality. Their attention to detail and commitment to quality is unmatched. My luxury villa was completed right on time!",
        rating: 5,
        location: "Mumbai"
    },
    {
        name: "Anita Verma",
        role: "Business Owner",
        content: "The commercial office complex they built for us is world-class. Professional management, transparent communication, and exceptional craftsmanship. Highly recommended!",
        rating: 5,
        location: "Gurgaon"
    },
    {
        name: "Sanjay Gupta",
        role: "Apartment Developer",
        content: "Working with CivilCraft on our Green Valley project was a breeze. They handled everything from foundation to finishing with extreme professionalism. A trusted partner.",
        rating: 5,
        location: "Bangalore"
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-amber-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">Don't just take our word for it—hear from the people we've built for.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all relative group"
                        >
                            <Quote className="absolute top-6 right-8 h-12 w-12 text-amber-100 group-hover:text-amber-200 transition-colors" />

                            <div className="flex mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 text-amber-500 fill-amber-500" />
                                ))}
                            </div>

                            <p className="text-gray-600 mb-6 italic leading-relaxed">
                                "{testimonial.content}"
                            </p>

                            <div>
                                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                <p className="text-sm text-gray-500">{testimonial.role} • {testimonial.location}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
