"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { mailInquiries } from "@/lib/data";
import { ArrowRight, Info, Mail, Paperclip } from "lucide-react";

export function MailIntakeSection() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold text-slate-900">
          Od nestrukturiranog maila do urednog pregleda
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 max-w-3xl">
          <span className="font-medium text-slate-700">Prije:</span>{" "}
          Klijent šalje neuredan upit s dokumentima i nepotpunim informacijama.
        </p>
        <p className="mt-1 text-sm leading-relaxed text-slate-600 max-w-3xl">
          <span className="font-medium text-slate-700">Poslije:</span>{" "}
          Ured dobiva strukturiran pregled: područje prava, hitnost, zaprimljene
          dokumente, što nedostaje i sljedeću administrativnu radnju.
        </p>
      </div>

      <Alert variant="info" className="flex items-start gap-3 border-slate-200 bg-slate-50">
        <Info className="h-4 w-4 text-slate-600 shrink-0 mt-0.5" />
        <AlertDescription className="text-sm text-slate-700 leading-relaxed">
          Sažetak služi za pripremu pregleda. Konačnu procjenu uvijek donosi
          odvjetnica. Ovo je administrativni pregled, ne pravni savjet.
        </AlertDescription>
      </Alert>

      <div className="space-y-6">
        {mailInquiries.map((mail, i) => (
          <motion.div
            key={mail.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
          >
            <Card className="hover:shadow-sm transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100">
                      <Mail className="h-4 w-4 text-accent-royal" />
                    </div>
                    <div>
                      <CardTitle className="text-base">{mail.subject}</CardTitle>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <Badge variant="secondary">{mail.classification}</Badge>
                        <Badge
                          variant={
                            mail.urgency === "visoka" ? "danger" : "secondary"
                          }
                        >
                          {mail.urgency === "visoka" ? "Visoka hitnost" : "Srednja hitnost"}
                        </Badge>
                        <Badge variant="outline" className="gap-1">
                          <Paperclip className="h-3 w-3" />
                          {mail.attachments} privitka
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <Badge variant="warning">{mail.status}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-5 lg:grid-cols-2">
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Prije — neuredan upit
                    </p>
                    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 min-h-[120px]">
                      <p className="text-sm leading-relaxed text-slate-600 whitespace-pre-wrap">
                        {mail.before}
                      </p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="hidden lg:flex absolute -left-6 top-1/2 -translate-y-1/2 h-8 w-8 items-center justify-center rounded-full bg-accent-royal text-white z-10 shadow-sm">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-accent-royal">
                      Poslije — administrativni sažetak
                    </p>
                    <div className="rounded-lg border border-slate-200 bg-white p-4 min-h-[120px] shadow-sm">
                      <pre className="text-sm leading-relaxed text-slate-700 whitespace-pre-wrap font-sans">
                        {mail.after}
                      </pre>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
