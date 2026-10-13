// Verifica cada referencia con DOI contra Crossref (registro oficial de DOI): que exista y que
// título, año y revista coincidan. Uso: npm run verify:refs  → informe en referencias-informe.json.
// Sólo envía los DOI a la API pública de Crossref; ningún dato de usuario.
// Revisión anual obligatoria (ver src/domain/governance.ts y el test de vigencia).
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const dir = process.argv[2];
const files = readdirSync(dir).filter((f) => f.endsWith('.ts') && !f.endsWith('.test.ts'));
const refs = new Map(); // doi -> citation
for (const f of files) {
  const src = readFileSync(join(dir, f), 'utf8');
  // citation: '...', (posible salto de línea) doi: '...'
  const re = /citation:\s*\n?\s*'((?:[^'\\]|\\.)*)',\s*\n?\s*doi:\s*'([^']+)'/g;
  for (const m of src.matchAll(re)) refs.set(m[2], { citation: m[1], file: f });
}

const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
const words = (s) => new Set(norm(s).split(' ').filter((w) => w.length > 3));
const overlap = (a, b) => {
  const A = words(a), B = words(b);
  // Títulos muy cortos (p. ej. "The PHQ-9"): se comprueba que aparezcan literalmente.
  if (!A.size) return norm(b).includes(norm(a)) ? 1 : 0;
  let n = 0;
  for (const w of A) if (B.has(w)) n++;
  return n / A.size;
};

const out = [];
for (const [doi, { citation, file }] of refs) {
  let res;
  try {
    res = await fetch(`https://api.crossref.org/works/${encodeURIComponent(doi)}`, { headers: { 'User-Agent': 'EudaimoniaRefCheck/1.0' } });
  } catch {
    out.push({ doi, file, status: 'ERROR_RED', citation });
    continue;
  }
  if (res.status === 404) {
    out.push({ doi, file, status: 'DOI_NO_EXISTE', citation });
    continue;
  }
  const w = (await res.json()).message;
  // Crossref guarda a veces el subtítulo aparte: se combinan para comparar.
  const title = [(w.title ?? [''])[0], (w.subtitle ?? [''])[0]].filter(Boolean).join(': ');
  const journal = (w['container-title'] ?? [''])[0] ?? '';
  const year = (w.issued?.['date-parts']?.[0]?.[0]) ?? (w.published?.['date-parts']?.[0]?.[0]);
  const citedYear = (citation.match(/\((\d{4})\)/) ?? [])[1];
  const titleScore = overlap(title, citation);
  const journalOk = journal ? norm(citation).includes(norm(journal).slice(0, 18)) : true;
  const yearOk = !citedYear || Math.abs(Number(citedYear) - Number(year)) <= 1;
  const status = titleScore >= 0.6 && yearOk ? (journalOk ? 'OK' : 'REVISAR_REVISTA') : 'DISCREPANCIA';
  out.push({ doi, file, status, citedYear, year, titleScore: Math.round(titleScore * 100), crossrefTitle: title, crossrefJournal: journal, citation });
  await new Promise((r) => setTimeout(r, 120)); // cortesía con la API pública
}

writeFileSync(process.argv[3], JSON.stringify(out, null, 2));
const by = out.reduce((a, r) => ((a[r.status] = (a[r.status] ?? 0) + 1), a), {});
console.log('DOIs verificados:', out.length, by);
for (const r of out.filter((r) => r.status !== 'OK')) {
  console.log(`\n[${r.status}] ${r.doi} (${r.file})`);
  console.log('  citado:   ', r.citation.slice(0, 160));
  if (r.crossrefTitle) console.log(`  crossref:  ${r.crossrefTitle.slice(0, 120)} · ${r.crossrefJournal} · ${r.year} (coincidencia título ${r.titleScore}%)`);
}
