import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiExternalLink, FiGithub, FiArrowRight } from 'react-icons/fi';

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Ticketing System Web App',
      description: 'A comprehensive ticket buying and selling platform with admin-vendor functionalities.',
      longDescription: 'This full-stack application features user authentication, payment integration, real-time seat selection, and comprehensive admin dashboard for managing events and bookings.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Socket.io', 'Stripe'],
      mainTech: 'React.js & Node.js',
      liveLink: '#',
      githubLink: '#',
      category: 'fullstack',
      featured: true,
      image: '/api/placeholder/600/400',
      challenges: [
        'Implementing real-time seat selection with Socket.io',
        'Managing complex state for booking flow',
        'Integrating secure payment processing with Stripe'
      ],
      improvements: [
        'Add mobile app version using React Native',
        'Implement advanced analytics dashboard',
        'Add multi-language support'
      ]
    },
    {
      id: 2,
      title: 'Pet Adoption with E-Commerce',
      description: 'Fully functional E-commerce website with database integration featuring pet adoption services.',
      longDescription: 'A compassionate platform connecting pets with loving families, featuring advanced search filters, adoption process management, and integrated e-commerce for pet supplies.',
      technologies: ['React.js', 'Firebase', 'Tailwind CSS', 'JavaScript', 'Stripe API'],
      mainTech: 'React.js & Firebase',
      liveLink: '#',
      githubLink: '#',
      category: 'frontend',
      featured: true,
      image: '/api/placeholder/600/400',
      challenges: [
        'Creating intuitive adoption workflow',
        'Managing complex pet data with Firebase',
        'Implementing advanced search and filtering'
      ],
      improvements: [
        'Add video call feature for virtual pet meetings',
        'Implement AI-powered pet matching',
        'Add veterinary appointment booking'
      ]
    },
    {
      id: 3,
      title: 'Pet Care Service Website',
      description: 'Online vet service booking website with private routing and secure login system.',
      longDescription: 'Professional veterinary service platform with appointment scheduling, medical records management, and secure patient portal for pet owners.',
      technologies: ['React.js', 'Firebase Auth', 'CSS3', 'JavaScript', 'React Router'],
      mainTech: 'React.js & Firebase',
      liveLink: '#',
      githubLink: '#',
      category: 'frontend',
      featured: false,
      image: '/api/placeholder/600/400',
      challenges: [
        'Implementing secure authentication system',
        'Creating responsive appointment calendar',
        'Managing user roles and permissions'
      ],
      improvements: [
        'Add telemedicine video consultations',
        'Implement automated appointment reminders',
        'Add prescription management system'
      ]
    },
    {
      id: 4,
      title: 'Mock NGO Website',
      description: 'Website with basic functionalities built using vanilla JavaScript with donation system.',
      longDescription: 'Non-profit organization website featuring donation management, volunteer registration, and event coordination with clean, accessible design.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'PHP'],
      mainTech: 'Vanilla JavaScript',
      liveLink: '#',
      githubLink: '#',
      category: 'web',
      featured: false,
      image: '/api/placeholder/600/400',
      challenges: [
        'Creating interactive donation forms',
        'Implementing volunteer management system',
        'Ensuring accessibility compliance'
      ],
      improvements: [
        'Migrate to React.js for better maintainability',
        'Add payment gateway integration',
        'Implement volunteer tracking dashboard'
      ]
    },
    {
      id: 5,
      title: 'E-Commerce Website',
      description: 'Modern e-commerce template with product catalog and shopping cart functionality.',
      longDescription: 'Modern e-commerce template with product catalog, shopping cart functionality, and responsive design optimized for all devices.',
      technologies: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'jQuery'],
      mainTech: 'HTML5 & CSS3',
      liveLink: '#',
      githubLink: '#',
      category: 'web',
      featured: false,
      image: '/api/placeholder/600/400',
      challenges: [
        'Creating responsive product grid layout',
        'Implementing shopping cart functionality',
        'Optimizing for mobile devices'
      ],
      improvements: [
        'Add React.js for dynamic functionality',
        'Implement user authentication',
        'Add product search and filtering'
      ]
    },
    {
      id: 6,
      title: 'Personal Portfolio',
      description: 'Clean and professional portfolio showcasing web development skills.',
      longDescription: 'Clean and professional portfolio showcasing web development skills with smooth animations and responsive design.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'SASS'],
      mainTech: 'HTML5 & SASS',
      liveLink: '#',
      githubLink: '#',
      category: 'web',
      featured: false,
      image: '/api/placeholder/600/400',
      challenges: [
        'Creating smooth scroll animations',
        'Implementing responsive design',
        'Optimizing loading performance'
      ],
      improvements: [
        'Migrate to React.js with Framer Motion',
        'Add dark mode toggle',
        'Implement blog section'
      ]
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'featured', label: 'Featured' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'web', label: 'Web Design' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : activeFilter === 'featured'
    ? projects.filter(project => project.featured)
    : projects.filter(project => project.category === activeFilter);

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
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-50 to-yellow-50 rounded-full blur-3xl opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-3 h-3 bg-purple-500 rounded-full mr-4"></div>
            <span className="text-sm text-gray-500 uppercase tracking-wider font-medium">Portfolio</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            My Recent Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A showcase of my web development journey, from basic layouts to full-stack applications
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              layout
              className={`group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200 ${
                project.featured ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 h-64">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-20">🚀</div>
                </div>
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.featured ? project.longDescription : project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.liveLink}
                    className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 group/link hover:scale-105"
                  >
                    <FiExternalLink className="mr-2 group-hover/link:scale-110 transition-transform" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="flex items-center px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all duration-300 group/link hover:scale-105"
                  >
                    <FiGithub className="mr-2 group-hover/link:scale-110 transition-transform" />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-12 rounded-3xl shadow-lg border border-gray-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">More Projects Coming Soon!</h3>
            <p className="text-gray-600 mb-8 text-lg">
              I'm actively learning and building new projects. Stay tuned for more exciting work!
            </p>
            <a
              href="https://github.com/saadferozee"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-2xl hover:bg-gray-800 transition-all duration-300 group hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View All on GitHub
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;