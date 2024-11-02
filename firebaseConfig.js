import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js';
import { getFirestore, enableIndexedDbPersistence } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js';

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
export const db = getFirestore(app);

// 启用离线持久性
enableIndexedDbPersistence(db)
    .catch((err) => {
        if (err.code === 'failed-precondition') {
            // 多个选项卡打开时，只能在一个选项卡中启用持久性
            console.warn('Multiple tabs open, persistence can only be enabled in one tab at a time.');
        } else if (err.code === 'unimplemented') {
            // 当前浏览器不支持所有必要的功能
            console.warn('The current browser does not support all of the features required to enable persistence');
        }
    });
