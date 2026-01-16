import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navigation from './components/Navigation';
import HomePage from './pages/Home';
import FeaturesPage from './pages/Features';
import AboutPage from './pages/About';

/**
 * Main App Component
 * 
 * Responsibilities:
 * - State management untuk page routing
 * - AnimatePresence untuk page transitions
 * - Layout structure
 * 
 * UX Reasoning:
 * - AnimatePresence mode="wait" ensures smooth exit before enter
 * - Gradient background memberikan depth tanpa distract
 * - Footer minimal untuk clean finish
 */
function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  // Page router
  const renderPage = () => {
    switch(currentPage) {
      case 'Home': 
        return <HomePage key="home" />;
      case 'Features': 
        return <FeaturesPage key="features" />;
      case 'About': 
        return <AboutPage key="about" />;
      default: 
        return <HomePage key="home" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Navigation */}
      <Navigation 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
      />
      
      {/* Page Content dengan Transition */}
      <AnimatePresence mode="wait">
        {renderPage()}
      </AnimatePresence>

      {/* Footer */}
      <motion.footer 
        className="text-center py-8 text-gray-500 text-sm border-t border-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p>Built with Framer Motion • 2026</p>
        <p className="mt-1 text-xs">
          Exploring motion-based UI for premium experiences
        </p>
      </motion.footer>
    </div>
  );
}

export default App;