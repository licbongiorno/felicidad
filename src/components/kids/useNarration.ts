'use client';

import { useCallback, useEffect, useState } from 'react';
import { narrateByDefault, type KidProfile } from '@/domain/kids';
import { speak, stopSpeaking, voiceSupported } from '@/lib/voice';

/**
 * Voz narrada en la sección para chicos (síntesis del navegador). Activa por defecto para
 * quienes todavía no leen (4 a 6 años); cada perfil puede encenderla o apagarla.
 */

const KEY = 'eudaimonia-kid-voice';

function readPrefs(): Record<string, boolean> {
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? '{}');
  } catch {
    return {};
  }
}

export function useNarration(kid: KidProfile | null) {
  const [on, setOn] = useState(false);
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    setSupported(voiceSupported());
    if (kid) setOn(readPrefs()[kid.id] ?? narrateByDefault(kid.band));
  }, [kid]);

  useEffect(() => () => stopSpeaking(), []);

  const toggle = useCallback(() => {
    if (!kid) return;
    setOn((prev) => {
      const next = !prev;
      try {
        localStorage.setItem(KEY, JSON.stringify({ ...readPrefs(), [kid.id]: next }));
      } catch {
        /* sin almacenamiento: dura la sesión */
      }
      if (!next) stopSpeaking();
      return next;
    });
  }, [kid]);

  const say = useCallback(
    (text: string) => {
      if (on && supported) speak(text, { rate: 0.95, pitch: 1.1 });
    },
    [on, supported],
  );

  return { on: on && supported, supported, toggle, say };
}
