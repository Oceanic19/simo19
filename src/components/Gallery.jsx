// src/components/Gallery.jsx

import React from 'react';

// Data for the gallery cards (names from the sketch)
const galleryItems = [
    { title: "BAI HOTEL", location: "Cebu" },
    { title: "CODEGUM", location: "Davao" },
    { title: "RIANI IT CEBU", location: "Cebu" },
    { title: "CDRMO TAGBILARAN", location: "Bohol" },
];

const GalleryCard = ({ title, location }) => (
    <div className="border border-neutral-400 dark:border-neutral-600 rounded-md p-2 h-60 flex flex-col shadow-md dark:shadow-neutral-700/50">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">{location}</p>
        <div className="flex-grow border border-neutral-400 dark:border-neutral-600 bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
            <span className="text-neutral-500">IMAGE HERE</span>
        </div>
    </div>
);

export default function Gallery() {
    return (
        <section id="gallery" className="px-10 py-16 scroll-mt-24">
            
            {/* Breadcrumb Navigation */}
            <div className="flex items-center mb-10 text-lg">
                <a href="#about" className="text-neutral-500 dark:text-neutral-400 hover:underline">About</a>
                <span className="mx-2">/</span>
                <a href="#gallery" className="text-indigo-600 dark:text-indigo-300 font-semibold hover:underline">Gallery</a>
            </div>

            {/* Main Content: Two Columns */}
            <div className="flex flex-col lg:flex-row gap-12">
                
                {/* LEFT COLUMN: Introduction Text (Placeholder based on sketch) */}
                <div className="lg:w-1/3 space-y-4">
                    <h2 className="text-3xl font-bold">Educational Tour Photos</h2>
                    <p className="text-base text-neutral-700 dark:text-neutral-300">
                        Welcome to the Gallery! This section highlights the places we visited during our educational tour. Each card represents a key destination or company visit, showcasing the different learning environments and technical insights we gained.
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 italic">
                        Click on a card to see more photos and a brief description of the experience.
                    </p>
                </div>

                {/* RIGHT COLUMN: Image Grid (2x2 layout) */}
                <div className="lg:w-2/3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {galleryItems.map((item, index) => (
                            <GalleryCard 
                                key={index} 
                                title={item.title} 
                                location={item.location} 
                            />
                        ))}
                    </div>
                </div>
            </div>
            
        </section>
    );
}