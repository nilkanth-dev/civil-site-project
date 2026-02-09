'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Upload } from 'lucide-react';
import Link from 'next/link';

export default function NewProject() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string>('');

    const [formData, setFormData] = useState({
        title: '',
        location: '',
        clientName: '',
        description: ''
    });

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const f = e.target.files[0];
            setFile(f);
            setPreview(URL.createObjectURL(f));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            let imageUrl = '';

            if (file) {
                const data = new FormData();
                data.set('file', file);

                const uploadRes = await fetch('/api/upload', {
                    method: 'POST',
                    body: data
                });

                if (!uploadRes.ok) throw new Error('Upload failed');
                const uploadJson = await uploadRes.json();
                imageUrl = uploadJson.url;
            }

            const res = await fetch('/api/projects', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    imageUrl
                })
            });

            if (!res.ok) throw new Error('Failed to create project');

            router.push('/admin');
        } catch (error) {
            console.error(error);
            alert('Error creating project');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-10">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <Link href="/admin" className="flex items-center text-gray-600 hover:text-gray-900 gap-2">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Dashboard
                    </Link>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8">
                    <h1 className="text-2xl font-bold text-gray-900 mb-8">Add New Project</h1>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Project Title</label>
                            <input
                                type="text"
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                                    value={formData.location}
                                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Client Name</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                                    value={formData.clientName}
                                    onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                            <textarea
                                rows={4}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Project Image</label>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 transition-colors">
                                {preview ? (
                                    <div className="relative h-64 w-full">
                                        <Image src={preview} alt="Preview" fill className="object-contain" />
                                        <button
                                            type="button"
                                            onClick={() => { setFile(null); setPreview(''); }}
                                            className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
                                        >
                                            <ArrowLeft className="h-4 w-4 rotate-45" /> {/* Just using an icon for close */}
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                                        <label className="cursor-pointer">
                                            <span className="text-amber-600 font-medium hover:text-amber-500">Upload a file</span>
                                            <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                                        </label>
                                        <p className="text-gray-500 text-sm mt-2">PNG, JPG up to 10MB</p>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Saving...' : 'Create Project'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
