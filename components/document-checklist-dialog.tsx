"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { documentChecklistItems } from "@/lib/data";
import { CheckSquare, Square } from "lucide-react";
import { useState } from "react";

interface DocumentChecklistDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm?: () => void;
}

export function DocumentChecklistDialog({
  open,
  onOpenChange,
  onConfirm,
}: DocumentChecklistDialogProps) {
  const [checked, setChecked] = useState<Set<number>>(new Set());

  const toggle = (index: number) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md p-6">
        <DialogHeader>
          <DialogTitle>Dokument checklist</DialogTitle>
          <DialogDescription>
            Popis dokumentacije za zatražiti od stranke. U demo načinu ništa se ne šalje.
          </DialogDescription>
        </DialogHeader>
        <ul className="space-y-2">
          {documentChecklistItems.map((item, i) => (
            <li key={item}>
              <button
                onClick={() => toggle(i)}
                className="flex w-full items-start gap-3 rounded-lg border border-slate-200 p-3 text-left text-sm hover:bg-slate-50 transition-colors cursor-pointer"
              >
                {checked.has(i) ? (
                  <CheckSquare className="h-4 w-4 text-accent-royal shrink-0 mt-0.5" />
                ) : (
                  <Square className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
                )}
                <span className={checked.has(i) ? "text-slate-500 line-through" : "text-slate-700"}>
                  {item}
                </span>
              </button>
            </li>
          ))}
        </ul>
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Zatvori
          </Button>
          <Button
            onClick={() => {
              onConfirm?.();
              onOpenChange(false);
            }}
          >
            Pripremi zahtjev (demo)
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
