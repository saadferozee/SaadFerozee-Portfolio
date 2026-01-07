import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FiCode, 
  FiSmartphone, 
  FiLayers, 
  FiGlobe, 
  FiZap, 
  FiTool 
} from 'react-icons/fi';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const services = [
    {
      icon: FiCode,
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces using React.js, Next.js, and modern JavaScript frameworks.',
      technologies: ['React.js', 'Next.js', 'JavaScript', 'TypeScript'],
      color: 'from-blue-500 to-blue-600'
    },
    // {
    //   icon: FiLayers,
    //   title: 'UI/UX Design',
    //   description: 'Creating beautiful and intuitive user experiences with modern design principles and user-centered approach.',
    //   technologies: ['Figma', 'Adobe XD', 'Tailwind CSS', 'CSS3'],
    //   color: 'from-purple-500 to-purple-600'
    // },
    {
      icon: FiSmartphone,
      title: 'Responsive Design',
      description: 'Ensuring your website looks perfect on all devices with mobile-first responsive design approach.',
      technologies: ['CSS Grid', 'Flexbox', 'Bootstrap', 'Tailwind CSS'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: FiGlobe,
      title: 'Web Applications',
      description: 'Developing full-featured web applications with modern technologies and best practices.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: FiZap,
      title: 'Performance Optimization',
      description: 'Optimizing websites for speed, SEO, and better user experience with modern optimization techniques.',
      technologies: ['Webpack', 'Vite', 'Lighthouse', 'Core Web Vitals'],
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: FiTool,
      title: 'Maintenance & Support',
      description: 'Providing ongoing maintenance, updates, and technical support for your web applications.',
      technologies: ['Git', 'GitHub', 'Deployment', 'Debugging'],
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
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
            <span className="text-sm text-gray-500 uppercase tracking-wider font-medium">Services</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            What I Do
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I provide comprehensive web development services to help bring your digital ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 hover:border-gray-300/50 hover:-translate-y-2"
                whileHover={{ scale: 1.02 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent size={28} className="text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-3xl shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-xl mb-8 opacity-90">
              Let's collaborate and create something amazing together
            </p>
            <motion.button
              className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;