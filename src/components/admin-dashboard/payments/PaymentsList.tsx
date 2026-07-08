import type { AdminPayment } from "@/types/admin-payment";
import PaymentListCard from "./PaymentListCard";

interface PaymentsListProps {
  payments: AdminPayment[];

  onView: (payment: AdminPayment) => void;
  onRefund: (payment: AdminPayment) => void;
  onStatusChange: (payment: AdminPayment) => void;
  onDelete: (payment: AdminPayment) => void;

  className?: string;
}

export default function PaymentsList({
  payments,
  onView,
  onRefund,
  onStatusChange,
  onDelete,
  className = "",
}: PaymentsListProps) {
  if (payments.length === 0) {
    return null;
  }

  return (
    <section
      className={[
        "flex",
        "flex-col",
        "gap-6",
        className,
      ].join(" ")}
    >
      {payments.map((payment) => (
        <PaymentListCard
          key={payment.id}
          payment={payment}
          onView={onView}
          onRefund={onRefund}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
        />
      ))}
    </section>
  );
}