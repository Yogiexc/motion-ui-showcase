import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants } from '../animations/variants';

/**
 * About Page Component
 * 
 * Content-focused page dengan:
 * - Typography hierarchy yang jelas
 * - Sequential reveals untuk readability
 * - Info boxes untuk key insights
 * 
 * UX Reasoning:
 * - Max-width 4xl untuk optimal reading length (65-75 characters)
 * - Sequential animation delays untuk natural reading flow
 * - Gradient boxes untuk visual emphasis
 * - Border-left untuk blockquote hierarchy
 */
const AboutPage = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen pt-24 pb-20"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-5xl font-bold mb-8 text-gray-900">
            About Motion UI
          </h2>
          
          {/* Introduction */}
          <motion.p 
            className="text-xl text-gray-600 mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Motion UI bukan tentang membuat website "keren". Ini tentang menciptakan 
            <strong className="text-gray-900"> pengalaman yang lebih intuitif</strong> untuk user.
          </motion.p>

          {/* Why Motion Matters Section */}
          <motion.div
            className="mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
              Why Motion Matters
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Di era digital yang over-saturated, motion menjadi differentiator 
                antara produk yang "oke" dengan produk yang "premium". Motion yang 
                baik tidak terlihat—user hanya merasakan bahwa app terasa smooth 
                dan responsive.
              </p>
              <p>
                Setiap animasi harus punya purpose: memberikan feedback, menunjukkan 
                relationship antar elements, atau mengurangi cognitive load. Animasi 
                yang purely decorative adalah red flag.
              </p>
            </div>
          </motion.div>

          {/* Framer Motion Box */}
          <motion.div 
            className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 mb-10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
              Why Framer Motion?
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">✓</span>
                <span>Declarative API yang intuitif dan React-native</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">✓</span>
                <span>Layout animations built-in tanpa manual calculation</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">✓</span>
                <span>Spring physics untuk motion yang natural</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">✓</span>
                <span>Gesture support (drag, pan, hover) out of the box</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">✓</span>
                <span>SVG animation dan complex orchestration support</span>
              </li>
            </ul>
          </motion.div>

          {/* Quote */}
          <motion.div
            className="border-l-4 border-blue-500 pl-6 py-2 mb-10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-gray-700 italic text-lg">
              "Good animation is invisible. Great animation makes you feel something."
            </p>
          </motion.div>

          {/* Principles Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
              Core Principles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Subtle', desc: 'Tidak mengganggu task utama user' },
                { title: 'Responsive', desc: 'Feedback <100ms untuk interaksi' },
                { title: 'Meaningful', desc: 'Setiap motion punya purpose jelas' },
                { title: 'Consistent', desc: 'Easing dan duration yang uniform' }
              ].map((principle, i) => (
                <motion.div
                  key={i}
                  className="bg-white border border-gray-200 rounded-xl p-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + (i * 0.1) }}
                >
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {principle.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {principle.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutPage;