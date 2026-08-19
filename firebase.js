import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD4orj3NuWa0pNtdTEL1xE2Fy7JiyNuccM",
  authDomain: "next-auth-project-f67e2.firebaseapp.com",
  projectId: "next-auth-project-f67e2",
  storageBucket: "next-auth-project-f67e2.firebasestorage.app",
  messagingSenderId: "1084721844236",
  appId: "1:1084721844236:web:255bf34f5de93959181e29"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);