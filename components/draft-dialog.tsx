"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

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
  title = "Nacrt odgovora — potrebno odobrenje",
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
            Administrativni nacrt — ne šalje se automatski.
          </DialogDescription>
        </DialogHeader>
        <pre className="whitespace-pre-wrap rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm leading-relaxed text-slate-700 font-sans">
          {body}
        </pre>
        <Alert variant="warning">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription className="text-xs">
            Ovo je administrativni nacrt. Ne šalje se bez pregleda i odobrenja odvjetnice.
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
