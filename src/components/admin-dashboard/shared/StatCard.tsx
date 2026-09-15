import type { LucideIcon } from "lucide-react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

export type StatCardAccent = "default" | "success";

/**
 * Icon well background — only two variants exist in the real Thraivio
 * design system (.icon-bg / .icon-bg-mint), not a per-category rainbow.
 */
const iconWellClass: Record<StatCardAccent, string> = {
  default: "icon-bg",
  success: "icon-bg-mint",
};

const iconColor: Record<StatCardAccent, string> = {
  default: "#2563EB",
  success: "#1DD7A5",
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
 * Shared admin-dashboard stat tile. Per the design system's stat-tile rule,
 * the value is always a single dark color (never tinted per item) and the
 * icon well uses only the two documented gradients, not an arbitrary accent.
 */
export function StatCard({
  title,
  value,
  icon: Icon,
  accent = "default",
  change,
  trend = "up",
  description,
  onClick,
  className,
}: StatCardProps) {
  const Comp = onClick ? "button" : "div";

  return (
    <Comp
      onClick={onClick}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-card p-6 text-left shadow-sm transition-all duration-300",
        onClick && "hover:-translate-y-1 hover:shadow-lg",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3
            className="mt-3 text-3xl font-semibold text-[#0A192F] dark:text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {value}
          </h3>
        </div>

        <div
          className={cn(
            "flex h-14 w-14 shrink-0 items-center justify-center rounded-xl",
            iconWellClass[accent],
          )}
        >
          <Icon className="h-6 w-6" style={{ color: iconColor[accent] }} />
        </div>
      </div>

      {(change || description) && (
        <div className="mt-6 flex items-center justify-between gap-3">
          {change && (
            <span
              className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold"
              style={
                trend === "up"
                  ? { color: "#065F46", background: "#ECFDF5" }
                  : { color: "#B45309", background: "#FFFBEB" }
              }
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
