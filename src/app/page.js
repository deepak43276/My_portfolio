"use client";

import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import dynamic from "next/dynamic";

// Lazy load heavy components with optimized loading states
const ProjectsLazy = dynamic(() => import("../components/Projects"), {
  loading: () => (
    <div className="py-12 sm:py-16 md:py-20 bg-gray-900 relative">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-800 rounded mb-4 max-w-md mx-auto"></div>
          <div className="h-4 bg-gray-800 rounded mb-2 max-w-sm mx-auto"></div>
        </div>
      </div>
    </div>
  ),
  ssr: false
});

const ContactLazy = dynamic(() => import("../components/Contact"), {
  loading: () => (
    <div className="py-12 sm:py-16 md:py-20 bg-gray-900 relative">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-800 rounded mb-4 max-w-md mx-auto"></div>
          <div className="h-4 bg-gray-800 rounded mb-2 max-w-sm mx-auto"></div>
        </div>
      </div>
    </div>
  ),
  ssr: false
});

const FooterLazy = dynamic(() => import("../components/Footer"), {
  loading: () => (
    <div className="py-12 sm:py-16 bg-gray-900 relative">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-800 rounded mb-2 max-w-xs mx-auto"></div>
        </div>
      </div>
    </div>
  ),
  ssr: false
});

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-900 pt-16 sm:pt-20">
        <Hero />
        <About />
        <Skills />
        <ProjectsLazy />
        <ContactLazy />
        <FooterLazy />
      </div>
    </>
  );
}
