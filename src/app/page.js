"use client";

import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import dynamic from "next/dynamic";

// Lazy load heavy components
const ProjectsLazy = dynamic(() => import("../components/Projects"), {
  loading: () => <div className="py-12 sm:py-16 md:py-20 bg-gray-900 relative"><div className="container mx-auto px-4 sm:px-6 text-center"><div className="animate-pulse">Loading Projects...</div></div></div>,
  ssr: false
});

const ContactLazy = dynamic(() => import("../components/Contact"), {
  loading: () => <div className="py-12 sm:py-16 md:py-20 bg-gray-900 relative"><div className="container mx-auto px-4 sm:px-6 text-center"><div className="animate-pulse">Loading Contact...</div></div></div>,
  ssr: false
});

const FooterLazy = dynamic(() => import("../components/Footer"), {
  loading: () => <div className="py-12 sm:py-16 bg-gray-900 relative"><div className="container mx-auto px-4 sm:px-6 text-center"><div className="animate-pulse">Loading Footer...</div></div></div>,
  ssr: false
});

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <ProjectsLazy />
      <ContactLazy />
      <FooterLazy />
    </div>
  );
}
