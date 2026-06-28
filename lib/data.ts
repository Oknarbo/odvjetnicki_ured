import type {
  Case,
  Document,
  DraftResponse,
  KpiStat,
  MailInquiry,
  NavItem,
  OfficeRole,
  PossibleDeadline,
  SecurityPrinciple,
} from "./types";

export const DEMO_BANNER =
  "Konceptni demo — svi podaci su izmišljeni. Ovo nije službena stranica odvjetničkog ureda.";

export const OFFICE_NAME = "Koncept za odvjetnički ured Zrinke Prlić";

export const kpiStats: KpiStat[] = [
  {
    id: "mails",
    label: "7 novih mailova",
    value: 7,
    description: "Novi upiti pristigli od zadnjeg pregleda",
    icon: "mail",
  },
  {
    id: "cases",
    label: "5 aktivnih predmeta",
    value: 5,
    description: "Predmeti s otvorenim radnjama",
    icon: "briefcase",
  },
  {
    id: "docs",
    label: "3 nerazvrstana dokumenta",
    value: 3,
    description: "Dokumenti bez dodijeljenog predmeta",
    icon: "file",
  },
  {
    id: "waiting",
    label: "2 predmeta čekaju dokumente",
    value: 2,
    description: "Čeka se dokumentacija stranke",
    icon: "clock",
  },
  {
    id: "deadlines",
    label: "1 mogući rok za provjeru",
    value: 1,
    description: "Rok nije potvrđen — potrebna ručna provjera",
    icon: "alert",
  },
];

export const cases: Case[] = [
  {
    id: "case-1",
    title: "Radno pravo / otkaz ugovora o radu",
    area: "Radno pravo",
    status: "novo",
    urgency: "visoka",
    lastEvent: "Primljen novi upit s 4 privitka — prije 2 sata",
    hasDeadlineReview: true,
    aiSummary:
      "Stranka navodi da je primila odluku o otkazu i želi provjeru mogućnosti postupanja. Dostavila je ugovor o radu, odluku o otkazu i dio komunikacije s poslodavcem. Sustav je označio da je potrebno ručno provjeriti datum dostave i eventualne rokove.",
    receivedDocuments: [
      "Ugovor o radu.pdf",
      "Odluka o otkazu.pdf",
      "Email komunikacija.pdf",
      "Platna lista 05-2026.pdf",
    ],
    missingDocuments: [
      "dokaz o datumu primitka odluke",
      "aneksi ugovora ako postoje",
      "kompletna komunikacija s poslodavcem",
      "eventualna interna žalba ili očitovanje",
    ],
    possibleDeadlines: [
      "Mogući rok od 15 dana od dostave — iz odluke o otkazu (nije potvrđeno)",
    ],
    recommendedActions: [
      "zatražiti dokaz o dostavi",
      "pripremiti konzultaciju",
      "označiti predmet za pregled odvjetnice",
      "pripremiti draft maila stranci",
    ],
  },
  {
    id: "case-2",
    title: "Nasljedstvo / nekretnina",
    area: "Nasljedno pravo",
    status: "ceka-dokumente",
    urgency: "srednja",
    lastEvent: "Zatražena dodatna dokumentacija — jučer",
    aiSummary:
      "Stranka navodi spor oko nasljedstva i nekretnine nakon smrti člana obitelji. Spominje više nasljednika i mogućnost ranijeg darovnog ugovora. Potrebno je prikupiti osnovne dokumente prije procjene mogućnosti postupanja.",
    receivedDocuments: [
      "izvadak iz zemljišne knjige.pdf",
      "smrtni list.pdf",
      "poziv javnog bilježnika.pdf",
    ],
    missingDocuments: [
      "oporuka ako postoji",
      "darovni ugovor ako postoji",
      "podaci o svim nasljednicima",
      "rješenje o nasljeđivanju ako je već doneseno",
    ],
    possibleDeadlines: [],
    recommendedActions: [
      "zatražiti oporuku i darovni ugovor",
      "pripremiti popis nedostajućih dokumenata",
      "označiti predmet za pregled nakon zaprimanja",
    ],
  },
  {
    id: "case-3",
    title: "Ugovor / neplaćanje",
    area: "Ugovorno pravo",
    status: "draft-spreman",
    urgency: "srednja",
    lastEvent: "Draft odgovora pripremljen — prije 4 sata",
    aiSummary:
      "Stranka navodi da druga ugovorna strana nije ispunila obvezu plaćanja. Dostavljen je ugovor i dio računa. Potrebno je provjeriti dospijeće obveze, komunikaciju i eventualne dokaze o isporuci.",
    receivedDocuments: [
      "ugovor o suradnji.pdf",
      "račun 04-2026.pdf",
      "račun 05-2026.pdf",
    ],
    missingDocuments: [
      "dokaz o isporuci",
      "opomene ako su slane",
      "komunikacija s drugom stranom",
      "potvrde o djelomičnim uplatama ako postoje",
    ],
    possibleDeadlines: [],
    recommendedActions: [
      "zatražiti dokaz o isporuci",
      "pregledati draft odgovora",
      "označiti za pregled odvjetnice",
    ],
  },
  {
    id: "case-4",
    title: "Obiteljsko pravo / konzultacija",
    area: "Obiteljsko pravo",
    status: "novi-upit",
    urgency: "osjetljivo",
    lastEvent: "Novi upit zaprimljen — danas u 09:15",
    aiSummary:
      "Stranka traži informativni razgovor vezano uz obiteljsko pravo. Upit sadrži osjetljive osobne podatke. Potrebno je pažljivo organizirati dokumentaciju i dogovoriti termin konzultacije nakon inicijalnog pregleda.",
    receivedDocuments: ["upit putem maila.pdf"],
    missingDocuments: [
      "relevantni sudski akti ako postoje",
      "postojeći sporazumi",
      "dokumentacija o zajedničkoj imovini",
    ],
    possibleDeadlines: [],
    recommendedActions: [
      "dogovoriti termin konzultacije",
      "označiti predmet kao osjetljiv",
      "pripremiti potvrdu zaprimanja upita",
    ],
  },
  {
    id: "case-5",
    title: "Upravno pravo / rješenje",
    area: "Upravno pravo",
    status: "rok-za-provjeru",
    urgency: "visoka",
    lastEvent: "Označen mogući rok za provjeru — prije 1 dana",
    hasDeadlineReview: true,
    aiSummary:
      "Predmet sadrži upravno rješenje s poukom o pravnom lijeku. Sustav je označio mogući rok za podnošenje žalbe. Potrebno je ručno provjeriti datum primitka rješenja i potvrditi rok prije bilo kakvog postupanja.",
    receivedDocuments: ["rjesenje.pdf", "dostavnica.pdf"],
    missingDocuments: [
      "potvrda o datumu primitka",
      "prethodna korespondencija s tijelom",
    ],
    possibleDeadlines: [
      "Mogući rok od 15 dana za podnošenje žalbe — iz rješenja (nije potvrđeno)",
    ],
    recommendedActions: [
      "provjeriti datum primitka rješenja",
      "potvrditi mogući rok za provjeru",
      "označiti predmet za hitan pregled odvjetnice",
    ],
  },
];

