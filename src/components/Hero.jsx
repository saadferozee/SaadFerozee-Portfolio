import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import profileImage from '../assets/SaadFerozee.png';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Simplified background decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob"></div>
      <div className="absolute top-40 right-10 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000"></div>

      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Side - Text Content */}
        <motion.div className="text-center lg:text-left space-y-8">
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl sm:text-3xl text-gray-700 font-light mb-6 tracking-wide">
              Frontend
            </h2>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-gray-900 leading-none mb-8">
              Developer
            </h1>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-gray-200/50 hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
              <span className="text-sm text-gray-500 uppercase tracking-wider">Available for work</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Hello
            </h3>
            <h4 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              I'm Saad Ferozee
            </h4>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              A passionate web developer specializing in React.js, Next.js, and modern JavaScript. 
              I create responsive, user-friendly web applications with clean code and thoughtful design.
            </p>
            <p className="text-gray-500 text-base">
              Currently learning Next.js to build faster, SEO-friendly web applications and strengthen scalable frontend architecture.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-start space-x-6"
          >
            <a
              href="https://github.com/saadferozee"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-gray-900 text-white rounded-2xl hover:bg-gray-800 transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              <FiGithub size={28} className="group-hover:scale-105 transition-transform" />
            </a>
            <a
              href="mailto:saadferozee@example.com"
              className="group p-4 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              <FiMail size={28} className="group-hover:scale-105 transition-transform" />
            </a>
            <a
              href="https://linkedin.com/in/saadferozee"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-blue-800 text-white rounded-2xl hover:bg-blue-900 transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              <FiLinkedin size={28} className="group-hover:scale-105 transition-transform" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side - Profile Image */}
        <motion.div
          className="flex justify-center lg:justify-end"
          variants={itemVariants}
        >
          <div className="relative">
            {/* Simplified decorative rings */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-20 scale-110"></div>
            
            {/* Main image container */}
            <div className="relative w-96 h-96 sm:w-[450px] sm:h-[450px] rounded-full overflow-hidden border-8 border-white shadow-2xl">
              <img
                src={profileImage}
                alt="Saad Ferozee"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="eager"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>

            {/* Simplified floating elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-2xl">👋</span>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-xl flex items-center justify-center text-white font-bold"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-sm">Web Dev</span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Simplified scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;