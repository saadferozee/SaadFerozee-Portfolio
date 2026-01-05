import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiStar, FiMessageCircle } from 'react-icons/fi';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Project Manager',
      company: 'TechStart Inc.',
      content: 'Saad delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and clean code practices made the project a huge success.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Senior Developer',
      company: 'WebFlow Solutions',
      content: 'Working with Saad was a pleasure. His React.js skills are impressive, and he always delivers on time with high-quality, maintainable code.',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'UI/UX Designer',
      company: 'Creative Studio',
      content: 'Saad perfectly translated our designs into responsive, interactive web applications. His understanding of modern frontend technologies is remarkable.',
      rating: 5,
      avatar: '👩‍🎨'
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Startup Founder',
      company: 'InnovateLab',
      content: 'The pet adoption platform Saad built for us has helped connect hundreds of pets with loving families. Outstanding work and great communication throughout.',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      id: 5,
      name: 'Lisa Wang',
      role: 'Marketing Director',
      company: 'Digital Agency',
      content: 'Saad\'s work on our NGO website was exceptional. The clean design and smooth functionality have significantly improved our online presence.',
      rating: 5,
      avatar: '👩‍💻'
    },
    {
      id: 6,
      name: 'Alex Kumar',
      role: 'Tech Lead',
      company: 'StartupHub',
      content: 'Impressive frontend development skills! Saad created a beautiful, responsive website that perfectly represents our brand. Highly recommended!',
      rating: 5,
      avatar: '👨‍🔬'
    }
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
    <section ref={ref} className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-4"></div>
            <span className="text-sm text-gray-500 uppercase tracking-wider font-medium">Testimonials</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            What Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take my word for it - here's what people are saying about my work
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 hover:border-gray-300/50 hover:-translate-y-2"
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-6">
                <FiMessageCircle className="text-3xl text-blue-500 opacity-50" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Testimonial Content */}
              <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                "{testimonial.content}"
              </p>

              {/* Client Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
            <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-gray-700 font-medium">Client Satisfaction</div>
          </div>
          <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
            <div className="text-4xl font-bold text-green-600 mb-2">6+</div>
            <div className="text-gray-700 font-medium">Projects Delivered</div>
          </div>
          <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
            <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-gray-700 font-medium">Support Available</div>
          </div>
          <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
            <div className="text-4xl font-bold text-orange-600 mb-2">Fast</div>
            <div className="text-gray-700 font-medium">Delivery Time</div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-3xl shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Ready to Join These Happy Clients?</h3>
            <p className="text-xl mb-8 opacity-90">
              Let's work together to bring your vision to life
            </p>
            <motion.button
              className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;