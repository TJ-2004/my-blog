// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'my-blog-632db.firebaseapp.com',
  projectId: 'my-blog-632db',
  storageBucket: 'my-blog-632db.appspot.com',
  messagingSenderId: '908618552368',
  appId: '1:908618552368:web:14a6670d7db8870abb09f5',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
