import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiArrowUp } from 'react-icons/fi';
import { FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Saad Ferozee
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
                Frontend Developer passionate about creating beautiful, functional web experiences 
                with modern technologies and clean code practices.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/saadferozee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:scale-110"
                >
                  <FiGithub size={20} className="group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://linkedin.com/in/saadferozee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-blue-800 rounded-xl hover:bg-blue-700 transition-all duration-300 hover:scale-110"
                >
                  <FiLinkedin size={20} className="group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="mailto:saadferozee@example.com"
                  className="group p-3 bg-green-800 rounded-xl hover:bg-green-700 transition-all duration-300 hover:scale-110"
                >
                  <FiMail size={20} className="group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://facebook.com/saadferozee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-blue-600 rounded-xl hover:bg-blue-500 transition-all duration-300 hover:scale-110"
                >
                  <FaFacebook size={20} className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {['About', 'Services', 'Portfolio', 'Testimonials', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Services */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                {[
                  'Frontend Development',
                  'React.js Development',
                  'UI/UX Design',
                  'Responsive Design',
                  'Web Applications',
                  'Performance Optimization'
                ].map((service) => (
                  <li key={service}>
                    <span className="text-gray-400 hover:text-white transition-colors duration-300">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800"></div>

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0"
          >
            <span>© {currentYear} Saad Ferozee. Built with</span>
            <FiHeart className="text-red-500 animate-pulse" />
            <span>using React.js & Tailwind CSS</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center space-x-6"
          >
            <span className="text-gray-400 text-sm">
              "Consistency is more important than perfection." 🚀
            </span>
            <button
              onClick={scrollToTop}
              className="group p-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition-all duration-300 hover:scale-110"
              aria-label="Scroll to top"
            >
              <FiArrowUp size={20} className="group-hover:scale-110 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Fun Fact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="pb-8 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50">
            <p className="text-gray-300 text-sm">
              🌟 <span className="font-semibold">Fun Fact:</span> This portfolio was built with modern web technologies 
              and lots of coffee! Currently learning and growing every day in the amazing world of web development.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;