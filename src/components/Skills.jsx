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
  FaFigma 
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiTailwindcss, 
  SiFirebase, 
  SiMongodb, 
  SiExpress,
  SiNodedotjs 
} from 'react-icons/si';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const skills = [
    { name: 'React.js', icon: FaReact, color: 'text-blue-500', level: 85 },
    { name: 'JavaScript', icon: FaJs, color: 'text-yellow-500', level: 80 },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-900', level: 75 },
    { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500', level: 90 },
    { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-600', level: 85 },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500', level: 90 },
    { name: 'Bootstrap', icon: FaBootstrap, color: 'text-purple-600', level: 80 },
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600', level: 70 },
    { name: 'Express.js', icon: SiExpress, color: 'text-gray-700', level: 65 },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500', level: 70 },
    { name: 'Firebase', icon: SiFirebase, color: 'text-orange-400', level: 75 },
    { name: 'Git', icon: FaGitAlt, color: 'text-red-500', level: 80 },
    { name: 'GitHub', icon: FaGithub, color: 'text-gray-900', level: 85 },
    { name: 'Figma', icon: FaFigma, color: 'text-purple-500', level: 70 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Tech Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Technologies I work with to create modern, responsive web applications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
        >
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="bg-white p-6 rounded-2xl shadow-lg hover-lift group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-center">
                  <div className="mb-4 flex justify-center">
                    <IconComponent 
                      size={48} 
                      className={`${skill.color} group-hover:scale-110 transition-transform duration-300`} 
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-sm">
                    {skill.name}
                  </h3>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <motion.div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                    />
                  </div>
                  <span className="text-xs text-gray-500">{skill.level}%</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Fun Fact Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4">🌟 Fun Fact</h3>
            <p className="text-lg">
              "Consistency is more important than perfection." 🚀
            </p>
            <p className="text-sm mt-2 opacity-90">
              I just started my web dev journey and already loving the process. Let's code something amazing together!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;