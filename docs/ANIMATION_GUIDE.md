# Animation Implementation Guide

## Core Principles

### 1. Performance
Always use GPU-accelerated properties:
- `transform` (translate, scale, rotate)
- `opacity`
- `filter`

Avoid:
- `width`, `height`
- `top`, `left`, `right`, `bottom`

### 2. Timing
- Micro-interactions: 100-200ms
- Transitions: 200-400ms
- Complex animations: 400-800ms

### 3. Easing
Default cubic bezier: `[0.22, 1, 0.36, 1]`

## Common Patterns

### Button Hover
```jsx
<motion.button
  whileHover={{ scale: 1.02, y: -2 }}
  whileTap={{ scale: 0.98 }}
  transition={{ type: "spring", stiffness: 400 }}
>
  Click Me
</motion.button>
```

### Page Transition
```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.3 }}
>
  Page Content
</motion.div>
```

### Scroll Reveal
```jsx
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.4 }}
>
  Content
</motion.div>