export const mailInquiries: MailInquiry[] = [
  {
    id: "mail-1",
    subject: "Upit vezan uz otkaz",
    classification: "radno pravo",
    urgency: "visoka",
    attachments: 3,
    status: "potrebno pregledati",
    caseId: "case-1",
    before: `Poštovana, imam problem s poslodavcem, dobila sam otkaz i ne znam što da radim. Šaljem neke dokumente u privitku.`,
    after: `Područje: radno pravo
Tema: otkaz ugovora o radu
Hitnost: visoka
Dokumenti: ugovor, odluka, komunikacija
Nedostaje: dokaz o dostavi, aneksi, platne liste
Sljedeći korak: pregled odvjetnice`,
  },
  {
    id: "mail-2",
    subject: "Nasljedstvo nakon smrti oca",
    classification: "nasljedno pravo",
    urgency: "srednja",
    attachments: 2,
    status: "nedostaju podaci o nasljednicima",
    caseId: "case-2",
    before: `Poštovani, nakon smrti oca imamo problem s nasljedstvom i kućom. Bratić tvrdi da postoji darovni ugovor. Šaljem što imam.`,
    after: `Područje: nasljedno pravo
Tema: spor oko nekretnine
Hitnost: srednja
Dokumenti: zk izvadak, smrtni list
Nedostaje: oporuka, darovni ugovor, podaci o nasljednicima
Sljedeći korak: zatražiti dodatnu dokumentaciju`,
  },
  {
    id: "mail-3",
    subject: "Neplaćeni račun po ugovoru",
    classification: "ugovorno pravo",
    urgency: "srednja",
    attachments: 4,
    status: "draft odgovora spreman",
    caseId: "case-3",
    before: `Dobar dan, partner nam ne plaća račune već dva mjeseca unatoč ugovoru. U privitku su ugovor i računi. Molim savjet.`,
    after: `Područje: ugovorno pravo
Tema: neispunjenje obveze plaćanja
Hitnost: srednja
Dokumenti: ugovor, računi (2)
Nedostaje: dokaz o isporuci, opomene, komunikacija
Sljedeći korak: pregled draft odgovora`,
  },
];

