import type { ReactNode } from "react";

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

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}

/**
 * Shared section header for admin-dashboard pages, matching the real
 * Thraivio pattern (diamond accent + uppercase royal-blue label, Fraunces
 * title at weight 500) used across the marketing site's section headers.
 */
export function PageHeader({
  eyebrow,
  title,
  description,
  action,
  className,
}: PageHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between",
        className,
      )}
    >
      <div>
        {eyebrow && (
          <p className="mb-2 flex items-center text-[11px] font-bold uppercase tracking-widest text-primary">
            <DiamondAccent />
            {eyebrow}
          </p>
        )}

        <h2
          className="text-3xl font-medium text-foreground"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {title}
        </h2>

        {description && (
          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
            {description}
          </p>
        )}
      </div>

      {action}
    </div>
  );
}

export default PageHeader;
