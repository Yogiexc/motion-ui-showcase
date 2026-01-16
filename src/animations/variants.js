// ========================================
// ANIMATION VARIANTS
// Reusable animation states untuk konsistensi
// ========================================

/**
 * Page Transition Variants
 * Digunakan untuk transisi antar halaman
 * - initial: State sebelum mount
 * - animate: State saat mounted
 * - exit: State saat unmount
 */
export const pageVariants = {
  initial: { 
    opacity: 0, 
    y: 20 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] // Custom cubic-bezier untuk smooth easing
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { 
      duration: 0.3 
    }
  }
};

/**
 * Stagger Container Variants
 * Parent component yang mengatur stagger children
 */
export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,  // Delay 100ms antar child
      delayChildren: 0.2     // Delay awal sebelum children mulai
    }
  }
};

/**
 * Fade In Up Variants
 * Digunakan untuk reveal elements dari bawah
 */
export const fadeInUp = {
  initial: { 
    opacity: 0, 
    y: 40 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

/**
 * Fade In Variants
 * Simple fade tanpa movement
 */
export const fadeIn = {
  initial: { 
    opacity: 0 
  },
  animate: { 
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

/**
 * Scale In Variants
 * Untuk card hover atau element yang perlu emphasis
 */
export const scaleIn = {
  initial: { 
    opacity: 0, 
    scale: 0.9 
  },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

/**
 * Slide In From Left
 * Untuk side navigation atau drawer
 */
export const slideInFromLeft = {
  initial: { 
    x: -100, 
    opacity: 0 
  },
  animate: { 
    x: 0, 
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

/**
 * Navigation Bar Variants
 * Slide down dari atas
 */
export const navBarVariants = {
  initial: { 
    y: -100 
  },
  animate: { 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

/**
 * Card Hover Variants
 * Untuk interactive cards
 */
export const cardHover = {
  rest: { 
    scale: 1, 
    y: 0 
  },
  hover: {
    y: -8,
    scale: 1.02,
    boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
    transition: { 
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

/**
 * Button Hover Variants
 * Untuk micro-interactions
 */
export const buttonHover = {
  hover: { 
    scale: 1.02, 
    y: -2,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 17
    }
  },
  tap: { 
    scale: 0.98 
  }
};