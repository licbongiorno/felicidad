import { getApp, getApps, initializeApp, type FirebaseApp } from 'firebase/app';
import { browserLocalPersistence, indexedDBLocalPersistence, initializeAuth, type Auth } from 'firebase/auth';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

let app: FirebaseApp | undefined;
let auth: Auth | undefined;

/**
 * App Check: certifica que las peticiones a Firestore y Auth vienen de esta web y no de un
 * script que copió la configuración. Sólo se activa si existe la clave de reCAPTCHA v3
 * (NEXT_PUBLIC_RECAPTCHA_SITE_KEY); después hay que «aplicarlo» en la consola de Firebase.
 */
const RECAPTCHA_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

export function getFirebaseApp(): FirebaseApp {
  if (!app) {
    const fresh = !getApps().length;
    app = fresh ? initializeApp(firebaseConfig) : getApp();
    if (fresh && RECAPTCHA_KEY && typeof window !== 'undefined') {
      initializeAppCheck(app, { provider: new ReCaptchaV3Provider(RECAPTCHA_KEY), isTokenAutoRefreshEnabled: true });
    }
  }
  return app;
}

/**
 * Auth sin el resolvedor de popups: `getAuth()` lo incluye siempre y añade ~10 kB a
 * todas las páginas. El popup de Google sólo se usa en /login, que pasa
 * `browserPopupRedirectResolver` explícitamente a `signInWithPopup`.
 * (initializeAuth con las mismas opciones devuelve la instancia existente.)
 */
export function getFirebaseAuth(): Auth {
  auth ??= initializeAuth(getFirebaseApp(), { persistence: [indexedDBLocalPersistence, browserLocalPersistence] });
  return auth;
}
