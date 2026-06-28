import type { AssistantResponse, AssistantTaskId, Case } from "./types";
import { statusLabels, urgencyLabels } from "./data";

const case1Responses: Record<Exclude<AssistantTaskId, "custom">, AssistantResponse> = {
  summarize: {
    title: "Administrativni odgovor",
    body: `U ovom predmetu zaprimljeni su ugovor o radu, odluka o otkazu, email komunikacija i platna lista za 05/2026.

Stranka navodi da je zaprimila odluku o otkazu i želi pregled mogućnosti postupanja. Sustav je označio da je potrebno ručno provjeriti datum dostave jer se u dokumentaciji spominje mogući rok za provjeru.

Za pripremu konzultacije korisno je zatražiti:
• dokaz o datumu primitka odluke
• anekse ugovora ako postoje
• kompletnu komunikaciju s poslodavcem
• eventualnu internu žalbu ili očitovanje

Ovo je administrativni sažetak za pregled odvjetnice, ne pravna procjena.`,
    sources: [
      "Ugovor o radu.pdf",
      "Odluka o otkazu.pdf",
      "Email komunikacija.pdf",
      "Platna lista 05-2026.pdf",
    ],
  },
  dates: {
    title: "Ključni datumi za ručnu provjeru",
    body: `U dokumentima su pronađeni sljedeći datumi koji mogu biti relevantni za pregled predmeta:

• datum sklapanja ugovora o radu
• datum odluke o otkazu
• datum navodne dostave odluke
• datum zadnje email komunikacije
• datum zadnje platne liste

Napomena: sustav ne potvrđuje pravni značaj datuma. Datumi su označeni isključivo za pregled odvjetnice.`,
  },
  missing: {
    title: "Dokumenti i informacije koje bi bilo korisno zatražiti",
    body: `Za potpuniji administrativni pregled predmeta nedostaje:

• dokaz o datumu primitka odluke
• aneksi ugovora ako postoje
• kompletna komunikacija s poslodavcem
• eventualna interna žalba ili očitovanje
• dodatna dokumentacija koju odvjetnica ocijeni potrebnom nakon pregleda

Ovo nije pravna procjena, nego dokument checklist za pripremu predmeta.`,
  },
  consultation: {
    title: "Briefing za konzultaciju",
    body: `Tema: radno pravo / otkaz ugovora o radu
Status: novi predmet
Hitnost: visoka — postoji mogući rok za provjeru
Dokumenti: 4 zaprimljena, nekoliko nedostaje

Glavna administrativna pitanja za sastanak:
1. Kada je stranka stvarno primila odluku?
2. Postoje li aneksi ugovora?
3. Je li bilo prethodnih upozorenja ili komunikacije?
4. Ima li stranka kompletnu email komunikaciju?
5. Postoji li interna žalba, očitovanje ili drugi dokument?

Konačnu procjenu i daljnje postupanje određuje odvjetnica.`,
  },
  compare: {
    title: "Usporedba dokumenata — demo prikaz",
    body: `Sustav može usporediti odabrane dokumente i označiti razlike u datumima, nazivima stranaka, obvezama, iznosima ili statusima.

U ovom demo predmetu moguće je usporediti:
• Ugovor o radu.pdf
• Odluka o otkazu.pdf
• Email komunikacija.pdf

Napomena: ovo je demo prikaz. Prava verzija bi prikazivala točne izvore, stranice i odlomke iz dokumenata.`,
  },
  draft: {
    title: "Administrativni nacrt maila",
    body: `Poštovani,

zaprimili smo Vaš upit i dostavljenu dokumentaciju.

Radi potpunijeg pregleda, molimo Vas da nam dostavite:
• dokaz o datumu primitka odluke
• sve anekse ugovora ako postoje
• kompletnu komunikaciju s poslodavcem
• eventualnu internu žalbu ili očitovanje ako postoji

Nakon pregleda dostavljene dokumentacije, ured će Vas kontaktirati radi dogovora o mogućem terminu konzultacije.

Srdačno,
Odvjetnički ured

Napomena: ovaj nacrt nije poslan. Služi samo kao priprema i šalje se tek nakon pregleda i odobrenja odvjetnice.`,
  },
};

export const assistantQuickActions = [
  { id: "summarize" as const, label: "Sažmi predmet" },
  { id: "dates" as const, label: "Pronađi ključne datume" },
  { id: "missing" as const, label: "Što nedostaje?" },
  { id: "consultation" as const, label: "Pripremi konzultaciju" },
  { id: "compare" as const, label: "Usporedi dokumente" },
  { id: "draft" as const, label: "Napravi nacrt maila" },
];

