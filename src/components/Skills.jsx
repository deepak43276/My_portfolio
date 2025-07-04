"use client";

import { useState, useEffect, useRef } from "react";

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

  const SkillCategory = ({ title, skills, delay }) => (
    <div 
      className={isVisible ? 'animate-fade-in' : 'opacity-0'}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill, index) => (
          <div 
            key={skill.name}
            className="group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full border border-blue-200/50 dark:border-blue-800/50 hover:shadow-lg hover:scale-105 transition-all duration-300"
            style={{
              animationDelay: `${delay + index * 100}ms`
            }}
          >
            <span className="text-lg group-hover:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300 group-hover:text-blue-800 dark:group-hover:text-blue-200 transition-colors">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} id="skills" className="py-20 relative overflow-hidden bg-transparent">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to build amazing digital experiences
          </p>
        </div>
        <div className="space-y-16">
          <SkillCategory title="Frontend" skills={frontendSkills} delay={200} />
          <SkillCategory title="Backend" skills={backendSkills} delay={400} />
          <SkillCategory title="Tools & Others" skills={tools} delay={600} />
        </div>
      </div>
    </section>
  );
};

export default Skills; 