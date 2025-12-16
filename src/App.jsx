// src/App.jsx

import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; 
import Home from "./components/Home";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Journal from "./components/Journal"; 
import Certificate from "./components/Certificate"; 

export default function App() {
    // Mode is locked to "dark" as requested
    const mode = "dark"; 
    const sections = ["home", "about", "gallery", "journal", "certificates"]; 
    
    // --- Define Dark Mode Classes ---
    const bgClass = "bg-gradient-to-br from-black via-gray-950 to-indigo-950";
    const textClass = "text-white";
    const navbarBgClass = "bg-gray-900/90 backdrop-blur-md border-neutral-700";
    const contentBgClass = "bg-black/10 border-neutral-700";
    const hrColorClass = "border-neutral-700";

    return (
        <div className={`dark`}>
            {/* 1. MAIN BACKGROUND CONTAINER (Full Screen) */}
            <div className={`min-h-screen ${textClass} 
                             ${bgClass} bg-fixed relative overflow-x-hidden`}> 
                
                {/* 🌌 Cosmic Star Layer (Uses custom star-fall animation from config) */}
                <div className="absolute top-0 left-0 w-full h-full bg-stars animate-[star-fall_100s_linear_infinite] z-0"></div>
                
                {/* 2. CONTENT WRAPPER */}
                <div className={`w-full relative border mb-6 min-h-[96vh]
                                ${contentBgClass} backdrop-blur-none z-10`}> 

                    {/* FIXED NAVBAR CONTAINER */}
                    <div className={`fixed w-full z-20 top-0 left-0 right-0 
                                     border-b border-t-0
                                     ${navbarBgClass}`}> 
                        
                        <header className="flex justify-between items-center 
                                           /* 💡 Responsive Padding: px-4 on mobile, px-10 on sm screens and up */
                                           px-4 sm:px-10 pt-6 pb-4">
                            
                            <div className="flex items-center 
                                            /* 💡 Responsive Gap: gap-3 on mobile, gap-6 on sm screens and up */
                                            gap-3 sm:gap-6">
                                <a
                                    href="#home"
                                    /* 💡 Responsive Text Size: base on mobile, lg on sm screens and up */
                                    className="font-bold tracking-widest text-base sm:text-lg transition-all 
                                               hover:-translate-y-1 hover:text-indigo-400
                                               cursor-default" 
                                >
                                    SARGEE
                                </a>
                                <div className="flex 
                                                /* 💡 Responsive Gap: gap-2 on mobile, gap-4 on sm screens and up */
                                                gap-2 sm:gap-4 text-lg sm:text-xl">
                                    {/* Social Icons Mapping */}
                                    {[
                                        { icon: "facebook-f", link: "https://www.facebook.com/melgen.simo19" },
                                        { icon: "github", link: "https://github.com/Oceanic19" },
                                        { icon: "instagram", link: "https://www.instagram.com/melgenieee/" },
                                    ].map((item, index) => (
                                        <a
                                            key={index}
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="transition-all duration-300 hover:scale-125 hover:-translate-y-1 hover:text-indigo-400" 
                                        >
                                            <i className={`fab fa-${item.icon}`}></i>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* RIGHT - Navigation Links ONLY */}
                            <nav className="flex items-center 
                                            /* 💡 Responsive Gap: gap-4 on mobile, gap-8 on sm screens and up */
                                            gap-4 sm:gap-8 
                                            /* 💡 Responsive Text Size: xs on mobile, sm on sm screens and up */
                                            text-xs sm:text-sm">
                                {sections.map((item) => (
                                    <a
                                        key={item}
                                        href={`#${item}`}
                                        className="transition-all duration-300 hover:scale-110 hover:text-indigo-400 capitalize"
                                    >
                                        {/* 💡 Responsive Link Name: Shorten Certificates to Cert. on small screens */}
                                        {item === "certificates" ? <span className="hidden sm:inline">Certificates</span> : item.replace("certificates", "Certificates")}
                                        {item === "certificates" && <span className="sm:hidden">Cert.</span>}
                                    </a>
                                ))}
                            </nav>
                        </header>
                        
                        <hr className={`mx-4 sm:mx-10 ${hrColorClass}`} />

                    </div>
                    
                    {/* FIXED NAVBAR COMPENSATION */}
                    <div className="h-[7.5rem]"></div> 
                    
                    {/* SECTION RENDERING (Uses responsive horizontal rule) */}
                    <div className="relative">
                        <Home />
                        <hr className={`absolute bottom-0 left-0 right-0 mx-4 sm:mx-10 ${hrColorClass}`} />
                    </div>
                    
                    <div className="relative">
                        <About />
                        <hr className={`absolute bottom-0 left-0 right-0 mx-4 sm:mx-10 ${hrColorClass}`} />
                    </div>
                    
                    <div className="relative">
                        <Gallery />
                        <hr className={`absolute bottom-0 left-0 right-0 mx-4 sm:mx-10 ${hrColorClass}`} />
                    </div>
                    
                    <div className="relative">
                        <Journal /> 
                        <hr className={`absolute bottom-0 left-0 right-0 mx-4 sm:mx-10 ${hrColorClass}`} />
                    </div>
                    
                    <div className="relative">
                        <Certificate /> 
                        <hr className={`absolute bottom-0 left-0 right-0 mx-4 sm:mx-10 ${hrColorClass}`} />
                    </div>

                </div> 
            </div>
        </div>
    );
}