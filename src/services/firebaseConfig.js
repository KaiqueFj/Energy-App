// services/firebaseConfig.js
import { initializeApp, getApp, getApps } from "firebase/app"; // Add getApp and getApps
import {
  getAuth,
  initializeAuth,
  browserLocalPersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage

const firebaseConfig = {
  apiKey: "AIzaSyDxYc9vgufbVUEKe2ZbUcgwxVOCtSVdP-k",
  authDomain: "energy-app-20774.firebaseapp.com",
  projectId: "energy-app-20774",
  storageBucket: "energy-app-20774.firebasestorage.app",
  messagingSenderId: "482253290593",
  appId: "1:482253290593:web:6578c4d07dba3d3adbfe20",
  measurementId: "G-51KVFWEHHW",
};

// Initialize Firebase only if it hasn't been initialized
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Initialize Firebase Auth with AsyncStorage persistence
const auth = initializeAuth(app, {
  persistence: browserLocalPersistence,
  storage: AsyncStorage,
});

export { auth, getAuth };
export const db = getFirestore(app);
