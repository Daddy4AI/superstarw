import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js';
import { getDatabase } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js';


// Firebase 配置
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
export const database = getDatabase(app); // Ensure this line exists