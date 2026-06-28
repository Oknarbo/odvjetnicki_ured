"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, CloudOff, HardDrive, Lock } from "lucide-react";

export function DemoSettingsSection() {
  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h2 className="text-xl font-semibold text-slate-900">Postavke demo sustava</h2>
        <p className="mt-1 text-sm text-slate-500">
          Konfiguracija prikazana u demo načinu — nema stvarne integracije.
        </p>
      </div>

      <Alert variant="info">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          Ovo je konceptni prikaz. Prava verzija bi se konfigurirala lokalno u uredu.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm flex items-center gap-2">
            <Lock className="h-4 w-4" />
            Način rada
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-600">Read-only mode</span>
            <Badge variant="readonly">Aktivan</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-600">Cloud API</span>
            <Badge variant="secondary" className="gap-1">
              <CloudOff className="h-3 w-3" />
              Isključen
            </Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-600">Local-first</span>
            <Badge variant="success" className="gap-1">
              <HardDrive className="h-3 w-3" />
              Spreman
            </Badge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Demo korisnik</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-600">Demo korisnik — uloga odvjetnice (izmišljeni podaci)</p>
          <p className="mt-2 text-xs text-slate-400">
            U pravi verziji: autentifikacija, uloge i audit log.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
