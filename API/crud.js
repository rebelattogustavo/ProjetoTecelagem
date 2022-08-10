import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA1l31Ax63NmM6VrQ7BbphEiJM8bdsL-RE",
  authDomain: "projetotecelagem-75d67.firebaseapp.com",
  projectId: "projetotecelagem-75d67",
  storageBucket: "projetotecelagem-75d67.appspot.com",
  messagingSenderId: "870912059311",
  appId: "1:870912059311:web:299a4cba50b953b412715a",
  measurementId: "G-9SMMCJNFLR"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);