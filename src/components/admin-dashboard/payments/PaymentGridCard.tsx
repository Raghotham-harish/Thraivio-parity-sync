import type { AdminPayment } from "@/types/admin-payment";

import {
  CreditCard,
  Eye,
  RotateCcw,
  Trash2,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

interface PaymentGridCardProps {
  payment: AdminPayment;

  onView: (payment: AdminPayment) => void;

  onRefund: (payment: AdminPayment) => void;

  onStatusChange: (payment: AdminPayment) => void;

  onDelete: (payment: AdminPayment) => void;
}

const statusVariant = {
  paid: "default",
  pending: "secondary",
  failed: "destructive",
  refunded: "outline",
  cancelled: "secondary",
} as const;

export default function PaymentGridCard({
  payment,
  onView,
  onRefund,
  onStatusChange,
  onDelete,
}: PaymentGridCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[11px] uppercase tracking-widest text-muted-foreground">
            Payment
          </p>
          <h3 className="truncate font-semibold text-foreground">
            {payment.paymentNumber}
          </h3>
        </div>
        <Badge variant={statusVariant[payment.status]} className="shrink-0 capitalize">
          {payment.status}
        </Badge>
      </div>

      {/* Student / Mentor */}
      <div className="mt-3 flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2">
          <img
            src={payment.student.avatar}
            alt={payment.student.name}
            className="h-8 w-8 shrink-0 rounded-full object-cover"
          />
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-foreground">
              {payment.student.name}
            </p>
            <p className="text-[11px] text-muted-foreground">Student</p>
          </div>
        </div>
        <div className="flex min-w-0 items-center gap-2">
          <div className="min-w-0 text-right">
            <p className="truncate text-sm font-medium text-foreground">
              {payment.mentor.name}
            </p>
            <p className="text-[11px] text-muted-foreground">Mentor</p>
          </div>
          <img
            src={payment.mentor.avatar}
            alt={payment.mentor.name}
            className="h-8 w-8 shrink-0 rounded-full object-cover"
          />
        </div>
      </div>

      <p className="mt-3 truncate text-sm text-muted-foreground">
        {payment.purchase.title}
      </p>

      {/* Meta row */}
      <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <CreditCard className="h-3.5 w-3.5" />
          {payment.payment.paymentMethod.replace("-", " ")}
        </span>
        <span>
          {new Date(payment.payment.paymentDate).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </span>
        <span className="text-base font-bold text-foreground">
          ₹{payment.breakdown.totalAmount.toLocaleString("en-IN")}
        </span>
      </div>

      {/* Actions */}
      <div className="mt-3 flex items-center gap-2">
        <button
          type="button"
          onClick={() => onView(payment)}
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
        >
          <Eye className="h-4 w-4" />
          View
        </button>

        <button
          type="button"
          onClick={() => onStatusChange(payment)}
          aria-label="Update payment status"
          title="Update status"
          className="rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <CreditCard className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={() => onRefund(payment)}
          aria-label="Refund payment"
          title="Refund"
          className="rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:bg-[#FFFBEB] hover:text-[#B45309]"
        >
          <RotateCcw className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={() => onDelete(payment)}
          aria-label="Delete payment"
          title="Delete"
          className="rounded-lg border border-border p-2 text-red-600 transition-colors hover:bg-[#FFDAD6]"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