export const assistantPanelTasks = [
  { id: "summarize" as const, label: "Sažetak predmeta" },
  { id: "dates" as const, label: "Ključni datumi" },
  { id: "missing" as const, label: "Dokumenti koji nedostaju" },
  { id: "draft" as const, label: "Nacrt odgovora" },
];

export const customAssistantResponse: AssistantResponse = {
  title: "Demo odgovor asistenta",
  body: `U pravoj verziji sustav bi pretražio dokumente unutar odabranog predmeta i odgovorio uz izvore.
U ovom demu prikazan je primjer sigurnog načina rada: asistent daje administrativni pregled, ne pravni savjet.`,
  suggestedActions: [
    "sažeti dokumente",
    "pronaći ključne datume",
    "izraditi dokument checklist",
    "pripremiti nacrt administrativnog odgovora",
  ],
};

function buildDynamicResponse(caseData: Case, taskId: AssistantTaskId): AssistantResponse {
  const docs = caseData.receivedDocuments;
  const missing = caseData.missingDocuments;
  const docsList = docs.map((d) => `• ${d}`).join("\n");
  const missingList = missing.map((d) => `• ${d}`).join("\n");
  const status = statusLabels[caseData.status] ?? caseData.status;
  const urgency = urgencyLabels[caseData.urgency] ?? caseData.urgency;

  switch (taskId) {
    case "summarize":
      return {
        title: "Administrativni odgovor",
        body: `${caseData.aiSummary}

Zaprimljeni dokumenti:
${docsList || "• nema evidentiranih dokumenata"}

${missing.length > 0 ? `Nedostaje:\n${missingList}` : ""}

Ovo je administrativni sažetak za pregled odvjetnice, ne pravna procjena.`,
        sources: docs,
      };
    case "dates":
      return {
        title: "Ključni datumi za ručnu provjeru",
        body: `U dokumentima predmeta "${caseData.title}" mogu se pronaći datumi relevantni za administrativni pregled.

${caseData.possibleDeadlines.length > 0 ? `Označeni mogući rokovi za provjeru:\n${caseData.possibleDeadlines.map((d) => `• ${d}`).join("\n")}\n\n` : ""}Napomena: sustav ne potvrđuje pravni značaj datuma. Datumi su označeni isključivo za pregled odvjetnice.`,
      };
    case "missing":
      return {
        title: "Dokumenti i informacije koje bi bilo korisno zatražiti",
        body: `Za potpuniji administrativni pregled predmeta nedostaje:

${missingList || "• dodatna dokumentacija koju odvjetnica ocijeni potrebnom nakon pregleda"}

Ovo nije pravna procjena, nego dokument checklist za pripremu predmeta.`,
      };
    case "consultation":
      return {
        title: "Briefing za konzultaciju",
        body: `Tema: ${caseData.title}
Status: ${status}
Hitnost: ${urgency}${caseData.hasDeadlineReview ? " — postoji mogući rok za provjeru" : ""}
Dokumenti: ${docs.length} zaprimljenih, ${missing.length} nedostaje

Administrativni sažetak:
${caseData.aiSummary}

Konačnu procjenu i daljnje postupanje određuje odvjetnica.`,
      };
    case "compare":
      return {
        title: "Usporedba dokumenata — demo prikaz",
        body: `Sustav može usporediti odabrane dokumente i označiti razlike u datumima, nazivima stranaka, obvezama, iznosima ili statusima.

U ovom predmetu moguće je usporediti:
${docs.slice(0, 3).map((d) => `• ${d}`).join("\n")}

Napomena: ovo je demo prikaz. Prava verzija bi prikazivala točne izvore, stranice i odlomke iz dokumenata.`,
      };
    case "draft":
      return {
        title: "Administrativni nacrt maila",
        body: `Poštovani,

zaprimili smo Vaš upit i dostavljenu dokumentaciju.

${missing.length > 0 ? `Radi potpunijeg pregleda, molimo Vas da nam dostavite:\n${missing.map((d) => `• ${d}`).join("\n")}\n\n` : ""}Nakon pregleda dostavljene dokumentacije, ured će Vas kontaktirati radi dogovora o mogućem terminu konzultacije.

Srdačno,
Odvjetnički ured

Napomena: ovaj nacrt nije poslan. Služi samo kao priprema i šalje se tek nakon pregleda i odobrenja odvjetnice.`,
      };
    default:
      return customAssistantResponse;
  }
}

export function getAssistantResponse(
  caseData: Case,
  taskId: AssistantTaskId
): AssistantResponse {
  if (taskId === "custom") {
    return customAssistantResponse;
  }
  if (caseData.id === "case-1" && case1Responses[taskId]) {
    return case1Responses[taskId];
  }
  return buildDynamicResponse(caseData, taskId);
}
