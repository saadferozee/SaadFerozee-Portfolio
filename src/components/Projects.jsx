import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiExternalLink, FiGithub, FiArrowRight } from 'react-icons/fi';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const projects = [
    {
      title: 'E-Ticketing System Web App',
      description: 'A comprehensive ticket buying and selling platform with admin-vendor functionalities. Built with modern web technologies for seamless user experience.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      liveLink: '#',
      githubLink: '#',
      featured: true
    },
    {
      title: 'Pet Adoption with E-Commerce',
      description: 'Fully functional E-commerce website with database integration. Features pet adoption services with complete shopping cart functionality.',
      technologies: ['React.js', 'Firebase', 'Tailwind CSS', 'JavaScript'],
      liveLink: '#',
      githubLink: '#',
      featured: true
    },
    {
      title: 'Pet Care Service Website',
      description: 'Online vet service booking website with private routing and secure login system. Responsive design with modern UI/UX.',
      technologies: ['React.js', 'Firebase Auth', 'CSS3', 'JavaScript'],
      liveLink: '#',
      githubLink: '#',
      featured: false
    },
    {
      title: 'Mock NGO Website',
      description: 'Website with basic functionalities built using vanilla JavaScript. Clean design with interactive elements and responsive layout.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
      liveLink: '#',
      githubLink: '#',
      featured: false
    },
    {
      title: 'E-Commerce Website',
      description: 'Basic layout and responsive web design using HTML and CSS. Focus on clean design principles and mobile-first approach.',
      technologies: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
      liveLink: '#',
      githubLink: '#',
      featured: false
    },
    {
      title: 'Mock Portfolio',
      description: 'Basic layout of a Portfolio website using HTML and CSS. Demonstrates fundamental web development skills and design principles.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      liveLink: '#',
      githubLink: '#',
      featured: false
    }
  ];

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
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            My Recent Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my web development journey, from basic layouts to full-stack applications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {/* Featured Projects */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {projects.filter(project => project.featured).map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-lg hover-lift group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4">
                    Featured Project
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.liveLink}
                    className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 group/link"
                  >
                    <FiExternalLink className="mr-2 group-hover/link:scale-110 transition-transform" />
                    Live Site
                  </a>
                  <a
                    href={project.githubLink}
                    className="flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 group/link"
                  >
                    <FiGithub className="mr-2 group-hover/link:scale-110 transition-transform" />
                    Code
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.filter(project => !project.featured).map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="bg-white p-6 rounded-2xl shadow-lg hover-lift border border-gray-100 group"
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3">
                  <a
                    href={project.liveLink}
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium group/link"
                  >
                    <FiExternalLink className="mr-1 group-hover/link:scale-110 transition-transform" size={16} />
                    Live
                  </a>
                  <a
                    href={project.githubLink}
                    className="flex items-center text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium group/link"
                  >
                    <FiGithub className="mr-1 group-hover/link:scale-110 transition-transform" size={16} />
                    Code
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* More Coming Section */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">More Coming...</h3>
              <p className="text-gray-600 mb-6">
                I'm actively learning and building new projects. Stay tuned for more exciting work!
              </p>
              <a
                href="https://github.com/saadferozee"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 group"
              >
                View All Projects
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;