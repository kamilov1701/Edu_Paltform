import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
    getAuth
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBU6kkG45ZZ5C3g4_t8TUhD0_Jd681Zf3Q",
    authDomain: "edu-system-818b4.firebaseapp.com",
    projectId: "edu-system-818b4",
    storageBucket: "edu-system-818b4.firebasestorage.app",
    messagingSenderId: "590078518393",
    appId: "1:590078518393:web:010097b2b7566ed5c4a0a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth
export const auth = getAuth(app);