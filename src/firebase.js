import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_PET_PROJECT_API_KEY,
  authDomain: process.env.REACT_APP_PET_PROJECT_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PET_PROJECT_PROJECT_ID,
  storageBucket: process.env.REACT_APP_PET_PROJECT_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_PET_PROJECT_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_PET_PROJECT_APP_ID
};

const app = initializeApp(firebaseConfig);