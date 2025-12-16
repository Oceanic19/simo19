// tailwind.config.js
// This file is manually created and contains the custom animation definitions.

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        // Ensure these paths match where your JSX files are located
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}", 
    ],
    darkMode: 'class',
    theme: {
        extend: {
            animation: {
                shimmer: 'shimmer 3s infinite linear',
                // 💡 NEW: Faster vertical falling star movement
                'slow-star': 'star-fall 100s linear infinite', 
            },
            keyframes: {
                shimmer: {
                    '0%': { backgroundPosition: '200% 0' },
                    '100%': { backgroundPosition: '-200% 0' },
                },
                // 💡 NEW KEYFRAME: Moves the background pattern only down the Y-axis
                'star-fall': {
                    '0%': { backgroundPosition: '0% 0%' },
                    // Moves the pattern 5000 pixels down
                    '100%': { backgroundPosition: '0% 5000px' }, 
                }
            },
        },
    },
    plugins: [],
};