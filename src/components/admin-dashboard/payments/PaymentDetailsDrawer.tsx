import type { AdminPayment } from "@/types/admin-payment";

import {
  User,
  Building2,
  CreditCard,
  CalendarDays,
  Receipt,
  FileText,
  Wallet,
  BadgeIndianRupee,
  Clock3,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

interface PaymentDetailsDrawerProps {
  open: boolean;

  payment: AdminPayment | null;

  onOpenChange: (open: boolean) => void;
}

const statusVariant = {
  paid: "default",
  pending: "secondary",
  failed: "destructive",
  refunded: "outline",
  cancelled: "secondary",
} as const;

export default function PaymentDetailsDrawer({
  open,
  payment,
  onOpenChange,
}: PaymentDetailsDrawerProps) {
  if (!payment) return null;

  return (
    <Sheet
      open={open}
      onOpenChange={onOpenChange}
    >
      <SheetContent
        side="right"
        className="w-full overflow-y-auto sm:max-w-3xl"
      >
        <SheetHeader>

          <div className="flex items-start justify-between">

            <div>

              <SheetTitle className="text-2xl">
                Payment Details
              </SheetTitle>

              <p className="mt-2 text-sm text-muted-foreground">
                {payment.paymentNumber}
              </p>

            </div>

            <Badge variant={statusVariant[payment.status]}>
              {payment.status}
            </Badge>

          </div>

        </SheetHeader>

        <div className="mt-8 space-y-6">

          {/* Overview */}

          <div className="grid gap-4 md:grid-cols-2">

            <div className="rounded-2xl border p-5">

              <div className="mb-3 flex items-center gap-2">

                <BadgeIndianRupee className="h-5 w-5 text-primary" />

                <h3 className="font-semibold">
                  Payment Summary
                </h3>

              </div>

              <div className="space-y-3">

                <div className="flex justify-between">

                  <span className="text-muted-foreground">
                    Total Amount
                  </span>

                  <span className="font-bold">
                    ₹
                    {payment.breakdown.totalAmount.toLocaleString(
                      "en-IN"
                    )}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-muted-foreground">
                    Method
                  </span>

                  <span className="capitalize">
                    {payment.payment.paymentMethod.replace(
                      "-",
                      " "
                    )}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-muted-foreground">
                    Gateway
                  </span>

                  <span className="capitalize">
                    {payment.payment.paymentGateway}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-muted-foreground">
                    Transaction
                  </span>

                  <span className="font-medium">
                    {payment.payment.transactionId}
                  </span>

                </div>

              </div>

            </div>

            <div className="rounded-2xl border p-5">

              <div className="mb-3 flex items-center gap-2">

                <CalendarDays className="h-5 w-5 text-primary" />

                <h3 className="font-semibold">
                  Booking
                </h3>

              </div>

              <div className="space-y-3">

                <div className="flex justify-between">

                  <span className="text-muted-foreground">
                    Category
                  </span>

                  <span className="capitalize">
                    {payment.purchase.category}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-muted-foreground">
                    Plan
                  </span>

                  <span>
                    {payment.purchase.planType}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-muted-foreground">
                    Booking Date
                  </span>

                  <span>
                    {payment.purchase.bookingDate}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-muted-foreground">
                    Time
                  </span>

                  <span>
                    {payment.purchase.bookingTime}
                  </span>

                </div>

              </div>

            </div>

          </div>
                    {/* Student & Mentor */}

          <div className="grid gap-4 lg:grid-cols-2">

            {/* Student */}

            <div className="rounded-2xl border p-5">

              <div className="mb-5 flex items-center gap-2">

                <User className="h-5 w-5 text-primary" />

                <h3 className="font-semibold">
                  Student Information
                </h3>

              </div>

              <div className="flex items-center gap-4">

                <img
                  src={payment.student.avatar}
                  alt={payment.student.name}
                  className="h-16 w-16 rounded-full object-cover"
                />

                <div>

                  <h4 className="text-lg font-semibold">
                    {payment.student.name}
                  </h4>

                  <p className="text-sm text-muted-foreground">
                    {payment.student.email}
                  </p>

                </div>

              </div>

              <div className="mt-6 space-y-4">

                <div className="flex justify-between">

                  <span className="text-muted-foreground">
                    Phone
                  </span>

                  <span>
                    {payment.student.phone}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-muted-foreground">
                    Country
                  </span>

                  <span>
                    {payment.student.country}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-muted-foreground">
                    State
                  </span>

                  <span>
                    {payment.student.state}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-muted-foreground">
                    City
                  </span>

                  <span>
                    {payment.student.city}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-muted-foreground">
                    Joined
                  </span>

                  <span>
                    {payment.student.joinedAt}
                  </span>

                </div>

              </div>

            </div>

            {/* Mentor */}

            <div className="rounded-2xl border p-5">

              <div className="mb-5 flex items-center gap-2">

                <Building2 className="h-5 w-5 text-primary" />

                <h3 className="font-semibold">
                  Mentor Information
                </h3>

              </div>

              <div className="flex items-center gap-4">

                <img
                  src={payment.mentor.avatar}
                  alt={payment.mentor.name}
                  className="h-16 w-16 rounded-full object-cover"
                />

                <div>

                  <h4 className="text-lg font-semibold">
                    {payment.mentor.name}
                  </h4>

                  <p className="text-sm text-muted-foreground">
                    {payment.mentor.role}
                  </p>

                </div>

              </div>

              <div className="mt-6 space-y-4">

                <div className="flex justify-between">

                  <span className="text-muted-foreground">
                    Company
                  </span>

                  <span>
                    {payment.mentor.company}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-muted-foreground">
                    Email
                  </span>

                  <span>
                    {payment.mentor.email}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-muted-foreground">
                    Phone
                  </span>

                  <span>
                    {payment.mentor.phone}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-muted-foreground">
                    Verified
                  </span>

                  <Badge
                    variant={
                      payment.mentor.verified
                        ? "default"
                        : "secondary"
                    }
                  >
                    {payment.mentor.verified
                      ? "Verified"
                      : "Not Verified"}
                  </Badge>

                </div>

              </div>

            </div>

          </div>
                    {/* Purchase Information */}

          <div className="rounded-2xl border p-6">

            <div className="mb-5 flex items-center gap-2">

              <CreditCard className="h-5 w-5 text-primary" />

              <h3 className="font-semibold">
                Purchase Information
              </h3>

            </div>

            <div className="grid gap-5 md:grid-cols-2">

              <div>

                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Program / Session
                </p>

                <h4 className="mt-2 text-lg font-semibold">
                  {payment.purchase.title}
                </h4>

                <p className="mt-1 text-sm text-muted-foreground">
                  {payment.purchase.description}
                </p>

              </div>

              <div className="space-y-4">

                <div className="flex justify-between">

                  <span className="text-muted-foreground">
                    Category
                  </span>

                  <Badge variant="outline">
                    {payment.purchase.category}
                  </Badge>

                </div>

                <div className="flex justify-between">

                  <span className="text-muted-foreground">
                    Plan
                  </span>

                  <span>
                    {payment.purchase.planType}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-muted-foreground">
                    Duration
                  </span>

                  <span>
                    {payment.purchase.duration}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-muted-foreground">
                    Quantity
                  </span>

                  <span>
                    {payment.purchase.quantity}
                  </span>

                </div>

              </div>

            </div>

          </div>

          {/* Financial Breakdown */}

          <div className="rounded-2xl border p-6">

            <div className="mb-5 flex items-center gap-2">

              <Wallet className="h-5 w-5 text-primary" />

              <h3 className="font-semibold">
                Financial Breakdown
              </h3>

            </div>

            <div className="space-y-4">

              <div className="flex items-center justify-between">

                <span className="text-muted-foreground">
                  Subtotal
                </span>

                <span className="font-medium">
                  ₹{payment.breakdown.subtotal.toLocaleString("en-IN")}
                </span>

              </div>

              <div className="flex items-center justify-between">

                <span className="text-muted-foreground">
                  Discount
                </span>

                <span className="font-medium text-[#0F8F65]">
                  - ₹{payment.breakdown.discount.toLocaleString("en-IN")}
                </span>

              </div>

              <div className="flex items-center justify-between">

                <span className="text-muted-foreground">
                  Tax
                </span>

                <span className="font-medium">
                  ₹{payment.breakdown.tax.toLocaleString("en-IN")}
                </span>

              </div>

              <div className="flex items-center justify-between">

                <span className="text-muted-foreground">
                  Platform Fee
                </span>

                <span className="font-medium">
                  ₹{payment.breakdown.platformFee.toLocaleString("en-IN")}
                </span>

              </div>

              <div className="flex items-center justify-between">

                <span className="text-muted-foreground">
                  Mentor Payout
                </span>

                <span className="font-medium text-primary">
                  ₹{payment.breakdown.mentorPayout.toLocaleString("en-IN")}
                </span>

              </div>

              <div className="border-t pt-4">

                <div className="flex items-center justify-between">

                  <span className="text-lg font-semibold">
                    Total Amount
                  </span>

                  <span className="text-2xl font-bold">
                    ₹{payment.breakdown.totalAmount.toLocaleString("en-IN")}
                  </span>

                </div>

              </div>

            </div>

          </div>
                    {/* Billing Information */}

          <div className="rounded-2xl border p-6">

            <div className="mb-5 flex items-center gap-2">

              <User className="h-5 w-5 text-primary" />

              <h3 className="font-semibold">
                Billing Information
              </h3>

            </div>

            <div className="grid gap-5 md:grid-cols-2">

              <div>

                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Billing Name
                </p>

                <p className="mt-2 font-medium">
                  {payment.billing.name}
                </p>

              </div>

              <div>

                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Email
                </p>

                <p className="mt-2 break-all font-medium">
                  {payment.billing.email}
                </p>

              </div>

              <div>

                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Phone
                </p>

                <p className="mt-2 font-medium">
                  {payment.billing.phone}
                </p>

              </div>

              <div>

                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Postal Code
                </p>

                <p className="mt-2 font-medium">
                  {payment.billing.postalCode}
                </p>

              </div>

            </div>

            <div className="mt-6 rounded-2xl bg-muted/30 p-5">

              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Billing Address
              </p>

              <p className="mt-3 leading-7">

                {payment.billing.address}

                <br />

                {payment.billing.city},{" "}
                {payment.billing.state}

                <br />

                {payment.billing.country}

              </p>

            </div>

          </div>

          {/* Invoice & Receipt */}

          <div className="grid gap-5 lg:grid-cols-2">

            <div className="rounded-2xl border p-6">

              <div className="mb-5 flex items-center gap-2">

                <FileText className="h-5 w-5 text-primary" />

                <h3 className="font-semibold">
                  Invoice
                </h3>

              </div>

              <div className="space-y-4">

                <div className="flex justify-between">

                  <span className="text-muted-foreground">
                    Invoice No.
                  </span>

                  <span className="font-medium">
                    {payment.invoice.number || "--"}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-muted-foreground">
                    Invoice ID
                  </span>

                  <span className="font-medium">
                    {payment.invoice.id || "--"}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-muted-foreground">
                    Generated
                  </span>

                  <span className="font-medium">
                    {payment.invoice.generatedAt || "--"}
                  </span>

                </div>

                <Button
                  className="mt-2 w-full rounded-xl"
                  variant="outline"
                  disabled={!payment.invoice.url}
                >
                  <FileText className="mr-2 h-4 w-4" />
                  View Invoice
                </Button>

              </div>

            </div>

            <div className="rounded-2xl border p-6">

              <div className="mb-5 flex items-center gap-2">

                <Receipt className="h-5 w-5 text-primary" />

                <h3 className="font-semibold">
                  Receipt
                </h3>

              </div>

              <div className="space-y-4">

                <div className="flex justify-between">

                  <span className="text-muted-foreground">
                    Receipt No.
                  </span>

                  <span className="font-medium">
                    {payment.receipt.number || "--"}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-muted-foreground">
                    Receipt ID
                  </span>

                  <span className="font-medium">
                    {payment.receipt.id || "--"}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-muted-foreground">
                    Generated
                  </span>

                  <span className="font-medium">
                    {payment.receipt.generatedAt || "--"}
                  </span>

                </div>

                <Button
                  className="mt-2 w-full rounded-xl"
                  variant="outline"
                  disabled={!payment.receipt.url}
                >
                  <Receipt className="mr-2 h-4 w-4" />
                  View Receipt
                </Button>

              </div>

            </div>

          </div>
                    {/* Refund Information */}

          <div className="rounded-2xl border p-6">

            <div className="mb-5 flex items-center gap-2">

              <CreditCard className="h-5 w-5 text-primary" />

              <h3 className="font-semibold">
                Refund Information
              </h3>

            </div>

            <div className="grid gap-5 md:grid-cols-2">

              <div>

                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Refund Status
                </p>

                <Badge
                  className="mt-3"
                  variant={
                    payment.refund.status === "completed"
                      ? "default"
                      : payment.refund.status === "processing"
                      ? "secondary"
                      : payment.refund.status === "requested"
                      ? "outline"
                      : payment.refund.status === "rejected"
                      ? "destructive"
                      : "secondary"
                  }
                >
                  {payment.refund.status}
                </Badge>

              </div>

              <div>

                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Refund Amount
                </p>

                <p className="mt-3 text-xl font-bold">
                  ₹{payment.refund.amount.toLocaleString("en-IN")}
                </p>

              </div>

              <div>

                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Requested At
                </p>

                <p className="mt-2">
                  {payment.refund.requestedAt || "--"}
                </p>

              </div>

              <div>

                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Processed At
                </p>

                <p className="mt-2">
                  {payment.refund.processedAt || "--"}
                </p>

              </div>

            </div>

            <div className="mt-6 rounded-2xl bg-muted/30 p-5">

              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Refund Reason
              </p>

              <p className="mt-3 leading-7">
                {payment.refund.reason || "No refund requested."}
              </p>

            </div>

          </div>

          {/* Payment Metadata */}

          <div className="rounded-2xl border p-6">

            <div className="mb-5 flex items-center gap-2">

              <Clock3 className="h-5 w-5 text-primary" />

              <h3 className="font-semibold">
                Payment Metadata
              </h3>

            </div>

            <div className="grid gap-5 md:grid-cols-2">

              <div>

                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Payment Date
                </p>

                <p className="mt-2">
                  {payment.payment.paymentDate}
                </p>

              </div>

              <div>

                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Created At
                </p>

                <p className="mt-2">
                  {payment.payment.createdAt}
                </p>

              </div>

              <div>

                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Last Updated
                </p>

                <p className="mt-2">
                  {payment.payment.updatedAt}
                </p>

              </div>

              <div>

                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Order ID
                </p>

                <p className="mt-2 break-all">
                  {payment.payment.orderId}
                </p>

              </div>

            </div>

          </div>
                    {/* Timeline */}

          <div className="rounded-2xl border p-6">

            <div className="mb-5 flex items-center gap-2">

              <CalendarDays className="h-5 w-5 text-primary" />

              <h3 className="font-semibold">
                Payment Timeline
              </h3>

            </div>

            <div className="space-y-6">

              <div className="flex gap-4">

                <div className="mt-1 h-3 w-3 rounded-full bg-primary" />

                <div className="flex-1">

                  <h4 className="font-medium">
                    Payment Created
                  </h4>

                  <p className="text-sm text-muted-foreground">
                    {payment.payment.createdAt}
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <div className="mt-1 h-3 w-3 rounded-full bg-blue-500" />

                <div className="flex-1">

                  <h4 className="font-medium">
                    Payment Completed
                  </h4>

                  <p className="text-sm text-muted-foreground">
                    {payment.payment.paymentDate}
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <div className="mt-1 h-3 w-3 rounded-full bg-[#F59E0B]" />

                <div className="flex-1">

                  <h4 className="font-medium">
                    Last Updated
                  </h4>

                  <p className="text-sm text-muted-foreground">
                    {payment.payment.updatedAt}
                  </p>

                </div>

              </div>

              {payment.refund.status !== "not-requested" && (

                <div className="flex gap-4">

                  <div className="mt-1 h-3 w-3 rounded-full bg-red-500" />

                  <div className="flex-1">

                    <h4 className="font-medium">
                      Refund Requested
                    </h4>

                    <p className="text-sm text-muted-foreground">
                      {payment.refund.requestedAt}
                    </p>

                  </div>

                </div>

              )}

              {payment.refund.processedAt && (

                <div className="flex gap-4">

                  <div className="mt-1 h-3 w-3 rounded-full bg-[#ECFDF5]" />

                  <div className="flex-1">

                    <h4 className="font-medium">
                      Refund Processed
                    </h4>

                    <p className="text-sm text-muted-foreground">
                      {payment.refund.processedAt}
                    </p>

                  </div>

                </div>

              )}

            </div>

          </div>

                    {/* Footer Actions */}

          <div className="sticky bottom-0 -mx-6 mt-8 border-t bg-background px-6 py-5">

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">

              <Button
                variant="outline"
                className="rounded-xl"
                onClick={() => onOpenChange(false)}
              >
                Close
              </Button>

              <Button
                variant="outline"
                className="rounded-xl"
              >
                <Receipt className="mr-2 h-4 w-4" />
                Receipt
              </Button>

              <Button
                variant="outline"
                className="rounded-xl"
              >
                <FileText className="mr-2 h-4 w-4" />
                Invoice
              </Button>

              <Button className="rounded-xl">
                <CreditCard className="mr-2 h-4 w-4" />
                Update Status
              </Button>

            </div>

          </div>

        </div>

      </SheetContent>

    </Sheet>
  );
}