// src/components/Gallery.jsx

import React, { useState, useEffect } from 'react';

// =========================================================================
// 1. DATA STRUCTURE (UNCHANGED from your current version)
// =========================================================================

const galleryItems = [
    { 
        title: "PRE DEPARTURE", 
        location: "DAVAO", 
        date: "November 19, 2025",
        photoCount: 7, 
        imagePath: "/images/PRE DEPARTURE.png",
        description: "Photos taken at the starting point of our journey before heading to Cebu and Bohol for the educational tour.",
        modalPhotos: ["/images/PRE DEPARTURE.png", "/images/premain.jpg", "/images/pre1.jpg", "/images/pre2.jpg", "/images/pre3.jpg", "/images/pre4.jpg", "/images/pre5.jpg", "/images/pre6.jpg"] // Add placeholder extra photos
    },
    { 
        title: "WORLDTECH SOLUTIONS INC.", 
        location: "Cebu", 
        date: "November 19, 2025",
        photoCount: 6, 
        imagePath: "/images/WORLDTECH.jpg",
        description: "Worldtech Information Solutions, Inc. is a Philippine-based IT consultancy and training company with offices in Cebu, Manila, and elsewhere. We received insightful seminars here.",
        modalPhotos: ["/images/WORLDTECH.jpg", "/images/worldtech2.jpg", "/images/worldtech3.jpg", "/images/worldtech4.jpg", "/images/worldtech5.jpg", "/images/worldtech6.jpg"] 
    },
    { 
        title: "BAI HOTEL", 
        location: "Cebu", 
        date: "November 19, 2025",
        photoCount: 6, 
        imagePath: "/images/BAI HOTEL.jpg",
        description: "The accommodation where the team stayed during the Cebu portion of the tour.",
        modalPhotos: ["/images/bai1.jpg", "/images/bai1.jpg", "/images/bai2.jpg", "/images/bai3.jpg", "/images/bai4.jpg", "/images/bai5.jpg", "/images/bai6.jpg"] 
    },
    { 
        title: "CODECHUM", 
        location: "Cebu", 
        date: "November 20, 2025",
        photoCount: 9, 
        imagePath: "/images/CODECHUM.jpg",
        description: "CodeChum is an educational technology platform designed to make learning programming accessible and engaging. We had a seminar on their platform and tools.",
        modalPhotos: ["/images/code1.jpg", "/images/code1.jpg", "/images/code2.jpg", "/images/code3.jpg", "/images/code4.jpg", "/images/code5.jpg", "/images/code6.jpg", "/images/code7.jpg", "/images/code9.jpg", "/images/code8.jpg"] 
    },
    { 
        title: "RIVANT IT CEBU", 
        location: "Cebu", 
        date: "November 20, 2025",
        photoCount: 9, 
        imagePath: "/images/RIVAN IT CEBU.jpg",
        description: "Rivan IT Cebu is a training center specializing in IT and computer literacy training. We learned about various certifications and career paths here.",
        modalPhotos: ["/images/rivan1.jpg", "/images/rivan1.jpg", "/images/rivan2.jpg", "/images/rivan3.jpg", "/images/rivan4.jpg", "/images/rivan5.jpg", "/images/rivan6.jpg", "/images/rivan7.jpg", "/images/rivan8.jpg", "/images/rivan9.jpg"]        
    },
    { 
        title: "MATA TECHNOLOGIES INC.", 
        location: "Cebu", 
        date: "November 21, 2025",
        photoCount: 8, 
        imagePath: "/images/MATA TECHNOLOGIES.jpg",
        description: "Mata Technologies Inc. specializes in virtual tours and reality mapping. A fascinating visit showcasing cutting-edge tech applications.",
        modalPhotos: ["/images/mata1.jpg", "/images/mata1.jpg", "/images/mata2.jpg", "/images/mata3.jpg", "/images/mata4.jpg", "/images/mata5.jpg", "/images/mata6.jpg", "/images/mata7.jpg", "/images/mata8.jpg"]
    },
    { 
        title: "CDRRMO TAGBILARAN", 
        location: "Bohol", 
        date: "November 22, 2025",
        photoCount: 5, 
        imagePath: "/images/CDRRMO TAGBILARAN.jpg",
        description: "A visit to the City Disaster Risk Reduction and Management Office in Tagbilaran, Bohol, focusing on IT and communication systems in emergency response.",
        modalPhotos: ["/images/tag1.jpg", "/images/tag1.jpg", "/images/tag2.jpg", "/images/tag3.jpg", "/images/tag4.jpg", "/images/tag5.jpg" ]
    },
    { 
        title: "SIDE TRIP", 
        location: "Cebu & Bohol", 
        date: "November 19-22, 2025",
        photoCount: 26, 
        imagePath: "/images/SIDETRIP.png",
        description: "Memorable photos from the leisure and sightseeing activities across Cebu and Bohol.",
        modalPhotos: ["/images/lap1.jpg", "/images/lap1.jpg", "/images/lap2.jpg", "/images/lap3.jpg", "/images/lap4.jpg",
            "/images/san1.jpg", "/images/san2.jpg", "/images/san3.jpg", "/images/san4.jpg",
            "/images/choc1.jpg", "/images/choc2.jpg", "/images/choc3.jpg", "/images/choc4.jpg", 
            "/images/boh1.jpg", "/images/boh2.jpg", "/images/boh3.jpg", "/images/boh4.jpg",
            "/images/lob1.jpg", "/images/lob2.jpg", "/images/lob3.jpg", "/images/lob4.jpg",
            "/images/man1.jpg", "/images/man2.jpg", 
            "/images/mir1.jpg", "/images/mir2.jpg", "/images/mir3.jpg", "/images/mir4.jpg",
            "/images/bac1.jpg", "/images/bac2.jpg", "/images/bac3.jpg", "/images/bac4.jpg" ]
            
    },
];

