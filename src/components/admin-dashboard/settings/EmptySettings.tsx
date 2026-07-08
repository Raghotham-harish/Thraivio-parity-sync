import { Settings2 } from "lucide-react";

import { Button } from "@/components/ui/button";

interface EmptySettingsProps {
  onReset: () => void;
}

export default function EmptySettings({
  onReset,
}: EmptySettingsProps) {
  return (
    <section className="flex min-h-[420px] items-center justify-center rounded-3xl border border-dashed bg-background p-10">

      <div className="max-w-md text-center">

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-muted">

          <Settings2 className="h-10 w-10 text-muted-foreground" />

        </div>

        <h2 className="mt-6 text-2xl font-bold">
          No Settings Available
        </h2>

        <p className="mt-3 text-sm leading-6 text-muted-foreground">

          No configuration section is currently
          available. Try refreshing the page or
          reset the current filters to display
          all platform settings.

        </p>

        <Button
          className="mt-8 rounded-xl"
          onClick={onReset}
        >
          Reset View
        </Button>

      </div>

    </section>
  );
}