import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaBootstrap, 
  FaGitAlt, 
  FaGithub,
  FaFigma,
  FaNodeJs 
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiTailwindcss, 
  SiFirebase, 
  SiMongodb, 
  SiExpress,
  SiTypescript,
  SiRedux,
  SiPostman
} from 'react-icons/si';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const skillCategories = [
    {
      title: 'Frontend Development',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React.js', icon: FaReact, level: 85, color: 'text-blue-500' },
        { name: 'Next.js', icon: SiNextdotjs, level: 75, color: 'text-gray-900' },
        { name: 'JavaScript', icon: FaJs, level: 80, color: 'text-yellow-500' },
        // { name: 'TypeScript', icon: SiTypescript, level: 70, color: 'text-blue-600' },
        { name: 'HTML5', icon: FaHtml5, level: 90, color: 'text-orange-500' },
        { name: 'CSS3', icon: FaCss3Alt, level: 85, color: 'text-blue-600' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90, color: 'text-cyan-500' },
        // { name: 'Bootstrap', icon: FaBootstrap, level: 80, color: 'text-purple-600' }
      ]
    },
    {
      title: 'Backend Development',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, level: 70, color: 'text-green-600' },
        { name: 'Express.js', icon: SiExpress, level: 65, color: 'text-gray-700' },
        { name: 'MongoDB', icon: SiMongodb, level: 70, color: 'text-green-500' },
        { name: 'Firebase', icon: SiFirebase, level: 75, color: 'text-orange-400' }
      ]
    },
    {
      title: 'Tools & Technologies',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Git', icon: FaGitAlt, level: 80, color: 'text-red-500' },
        { name: 'GitHub', icon: FaGithub, level: 85, color: 'text-gray-900' },
        { name: 'Figma', icon: FaFigma, level: 70, color: 'text-purple-500' },
        // { name: 'Redux', icon: SiRedux, level: 65, color: 'text-purple-600' },
        // { name: 'Postman', icon: SiPostman, level: 75, color: 'text-orange-500' }
      ]
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
    <section id="skills" ref={ref} className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
            <span className="text-sm text-gray-500 uppercase tracking-wider font-medium">Skills</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Technologies and tools I use to create modern, responsive web applications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-gray-200/50"
            >
              <div className="text-center mb-12">
                <h3 className={`text-3xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-4`}>
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-100"
                      whileHover={{ scale: 1.05, y: -5 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: categoryIndex * 0.1 + index * 0.05 }}
                    >
                      <div className="text-center">
                        <div className="mb-4 flex justify-center">
                          <IconComponent 
                            size={48} 
                            className={`${skill.color} group-hover:scale-110 transition-transform duration-300`} 
                          />
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-4 text-lg">
                          {skill.name}
                        </h4>
                        
                        {/* Circular Progress */}
                        <div className="relative w-20 h-20 mx-auto mb-4">
                          <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                            <path
                              className="text-gray-200"
                              stroke="currentColor"
                              strokeWidth="3"
                              fill="none"
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            <motion.path
                              className={skill.color.replace('text-', 'text-')}
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeLinecap="round"
                              fill="none"
                              strokeDasharray={`${skill.level}, 100`}
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              initial={{ strokeDasharray: "0, 100" }}
                              animate={isInView ? { strokeDasharray: `${skill.level}, 100` } : { strokeDasharray: "0, 100" }}
                              transition={{ duration: 1.5, delay: categoryIndex * 0.2 + index * 0.1 }}
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-lg font-bold text-gray-700">{skill.level}%</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
            <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-gray-700 font-medium">Technologies</div>
          </div>
          <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
            <div className="text-4xl font-bold text-green-600 mb-2">6+</div>
            <div className="text-gray-700 font-medium">Projects Built</div>
          </div>
          <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
            <div className="text-4xl font-bold text-purple-600 mb-2">1+</div>
            <div className="text-gray-700 font-medium">Years Learning</div>
          </div>
        </motion.div>

        {/* Learning Quote */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-3xl shadow-2xl">
            <div className="text-6xl mb-4">💡</div>
            <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
            <p className="text-lg opacity-90">
              "The beautiful thing about learning is that no one can take it away from you." - B.B. King
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;