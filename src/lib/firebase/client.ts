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
 *
 * Importante: si reCAPTCHA no carga (dominio no registrado en la clave, bloqueador, red),
 * el SDK espera su token para siempre y Firestore no responde: la app queda cargando. Por
 * eso primero se comprueba que reCAPTCHA entregue un token (máx. 8 s) y sólo entonces se
 * activa App Check. Si falla, la app sigue funcionando sin App Check y se avisa en consola.
 * Quien use datos espera a `appCheckReady()` (AuthProvider y login) para no enviar
 * peticiones sin token si App Check está aplicado.
 */
const RECAPTCHA_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
const PROBE_MS = 8000;

let appCheckPromise: Promise<void> | null = null;

type Grecaptcha = { ready: (cb: () => void) => void; execute: (key: string, opts: { action: string }) => Promise<string> };

function recaptchaWorks(key: string): Promise<boolean> {
  return new Promise((resolve) => {
    const timer = setTimeout(() => resolve(false), PROBE_MS);
    const done = (ok: boolean) => {
      clearTimeout(timer);
      resolve(ok);
    };
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(key)}`;
    script.async = true;
    script.onerror = () => done(false);
    script.onload = () => {
      const g = (window as unknown as { grecaptcha?: Grecaptcha }).grecaptcha;
      if (!g?.ready) return done(false);
      try {
        g.ready(() => g.execute(key, { action: 'appcheck' }).then((token) => done(!!token), () => done(false)));
      } catch {
        done(false);
      }
    };
    document.head.appendChild(script);
  });
}

/** Resuelve cuando App Check quedó activo o se descartó. Nunca se rechaza ni se cuelga. */
export function appCheckReady(): Promise<void> {
  if (!RECAPTCHA_KEY || typeof window === 'undefined') return Promise.resolve();
  appCheckPromise ??= recaptchaWorks(RECAPTCHA_KEY).then((ok) => {
    if (!ok) {
      console.warn('App Check no se activó: reCAPTCHA no respondió. Revisa que el dominio esté registrado en la clave de reCAPTCHA.');
      return;
    }
    try {
      initializeAppCheck(getFirebaseApp(), { provider: new ReCaptchaV3Provider(RECAPTCHA_KEY), isTokenAutoRefreshEnabled: true });
    } catch {
      /* ya inicializado */
    }
  });
  return appCheckPromise;
}

export function getFirebaseApp(): FirebaseApp {
  app ??= getApps().length ? getApp() : initializeApp(firebaseConfig);
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