// =========================================================================
// NEW COMPONENT: ZOOM VIEW (Full-Screen Image)
// =========================================================================

const ZoomView = ({ src, alt, onClose }) => {
    return (
        <div 
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
            onClick={onClose} // Click anywhere to close
        >
            <div className="relative max-w-5xl max-h-full w-full h-full p-8" onClick={e => e.stopPropagation()}>
                {/* Close Button */}
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 text-white text-5xl z-50 transition-colors hover:text-cyan-400"
                    aria-label="Close zoomed image"
                >
                    &times;
                </button>
                
                {/* The Image */}
                <img 
                    src={src} 
                    alt={alt} 
                    className="w-full h-full object-contain rounded-lg shadow-2xl" 
                />
            </div>
            <p className="fixed bottom-4 text-white/70 text-sm">Click image or press Esc to close</p>
        </div>
    );
};


// =========================================================================
// 2. MODAL COMPONENT (Lightbox/Detail View) - UPDATED FOR SCROLL
// =========================================================================

const GalleryModal = ({ item, onClose }) => {
    if (!item) return null;

    // State to handle the zoomed image
    const [zoomedImage, setZoomedImage] = useState(null);

    // Filter secondary photos, skipping the first one (card preview)
    const secondaryPhotos = item.modalPhotos ? item.modalPhotos.slice(1) : [];

    // Effect to handle closing the zoom view with the Escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                if (zoomedImage) {
                    setZoomedImage(null);
                } else {
                    onClose();
                }
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [zoomedImage, onClose]);


    return (
        // Modal Overlay (Base)
        <div 
            className="fixed inset-0 z-40 bg-black bg-opacity-70 flex items-center justify-center p-4 overflow-y-auto"
            onClick={onClose} 
        >
            {/* Modal Content */}
            <div 
                // 💡 Key Change: Added 'max-h-[90vh]' to limit modal height
                className="bg-white dark:bg-neutral-900 border border-neutral-700 rounded-lg max-w-4xl w-full mx-auto shadow-2xl p-6 relative max-h-[90vh] flex flex-col"
                onClick={e => e.stopPropagation()} 
            >
                {/* Header and Description (Fixed/Non-Scrolling Content) */}
                <div className="flex-shrink-0">
                    
                    {/* Header and Close Button */}
                    <div className="flex justify-between items-start mb-6">
                        {/* ... (Header Content Unchanged) ... */}
                        <div>
                            <h2 className="text-3xl font-bold">{item.title}</h2>
                            <div className="flex items-center space-x-4 text-sm mt-1 text-neutral-600 dark:text-neutral-400">
                                <i className="fas fa-calendar-alt"></i><span>{item.date}</span>
                                <i className="fas fa-map-marker-alt"></i><span>{item.location}</span>
                                <i className="fas fa-camera"></i><span>{item.photoCount} photos</span>
                            </div>
                        </div>
                        {/* Close Button */}
                        <button 
                            onClick={onClose} 
                            className="text-2xl text-neutral-500 hover:text-red-500 transition-colors"
                            aria-label="Close modal"
                        >
                            &times;
                        </button>
                    </div>

                    {/* Description */}
                    <div className="mb-6 border-b border-neutral-300 dark:border-neutral-700 pb-4">
                        <h3 className="text-xl font-semibold mb-3">Description</h3>
                        <p className="text-base text-neutral-800 dark:text-neutral-200 whitespace-pre-line">{item.description}</p>
                    </div>
                </div>

                {/* Photos Preview - This is the SCROLLABLE area */}
                <div className="mt-4 flex-grow overflow-y-auto pr-2"> 
                    <h3 className="text-xl font-semibold border-b border-neutral-300 dark:border-neutral-700 pb-1 mb-4">Click Photos to Zoom</h3>
                    <div className="grid grid-cols-4 gap-4">
                        {secondaryPhotos.length > 0 ? (
                            secondaryPhotos.map((photoPath, index) => (
                                <div 
                                    key={index} 
                                    className="aspect-w-3 aspect-h-2 overflow-hidden rounded-md border border-neutral-400 cursor-zoom-in transition-shadow duration-200 hover:shadow-lg"
                                    onClick={() => setZoomedImage(photoPath)} 
                                >
                                    <img 
                                        src={photoPath} 
                                        alt={`${item.title} Photo ${index + 2}`} 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))
                        ) : (
                            <p className="col-span-3 text-neutral-500">No secondary photos available.</p>
                        )}
                    </div>
                </div>
                
                {/* Footer (Fixed/Non-Scrolling Content) */}
                <p className="text-center text-sm text-neutral-500 dark:text-neutral-400 mt-6 flex-shrink-0">
                    Press Esc or click outside to close gallery view
                </p>
            </div>
            
            {/* RENDER ZOOM VIEW */}
            {zoomedImage && (
                <ZoomView 
                    src={zoomedImage} 
                    alt={item.title} 
                    onClose={() => setZoomedImage(null)} 
                />
            )}
        </div>
    );
};


