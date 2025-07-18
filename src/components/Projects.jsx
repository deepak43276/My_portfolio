import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Github, ArrowUp, ChevronLeft, ChevronRight, Grid, RotateCw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "AI Interview Platform",
      role: "Full Stack Developer",
      links: [
        { label: "GitHub", url: "https://github.com/deepak43276/ai_interview_platform" },
        { label: "Live Demo", url: "https://ai-interview-platform-swart.vercel.app/" }
      ],
      date: "May 2025",
      description: [
        "Built a full-stack voice-driven interview platform with real-time Q&A based on role using OpenAI, voice interaction via VAPI AI, and Google OAuth authentication powered by Supabase.",
        "Tech Stack: Next.js, React, Tailwind CSS, Supabase (PostgreSQL, Auth), OpenAI, VAPI AI, Lucide."
      ]
    },
    {
      title: "Excel Analysis Platform",
      role: "Full Stack Developer",
      links: [
        { label: "GitHub", url: "https://github.com/deepak43276/Excel_Analysis_Platform" },
        { label: "Live Demo", url: "https://excel-analysis-platform-wine.vercel.app/" }
      ],
      date: "June 2025",
      description: [
        "Developed an Excel analytics platform with role-based authentication, secure file upload, and interactive 2D/3D data visualization using Plotly.js. Included upload history and an admin dashboard for user management.",
        "Tech Stack: React, Vite, Tailwind CSS, Redux Toolkit, Plotly.js, Node.js, Express, MongoDB, JWT, Multer, MongoDB Atlas."
      ]
    },
    {
      title: "FarmSync",
      role: "Full Stack Developer",
      links: [
        { label: "GitHub", url: "https://github.com/deepak43276/DirectMarket" }
      ],
      date: "Oct 2023",
      description: [
        "Developed a responsive farmer-to-buyer marketplace enabling direct trade, product listing, and role-based authentication. Designed with a clean UI and PHP-MySQL backend to manage users, products, and transactions.",
        "Tech Stack: HTML5, CSS3, JavaScript, PHP, MySQL."
      ]
    },
    {
      title: "Job Search Platform",
      role: "Full Stack Developer",
      links: [
        { label: "GitHub", url: "https://github.com/deepak43276/Findy_Application" }
      ],
      date: "July 2025",
      description: [
        "Designed and developed a job portal enabling candidates to apply, employers to manage listings, and admins to oversee operations — secured with JWT-based authentication and role-specific dashboards.",
        "Tech Stack: Next.js, Tailwind CSS, TypeScript, Spring Boot, PostgreSQL, JWT, BCrypt."
      ]
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const intervalRef = useRef();

  useEffect(() => {
    if (!showAllProjects) {
      intervalRef.current = setInterval(() => {
        handleNext();
      }, 5000);
      return () => clearInterval(intervalRef.current);
    }
  }, [showAllProjects]);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(-1);
    setCurrentIndex(prev => (prev - 1 + projects.length) % projects.length);
    resetAutoRotation();
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(1);
    setCurrentIndex(prev => (prev + 1) % projects.length);
    resetAutoRotation();
  };

  const resetAutoRotation = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 3000);
  };

  const goToProject = (index) => {
    if (index === currentIndex || isAnimating) return;
    setIsAnimating(true);
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    resetAutoRotation();
  };

  const toggleView = () => {
    setShowAllProjects(!showAllProjects);
    if (!showAllProjects) {
      clearInterval(intervalRef.current);
    }
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? '50%' : '-50%',
      opacity: 0,
      filter: 'blur(4px)'
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: 'blur(0)',
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? '-30%' : '30%',
      opacity: 0,
      filter: 'blur(4px)',
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  const buttonVariants = {
    initial: { scale: 1 },
    tap: { scale: 0.95 },
    hover: { 
      scale: 1.05,
      backgroundColor: "rgba(55, 65, 81, 0.8)",
      transition: { duration: 0.2 }
    }
  };

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-gray-900 relative">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-12 gap-4">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-violet-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Featured Projects
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.button
              onClick={toggleView}
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-gradient-to-r from-blue-800 to-blue-900 hover:from-blue-700 hover:to-blue-800 text-white transition-all shadow-md backdrop-blur-sm text-sm sm:text-base"
            >
              {showAllProjects ? (
                <>
                  <motion.span
                    key="rotate-icon"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <RotateCw className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.span>
                  <span>Show Carousel</span>
                </>
              ) : (
                <>
                  <motion.span
                    key="grid-icon"
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.6 }}
                  >
                    <Grid className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.span>
                  <span>View All Projects</span>
                </>
              )}
            </motion.button>
          </motion.div>
        </div>

        {showAllProjects ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start mb-4 sm:mb-6 gap-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                  <span className="text-xs sm:text-sm text-gray-400 bg-gray-900/50 px-2 sm:px-3 py-1 rounded-full">
                    {project.date}
                  </span>
                </div>
                <div className="text-gray-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                  {project.description.map((desc, i) => (
                    <p key={i} className="mb-2 last:mb-0">{desc}</p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                  {project.links && project.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 sm:px-3 py-1 bg-blue-900/70 text-blue-200 rounded-full text-xs font-medium hover:bg-blue-800 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="relative w-full max-w-4xl mx-auto">
            {/* Navigation buttons */}
            <button
              onClick={handlePrev}
              className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-gray-800 hover:bg-blue-700 text-gray-300 hover:text-white transition-all shadow-lg"
              disabled={isAnimating}
            >
              <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-gray-800 hover:bg-blue-700 text-gray-300 hover:text-white transition-all shadow-lg"
              disabled={isAnimating}
            >
              <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>
            {/* Carousel container */}
            <div className="relative w-full h-[400px] sm:h-[350px] md:h-[400px] overflow-hidden">
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
                  className="absolute w-full h-full flex justify-center items-start"
                >
                  <div className="bg-gray-800 rounded-xl p-4 sm:p-6 md:p-8 w-full max-w-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-between">
                    <div>
                      <div className="flex flex-col sm:flex-row justify-between items-start mb-4 sm:mb-6 gap-2">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                          {projects[currentIndex].title}
                        </h3>
                        <span className="text-xs sm:text-sm text-gray-400 bg-gray-900/50 px-2 sm:px-3 py-1 rounded-full">
                          {projects[currentIndex].date}
                        </span>
                      </div>
                      <div className="text-gray-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                        {projects[currentIndex].description.map((desc, i) => (
                          <p key={i} className="mb-2 last:mb-0">{desc}</p>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                        {projects[currentIndex].links && projects[currentIndex].links.map((link, i) => (
                          <a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-2 sm:px-3 py-1 bg-blue-900/70 text-blue-200 rounded-full text-xs font-medium hover:bg-blue-800 hover:text-white transition-colors"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            {/* Project indicators */}
            <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToProject(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${index === currentIndex ? 'bg-blue-500 w-4 sm:w-6' : 'bg-gray-600 hover:bg-gray-500'}`}
                  aria-label={`Go to project ${index + 1}`}
                  disabled={isAnimating}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;