"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, User, Info } from "lucide-react";
import { DemoBanner } from "@/components/demo-banner";
import { Sidebar } from "@/components/sidebar";
import { TopStats } from "@/components/top-stats";
import { CaseList } from "@/components/case-list";
import { CaseDetail } from "@/components/case-detail";
import { ActionsPanel } from "@/components/actions-panel";
import { DraftDialog } from "@/components/draft-dialog";
import { DocumentChecklistDialog } from "@/components/document-checklist-dialog";
import { MailIntakeSection } from "@/components/mail-intake-section";
import { DocumentsSection } from "@/components/documents-section";
import { DeadlinesSection } from "@/components/deadlines-section";
import { DraftsSection } from "@/components/drafts-section";
import { SecuritySection } from "@/components/security-section";
import { DemoSettingsSection } from "@/components/demo-settings-section";
import { Toast, useToast } from "@/components/toast";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { cases, draftResponses, getCaseById, getDraftById } from "@/lib/data";
import type { AssistantTaskId, DashboardSection } from "@/lib/types";

const sectionTitles: Record<DashboardSection, string> = {
  pregled: "Pregled dana",
  predmeti: "Predmeti",
  "novi-upiti": "Novi upiti",
  dokumenti: "Dokumenti",
  rokovi: "Mogući rokovi za provjeru",
  "draft-odgovori": "Draft odgovori",
  sigurnost: "Sigurnost",
  postavke: "Postavke demo sustava",
};

