"use client";

import { useState } from "react";
import { DemoBanner } from "@/components/demo-banner";
import { IntroHero } from "@/components/intro-hero";
import { SecurityPrinciples } from "@/components/security-principles";
import { Scale } from "lucide-react";

export default function HomePage() {
  const [securityOpen, setSecurityOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <DemoBanner />
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-4 sm:px-6">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-royal">
            <Scale className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">Digitalni uredski asistent</p>
            <p className="text-xs text-slate-500">Interni uredski asistent</p>
          </div>
        </div>
      </header>
      <main>
        <IntroHero onShowSecurity={() => setSecurityOpen(true)} />
      </main>
      <SecurityPrinciples open={securityOpen} onOpenChange={setSecurityOpen} />
    </div>
  );
}
