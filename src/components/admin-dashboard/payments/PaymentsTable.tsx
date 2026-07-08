import type { AdminPayment } from "@/types/admin-payment";
import PaymentTableRow from "./PaymentTableRow";

interface PaymentsTableProps {
  payments: AdminPayment[];

  onView: (payment: AdminPayment) => void;
  onRefund: (payment: AdminPayment) => void;
  onStatusChange: (payment: AdminPayment) => void;
  onDelete: (payment: AdminPayment) => void;

  className?: string;
}

export default function PaymentsTable({
  payments,
  onView,
  onRefund,
  onStatusChange,
  onDelete,
  className = "",
}: PaymentsTableProps) {
  if (payments.length === 0) {
    return null;
  }

  return (
    <div
      className={[
        "overflow-hidden rounded-3xl border bg-background shadow-sm",
        className,
      ].join(" ")}
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1200px] border-collapse">

          <thead className="bg-muted/50">

            <tr className="border-b">

              <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Student
              </th>

              <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Mentor
              </th>

              <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Purchase
              </th>

              <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Amount
              </th>

              <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Status
              </th>

              <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Payment Date
              </th>

              <th className="w-[70px] px-4 py-4 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {payments.map((payment) => (
              <PaymentTableRow
                key={payment.id}
                payment={payment}
                onView={onView}
                onRefund={onRefund}
                onStatusChange={onStatusChange}
                onDelete={onDelete}
              />
            ))}

          </tbody>

        </table>
      </div>
    </div>
  );
}