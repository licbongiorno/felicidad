/**
 * Guía por voz con la síntesis del navegador (Web Speech API): sin servidores ni archivos.
 * Prefiere una voz en español; ritmo algo más lento que el habla normal, como una guía
 * de meditación. Si el navegador no la soporta, la práctica sigue siendo visual.
 */

let cachedVoice: SpeechSynthesisVoice | null | undefined;

export function voiceSupported(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}

function spanishVoice(): SpeechSynthesisVoice | null {
  if (cachedVoice !== undefined) return cachedVoice;
  const voices = window.speechSynthesis.getVoices();
  if (voices.length === 0) return null; // aún cargando: no cachear
  const es = voices.filter((v) => v.lang.toLowerCase().startsWith('es'));
  cachedVoice =
    es.find((v) => /es-(ar|uy|mx|419|us)/i.test(v.lang) && v.localService) ??
    es.find((v) => v.localService) ??
    es[0] ??
    null;
  return cachedVoice;
}

/** `opts`: la sección para chicos usa un ritmo un poco más vivo y una voz algo más aguda. */
export function speak(text: string, opts: { rate?: number; pitch?: number } = {}): void {
  if (!voiceSupported()) return;
  const synth = window.speechSynthesis;
  synth.cancel();
  const u = new SpeechSynthesisUtterance(text);
  const voice = spanishVoice();
  if (voice) u.voice = voice;
  u.lang = voice?.lang ?? 'es-ES';
  u.rate = opts.rate ?? 0.88;
  u.pitch = opts.pitch ?? 0.95;
  synth.speak(u);
}

export function stopSpeaking(): void {
  if (voiceSupported()) window.speechSynthesis.cancel();
}
