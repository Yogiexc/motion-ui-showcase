// ========================================
// TRANSITION CONFIGURATIONS
// Reusable transition settings
// ========================================

/**
 * Standard Easing Curves
 * Gunakan easing yang konsisten di seluruh app
 */
export const easings = {
  // Smooth easing untuk most transitions
  easeOutCubic: [0.22, 1, 0.36, 1],
  
  // Snappy easing untuk quick interactions
  easeOutQuad: [0.25, 0.46, 0.45, 0.94],
  
  // Gentle easing untuk subtle animations
  easeInOutQuad: [0.45, 0, 0.55, 1],
  
  // Bouncy easing untuk playful interactions
  easeOutBack: [0.34, 1.56, 0.64, 1]
};

/**
 * Standard Durations
 * Konsisten duration untuk predictable UX
 */
export const durations = {
  fast: 0.2,      // Micro-interactions (hover, tap)
  normal: 0.3,    // Standard transitions
  slow: 0.5,      // Page transitions, reveals
  verySlow: 0.8   // Complex animations
};

/**
 * Spring Configurations
 * Natural physics-based motion
 */
export const springs = {
  // Snappy spring untuk buttons
  snappy: {
    type: "spring",
    stiffness: 400,
    damping: 17
  },
  
  // Gentle spring untuk cards
  gentle: {
    type: "spring",
    stiffness: 300,
    damping: 20
  },
  
  // Bouncy spring untuk playful elements
  bouncy: {
    type: "spring",
    stiffness: 500,
    damping: 15
  },
  
  // Smooth spring untuk layout animations
  smooth: {
    type: "spring",
    stiffness: 380,
    damping: 30
  }
};

/**
 * Preset Transitions
 * Ready-to-use transition objects
 */
export const transitions = {
  // Default smooth transition
  default: {
    duration: durations.normal,
    ease: easings.easeOutCubic
  },
  
  // Fast transition untuk immediate feedback
  fast: {
    duration: durations.fast,
    ease: easings.easeOutQuad
  },
  
  // Slow transition untuk emphasis
  slow: {
    duration: durations.slow,
    ease: easings.easeOutCubic
  },
  
  // Spring transition untuk natural feel
  spring: springs.snappy,
  
  // Stagger transition untuk sequential reveals
  stagger: {
    staggerChildren: 0.1,
    delayChildren: 0.2
  }
};

/**
 * Viewport Configuration
 * Untuk scroll-triggered animations
 */
export const viewport = {
  // Trigger once, tidak repeat
  once: {
    once: true,
    amount: 0.2  // 20% visible sebelum trigger
  },
  
  // Trigger dengan margin
  withMargin: {
    once: true,
    margin: "-100px"  // Trigger 100px sebelum masuk viewport
  },
  
  // Repeat animation setiap kali masuk viewport
  repeat: {
    once: false,
    amount: 0.3
  }
};

/**
 * Layout Transition
 * Untuk smooth layout changes
 */
export const layoutTransition = {
  type: "spring",
  stiffness: 380,
  damping: 30
};

/**
 * Helper: Create custom transition
 * @param {number} duration - Duration in seconds
 * @param {array} easing - Cubic bezier array
 * @returns {object} Transition config
 */
export const createTransition = (duration = 0.3, easing = easings.easeOutCubic) => ({
  duration,
  ease: easing
});

/**
 * Helper: Create stagger config
 * @param {number} stagger - Delay between children in seconds
 * @param {number} delay - Initial delay in seconds
 * @returns {object} Stagger config
 */
export const createStagger = (stagger = 0.1, delay = 0) => ({
  staggerChildren: stagger,
  delayChildren: delay
});