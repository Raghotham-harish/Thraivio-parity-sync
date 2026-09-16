import type { AdminPayment } from "@/types/admin-payment";

import {
  Eye,
  Receipt,
  FileText,
  RotateCcw,
  Trash2,
  CalendarDays,
  CreditCard,
  Building2,
  User,
  Wallet,
  MoreVertical,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
    <Card className="group overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div className="h-2 w-full  from-primary  " />

      <CardContent className="space-y-6 p-6">

        <div className="flex items-start justify-between">

          <div className="space-y-1">

            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Payment
            </p>

            <h3 className="text-lg font-semibold">
              {payment.paymentNumber}
            </h3>

            <p className="text-sm text-muted-foreground">
              {payment.payment.transactionId}
            </p>

          </div>

          <div className="flex items-center gap-2">

            <Badge variant={statusVariant[payment.status]}>
              {payment.status}
            </Badge>

            <DropdownMenu>

              <DropdownMenuTrigger asChild>

                <Button
                  variant="ghost"
                  size="icon"
                >
                  <MoreVertical className="h-4 w-4" />
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
                {/* Student & Mentor */}

        <div className="grid gap-4 lg:grid-cols-2">

          <div className="rounded-2xl border bg-muted/30 p-4">

            <div className="mb-3 flex items-center gap-2">
              <User className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold">
                Student
              </span>
            </div>

            <div className="flex items-center gap-3">

              <img
                src={payment.student.avatar}
                alt={payment.student.name}
                className="h-14 w-14 rounded-full object-cover"
              />

              <div className="min-w-0 flex-1">

                <h4 className="truncate font-semibold">
                  {payment.student.name}
                </h4>

                <p className="truncate text-sm text-muted-foreground">
                  {payment.student.email}
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                  {payment.student.city},{" "}
                  {payment.student.country}
                </p>

              </div>

            </div>

          </div>

          <div className="rounded-2xl border bg-muted/30 p-4">

            <div className="mb-3 flex items-center gap-2">
              <Building2 className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold">
                Mentor
              </span>
            </div>

            <div className="flex items-center gap-3">

              <img
                src={payment.mentor.avatar}
                alt={payment.mentor.name}
                className="h-14 w-14 rounded-full object-cover"
              />

              <div className="min-w-0 flex-1">

                <h4 className="truncate font-semibold">
                  {payment.mentor.name}
                </h4>

                <p className="truncate text-sm text-muted-foreground">
                  {payment.mentor.role}
                </p>

                <p className="truncate text-xs text-muted-foreground">
                  {payment.mentor.company}
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Purchase */}

        <div className="rounded-2xl border p-4">

          <div className="mb-4 flex items-center justify-between">

            <div>

              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Purchase
              </p>

              <h4 className="mt-1 font-semibold">
                {payment.purchase.title}
              </h4>

            </div>

            <Badge variant="outline">
              {payment.purchase.category}
            </Badge>

          </div>

          <div className="grid gap-4 md:grid-cols-2">

            <div className="space-y-2">

              <div className="flex items-center gap-2 text-sm">

                <CalendarDays className="h-4 w-4 text-primary" />

                <span className="text-muted-foreground">
                  {payment.purchase.bookingDate}
                </span>

              </div>

              <p className="text-sm">
                {payment.purchase.bookingTime}
              </p>

            </div>

            <div className="space-y-2">

              <p className="text-sm font-medium">
                {payment.purchase.planType}
              </p>

              <p className="text-sm text-muted-foreground">
                {payment.purchase.duration}
              </p>

            </div>

          </div>

        </div>
                {/* Financial Summary */}

        <div className="rounded-2xl border bg-muted/20 p-5">

          <div className="mb-4 flex items-center gap-2">

            <Wallet className="h-5 w-5 text-primary" />

            <h4 className="font-semibold">
              Financial Breakdown
            </h4>

          </div>

          <div className="space-y-3">

            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">
                Subtotal
              </span>

              <span className="font-medium">
                ₹{payment.breakdown.subtotal.toLocaleString("en-IN")}
              </span>
            </div>

            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">
                Discount
              </span>

              <span className="font-medium text-[#0F8F65]">
                - ₹{payment.breakdown.discount.toLocaleString("en-IN")}
              </span>
            </div>

            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">
                Tax
              </span>

              <span className="font-medium">
                ₹{payment.breakdown.tax.toLocaleString("en-IN")}
              </span>
            </div>

            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">
                Platform Fee
              </span>

              <span className="font-medium">
                ₹{payment.breakdown.platformFee.toLocaleString("en-IN")}
              </span>
            </div>

            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">
                Mentor Payout
              </span>

              <span className="font-medium text-primary">
                ₹{payment.breakdown.mentorPayout.toLocaleString("en-IN")}
              </span>
            </div>

            <div className="my-2 border-t" />

            <div className="flex items-center justify-between">

              <span className="font-semibold">
                Total Amount
              </span>

              <span className="text-xl font-bold">
                ₹{payment.breakdown.totalAmount.toLocaleString("en-IN")}
              </span>

            </div>

          </div>

        </div>

        {/* Payment Information */}

        <div className="grid gap-4 md:grid-cols-2">

          <div className="rounded-2xl border p-4">

            <p className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">
              Payment Method
            </p>

            <div className="flex items-center gap-2">

              <CreditCard className="h-5 w-5 text-primary" />

              <span className="font-medium capitalize">
                {payment.payment.paymentMethod.replace("-", " ")}
              </span>

            </div>

          </div>

          <div className="rounded-2xl border p-4">

            <p className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">
              Gateway
            </p>

            <div className="flex items-center gap-2">

              <Building2 className="h-5 w-5 text-primary" />

              <span className="font-medium capitalize">
                {payment.payment.paymentGateway}
              </span>

            </div>

          </div>

          <div className="rounded-2xl border p-4">

            <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
              Transaction ID
            </p>

            <p className="break-all text-sm font-medium">
              {payment.payment.transactionId}
            </p>

          </div>

          <div className="rounded-2xl border p-4">

            <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
              Order ID
            </p>

            <p className="break-all text-sm font-medium">
              {payment.payment.orderId}
            </p>

          </div>

        </div>

        {/* Documents */}

        <div className="grid gap-3 sm:grid-cols-2">

          <Button
            variant="outline"
            className="justify-start rounded-xl"
          >
            <FileText className="mr-2 h-4 w-4" />
            View Invoice
          </Button>

          <Button
            variant="outline"
            className="justify-start rounded-xl"
          >
            <Receipt className="mr-2 h-4 w-4" />
            View Receipt
          </Button>

        </div>
                {/* Footer */}

        <div className="border-t pt-5">

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

            <div className="space-y-1">

              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Payment Date
              </p>

              <p className="font-medium">
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
                Status
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

        </div>

      </CardContent>

    </Card>
  );
}