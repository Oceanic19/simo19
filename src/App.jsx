// src/App.jsx

import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; 
import Home from "./components/Home";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Journal from "./components/Journal"; // <--- ADD THIS IMPORT

export default function App() {
    // ... (toggleMode and mainWrapperClass logic remains the same)
    const [mode, setMode] = useState("light"); 

    const toggleMode = () => {
        setMode(prevMode => (prevMode === "light" ? "dark" : "light"));
    };

    const mainWrapperClass = mode === "dark" ? "dark" : "";

    const sections = ["home", "about", "gallery", "journal", "certificates"];
    
    return (
        <div className={`${mainWrapperClass}`}>
            <div className={`min-h-screen bg-neutral-50 dark:bg-neutral-900 text-neutral-800 dark:text-white`}>
                <div className="w-full max-w-[1200px] mx-auto relative border border-neutral-500 mb-6 min-h-[96vh]">

                    {/* FIXED NAVBAR CONTAINER (Unchanged) */}
                    <div className={`fixed w-full max-w-[1200px] mx-auto z-20 top-0 left-1/2 -translate-x-1/2 
                                    border border-neutral-500 border-t-0 border-b-0
                                    bg-neutral-50 dark:bg-neutral-900`}>
                        
                        <header className="flex justify-between items-center px-10 pt-6 pb-4">
                            {/* ... (Header content remains the same) ... */}
                            <div className="flex items-center gap-6">
                                <a
                                    href="#home"
                                    className="font-bold tracking-widest text-lg transition-all duration-300
                                            hover:-translate-y-1 hover:text-indigo-600 dark:hover:text-indigo-300
                                            cursor-default" 
                                >
                                    SARGEE
                                </a>
                                <div className="flex gap-4 text-xl">
                                    {/* Social Icons Mapping */}
                                    {[
                                        { icon: "facebook-f", link: "https://facebook.com" },
                                        { icon: "github", link: "https://github.com" },
                                        { icon: "instagram", link: "https://instagram.com" },
                                    ].map((item, index) => (
                                        <a
                                            key={index}
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="transition-all duration-300 hover:scale-125 hover:-translate-y-1" 
                                        >
                                            <i className={`fab fa-${item.icon}`}></i>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* RIGHT - Navigation Links and Dark Mode Toggle */}
                            <nav className="flex items-center gap-8 text-sm">
                                {sections.map((item) => (
                                    <a
                                        key={item}
                                        href={`#${item}`}
                                        className="transition-all duration-300 hover:scale-110 hover:text-indigo-600 dark:hover:text-indigo-300 capitalize"
                                    >
                                        {item.replace("certificates", "Certificates")}
                                    </a>
                                ))}

                                {/* --- SINGLE ICON TOGGLE (Functional and Clickable) --- */}
                                <button
                                    onClick={toggleMode} 
                                    className="text-lg transition-all duration-300 hover:scale-125 hover:-translate-y-1 cursor-pointer"
                                    aria-label="Toggle light/dark mode"
                                >
                                    <i
                                        className={`fas ${
                                            mode === "light"
                                                ? "fa-moon text-neutral-600" 
                                                : "fa-sun text-amber-500" 
                                        }`}
                                    ></i>
                                </button>
                                {/* --- END SINGLE ICON TOGGLE --- */}

                            </nav>
                        </header>
                        
                        <hr className="border-neutral-400 dark:border-neutral-600 mx-10" />

                    </div>
                    
                    {/* FIXED NAVBAR COMPENSATION (Unchanged) */}
                    <div className="h-[7.5rem]"></div> 
                    
                    {/* SECTION RENDERING */}
                    <div className="relative">
                        <Home />
                        <hr className="absolute bottom-0 left-0 right-0 mx-10 border-neutral-400 dark:border-neutral-600" />
                    </div>
                    
                    <div className="relative">
                        <About />
                        <hr className="absolute bottom-0 left-0 right-0 mx-10 border-neutral-400 dark:border-neutral-600" />
                    </div>
                    
                    <div className="relative">
                        <Gallery />
                        <hr className="absolute bottom-0 left-0 right-0 mx-10 border-neutral-400 dark:border-neutral-600" />
                    </div>
                    
                    {/* 💡 JOURNAL SECTION: USING THE NEW COMPONENT */}
                    <div className="relative">
                        <Journal /> 
                        <hr className="absolute bottom-0 left-0 right-0 mx-10 border-neutral-400 dark:border-neutral-600" />
                    </div>
                    
                    <div id="certificates" className="min-h-[50vh] px-10 py-16 scroll-mt-24">
                        <h2 className="text-3xl font-bold mb-4">Certificates Section</h2>
                        <p>Content for your Certificates goes here.</p>
                    </div>

                </div> 
            </div>
        </div>
    );
}