"use client";

import {
  AlertTriangle,
  Briefcase,
  Clock,
  FileText,
  Mail,
} from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { kpiStats } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  mail: Mail,
  briefcase: Briefcase,
  file: FileText,
  clock: Clock,
  alert: AlertTriangle,
};

export function TopStats() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
      {kpiStats.map((stat, i) => {
        const Icon = iconMap[stat.icon] ?? Briefcase;
        return (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-2xl font-semibold text-slate-900">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-700">
                      {stat.label.replace(/^\d+\s/, "")}
                    </p>
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100">
                    <Icon className="h-4 w-4 text-accent-royal" />
                  </div>
                </div>
                <p className="mt-2 text-xs text-slate-500">{stat.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
