import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import { pageVariants, staggerContainer, fadeInUp } from '../animations/variants';

/**
 * Home Page Component
 * 
 * Structure:
 * - Hero section dengan parallax
 * - Feature highlights dengan stagger animation
 * - Clean, spacious layout
 * 
 * UX Reasoning:
 * - Page transition smooth untuk context switching
 * - Stagger animation pada feature highlights untuk visual hierarchy
 * - Icon-first approach untuk quick scanning
 * - Spacing yang generous untuk breathing room
 */
const HomePage = () => {
  const highlights = [
    { 
      icon: '⚡', 
      title: 'Fast', 
      desc: 'GPU-accelerated animations for 60fps performance' 
    },
    { 
      icon: '🎨', 
      title: 'Beautiful', 
      desc: 'Carefully crafted transitions with attention to detail' 
    },
    { 
      icon: '🎯', 
      title: 'Purposeful', 
      desc: 'Every motion has meaning and enhances UX' 
    }
  ];

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen pt-24"
    >
      {/* Hero Section */}
      <Hero />

      {/* Feature Highlights */}
      <motion.div 
        className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 py-20"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        {highlights.map((item, i) => (
          <motion.div 
            key={i}
            variants={fadeInUp}
            className="text-center group cursor-default"
          >
            {/* Icon */}
            <motion.div 
              className="text-5xl mb-4 inline-block"
              whileHover={{ 
                scale: 1.2,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.3 }
              }}
            >
              {item.icon}
            </motion.div>
            
            {/* Title */}
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              {item.title}
            </h3>
            
            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom CTA Section */}
      <motion.div
        className="max-w-4xl mx-auto px-6 text-center py-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h3 className="text-3xl font-bold mb-4 text-gray-900">
          Ready to Elevate Your UI?
        </h3>
        <p className="text-lg text-gray-600 mb-8">
          Discover how motion design can transform user experience
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a 
            href="#features" 
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-shadow"
          >
            Explore Features
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HomePage;