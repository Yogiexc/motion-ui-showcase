import React from 'react';
import { motion } from 'framer-motion';
import { springs } from '../animations/transitions';

/**
 * Button Component dengan Micro-interactions
 * 
 * UX Reasoning:
 * - Scale + Y movement memberikan "lift off" feel
 * - Tap scale 0.98 memberikan feedback "pressed"
 * - Spring physics untuk natural motion
 * - Overlay white untuk subtle hover effect
 * 
 * @param {string} variant - 'primary' | 'secondary' | 'ghost'
 * @param {ReactNode} children - Button content
 * @param {function} onClick - Click handler
 */
const Button = ({ children, variant = 'primary', onClick, ...props }) => {
  const variants = {
    primary: 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg',
    secondary: 'bg-white text-gray-900 border-2 border-gray-200 hover:border-gray-300',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100'
  };

  return (
    <motion.button
      className={`
        px-6 py-3 rounded-xl font-medium 
        relative overflow-hidden
        transition-colors duration-200
        ${variants[variant]}
      `}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={springs.snappy}
      onClick={onClick}
      {...props}
    >
      {/* Hover overlay effect */}
      <motion.div
        className="absolute inset-0 bg-white"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: variant === 'primary' ? 0.1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Button content */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default Button;