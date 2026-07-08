import {
  CreditCard,
  Plus,
} from "lucide-react";

import { Button } from "@/components/ui/button";

interface PaymentsEmptyStateProps {
  onCreatePayment: () => void;
}

export default function PaymentsEmptyState({
  onCreatePayment,
}: PaymentsEmptyStateProps) {
  return (
    <div className="flex min-h-[450px] flex-col items-center justify-center rounded-3xl border border-dashed bg-background px-6 text-center">

      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">

        <CreditCard className="h-12 w-12 text-primary" />

      </div>

      <h2 className="mt-8 text-2xl font-bold">
        No Payments Found
      </h2>

      <p className="mt-3 max-w-lg text-muted-foreground">
        No payment records are available yet.
        Create your first payment or adjust
        your filters to view transactions.
      </p>

      <Button
        className="mt-8 rounded-xl"
        onClick={onCreatePayment}
      >
        <Plus className="mr-2 h-4 w-4" />
        Create Payment
      </Button>

    </div>
  );
}