/**
 * Tests de las reglas de seguridad contra el emulador de Firestore.
 * Ejecutar con: npm run test:rules  (requiere Java y firebase-tools; en CI se instalan).
 */
import { readFileSync } from 'node:fs';
import { afterAll, beforeAll, beforeEach, describe, it } from 'vitest';
import {
  assertFails,
  assertSucceeds,
  initializeTestEnvironment,
  type RulesTestEnvironment,
} from '@firebase/rules-unit-testing';
import { addDoc, collection, deleteDoc, doc, getDoc, serverTimestamp, setDoc, Timestamp, updateDoc } from 'firebase/firestore';

let env: RulesTestEnvironment;

beforeAll(async () => {
  env = await initializeTestEnvironment({
    projectId: 'demo-eudaimonia',
    firestore: { rules: readFileSync('firestore.rules', 'utf8') },
  });
});

beforeEach(() => env.clearFirestore());
afterAll(() => env.cleanup());

const alice = () => env.authenticatedContext('alice').firestore();
const bob = () => env.authenticatedContext('bob').firestore();
const anon = () => env.unauthenticatedContext().firestore();

const validSession = () => ({
  practiceId: 'atencion-respiracion',
  family: 'attentional',
  skills: ['attention'],
  source: 'gym',
  startedAt: Timestamp.now(),
  durationSec: 600,
  completed: true,
  moodPre: 5,
  moodPost: 7,
  createdAt: serverTimestamp(),
});

describe('aislamiento entre usuarios', () => {
  it('el dueño escribe y lee sus sesiones', async () => {
    const ref = await assertSucceeds(addDoc(collection(alice(), 'users/alice/sessions'), validSession()));
    await assertSucceeds(getDoc(doc(alice(), ref.path)));
  });

  it('otro usuario no puede leer ni escribir', async () => {
    await env.withSecurityRulesDisabled((ctx) => setDoc(doc(ctx.firestore(), 'users/alice/sessions/s1'), validSession()));
    await assertFails(getDoc(doc(bob(), 'users/alice/sessions/s1')));
    await assertFails(addDoc(collection(bob(), 'users/alice/sessions'), validSession()));
  });

  it('sin sesión no hay acceso', async () => {
    await assertFails(getDoc(doc(anon(), 'users/alice')));
  });
});

describe('validación de esquema', () => {
  it('rechaza claves no permitidas y rangos inválidos', async () => {
    const col = collection(alice(), 'users/alice/sessions');
    await assertFails(addDoc(col, { ...validSession(), extra: true }));
    await assertFails(addDoc(col, { ...validSession(), moodPre: 11 }));
    await assertFails(addDoc(col, { ...validSession(), family: 'otra' }));
  });

  it('rechaza marcas de tiempo falsificadas', async () => {
    await assertFails(addDoc(collection(alice(), 'users/alice/sessions'), { ...validSession(), createdAt: Timestamp.fromDate(new Date(2020, 0, 1)) }));
  });

  it('los registros clínicos son append-only', async () => {
    const ref = await addDoc(collection(alice(), 'users/alice/sessions'), validSession());
    await assertFails(updateDoc(ref, { durationSec: 9999 }));
    await assertSucceeds(deleteDoc(ref)); // derecho de supresión
  });
});

