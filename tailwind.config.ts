import type { Config } from 'tailwindcss';

/**
 * Los colores son variables CSS (ver globals.css): el modo oscuro reasigna las escalas
 * stone, sage y white sin tocar los componentes. Las escalas se invierten conservando
 * las relaciones de contraste (texto oscuro sobre botón claro, etc.), verificadas con
 * WCAG AA en ambos modos.
 */
const v = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;
const scale = (name: string, steps: number[]) => Object.fromEntries(steps.map((s) => [s, v(`${name}-${s}`)]));

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        white: v('white'),
        stone: scale('stone', [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]),
        // Acento salvia: baja saturación, sin rojos ni naranjas de "alerta".
        sage: scale('sage', [50, 100, 200, 300, 400, 500, 600, 700, 800]),
        // Superficie de acento (tarjeta destacada): oscura en ambos modos, para no encender
        // un bloque claro de gran tamaño en modo oscuro.
        accent: { from: v('accent-from'), to: v('accent-to'), fg: v('accent-fg'), muted: v('accent-muted'), soft: v('accent-soft') },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      keyframes: {
        // Deriva ambiental muy lenta de los halos de fondo.
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '50%': { transform: 'translate3d(2%, -3%, 0) scale(1.06)' },
        },
      },
      animation: {
        drift: 'drift 22s ease-in-out infinite',
        'drift-slow': 'drift 30s ease-in-out infinite reverse',
      },
    },
  },
  plugins: [],
};

export default config;
