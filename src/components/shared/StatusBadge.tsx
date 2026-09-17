import { cn } from "@/lib/utils";

export type StatusBadgeVariant = "success" | "warning" | "error" | "neutral" | "info";

const variantStyle: Record<StatusBadgeVariant, { color: string; background: string }> = {
  success: { color: "#065F46", background: "#ECFDF5" },
  warning: { color: "#B45309", background: "#FFFBEB" },
  error: { color: "#BA1A1A", background: "#FFDAD6" },
  info: { color: "#2563EB", background: "#EFF6FF" },
  neutral: { color: "#5A6479", background: "#ECEEF2" },
};

interface StatusBadgeProps {
  variant: StatusBadgeVariant;
  children: React.ReactNode;
  className?: string;
}

/**
 * Shared status pill, using the design system's exact status colors
 * (success/warning/error/info/neutral) instead of the Tailwind palette
 * shades (emerald-100/amber-100/red-100/...) scattered across the old
 * per-row status badges.
 */
export function StatusBadge({ variant, children, className }: StatusBadgeProps) {
  const style = variantStyle[variant];
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-bold capitalize",
        className,
      )}
      style={{ color: style.color, background: style.background }}
    >
      {children}
    </span>
  );
}

export default StatusBadge;
