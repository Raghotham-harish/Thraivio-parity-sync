import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";

interface MobileNavDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  children: React.ReactNode;
}

/** Mobile nav drawer shell, built on the existing Sheet primitive. Renders
 * whatever sidebar content is passed as `children` inside a slide-in panel. */
export function MobileNavDrawer({ open, onOpenChange, title, children }: MobileNavDrawerProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="w-72 max-w-[85vw] gap-0 p-0">
        <SheetTitle className="sr-only">{title}</SheetTitle>
        {children}
      </SheetContent>
    </Sheet>
  );
}

interface MobileNavTriggerProps {
  onClick: () => void;
}

/** Hamburger button — visible only below the `lg` breakpoint. */
export function MobileNavTrigger({ onClick }: MobileNavTriggerProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Open navigation menu"
      className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary lg:hidden"
    >
      <Menu className="h-6 w-6" />
    </button>
  );
}

export default MobileNavDrawer;
