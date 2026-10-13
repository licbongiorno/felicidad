import { voiceSupported } from './voice';

/**
 * Lectura en voz alta de textos largos (artículos), párrafo a párrafo, con pausa y reanudación.
 * Reutiliza la síntesis del navegador; prefiere una voz en español.
 */
export interface Reader {
  play: () => void;
  pause: () => void;
  resume: () => void;
  stop: () => void;
}

export function createReader(paragraphs: string[], onProgress: (index: number) => void, onEnd: () => void): Reader | null {
  if (!voiceSupported()) return null;
  const synth = window.speechSynthesis;
  let index = 0;
  let stopped = false;

  const voice = () => {
    const es = synth.getVoices().filter((v) => v.lang.toLowerCase().startsWith('es'));
    return es.find((v) => v.localService) ?? es[0] ?? null;
  };

  const speakNext = () => {
    if (stopped) return;
    if (index >= paragraphs.length) return onEnd();
    const u = new SpeechSynthesisUtterance(paragraphs[index]);
    const v = voice();
    if (v) u.voice = v;
    u.lang = v?.lang ?? 'es-ES';
    u.rate = 0.95;
    onProgress(index);
    u.onend = () => {
      index++;
      speakNext();
    };
    synth.speak(u);
  };

  return {
    play: () => {
      stopped = false;
      synth.cancel();
      index = 0;
      speakNext();
    },
    pause: () => synth.pause(),
    resume: () => synth.resume(),
    stop: () => {
      stopped = true;
      synth.cancel();
      onEnd();
    },
  };
}
