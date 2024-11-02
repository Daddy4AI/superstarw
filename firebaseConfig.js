import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js';
import { getFirestore, initializeFirestore, persistentLocalCache } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js';

// Firebase 配置
export const firebaseConfig = {
    apiKey: "AIzaSyD4luqKnpoQvBGB4f6BuvwUAzTXqXQrnpI",
    authDomain: "superstarw-3ddc6.firebaseapp.com",
    projectId: "superstarw-3ddc6",
    storageBucket: "superstarw-3ddc6.appspot.com",
    messagingSenderId: "11393876466",
    appId: "1:11393876466:web:667884c8ea24c95794ab6b",
    measurementId: "G-HFFB83KWCP"
};

// 初始化 Firebase
const app = initializeApp(firebaseConfig);

// 初始化 Firestore with caching enabled
export const db = initializeFirestore(app, {
    cache: persistentLocalCache()
});
