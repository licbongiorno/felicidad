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

  it('acepta la tarjeta diaria y el análisis en cadena de la DBT', async () => {
    const col = collection(alice(), 'users/alice/journal');
    await assertSucceeds(addDoc(col, entry('tarjeta-diaria', { resumen: 'Día tranquilo', tristeza: 3, miedo: 2, ira: 0, verguenza: 1, alegria: 6, habilidades: 'mente sabia' })));
    await assertSucceeds(addDoc(col, entry('analisis-cadena', { conducta: 'grité', vulnerabilidad: 'dormí mal', disparador: 'una crítica', eslabones: 'pensé…', consecuencias: 'culpa', alternativas: 'TIPP' })));
    await assertFails(addDoc(col, entry('tarjeta-diaria', { ira: 11 })));
    await assertFails(addDoc(col, entry('analisis-cadena', { conducta: 'x'.repeat(281) })));
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
