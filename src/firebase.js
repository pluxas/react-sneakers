import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_PET_PROJECT_API_KEY,
  authDomain: process.env.REACT_APP_PET_PROJECT_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_PET_PROJECT_DATABASE_URL,
  projectId: process.env.REACT_APP_PET_PROJECT_PROJECT_ID,
  storageBucket: process.env.REACT_APP_PET_PROJECT_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_PET_PROJECT_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_PET_PROJECT_APP_ID,
};

const app = initializeApp(firebaseConfig);
const analystic = getAnalytics(app)

export const database = getDatabase(app);
