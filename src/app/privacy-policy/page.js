"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="bg-gray-900/95 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Portfolio</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          
          <div className="space-y-8 text-gray-300">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gray-800/50 p-6 rounded-lg border border-gray-700"
            >
              <h2 className="text-2xl font-semibold mb-4 text-white">Information We Collect</h2>
              <p className="leading-relaxed mb-4">
                We collect minimal information when you visit this portfolio website:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Basic usage data (pages visited, time spent)</li>
                <li>Contact information if you choose to reach out via email</li>
                <li>Technical information (browser type, device)</li>
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-800/50 p-6 rounded-lg border border-gray-700"
            >
              <h2 className="text-2xl font-semibold mb-4 text-white">How We Use Information</h2>
              <p className="leading-relaxed mb-4">
                Your information is used to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Improve the website experience</li>
                <li>Respond to your inquiries</li>
                <li>Analyze website performance</li>
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gray-800/50 p-6 rounded-lg border border-gray-700"
            >
              <h2 className="text-2xl font-semibold mb-4 text-white">Information Sharing</h2>
              <p className="leading-relaxed">
                We do not sell, trade, or share your personal information with third parties. 
                Your data is kept private and secure.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-800/50 p-6 rounded-lg border border-gray-700"
            >
              <h2 className="text-2xl font-semibold mb-4 text-white">Your Rights</h2>
              <p className="leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Access your personal information</li>
                <li>Request deletion of your data</li>
                <li>Contact us with privacy concerns</li>
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gray-800/50 p-6 rounded-lg border border-gray-700"
            >
              <h2 className="text-2xl font-semibold mb-4 text-white">Contact Us</h2>
              <p className="leading-relaxed">
                If you have questions about this Privacy Policy, please contact us:
              </p>
              <div className="mt-4 p-4 bg-gray-700 rounded-lg">
                <p className="text-white">Email: deepak91913@gmail.com</p>
                <p className="text-gray-300 text-sm mt-2">
                  Last Updated: {new Date().toLocaleDateString()}
                </p>
              </div>
            </motion.section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 