describe('diario', () => {
  const entry = (type: string, values: Record<string, unknown>) => ({ type, values, createdAt: serverTimestamp() });

  it('acepta una entrada válida', async () => {
    await assertSucceeds(addDoc(collection(alice(), 'users/alice/journal'), entry('saboreo', { momento: 'café', sentidos: 'aroma', emocion: 'calma' })));
  });

  it('rechaza campos de otra plantilla y textos demasiado largos', async () => {
    const col = collection(alice(), 'users/alice/journal');
    await assertFails(addDoc(col, entry('saboreo', { carta: 'x' })));
    await assertFails(addDoc(col, entry('saboreo', { momento: 'x'.repeat(281) })));
    await assertFails(addDoc(col, entry('escritura-expresiva', { texto: 'x'.repeat(8001) })));
    await assertFails(addDoc(col, entry('defusion', { credibilidadPre: 12 })));
  });

  it('acepta la pregunta del día y rechaza campos de más', async () => {
    const col = collection(alice(), 'users/alice/journal');
    await assertSucceeds(addDoc(col, entry('pregunta-del-dia', { pregunta: '¿Qué te dio calma hoy?', respuesta: 'El café en el balcón.' })));
    await assertFails(addDoc(col, entry('pregunta-del-dia', { pregunta: '¿Qué?', respuesta: 'x', extra: 'y' })));
    await assertFails(addDoc(col, entry('pregunta-del-dia', { pregunta: 'x'.repeat(281), respuesta: 'x' })));
  });

  it('acepta las plantillas de autoconocimiento', async () => {
    const col = collection(alice(), 'users/alice/journal');
    await assertSucceeds(addDoc(col, entry('mis-roles', { situacion: 'En mi familia', rol: 'La que resuelve todo', gano: 'Me necesitan', cuesta: 'Me agoto' })));
    await assertSucceeds(addDoc(col, entry('necesidades', { vinculo: 6, autonomia: 4, expresion: 3, juego: 2, limites: 7, masNecesito: 'Expresar lo que siento' })));
    await assertSucceeds(addDoc(col, entry('patron-repetido', { patron: 'Me alejo', disparador: 'Cercanía', siento: 'Miedo', hago: 'Me voy', consecuencia: 'Soledad', necesitaba: 'Seguridad' })));
    await assertFails(addDoc(col, entry('necesidades', { juego: 11 })));
  });

  it('acepta el registro de sentido (logoterapia) y rechaza campos ajenos', async () => {
    const col = collection(alice(), 'users/alice/journal');
    await assertSucceeds(addDoc(col, entry('sentido', { situacion: 'Un día cansado', pide: 'Escuchar a mi hija', respuesta: 'Cenar sin pantallas', balance: 'Lo hice' })));
    await assertFails(addDoc(col, entry('sentido', { pide: 'x', extra: 'y' })));
    await assertFails(addDoc(col, entry('sentido', { pide: 'x'.repeat(281) })));
  });

  it('acepta la caja de herramientas y rechaza campos ajenos', async () => {
    const col = collection(alice(), 'users/alice/journal');
    await assertSucceeds(addDoc(col, entry('caja-herramientas', { rojoPracticas: 'tipp,cinco-sentidos', rojoPropias: 'Ducharme', frases: 'Va a pasar' })));
    await assertFails(addDoc(col, entry('caja-herramientas', { otra: 'x' })));
  });

  it('acepta la tarjeta diaria y el análisis en cadena de la DBT', async () => {
    const col = collection(alice(), 'users/alice/journal');
    await assertSucceeds(addDoc(col, entry('tarjeta-diaria', { resumen: 'Día tranquilo', tristeza: 3, miedo: 2, ira: 0, verguenza: 1, alegria: 6, habilidades: 'mente sabia' })));
    await assertSucceeds(addDoc(col, entry('analisis-cadena', { conducta: 'grité', vulnerabilidad: 'dormí mal', disparador: 'una crítica', eslabones: 'pensé…', consecuencias: 'culpa', alternativas: 'TIPP' })));
    await assertFails(addDoc(col, entry('tarjeta-diaria', { ira: 11 })));
    await assertFails(addDoc(col, entry('analisis-cadena', { conducta: 'x'.repeat(281) })));
  });
});

describe('preferencias personales', () => {
  const personal = (data: Record<string, unknown>) => ({ ...data, updatedAt: serverTimestamp() });

  it('el usuario guarda sus objetivos, favoritas, plan y preguntas', async () => {
    const ref = doc(alice(), 'users/alice/settings/personal');
    await assertSucceeds(setDoc(ref, personal({ goals: ['emociones'], favorites: ['tipp'], plan: { week: '2026-10-12', practiceIds: ['tipp'] }, questions: ['¿Cómo pongo límites?'] })));
    await assertSucceeds(setDoc(ref, personal({ favorites: [] }), { merge: true }));
  });

  it('rechaza otros documentos, listas largas y campos ajenos', async () => {
    await assertFails(setDoc(doc(alice(), 'users/alice/settings/otro'), personal({ goals: [] })));
    await assertFails(setDoc(doc(alice(), 'users/alice/settings/personal'), personal({ goals: ['a', 'b', 'c', 'd'] })));
    await assertFails(setDoc(doc(alice(), 'users/alice/settings/personal'), personal({ extra: true })));
    await assertFails(setDoc(doc(alice(), 'users/bob/settings/personal'), personal({ goals: [] })));
  });
});

