import React from 'react';
import { motion } from 'framer-motion';
import { navBarVariants } from '../animations/variants';
import { layoutTransition } from '../animations/transitions';

/**
 * Navigation Component
 * 
 * Features:
 * - Slide down animation on mount
 * - Backdrop blur untuk modern glass effect
 * - Layout animation untuk active tab indicator
 * - Hover scale untuk interactive feel
 * 
 * UX Reasoning:
 * - Fixed position untuk accessibility
 * - layoutId="activeTab" memberikan smooth transition antar tabs
 * - Backdrop blur membuat nav terasa "float" di atas content
 * - Active state jelas terlihat dengan underline animation
 * 
 * @param {string} currentPage - Active page name
 * @param {function} setCurrentPage - Page setter function
 */
const Navigation = ({ currentPage, setCurrentPage }) => {
  const pages = ['Home', 'Features', 'About'];
  
  return (
    <motion.nav 
      className="
        fixed top-0 left-0 right-0 z-50 
        bg-white/80 backdrop-blur-lg 
        border-b border-gray-100
        shadow-sm
      "
      variants={navBarVariants}
      initial="initial"
      animate="animate"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.h1 
          className="
            text-xl font-bold 
            bg-gradient-to-r from-blue-600 to-purple-600 
            bg-clip-text text-transparent
            cursor-pointer
          "
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setCurrentPage('Home')}
        >
          Motion UI
        </motion.h1>
        
        {/* Navigation Links */}
        <div className="flex gap-6">
          {pages.map((page) => (
            <motion.button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`
                relative px-4 py-2 text-sm font-medium 
                transition-colors duration-200
                ${currentPage === page ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}
              `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {page}
              
              {/* Active Tab Indicator */}
              {currentPage === page && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                  transition={layoutTransition}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;