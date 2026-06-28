"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { documents } from "@/lib/data";
import { FileText } from "lucide-react";

function getStatusVariant(status: string) {
  if (status.includes("dodjelu")) return "warning";
  if (status.includes("provjeru")) return "warning";
  return "success";
}

export function DocumentsSection() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-slate-900">Dokumenti</h2>
        <p className="mt-1 text-sm text-slate-500">
          Pregled dokumenata s uredskim bilješkama — sve podatke ručno potvrdite.
        </p>
      </div>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-medium text-slate-600">Dokument</th>
                <th className="px-4 py-3 text-left font-medium text-slate-600">Predmet</th>
                <th className="px-4 py-3 text-left font-medium text-slate-600">Tip</th>
                <th className="px-4 py-3 text-left font-medium text-slate-600">Status</th>
                <th className="px-4 py-3 text-left font-medium text-slate-600">Uredska bilješka</th>
                <th className="px-4 py-3 text-left font-medium text-slate-600">Radnja</th>
              </tr>
            </thead>
            <tbody>
              {documents.map((doc) => (
                <tr
                  key={doc.id}
                  className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors"
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-slate-400 shrink-0" />
                      <span className="font-medium text-slate-800">{doc.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-slate-600">{doc.caseName}</td>
                  <td className="px-4 py-3 text-slate-600">{doc.type}</td>
                  <td className="px-4 py-3">
                    <Badge variant={getStatusVariant(doc.status)}>{doc.status}</Badge>
                  </td>
                  <td className="px-4 py-3 text-slate-600 max-w-[200px]">{doc.aiNote}</td>
                  <td className="px-4 py-3">
                    <button className="text-xs text-accent-royal hover:underline cursor-pointer">
                      Pregled (demo)
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
