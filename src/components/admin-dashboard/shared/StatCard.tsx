import type { LucideIcon } from "lucide-react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

export type StatCardAccent =
  | "primary"
  | "chart-2"
  | "chart-3"
  | "chart-4"
  | "chart-5"
  | "destructive";

const accentClasses: Record<StatCardAccent, { bg: string; fg: string }> = {
  primary: { bg: "bg-primary/10", fg: "text-primary" },
  "chart-2": { bg: "bg-chart-2/10", fg: "text-chart-2" },
  "chart-3": { bg: "bg-chart-3/10", fg: "text-chart-3" },
  "chart-4": { bg: "bg-chart-4/10", fg: "text-chart-4" },
  "chart-5": { bg: "bg-chart-5/10", fg: "text-chart-5" },
  destructive: { bg: "bg-destructive/10", fg: "text-destructive" },
};

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  accent?: StatCardAccent;
  change?: string;
  trend?: "up" | "down";
  description?: string;
  onClick?: () => void;
  className?: string;
}

/**
 * Shared admin-dashboard stat tile, driven entirely by the Thraivio
 * semantic tokens (bg-card, border-border, text-foreground, chart-*)
 * instead of a per-page hardcoded Tailwind color map. Swap a feature
 * area's hand-rolled stat card for this to pick up the brand + dark
 * mode automatically.
 */
export function StatCard({
  title,
  value,
  icon: Icon,
  accent = "primary",
  change,
  trend = "up",
  description,
  onClick,
  className,
}: StatCardProps) {
  const colors = accentClasses[accent];
  const Comp = onClick ? "button" : "div";

  return (
    <Comp
      onClick={onClick}
      className={cn(
        "group relative overflow-hidden rounded-[28px] border border-border bg-card p-6 text-left shadow-sm transition-all duration-300",
        onClick && "hover:-translate-y-1 hover:shadow-lg",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className="mt-3 text-3xl font-bold text-foreground">{value}</h3>
        </div>

        <div
          className={cn(
            "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl",
            colors.bg,
          )}
        >
          <Icon className={cn("h-6 w-6", colors.fg)} />
        </div>
      </div>

      {(change || description) && (
        <div className="mt-6 flex items-center justify-between gap-3">
          {change && (
            <span
              className={cn(
                "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold",
                trend === "up"
                  ? "bg-chart-3/10 text-chart-3"
                  : "bg-destructive/10 text-destructive",
              )}
            >
              {trend === "up" ? (
                <ArrowUpRight className="h-3.5 w-3.5" />
              ) : (
                <ArrowDownRight className="h-3.5 w-3.5" />
              )}
              {change}
            </span>
          )}

          {description && (
            <span className="text-xs text-muted-foreground">{description}</span>
          )}
        </div>
      )}
    </Comp>
  );
}

export default StatCard;
