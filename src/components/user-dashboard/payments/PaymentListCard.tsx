import { CreditCard, Eye, FileText } from "lucide-react";

import { StatusBadge, type StatusBadgeVariant } from "@/components/shared/StatusBadge";
import type { Payment } from "@/types/payment";

interface PaymentListCardProps {
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

const PaymentListCard = ({ payment, onView, onInvoice }: PaymentListCardProps) => {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-border bg-card px-4 py-3 shadow-sm transition-colors hover:bg-secondary/40">
      <div className="icon-bg flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
        <CreditCard className="h-4 w-4 text-primary" />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="truncate text-sm font-semibold text-foreground">{payment.title}</h3>
        <p className="truncate text-xs text-muted-foreground">
          {payment.mentorName} · {payment.paymentMethod}
        </p>
      </div>

      <div className="hidden shrink-0 text-center text-xs text-muted-foreground sm:block">
        <p className="font-semibold text-foreground">{payment.paymentDate}</p>
        {payment.invoiceNumber}
      </div>

      <div className="w-16 shrink-0 text-right text-sm font-semibold text-foreground">
        {payment.currency}{payment.amount}
      </div>

      <StatusBadge variant={statusVariant[payment.status]} className="shrink-0">
        {payment.status}
      </StatusBadge>

      <div className="flex shrink-0 items-center gap-1.5">
        <button
          type="button"
          onClick={() => onView(payment)}
          aria-label="View payment details"
          title="Details"
          className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
        >
          <Eye className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => onInvoice(payment)}
          aria-label="Download invoice"
          title="Invoice"
          className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <FileText className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default PaymentListCard;
