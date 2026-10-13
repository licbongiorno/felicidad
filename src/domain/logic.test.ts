import { describe, expect, it } from 'vitest';
import { compareWho5, interpretWho5, scoreWho5 } from './instruments';
import { isComplete, TEMPLATE_BY_TYPE } from './journal';
import { daysAgo } from './metrics';
import { PROGRAM_BY_ID, programProgress } from './programs';
import { suggestNext } from './recommend';
import { buildReminderIcs } from '@/lib/ics';
import type { AfflictionLog, Assessment, SessionRecord } from './types';

const TODAY = new Date(2026, 9, 15, 18, 0);

describe('WHO-5', () => {
  it('puntúa como suma × 4', () => {
    expect(scoreWho5([5, 5, 5, 5, 5])).toBe(100);
    expect(scoreWho5([0, 0, 0, 0, 0])).toBe(0);
    expect(scoreWho5([3, 2, 4, 1, 3])).toBe(52);
  });

  it('interpreta con los puntos de corte de Topp et al. (2015)', () => {
    expect(interpretWho5(28).band).toBe('muy-bajo');
    expect(interpretWho5(32).band).toBe('bajo');
    expect(interpretWho5(48).band).toBe('bajo');
    expect(interpretWho5(52).band).toBe('bueno');
  });

  it('considera relevante un cambio de 10 puntos o más', () => {
    expect(compareWho5(60, undefined)).toBeNull();
    expect(compareWho5(60, 52)?.relevant).toBe(false);
    expect(compareWho5(64, 52)).toMatchObject({ delta: 12, relevant: true, label: 'Mejora relevante' });
    expect(compareWho5(40, 52)?.label).toBe('Descenso relevante');
  });
});

describe('diario', () => {
  it('exige los campos obligatorios y respeta los opcionales', () => {
    const t = TEMPLATE_BY_TYPE['defusion'];
    const base = { situacion: 'reunión', pensamiento: 'no voy a poder', credibilidadPre: 8, defusion: 'estoy teniendo…', credibilidadPost: 4 };
    expect(isComplete(t, base)).toBe(true); // 'accion' es opcional
    expect(isComplete(t, { ...base, situacion: '   ' })).toBe(false);
    expect(isComplete(t, { ...base, credibilidadPre: undefined })).toBe(false);
  });
});

describe('programas', () => {
  it('avanza semana a semana según las prácticas completadas', () => {
    const p = PROGRAM_BY_ID['fundamentos'];
    expect(programProgress(p, new Set()).currentWeek).toBe(0);
    const week1 = new Set(p.weeks[0].practiceIds);
    const r = programProgress(p, week1);
    expect(r.weeks[0].complete).toBe(true);
    expect(r.currentWeek).toBe(1);
    expect(r.done).toBe(p.weeks[0].practiceIds.length);
  });
});

describe('suggestNext', () => {
  const s = (family: SessionRecord['family'], daysBefore: number, practiceId = 'x'): SessionRecord => ({
    id: Math.random().toString(),
    practiceId,
    family,
    skills: ['attention'],
    source: 'gym',
    startedAt: daysAgo(daysBefore, TODAY),
    durationSec: 600,
    completed: true,
    moodPre: null,
    moodPost: null,
  });
  const anger = (daysBefore: number): AfflictionLog => ({
    id: Math.random().toString(),
    emotionId: 'ira',
    antidoteId: 'antidoto-ira',
    intensityPre: 7,
    intensityPost: 4,
    trigger: null,
    stabilizationUsed: false,
    createdAt: daysAgo(daysBefore, TODAY),
  });
  const who5: Assessment = { id: 'a', instrument: 'who5', items: [3, 3, 3, 3, 3], score: 60, createdAt: daysAgo(2, TODAY) };

  it('detecta un patrón aflictivo recurrente y sugiere entrenar su antídoto', () => {
    const out = suggestNext([], [anger(1), anger(3), anger(5)], [], [who5], TODAY);
    expect(out[0]).toMatchObject({ id: 'pattern', href: '/gimnasio/amor-altruista' });
  });

  it('propone la familia menos practicada si hoy no hubo práctica', () => {
    const out = suggestNext([s('attentional', 1), s('attentional', 2), s('constructive', 3)], [], [], [who5], TODAY);
    const balance = out.find((x) => x.id === 'balance');
    expect(balance?.reason).toContain('deconstructiva');
  });

  it('nunca sugiere automáticamente prácticas con precauciones clínicas', () => {
    const out = suggestNext([s('attentional', 1), s('constructive', 2)], [], [], [who5], TODAY);
    expect(out.find((x) => x.id === 'balance')?.href).not.toBe('/gimnasio/conciencia-pura');
  });

  it('pide el WHO-5 si nunca se respondió', () => {
    const out = suggestNext([s('attentional', 0)], [], [], [], TODAY);
    expect(out.some((x) => x.id === 'who5')).toBe(true);
  });

  it('devuelve como máximo dos sugerencias', () => {
    expect(suggestNext([], [anger(1), anger(2), anger(3)], [], [], TODAY).length).toBeLessThanOrEqual(2);
  });
});

describe('recordatorio .ics', () => {
  it('genera un evento semanal recurrente con la intención de implementación escapada', () => {
    const ics = buildReminderIcs({ time: '08:30', days: ['MO', 'WE'], cue: 'termine de desayunar, con calma', url: 'https://x.app/gimnasio' });
    expect(ics).toContain('RRULE:FREQ=WEEKLY;BYDAY=MO,WE');
    expect(ics).toContain('Cuando termine de desayunar\\, con calma\\, practico 10 minutos.');
    expect(ics.split('\r\n')[0]).toBe('BEGIN:VCALENDAR');
    expect(ics).toMatch(/DTSTART;TZID=[^:]+:\d{8}T083000/);
  });
});
