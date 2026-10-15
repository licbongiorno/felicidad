import type { Metadata } from 'next';
import Link from 'next/link';
import { LogoMark } from '@/components/ui/icons';

export const metadata: Metadata = {
  title: 'Privacidad · Habilidades Psicológicas',
  description: 'Qué datos guarda la app, para qué, quién los ve y cómo descargarlos o borrarlos.',
};

/** Versión del texto: cambiarla cuando cambie el contenido de esta página. */
const PRIVACY_VERSION = '2026-10';

const SECTIONS: { title: string; paragraphs: string[]; list?: string[] }[] = [
  {
    title: 'En pocas palabras',
    paragraphs: [],
    list: [
      'Guardamos lo que registras para mostrarte tu progreso. Nada más.',
      'No vendemos tus datos, no mostramos publicidad y no usamos herramientas de seguimiento.',
      'Nadie más puede leer tus registros, salvo que tú lo autorices de forma expresa.',
      'Puedes descargar todo o borrar tu cuenta cuando quieras, desde Ajustes.',
    ],
  },
  {
    title: 'Qué datos guardamos',
    paragraphs: ['Solo lo que tú cargas en la app:'],
    list: [
      'Tu cuenta: correo electrónico y la fecha en que aceptaste estas condiciones.',
      'Tus prácticas: cuáles hiciste, cuándo, cuánto duraron y, si lo indicas, tu ánimo antes y después.',
      'Tus registros: ánimo diario, diario escrito, respuestas a la pregunta del día, antídotos y evaluaciones.',
      'Tus preferencias: objetivos, favoritas, plan de la semana y preguntas para tu sesión.',
      'Los perfiles de chicos que crees en Familia: nombre o apodo, franja de edad, dibujo elegido y lo que registran.',
    ],
  },
  {
    title: 'Para qué los usamos',
    paragraphs: [
      'Para mostrarte tu progreso, sugerirte prácticas y armar el informe que puedes llevar a tu terapeuta. Las sugerencias se calculan con reglas simples y siempre te explicamos el porqué.',
      'No usamos tus datos para publicidad ni los compartimos con terceros con fines comerciales.',
    ],
  },
  {
    title: 'Dónde se guardan y cómo se protegen',
    paragraphs: [
      'Los datos se guardan en Firebase, un servicio de Google Cloud. Viajan cifrados y las reglas del servidor impiden que otra cuenta los lea o los modifique.',
      'Algunas preferencias del dispositivo (tema, tamaño de texto, voz y el código del modo chico) se guardan solo en tu navegador.',
    ],
  },
  {
    title: 'Quién puede verlos',
    paragraphs: [
      'Solo tú. Un profesional puede leer tus registros únicamente si aceptas un vínculo con esa persona, y puedes revocarlo cuando quieras.',
      'Las personas que revisan el contenido clínico de la app no ven tus registros.',
    ],
  },
  {
    title: 'Chicos y adolescentes',
    paragraphs: [
      'La sección Familia la usa un adulto responsable, que crea el perfil y acepta un consentimiento específico. Los chicos no tienen cuenta propia ni correo.',
      'El adulto ve lo que los chicos registran. En la franja de 13 a 17 años, las notas escritas no se muestran al adulto, para cuidar su intimidad; sí se ven las actividades y las emociones marcadas.',
      'Pedimos el mínimo de datos: un nombre o apodo y la franja de edad, nunca la fecha de nacimiento.',
    ],
  },
  {
    title: 'Tus derechos',
    paragraphs: [
      'Según la Ley 25.326 de Protección de Datos Personales, tienes derecho a acceder a tus datos, corregirlos y pedir que se borren. Desde Ajustes puedes descargar una copia completa y borrar tu cuenta con todo su contenido.',
      'La Agencia de Acceso a la Información Pública es el organismo de control y recibe denuncias por incumplimientos.',
    ],
  },
  {
    title: 'Cuánto tiempo los guardamos',
    paragraphs: ['Mientras tengas la cuenta. Si la borras, se eliminan tus registros y los de los perfiles de chicos que creaste.'],
  },
  {
    title: 'Límites de la app',
    paragraphs: [
      'Esta app es una herramienta de práctica y no reemplaza la atención profesional. No vigila tus registros en tiempo real: si estás en riesgo, llama al 911 o a la Línea de Salud Mental 0800-999-0091.',
    ],
  },
  {
    title: 'Cambios en este texto',
    paragraphs: ['Si cambia algo importante, te lo vamos a avisar en la app y te pediremos que vuelvas a aceptar.'],
  },
];

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <Link href="/" aria-label="Inicio" className="inline-block">
        <LogoMark className="h-9 w-9" />
      </Link>
      <h1 className="mt-8 font-serif text-4xl text-stone-800 sm:text-5xl">Privacidad</h1>
      <p className="mt-3 text-stone-600">Qué datos guarda la app, para qué, quién los ve y cómo descargarlos o borrarlos.</p>
      <p className="mt-2 text-sm text-stone-500">Versión {PRIVACY_VERSION}.</p>

      {SECTIONS.map((s) => (
        <section key={s.title} className="mt-10">
          <h2 className="font-serif text-2xl text-stone-800">{s.title}</h2>
          {s.paragraphs.map((p) => (
            <p key={p} className="mt-3 leading-relaxed text-stone-700">
              {p}
            </p>
          ))}
          {s.list && (
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-stone-700">
              {s.list.map((li) => (
                <li key={li}>{li}</li>
              ))}
            </ul>
          )}
        </section>
      ))}

      <div className="mt-12 flex flex-wrap gap-4 text-sm">
        <Link href="/login" className="text-sage-700 underline decoration-sage-300 underline-offset-2">
          Ir a iniciar sesión
        </Link>
        <Link href="/ajustes" className="text-sage-700 underline decoration-sage-300 underline-offset-2">
          Descargar o borrar mis datos
        </Link>
      </div>
    </main>
  );
}