export function DashboardLayout() {
  const [activeSection, setActiveSection] = useState<DashboardSection>("pregled");
  const [selectedCaseId, setSelectedCaseId] = useState(cases[0].id);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [draftOpen, setDraftOpen] = useState(false);
  const [checklistOpen, setChecklistOpen] = useState(false);
  const [activeDraftId, setActiveDraftId] = useState("draft-1");
  const [assistantTask, setAssistantTask] = useState<{
    id: AssistantTaskId;
    key: number;
  } | null>(null);
  const { message, showToast, hideToast } = useToast();

  const selectedCase = getCaseById(selectedCaseId) ?? cases[0];
  const activeDraft = getDraftById(activeDraftId) ?? draftResponses[0];

  const handleNavigate = (section: DashboardSection) => {
    setActiveSection(section);
    setMobileNavOpen(false);
  };

  const handleOpenDraft = (id?: string) => {
    if (id) setActiveDraftId(id);
    else setActiveDraftId("draft-1");
    setDraftOpen(true);
  };

  const handleAssistantTask = (taskId: AssistantTaskId) => {
    setAssistantTask({ id: taskId, key: Date.now() });
  };

  const actionsPanelProps = {
    onShowDraft: () => handleOpenDraft("draft-1"),
    onRequestDocuments: () => setChecklistOpen(true),
    onMarkForReview: () =>
      showToast("Predmet označen za pregled odvjetnice (demo)"),
    onPrepareConsultation: () =>
      showToast("Konzultacija pripremljena za pregled (demo)"),
    onAddNote: () => showToast("Napomena dodana u predmet (demo)"),
    onAssistantTask: handleAssistantTask,
  };

  const renderOverview = () => (
    <div className="space-y-6">
      <TopStats />
      <div className="grid gap-6 xl:grid-cols-[280px_1fr_280px]">
        <div className="xl:block">
          <CaseList
            cases={cases}
            selectedId={selectedCaseId}
            onSelect={setSelectedCaseId}
          />
        </div>
        <ScrollArea className="min-h-[400px] max-h-[calc(100vh-220px)] rounded-xl border border-slate-200 bg-white p-5">
          <CaseDetail
            caseData={selectedCase}
            assistantTask={assistantTask?.id ?? null}
            assistantTaskKey={assistantTask?.key}
            onAssistantTaskHandled={() => setAssistantTask(null)}
          />
        </ScrollArea>
        <ActionsPanel {...actionsPanelProps} />
      </div>
    </div>
  );

  const renderCases = () => (
    <div className="grid gap-6 lg:grid-cols-[300px_1fr_280px]">
      <CaseList
        cases={cases}
        selectedId={selectedCaseId}
        onSelect={setSelectedCaseId}
      />
      <ScrollArea className="min-h-[500px] max-h-[calc(100vh-220px)] rounded-xl border border-slate-200 bg-white p-5">
        <CaseDetail
          caseData={selectedCase}
          assistantTask={assistantTask?.id ?? null}
          assistantTaskKey={assistantTask?.key}
          onAssistantTaskHandled={() => setAssistantTask(null)}
        />
      </ScrollArea>
      <ActionsPanel {...actionsPanelProps} />
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case "pregled":
        return renderOverview();
      case "predmeti":
        return renderCases();
      case "novi-upiti":
        return <MailIntakeSection />;
      case "dokumenti":
        return <DocumentsSection />;
      case "rokovi":
        return <DeadlinesSection />;
      case "draft-odgovori":
        return <DraftsSection onOpenDraft={handleOpenDraft} />;
      case "sigurnost":
        return <SecuritySection />;
      case "postavke":
        return <DemoSettingsSection />;
      default:
        return renderOverview();
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <DemoBanner />

      <div className="flex flex-1 overflow-hidden">
        {/* Desktop sidebar */}
        <div className="hidden lg:block">
          <Sidebar activeSection={activeSection} onNavigate={handleNavigate} />
        </div>

        {/* Mobile sidebar */}
        <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
          <SheetContent side="left" className="p-0 border-0 w-[280px]">
            <Sidebar activeSection={activeSection} onNavigate={handleNavigate} />
          </SheetContent>
        </Sheet>

        <div className="flex flex-1 flex-col overflow-hidden">
          {/* Header */}
          <header className="border-b border-slate-200 bg-white">
            <div className="flex items-center justify-between px-4 py-3 sm:px-6">
              <div className="flex items-center gap-3 min-w-0">
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden shrink-0"
                  onClick={() => setMobileNavOpen(true)}
                >
                  <Menu className="h-5 w-5" />
                </Button>
                <div className="min-w-0">
                  <h1 className="text-base font-semibold text-slate-900 truncate">
                    {sectionTitles[activeSection]}
                  </h1>
                  <p className="text-xs text-slate-500">
                    Interni sustav — read-only demo
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                <Badge variant="readonly" className="text-[10px] sm:text-xs">
                  Read-only mode
                </Badge>
                <div className="flex items-center gap-2 rounded-lg border border-slate-200 px-2 sm:px-3 py-1.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-accent-royal/10">
                    <User className="h-4 w-4 text-accent-royal" />
                  </div>
                  <div className="hidden sm:block">
                    <p className="text-xs font-medium text-slate-900">Demo korisnik</p>
                    <p className="text-[10px] text-slate-500">odvjetnica — demo uloga</p>
                  </div>
                </div>
              </div>
            </div>
            <Alert variant="info" className="rounded-none border-x-0 border-b-0 py-2.5 px-4 sm:px-6 flex items-start gap-2 bg-slate-50/80">
              <Info className="h-4 w-4 text-slate-600 shrink-0 mt-0.5" />
              <AlertDescription className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Sustav ne procjenjuje pravni ishod predmeta. Prikazuje samo
                organizacijski pregled za ured.
              </AlertDescription>
            </Alert>
          </header>

          {/* Main content */}
          <main className="flex-1 overflow-y-auto p-4 sm:p-6">
            {renderContent()}
          </main>

          {/* Footer link back */}
          <footer className="border-t border-slate-200 bg-white px-4 py-2 text-center">
            <Link
              href="/"
              className="text-xs text-slate-400 hover:text-accent-royal transition-colors"
            >
              ← Povratak na intro
            </Link>
          </footer>
        </div>
      </div>

      <DraftDialog
        open={draftOpen}
        onOpenChange={setDraftOpen}
        body={activeDraft.body}
        onMarkForReview={() =>
          showToast("Draft označen za pregled odvjetnice (demo)")
        }
      />

      <DocumentChecklistDialog
        open={checklistOpen}
        onOpenChange={setChecklistOpen}
        onConfirm={() =>
          showToast("Zahtjev za dokumente pripremljen (demo — ništa nije poslano)")
        }
      />

      <Toast message={message} onClose={hideToast} />
    </div>
  );
}