// =========================================================================
// 3. GALLERY CARD (Clickable and Detailed - UNCHANGED)
// =========================================================================

const GalleryCard = ({ item, onClick }) => (
    <div 
        className="border border-neutral-400 dark:border-neutral-600 rounded-md p-2 h-96 flex flex-col shadow-md dark:shadow-neutral-700/50 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        onClick={() => onClick(item)} 
    >
        {/* Main Image Container */}
        <div className="h-48 w-full overflow-hidden rounded-md mb-3">
            <img 
                src={item.imagePath} 
                alt={item.title} 
                className="w-full h-full object-cover" 
            />
        </div>

        {/* Text Details Area */}
        <div className="flex-grow flex flex-col justify-between p-1">
            
            {/* H3 TITLE TEXT: Kept the aquamarine color */}
            <h3 className="text-xl font-bold mb-1 text-cyan-600 dark:text-cyan-400">
                {item.title}
            </h3>
            
            <div className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                <div className="flex items-center space-x-2">
                    <i className="fas fa-calendar-alt w-4"></i>
                    <span>{item.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <i className="fas fa-map-marker-alt w-4"></i>
                    <span>{item.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <i className="fas fa-camera w-4"></i>
                    <span>{item.photoCount} photos</span>
                </div>
            </div>

            {/* Snippet Description (Line-clamp limits visible text) */}
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mt-3 line-clamp-3">
                {item.description}
            </p>
        </div>
    </div>
);

// =========================================================================
// 4. MAIN GALLERY COMPONENT (with State - UNCHANGED)
// =========================================================================

export default function Gallery() {
    // State to manage the currently open modal item (null if closed)
    const [selectedItem, setSelectedItem] = useState(null);

    // Effect to handle Escape key press for closing the main modal
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && selectedItem) {
                 // If an item is selected (modal open), pressing escape is handled inside GalleryModal now
                 // But we keep this one to ensure a clean closing of the main modal if ZoomView isn't active
                 // Note: The logic for closing is primarily inside GalleryModal now for the nested state
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [selectedItem]);

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
                
                {/* LEFT COLUMN: Introduction Text */}
                <div className="lg:w-1/3 space-y-4">
                    <h2 className="text-3xl font-bold">Educational Tour Photos</h2>
                    <p className="text-base text-neutral-700 dark:text-neutral-300">
                        Welcome to the Gallery! This section highlights the places we visited during our educational tour. Each card represents a key destination or company visit, showcasing the different learning environments and technical insights we gained.
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 italic">
                        Click on a card to see more photos and a brief description of the experience.
                    </p>
                </div>

                {/* RIGHT COLUMN: Image Grid */}
                <div className="lg:w-2/3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {galleryItems.map((item, index) => (
                            <GalleryCard 
                                key={index} 
                                item={item} 
                                onClick={setSelectedItem} 
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* MODAL RENDERED HERE */}
            <GalleryModal 
                item={selectedItem} 
                onClose={() => setSelectedItem(null)} 
            />
            
        </section>
    );
}