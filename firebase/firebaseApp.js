// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCT_v-TDTTBEZIDY6vPFeOGQf1W9jVMyQ4',
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
