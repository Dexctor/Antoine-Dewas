import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Vérification des variables d'environnement requises
const requiredEnvVars = [
  'VITE_FIREBASE_API_KEY',
  'VITE_FIREBASE_AUTH_DOMAIN',
  'VITE_FIREBASE_DATABASE_URL',
  'VITE_FIREBASE_PROJECT_ID'
];

const missingEnvVars = requiredEnvVars.filter(
  (varName) => !import.meta.env[varName]
);

if (missingEnvVars.length > 0) {
  throw new Error(
    `Missing required environment variables: ${missingEnvVars.join(', ')}`
  );
}

let app;
let db;

try {
  app = initializeApp(firebaseConfig);
  db = getDatabase(app);
} catch (error) {
  console.error('Error initializing Firebase:', error);
  throw error;
}

const LIKE_COOLDOWN = 5 * 60 * 1000; // 5 minutes en millisecondes

// Messages personnalisés pour l'utilisateur
const LIKE_MESSAGES = {
  wait: "Merci pour votre like ! Vous pourrez liker à nouveau dans",
  error: "Veuillez patienter encore",
  success: "Merci pour votre soutien ! 💖"
} as const;

interface UserLike {
  lastLikeTime: number;
  count: number;
}

// Fonction pour générer un ID unique pour l'utilisateur
const getUserId = () => {
  let userId = localStorage.getItem('userId');
  if (!userId) {
    userId = crypto.randomUUID();
    localStorage.setItem('userId', userId);
  }
  return userId;
};

export { db, LIKE_COOLDOWN, getUserId, LIKE_MESSAGES };
export type { UserLike }; 