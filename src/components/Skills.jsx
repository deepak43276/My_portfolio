"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const frontendSkills = [
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React", icon: "⚛" },
    { name: "Next.js", icon: "🚀" },
    { name: "Tailwind CSS", icon: "💨" },
  ];

  const backendSkills = [
    { name: "Node.js", icon: "🟢" },
    { name: "Express", icon: "🔧" },
    { name: "Python", icon: "🐍" },
    { name: "Java", icon: "☕" },
    { name: "MongoDB", icon: "🍃" },
    { name: "MySQL", icon: "🗄" },
  ];

  const tools = [
    { name: "Git", icon: "📝" },
    { name: "VS Code", icon: "💻" },
    { name: "Postman", icon: "📮" },
    { name: "Docker", icon: "🐳" },
    { name: "AWS", icon: "☁" },
    { name: "Firebase", icon: "🔥" },
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
        />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Technical Skills
          </motion.h2>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 justify-center">
          {allSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="group flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 rounded-full border border-gray-700 hover:shadow-lg transition-all duration-300 min-w-[120px] max-w-[140px]"
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.08, boxShadow: "0 4px 24px 0 rgba(59,130,246,0.15)" }}
            >
              <motion.span
                className="text-lg group-hover:scale-110 transition-transform duration-300"
                whileHover={{ scale: 1.2 }}
              >
                {skill.icon}
              </motion.span>
              <span className="text-sm font-medium text-blue-300 group-hover:text-blue-200 transition-colors">
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