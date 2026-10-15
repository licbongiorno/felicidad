'use client';

import { useEffect, useState } from 'react';
import { readPills } from './pillProgress';

/** «Leída ✓» si la píldora ya se leyó en este dispositivo. */
export function PillReadMark({ id }: { id: string }) {
  const [read, setRead] = useState(false);
  useEffect(() => setRead(readPills().has(id)), [id]);
  return read ? <span className="text-sage-700">Leída ✓</span> : null;
}
