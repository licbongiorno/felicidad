'use client';

import { m } from 'motion/react';
import { useEffect, useState } from 'react';

const FORMAT = new Intl.DateTimeFormat('es', { weekday: 'long', day: 'numeric', month: 'long' });

/** Fecha en la zona horaria del dispositivo (no del servidor): se calcula tras montar. */
export function TodayLabel() {
  const [label, setLabel] = useState<string | null>(null);
  useEffect(() => setLabel(FORMAT.format(new Date())), []);
  return (
    <p className="h-5 text-sm first-letter:uppercase text-stone-500">
      {label && (
        <m.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {label}
        </m.span>
      )}
    </p>
  );
}
