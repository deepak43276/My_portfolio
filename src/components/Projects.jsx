import { Button } from "@/components/ui/button";
import { Github, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Incident Reporter System",
      description: "Built an incident management solution using JavaScript and CSS animations for interactive alerts. Developed responsive UI using React/Vue.js, reducing response time by 40% via real-time browser notifications.",
      tech: ["JavaScript", "React", "CSS", "Node.js"],
      date: "May 2024",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Online Access Tracker",
      description: "Built a direct browser-based ecommerce platform using PHP and MySQL with comprehensive admin panel. Included dynamic product catalog, user/admin roles, and full-featured admin dashboard for order management.",
      tech: ["PHP", "MySQL", "JavaScript", "CSS"],
      date: "Oct 2024",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Fluffy Job Search Application",
      description: "A job search platform built using React, Vite, and Tailwind CSS with advanced filtering and JWT-based authentication on HTTP-only cookies.",
      tech: ["React", "Vite", "Tailwind CSS", "JWT"],
      date: "Aug 2024",
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "BitShop E-Commerce",
      description: "Created a MERN-based e-shopping platform with JWT auth, responsive UI using Tailwind CSS, and a full-featured admin dashboard for order management.",
      tech: ["MongoDB", "Express", "React", "Node.js", "Tailwind"],
      date: "Jun 2024",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Featured Projects
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.18 } }
          }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg border hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <motion.h3
                    className="text-xl font-semibold group-hover:text-blue-600 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    viewport={{ once: false }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.span
                    className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                    viewport={{ once: false }}
                  >
                    {project.date}
                  </motion.span>
                </div>
                <motion.p
                  className="text-muted-foreground mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: false }}
                >
                  {project.description}
                </motion.p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <motion.span 
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false }}
                      style={{ display: 'inline-block' }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.97 }}>
                    <Button size="sm" className="flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.97 }}>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <ArrowUp className="w-4 h-4" />
                      Live Demo
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 