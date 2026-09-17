import type { LucideIcon } from "lucide-react";

import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface DialogHeaderBandProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

/**
 * Shared dialog/drawer header band for admin-dashboard modals. Replaces the
 * per-dialog solid `bg-primary` header (royal blue used as a full-bleed
 * fill, which the real design system reserves for buttons/progress bars
 * only) with the same neutral-card + tinted icon-well pattern already used
 * by the page-level FeatureHeader.
 */
export function DialogHeaderBand({
  icon: Icon,
  title,
  description,
}: DialogHeaderBandProps) {
  return (
    <div className="flex items-center gap-5 border-b border-border bg-card p-6">
      <div className="icon-bg flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl">
        <Icon className="h-7 w-7 text-primary" />
      </div>

      <DialogHeader className="gap-1">
        <DialogTitle
          className="text-xl font-medium text-foreground"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {title}
        </DialogTitle>
        <DialogDescription className="text-sm text-muted-foreground">
          {description}
        </DialogDescription>
      </DialogHeader>
    </div>
  );
}

export default DialogHeaderBand;
