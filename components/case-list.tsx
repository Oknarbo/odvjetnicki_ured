"use client";

import { cn } from "@/lib/utils";
import { statusLabels, urgencyLabels } from "@/lib/data";
import type { Case } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, ChevronRight } from "lucide-react";

interface CaseListProps {
  cases: Case[];
  selectedId: string;
  onSelect: (id: string) => void;
}

function getStatusVariant(status: string) {
  switch (status) {
    case "novo":
      return "default";
    case "ceka-dokumente":
      return "warning";
    case "draft-spreman":
      return "success";
    case "novi-upit":
      return "secondary";
    case "rok-za-provjeru":
      return "danger";
    default:
      return "secondary";
  }
}

function getUrgencyVariant(urgency: string) {
  switch (urgency) {
    case "visoka":
      return "danger";
    case "osjetljivo":
      return "gold";
    default:
      return "secondary";
  }
}

export function CaseList({ cases, selectedId, onSelect }: CaseListProps) {
  return (
    <div className="space-y-2">
      <h3 className="text-sm font-semibold text-slate-900 px-1">Predmeti</h3>
      <div className="space-y-1.5">
        {cases.map((c) => {
          const isSelected = c.id === selectedId;
          const shortTitle = c.title.split(" / ")[1] ?? c.title;
          return (
            <button
              key={c.id}
              onClick={() => onSelect(c.id)}
              className={cn(
                "w-full rounded-lg border p-3 text-left transition-all cursor-pointer",
                isSelected
                  ? "border-accent-royal bg-blue-50/50 shadow-sm"
                  : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm"
              )}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-slate-500">{c.area}</p>
                  <p className="mt-0.5 text-sm font-medium text-slate-900 truncate">
                    {shortTitle}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    <Badge variant={getStatusVariant(c.status)} className="text-[10px]">
                      {statusLabels[c.status]}
                    </Badge>
                    <Badge variant={getUrgencyVariant(c.urgency)} className="text-[10px]">
                      {urgencyLabels[c.urgency]}
                    </Badge>
                    {c.hasDeadlineReview && (
                      <Badge variant="warning" className="text-[10px] gap-0.5">
                        <AlertCircle className="h-2.5 w-2.5" />
                        Mogući rok za provjeru
                      </Badge>
                    )}
                  </div>
                </div>
                <ChevronRight
                  className={cn(
                    "h-4 w-4 shrink-0 mt-1 transition-colors",
                    isSelected ? "text-accent-royal" : "text-slate-300"
                  )}
                />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
