import { EmptyState } from "@/components/shared/EmptyState";
import paymentIllustration from "@/assets/illustrations/payment.svg";

interface EmptyPaymentsProps {
  onBrowsePrograms: () => void;

  onBrowseSessions: () => void;

  onBrowseEvents: () => void;
}

const EmptyPayments = ({
  onBrowsePrograms,
  onBrowseSessions,
}: EmptyPaymentsProps) => {
  return (
    <EmptyState
      illustration={paymentIllustration}
      title="No Payments Yet"
      description="Enroll in a program or book a session and your payment history, invoices, and receipts will appear here."
      action={{
        label: "Browse Programs",
        onClick: onBrowsePrograms,
      }}
      secondaryAction={{
        label: "Book Session",
        onClick: onBrowseSessions,
      }}
    />
  );
};

export default EmptyPayments;
