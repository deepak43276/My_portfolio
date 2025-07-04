import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Github, ArrowUp, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Incident Reporter System",
      description:
        "Built an incident management solution using JavaScript and CSS animations for interactive alerts. Developed responsive UI using React/Vue.js, reducing response time by 40% via real-time browser notifications.",
      tech: ["JavaScript", "React", "CSS", "Node.js"],
      date: "May 2024"
    },
    {
      title: "Online Access Tracker",
      description:
        "Built a direct browser-based ecommerce platform using PHP and MySQL with comprehensive admin panel. Included dynamic product catalog, user/admin roles, and full-featured admin dashboard for order management.",
      tech: ["PHP", "MySQL", "JavaScript", "CSS"],
      date: "Oct 2024"
    },
    {
      title: "Fluffy Job Search Application",
      description:
        "A job search platform built using React, Vite, and Tailwind CSS with advanced filtering and JWT-based authentication on HTTP-only cookies.",
      tech: ["React", "Vite", "Tailwind CSS", "JWT"],
      date: "Aug 2024"
    },
    {
      title: "BitShop E-Commerce",
      description:
        "Created a MERN-based e-shopping platform with JWT auth, responsive UI using Tailwind CSS, and a full-featured admin dashboard for order management.",
      tech: ["MongoDB", "Express", "React", "Node.js", "Tailwind"],
      date: "Jun 2024"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef();
  const containerRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    resetAutoRotation();
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    resetAutoRotation();
  };

  const resetAutoRotation = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 4000);
  };

  const goToProject = (index) => {
    if (index === currentIndex || isAnimating) return;
    setIsAnimating(true);
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    resetAutoRotation();
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      position: "absolute"
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "relative",
      transition: {
        duration: 0.8,
        ease: [0.32, 0.72, 0, 1]
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? "-30%" : "30%",
      opacity: 0,
      position: "absolute",
      transition: {
        duration: 0.8,
        ease: [0.32, 0.72, 0, 1]
      }
    })
  };

  return (
    <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-600 rounded-full blur-3xl"
          animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-purple-600 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Featured Projects
        </motion.h2>

        <div className="relative w-full max-w-4xl mx-auto" ref={containerRef}>
          {/* Navigation buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-gray-800 hover:bg-blue-700 text-gray-300 hover:text-white transition-all shadow-lg"
            disabled={isAnimating}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-gray-800 hover:bg-blue-700 text-gray-300 hover:text-white transition-all shadow-lg"
            disabled={isAnimating}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel container with dynamic height */}
          <div className="relative w-full overflow-hidden">
            <AnimatePresence
              custom={direction}
              initial={false}
              onExitComplete={() => setIsAnimating(false)}
            >
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full flex justify-center items-start"
                layout
              >
                <div className="bg-gray-800 rounded-2xl shadow-xl w-full max-w-xl p-8">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold text-white">
                      {projects[currentIndex].title}
                    </h3>
                    <span className="text-sm text-gray-400 bg-gray-900/50 px-3 py-1 rounded-full">
                      {projects[currentIndex].date}
                    </span>
                  </div>

                  <p className="text-gray-300 mb-8 leading-relaxed">
                    {projects[currentIndex].description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {projects[currentIndex].tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-900/50 text-gray-200 rounded-full text-xs font-medium hover:bg-blue-900/50 hover:text-blue-200 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button
                      size="sm"
                      className="flex items-center gap-2 bg-gray-700 hover:bg-blue-700 text-white transition-all"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 text-gray-300 hover:bg-gray-800 hover:text-white transition-all"
                    >
                      <ArrowUp className="w-4 h-4" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Project indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-blue-500 w-6"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to project ${index + 1}`}
                disabled={isAnimating}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
