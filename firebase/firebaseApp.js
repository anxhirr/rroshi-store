import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: 'rroshi-store-2efa7.firebaseapp.com',
  projectId: 'rroshi-store-2efa7',
  storageBucket: 'rroshi-store-2efa7.appspot.com',
  messagingSenderId: '1024217662459',
  appId: '1:1024217662459:web:250b15b3c51db4d8b2415e',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)

// Helper function to initialize firebase
export const initFirebase = () => {
  return app
}

export const db = getFirestore(app)
