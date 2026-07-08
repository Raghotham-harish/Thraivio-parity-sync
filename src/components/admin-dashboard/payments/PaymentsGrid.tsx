import type { AdminPayment } from "@/types/admin-payment";
import PaymentGridCard from "./PaymentGridCard";

interface PaymentsGridProps {
  payments: AdminPayment[];

  onView: (payment: AdminPayment) => void;
  onRefund: (payment: AdminPayment) => void;
  onStatusChange: (payment: AdminPayment) => void;
  onDelete: (payment: AdminPayment) => void;

  className?: string;
}

export default function PaymentsGrid({
  payments,
  onView,
  onRefund,
  onStatusChange,
  onDelete,
  className = "",
}: PaymentsGridProps) {
  if (payments.length === 0) {
    return null;
  }

  return (
    <section
      className={[
        "grid",
        "grid-cols-1",
        "gap-6",
        "lg:grid-cols-2",
        "2xl:grid-cols-3",
        className,
      ].join(" ")}
    >
      {payments.map((payment) => (
        <PaymentGridCard
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