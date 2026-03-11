---
name: kalova-firebase
description: Expert guidance for Firebase integration in the Kalova React app. Use when configuring Firestore, Firebase Auth, Firebase Storage, Cloud Functions, Firebase Hosting, or optimizing any Firebase read/write operation. Covers data modeling, query optimization, cost control, and deployment.
---

# Kalova Firebase Expert

This skill covers all Firebase usage patterns for the Kalova web app — from initialization to deployment.

---

## Project Setup

```bash
npm install firebase
npm install -D firebase-tools
npx firebase login
npx firebase init   # Select: Firestore, Storage, Hosting, Functions
```

---

## Initialization — Single Instance Pattern

Initialize Firebase once. Export `db`, `auth`, and `storage` from a single file.

```js
// src/services/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore }  from 'firebase/firestore';
import { getAuth }       from 'firebase/auth';
import { getStorage }    from 'firebase/storage';

const firebaseConfig = {
  apiKey:            import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain:        import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId:         import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket:     import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId:             import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const db      = getFirestore(app);
export const auth    = getAuth(app);
export const storage = getStorage(app);
```

---

## Data Model — Collections

```
firestore/
├── quotes/              # Quote requests from website visitors
│   └── {quoteId}/
│       ├── name:          string
│       ├── phone:         string
│       ├── location:      string   (province/canton/district)
│       ├── wallWidth:     number
│       ├── wallHeight:    number
│       ├── wallFinish:    string
│       ├── muralType:     string   (vinil | mixto | pintura)
│       ├── installMonth:  string
│       ├── notes:         string
│       ├── status:        string   (pending | reviewed | closed)
│       ├── referenceUrls: string[]
│       └── createdAt:     timestamp
│
├── projects/            # Portfolio — public read
│   └── {projectId}/
│       ├── title:         string
│       ├── type:          string   (vinil | mixto | pintura)
│       ├── imageUrl:      string
│       ├── thumbnailUrl:  string
│       ├── location:      string
│       ├── publishedAt:   timestamp
│       └── isVisible:     boolean
│
├── rateLimits/          # Submission rate control
│   └── {sessionId}/
│       └── lastSubmit:    timestamp
│
└── settings/            # App config (single doc)
    └── public/
        ├── whatsappNumber: string
        └── instagramHandle: string
```

---

## Service Layer Pattern

Every Firestore operation lives in a service file. Components never import `db` directly.

```js
// src/services/quoteService.js
import {
  collection, addDoc, serverTimestamp,
  query, orderBy, limit, getDocs,
  doc, updateDoc,
} from 'firebase/firestore';
import { db } from './firebaseConfig';

const QUOTES_COLLECTION = 'quotes';

export async function submitQuote(formData) {
  const payload = {
    ...formData,
    status:    'pending',
    createdAt: serverTimestamp(),
  };
  const ref = await addDoc(collection(db, QUOTES_COLLECTION), payload);
  return ref.id;
}

export async function fetchRecentQuotes(count = 20) {
  const q = query(
    collection(db, QUOTES_COLLECTION),
    orderBy('createdAt', 'desc'),
    limit(count)
  );
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}

export async function updateQuoteStatus(quoteId, status) {
  const ref = doc(db, QUOTES_COLLECTION, quoteId);
  await updateDoc(ref, { status });
}
```

---

## Real-Time Listeners — Custom Hook Pattern

Use `onSnapshot` only when real-time updates are needed (e.g., admin dashboard). For public pages, use one-time `getDocs`.

```js
// src/hooks/useProjects.js
import { useEffect, useState } from 'react';
import { collection, query, where, orderBy, limit, onSnapshot } from 'firebase/firestore';
import { db } from '../services/firebaseConfig';

export function useProjects(projectType = null, maxCount = 12) {
  const [projects, setProjects]   = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError]         = useState(null);

  useEffect(() => {
    let q = query(
      collection(db, 'projects'),
      where('isVisible', '==', true),
      orderBy('publishedAt', 'desc'),
      limit(maxCount)
    );

    if (projectType) {
      q = query(q, where('type', '==', projectType));
    }

    const unsubscribe = onSnapshot(
      q,
      (snap) => {
        setProjects(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
        setIsLoading(false);
      },
      (err) => {
        setError(err);
        setIsLoading(false);
      }
    );

    return unsubscribe;
  }, [projectType, maxCount]);

  return { projects, isLoading, error };
}
```

---

## Firebase Storage — Image Upload

```js
// src/services/storageService.js
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from './firebaseConfig';

export function uploadQuoteReference(userId, file, onProgress) {
  const storageRef = ref(storage, `quote-references/${userId}/${Date.now()}-${file.name}`);
  const task = uploadBytesResumable(storageRef, file);

  return new Promise((resolve, reject) => {
    task.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        onProgress?.(progress);
      },
      reject,
      async () => {
        const url = await getDownloadURL(task.snapshot.ref);
        resolve(url);
      }
    );
  });
}
```

---

## Authentication — Admin Only

The admin panel (quote management) uses Email/Password auth. Google Sign-In is optional.

```js
// src/services/authService.js
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig';

export function loginAdmin(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logoutAdmin() {
  return signOut(auth);
}

export function subscribeToAuthState(callback) {
  return onAuthStateChanged(auth, callback);
}
```

```js
// src/hooks/useAuth.js
import { useEffect, useState } from 'react';
import { subscribeToAuthState } from '../services/authService';

export function useAuth() {
  const [user, setUser]         = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = subscribeToAuthState((currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });
    return unsubscribe;
  }, []);

  return { user, isLoading, isAdmin: !!user };
}
```

---

## Cost Control

- Always use `.limit()` on every query.
- Paginate with `startAfter` cursor — never fetch all documents.
- Cache Firestore results in component state. Do not re-fetch on every render.
- Use `getDocFromCache` for data that rarely changes (settings, types list).
- Delete rate limit documents older than 24h via a scheduled Cloud Function to prevent collection bloat.

---

## Firebase Hosting — Deployment

```json
// firebase.json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      { "source": "**", "destination": "/index.html" }
    ],
    "headers": [
      {
        "source": "**/*.@(js|css)",
        "headers": [{ "key": "Cache-Control", "value": "max-age=31536000" }]
      },
      {
        "source": "**/*.@(jpg|jpeg|webp|png|svg)",
        "headers": [{ "key": "Cache-Control", "value": "max-age=86400" }]
      }
    ]
  }
}
```

```bash
# Build and deploy
npm run build
npx firebase deploy --only hosting
```
