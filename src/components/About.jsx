import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            About Me
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } }
            }}
          >
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              <motion.p
                className="text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: false }}
              >
                I'm a passionate Full Stack Developer with expertise in building responsive web applications 
                using modern frameworks. I love turning complex problems into simple, beautiful solutions.
              </motion.p>
              <div className="space-y-4">
                {[
                  { color: "bg-blue-600", text: "Bachelor of Technology in Information Technology" },
                  { color: "bg-purple-600", text: "Government College of Engineering, Erode (2022 - 2026)" },
                  { color: "bg-blue-600", text: "CGPA: 7.67" },
                ].map((item, idx) => (
                  <motion.div
                    key={item.text}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.1, ease: "easeOut" }}
                    viewport={{ once: false }}
                  >
                    <motion.div className={`w-3 h-3 ${item.color} rounded-full`} />
                    <span>{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="bg-card rounded-2xl p-8 shadow-lg border"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              <h3 className="text-2xl font-semibold mb-6">Career Objective</h3>
              <motion.p
                className="text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: false }}
              >
                Seeking to enhance my problem-solving abilities and technical skills while contributing to 
                innovative projects. Dedicated to continuous learning and staying updated with the latest 
                technologies in web development.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 