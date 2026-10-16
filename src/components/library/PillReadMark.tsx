'use client';

import { usePillRead } from './pillProgress';

/** «Leída ✓» si la píldora ya se leyó (en cualquier dispositivo de la cuenta). */
export function PillReadMark({ id }: { id: string }) {
  return usePillRead(id) ? <span className="text-sage-700">Leída ✓</span> : null;
}
