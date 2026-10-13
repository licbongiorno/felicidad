/**
 * Recordatorio de práctica como evento recurrente de calendario (.ics, RFC 5545).
 * Funciona en cualquier calendario sin servidor de notificaciones, y formula el
 * recordatorio como intención de implementación ("si X, entonces Y"; Gollwitzer, 1999).
 */

export type Weekday = 'MO' | 'TU' | 'WE' | 'TH' | 'FR' | 'SA' | 'SU';

const pad = (n: number) => String(n).padStart(2, '0');

function localStamp(d: Date) {
  return `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}T${pad(d.getHours())}${pad(d.getMinutes())}00`;
}

function utcStamp(d: Date) {
  return `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}${pad(d.getUTCSeconds())}Z`;
}

/** Escapa texto según RFC 5545 (comas, punto y coma, barras y saltos de línea). */
const esc = (t: string) => t.replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\n/g, '\\n');

export function buildReminderIcs({
  time,
  days,
  cue,
  url,
  minutes = 10,
}: {
  time: string; // "HH:MM"
  days: Weekday[];
  cue: string;
  url: string;
  minutes?: number;
}): string {
  const [h, m] = time.split(':').map(Number);
  const start = new Date();
  start.setHours(h, m, 0, 0);
  if (start < new Date()) start.setDate(start.getDate() + 1);
  const end = new Date(start.getTime() + minutes * 60_000);
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Protocolo Eudaimonia//Recordatorio//ES',
    'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT',
    `UID:${Date.now()}-${Math.random().toString(36).slice(2)}@eudaimonia`,
    `DTSTAMP:${utcStamp(new Date())}`,
    `DTSTART;TZID=${tz}:${localStamp(start)}`,
    `DTEND;TZID=${tz}:${localStamp(end)}`,
    `RRULE:FREQ=WEEKLY;BYDAY=${days.join(',')}`,
    `SUMMARY:${esc('Práctica · Eudaimonía')}`,
    `DESCRIPTION:${esc(`Cuando ${cue}, practico ${minutes} minutos.\n${url}`)}`,
    `URL:${url}`,
    'BEGIN:VALARM',
    'ACTION:DISPLAY',
    `DESCRIPTION:${esc('Momento de practicar')}`,
    'TRIGGER:PT0M',
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');
}

export function downloadFile(name: string, content: string, type: string) {
  const blob = new Blob([content], { type });
  const href = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = href;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(href), 1000);
}
