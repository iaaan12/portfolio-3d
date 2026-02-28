# AGENTS.md - Developer Guidelines for This Project

## Project Overview

This is a React 19 + Vite portfolio website using Tailwind CSS 4.2 for styling and Framer Motion for animations.

## Build / Lint / Test Commands

```bash
# Development
npm run dev          # Start Vite dev server

# Build
npm run build        # Production build to dist/
npm run preview      # Preview production build

# Linting
npm run lint         # Run ESLint on entire project

# No test framework is currently configured
```

**Running a Single Test:** Not applicable - no tests configured.

## Code Style Guidelines

### General Rules

- Use functional components with arrow functions
- Prefer named exports for components
- Keep components small and focused (single responsibility)
- Use CSS modules or Tailwind classes - avoid inline styles

### Naming Conventions

- **Components:** PascalCase (e.g., `Navbar.jsx`, `Skills.jsx`)
- **Files:** kebab-case for non-component files, PascalCase for components
- **CSS Classes:** Tailwind utility classes preferred
- **Constants:** UPPER_SNAKE_CASE for magic numbers/strings, camelCase otherwise

### Imports

```jsx
// React core
import { useState, useEffect } from 'react'

// Third-party
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

// Components
import Navbar from './components/Navbar'
import Skills from './components/Skills'

// Styles
import './App.css'
import './index.css'  // Tailwind imports here
```

### Formatting

- Use 2 spaces for indentation
- No semicolons at end of statements
- Use single quotes for strings in JSX, double quotes for HTML attributes
- Add trailing commas in multiline objects/arrays
- Maximum line length: 100 characters (soft limit)

### Types

- This is a JavaScript project (no TypeScript strict mode)
- Use PropTypes or JSDoc if type safety is needed
- Prefer explicit typing over `any`

### Tailwind CSS

- Use Tailwind CSS 4.x (installed via `@tailwindcss/vite`)
- Use utility classes for styling
- Custom animations can be added in `src/index.css`

### Error Handling

- Use try/catch for async operations
- Display user-friendly error messages in UI
- Log errors to console for debugging

### React Patterns

```jsx
// Preferred component structure
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function ComponentName() {
  const [state, setState] = useState(initialValue)

  useEffect(() => {
    // cleanup function
    return () => {}
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* JSX content */}
    </motion.div>
  )
}
```

### Animations

- Use `framer-motion` for complex animations
- Use simple CSS transitions for hover states
- Keep animations subtle and performant

### File Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Skills.jsx
│   ├── Portfolio.jsx
│   ├── About.jsx
│   └── Contact.jsx
├── App.jsx           # Main app component
├── App.css           # App-specific styles
├── main.jsx          # Entry point
└── index.css         # Global styles + Tailwind
```

## Common Issues

- Tailwind v4 requires `@tailwindcss/vite` plugin (already configured)
- React 19 is used - ensure compatibility with libraries
- ESLint configured to ignore `dist/` folder
- No tests configured - consider adding Vitest for testing

## Development Notes

- Run `npm run build` before deploying to verify production build works
- Use `npm run lint` before committing to catch issues
- Preview production build locally with `npm run preview`
