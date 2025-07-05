"use client";

import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-16 relative">
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
        <motion.div
          className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.18 } }
          }}
        >
          {/* Contact & Social Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Connect With Me</h3>
              <p className="text-gray-400 mb-6">
                Let's collaborate on exciting projects or just say hello!
              </p>
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Links</h4>
                              <div className="grid grid-cols-3 gap-4 max-w-xs">
                  <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }} title="GitHub">
                    <a 
                      href="https://github.com/deepak43276/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="rounded-full bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white"
                      >
                        <FaGithub className="w-5 h-5" />
                      </Button>
                    </a>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }} title="LinkedIn">
                    <a 
                      href="https://www.linkedin.com/in/deepak-m-2bbbb925a/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="rounded-full bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white"
                      >
                        <FaLinkedin className="w-5 h-5" />
                      </Button>
                    </a>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }} title="X">
                    <a 
                      href="https://x.com/Deepak54719661" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="rounded-full bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white"
                      >
                        <FaXTwitter className="w-5 h-5" />
                      </Button>
                    </a>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }} title="Email">
                    <a 
                      href="mailto:deepak91913@gmail.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="rounded-full bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white"
                      >
                        <MdEmail className="w-5 h-5" />
                      </Button>
                    </a>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }} title="LeetCode">
                    <a 
                      href="https://leetcode.com/u/deepak91913/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="rounded-full bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white"
                      >
                        <SiLeetcode className="w-5 h-5" />
                      </Button>
                    </a>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }} title="HackerRank">
                    <a 
                      href="https://www.hackerrank.com/profile/deepak91913" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="rounded-full bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white"
                      >
                        <FaHackerrank className="w-5 h-5" />
                      </Button>
                    </a>
                  </motion.div>
                </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
              <div className="space-y-3">
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <a 
                    href="#home" 
                    className="text-gray-400 hover:text-white transition-colors duration-200 block"
                  >
                    Home
                  </a>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <a 
                    href="#about" 
                    className="text-gray-400 hover:text-white transition-colors duration-200 block"
                  >
                    About
                  </a>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <a 
                    href="#skills" 
                    className="text-gray-400 hover:text-white transition-colors duration-200 block"
                  >
                    Skills
                  </a>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <a 
                    href="#projects" 
                    className="text-gray-400 hover:text-white transition-colors duration-200 block"
                  >
                    Projects
                  </a>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <a 
                    href="#contact" 
                    className="text-gray-400 hover:text-white transition-colors duration-200 block"
                  >
                    Contact
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Copyright & Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">Deepak's Portfolio</h3>
              <p className="text-gray-400 mb-4">
                Crafting digital experiences with modern web technologies
              </p>
            </div>
            
            <div className="border-t border-gray-800 pt-4">
              <p className="text-gray-400 text-sm mb-2">
                © {new Date().getFullYear()} Deepak's Portfolio. All rights reserved.
              </p>
              <div className="flex flex-wrap gap-4 mt-3">
                <a 
                  href="/privacy-policy" 
                  className="text-gray-500 hover:text-gray-300 transition-colors duration-200 text-xs"
                >
                  Privacy Policy
                </a>
                <a 
                  href="/terms-of-service" 
                  className="text-gray-500 hover:text-gray-300 transition-colors duration-200 text-xs"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;