import React from 'react';
import { motion } from 'framer-motion';
import { scaleIn } from '../animations/variants';
import { viewport } from '../animations/transitions';

/**
 * FeatureCard Component
 * 
 * Features:
 * - Scroll-triggered reveal animation
 * - Hover lift effect dengan shadow
 * - Icon rotation on hover untuk playfulness
 * 
 * UX Reasoning:
 * - viewport.withMargin trigger animasi sebelum card fully visible
 * - Hover Y: -8 cukup noticeable tapi tidak berlebihan
 * - Icon rotation memberikan personality tanpa distract
 * - Shadow transition memberikan depth illusion
 * 
 * @param {string} icon - Emoji atau icon
 * @param {string} title - Card title
 * @param {string} description - Card description
 */
const FeatureCard = ({ icon, title, description }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl p-6 border border-gray-100 cursor-default"
      variants={scaleIn}
      initial="initial"
      whileInView="animate"
      viewport={viewport.withMargin}
      whileHover={{ 
        y: -8,
        boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
        transition: { duration: 0.3 }
      }}
    >
      {/* Icon dengan playful rotation */}
      <motion.div
        className="text-4xl mb-4 inline-block"
        whileHover={{ 
          scale: 1.1,
          rotate: [0, -10, 10, 0],  // Wiggle effect
          transition: { duration: 0.4 }
        }}
      >
        {icon}
      </motion.div>
      
      {/* Title */}
      <h3 className="text-xl font-semibold mb-2 text-gray-900">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;