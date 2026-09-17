import { CreditCard, Eye, FileText } from "lucide-react";

import { StatusBadge, type StatusBadgeVariant } from "@/components/shared/StatusBadge";
import type { Payment } from "@/types/payment";

interface PaymentGridCardProps {
  payment: Payment;

  onView: (payment: Payment) => void;

  onInvoice: (payment: Payment) => void;
}

const statusVariant: Record<Payment["status"], StatusBadgeVariant> = {
  paid: "success",
  pending: "warning",
  failed: "error",
  refunded: "error",
};

const PaymentGridCard = ({ payment, onView, onInvoice }: PaymentGridCardProps) => {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:shadow-md">
      {/* Title + status */}
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <h3 className="truncate font-semibold text-foreground">{payment.title}</h3>
          <p className="truncate text-xs text-muted-foreground">
            {payment.category} · {payment.mentorName}
          </p>
        </div>
        <StatusBadge variant={statusVariant[payment.status]} className="shrink-0">
          {payment.status}
        </StatusBadge>
      </div>

      {/* Stat strip */}
      <div className="mt-3 grid grid-cols-2 divide-x divide-border rounded-xl bg-secondary py-2 text-center">
        <div>
          <p className="text-xs font-bold text-foreground">
            {payment.currency}{payment.amount}
          </p>
          <p className="text-[10px] text-muted-foreground">Amount</p>
        </div>
        <div>
          <p className="text-xs font-bold text-foreground">{payment.paymentDate}</p>
          <p className="text-[10px] text-muted-foreground">Date</p>
        </div>
      </div>

      {/* Meta */}
      <div className="mt-2.5 flex items-center justify-between text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <CreditCard className="h-3.5 w-3.5" />
          {payment.paymentMethod}
        </span>
        <span>{payment.invoiceNumber}</span>
      </div>

      {/* Actions */}
      <div className="mt-3 flex items-center gap-2">
        <button
          type="button"
          onClick={() => onView(payment)}
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
        >
          <Eye className="h-4 w-4" />
          Details
        </button>
        <button
          type="button"
          onClick={() => onInvoice(payment)}
          aria-label="Download invoice"
          title="Invoice"
          className="rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <FileText className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default PaymentGridCard;
