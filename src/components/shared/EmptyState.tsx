import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface EmptyStateAction {
  label: string;
  onClick: () => void;
  icon?: LucideIcon;
}

interface EmptyStateProps {
  /** URL of a recolored illustration (from src/assets/illustrations), preferred over `icon`. */
  illustration?: string;
  /** Fallback icon well, used when no illustration is set. */
  icon?: LucideIcon;
  title: string;
  description?: string;
  action?: EmptyStateAction;
  secondaryAction?: EmptyStateAction;
  /** "lg" is the oversized treatment for onboarding/walkthrough cards. */
  size?: "default" | "lg";
  className?: string;
  children?: React.ReactNode;
}

/**
 * Shared empty/null-state shell used across all three dashboards, replacing
 * ~30 bespoke one-offs (divergent radii/colors, some raw emoji) with one
 * token-driven component. Prefer `illustration` (a recolored Yippy SVG) over
 * `icon` wherever one exists for the feature area.
 */
export function EmptyState({
  illustration,
  icon: Icon,
  title,
  description,
  action,
  secondaryAction,
  size = "default",
  className,
  children,
}: EmptyStateProps) {
  const isLarge = size === "lg";

  return (
    <div
      className={cn(
        "flex flex-col items-center rounded-2xl border border-border bg-card text-center",
        isLarge ? "px-8 py-20" : "px-8 py-14",
        className,
      )}
    >
      {illustration ? (
        <img
          src={illustration}
          alt=""
          className={isLarge ? "h-56 w-auto" : "h-36 w-auto"}
        />
      ) : Icon ? (
        <div
          className={cn(
            "icon-bg flex items-center justify-center rounded-full",
            isLarge ? "h-20 w-20" : "h-16 w-16",
          )}
        >
          <Icon className={isLarge ? "h-9 w-9 text-primary" : "h-7 w-7 text-primary"} />
        </div>
      ) : null}

      <h3 className={cn("mt-6 font-semibold text-foreground", isLarge ? "text-2xl" : "text-lg")}>
        {title}
      </h3>

      {description && (
        <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">{description}</p>
      )}

      {(action || secondaryAction) && (
        <div className="mt-6 flex items-center gap-3">
          {action && (
            <button
              type="button"
              onClick={action.onClick}
              className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
            >
              {action.icon && <action.icon className="h-4 w-4" />}
              {action.label}
            </button>
          )}
          {secondaryAction && (
            <button
              type="button"
              onClick={secondaryAction.onClick}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              {secondaryAction.icon && <secondaryAction.icon className="h-4 w-4" />}
              {secondaryAction.label}
            </button>
          )}
        </div>
      )}

      {children && <div className="mt-6 w-full">{children}</div>}
    </div>
  );
}

export default EmptyState;
