"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { securityPrinciples } from "@/lib/data";
import { RolesSection } from "@/components/roles-section";
import { Shield } from "lucide-react";

export function SecuritySection() {
  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-royal/10">
            <Shield className="h-5 w-5 text-accent-royal" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Dizajnirano za odvjetnički ured: sigurnost prije automatizacije
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Sustav priprema pregled — odvjetnica odlučuje.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {securityPrinciples.map((item, i) => (
          <Card key={item.title}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">
                {i + 1}. {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <RolesSection />
    </div>
  );
}
