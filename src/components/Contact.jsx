"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Youtube } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 relative">
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
        <motion.h2
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Let's Connect
        </motion.h2>
        
        <motion.div
          className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.18 } }
          }}
        >
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <div>
              <motion.h3
                className="text-2xl font-semibold mb-4 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                viewport={{ once: false }}
              >
                Get In Touch
              </motion.h3>
              <motion.p
                className="text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: false }}
              >
                I'm always interested in hearing about new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </motion.p>
            </div>
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: false }}
              >
                <h4 className="font-semibold mb-2 text-white">Email</h4>
                <a 
                  href="mailto:deepak91913@gmail.com" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  deepak91913@gmail.com
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: false }}
              >
                <h4 className="font-semibold mb-2 text-white">Phone</h4>
                <a 
                  href="tel:+916374294597" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  +91 6374294597
                </a>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <div>
              <Input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
              />
            </div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button 
                type="submit" 
                className="w-full h-12 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg transition-all"
              >
                Send Message
              </Button>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;