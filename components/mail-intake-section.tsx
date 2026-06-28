"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mailInquiries } from "@/lib/data";
import { ArrowRight, Mail, Paperclip } from "lucide-react";

export function MailIntakeSection() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-slate-900">Novi upiti</h2>
        <p className="mt-1 text-sm text-slate-500">
          Sažimanje ulaznih mailova — prije i poslije organizacije sustava.
        </p>
      </div>

      <div className="space-y-6">
        {mailInquiries.map((mail, i) => (
          <motion.div
            key={mail.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
          >
            <Card>
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
                <div className="grid gap-4 lg:grid-cols-2">
                  <div>
                    <p className="mb-2 text-xs font-medium uppercase tracking-wide text-slate-400">
                      Prije
                    </p>
                    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                      <p className="text-sm leading-relaxed text-slate-600 whitespace-pre-wrap">
                        {mail.before}
                      </p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="hidden lg:flex absolute -left-6 top-1/2 -translate-y-1/2 h-8 w-8 items-center justify-center rounded-full bg-accent-royal text-white z-10">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                    <p className="mb-2 text-xs font-medium uppercase tracking-wide text-accent-royal">
                      Poslije — administrativni sažetak
                    </p>
                    <div className="rounded-lg border border-blue-200 bg-blue-50/50 p-4">
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
