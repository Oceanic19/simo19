// src/components/Home.jsx

import React, { useState, useEffect } from 'react';

const FULL_TEXT = "A Student from the Holy Cross of Davao College"; 
const TYPING_SPEED = 70; 

export default function Home() {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
    const [typingComplete, setTypingComplete] = useState(false); 

    // Effect for the typewriter animation
    useEffect(() => {
        if (index < FULL_TEXT.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + FULL_TEXT.charAt(index));
                setIndex(index + 1);
            }, TYPING_SPEED);
            return () => clearTimeout(timeout);
        } else {
            setTypingComplete(true);
        }
    }, [index]);

    // Defines the slow shimmer class
    const slowShimmerClass = 'bg-[length:400%_400%] animate-[shimmer_5s_infinite_linear]';

    return (
        <section
            id="home"
            className="min-h-[70vh] flex flex-col justify-center items-center text-center px-4 scroll-mt-24"
        >
            {/* 1. NAME LINE */}
            <h1 className="font-sketch 
                           /* 💡 Responsive Text Size: 4xl on mobile, 7xl on medium screens and up */
                           text-4xl md:text-7xl mb-4 sm:mb-6 leading-normal
                           text-transparent bg-clip-text 
                           bg-gradient-to-r from-blue-300 via-violet-500 to-purple-500 
                           dark:from-blue-200 dark:via-violet-400 dark:to-purple-400">
                Hi, I'm Melgen Simo
            </h1>
            
            {/* 2. TYPEWRITER LINE */}
            <p className="font-sketch 
                          /* 💡 Responsive Text Size: 2xl on mobile, 5xl on medium screens and up */
                          text-2xl md:text-5xl leading-relaxed mt-2 sm:mt-4 
                          h-auto sm:h-[4rem] overflow-hidden max-w-full sm:max-w-none">
                <span className={`inline-block text-transparent bg-clip-text bg-no-repeat
                                 bg-gradient-to-r from-red-600 via-white to-blue-600
                                 dark:from-red-400 dark:via-gray-100 dark:to-blue-400
                                 ${typingComplete ? slowShimmerClass : ''}
                                 `}>
                    {displayedText}
                </span>
                {/* Optional: Blinking cursor */}
                <span className={`inline-block 
                                 /* 💡 Responsive Cursor Size */
                                 w-0.5 h-5 sm:w-1 sm:h-8 
                                 ml-1 bg-neutral-800 dark:bg-white 
                                 ${!typingComplete ? 'animate-pulse' : 'hidden'}`}></span>
            </p>
        </section>
    );
}