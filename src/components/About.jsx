import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

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
    hidden: { y: 30, opacity: 0 },
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
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-50 to-yellow-50 rounded-full blur-3xl opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Side - Main About Card */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-gray-50 to-white p-12 rounded-3xl shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500"
          >
            <div className="flex items-center mb-8">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
              <span className="text-sm text-gray-500 uppercase tracking-wider font-medium">About Me</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Hello
            </h2>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
              I'm Saad Ferozee
            </h3>
            
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                I am a <span className="font-semibold text-gray-900">Web Developer</span> specializing in modern frontend technologies. 
                My journey into programming started with curiosity about how websites work, and it quickly became a passion that drives me every day.
              </p>
              <p>
                I work mainly with <span className="font-semibold text-blue-600">Next.js</span>, <span className="font-semibold text-blue-600">React.js</span> and <span className="font-semibold text-yellow-600">JavaScript</span> to build responsive, 
                user-friendly web applications. I love the challenge of turning complex problems into simple, beautiful solutions.
              </p>
              <p>
                <span className="font-semibold text-gray-900">What I enjoy most:</span> Creating clean, maintainable code that not only works perfectly but is also easy for other developers to understand and build upon. I find great satisfaction in optimizing performance and creating smooth user experiences.
              </p>
              <p>
                <span className="font-semibold text-gray-900">Beyond coding:</span> When I'm not programming, I enjoy exploring new technologies, reading tech blogs, and staying updated with the latest web development trends. I also love problem-solving challenges and contributing to open-source projects.
              </p>
              <p>
                I strongly believe in <span className="font-semibold text-gray-900">clean code</span>, maintainable codebases, 
                clear file structure, and well-written documentation. My goal is to write code that tells a story.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {['React.js', 'Next.js', 'JavaScript', 'Tailwind CSS', 'Node.js'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium hover:scale-105 transition-transform"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Details Grid */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Education Card */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">🎓</span>
                <h3 className="text-xl font-bold text-gray-900">Education</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Just finished learning <span className="font-semibold">Core Web Development</span> with 
                <span className="font-semibold text-blue-600"> Programming Hero, Batch 12</span>
              </p>
            </div>

            {/* Goals Card */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">🚀</span>
                <h3 className="text-xl font-bold text-gray-900">Goals</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Grow as a strong <span className="font-semibold">Frontend Engineer</span>, then gradually expand into 
                <span className="font-semibold text-purple-600"> Full-Stack Development</span> and contribute to scalable, meaningful digital products.
              </p>
            </div>

            {/* Interests Card */}
            <div className="bg-gradient-to-r from-green-50 to-teal-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">💡</span>
                <h3 className="text-xl font-bold text-gray-900">Interests</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Beyond frontend, I have a strong interest in <span className="font-semibold text-green-600">UI/UX</span>, 
                <span className="font-semibold text-green-600"> design systems</span>, and <span className="font-semibold text-green-600">app development</span>.
              </p>
            </div>

            {/* Work Philosophy Card */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">⚡</span>
                <h3 className="text-xl font-bold">How I Work</h3>
              </div>
              <div className="space-y-3 text-gray-300">
                <p className="flex items-center">
                  <span className="mr-3">⌨️</span>
                  I love Programming and clean code principles
                </p>
                <p className="flex items-center">
                  <span className="mr-3">🛋</span>
                  Always work in a neat and organized workspace
                </p>
                <p className="flex items-center">
                  <span className="mr-3">📚</span>
                  Code is organized, readable, and thoughtfully structured
                </p>
                <p className="flex items-center">
                  <span className="mr-3">🎯</span>
                  Follow smooth and efficient workflows
                </p>
                <p className="flex items-center">
                  <span className="mr-3">🍎</span>
                  Working on MacBook Pro (Late '14) — aged, but full of heart
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
            <div className="text-4xl font-bold text-blue-600 mb-2">6+</div>
            <div className="text-gray-700 font-medium">Projects Completed</div>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
            <div className="text-4xl font-bold text-purple-600 mb-2">1+</div>
            <div className="text-gray-700 font-medium">Years Learning</div>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
            <div className="text-4xl font-bold text-green-600 mb-2">10+</div>
            <div className="text-gray-700 font-medium">Technologies</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;