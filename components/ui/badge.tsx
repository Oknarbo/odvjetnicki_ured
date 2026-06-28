import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "border-transparent bg-accent-royal text-white",
        secondary: "border-transparent bg-slate-100 text-slate-700",
        outline: "border-slate-200 text-slate-700",
        success: "border-transparent bg-emerald-50 text-emerald-700 border-emerald-200",
        warning: "border-transparent bg-amber-50 text-amber-800 border-amber-200",
        danger: "border-transparent bg-red-50 text-red-700 border-red-200",
        gold: "border-transparent bg-[#f5f0e8] text-[#8b6914]",
        readonly: "border-blue-200 bg-blue-50 text-blue-800",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
