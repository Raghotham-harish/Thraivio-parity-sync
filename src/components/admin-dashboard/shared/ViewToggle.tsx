import type { LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ViewToggleOption<T extends string> {
  value: T;
  icon: LucideIcon;
  label?: string;
}

interface ViewToggleProps<T extends string> {
  value: T;
  onChange: (value: T) => void;
  options: ViewToggleOption<T>[];
  className?: string;
}

/**
 * Shared grid/list/table view switcher. Uses the Button component's
 * existing `default` (primary blue) / `ghost` variants for active/inactive
 * state instead of a hardcoded per-page accent color (bg-indigo-600,
 * bg-blue-600, ...), so the active state is always the same brand blue.
 */
export function ViewToggle<T extends string>({
  value,
  onChange,
  options,
  className,
}: ViewToggleProps<T>) {
  return (
    <div
      className={cn(
        "flex items-center overflow-hidden rounded-xl border border-border",
        className,
      )}
    >
      {options.map((option) => (
        <Button
          key={option.value}
          type="button"
          variant={value === option.value ? "default" : "ghost"}
          size={option.label ? "default" : "icon"}
          className="rounded-none"
          onClick={() => onChange(option.value)}
        >
          <option.icon className="h-4 w-4" />
          {option.label}
        </Button>
      ))}
    </div>
  );
}

export default ViewToggle;
