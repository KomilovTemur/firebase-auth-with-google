import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBOZsnXzInAybo0ilZ86g0PtlbbX3YPhE0",
  authDomain: "fir-auth-d5277.firebaseapp.com",
  projectId: "fir-auth-d5277",
  storageBucket: "fir-auth-d5277.appspot.com",
  messagingSenderId: "1026394003529",
  appId: "1:1026394003529:web:27299b44b3209ba3aa0798",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)