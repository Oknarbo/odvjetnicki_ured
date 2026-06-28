"use client";

import { useState } from "react";
import { Copy, Check, AlertCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface DraftDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  body: string;
  onMarkForReview?: () => void;
}

export function DraftDialog({
  open,
  onOpenChange,
  title = "Administrativni nacrt odgovora",
  body,
  onMarkForReview,
}: DraftDialogProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(body);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg p-6">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            Nacrt za internu pripremu — ne šalje se automatski.
          </DialogDescription>
        </DialogHeader>
        <pre className="whitespace-pre-wrap rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm leading-relaxed text-slate-700 font-sans">
          {body}
        </pre>
        <Alert variant="warning" className="flex items-start gap-2">
          <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
          <AlertDescription className="text-sm leading-relaxed">
            Ovaj nacrt nije poslan. Služi kao priprema i šalje se tek nakon pregleda
            i odobrenja odvjetnice.
          </AlertDescription>
        </Alert>
        <div className="flex flex-wrap gap-2 justify-end">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Zatvori
          </Button>
          <Button variant="outline" onClick={handleCopy}>
            {copied ? (
              <>
                <Check className="h-4 w-4" />
                Kopirano
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                Kopiraj nacrt
              </>
            )}
          </Button>
          {onMarkForReview && (
            <Button
              onClick={() => {
                onMarkForReview();
                onOpenChange(false);
              }}
            >
              Označi za pregled
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
