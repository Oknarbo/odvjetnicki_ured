import * as React from "react";
import { cn } from "@/lib/utils";
import { AlertCircle, Info, ShieldAlert } from "lucide-react";

const alertVariants = {
  default: "border-slate-200 bg-white text-slate-900",
  info: "border-blue-200 bg-blue-50 text-blue-900",
  warning: "border-amber-200 bg-amber-50 text-amber-900",
  destructive: "border-red-200 bg-red-50 text-red-900",
};

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof alertVariants;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = "default", ...props }, ref) => (
    <div
      ref={ref}
      role="alert"
      className={cn(
        "relative w-full rounded-lg border p-4",
        alertVariants[variant],
        className
      )}
      {...props}
    />
  )
);
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm opacity-90 [&_p]:leading-relaxed", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

function AlertIcon({ variant = "default" }: { variant?: keyof typeof alertVariants }) {
  const icons = {
    default: Info,
    info: Info,
    warning: AlertCircle,
    destructive: ShieldAlert,
  };
  const Icon = icons[variant];
  return <Icon className="h-4 w-4 shrink-0" />;
}

export { Alert, AlertTitle, AlertDescription, AlertIcon };
