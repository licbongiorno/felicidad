'use client';

import { create } from 'zustand';

/**
 * Estado de interfaz (no clínico).
 * - `immersive`: mientras una práctica corre, la navegación se retira para reducir estímulos.
 * - `searchOpen`: buscador global (⌘K).
 * - `voice` / `chime`: preferencias de práctica por dispositivo. Se guardan en localStorage
 *   (conveniencia por dispositivo, nunca datos clínicos) y toleran almacenamiento bloqueado.
 */

const PREFS_KEY = 'eudaimonia-prefs';

interface Prefs {
  voice: boolean;
  chime: boolean;
  /** Mostrar el desafío semanal opcional en el panel y en Tu jardín. */
  challenge: boolean;
}

const DEFAULT_PREFS: Prefs = { voice: false, chime: true, challenge: true };

function loadPrefs(): Prefs {
  if (typeof window === 'undefined') return DEFAULT_PREFS;
  try {
    return { ...DEFAULT_PREFS, ...JSON.parse(localStorage.getItem(PREFS_KEY) ?? '{}') };
  } catch {
    return DEFAULT_PREFS;
  }
}

function savePrefs(p: Prefs) {
  try {
    localStorage.setItem(PREFS_KEY, JSON.stringify(p));
  } catch {
    /* almacenamiento no disponible: la preferencia dura la sesión */
  }
}

interface UiState extends Prefs {
  immersive: boolean;
  searchOpen: boolean;
  setSearchOpen: (value: boolean) => void;
  hydrated: boolean;
  setImmersive: (value: boolean) => void;
  setPref: <K extends keyof Prefs>(key: K, value: Prefs[K]) => void;
  hydrate: () => void;
}

export const useUiStore = create<UiState>()((set, get) => ({
  ...DEFAULT_PREFS,
  immersive: false,
  searchOpen: false,
  setSearchOpen: (searchOpen) => set({ searchOpen }),
  hydrated: false,
  setImmersive: (immersive) => set({ immersive }),
  setPref: (key, value) => {
    set({ [key]: value } as Partial<UiState>);
    const { voice, chime, challenge } = get();
    savePrefs({ voice, chime, challenge });
  },
  // Tras montar (no en el render del servidor) para evitar desajustes de hidratación.
  hydrate: () => {
    if (!get().hydrated) set({ ...loadPrefs(), hydrated: true });
  },
}));
