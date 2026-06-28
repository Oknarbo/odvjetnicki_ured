"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { DEMO_BANNER } from "@/lib/data";

export function DemoBanner() {
  return (
    <Alert variant="warning" className="rounded-none border-x-0 border-t-0 py-2.5 flex items-center gap-2">
      <AlertCircle className="h-4 w-4 text-amber-700 shrink-0" />
      <AlertDescription className="text-sm font-medium text-amber-900">
        {DEMO_BANNER}
      </AlertDescription>
    </Alert>
  );
}
