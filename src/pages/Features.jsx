import React from 'react';
import { motion } from 'framer-motion';
import FeatureCard from '../components/FeatureCard';
import { pageVariants, staggerContainer } from '../animations/variants';

/**
 * Features Page Component
 * 
 * Showcase semua motion features dengan:
 * - Grid layout yang responsive
 * - Scroll-triggered reveals
 * - Stagger animation untuk visual rhythm
 * 
 * UX Reasoning:
 * - 3-column grid optimal untuk scanning
 * - Stagger delay 100ms untuk comfortable reading pace
 * - Card hover memberikan interactivity feedback
 * - Descriptions menjelaskan "why" bukan hanya "what"
 */
const FeaturesPage = () => {
  const features = [
    { 
      icon: '🔄', 
      title: 'Page Transitions', 
      description: 'Smooth enter and exit animations that guide user attention naturally through content changes'
    },
    { 
      icon: '🖱️', 
      title: 'Hover Effects', 
      description: 'Micro-interactions that provide instant feedback and make UI feel alive and responsive'
    },
    { 
      icon: '📜', 
      title: 'Scroll Reveals', 
      description: 'Elements appear progressively as you scroll, reducing cognitive load and creating narrative flow'
    },
    { 
      icon: '🎭', 
      title: 'Stagger Animations', 
      description: 'Sequential reveals that create visual rhythm and help establish information hierarchy'
    },
    { 
      icon: '⚙️', 
      title: 'Spring Physics', 
      description: 'Natural motion that mimics real-world physics for organic, believable interactions'
    },
    { 
      icon: '🎯', 
      title: 'Layout Animations', 
      description: 'Smooth transitions when elements change position or size, maintaining context for users'
    }
  ];

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen pt-24 pb-20"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Page Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-5xl font-bold mb-4 text-gray-900">
            Motion Features
          </h2>
          <p className="text-xl text-gray-600">
            Animations that enhance, not distract
          </p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, i) => (
            <FeatureCard key={i} {...feature} />
          ))}
        </motion.div>

        {/* Bottom Info Section */}
        <motion.div
          className="mt-20 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-10 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">
            Performance First
          </h3>
          <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
            All animations use GPU-accelerated properties (transform, opacity) 
            to ensure smooth 60fps performance across all devices. Motion is 
            carefully tuned to be noticeable without being distracting.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FeaturesPage;