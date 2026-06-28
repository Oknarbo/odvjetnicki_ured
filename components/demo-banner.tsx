"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { DEMO_BANNER } from "@/lib/data";

export function DemoBanner() {
  return (
    <Alert
      variant="warning"
      className="rounded-none border-x-0 border-t-0 border-b-amber-200/80 py-3 px-4 sm:px-6 flex items-center justify-center gap-2.5 bg-amber-50/90"
    >
      <AlertCircle className="h-4 w-4 text-amber-800 shrink-0" />
      <AlertDescription className="text-sm sm:text-[15px] font-medium text-amber-950 text-center leading-snug">
        {DEMO_BANNER}
      </AlertDescription>
    </Alert>
  );
}
