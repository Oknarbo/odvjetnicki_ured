"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { statusLabels, urgencyLabels } from "@/lib/data";
import type { Case } from "@/lib/types";
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  FileText,
  ClipboardList,
  XCircle,
} from "lucide-react";

interface CaseDetailProps {
  caseData: Case;
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

export function CaseDetail({ caseData }: CaseDetailProps) {
  return (
    <motion.div
      key={caseData.id}
      initial={{ opacity: 0, x: 8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.25 }}
      className="space-y-4"
    >
      <div>
        <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
          {caseData.area}
        </p>
        <h2 className="mt-1 text-lg font-semibold text-slate-900">{caseData.title}</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          <Badge variant={getStatusVariant(caseData.status)}>
            {statusLabels[caseData.status]}
          </Badge>
          <Badge
            variant={
              caseData.urgency === "visoka"
                ? "danger"
                : caseData.urgency === "osjetljivo"
                  ? "gold"
                  : "secondary"
            }
          >
            {urgencyLabels[caseData.urgency]}
          </Badge>
          {caseData.hasDeadlineReview && (
            <Badge variant="warning">
              <AlertCircle className="h-3 w-3 mr-1" />
              Mogući rok za provjeru
            </Badge>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2 text-xs text-slate-500">
        <Clock className="h-3.5 w-3.5" />
        {caseData.lastEvent}
      </div>

      <Card className="border-slate-200 bg-slate-50/50">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-sm">
            <ClipboardList className="h-4 w-4 text-accent-royal" />
            Administrativni sažetak
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-relaxed text-slate-700">{caseData.aiSummary}</p>
        </CardContent>
      </Card>

      <div className="grid gap-4 sm:grid-cols-2">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              Primljeni dokumenti
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-1.5">
              {caseData.receivedDocuments.map((doc) => (
                <li
                  key={doc}
                  className="flex items-center gap-2 text-sm text-slate-700"
                >
                  <FileText className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                  {doc}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm">
              <XCircle className="h-4 w-4 text-amber-600" />
              Nedostaje
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-1.5">
              {caseData.missingDocuments.map((doc) => (
                <li key={doc} className="text-sm text-slate-600">
                  • {doc}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {caseData.possibleDeadlines.length > 0 && (
        <Card className="border-amber-200 bg-amber-50/30">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm text-amber-900">
              <AlertCircle className="h-4 w-4" />
              Mogući rokovi za provjeru
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-1">
              {caseData.possibleDeadlines.map((dl) => (
                <li key={dl} className="text-sm text-amber-800">
                  {dl}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      <Separator />

      <div>
        <h4 className="text-sm font-semibold text-slate-900">
          Preporučene administrativne radnje
        </h4>
        <ul className="mt-2 space-y-1">
          {caseData.recommendedActions.map((action) => (
            <li key={action} className="text-sm text-slate-600">
              • {action}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
