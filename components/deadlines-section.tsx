"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { possibleDeadlines } from "@/lib/data";
import { AlertCircle } from "lucide-react";

function getStatusVariant(status: string) {
  if (status === "nije potvrđeno") return "danger";
  if (status === "za pregled") return "warning";
  return "secondary";
}

export function DeadlinesSection() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-slate-900">Mogući rokovi za provjeru</h2>
        <p className="mt-1 text-sm text-slate-500">
          Sustav označava moguće rokove — odvjetnica ih ručno potvrđuje.
        </p>
      </div>

      <Alert variant="warning">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription className="text-sm">
          Rokovi prikazani ovdje nisu potvrđeni. Uvijek provjerite datum primitka dokumenta
          i relevantnu dokumentaciju prije bilo kakvog postupanja.
        </AlertDescription>
      </Alert>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-medium text-slate-600">Predmet</th>
                <th className="px-4 py-3 text-left font-medium text-slate-600">Izvor</th>
                <th className="px-4 py-3 text-left font-medium text-slate-600">Tekst iz dokumenta</th>
                <th className="px-4 py-3 text-left font-medium text-slate-600">Status</th>
                <th className="px-4 py-3 text-left font-medium text-slate-600">Preporučena radnja</th>
              </tr>
            </thead>
            <tbody>
              {possibleDeadlines.map((dl) => (
                <tr
                  key={dl.id}
                  className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors"
                >
                  <td className="px-4 py-3 font-medium text-slate-800">{dl.caseName}</td>
                  <td className="px-4 py-3 text-slate-600">{dl.source}</td>
                  <td className="px-4 py-3 text-slate-600 italic">&ldquo;{dl.documentText}&rdquo;</td>
                  <td className="px-4 py-3">
                    <Badge variant={getStatusVariant(dl.status)}>{dl.status}</Badge>
                  </td>
                  <td className="px-4 py-3 text-slate-600">{dl.recommendedAction}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
