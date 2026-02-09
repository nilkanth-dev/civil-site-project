'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock } from 'lucide-react';

export default function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        // Simple hardcoded auth for demonstration
        if (username === 'admin' && password === 'admin123') {
            document.cookie = "admin_session=true; path=/";
            router.push('/admin');
        } else {
            setError('Invalid credentials');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
                <div className="text-center mb-8">
                    <div className="bg-amber-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <Lock className="h-8 w-8 text-amber-600" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900">Admin Portal</h1>
                    <p className="text-gray-500">Please sign in to continue</p>
                </div>

                {error && (
                    <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 text-sm text-center">
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 rounded-lg transition-colors"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
}
