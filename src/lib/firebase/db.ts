import {
  getFirestore,
  initializeFirestore,
  persistentLocalCache,
  persistentMultipleTabManager,
  type Firestore,
} from 'firebase/firestore';
import { getFirebaseApp } from './client';

/**
 * Firestore vive en su propio módulo para cargarse bajo demanda (es la dependencia más
 * pesada, ~73 kB gzip): las páginas pintan su contenido y los datos llegan después.
 *
 * Caché persistente offline: la práctica no debe depender de la conexión.
 * Nota clínica: en dispositivos compartidos la caché local conserva datos tras cerrar
 * sesión; `clearIndexedDbPersistence` se invoca en el cierre de sesión (ver AuthProvider).
 */
let db: Firestore | undefined;

export function getDb(): Firestore {
  if (db) return db;
  const firebaseApp = getFirebaseApp();
  if (typeof window === 'undefined') {
    db = getFirestore(firebaseApp);
    return db;
  }
  try {
    db = initializeFirestore(firebaseApp, {
      localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() }),
    });
  } catch {
    // Ya inicializado (p. ej. recarga en caliente en desarrollo).
    db = getFirestore(firebaseApp);
  }
  return db;
}
