'use client';

import { MapPin } from 'lucide-react';

interface GoogleMapProps {
    latitude: number;
    longitude: number;
    title: string;
    location: string;
}

export default function GoogleMap({ latitude, longitude, title, location }: GoogleMapProps) {
    // Google Maps embed URL
    const mapUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${latitude},${longitude}&zoom=15`;

    // Fallback: Google Maps link (works without API key)
    const googleMapsLink = `https://www.google.com/maps?q=${latitude},${longitude}`;

    return (
        <div className="w-full">
            <div className="flex items-center gap-2 mb-3">
                <MapPin className="h-5 w-5 text-amber-600" />
                <h3 className="font-bold text-gray-900">Project Location</h3>
            </div>

            {/* Static map preview with link to Google Maps */}
            <a
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative group"
            >
                <div className="relative w-full h-64 bg-gray-200 rounded-lg overflow-hidden border-2 border-gray-300 hover:border-amber-500 transition-colors">
                    {/* Static map image from Google Static Maps API */}
                    <img
                        src={`https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=14&size=600x300&markers=color:red%7C${latitude},${longitude}&key=`}
                        alt={`Map of ${location}`}
                        className="w-full h-full object-cover"
                    />

                    {/* Overlay with "View on Google Maps" */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white px-6 py-3 rounded-lg shadow-lg">
                            <p className="font-bold text-gray-900 flex items-center gap-2">
                                <MapPin className="h-5 w-5 text-amber-600" />
                                View on Google Maps
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-2 text-sm text-gray-600">
                    <p className="font-medium text-gray-900">{title}</p>
                    <p>{location}</p>
                </div>
            </a>
        </div>
    );
}