export const documents: Document[] = [
  {
    id: "doc-1",
    name: "scan_2026_06_28.pdf",
    caseName: "nerazvrstano",
    type: "skenirani dokument",
    status: "treba dodjelu",
    aiNote: "moguće rješenje / potrebno otvoriti",
  },
  {
    id: "doc-2",
    name: "odluka_o_otkazu.pdf",
    caseName: "radno pravo / otkaz",
    type: "odluka",
    status: "obrađeno",
    aiNote: "sadrži datum i pouku o pravnom lijeku — ručno provjeriti",
  },
  {
    id: "doc-3",
    name: "zk_izvadak.pdf",
    caseName: "nasljedstvo / nekretnina",
    type: "zemljišnoknjižni izvadak",
    status: "obrađeno",
    aiNote: "povezano s nekretninom u predmetu",
  },
  {
    id: "doc-4",
    name: "ugovor_o_suradnji.pdf",
    caseName: "ugovor / neplaćanje",
    type: "ugovor",
    status: "obrađeno",
    aiNote: "sadrži uvjete plaćanja — usporediti s računima",
  },
  {
    id: "doc-5",
    name: "rjesenje.pdf",
    caseName: "upravno pravo / rješenje",
    type: "rješenje",
    status: "za provjeru",
    aiNote: "mogući rok za žalbu — potrebna ručna provjera datuma",
  },
  {
    id: "doc-6",
    name: "scan_nepoznat_001.pdf",
    caseName: "nerazvrstano",
    type: "skenirani dokument",
    status: "treba dodjelu",
    aiNote: "nije prepoznat predmet — ručno dodijeliti",
  },
];

export const possibleDeadlines: PossibleDeadline[] = [
  {
    id: "dl-1",
    caseName: "Radno pravo / otkaz",
    source: "odluka_o_otkazu.pdf",
    documentText: "rok od 15 dana od dostave",
    status: "nije potvrđeno",
    recommendedAction: "provjeriti datum dostave",
  },
  {
    id: "dl-2",
    caseName: "Upravno pravo / rješenje",
    source: "rjesenje.pdf",
    documentText: "žalba se može podnijeti u roku od 15 dana",
    status: "za pregled",
    recommendedAction: "potvrditi datum primitka",
  },
  {
    id: "dl-3",
    caseName: "Obiteljsko pravo / poziv",
    source: "poziv.pdf",
    documentText: "ročište zakazano",
    status: "informativno",
    recommendedAction: "dodati u kalendar nakon potvrde",
  },
];

export const draftResponses: DraftResponse[] = [
  {
    id: "draft-1",
    title: "Zatražiti dodatnu dokumentaciju",
    status: "ceka-pregled",
    caseId: "case-1",
    body: `Poštovani,

zaprimili smo Vaš upit i dostavljenu dokumentaciju.

Radi potpunijeg pregleda, molimo Vas da nam dostavite:
- dokaz o datumu primitka odluke
- sve anekse ugovora ako postoje
- kompletnu komunikaciju s poslodavcem

Nakon pregleda dostavljene dokumentacije, ured će Vas kontaktirati radi dogovora o mogućem terminu konzultacije.

Srdačno,
Odvjetnički ured`,
  },
  {
    id: "draft-2",
    title: "Potvrditi zaprimanje upita",
    status: "ceka-pregled",
    caseId: "case-4",
    body: `Poštovani,

zaprimili smo Vaš upit i zahvaljujemo na povjerenju.

Ured će pregledati dostavljene informacije i kontaktirati Vas radi dogovora o terminu konzultacije.

Srdačno,
Odvjetnički ured`,
  },
  {
    id: "draft-3",
    title: "Predložiti termin konzultacije",
    status: "ceka-pregled",
    caseId: "case-2",
    body: `Poštovani,

zaprimili smo Vaš upit vezano uz nasljedstvo i nekretninu.

Radi detaljnijeg razgovora, predlažemo konzultaciju u uredu. Molimo Vas da nam javite koji termini Vam odgovaraju, te da dostavite nedostajuću dokumentaciju prema popisu u privitku.

Srdačno,
Odvjetnički ured`,
  },
  {
    id: "draft-4",
    title: "Obavijestiti da ured mora prvo provjeriti mogućnost postupanja",
    status: "ceka-pregled",
    caseId: "case-3",
    body: `Poštovani,

zaprimili smo Vaš upit i dostavljenu dokumentaciju.

Ured će pregledati dostavljene materijale kako bi procijenio mogućnost daljnjeg postupanja. Kontaktirat ćemo Vas nakon internog pregleda.

Srdačno,
Odvjetnički ured`,
  },
];

