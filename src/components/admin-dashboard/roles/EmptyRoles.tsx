import { ShieldOff } from "lucide-react";

import { Button } from "@/components/ui/button";

interface EmptyRolesProps {
  onResetFilters: () => void;
}

export default function EmptyRoles({
  onResetFilters,
}: EmptyRolesProps) {
  return (
    <section className="flex min-h-[420px] items-center justify-center rounded-3xl border border-dashed bg-background p-10">

      <div className="max-w-md text-center">

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-muted">

          <ShieldOff className="h-10 w-10 text-muted-foreground" />

        </div>

        <h2 className="mt-6 text-2xl font-bold">
          No Roles Found
        </h2>

        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          No administrator roles match your
          current search or applied filters.
          Try adjusting your filters or reset
          them to display all available roles.
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