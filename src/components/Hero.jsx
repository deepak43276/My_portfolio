import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToNext = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      
      {/* Animated professional gradient waves */}
      <div className="absolute inset-0 -z-10">
        <svg className="w-full h-full">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4f46e5" />
              <stop offset="50%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
          <motion.path
            fill="url(#grad1)"
            initial={{ y: 0 }}
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
            d="M0,160 C320,200 640,120 960,160 L960,320 L0,320 Z"
          />
          <motion.path
            fill="url(#grad1)"
            initial={{ y: 0 }}
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
            opacity={0.5}
            d="M0,180 C320,220 640,140 960,180 L960,320 L0,320 Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold mb-4 sm:mb-6 text-white drop-shadow-lg leading-tight px-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {"Let's Build the Future Together"}
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-blue-200 mb-3 sm:mb-4 px-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Empowering ideas with code, creativity, and cutting-edge frameworks.
          </motion.p>

          <motion.p
            className="hidden sm:block text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            Explore a world where technology meets innovation. Discover sleek designs, seamless user experiences, and excellence in digital work.
          </motion.p>

          <motion.div
            className="flex flex-row gap-3 sm:gap-4 justify-center items-center px-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <Button
              size="lg"
              className="w-auto bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-800 text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-xs sm:text-sm lg:text-base"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full border-2 border-blue-400 text-blue-300 hover:bg-gray-800 hover:text-white transition-colors duration-300 transform hover:scale-105 shadow-md text-xs sm:text-sm lg:text-base flex items-center gap-2"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get in Touch <ArrowDown className="w-4 h-4 ml-1" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-2 sm:bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce"
      >
        <ArrowDown className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-300 drop-shadow-lg" />
      </button>
    </section>
  );
};

export default Hero;
