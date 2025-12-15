// src/App.jsx

import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Ensure this is installed: npm install @fortawesome/fontawesome-free
import Home from "./components/Home";
import About from "./components/About";
import Gallery from "./components/Gallery";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Array of sections to map for the navigation links
  const sections = ["home", "about", "gallery", "journal", "certificates"];
  
  return (
    <div className={darkMode ? "dark" : ""}>
      {/* Outer container for dark mode background, removed flex-center */}
      <div className="min-h-screen bg-white dark:bg-neutral-900 text-black dark:text-white">
        
        {/* Main Content Wrapper: Centered, fixed width, border, and handles scrolling */}
        {/* We use 'relative' for the content and 'mx-auto' for centering */}
        <div className="w-full max-w-[1200px] mx-auto my-6 relative border border-neutral-500">

          {/* NAVBAR - Fixed height and styling */}
          <header className="flex justify-between items-center px-10 pt-6 pb-4">
            
            {/* LEFT - SARGEE and Social Icons */}
            <div className="flex items-center gap-6">
              <a
                href="#home"
                className="font-bold tracking-widest text-lg transition-all duration-300
                          hover:-translate-y-1 hover:text-indigo-600 dark:hover:text-indigo-300"
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

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="text-lg transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                aria-label="Toggle dark mode"
              >
                <i
                  className={`fas ${
                    darkMode
                      ? "fa-sun text-yellow-300" // Sun icon for dark mode (to switch to light)
                      : "fa-moon text-indigo-600" // Moon icon for light mode (to switch to dark)
                  }`}
                ></i>
              </button>
            </nav>
          </header>
          
          <hr className="border-neutral-400 mx-10" />

          {/* SECTION COMPONENTS RENDERED BELOW THE NAVBAR */}
          <Home />
          <About />
          <Gallery />
          
          {/* Placeholder for future sections */}
          <div id="journal" className="min-h-[50vh] px-10 py-16 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-4">Journal Section</h2>
            <p>Content for your Educational Tour Journal goes here.</p>
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