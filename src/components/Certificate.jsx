// src/components/Certificate.jsx

import React, { useState, useEffect } from 'react';

// =========================================================================
// 1. DATA STRUCTURE: Certificate Entries (Your original data)
// =========================================================================

const certificateItems = [
    { 
    title: "National Certificate II in Computer Systems Servicing", 
    issuer: "TESDA",
    date: "December 3, 2025",
    imagePath: "/images/NC2.jpg", 
        },
    { 
    title: "Certificate of Completion", 
    issuer: "World of Adventure Travel and Tours",
    date: "November 22, 2025",
    imagePath: "/images/CERT1.jpg",  
        },
    { 
    title: "CC 105", 
    issuer: "CodeChum",
    date: "December 16, 2025",
    imagePath: "/images/CERT2.jpg", 
    
        }
    
];

// =========================================================================
// 2. ZOOM VIEW COMPONENT (Unchanged)
// =========================================================================

const ZoomView = ({ src, alt, onClose }) => {
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

                <div 
                    className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4 overflow-y-auto"
                            onClick={onClose} 
               >
                <div className="relative max-w-5xl max-h-full w-full h-full p-8" onClick={e => e.stopPropagation()}>
                    {/* Close Button */}
            <button 
                onClick={onClose} 
                    className="absolute top-4 right-4 text-white text-5xl z-50 transition-colors hover:text-cyan-400"
                    aria-label="Close zoomed certificate"
                >
                    &times;
                </button>
            
                    {/* The Certificate Image */}
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
// 3. CERTIFICATE CARD (UPDATED)
// =========================================================================

    const CertificateCard = ({ item, onClick }) => (
            <div 
        // Removed cursor-pointer from the main div since we are moving the onClick to the image container
        className="border border-neutral-400 dark:border-neutral-600 rounded-lg shadow-md dark:shadow-neutral-700/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group bg-white dark:bg-neutral-800 flex flex-col"
        >
        {/* Certificate Image Container (Wider aspect ratio for certificates) */}
            <div 
                className="aspect-[4/3] w-full overflow-hidden rounded-t-lg cursor-pointer"
                onClick={() => onClick(item)} // Handle click on the image
            >
                <img 
                      src={item.imagePath} 
                    alt={item.title} 
                        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-70" 
                        />
            
                {/* Hover Overlay Text */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-t-lg">
                    <p className="text-white text-lg font-semibold text-center p-4">
                Click to View Full Certificate
                </p>
                </div>
            </div>
            
            {/* Certificate Details Section */}
            <div className="p-4 flex-grow flex flex-col justify-between">
                <div>
                    <h3 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-1">{item.title}</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                       
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                       
                    </p>
                </div>

                {/* Verification Link Button (Conditional Render) */}
                {item.link && (
                    <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={e => e.stopPropagation()} // Prevent modal from opening when clicking the link
                        className="mt-2 inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2 px-4 rounded-lg text-center transition-colors duration-200 shadow-md text-sm"
                    >
                        View Verification Link
                    </a>
                )}
            </div>
        </div>
            );


// =========================================================================
// 4. MAIN CERTIFICATE COMPONENT (Exported as singular 'Certificate')
// =========================================================================

    export default function Certificate() {
        const [selectedCert, setSelectedCert] = useState(null);
            return (
           // The id must match the slug in the navbar: "certificates" (plural)
        <section id="certificates" className="px-10 py-16 scroll-mt-24 min-h-[50vh]">
    
    {/* Header (Matching your requested design) */}
        <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">MY CERTIFICATES</h2>
        <p className="text-base text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto">
            Click on any certificate image to view full details.
            </p>
        </div>


    {/* Certificate Card Grid: 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificateItems.map((item, index) => (
        <CertificateCard 
        key={index} 
        item={item} 
        onClick={setSelectedCert} 
            />
    ))}
        </div>
            

{/* MODAL RENDERED HERE */}
        {selectedCert && (
            <ZoomView 
            src={selectedCert.imagePath} 
                alt={selectedCert.title} 
            onClose={() => setSelectedCert(null)} 
            />
    )}
           
       </section>
    );
}