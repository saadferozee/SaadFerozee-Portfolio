import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiMail, FiGithub, FiLinkedin, FiSend, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaFacebook } from 'react-icons/fa';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={ref} className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <div className="flex items-center justify-center mb-6">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
              <span className="text-sm text-gray-400 uppercase tracking-wider font-medium">Contact</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold mb-6">
              Let's Talk
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? Let's collaborate and create something amazing together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="bg-gray-800/50 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-gray-700/50">
                <h3 className="text-3xl font-bold mb-8">Get In Touch</h3>
                <div className="space-y-8">
                  <div className="flex items-center space-x-6">
                    <div className="p-4 bg-blue-600 rounded-2xl">
                      <FiMail size={24} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Email</p>
                      <a 
                        href="mailto:saadferozee@example.com" 
                        className="text-white text-lg hover:text-blue-400 transition-colors"
                      >
                        saadferozee@example.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6">
                    <div className="p-4 bg-green-600 rounded-2xl">
                      <FiPhone size={24} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Phone</p>
                      <a 
                        href="tel:+1234567890" 
                        className="text-white text-lg hover:text-green-400 transition-colors"
                      >
                        +1 (234) 567-8900
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6">
                    <div className="p-4 bg-purple-600 rounded-2xl">
                      <FiMapPin size={24} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Location</p>
                      <p className="text-white text-lg">Available Worldwide</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-10 pt-8 border-t border-gray-700">
                  <h4 className="text-xl font-semibold mb-6">Follow Me</h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/saadferozee"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-4 bg-gray-700 rounded-2xl hover:bg-gray-600 transition-all duration-300 hover:scale-110"
                    >
                      <FiGithub size={24} className="group-hover:scale-110 transition-transform" />
                    </a>
                    <a
                      href="https://linkedin.com/in/saadferozee"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-4 bg-blue-800 rounded-2xl hover:bg-blue-700 transition-all duration-300 hover:scale-110"
                    >
                      <FiLinkedin size={24} className="group-hover:scale-110 transition-transform" />
                    </a>
                    <a
                      href="https://facebook.com/saadferozee"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-4 bg-blue-600 rounded-2xl hover:bg-blue-500 transition-all duration-300 hover:scale-110"
                    >
                      <FaFacebook size={24} className="group-hover:scale-110 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Quote Section */}
              <motion.div 
                variants={itemVariants}
                className="bg-gradient-to-r from-blue-600 to-purple-600 p-10 rounded-3xl shadow-2xl"
              >
                <div className="text-6xl mb-4">💭</div>
                <h3 className="text-2xl font-bold mb-4">Let's Build Something Great</h3>
                <p className="text-lg mb-4 opacity-90">
                  "I just started my web dev journey and already loving the process. 
                  Let's code something amazing together!"
                </p>
                <p className="text-sm opacity-75">
                  - Saad Ferozee, Frontend Developer
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-white text-gray-900 p-10 rounded-3xl shadow-2xl">
                <h3 className="text-3xl font-bold mb-8">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold mb-3 text-gray-700">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-3 text-gray-700">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold mb-3 text-gray-700">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-3 text-gray-700">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="6"
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none text-lg"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-3 group text-lg font-semibold shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FiSend className="group-hover:translate-x-1 transition-transform" />
                    <span>Send Message</span>
                  </motion.button>
                </form>

                <div className="mt-8 p-6 bg-gray-50 rounded-2xl">
                  <p className="text-sm text-gray-600 text-center">
                    <span className="font-semibold">Quick Response:</span> I typically respond within 24 hours
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;