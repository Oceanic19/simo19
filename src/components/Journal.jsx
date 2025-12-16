// src/components/Journal.jsx

import React, { useState, useEffect } from 'react';

// =========================================================================
// 1. DATA STRUCTURE: Single Journal Card Data
// This single object contains all the information for the Journal section.
// =========================================================================

const journalData = {
    
    description: "This comprehensive section contains all handwritten journal entries detailing the experiences, key learnings, and personal reflections from each company and institution visited during the educational tour.",
    date: "Sept. 19 - 22, 2025",
    // Use the path for the main cover image or the first page
    imagePath: "/images/HOME.jpg", // REPLACE with your main cover image path
    
    // The modalPhotos array holds ALL journal pages, in order.
    modalPhotos: [
        "/images/HOME.jpg", 
        "/images/WT1.jpg", 
        "/images/CC1.jpg", 
        "/images/R1.jpg", 
        "/images/M1.jpg", 
        "/images/C1.jpg", 
        "/images/EVAL.jpg", 
        // Add all your journal pages here
    ],
};


// =========================================================================
// 2. ZOOM VIEW COMPONENT (Re-used for the click-to-zoom feature)
// =========================================================================

const ZoomView = ({ src, alt, onClose }) => {
    // Uses the dark background for high contrast when viewing the journal page
    return (
        <div 
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
            onClick={onClose} 
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
                
                {/* The Journal Page Image */}
                <img 
                    src={src} 
                    alt={alt} 
                    // object-contain ensures the entire page is visible within the frame
                    className="w-full h-full object-contain rounded-lg shadow-2xl" 
                />
            </div>
            <p className="fixed bottom-4 text-white/70 text-sm">Click image or press Esc to close</p>
        </div>
    );
};


// =========================================================================
// 3. JOURNAL MODAL (Adapted from Gallery Modal: Soft background, 3-column grid, Zoom)
// =========================================================================

const JournalModal = ({ item, onClose }) => {
    if (!item) return null;

    const [zoomedImage, setZoomedImage] = useState(null);
    
    // All photos in the array are shown, as there is no separate card preview image to skip.
    const journalPhotos = item.modalPhotos || [];
    
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
        // Modal Overlay (Soft Background with Blur)
        <div 
            className="fixed inset-0 z-40 bg-neutral-800/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
            onClick={onClose} 
        >
            {/* Modal Content - Max height and Flex layout for scrolling */}
            <div 
                className="bg-white dark:bg-neutral-900 border border-neutral-700 rounded-lg max-w-4xl w-full mx-auto shadow-2xl p-6 relative max-h-[90vh] flex flex-col"
                onClick={e => e.stopPropagation()} 
            >
                {/* Header and Description (Fixed/Non-Scrolling Content) */}
                <div className="flex-shrink-0">
                    
                    {/* Header: Title and Date ONLY */}
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <h2 className="text-3xl font-bold">{item.title}</h2>
                            <div className="flex items-center space-x-4 text-sm mt-1 text-neutral-600 dark:text-neutral-400">
                                <i className="fas fa-calendar-alt"></i><span>{item.date}</span>
                                <i className="fas fa-file-alt"></i><span>{journalPhotos.length} Pages</span>
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
                        <h3 className="text-xl font-semibold mb-3">Overview</h3>
                        <p className="text-base text-neutral-800 dark:text-neutral-200 whitespace-pre-line">{item.description}</p>
                    </div>
                </div>

                {/* Journal Photo Grid - SCROLLABLE area, 3 columns */}
                <div className="mt-4 flex-grow overflow-y-auto pr-2"> 
                    <h3 className="text-xl font-semibold border-b border-neutral-300 dark:border-neutral-700 pb-1 mb-4">Click Pages to Read</h3>
                    
                    {/* 3-COLUMN GRID (as requested) */}
                    <div className="grid grid-cols-3 gap-4"> 
                        {journalPhotos.length > 0 ? (
                            journalPhotos.map((photoPath, index) => (
                                <div 
                                    key={index} 
                                    className="aspect-w-3 aspect-h-4 overflow-hidden rounded-md border border-neutral-400 cursor-zoom-in transition-shadow duration-200 hover:shadow-lg"
                                    onClick={() => setZoomedImage(photoPath)} // Click triggers the ZoomView
                                >
                                    <img 
                                        src={photoPath} 
                                        alt={`Journal Page ${index + 1}`} 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))
                        ) : (
                            <p className="col-span-3 text-neutral-500">No journal pages available.</p>
                        )}
                    </div>
                </div>
                
                {/* Footer (Fixed/Non-Scrolling Content) */}
                <p className="text-center text-sm text-neutral-500 dark:text-neutral-400 mt-6 flex-shrink-0">
                    Press Esc or click outside to close journal entry
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
// 4. MAIN JOURNAL COMPONENT (Static Card)
// =========================================================================

const JournalCard = ({ item, onClick }) => (
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
            
            <h3 className="text-xl font-bold mb-1 text-cyan-600 dark:text-cyan-400">
                {item.title}
            </h3>
            
            <div className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                <div className="flex items-center space-x-2">
                    <i className="fas fa-calendar-alt w-4"></i>
                    <span>{item.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <i className="fas fa-file-alt w-4"></i>
                    <span>{item.modalPhotos.length} Pages</span>
                </div>
            </div>

            {/* Snippet Description */}
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mt-3 line-clamp-3">
                {item.description}
            </p>
        </div>
    </div>
);


export default function Journal() {
    const [selectedItem, setSelectedItem] = useState(null);

    return (
        <section id="journal" className="px-10 py-16 scroll-mt-24">

 {/* Header (Matching your requested design) */}
        <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">MY LEARNING JOURNAL</h2>
       <p className="text-sm text-neutral-500 dark:text-neutral-400 italic">
                Click the card to view all the scanned journal pages in a scrolling gallery.
             </p>
        </div>
        
            {/* Main Content: Layout */}
            <div className="flex flex-col lg:flex-row gap-12">
                
                {/* LEFT COLUMN: Introduction Text */}
                <div className="lg:w-1/3 space-y-4">
                    <h2 className="text-3xl font-bold">{journalData.title}</h2>
                    <p className="text-base text-neutral-700 dark:text-neutral-300">
                        {journalData.description}
                    </p>
                
                </div>

                {/* RIGHT COLUMN: Single Journal Card */}
                <div className="lg:w-2/3">
                    <div className="grid grid-cols-1 max-w-sm">
                        <JournalCard 
                            item={journalData} 
                            onClick={setSelectedItem} 
                        />
                    </div>
                </div>
            </div>

            {/* MODAL RENDERED HERE */}
            <JournalModal 
                item={selectedItem} 
                onClose={() => setSelectedItem(null)} 
            />
            
        </section>
    );
}