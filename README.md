# Digitalni uredski asistent — Konceptni demo

Konceptni demo internog digitalnog asistenta za odvjetnički ured. Svi podaci su izmišljeni. Ovo nije službena stranica odvjetničkog ureda.

## Što je ovo

Premium demo aplikacija koja prikazuje kako bi interni AI uredski sustav mogao pomoći odvjetničkom uredu u organizaciji predmeta, sažimanju upita, pregledu dokumenata i pripremi administrativnih odgovora — bez davanja pravnih savjeta i bez automatizacije odluka.

Koncept za odvjetnički ured Zrinke Prlić (demo podaci).

## Što demo radi

- Prikazuje dashboard s dnevnim pregledom ureda
- Koristi izmišljene predmete, mailove i dokumente
- Pokazuje AI administrativne sažetke (bez pravnih zaključaka)
- Prikazuje dokument checklist
- Prikazuje moguće rokove za ručnu provjeru
- Prikazuje nacrte odgovora koji čekaju odobrenje
- Omogućuje klikabilne interakcije (modali, toast poruke)

## Što demo ne radi

- Ne obrađuje stvarne dokumente
- Ne šalje mailove
- Ne koristi stvarni AI API
- Ne daje pravne savjete
- Ne zamjenjuje odvjetnika
- Nije službena stranica odvjetničkog ureda

## Kako pokrenuti

```bash
npm install
npm run dev
```

Otvorite [http://localhost:3000](http://localhost:3000).

## Kako buildati

```bash
npm run build
npm start
```

## Deployment na Vercel

Projekt je spreman za Vercel deployment. Povežite repozitorij ili deployajte direktno iz ovog foldera.

## Kako bi izgledala prava verzija

- Lokalni model preko Ollama / LM Studio
- Lokalna baza ili uredski server
- Povezivanje s postojećim folderima dokumenata
- Povezivanje s mailom i kalendarom tek nakon mapiranja ureda
- Korisničke uloge (odvjetnica, suradnik, administracija)
- Audit log svih pregleda i odobrenja
- Local-first obrada osjetljivih dokumenata
- Cloud API samo za anonimizirane ili odobrene zadatke

## Tech stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui komponente
- framer-motion
- lucide-react
