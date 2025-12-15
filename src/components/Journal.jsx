// src/components/Journal.jsx

import React, { useState, useEffect } from 'react';

// =========================================================================
// 1. DATA STRUCTURE: Journal Entries
// REMINDER: Ensure these image paths match the files in your public/images/ folder.
// =========================================================================

const journalItems = [
    { 
        title: "UP Business Incubator for IT", 
        date: "Sept. 22, 2025",
        imagePath: "/images/journal-up-business.jpg", 
        description: "Reflections on the visit to UP Business Incubator for IT, covering topics like startup culture and technological innovation.",
    },
    { 
        title: "Rivan IT Cebu", 
        date: "Sept. 22, 2025",
        imagePath: "/images/journal-rivan-it.jpg", 
        description: "Detailed account of the seminar at Rivan IT Cebu, focusing on career certifications and IT literacy training.",
    },
    { 
        title: "Dynata Philippines INC.", 
        date: "Sept. 22, 2025",
        imagePath: "/images/journal-dynata.jpg", 
        description: "Observations and takeaways from the visit to Dynata Philippines INC., specifically regarding data handling and market research technology.",
    },
    { 
        title: "Mata Technologies INC.", 
        date: "Sept. 23, 2025",
        imagePath: "/images/journal-mata-tech.jpg", 
        description: "Journal entry on Mata Technologies Inc., focusing on their work in virtual tours, augmented reality, and real estate applications.",
    },
    { 
        title: "T.A.R.S.I.E.R 117", 
        date: "Sept. 23, 2025",
        imagePath: "/images/journal-tarsier-117.jpg", 
        description: "Reflection on the visit to T.A.R.S.I.E.R 117, discussing the role of IT in emergency response and communication systems in Bohol.",
    },
];

// =========================================================================
// 2. MODAL COMPONENT (Displays Full Journal Image)
// =========================================================================

const JournalModal = ({ item, onClose }) => {
    if (!item) return null;

    // Effect to handle closing the modal with the Escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [onClose]);

    return (
        // Modal Overlay (Soft Background with Blur)
        <div 
            className="fixed inset-0 z-50 bg-neutral-800/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
            onClick={onClose} 
        >
            {/* Modal Content - Container for the zoomed journal page */}
            <div 
                className="relative max-w-4xl max-h-full w-full mx-auto p-4" 
                onClick={e => e.stopPropagation()}
            >
                {/* Close Button */}
                <button 
                    onClick={onClose} 
                    className="absolute top-0 right-0 text-white text-5xl z-50 transition-colors hover:text-cyan-400"
                    aria-label="Close journal modal"
                >
                    &times;
                </button>
                
                {/* Journal Image */}
                <img 
                    src={item.imagePath} 
                    alt={`Journal for ${item.title}`} 
                    className="w-full h-full object-contain rounded-lg shadow-2xl border-4 border-white dark:border-neutral-200" 
                />
            </div>
            <p className="fixed bottom-4 text-white/70 text-sm">Click outside or press Esc to close</p>
        </div>
    );
};

// =========================================================================
// 3. JOURNAL CARD (Clickable to open the modal)
// =========================================================================

const JournalCard = ({ item, onClick }) => (
    <div 
        className="border border-neutral-400 dark:border-neutral-600 rounded-md p-2 h-96 flex flex-col shadow-md dark:shadow-neutral-700/50 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        onClick={() => onClick(item)} 
    >
        {/* Image Preview Container */}
        <div className="h-64 w-full overflow-hidden rounded-md mb-3">
            <img 
                src={item.imagePath} 
                alt={item.title} 
                className="w-full h-full object-cover" 
            />
        </div>

        {/* Text Details Area */}
        <div className="flex-grow flex flex-col p-1">
            <h3 className="text-xl font-bold mb-1 text-cyan-600 dark:text-cyan-400">
                {item.title}
            </h3>
            
            <div className="flex items-center space-x-2 text-sm text-neutral-600 dark:text-neutral-400">
                <i className="fas fa-calendar-alt w-4"></i>
                <span>{item.date}</span>
            </div>

            {/* Snippet Description */}
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mt-3 line-clamp-3">
                {item.description}
            </p>
        </div>
    </div>
);

// =========================================================================
// 4. MAIN JOURNAL COMPONENT
// =========================================================================

export default function Journal() {
    const [selectedJournal, setSelectedJournal] = useState(null);

    return (
        <section id="journal" className="px-10 py-16 scroll-mt-24">
            
            {/* Breadcrumb Navigation */}
            <div className="flex items-center mb-10 text-lg">
                <a href="#gallery" className="text-neutral-500 dark:text-neutral-400 hover:underline">Gallery</a>
                <span className="mx-2">/</span>
                <a href="#journal" className="text-indigo-600 dark:text-indigo-300 font-semibold hover:underline">Journal</a>
            </div>

            {/* Main Content: Layout */}
            <div className="space-y-8">
                
                <h2 className="text-3xl font-bold">Educational Tour Journals</h2>
                <p className="text-base text-neutral-700 dark:text-neutral-300 max-w-2xl">
                    This section contains the handwritten journals detailing the experiences, key learnings, and personal reflections from each company and institution visited during the educational tour. Click on any card to view the full journal page.
                </p>

                {/* Journal Card Grid: 3 columns for desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
                    {journalItems.map((item, index) => (
                        <JournalCard 
                            key={index} 
                            item={item} 
                            onClick={setSelectedJournal} 
                        />
                    ))}
                </div>
            </div>

            {/* MODAL RENDERED HERE */}
            <JournalModal 
                item={selectedJournal} 
                onClose={() => setSelectedJournal(null)} 
            />
            
        </section>
    );
}