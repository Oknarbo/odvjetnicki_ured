# Digitalni uredski asistent — Konceptni demo

Konceptni demo internog digitalnog asistenta za odvjetnički ured. Svi podaci su izmišljeni. Ovo nije službena stranica odvjetničkog ureda.

**Live demo:** [odvjetnicki-ured.vercel.app](https://odvjetnicki-ured.vercel.app)

## Što je ovo

Premium demo aplikacija koja prikazuje kako bi interni uredski sustav mogao pomoći odvjetničkom uredu u organizaciji predmeta, sažimanju upita, pregledu dokumenata i pripremi administrativnih odgovora — bez davanja pravnih savjeta i bez automatizacije odluka.

## Što demo radi

- Prikazuje dashboard s dnevnim pregledom ureda
- Koristi izmišljene predmete, mailove i dokumente
- Pokazuje administrativne sažetke (bez pravnih zaključaka)
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

## Važne sigurnosne napomene

- Demo koristi isključivo izmišljene podatke.
- Demo ne obrađuje stvarne dokumente.
- Demo ne daje pravne savjete.
- Demo ne šalje mailove.
- Demo ne donosi odluke o predmetima.
- Rokovi su prikazani samo kao mogući rokovi za ručnu provjeru.
- Prava verzija može biti local-first i read-only u prvoj fazi.
- Cloud modeli se mogu koristiti samo za anonimizirane ili izričito odobrene zadatke.

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
