"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import SkillIcon from "./SkillIcon";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const frontendSkills = [
    { name: "HTML5" },
    { name: "CSS3" },
    { name: "JavaScript" },
    { name: "React" },
    { name: "Next.js" },
    { name: "Tailwind CSS" },
  ];

  const backendSkills = [
    { name: "Node.js" },
    { name: "Express" },
    { name: "Python" },
    { name: "Java" },
    { name: "MongoDB" },
    { name: "MySQL" },
  ];

  const tools = [
    { name: "Git" },
    { name: "VS Code" },
    { name: "Postman" },
    { name: "Docker" },
    { name: "npm" },
  ];

  const allSkills = [
    ...frontendSkills,
    ...backendSkills,
    ...tools,
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-12 sm:py-16 md:py-20 bg-gray-900 relative">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div className="text-center mb-8 sm:mb-12 md:mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-4 text-violet-300"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Technical Skills
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3 justify-center">
          {allSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="group flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 sm:py-3 bg-gray-800 rounded-full border border-gray-700 hover:shadow-lg transition-all duration-200 min-w-[80px] sm:min-w-[100px] md:min-w-[120px] max-w-[140px]"
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.3, delay: index * 0.05, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="group-hover:scale-110 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
              >
                <SkillIcon name={skill.name} className="text-lg sm:text-xl" />
              </motion.div>
              <span className="text-xs sm:text-sm font-medium text-blue-300 group-hover:text-blue-200 transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;