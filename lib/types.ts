export type Urgency = "visoka" | "srednja" | "osjetljivo";
export type CaseStatus =
  | "novo"
  | "ceka-dokumente"
  | "draft-spreman"
  | "novi-upit"
  | "rok-za-provjeru";

export type DashboardSection =
  | "pregled"
  | "predmeti"
  | "novi-upiti"
  | "dokumenti"
  | "rokovi"
  | "draft-odgovori"
  | "sigurnost"
  | "postavke";

export interface Case {
  id: string;
  title: string;
  area: string;
  status: CaseStatus;
  urgency: Urgency;
  lastEvent: string;
  aiSummary: string;
  receivedDocuments: string[];
  missingDocuments: string[];
  possibleDeadlines: string[];
  recommendedActions: string[];
  hasDeadlineReview?: boolean;
}

export interface KpiStat {
  id: string;
  label: string;
  value: number;
  description: string;
  icon: string;
}

export interface MailInquiry {
  id: string;
  subject: string;
  classification: string;
  urgency: Urgency;
  attachments: number;
  status: string;
  before: string;
  after: string;
  caseId?: string;
}

export interface Document {
  id: string;
  name: string;
  caseName: string;
  type: string;
  status: string;
  aiNote: string;
}

export interface PossibleDeadline {
  id: string;
  caseName: string;
  source: string;
  documentText: string;
  status: string;
  recommendedAction: string;
}

export interface DraftResponse {
  id: string;
  title: string;
  status: "ceka-pregled";
  body: string;
  caseId?: string;
}

export interface SecurityPrinciple {
  title: string;
  description: string;
}

export interface OfficeRole {
  id: string;
  title: string;
  permissions: string[];
}

export interface NavItem {
  id: DashboardSection;
  label: string;
  icon: string;
}

export type AssistantTaskId =
  | "summarize"
  | "dates"
  | "missing"
  | "consultation"
  | "compare"
  | "draft"
  | "custom";

export interface AssistantResponse {
  title: string;
  body: string;
  sources?: string[];
  suggestedActions?: string[];
}

export interface AssistantQuickAction {
  id: AssistantTaskId;
  label: string;
}
