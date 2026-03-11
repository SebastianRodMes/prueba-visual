---
name: kalova-security
description: Enforces security best practices for the Kalova React and Firebase app. Use when handling user input, configuring Firebase rules, managing environment variables, building forms, or reviewing any code that touches data, authentication, or external services.
---

# Kalova Security

This skill defines the security rules and patterns to prevent data leaks, injection attacks, abuse, and misconfiguration in the Kalova web app.

---

## Environment Variables

Never commit API keys or Firebase config to the repository.

```bash
# .env (never committed — add to .gitignore)
VITE_FIREBASE_API_KEY=your_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abcdef
```

```js
// src/services/firebaseConfig.js
const firebaseConfig = {
  apiKey:            import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain:        import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId:         import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket:     import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId:             import.meta.env.VITE_FIREBASE_APP_ID,
};
```

```
# .gitignore
.env
.env.local
.env.production
```

---

## Firebase Security Rules — Firestore

Default rule must be **deny all**. Open only what is explicitly needed.

```js
// firestore.rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Deny everything by default
    match /{document=**} {
      allow read, write: if false;
    }

    // Quote requests: public can create, only admin can read/update/delete
    match /quotes/{quoteId} {
      allow create: if isValidQuote(request.resource.data);
      allow read, update, delete: if isAdmin();
    }

    // Projects/portfolio: public read only
    match /projects/{projectId} {
      allow read: if true;
      allow write: if isAdmin();
    }

    function isAdmin() {
      return request.auth != null
        && request.auth.token.admin == true;
    }

    function isValidQuote(data) {
      return data.keys().hasAll(['name', 'phone', 'location', 'wallWidth', 'wallHeight', 'createdAt'])
        && data.name is string
        && data.name.size() <= 100
        && data.phone is string
        && data.phone.matches('^[0-9]{8}$')
        && data.createdAt == request.time;
    }
  }
}
```

---

## Firebase Security Rules — Storage

```js
// storage.rules
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {

    // Portfolio images: public read, admin write
    match /projects/{imageId} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.token.admin == true;
    }

    // Quote reference images: authenticated write, max 5MB, images only
    match /quote-references/{userId}/{imageId} {
      allow write: if request.auth != null
        && request.resource.size < 5 * 1024 * 1024
        && request.resource.contentType.matches('image/.*');
      allow read: if request.auth != null && request.auth.token.admin == true;
    }
  }
}
```

---

## Form Input Validation & Sanitization

All user input must be validated on the client before submission AND enforced by Firestore rules server-side.

```js
// src/utils/validateQuoteForm.js

const PHONE_REGEX = /^[2-8]\d{7}$/;
const MAX_TEXT_LENGTH = 500;

export function validateQuoteForm(data) {
  const errors = {};

  if (!data.name?.trim()) {
    errors.name = 'Name is required';
  } else if (data.name.length > 100) {
    errors.name = 'Name is too long';
  }

  if (!PHONE_REGEX.test(data.phone)) {
    errors.phone = 'Enter a valid Costa Rican phone number';
  }

  if (!data.location?.trim()) {
    errors.location = 'Location is required';
  }

  if (data.notes && data.notes.length > MAX_TEXT_LENGTH) {
    errors.notes = `Max ${MAX_TEXT_LENGTH} characters`;
  }

  return errors;
}
```

Never use `dangerouslySetInnerHTML`. If dynamic HTML is unavoidable, sanitize with DOMPurify:

```js
import DOMPurify from 'dompurify';
const safeHtml = DOMPurify.sanitize(userContent);
```

---

## Rate Limiting — Quote Submissions

Prevent spam submissions using a client-side cooldown backed by Firestore rate tracking.

```js
// src/services/quoteService.js
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';

const COOLDOWN_MINUTES = 30;

export async function canSubmitQuote(sessionId) {
  const ref = doc(db, 'rateLimits', sessionId);
  const snap = await getDoc(ref);

  if (!snap.exists()) return true;

  const lastSubmit = snap.data().lastSubmit?.toDate();
  if (!lastSubmit) return true;

  const minutesSince = (Date.now() - lastSubmit.getTime()) / 60000;
  return minutesSince >= COOLDOWN_MINUTES;
}

export async function recordQuoteSubmission(sessionId) {
  await setDoc(doc(db, 'rateLimits', sessionId), {
    lastSubmit: serverTimestamp(),
  });
}
```

---

## XSS & Injection Prevention

- Never render raw user input as HTML.
- Never construct Firestore queries using unsanitized user strings.
- Never expose Firebase Admin SDK on the client. Admin operations go through Cloud Functions only.

---

## Dependency Audit

Run before every release:

```bash
npm audit --audit-level=moderate
```

Fix all `high` and `critical` vulnerabilities before deploying. Do not use `npm audit fix --force` without reviewing the changes first.

---

## HTTPS & Headers

Ensure the following headers are set at the hosting level (Firebase Hosting `firebase.json`):

```json
{
  "hosting": {
    "headers": [
      {
        "source": "**",
        "headers": [
          { "key": "X-Content-Type-Options", "value": "nosniff" },
          { "key": "X-Frame-Options", "value": "DENY" },
          { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
          { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" }
        ]
      }
    ]
  }
}
```
