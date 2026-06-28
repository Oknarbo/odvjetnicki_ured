"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { draftResponses } from "@/lib/data";
import { FileEdit } from "lucide-react";

interface DraftsSectionProps {
  onOpenDraft: (id: string) => void;
}

export function DraftsSection({ onOpenDraft }: DraftsSectionProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-slate-900">Draft odgovori</h2>
        <p className="mt-1 text-sm text-slate-500">
          Nacrti mailova čekaju pregled i odobrenje — ništa se ne šalje automatski.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {draftResponses.map((draft) => (
          <Card key={draft.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100">
                    <FileEdit className="h-4 w-4 text-accent-royal" />
                  </div>
                  <CardTitle className="text-sm leading-snug">{draft.title}</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Badge variant="warning">Čeka pregled</Badge>
              <p className="mt-3 text-xs text-slate-500 line-clamp-3 whitespace-pre-wrap">
                {draft.body.slice(0, 120)}...
              </p>
              <Button
                variant="outline"
                size="sm"
                className="mt-4"
                onClick={() => onOpenDraft(draft.id)}
              >
                Otvori draft
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
