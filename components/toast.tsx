"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export function Toast({ message, onClose }: ToastProps) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(onClose, 3500);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-[100] flex items-center gap-3 rounded-lg border border-emerald-200 bg-white px-4 py-3 shadow-lg animate-slide-in-right"
      )}
    >
      <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
      <p className="text-sm text-slate-800">{message}</p>
      <button
        onClick={onClose}
        className="ml-2 rounded p-1 hover:bg-slate-100 cursor-pointer"
        aria-label="Zatvori"
      >
        <X className="h-4 w-4 text-slate-400" />
      </button>
    </div>
  );
}

export function useToast() {
  const [message, setMessage] = useState<string | null>(null);
  const showToast = (msg: string) => setMessage(msg);
  const hideToast = () => setMessage(null);
  return { message, showToast, hideToast };
}
