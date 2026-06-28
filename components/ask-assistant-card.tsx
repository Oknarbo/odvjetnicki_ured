"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  assistantQuickActions,
  getAssistantResponse,
} from "@/lib/assistant-responses";
import type { AssistantResponse, AssistantTaskId, Case } from "@/lib/types";
import { FileText, MessageSquare, ShieldAlert } from "lucide-react";

interface AskAssistantCardProps {
  caseData: Case;
  externalTask?: AssistantTaskId | null;
  externalTaskKey?: number;
  onExternalTaskHandled?: () => void;
}

export function AskAssistantCard({
  caseData,
  externalTask,
  externalTaskKey,
  onExternalTaskHandled,
}: AskAssistantCardProps) {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState<AssistantResponse | null>(null);
  const [activeTask, setActiveTask] = useState<AssistantTaskId | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const runTask = useCallback(
    (taskId: AssistantTaskId) => {
      setActiveTask(taskId);
      setResponse(getAssistantResponse(caseData, taskId));
    },
    [caseData]
  );

  const handleSubmit = () => {
    if (!question.trim()) return;
    runTask("custom");
  };

  useEffect(() => {
    setQuestion("");
    setResponse(null);
    setActiveTask(null);
  }, [caseData.id]);

  useEffect(() => {
    if (!externalTask || externalTaskKey === undefined) return;
    runTask(externalTask);
    onExternalTaskHandled?.();
    setTimeout(() => {
      cardRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }, [externalTask, externalTaskKey, runTask, onExternalTaskHandled]);

  return (
    <div ref={cardRef}>
      <Separator className="my-6" />
      <Card className="border-slate-200">
        <CardHeader className="pb-3">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <CardTitle className="flex items-center gap-2 text-sm">
              <MessageSquare className="h-4 w-4 text-accent-royal" />
              Pitaj asistenta o ovom predmetu
            </CardTitle>
            <div className="flex flex-wrap gap-1.5">
              <Badge variant="secondary">Demo mode</Badge>
              <Badge variant="outline">Bez pravnih savjeta</Badge>
            </div>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-slate-600">
            Asistent odgovara samo na temelju dokumenata i podataka iz odabranog
            predmeta. Ne daje pravne savjete, ne šalje poruke i ne donosi odluke.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert variant="info" className="flex items-start gap-2 py-2.5">
            <ShieldAlert className="h-4 w-4 shrink-0 mt-0.5 text-slate-600" />
            <AlertDescription className="text-xs leading-relaxed text-slate-700">
              Asistent ne daje pravne savjete i ne procjenjuje ishod predmeta.
              Odgovori služe za administrativnu pripremu i pregled odvjetnice.
            </AlertDescription>
          </Alert>

          <div>
            <p className="mb-2 text-xs font-medium text-slate-500 uppercase tracking-wide">
              Brzi zadaci
            </p>
            <div className="flex flex-wrap gap-2">
              {assistantQuickActions.map((action) => (
                <Button
                  key={action.id}
                  variant={activeTask === action.id ? "default" : "outline"}
                  size="sm"
                  className="text-xs h-8"
                  onClick={() => runTask(action.id)}
                >
                  {action.label}
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Textarea
              placeholder='Npr. "Sažmi sve dokumente u ovom predmetu" ili "Što nedostaje za konzultaciju?"'
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              rows={2}
              className="min-h-[72px]"
            />
            <Button onClick={handleSubmit} disabled={!question.trim()} size="sm">
              Postavi pitanje
            </Button>
          </div>

          <AnimatePresence mode="wait">
            {response && (
              <motion.div
                key={`${caseData.id}-${activeTask}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <Separator className="mb-4" />
                <div className="rounded-lg border border-slate-200 bg-slate-50/80">
                  <div className="border-b border-slate-200 px-4 py-2.5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Odgovor asistenta
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-slate-900">
                      {response.title}
                    </p>
                  </div>
                  <ScrollArea className="max-h-[320px]">
                    <div className="px-4 py-3">
                      <pre className="whitespace-pre-wrap text-sm leading-relaxed text-slate-700 font-sans">
                        {response.body}
                      </pre>
                      {response.suggestedActions && (
                        <div className="mt-4 pt-3 border-t border-slate-200">
                          <p className="text-xs font-medium text-slate-500 mb-2">
                            Predložene radnje:
                          </p>
                          <ul className="space-y-1">
                            {response.suggestedActions.map((action) => (
                              <li key={action} className="text-sm text-slate-600">
                                • {action}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {response.sources && response.sources.length > 0 && (
                        <div className="mt-4 pt-3 border-t border-slate-200">
                          <p className="text-xs font-medium text-slate-500 mb-2">
                            Izvori:
                          </p>
                          <ul className="space-y-1">
                            {response.sources.map((source) => (
                              <li
                                key={source}
                                className="flex items-center gap-2 text-sm text-slate-600"
                              >
                                <FileText className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                                {source}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </ScrollArea>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </div>
  );
}
