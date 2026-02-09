import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import GoogleMap from '@/components/GoogleMap';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, MapPin, User, Calendar, CheckCircle, Clock, Ruler } from 'lucide-react';
import { notFound } from 'next/navigation';

async function getProject(id: string) {
    try {
        const res = await fetch(`http://localhost:3000/api/projects`, { cache: 'no-store' });
        if (!res.ok) return null;
        const projects = await res.json();
        return projects.find((p: any) => p.id.toString() === id);
    } catch (error) {
        console.error('Error fetching project:', error);
        return null;
    }
}

export default async function ProjectDetailPage({ params }: { params: { id: string } }) {
    const project = await getProject(params.id);

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Navbar />
            <WhatsAppButton />

            <main className="flex-grow pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Back Button */}
                    <Link href="/projects" className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium mb-8 group">
                        <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Projects
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Left Column: Image and Description */}
                        <div className="lg:col-span-2 space-y-8">
                            <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-xl">
                                <Image
                                    src={project.imageUrl}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            <div>
                                <h1 className="text-4xl font-bold text-gray-900 mb-6">{project.title}</h1>
                                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                                    {project.description}
                                </p>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        "Standard-compliant structural engineering",
                                        "Premium interior and exterior finishes",
                                        "Eco-friendly building materials used",
                                        "Complete site safety management",
                                        "Regular progress reporting to client",
                                        "Final inspection and quality handover"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center text-gray-700 bg-gray-50 p-4 rounded-xl">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0" />
                                            <span className="font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Project Details Sidebar */}
                        <div className="space-y-8">
                            <div className="bg-amber-50 p-8 rounded-2xl shadow-sm border border-amber-100">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-amber-200 pb-4">Project Details</h3>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <MapPin className="h-6 w-6 text-amber-600 shrink-0 mt-1" />
                                        <div>
                                            <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">Location</p>
                                            <p className="text-lg text-gray-900 font-medium">{project.location}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <User className="h-6 w-6 text-amber-600 shrink-0 mt-1" />
                                        <div>
                                            <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">Client</p>
                                            <p className="text-lg text-gray-900 font-medium">{project.clientName}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <Calendar className="h-6 w-6 text-amber-600 shrink-0 mt-1" />
                                        <div>
                                            <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">Completion</p>
                                            <p className="text-lg text-gray-900 font-medium">
                                                {new Date(project.createdAt).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'long'
                                                })}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <Clock className="h-6 w-6 text-amber-600 shrink-0 mt-1" />
                                        <div>
                                            <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">Timeline</p>
                                            <p className="text-lg text-gray-900 font-medium">18-24 Months</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <Ruler className="h-6 w-6 text-amber-600 shrink-0 mt-1" />
                                        <div>
                                            <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">Project Size</p>
                                            <p className="text-lg text-gray-900 font-medium">15,000+ Sq Ft</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <Link
                                        href="/contact"
                                        className="block w-full bg-amber-600 hover:bg-amber-700 text-white text-center py-4 rounded-xl font-bold shadow-lg transition-all"
                                    >
                                        Inquire About This Service
                                    </Link>
                                </div>
                            </div>

                            {/* Map Section */}
                            {project.latitude && project.longitude && (
                                <div className="bg-white p-2 rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                                    <GoogleMap
                                        latitude={project.latitude}
                                        longitude={project.longitude}
                                        title={project.title}
                                        location={project.location}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
