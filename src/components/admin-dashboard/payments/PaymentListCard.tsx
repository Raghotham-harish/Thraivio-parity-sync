import type { AdminPayment } from "@/types/admin-payment";

import {
  Eye,
  MoreVertical,
  RotateCcw,
  Trash2,
  CreditCard,
  CalendarDays,
  Building2,
  User,
  Receipt,
  FileText,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface PaymentListCardProps {
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

export default function PaymentListCard({
  payment,
  onView,
  onRefund,
  onStatusChange,
  onDelete,
}: PaymentListCardProps) {
  return (
    <Card className="overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-lg">

      <CardContent className="p-6">

        <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">

          <div className="flex flex-1 items-center gap-5">

            <img
              src={payment.student.avatar}
              alt={payment.student.name}
              className="h-16 w-16 rounded-2xl object-cover"
            />

            <div className="min-w-0 flex-1">

              <div className="flex flex-wrap items-center gap-3">

                <h3 className="text-lg font-semibold truncate">
                  {payment.student.name}
                </h3>

                <Badge variant={statusVariant[payment.status]}>
                  {payment.status}
                </Badge>

              </div>

              <p className="truncate text-sm text-muted-foreground mt-1">
                {payment.student.email}
              </p>

              <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">

                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {payment.mentor.name}
                </div>

                <div className="flex items-center gap-2">
                  <Building2 className="h-4 w-4" />
                  {payment.mentor.company}
                </div>

                <div className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  {payment.purchase.bookingDate}
                </div>

              </div>

            </div>

          </div>

          <div className="flex items-center gap-3">

            <div className="text-right">

              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Total
              </p>

              <h2 className="text-2xl font-bold">
                ₹{payment.breakdown.totalAmount.toLocaleString("en-IN")}
              </h2>

              <p className="text-sm text-muted-foreground">
                {payment.payment.paymentMethod.replace("-", " ")}
              </p>

            </div>

            <DropdownMenu>

              <DropdownMenuTrigger asChild>

                <Button
                  variant="ghost"
                  size="icon"
                >
                  <MoreVertical className="h-5 w-5" />
                </Button>

              </DropdownMenuTrigger>

              <DropdownMenuContent align="end">

                <DropdownMenuItem
                  onClick={() => onView(payment)}
                >
                  <Eye className="mr-2 h-4 w-4" />
                  View Details
                </DropdownMenuItem>

                <DropdownMenuItem
                  onClick={() => onStatusChange(payment)}
                >
                  <CreditCard className="mr-2 h-4 w-4" />
                  Update Status
                </DropdownMenuItem>

                <DropdownMenuItem
                  onClick={() => onRefund(payment)}
                >
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Refund
                </DropdownMenuItem>

                <DropdownMenuItem
                  className="text-destructive"
                  onClick={() => onDelete(payment)}
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete
                </DropdownMenuItem>

              </DropdownMenuContent>

            </DropdownMenu>

          </div>

        </div>
                {/* Purchase Details */}

        <div className="mt-6 grid gap-4 lg:grid-cols-4">

          <div className="rounded-2xl border bg-muted/30 p-4">

            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Purchase
            </p>

            <h4 className="mt-2 font-semibold">
              {payment.purchase.title}
            </h4>

            <p className="mt-1 text-sm text-muted-foreground">
              {payment.purchase.planType}
            </p>

            <Badge
              variant="outline"
              className="mt-3"
            >
              {payment.purchase.category}
            </Badge>

          </div>

          <div className="rounded-2xl border bg-muted/30 p-4">

            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Transaction
            </p>

            <h4 className="mt-2 break-all text-sm font-medium">
              {payment.payment.transactionId}
            </h4>

            <p className="mt-2 text-xs text-muted-foreground">
              Order ID
            </p>

            <p className="break-all text-sm">
              {payment.payment.orderId}
            </p>

          </div>

          <div className="rounded-2xl border bg-muted/30 p-4">

            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Gateway
            </p>

            <h4 className="mt-2 text-base font-semibold capitalize">
              {payment.payment.paymentGateway}
            </h4>

            <p className="mt-2 text-sm text-muted-foreground capitalize">
              {payment.payment.paymentMethod.replace("-", " ")}
            </p>

          </div>

          <div className="rounded-2xl border bg-muted/30 p-4">

            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Booking
            </p>

            <h4 className="mt-2 font-semibold">
              {payment.purchase.bookingDate}
            </h4>

            <p className="mt-1 text-sm text-muted-foreground">
              {payment.purchase.bookingTime}
            </p>

            <p className="mt-1 text-sm text-muted-foreground">
              {payment.purchase.duration}
            </p>

          </div>

        </div>

        {/* Amount Summary */}

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">

          <div className="rounded-xl border p-4">

            <p className="text-xs text-muted-foreground">
              Subtotal
            </p>

            <h4 className="mt-2 text-lg font-semibold">
              ₹{payment.breakdown.subtotal.toLocaleString("en-IN")}
            </h4>

          </div>

          <div className="rounded-xl border p-4">

            <p className="text-xs text-muted-foreground">
              Discount
            </p>

            <h4 className="mt-2 text-lg font-semibold text-[#0F8F65]">
              ₹{payment.breakdown.discount.toLocaleString("en-IN")}
            </h4>

          </div>

          <div className="rounded-xl border p-4">

            <p className="text-xs text-muted-foreground">
              Tax
            </p>

            <h4 className="mt-2 text-lg font-semibold">
              ₹{payment.breakdown.tax.toLocaleString("en-IN")}
            </h4>

          </div>

          <div className="rounded-xl border p-4">

            <p className="text-xs text-muted-foreground">
              Platform Fee
            </p>

            <h4 className="mt-2 text-lg font-semibold">
              ₹{payment.breakdown.platformFee.toLocaleString("en-IN")}
            </h4>

          </div>

          <div className="rounded-xl border border-primary bg-primary/5 p-4">

            <p className="text-xs text-muted-foreground">
              Mentor Payout
            </p>

            <h4 className="mt-2 text-lg font-bold text-primary">
              ₹{payment.breakdown.mentorPayout.toLocaleString("en-IN")}
            </h4>

          </div>

        </div>
                {/* Invoice & Receipt */}

        <div className="mt-6 grid gap-4 lg:grid-cols-2">

          <div className="rounded-2xl border p-5">

            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Invoice
            </p>

            <h4 className="mt-2 font-semibold">
              {payment.invoice.number || "Not Generated"}
            </h4>

            <p className="mt-1 break-all text-sm text-muted-foreground">
              {payment.invoice.id || "--"}
            </p>

            <Button
              variant="outline"
              className="mt-4 w-full rounded-xl"
              disabled={!payment.invoice.url}
            >
              <FileText className="mr-2 h-4 w-4" />
              View Invoice
            </Button>

          </div>

          <div className="rounded-2xl border p-5">

            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Receipt
            </p>

            <h4 className="mt-2 font-semibold">
              {payment.receipt.number || "Not Generated"}
            </h4>

            <p className="mt-1 break-all text-sm text-muted-foreground">
              {payment.receipt.id || "--"}
            </p>

            <Button
              variant="outline"
              className="mt-4 w-full rounded-xl"
              disabled={!payment.receipt.url}
            >
              <Receipt className="mr-2 h-4 w-4" />
              View Receipt
            </Button>

          </div>

        </div>

        {/* Billing Information */}

        <div className="mt-6 rounded-2xl border p-5">

          <h4 className="mb-4 font-semibold">
            Billing Information
          </h4>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

            <div>

              <p className="text-xs text-muted-foreground">
                Billing Name
              </p>

              <p className="mt-1 font-medium">
                {payment.billing.name}
              </p>

            </div>

            <div>

              <p className="text-xs text-muted-foreground">
                Billing Email
              </p>

              <p className="mt-1 break-all font-medium">
                {payment.billing.email}
              </p>

            </div>

            <div>

              <p className="text-xs text-muted-foreground">
                Phone
              </p>

              <p className="mt-1 font-medium">
                {payment.billing.phone}
              </p>

            </div>

            <div>

              <p className="text-xs text-muted-foreground">
                Country
              </p>

              <p className="mt-1 font-medium">
                {payment.billing.country}
              </p>

            </div>

          </div>

        </div>

        {/* Refund */}

        {payment.refund.status !== "not-requested" && (
          <div className="mt-6 rounded-2xl border border-orange-200 bg-orange-50/40 p-5 dark:border-orange-900 dark:bg-orange-950/20">

            <h4 className="mb-4 font-semibold">
              Refund Details
            </h4>

            <div className="grid gap-4 md:grid-cols-3">

              <div>

                <p className="text-xs text-muted-foreground">
                  Status
                </p>

                <Badge className="mt-2">
                  {payment.refund.status}
                </Badge>

              </div>

              <div>

                <p className="text-xs text-muted-foreground">
                  Amount
                </p>

                <p className="mt-2 font-semibold">
                  ₹{payment.refund.amount.toLocaleString("en-IN")}
                </p>

              </div>

              <div>

                <p className="text-xs text-muted-foreground">
                  Reason
                </p>

                <p className="mt-2">
                  {payment.refund.reason}
                </p>

              </div>

            </div>

          </div>
        )}
                {/* Footer */}

        <div className="mt-6 flex flex-col gap-4 border-t pt-5 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Payment Date
            </p>

            <p className="mt-1 font-medium">
              {new Date(payment.payment.paymentDate).toLocaleDateString(
                "en-IN",
                {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                }
              )}
            </p>

          </div>

          <div className="flex flex-wrap gap-3">

            <Button
              variant="outline"
              className="rounded-xl"
              onClick={() => onView(payment)}
            >
              <Eye className="mr-2 h-4 w-4" />
              View
            </Button>

            <Button
              variant="outline"
              className="rounded-xl"
              onClick={() => onStatusChange(payment)}
            >
              <CreditCard className="mr-2 h-4 w-4" />
              Update Status
            </Button>

            <Button
              variant="outline"
              className="rounded-xl"
              onClick={() => onRefund(payment)}
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Refund
            </Button>

            <Button
              variant="destructive"
              className="rounded-xl"
              onClick={() => onDelete(payment)}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </Button>

          </div>

        </div>

      </CardContent>

    </Card>
  );
}