describe('aplicaciones en la vida cotidiana', () => {
  const a = (extra: Record<string, unknown> = {}) => ({ practiceId: 'pausa-stop', sessionId: null, applied: true, usefulness: 'util', note: null, createdAt: serverTimestamp(), ...extra });

  it('acepta una aplicación válida y un plan en la sesión', async () => {
    await assertSucceeds(addDoc(collection(alice(), 'users/alice/applications'), a()));
    await assertSucceeds(addDoc(collection(alice(), 'users/alice/applications'), a({ applied: false, usefulness: null, note: 'No me acordé' })));
    await assertSucceeds(addDoc(collection(alice(), 'users/alice/sessions'), { ...validSession(), transfer: 'Mañana antes de la reunión' }));
  });

  it('rechaza valores inválidos, notas largas y escrituras ajenas', async () => {
    const col = collection(alice(), 'users/alice/applications');
    await assertFails(addDoc(col, a({ usefulness: 'genial' })));
    await assertFails(addDoc(col, a({ note: 'x'.repeat(281) })));
    await assertFails(addDoc(col, a({ extra: 1 })));
    await assertFails(addDoc(collection(alice(), 'users/bob/applications'), a()));
    await assertFails(addDoc(collection(alice(), 'users/alice/sessions'), { ...validSession(), transfer: 'x'.repeat(281) }));
  });
});

