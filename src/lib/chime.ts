/** Campana suave sintetizada (sin archivos de audio) para marcar transiciones con ojos cerrados. */
let ctx: AudioContext | null = null;

export function playChime(strikes = 1): void {
  if (typeof window === 'undefined') return;
  try {
    ctx ??= new AudioContext();
    for (let i = 0; i < strikes; i++) {
      const t = ctx.currentTime + i * 0.9;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = 528;
      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.exponentialRampToValueAtTime(0.12, t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 2.4);
      osc.connect(gain).connect(ctx.destination);
      osc.start(t);
      osc.stop(t + 2.5);
    }
  } catch {
    /* audio no disponible: la transición sigue siendo visual */
  }
}
