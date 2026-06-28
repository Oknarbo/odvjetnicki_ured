"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { securityPrinciples } from "@/lib/data";
import { Shield } from "lucide-react";

interface SecurityPrinciplesProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SecurityPrinciples({ open, onOpenChange }: SecurityPrinciplesProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl p-6">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-accent-royal" />
            <DialogTitle>Dizajnirano za odvjetnički ured: sigurnost prije automatizacije</DialogTitle>
          </div>
        </DialogHeader>
        <Separator className="my-4" />
        <div className="space-y-4">
          {securityPrinciples.map((item, i) => (
            <div key={item.title}>
              <h4 className="font-medium text-slate-900">
                {i + 1}. {item.title}
              </h4>
              <p className="mt-1 text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
