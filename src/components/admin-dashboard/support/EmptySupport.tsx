import { Inbox } from "lucide-react";

import { Button } from "@/components/ui/button";

interface EmptySupportProps {
  onResetFilters: () => void;
}

export default function EmptySupport({
  onResetFilters,
}: EmptySupportProps) {
  return (
    <section className="flex min-h-[420px] items-center justify-center rounded-2xl border border-dashed bg-background p-10">

      <div className="max-w-md text-center">

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-muted">

          <Inbox className="h-10 w-10 text-muted-foreground" />

        </div>

        <h2 className="mt-6 text-2xl font-bold">
          No Support Tickets Found
        </h2>

        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          No support tickets match your
          current search or selected
          filters. Try changing the
          filters or reset them to view
          all available support requests.
        </p>

        <Button
          className="mt-8 rounded-xl"
          onClick={onResetFilters}
        >
          Reset Filters
        </Button>

      </div>

    </section>
  );
}