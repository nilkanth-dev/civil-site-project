'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MapPin, User, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import GoogleMap from './GoogleMap';
import { useState } from 'react';

interface Project {
    id: number;
    title: string;
    location: string;
    clientName: string;
    description?: string;
    imageUrl: string;
    latitude?: number;
    longitude?: number;
    createdAt?: string;
}

export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
    const [showMap, setShowMap] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full"
        >
            <div className="relative h-64 overflow-hidden group">
                <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>

                <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="h-4 w-4 text-amber-600" />
                        <span className="text-sm">{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                        <User className="h-4 w-4 text-amber-600" />
                        <span className="text-sm">{project.clientName}</span>
                    </div>
                    {project.createdAt && (
                        <div className="flex items-center gap-2 text-gray-600">
                            <Calendar className="h-4 w-4 text-amber-600" />
                            <span className="text-sm">
                                {new Date(project.createdAt).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long'
                                })}
                            </span>
                        </div>
                    )}
                </div>

                {project.description && (
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>
                )}

                <div className="mt-auto">
                    <div className="flex gap-3">
                        <Link
                            href={`/projects/${project.id}`}
                            className="flex-1 bg-amber-600 hover:bg-amber-700 text-white text-center py-2.5 rounded-lg font-bold text-sm transition-colors shadow-md"
                        >
                            View Details
                        </Link>

                        {project.latitude && project.longitude && (
                            <button
                                onClick={() => setShowMap(!showMap)}
                                className="p-2.5 bg-amber-50 text-amber-600 hover:bg-amber-100 rounded-lg transition-colors border border-amber-200"
                                title="Show Map"
                            >
                                <MapPin className="h-5 w-5" />
                            </button>
                        )}
                    </div>

                    <AnimatePresence>
                        {project.latitude && project.longitude && showMap && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="mt-4"
                            >
                                <GoogleMap
                                    latitude={project.latitude}
                                    longitude={project.longitude}
                                    title={project.title}
                                    location={project.location}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
}
