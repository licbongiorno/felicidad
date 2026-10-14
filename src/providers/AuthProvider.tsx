'use client';

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { onAuthStateChanged, signOut as firebaseSignOut, type User } from 'firebase/auth';
import { getFirebaseAuth } from '@/lib/firebase/client';
import { CONSENT_VERSION } from '@/lib/consent';
import { useProgressStore } from '@/store/useProgressStore';
import { useKidsStore } from '@/store/useKidsStore';
import { exitKidMode } from '@/lib/kids/kidMode';
import { CONFIG_MISSING, DEMO_MODE } from '@/lib/demo';
import type { Profile } from '@/domain/types';
import { ConfigError } from '@/components/layout/ConfigError';

const DEMO_USER = { uid: 'demo', displayName: 'Demo', email: null, emailVerified: true } as unknown as User;
const DEMO_PROFILE: Profile = { displayName: 'Demo', role: 'patient', consentVersion: CONSENT_VERSION };

/**
 * La identidad va en Context (cambia rara vez y la necesita todo el árbol);
 * el progreso va en Zustand (cambia a menudo y conviene suscribirse por porciones).
 * Este provider es el único punto que conecta ambos mundos.
 */

interface AuthContextValue {
  user: User | null;
  /** undefined = cargando; null = sin documento de perfil todavía. */
  profile: Profile | null | undefined;
  loading: boolean;
  /** El consentimiento vigente está aceptado (o no aplica, en demo). */
  hasConsent: boolean;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (CONFIG_MISSING) return;
    if (DEMO_MODE) {
      setUser(DEMO_USER);
      setProfile(DEMO_PROFILE);
      setLoading(false);
      useProgressStore.getState().connect(DEMO_USER.uid);
      return;
    }
    let unsubProfile: (() => void) | undefined;
    let current: string | null = null;
    const unsubAuth = onAuthStateChanged(getFirebaseAuth(), (u) => {
      unsubProfile?.();
      unsubProfile = undefined;
      current = u?.uid ?? null;
      setUser(u);
      setLoading(false);
      if (u) {
        setProfile(undefined);
        // Firestore se carga bajo demanda: no forma parte del JS inicial de cada página.
        import('@/lib/firebase/repositories')
          .then(({ subscribeProfile }) => {
            if (current !== u.uid) return; // cambió la sesión mientras cargaba
            unsubProfile = subscribeProfile(u.uid, setProfile, () => setProfile(null));
          })
          .catch(() => setProfile(null));
        useProgressStore.getState().connect(u.uid);
      } else {
        setProfile(null);
        useProgressStore.getState().disconnect();
        useKidsStore.getState().disconnect();
      }
    });
    return () => {
      unsubProfile?.();
      unsubAuth();
    };
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      profile,
      loading,
      hasConsent: DEMO_MODE || profile?.consentVersion === CONSENT_VERSION,
      signOut: async () => {
        useProgressStore.getState().disconnect();
        useKidsStore.getState().disconnect();
        exitKidMode();
        if (DEMO_MODE) return window.location.assign('/');
        await firebaseSignOut(getFirebaseAuth());
        // Privacidad en equipos compartidos: elimina la caché local de datos clínicos.
        try {
          const [{ terminate, clearIndexedDbPersistence }, { getDb }] = await Promise.all([import('firebase/firestore'), import('@/lib/firebase/db')]);
          await terminate(getDb());
          await clearIndexedDbPersistence(getDb());
        } catch {
          /* otra pestaña mantiene la caché abierta; se limpiará en el próximo cierre */
        }
        window.location.assign('/');
      },
    }),
    [user, profile, loading],
  );

  if (CONFIG_MISSING) return <ConfigError />;

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth debe usarse dentro de <AuthProvider>');
  return ctx;
}
