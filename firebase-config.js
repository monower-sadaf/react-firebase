import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {

    apiKey: "AIzaSyDO9rab7Pf1yFLnhe7l5dXp1-XfWWcJNVo",
  
    authDomain: "reactfirebase-b88fb.firebaseapp.com",
  
    projectId: "reactfirebase-b88fb",
  
    storageBucket: "reactfirebase-b88fb.appspot.com",
  
    messagingSenderId: "126254051819",
  
    appId: "1:126254051819:web:e0f276eab9d0b0b6c229ae",
  
    measurementId: "G-FMJHYCCZ7S"
  
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);