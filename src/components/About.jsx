import { motion } from "framer-motion";
import { FaDownload, FaGraduationCap, FaCode, FaLaptop } from "react-icons/fa";

const skills = ["React", "Next.js", "Node.js", "Tailwind CSS", "MongoDB", "TypeScript"];

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-gray-900 relative min-h-[500px]">
      {/* Floating animated elements */}
      <motion.div 
        className="absolute top-20 left-10 w-8 h-8 rounded-full bg-blue-500 opacity-20"
        animate={{
          y: [0, 30, 0],
          x: [0, 15, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-12 h-12 rounded-full bg-purple-500 opacity-10"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Decorative header */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-violet-300 relative flex justify-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Left Column - Profile Card */}
          <motion.div
            className="bg-gray-800 rounded-2xl shadow-2xl p-6 sm:p-8 border-t-4 border-blue-500 transform hover:-translate-y-2 transition-transform duration-300"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-violet-600 flex items-center justify-center text-white text-xl sm:text-2xl">
                <FaCode />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Full Stack Developer</h3>
                <p className="text-blue-300 text-sm sm:text-base">Passionate about creating digital experiences</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              I'm a passionate Full Stack Developer with expertise in building responsive web applications using modern frameworks. I love turning complex problems into simple, beautiful solutions.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {skills.slice(0, 3).map(skill => (
                <span key={skill} className="px-2 sm:px-3 py-1 rounded-full bg-blue-900/50 text-blue-300 font-medium text-xs border border-blue-700">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Middle Column - Timeline */}
          <div className="space-y-6 sm:space-y-8">
            <motion.div
              className="bg-gray-800 rounded-2xl shadow-2xl p-4 sm:p-6 border-l-4 border-purple-500 relative pl-8 sm:pl-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="absolute left-0 -ml-3 mt-1 w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center">
                <FaGraduationCap className="text-white text-xs" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">Education</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-blue-400 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-sm sm:text-base">Bachelor of Information Technology</p>
                    <p className="text-xs sm:text-sm text-blue-300">Government College of Engineering, Erode (2022 - 2026)</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-gray-800 rounded-2xl shadow-2xl p-4 sm:p-6 border-l-4 border-blue-500 relative pl-8 sm:pl-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="absolute left-0 -ml-3 mt-1 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                <FaLaptop className="text-white text-xs" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">Experience</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-purple-400 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-sm sm:text-base">Web Development Intern</p>
                    <p className="text-xs sm:text-sm text-purple-300">Zidio Development</p>
                    <p className="text-xs mt-1 text-gray-400">Worked as a Web Development Intern, contributing to real-world projects and enhancing my skills in modern web technologies.</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Right Column - Download after Philosophy */}
          <div className="space-y-6 sm:space-y-8">
            <motion.div
              className="bg-gray-800/70 rounded-2xl shadow-2xl p-4 sm:p-6 border border-gray-700 backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-white">Philosophy</h3>
              <p className="text-gray-300 italic text-sm sm:text-base">
                "Seeking to enhance my problem-solving abilities and technical skills while contributing to innovative projects. Dedicated to continuous learning and staying updated with the latest technologies in web development."
              </p>
            </motion.div>
            <motion.a
              href="/DEEPAK_M_RESUME.pdf"
              download
              className="block w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-blue-800 to-blue-900 hover:from-blue-700 hover:to-blue-800 text-white font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 group text-sm sm:text-base"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <FaDownload className="group-hover:animate-bounce" />
              <span>Download Resume</span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;