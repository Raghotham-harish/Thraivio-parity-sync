import type { LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function DiamondAccent() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      aria-hidden="true"
      className="mr-2 inline-block shrink-0"
    >
      <rect
        x="5"
        y="0.5"
        width="6.36"
        height="6.36"
        rx="0.8"
        transform="rotate(45 5 0.5)"
        fill="#1DD7A5"
      />
    </svg>
  );
}

interface FeatureHeaderMeta {
  icon?: LucideIcon;
  label: string;
}

interface FeatureHeaderAction {
  label: string;
  icon?: LucideIcon;
  onClick: () => void;
}

interface FeatureHeaderProps {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
  meta?: FeatureHeaderMeta[];
  primaryAction?: FeatureHeaderAction;
  secondaryAction?: FeatureHeaderAction;
  /** Additional outline-style actions beyond the primary/secondary pair. */
  extraActions?: FeatureHeaderAction[];
  className?: string;
}

/**
 * Shared page-top header for admin-dashboard feature areas. Replaces the
 * per-page hand-colored gradient banners (each a different color combo)
 * with one token-driven pattern, matching the real design system's
 * button hierarchy (primary blue used sparingly, never per-page gradients)
 * and eyebrow convention (diamond accent + uppercase label).
 */
export function FeatureHeader({
  icon: Icon,
  eyebrow,
  title,
  description,
  meta,
  primaryAction,
  secondaryAction,
  extraActions,
  className,
}: FeatureHeaderProps) {
  return (
    <section
      className={cn(
        "flex flex-col gap-6 rounded-2xl border border-border bg-card p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between",
        className,
      )}
    >
      <div className="flex items-start gap-5">
        <div className="icon-bg flex h-14 w-14 shrink-0 items-center justify-center rounded-xl">
          <Icon className="h-6 w-6 text-primary" />
        </div>

        <div className="space-y-3">
          <p className="flex items-center text-[11px] font-bold uppercase tracking-widest text-primary">
            <DiamondAccent />
            {eyebrow}
          </p>

          <div>
            <h1
              className="text-3xl font-medium text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {title}
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
              {description}
            </p>
          </div>

          {meta && meta.length > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              {meta.map((item) => (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold text-foreground"
                >
                  {item.icon && <item.icon className="h-3.5 w-3.5 text-primary" />}
                  {item.label}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {(primaryAction || secondaryAction || extraActions?.length) && (
        <div className="flex flex-wrap gap-3">
          {extraActions?.map((action) => (
            <Button
              key={action.label}
              variant="outline"
              className="rounded-xl"
              onClick={action.onClick}
            >
              {action.icon && <action.icon className="mr-2 h-4 w-4" />}
              {action.label}
            </Button>
          ))}

          {secondaryAction && (
            <Button
              variant="outline"
              className="rounded-xl"
              onClick={secondaryAction.onClick}
            >
              {secondaryAction.icon && (
                <secondaryAction.icon className="mr-2 h-4 w-4" />
              )}
              {secondaryAction.label}
            </Button>
          )}

          {primaryAction && (
            <Button className="rounded-xl" onClick={primaryAction.onClick}>
              {primaryAction.icon && (
                <primaryAction.icon className="mr-2 h-4 w-4" />
              )}
              {primaryAction.label}
            </Button>
          )}
        </div>
      )}
    </section>
  );
}

export default FeatureHeader;
