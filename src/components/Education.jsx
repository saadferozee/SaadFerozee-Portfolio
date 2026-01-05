import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiBook, FiAward, FiCalendar, FiMapPin } from 'react-icons/fi';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const education = [
    {
      id: 1,
      degree: 'Core Web Development',
      institution: 'Programming Hero',
      batch: 'Batch 12',
      duration: '2024',
      location: 'Online',
      description: 'Comprehensive web development program covering modern frontend and backend technologies including React.js, Next.js, Node.js, MongoDB, and industry best practices.',
      skills: ['React.js', 'Next.js', 'JavaScript', 'Node.js', 'MongoDB', 'Express.js', 'HTML5', 'CSS3', 'Tailwind CSS'],
      status: 'Completed',
      icon: '🎓'
    },
    // Add more education entries as needed
    {
      id: 2,
      degree: 'Self-Taught Developer',
      institution: 'Online Learning Platforms',
      duration: '2023 - Present',
      location: 'Remote',
      description: 'Continuous learning through various online platforms, documentation, and hands-on projects. Focus on modern web development technologies and best practices.',
      skills: ['Problem Solving', 'Self-Learning', 'Research', 'Documentation'],
      status: 'Ongoing',
      icon: '💻'
    }
  ];

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
    <section id="education" ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-50 to-blue-50 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-50 to-pink-50 rounded-full blur-3xl opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
            <span className="text-sm text-gray-500 uppercase tracking-wider font-medium">Education</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Learning Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My educational background and continuous learning path in web development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              variants={itemVariants}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Icon */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl shadow-lg">
                  {edu.icon}
                </div>
              </div>

              {/* Education Card */}
              <div className="flex-1 bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    edu.status === 'Completed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {edu.status}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <FiCalendar className="mr-1" />
                    {edu.duration}
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <FiMapPin className="mr-1" />
                    {edu.location}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {edu.degree}
                </h3>
                
                <div className="flex items-center mb-4">
                  <FiBook className="text-blue-600 mr-2" />
                  <span className="text-lg font-semibold text-blue-600">
                    {edu.institution}
                  </span>
                  {edu.batch && (
                    <span className="ml-2 text-gray-500">
                      • {edu.batch}
                    </span>
                  )}
                </div>

                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {edu.description}
                </p>

                {/* Skills */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                    <FiAward className="mr-2" />
                    Key Skills Learned:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium hover:scale-105 transition-transform"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Learning Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-3xl shadow-2xl">
            <div className="text-6xl mb-6">📚</div>
            <h3 className="text-3xl font-bold mb-4">Learning Philosophy</h3>
            <p className="text-xl mb-6 opacity-90 max-w-3xl mx-auto">
              "I believe in continuous learning and staying updated with the latest technologies. 
              Every project is an opportunity to learn something new and improve my skills."
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div className="flex items-center">
                <span className="mr-2">🎯</span>
                <span>Goal-Oriented Learning</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">🔄</span>
                <span>Continuous Improvement</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">🤝</span>
                <span>Community Learning</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;