import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

    apiKey: "AIzaSyDHLv2RVJHvEarSM0vVLTCCG9TgTG1osoY",
  
    authDomain: "training-and-placement-d0a4f.firebaseapp.com",
  
    projectId: "training-and-placement-d0a4f",
  
    storageBucket: "training-and-placement-d0a4f.firebasestorage.app",
  
    messagingSenderId: "980886849244",
  
    appId: "1:980886849244:web:4f0f0d862cc846d7ce1619",
  
    measurementId: "G-Y31BGY0SSR"
  
  };
  

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);