"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { officeRoles } from "@/lib/data";
import { CheckCircle2, User } from "lucide-react";

export function RolesSection() {
  return (
    <div>
      <h3 className="text-lg font-semibold text-slate-900 mb-4">Uloge u uredu</h3>
      <div className="grid gap-4 lg:grid-cols-3">
        {officeRoles.map((role) => (
          <Card key={role.id}>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100">
                  <User className="h-4 w-4 text-accent-royal" />
                </div>
                {role.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-xs font-medium text-slate-500 uppercase tracking-wide">
                Može:
              </p>
              <ul className="space-y-2">
                {role.permissions.map((perm) => (
                  <li key={perm} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    {perm}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
