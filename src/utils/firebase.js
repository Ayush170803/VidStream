
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQDELG0U69dP9xQOk64CgDzvCs6n2m_QQ",
  authDomain: "authentication-9048e.firebaseapp.com",
  projectId: "authentication-9048e",
  storageBucket: "authentication-9048e.firebasestorage.app",
  messagingSenderId: "559156561765",
  appId: "1:559156561765:web:44ad64632cd4fdad9f038c",
  measurementId: "G-8HVDNVMSYT"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth =getAuth();