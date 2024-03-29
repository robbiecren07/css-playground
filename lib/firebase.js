// Modular Firebase v.9 Initialization.
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getDatabase } from '@firebase/database'
import { getAuth } from 'firebase/auth'

const clientCredentials = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

function initFirebase() {
    if (typeof window !== undefined) {
        initializeApp(clientCredentials)
    }
}

const app = initializeApp(clientCredentials)
const db = getFirestore(app)
const realDB = getDatabase(app)
const auth = getAuth(app)

export { initFirebase, db, realDB, auth }