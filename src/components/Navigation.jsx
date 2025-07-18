"use client";

import { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "contact"];
    const sectionElements = sections.map(id => document.getElementById(id));

    function getClosestSection() {
      const scrollY = window.scrollY;
      const offset = 80; // height of nav + some margin
      let closest = null;
      let minDistance = Infinity;
      sectionElements.forEach((el, idx) => {
        if (el) {
          const rect = el.getBoundingClientRect();
          const distance = Math.abs(rect.top - offset);
          if (distance < minDistance) {
            minDistance = distance;
            closest = sections[idx];
          }
        }
      });
      if (closest) setActiveSection(closest);
    }

    window.addEventListener("scroll", getClosestSection, { passive: true });
    getClosestSection();
    return () => window.removeEventListener("scroll", getClosestSection);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // offset for fixed nav
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <nav 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 99999,
        background: isScrolled ? 'rgba(30,30,30,0.98)' : 'rgba(30,30,30,1)',
        color: 'white',
        minHeight: '60px',
        transition: 'all 0.3s',
      }}
      className="w-full"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => scrollToSection("home")}
            className="text-xl sm:text-2xl font-bold text-violet-300 hover:text-violet-200 transition-colors cursor-pointer"
          >
            DEEPAK M
          </button>
          
          {/* Desktop nav */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-all duration-200 relative group text-sm lg:text-base font-medium ${
                  activeSection === item.id 
                    ? "text-white" 
                    : "text-blue-200 hover:text-white"
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-purple-400 transition-all duration-300 ${
                  activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </button>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <button
            className={`md:hidden flex flex-col justify-center items-center w-8 h-8 sm:w-10 sm:h-10 focus:outline-none rounded-lg transition-colors duration-200 ${
              menuOpen 
                ? 'bg-gray-800 text-white' 
                : 'hover:bg-gray-800/50 text-blue-300'
            }`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden mt-3 sm:mt-4 flex flex-col space-y-2 sm:space-y-4 bg-gray-900/95 backdrop-blur-md p-4 sm:p-6 rounded-lg shadow-lg border border-gray-800">
            {navItems.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-base sm:text-lg text-left rounded-lg hover:bg-gray-800 px-3 sm:px-4 py-2 sm:py-3 transition-all duration-200 ${
                  activeSection === item.id 
                    ? "text-white bg-blue-600/20" 
                    : "text-blue-200 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;