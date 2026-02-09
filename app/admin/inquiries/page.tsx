'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Phone, Calendar, MessageSquare } from 'lucide-react';

interface Inquiry {
    id: number;
    name: string;
    phone: string;
    message: string;
    createdAt: string;
    status: string;
}

export default function AdminInquiries() {
    const router = useRouter();
    const [inquiries, setInquiries] = useState<Inquiry[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check auth
        if (!document.cookie.includes('admin_session=true')) {
            router.push('/admin/login');
            return;
        }

        // Fetch inquiries
        fetch('/api/inquiries')
            .then(res => res.json())
            .then(data => {
                setInquiries(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [router]);

    if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

    return (
        <div className="min-h-screen bg-gray-50">
            <nav className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <span className="font-bold text-xl text-gray-900">Customer Inquiries</span>
                        <Link href="/admin" className="text-gray-600 hover:text-gray-900 flex items-center gap-2">
                            <ArrowLeft className="h-4 w-4" />
                            Back to Dashboard
                        </Link>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-900">Customer Inquiries ({inquiries.length})</h1>
                    <p className="text-gray-600 mt-1">Customer inquiry requests</p>
                </div>

                {inquiries.length === 0 ? (
                    <div className="bg-white rounded-xl shadow p-12 text-center">
                        <MessageSquare className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                        <p className="text-xl text-gray-500">No inquiries yet</p>
                        <p className="text-gray-400 mt-2">Customer inquiries will appear here</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-6">
                        {inquiries.map((inquiry) => (
                            <div key={inquiry.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow border-l-4 border-amber-500">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900">{inquiry.name}</h3>
                                        <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                                            <Calendar className="h-4 w-4" />
                                            {new Date(inquiry.createdAt).toLocaleDateString('en-IN', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric',
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            })}
                                        </div>
                                    </div>
                                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${inquiry.status === 'new' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                                        }`}>
                                        {inquiry.status}
                                    </span>
                                </div>

                                <div className="bg-amber-50 p-6 rounded-lg mb-4">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-amber-600 p-4 rounded-full">
                                            <Phone className="h-8 w-8 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm text-gray-600 mb-1">Contact Customer:</p>
                                            <a
                                                href={`tel:${inquiry.phone}`}
                                                className="text-3xl font-bold text-gray-900 hover:text-amber-600 transition-colors"
                                            >
                                                {inquiry.phone}
                                            </a>
                                        </div>
                                        <a
                                            href={`tel:${inquiry.phone}`}
                                            className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
                                        >
                                            <Phone className="h-5 w-5" />
                                            Call Now
                                        </a>
                                    </div>
                                </div>

                                {inquiry.message && (
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <p className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                                            <MessageSquare className="h-4 w-4" />
                                            Customer Message:
                                        </p>
                                        <p className="text-gray-600">{inquiry.message}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}
