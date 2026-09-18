import { Plus } from "lucide-react";

import EmptyState from "@/components/shared/EmptyState";
import paymentIllustration from "@/assets/illustrations/payment.svg";

interface PaymentsEmptyStateProps {
  onCreatePayment: () => void;
}

export default function PaymentsEmptyState({
  onCreatePayment,
}: PaymentsEmptyStateProps) {
  return (
    <EmptyState
      illustration={paymentIllustration}
      title="No Payments Found"
      description="No payment records are available yet."
      action={{
        label: "Create Payment",
        onClick: onCreatePayment,
        icon: Plus,
      }}
    />
  );
}