export const introCards = [
  {
    title: "Read-only prva faza",
    description: "Sustav ništa ne mijenja, ne šalje i ne briše.",
  },
  {
    title: "Dokumenti ostaju pod kontrolom ureda",
    description: "Prava verzija može biti local-first.",
  },
  {
    title: "Rokovi samo za provjeru",
    description: "AI označava moguće rokove, odvjetnica potvrđuje.",
  },
  {
    title: "Draftovi, ne automatski odgovori",
    description: "Svaki odgovor pregledava i odobrava osoba u uredu.",
  },
];

export const securityPrinciples: SecurityPrinciple[] = [
  {
    title: "Read-only početak",
    description: "Prva faza samo čita i sažima, ništa ne mijenja.",
  },
  {
    title: "Lokalna obrada kao opcija",
    description: "Stvarni dokumenti mogu ostati na računalu ili serveru ureda.",
  },
  {
    title: "Cloud modeli samo kontrolirano",
    description: "Samo za anonimizirane ili odobrene zadatke.",
  },
  {
    title: "Bez pravnih savjeta",
    description: "AI ne zamjenjuje odvjetnicu.",
  },
  {
    title: "Ljudsko odobrenje",
    description: "Svaki mail, rok i radnju potvrđuje osoba u uredu.",
  },
  {
    title: "Audit log",
    description:
      "Prava verzija može bilježiti tko je pregledao, odobrio ili odbio prijedlog.",
  },
  {
    title: "Uloge u uredu",
    description: "Odvjetnica, suradnik, administracija — različite razine pristupa.",
  },
];

export const securityModeItems = [
  "AI ne daje pravne savjete",
  "AI ne donosi odluke o predmetu",
  "AI ne šalje mailove bez odobrenja",
  "AI ne briše i ne mijenja dokumente",
  "Mogući rokovi se samo označavaju za ručnu provjeru",
  "Prava verzija može raditi lokalno u uredu",
  "Cloud modeli se mogu koristiti samo za anonimizirane ili odobrene zadatke",
  "Sve radnje mogu imati audit log",
];

export const officeRoles: OfficeRole[] = [
  {
    id: "odvjetnica",
    title: "Odvjetnica",
    permissions: [
      "vidjeti sve predmete",
      "potvrditi rokove",
      "odobriti draftove",
      "odlučiti o daljnjem postupanju",
    ],
  },
  {
    id: "suradnik",
    title: "Suradnik / vježbenik",
    permissions: [
      "pripremiti dokumente",
      "označiti status predmeta",
      "pregledati AI sažetke",
      "pripremiti nacrte za pregled",
    ],
  },
  {
    id: "administracija",
    title: "Administracija",
    permissions: [
      "vidjeti termine",
      "zatražiti dokumente",
      "pratiti status „čeka dokumente“",
      "organizirati ulazne upite",
    ],
  },
];

export const navItems: NavItem[] = [
  { id: "pregled", label: "Pregled dana", icon: "layout-dashboard" },
  { id: "predmeti", label: "Predmeti", icon: "briefcase" },
  { id: "novi-upiti", label: "Novi upiti", icon: "mail" },
  { id: "dokumenti", label: "Dokumenti", icon: "file-text" },
  { id: "rokovi", label: "Mogući rokovi", icon: "calendar-clock" },
  { id: "draft-odgovori", label: "Draft odgovori", icon: "file-edit" },
  { id: "sigurnost", label: "Sigurnost", icon: "shield" },
  { id: "postavke", label: "Postavke demo sustava", icon: "settings" },
];

export const documentChecklistItems = [
  "dokaz o datumu primitka odluke",
  "sve anekse ugovora ako postoje",
  "kompletnu komunikaciju s poslodavcem",
  "eventualnu internu žalbu ili očitovanje",
];

export function getCaseById(id: string): Case | undefined {
  return cases.find((c) => c.id === id);
}

export function getDraftById(id: string): DraftResponse | undefined {
  return draftResponses.find((d) => d.id === id);
}

export const statusLabels: Record<string, string> = {
  novo: "Novo",
  "ceka-dokumente": "Čeka dokumente",
  "draft-spreman": "Draft spreman",
  "novi-upit": "Novi upit",
  "rok-za-provjeru": "Rok za provjeru",
};

export const urgencyLabels: Record<string, string> = {
  visoka: "Visoka hitnost",
  srednja: "Srednja hitnost",
  osjetljivo: "Osjetljivo",
};
