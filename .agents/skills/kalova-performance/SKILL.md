---
name: kalova-performance
description: Enforces performance and bundle optimization rules for the Kalova React app. Use when adding new dependencies, building components, configuring Vite, handling images, or any task that could affect page load speed or runtime performance.
---

# Kalova Performance & Lightweight Page

This skill ensures the Kalova web app remains fast, lightweight, and scores well on Core Web Vitals (LCP, CLS, INP).

---

## Bundler — Vite Configuration

Always use Vite. Configure manual chunk splitting to avoid one large bundle.

```js
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor:    ['react', 'react-dom'],
          evergreen: ['evergreen-ui'],
          firebase:  ['firebase/app', 'firebase/firestore', 'firebase/auth'],
        },
      },
    },
    chunkSizeWarningLimit: 400,
  },
});
```

---

## Code Splitting — React Lazy

Every page-level component must use `React.lazy` + `Suspense`. Never import pages directly at the top level.

```jsx
import { lazy, Suspense } from 'react';
import { PageSpinner } from '../components/common/PageSpinner';

const TiposPage    = lazy(() => import('../pages/TiposPage'));
const CotizacionPage = lazy(() => import('../pages/CotizacionPage'));

// Usage
<Suspense fallback={<PageSpinner />}>
  <TiposPage />
</Suspense>
```

---

## Images

- Always serve images in **WebP** format.
- Use `loading="lazy"` on every `<img>` below the fold.
- Hero images must define explicit `width` and `height` to prevent CLS.
- Use `srcset` for responsive images when serving from Firebase Storage.

```jsx
<img
  src="/assets/murales/vinil-mural.webp"
  alt="Mural con vinil personalizado"
  width={600}
  height={400}
  loading="lazy"
/>
```

---

## Fonts

- Load Google Fonts with `display=swap` to prevent render blocking.
- Preconnect to font origins in `index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bangers&family=Dancing+Script:wght@700&family=Nunito:wght@400;700;800;900&display=swap" rel="stylesheet">
```

---

## Evergreen UI — Import Strategy

Import only what is used. Never barrel-import the entire library.

```js
// Correct
import { Button, TextInput, Card } from 'evergreen-ui';

// Wrong — imports entire library
import * as Evergreen from 'evergreen-ui';
```

---

## Animations

- CSS-only animations for decorative elements (blobs, stars twinkle).
- Use `will-change: transform` only on actively animating elements. Remove after animation ends.
- Never animate `width`, `height`, or `top/left`. Use `transform` and `opacity` only.
- Respect `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Firebase — Read Optimization

- Cache Firestore reads with `getDocFromCache` before hitting the network.
- Enable Firestore offline persistence once on app init:

```js
import { enableIndexedDbPersistence } from 'firebase/firestore';
enableIndexedDbPersistence(db).catch(() => {});
```

- Avoid listening to entire collections. Use `.where()` filters and `.limit()` always.

---

## React Rendering

- Memoize expensive components with `React.memo`.
- Memoize callbacks with `useCallback`, computed values with `useMemo`.
- Never create new objects or arrays inline in JSX props — extract to variables.

```jsx
// Wrong
<Component style={{ color: 'red' }} />

// Correct
const labelStyle = { color: colors.magenta };
<Component style={labelStyle} />
```

---

## Bundle Audit

Run before every production build:

```bash
npx vite-bundle-visualizer
```

Flag any chunk over **200KB (gzipped)**. Investigate and split before deploying.
