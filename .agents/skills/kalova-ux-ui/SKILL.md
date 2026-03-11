---
name: kalova-ux-ui
description: Applies Kalova brand design system when building React + Evergreen UI components. Use when creating or modifying any visual component, layout, page, or styling in the Murales y Diseno by Kalova web app.
---

# Kalova UX/UI Design System

This skill enforces the visual identity of **Murales y Diseno by Kalova** across all React components built with the Evergreen UI library.

---

## Brand Color Tokens

Always define and consume colors through a central theme file. Never hardcode hex values in components.

```js
// src/theme/colors.js
export const colors = {
  magenta:     '#E8197A',
  orange:      '#F7941D',
  yellow:      '#F5E02A',
  teal:        '#1EADB5',
  dark:        '#1A1A1A',
  white:       '#FFFFFF',
  grayLight:   '#FAFAFA',
  grayMid:     '#EEEEEE',
  grayText:    '#666666',
};
```

---

## Typography Rules

Use **Google Fonts** loaded in `index.html`. Never use system fonts (Arial, sans-serif, Inter, Roboto).

| Role            | Font Family         | Weight  |
|-----------------|---------------------|---------|
| Headings / Nav  | `Bangers`           | 400     |
| Script / Accent | `Dancing Script`    | 700     |
| Body / UI Text  | `Nunito`            | 400–900 |

```html
<!-- index.html -->
<link href="https://fonts.googleapis.com/css2?family=Bangers&family=Dancing+Script:wght@700&family=Nunito:wght@400;700;800;900&display=swap" rel="stylesheet">
```

Apply via CSS variables:
```css
:root {
  --font-heading: 'Bangers', cursive;
  --font-script:  'Dancing Script', cursive;
  --font-body:    'Nunito', sans-serif;
}
```

---

## Evergreen UI Theming

Override Evergreen's default theme to match the Kalova palette.

```js
// src/theme/evergreenTheme.js
import { defaultTheme, mergeTheme } from 'evergreen-ui';
import { colors } from './colors';

export const kalovaTheme = mergeTheme(defaultTheme, {
  colors: {
    blue500: colors.teal,
    blue400: colors.teal,
    blue300: '#4DC8CF',
    green500: colors.teal,
    orange500: colors.orange,
    red500: colors.magenta,
  },
  components: {
    Button: {
      appearances: {
        primary: {
          backgroundColor: colors.magenta,
          color: colors.white,
          borderRadius: '50px',
          fontFamily: 'var(--font-heading)',
          letterSpacing: '2px',
          fontSize: '1.1rem',
          _hover: { backgroundColor: '#C4156A' },
          _active: { backgroundColor: '#A01057' },
        },
        secondary: {
          backgroundColor: colors.yellow,
          color: colors.dark,
          borderRadius: '50px',
          fontFamily: 'var(--font-heading)',
          letterSpacing: '2px',
        },
      },
    },
  },
});
```

Wrap the app:
```jsx
// src/main.jsx
import { ThemeProvider } from 'evergreen-ui';
import { kalovaTheme } from './theme/evergreenTheme';

<ThemeProvider value={kalovaTheme}>
  <App />
</ThemeProvider>
```

---

## Layout Principles

- **Blob shapes**: Use SVG or CSS `border-radius` morphing for organic background elements.
- **Sticky navbar**: Yellow (`#F5E02A`) background, teal text, `Bangers` font, `letter-spacing: 3px`.
- **Section headers**: Yellow banner strip, teal `Bangers` heading, left-aligned.
- **Cards**: `border-radius: 20px`, white background, subtle `box-shadow`, colored top-border or header per type.
- **CTAs**: Pill-shaped (`border-radius: 50px`), magenta primary, yellow secondary.
- **Stars**: Decorative `★` elements scattered at absolute positions with CSS `@keyframes twinkle`.
- **Spacing**: Use 8px base unit (8, 16, 24, 32, 48, 64, 80px).

---

## Component Conventions

- Every new component gets a matching `ComponentName.css` or uses CSS Modules (no inline styles for layout).
- Blob animations must use `@keyframes morph` with `border-radius` transitions, NOT JavaScript.
- Icons: Use Evergreen's `<Icon>` or inline SVG. Never emoji as content icons (decorative stars are the only exception).
- Images: Always include `alt` attribute. Use `object-fit: cover` on containers.
- Responsive: Mobile-first. Breakpoints: `480px`, `768px`, `1024px`.

---

## Page Sections — Required Structure

The following sections must exist on the landing page in this order:

1. `<Navbar>` — sticky, yellow, Bangers links
2. `<HeroSection>` — blobs, logo, CTA buttons, contact info
3. `<BenefitsSection id="murales">` — benefit grid with orange badge
4. `<TiposSection id="tipos">` — 3 cards: Vinil (orange), Mixtos (magenta), Pintura (teal)
5. `<CotizacionSection id="cotizacion">` — yellow background, 6-step grid, WhatsApp CTA
6. `<RequisitosSection id="requisitos">` — tabbed content (Vinil/Mixto vs Pintura)
7. `<Footer>` — dark background, brand colors gradient top border
8. `<WhatsAppFloat>` — fixed bottom-right, green, pulse animation

---

## Accessibility

- Color contrast must pass WCAG AA. Test magenta on white and teal on yellow.
- All interactive elements need `:focus-visible` outlines.
- Use semantic HTML: `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`.
- `aria-label` on icon-only buttons (e.g., WhatsApp float button).