describe('evaluaciones DERS-16, ISI y PSS-10', () => {
  const a = (instrument: string, items: number[], score: number) => ({ instrument, items, score, createdAt: serverTimestamp() });

  it('acepta puntuaciones coherentes', async () => {
    const col = collection(alice(), 'users/alice/assessments');
    await assertSucceeds(addDoc(col, a('ders16', Array(16).fill(1), 16)));
    await assertSucceeds(addDoc(col, a('isi', [4, 4, 4, 4, 4, 4, 4], 28)));
    await assertSucceeds(addDoc(col, a('pss10', [4, 4, 4, 0, 0, 4, 0, 0, 4, 4], 40)));
  });

  it('rechaza rangos y puntuaciones inválidos', async () => {
    const col = collection(alice(), 'users/alice/assessments');
    await assertFails(addDoc(col, a('ders16', Array(16).fill(0), 0)));
    await assertFails(addDoc(col, a('isi', [5, 4, 4, 4, 4, 4, 4], 29)));
    await assertFails(addDoc(col, a('pss10', [4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 40)));
  });
});

describe('evaluaciones WHO-5', () => {
  const who5 = (items: number[], score: number) => ({ instrument: 'who5', items, score, createdAt: serverTimestamp() });

  it('acepta una puntuación coherente con los ítems', async () => {
    await assertSucceeds(addDoc(collection(alice(), 'users/alice/assessments'), who5([3, 3, 3, 3, 3], 60)));
  });

  it('rechaza puntuaciones manipuladas o ítems fuera de rango', async () => {
    const col = collection(alice(), 'users/alice/assessments');
    await assertFails(addDoc(col, who5([3, 3, 3, 3, 3], 100)));
    await assertFails(addDoc(col, who5([6, 3, 3, 3, 3], 72)));
    await assertFails(addDoc(col, who5([3, 3, 3, 3], 48)));
  });
});

describe('perfil y rol', () => {
  it('no se puede autoasignar el rol de clínico', async () => {
    await assertFails(
      setDoc(doc(alice(), 'users/alice'), { displayName: null, role: 'clinician', timezone: 'UTC', consent: null, createdAt: serverTimestamp() }),
    );
  });

  it('se puede aceptar el consentimiento pero no cambiar el rol', async () => {
    await assertSucceeds(setDoc(doc(alice(), 'users/alice'), { displayName: null, role: 'patient', timezone: 'UTC', consent: null, createdAt: serverTimestamp() }));
    await assertSucceeds(updateDoc(doc(alice(), 'users/alice'), { consent: { version: 'x', acceptedAt: serverTimestamp() } }));
    await assertFails(updateDoc(doc(alice(), 'users/alice'), { role: 'clinician' }));
  });

  it('no se pueden agregar campos nuevos al perfil (p. ej. un plan pago)', async () => {
    await assertSucceeds(setDoc(doc(alice(), 'users/alice'), { displayName: null, role: 'patient', timezone: 'UTC', consent: null, createdAt: serverTimestamp() }));
    await assertSucceeds(updateDoc(doc(alice(), 'users/alice'), { timezone: 'America/Argentina/Buenos_Aires' }));
    await assertFails(updateDoc(doc(alice(), 'users/alice'), { premium: true }));
    await assertFails(updateDoc(doc(alice(), 'users/alice'), { createdAt: serverTimestamp() }));
  });
});

describe('vínculo clínico', () => {
  beforeEach(async () => {
    await env.withSecurityRulesDisabled(async (ctx) => {
      const db = ctx.firestore();
      await setDoc(doc(db, 'users/doc'), { role: 'clinician' });
      await setDoc(doc(db, 'users/alice/sessions/s1'), validSession());
    });
  });

  const clinician = () => env.authenticatedContext('doc').firestore();

  it('sin vínculo activo el clínico no lee', async () => {
    await assertFails(getDoc(doc(clinician(), 'users/alice/sessions/s1')));
  });

  it('con vínculo pendiente tampoco; sólo cuando el paciente lo activa', async () => {
    await assertSucceeds(setDoc(doc(clinician(), 'careLinks/doc_alice'), { clinicianId: 'doc', patientId: 'alice', status: 'pending' }));
    await assertFails(getDoc(doc(clinician(), 'users/alice/sessions/s1')));
    await assertFails(updateDoc(doc(clinician(), 'careLinks/doc_alice'), { status: 'active' }));
    await assertSucceeds(updateDoc(doc(alice(), 'careLinks/doc_alice'), { status: 'active', respondedAt: serverTimestamp() }));
    await assertSucceeds(getDoc(doc(clinician(), 'users/alice/sessions/s1')));
  });

  it('el clínico nunca escribe en los datos del paciente', async () => {
    await env.withSecurityRulesDisabled((ctx) => setDoc(doc(ctx.firestore(), 'careLinks/doc_alice'), { clinicianId: 'doc', patientId: 'alice', status: 'active' }));
    await assertFails(addDoc(collection(clinician(), 'users/alice/sessions'), validSession()));
  });
});

describe('zona horaria', () => {
  it('acepta una zona IANA y rechaza valores anómalos', async () => {
    const col = collection(alice(), 'users/alice/sessions');
    await assertSucceeds(addDoc(col, { ...validSession(), tz: 'America/Argentina/Buenos_Aires' }));
    await assertFails(addDoc(col, { ...validSession(), tz: 'x'.repeat(65) }));
    await assertFails(addDoc(col, { ...validSession(), tz: 42 }));
  });
});

describe('instrumentos GAD-7 y PHQ-9', () => {
  const a = (instrument: string, items: number[], score: number) => ({ instrument, items, score, createdAt: serverTimestamp() });

  it('aceptan puntuaciones coherentes', async () => {
    const col = collection(alice(), 'users/alice/assessments');
    await assertSucceeds(addDoc(col, a('gad7', [1, 2, 0, 3, 1, 1, 2], 10)));
    await assertSucceeds(addDoc(col, a('phq9', [1, 1, 1, 1, 1, 1, 1, 1, 0], 8)));
  });

  it('rechazan totales manipulados, ítems fuera de rango o en número incorrecto', async () => {
    const col = collection(alice(), 'users/alice/assessments');
    await assertFails(addDoc(col, a('gad7', [1, 2, 0, 3, 1, 1, 2], 4)));
    await assertFails(addDoc(col, a('gad7', [4, 0, 0, 0, 0, 0, 0], 4)));
    await assertFails(addDoc(col, a('phq9', [1, 1, 1, 1, 1, 1, 1, 1], 8)));
    await assertFails(addDoc(col, a('otro', [1], 1)));
  });
});

describe('versión del contenido', () => {
  it('acepta un entero positivo y rechaza otros valores', async () => {
    const col = collection(alice(), 'users/alice/sessions');
    await assertSucceeds(addDoc(col, { ...validSession(), contentVersion: 2 }));
    await assertFails(addDoc(col, { ...validSession(), contentVersion: 0 }));
    await assertFails(addDoc(col, { ...validSession(), contentVersion: 'v2' }));
  });
});

describe('sección para chicos', () => {
  const kid = () => ({ name: 'Juli', band: '7-9', avatar: 'sol', consent: { version: '2026-10', acceptedAt: serverTimestamp() }, createdAt: serverTimestamp() });
  const activity = (over: Record<string, unknown> = {}) => ({
    kidId: 'k1',
    activityId: 'globo-magico',
    feeling: null,
    intensity: null,
    note: null,
    tz: 'America/Argentina/Buenos_Aires',
    createdAt: serverTimestamp(),
    ...over,
  });

  it('el adulto crea un perfil con consentimiento y otro usuario no lo ve', async () => {
    await assertSucceeds(setDoc(doc(alice(), 'users/alice/kids/k1'), kid()));
    await assertFails(getDoc(doc(bob(), 'users/alice/kids/k1')));
    await assertFails(setDoc(doc(bob(), 'users/alice/kids/k2'), kid()));
  });

  it('rechaza perfiles sin consentimiento, con datos de más o con valores inválidos', async () => {
    const { consent: _c, ...noConsent } = kid();
    await assertFails(setDoc(doc(alice(), 'users/alice/kids/k1'), noConsent));
    await assertFails(setDoc(doc(alice(), 'users/alice/kids/k1'), { ...kid(), email: 'x@y.z' }));
    await assertFails(setDoc(doc(alice(), 'users/alice/kids/k1'), { ...kid(), band: '18-25' }));
    await assertFails(setDoc(doc(alice(), 'users/alice/kids/k1'), { ...kid(), name: 'x'.repeat(25) }));
  });

  it('acepta todas las franjas de 0 a 17 años', async () => {
    for (const band of ['0-3', '4-6', '7-9', '10-12', '13-17']) await assertSucceeds(setDoc(doc(alice(), `users/alice/kids/b${band}`), { ...kid(), band }));
  });

  it('se puede cambiar apodo, edad y avatar, pero no el consentimiento', async () => {
    await assertSucceeds(setDoc(doc(alice(), 'users/alice/kids/k1'), kid()));
    await assertSucceeds(updateDoc(doc(alice(), 'users/alice/kids/k1'), { name: 'Julieta', band: '10-12', avatar: 'luna' }));
    await assertFails(updateDoc(doc(alice(), 'users/alice/kids/k1'), { consent: { version: 'otra', acceptedAt: serverTimestamp() } }));
    await assertSucceeds(deleteDoc(doc(alice(), 'users/alice/kids/k1')));
  });

  it('las actividades exigen un perfil existente y son de sólo anexión', async () => {
    await assertFails(addDoc(collection(alice(), 'users/alice/kidActivities'), activity()));
    await assertSucceeds(setDoc(doc(alice(), 'users/alice/kids/k1'), kid()));
    const ref = await assertSucceeds(addDoc(collection(alice(), 'users/alice/kidActivities'), activity({ feeling: 'miedo', intensity: 3 })));
    await assertFails(updateDoc(ref, { intensity: 1 }));
    await assertSucceeds(deleteDoc(ref));
  });

  it('valida emoción, intensidad y largo de la nota', async () => {
    await assertSucceeds(setDoc(doc(alice(), 'users/alice/kids/k1'), kid()));
    const col = collection(alice(), 'users/alice/kidActivities');
    await assertFails(addDoc(col, activity({ feeling: 'ira' })));
    await assertFails(addDoc(col, activity({ intensity: 4 })));
    await assertFails(addDoc(col, activity({ note: 'x'.repeat(141) })));
    await assertSucceeds(addDoc(col, activity({ note: 'Jugué con mi perro' })));
  });
});
