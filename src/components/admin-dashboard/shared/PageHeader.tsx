import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}

/**
 * Shared section header for admin-dashboard pages: eyebrow badge +
 * Fraunces display title + muted description + optional trailing
 * action. Replaces the one-off header markup each feature area
 * (dashboard, users, mentors, ...) currently re-implements.
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
          <span className="inline-flex items-center rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-primary">
            {eyebrow}
          </span>
        )}

        <h2 className="mt-4 font-heading text-3xl font-medium text-foreground">
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
