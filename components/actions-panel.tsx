"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { securityModeItems } from "@/lib/data";
import { assistantPanelTasks } from "@/lib/assistant-responses";
import type { AssistantTaskId } from "@/lib/types";
import { CloudOff, HardDrive, ListChecks, Shield } from "lucide-react";

interface ActionsPanelProps {
  onShowDraft: () => void;
  onRequestDocuments: () => void;
  onMarkForReview: () => void;
  onPrepareConsultation: () => void;
  onAddNote: () => void;
  onAssistantTask?: (taskId: AssistantTaskId) => void;
}

export function ActionsPanel({
  onShowDraft,
  onRequestDocuments,
  onMarkForReview,
  onPrepareConsultation,
  onAddNote,
  onAssistantTask,
}: ActionsPanelProps) {
  return (
    <div className="space-y-5">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Predložene radnje</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button
            variant="outline"
            className="w-full justify-start text-sm"
            onClick={onRequestDocuments}
          >
            Zatraži dokumente
          </Button>
          <Button
            variant="outline"
            className="w-full justify-start text-sm"
            onClick={onPrepareConsultation}
          >
            Pripremi konzultaciju
          </Button>
          <Button
            variant="outline"
            className="w-full justify-start text-sm"
            onClick={onMarkForReview}
          >
            Označi za pregled
          </Button>
          <Button
            className="w-full justify-start text-sm"
            onClick={onShowDraft}
          >
            Prikaži draft odgovora
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-sm"
            onClick={onAddNote}
          >
            Dodaj napomenu
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-sm">
            <ListChecks className="h-4 w-4 text-accent-royal" />
            Brzi zadaci asistenta
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {assistantPanelTasks.map((task) => (
            <Button
              key={task.id}
              variant="outline"
              className="w-full justify-start text-sm"
              onClick={() => onAssistantTask?.(task.id)}
            >
              {task.label}
            </Button>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-sm">
            <Shield className="h-4 w-4 text-accent-royal" />
            Sigurnosni način rada
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {securityModeItems.map((item) => (
              <li key={item} className="flex items-start gap-2 text-xs text-slate-600">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-royal" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge variant="success" className="gap-1">
              <HardDrive className="h-3 w-3" />
              Local-first ready
            </Badge>
            <Badge variant="secondary" className="gap-1">
              <CloudOff className="h-3 w-3" />
              Cloud API: isključen u demo prikazu
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
