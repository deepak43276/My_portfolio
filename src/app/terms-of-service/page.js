"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const TermsOfService = () => {
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
            Terms of Service
          </h1>
          
          <div className="space-y-8 text-gray-300">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gray-800/50 p-6 rounded-lg border border-gray-700"
            >
              <h2 className="text-2xl font-semibold mb-4 text-white">Acceptance</h2>
              <p className="leading-relaxed">
                By using this portfolio website, you agree to these terms. If you don't agree, please don't use the site.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-800/50 p-6 rounded-lg border border-gray-700"
            >
              <h2 className="text-2xl font-semibold mb-4 text-white">Use of Website</h2>
              <p className="leading-relaxed mb-4">
                You may view this website for personal, non-commercial use. You may not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Copy or modify the content</li>
                <li>Use it for commercial purposes</li>
                <li>Attempt to hack or damage the site</li>
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gray-800/50 p-6 rounded-lg border border-gray-700"
            >
              <h2 className="text-2xl font-semibold mb-4 text-white">Disclaimer</h2>
              <p className="leading-relaxed">
                This website is provided "as is" without any warranties. We're not responsible for any errors or issues.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-800/50 p-6 rounded-lg border border-gray-700"
            >
              <h2 className="text-2xl font-semibold mb-4 text-white">Limitation of Liability</h2>
              <p className="leading-relaxed">
                We're not liable for any damages that may occur from using this website. Use at your own risk.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gray-800/50 p-6 rounded-lg border border-gray-700"
            >
              <h2 className="text-2xl font-semibold mb-4 text-white">External Links</h2>
              <p className="leading-relaxed">
                This website may contain links to other sites. We're not responsible for their content or privacy practices.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gray-800/50 p-6 rounded-lg border border-gray-700"
            >
              <h2 className="text-2xl font-semibold mb-4 text-white">Changes to Terms</h2>
              <p className="leading-relaxed">
                We may update these terms at any time. Continued use of the website means you accept the new terms.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-gray-800/50 p-6 rounded-lg border border-gray-700"
            >
              <h2 className="text-2xl font-semibold mb-4 text-white">Contact</h2>
              <p className="leading-relaxed">
                If you have questions about these terms, please contact us:
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

export default TermsOfService; 