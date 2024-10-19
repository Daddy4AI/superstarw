// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, get, child, update } from 'firebase/database';

export const firebaseConfig = {
  apiKey: "AIzaSyD4luqKnpoQvBGB4f6BuvwUAzTXqXQrnpI",
  authDomain: "superstarw-3ddc6.firebaseapp.com",
  databaseURL: "https://superstarw-3ddc6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "superstarw-3ddc6",
  storageBucket: "superstarw-3ddc6.appspot.com",
  messagingSenderId: "11393876466",
  appId: "1:11393876466:web:667884c8ea24c95794ab6b",
  measurementId: "G-HFFB83KWCP"
};

// 初始化 Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
