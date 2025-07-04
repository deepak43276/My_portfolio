import { Button } from "@/components/ui/button";
import { Github, ArrowUp } from "lucide-react";

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
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg border hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    {project.date}
                  </span>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <Button size="sm" className="flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <ArrowUp className="w-4 h-4" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 