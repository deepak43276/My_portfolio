const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                I'm a passionate Full Stack Developer with expertise in building responsive web applications 
                using modern frameworks. I love turning complex problems into simple, beautiful solutions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span>Bachelor of Technology in Information Technology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                  <span>Government College of Engineering, Erode (2022 - 2026)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span>CGPA: 7.67</span>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-lg border">
              <h3 className="text-2xl font-semibold mb-6">Career Objective</h3>
              <p className="text-muted-foreground leading-relaxed">
                Seeking to enhance my problem-solving abilities and technical skills while contributing to 
                innovative projects. Dedicated to continuous learning and staying updated with the latest 
                technologies in web development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 