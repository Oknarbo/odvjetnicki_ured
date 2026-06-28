"use client";

import {
  Briefcase,
  CalendarClock,
  FileEdit,
  FileText,
  LayoutDashboard,
  Mail,
  Scale,
  Settings,
  Shield,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { navItems } from "@/lib/data";
import type { DashboardSection } from "@/lib/types";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "layout-dashboard": LayoutDashboard,
  briefcase: Briefcase,
  mail: Mail,
  "file-text": FileText,
  "calendar-clock": CalendarClock,
  "file-edit": FileEdit,
  shield: Shield,
  settings: Settings,
};

interface SidebarProps {
  activeSection: DashboardSection;
  onNavigate: (section: DashboardSection) => void;
  className?: string;
}

export function Sidebar({ activeSection, onNavigate, className }: SidebarProps) {
  return (
    <aside
      className={cn(
        "flex h-full w-[260px] shrink-0 flex-col bg-sidebar text-sidebar-foreground",
        className
      )}
    >
      <div className="border-b border-slate-700/50 px-5 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-muted/20">
            <Scale className="h-5 w-5 text-accent-muted" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Digitalni ured</p>
            <p className="text-xs text-slate-400">Legal office assistant</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 space-y-0.5 px-3 py-4">
        {navItems.map((item) => {
          const Icon = iconMap[item.icon] ?? LayoutDashboard;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={cn(
                "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors cursor-pointer",
                isActive
                  ? "bg-white/10 text-white font-medium"
                  : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
              )}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="border-t border-slate-700/50 px-5 py-4">
        <p className="text-xs font-medium text-accent-muted">Demo mode</p>
        <p className="mt-0.5 text-xs text-slate-500">Svi podaci su izmišljeni</p>
      </div>
    </aside>
  );
}
