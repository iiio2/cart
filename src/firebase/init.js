import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCMZunrDbBuBJNtmbBnsCCxf-tudZegYaY',
  authDomain: 'cart-bda6c.firebaseapp.com',
  projectId: 'cart-bda6c',
  storageBucket: 'cart-bda6c.appspot.com',
  messagingSenderId: '323960623331',
  appId: '1:323960623331:web:e53170f8b8cb965c0b75d6',
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
