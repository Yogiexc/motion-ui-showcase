import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from './Button';
import { fadeIn, fadeInUp } from '../animations/variants';

/**
 * Hero Component dengan Parallax Effect
 * 
 * Features:
 * - Parallax scroll effect pada hero section
 * - Sequential reveal animations dengan delay
 * - CTA buttons dengan stagger
 * 
 * UX Reasoning:
 * - Parallax subtle (-50px max) untuk depth tanpa motion sickness
 * - Sequential delay (0.2s, 0.4s, 0.6s) menciptakan rhythm
 * - Fade out saat scroll untuk focus ke content berikutnya
 * - Max-width 4xl untuk optimal reading length
 * 
 * @param {function} onCTAClick - Optional CTA click handler
 */
const Hero = ({ onCTAClick }) => {
  const { scrollY } = useScroll();
  
  // Parallax transforms
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <motion.div 
      className="max-w-4xl mx-auto px-6 text-center py-20"
      style={{ y, opacity }}
    >
      {/* Main Headline */}
      <motion.h2 
        className="text-6xl font-bold mb-6 leading-tight"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Motion-Based UI for
        <br />
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Premium Experiences
        </span>
      </motion.h2>
      
      {/* Subheadline */}
      <motion.p 
        className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Exploring motion-based UI to create premium user experience 
        with modern animation techniques.
      </motion.p>
      
      {/* CTA Buttons */}
      <motion.div 
        className="flex gap-4 justify-center flex-wrap"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <Button variant="primary" onClick={onCTAClick}>
          Get Started
        </Button>
        <Button variant="secondary" onClick={onCTAClick}>
          Learn More
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default Hero;