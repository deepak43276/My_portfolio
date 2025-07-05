import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToNext = () => {
    const element = document.getElementById("about");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
        >
                      <motion.h1
              className="text-1xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-6xl 2xl:text-6xl font-extrabold mb-4 sm:mb-6 text-violet-300 drop-shadow-lg text-center leading-tight sm:leading-[1.1] px-2 whitespace-nowrap"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Let's Build the Future Together
          </motion.h1>
          <motion.p
            className="text-sm md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl text-blue-200 mb-3 sm:mb-4 px-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Empowering ideas with code, creativity, and cutting-edge frameworks.
          </motion.p>
          <motion.p
            className="hidden sm:block text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Explore a world where technology meets Innovation. Discover attractive designs, seamless user experiences, and the excellence of digital work.
          </motion.p>
          <motion.div
            className="flex flex-row gap-3 sm:gap-4 justify-center items-center px-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <Button 
              size="lg" 
              className="w-auto bg-gradient-to-r from-blue-800 to-blue-900 hover:from-blue-700 hover:to-blue-800 text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-800/20 text-xs sm:text-sm lg:text-base"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="w-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full border-2 border-blue-400 text-blue-300 hover:bg-gray-800 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-md text-xs sm:text-sm lg:text-base flex items-center gap-2"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get in Touch <ArrowDown className="w-4 h-4 ml-1" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.button 
        onClick={scrollToNext}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
        whileHover={{ scale: 1.2 }}
      >
        <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-blue-300" />
      </motion.button>
    </section>
  );
};

export default Hero;