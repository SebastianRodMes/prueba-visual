---
name: kalova-best-practices
description: Enforces code organization, naming conventions, folder structure, and comment standards for the Kalova React project. Use when creating files, naming variables, structuring folders, writing comments, or reviewing any code in the project.
---

# Kalova Best Practices

This skill defines the non-negotiable conventions for code quality, organization, and readability in the Kalova React project.

---

## Folder Structure

```
src/
├── assets/
│   ├── fonts/
│   └── images/
│       └── murales/
├── components/
│   ├── common/          # Reusable, generic components
│   │   ├── Button/
│   │   │   ├── Button.jsx
│   │   │   └── Button.module.css
│   │   ├── Navbar/
│   │   └── WhatsAppFloat/
│   ├── sections/        # Landing page sections
│   │   ├── HeroSection/
│   │   ├── BenefitsSection/
│   │   ├── TiposSection/
│   │   ├── CotizacionSection/
│   │   └── RequisitosSection/
│   └── layout/
│       ├── Footer/
│       └── PageWrapper/
├── hooks/               # Custom React hooks
│   ├── useQuoteForm.js
│   └── useScrollPosition.js
├── pages/               # Route-level components
│   ├── HomePage.jsx
│   ├── TiposPage.jsx
│   └── CotizacionPage.jsx
├── services/            # External API calls (Firebase, etc.)
│   ├── firebaseConfig.js
│   ├── quoteService.js
│   └── projectService.js
├── store/               # Global state (Context or Zustand)
│   └── quoteStore.js
├── theme/               # Design tokens, Evergreen overrides
│   ├── colors.js
│   ├── typography.js
│   └── evergreenTheme.js
├── utils/               # Pure helper functions
│   ├── formatPhone.js
│   └── validateQuoteForm.js
├── App.jsx
└── main.jsx
```

---

## Naming Conventions

### Files and Folders
- React components: `PascalCase` → `HeroSection.jsx`, `TipoCard.jsx`
- Hooks: `camelCase` prefixed with `use` → `useScrollPosition.js`
- Services / utils: `camelCase` → `quoteService.js`, `formatPhone.js`
- CSS Modules: same name as component → `HeroSection.module.css`
- Constants files: `SCREAMING_SNAKE_CASE.js` → `ROUTES.js`

### Variables and Functions
- All variable and function names must be in **English**.
- `camelCase` for variables and functions.
- `PascalCase` for React components and classes.
- `SCREAMING_SNAKE_CASE` for module-level constants.
- Boolean variables must be prefixed: `isLoading`, `hasError`, `canSubmit`.

```js
// Correct
const isFormVisible = true;
const quoteData = {};
const MAX_WALL_HEIGHT = 10;
function handleSubmit() {}
function fetchProjects() {}

// Wrong
const visible = true;
const datos = {};
const alturaMax = 10;
function manejarEnvio() {}
```

---

## Comments

Comments explain **why**, never **what**. The code itself explains what.

### Rules
- No comments describing what a line does if it is self-explanatory.
- No comments addressed to the developer reading (no "here we do X", "this is important", "don't forget").
- No commented-out code left in the codebase. Use version control (git) instead.
- JSDoc is required only on exported utility functions and service methods.

```js
// Wrong
// Here we check if the user filled the form
if (isFormComplete) { ... }

// Wrong — addressed to reader
// This is very important, don't remove
const WHATSAPP_NUMBER = '50672799927';

// Correct — explains WHY, not what
// WhatsApp requires the country code without '+' for wa.me links
const WHATSAPP_NUMBER = '50672799927';

// Correct — JSDoc on exported util
/**
 * Formats a local Costa Rican number to the wa.me URL format.
 * @param {string} localNumber - 8-digit number without country code
 * @returns {string} Full wa.me URL
 */
export function buildWhatsAppUrl(localNumber) {
  return `https://wa.me/506${localNumber}`;
}
```

---

## Component Structure

Every component file must follow this order:

```jsx
// 1. React imports
import { useState, useEffect } from 'react';

// 2. Third-party imports
import { Card, Button } from 'evergreen-ui';

// 3. Internal imports (components, hooks, utils, theme)
import { colors } from '../../theme/colors';
import { useQuoteForm } from '../../hooks/useQuoteForm';

// 4. CSS Module import (last)
import styles from './TipoCard.module.css';

// 5. Constants local to this component
const CARD_TYPES = { VINIL: 'vinil', MIXTO: 'mixto', PINTURA: 'pintura' };

// 6. Component definition
function TipoCard({ type, title, features }) {
  // 6a. Hooks first
  const [isExpanded, setIsExpanded] = useState(false);

  // 6b. Derived values
  const headerColor = colors[type] ?? colors.teal;

  // 6c. Handlers
  function handleToggle() {
    setIsExpanded((prev) => !prev);
  }

  // 6d. Return JSX
  return (
    <Card>
      ...
    </Card>
  );
}

// 7. Default export last
export default TipoCard;
```

---

## Props

- Always define `propTypes` or use TypeScript interfaces.
- Destructure props in the function signature, not inside the body.
- Provide default values for optional props.

```js
// With PropTypes
import PropTypes from 'prop-types';

TipoCard.propTypes = {
  type:     PropTypes.oneOf(['vinil', 'mixto', 'pintura']).isRequired,
  title:    PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string),
};

TipoCard.defaultProps = {
  features: [],
};
```

---

## Git Commit Convention

Use Conventional Commits format:

```
feat: add WhatsApp float button with pulse animation
fix: correct blob animation on Safari
style: apply Kalova color tokens to TipoCard headers
refactor: extract quote form logic into useQuoteForm hook
perf: lazy-load TiposPage and CotizacionPage
chore: add vite-bundle-visualizer to dev dependencies
```
