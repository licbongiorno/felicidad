'use client';

import { useState } from 'react';
import { Onboarding } from '@/components/dashboard/Onboarding';
import { Button } from '@/components/ui/Button';

/** «¿Cuál elijo?»: las mismas tres preguntas del primer uso, a pedido. */
export function ProgramFinder() {
  const [open, setOpen] = useState(false);
  return open ? (
    <div className="mt-8 max-w-3xl">
      <Onboarding />
    </div>
  ) : (
    <div className="mt-6 flex flex-wrap items-center gap-3">
      <Button variant="secondary" onClick={() => setOpen(true)}>
        Ayúdame a elegir (3 preguntas)
      </Button>
    </div>
  );
}
