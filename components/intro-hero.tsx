"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { introCards, OFFICE_NAME, DEMO_BANNER } from "@/lib/data";
import { Info } from "lucide-react";

interface IntroHeroProps {
  onShowSecurity: () => void;
}

export function IntroHero({ onShowSecurity }: IntroHeroProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <Alert variant="info" className="mb-10 flex items-start gap-3 border-blue-200 bg-blue-50/80 py-3.5">
        <Info className="h-4 w-4 text-blue-700 shrink-0 mt-0.5" />
        <AlertDescription className="text-sm font-medium text-blue-900 leading-relaxed">
          {DEMO_BANNER}
        </AlertDescription>
      </Alert>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center"
      >
        <p className="mb-4 text-sm font-medium tracking-wide text-accent-royal uppercase">
          {OFFICE_NAME}
        </p>
        <h1 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Digitalni uredski asistent za odvjetnički ured
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
          Prototip internog sustava koji pomaže organizirati upite, dokumente, moguće
          rokove i nacrte odgovora — bez davanja pravnih savjeta i bez slanja ičega
          bez odobrenja odvjetnice.
        </p>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-slate-500">
          Ovo nije chatbot za stranke. Ovo je interni alat za uredski pregled i
          pripremu rada.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="min-w-[200px]">
            <Link href="/dashboard">
              Otvori demo ured
              <ArrowRight className="ml-1" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" onClick={onShowSecurity}>
            <Shield className="mr-1" />
            Pogledaj sigurnosne principe
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {introCards.map((card) => (
          <Card key={card.title} className="hover:shadow-md hover:border-slate-300 transition-all">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">{card.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{card.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
        className="mt-12 text-center text-sm text-slate-500"
      >
        Ovaj demo koristi isključivo izmišljene podatke. Ne prikazuje stvarne predmete,
        stranke ni dokumente.
      </motion.p>
    </section>
  );
}
