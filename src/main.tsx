import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import './index.css';
import ErrorBoundary from './components/ErrorBoundary';
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4mRr_K4DLeKwwhPULGIAUagMUeLe1Npc",
  authDomain: "ai-studio-applet-webapp-4c980.firebaseapp.com",
  projectId: "ai-studio-applet-webapp-4c980",
  appId: "1:972671343191:web:6b03e235da4304708b2112"
  };

initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

declare global {
  interface Window {
    login: () => Promise<void>;
  }
}

// Expose login to global scope for HTML button
window.login = () => signInWithPopup(auth, provider)
  .then(result => console.log("User:", result.user))
  .catch(error => console.error("Error:", error));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
);
console.log("✅ Firebase setup loaded");
