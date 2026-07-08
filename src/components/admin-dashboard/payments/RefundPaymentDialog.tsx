import { useState } from "react";
import type { AdminPayment } from "@/types/admin-payment";

import {
  RotateCcw,
  AlertTriangle,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Label } from "@/components/ui/label";

import { Textarea } from "@/components/ui/textarea";

interface RefundPaymentDialogProps {
  open: boolean;

  payment: AdminPayment | null;

  onOpenChange: (open: boolean) => void;

  onConfirm: (
    payment: AdminPayment,
    reason: string,
    refundType: string
  ) => void;
}

export default function RefundPaymentDialog({
  open,
  payment,
  onOpenChange,
  onConfirm,
}: RefundPaymentDialogProps) {
  const [refundType, setRefundType] =
    useState("full");

  const [reason, setReason] =
    useState("");

  if (!payment) return null;

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="sm:max-w-xl rounded-3xl">

        <DialogHeader>

          <DialogTitle className="flex items-center gap-2">

            <RotateCcw className="h-5 w-5 text-primary" />

            Refund Payment

          </DialogTitle>

          <DialogDescription>

            Refund this payment back to the
            customer's original payment method.

          </DialogDescription>

        </DialogHeader>

        <div className="space-y-6">

          <div className="rounded-2xl border bg-muted/30 p-5">

            <div className="flex items-center justify-between">

              <div>

                <h3 className="font-semibold">
                  {payment.student.name}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {payment.purchase.title}
                </p>

              </div>

              <div className="text-right">

                <p className="text-xs text-muted-foreground">
                  Refund Amount
                </p>

                <h2 className="text-2xl font-bold">
                  ₹
                  {payment.breakdown.totalAmount.toLocaleString(
                    "en-IN"
                  )}
                </h2>

              </div>

            </div>

          </div>

          <div className="rounded-2xl border border-amber-300 bg-amber-50 p-4 dark:bg-amber-950/20">

            <div className="flex gap-3">

              <AlertTriangle className="mt-0.5 h-5 w-5 text-amber-600" />

              <p className="text-sm leading-6">

                Refunds cannot be automatically
                reversed after processing.
                Please verify all details before
                continuing.

              </p>

            </div>

          </div>
                    <div className="grid gap-5">

            <div className="space-y-2">

              <Label>
                Refund Type
              </Label>

              <Select
                value={refundType}
                onValueChange={setRefundType}
              >
                <SelectTrigger className="h-11 rounded-xl">
                  <SelectValue />
                </SelectTrigger>

                <SelectContent>

                  <SelectItem value="full">
                    Full Refund
                  </SelectItem>

                  <SelectItem value="partial">
                    Partial Refund
                  </SelectItem>

                </SelectContent>

              </Select>

            </div>

            {refundType === "partial" && (

              <div className="space-y-2">

                <Label>
                  Partial Refund Amount
                </Label>

                <input
                  type="number"
                  min={1}
                  max={payment.breakdown.totalAmount}
                  placeholder="Enter refund amount"
                  className="
                    flex
                    h-11
                    w-full
                    rounded-xl
                    border
                    border-input
                    bg-background
                    px-3
                    text-sm
                    outline-none
                    focus:ring-2
                    focus:ring-primary
                  "
                />

              </div>

            )}

            <div className="space-y-2">

              <Label>
                Refund Reason
              </Label>

              <Textarea
                rows={5}
                value={reason}
                onChange={(e) =>
                  setReason(e.target.value)
                }
                placeholder="Enter refund reason..."
                className="rounded-xl resize-none"
              />

            </div>

          </div>

          <div className="rounded-2xl border bg-muted/30 p-5">

            <h4 className="mb-4 font-semibold">
              Payment Information
            </h4>

            <div className="grid gap-4 md:grid-cols-2">

              <div>

                <p className="text-xs text-muted-foreground">
                  Transaction ID
                </p>

                <p className="mt-1 font-medium break-all">
                  {payment.payment.transactionId}
                </p>

              </div>

              <div>

                <p className="text-xs text-muted-foreground">
                  Order ID
                </p>

                <p className="mt-1 font-medium break-all">
                  {payment.payment.orderId}
                </p>

              </div>

              <div>

                <p className="text-xs text-muted-foreground">
                  Payment Method
                </p>

                <p className="mt-1 capitalize">
                  {payment.payment.paymentMethod.replace(
                    "-",
                    " "
                  )}
                </p>

              </div>

              <div>

                <p className="text-xs text-muted-foreground">
                  Payment Gateway
                </p>

                <p className="mt-1 capitalize">
                  {payment.payment.paymentGateway}
                </p>

              </div>

            </div>

          </div>
                    <div className="rounded-2xl border p-5">

            <h4 className="mb-4 font-semibold">
              Refund Summary
            </h4>

            <div className="space-y-4">

              <div className="flex items-center justify-between">

                <span className="text-muted-foreground">
                  Student
                </span>

                <span className="font-medium">
                  {payment.student.name}
                </span>

              </div>

              <div className="flex items-center justify-between">

                <span className="text-muted-foreground">
                  Purchase
                </span>

                <span className="font-medium">
                  {payment.purchase.title}
                </span>

              </div>

              <div className="flex items-center justify-between">

                <span className="text-muted-foreground">
                  Original Amount
                </span>

                <span className="font-semibold">
                  ₹
                  {payment.breakdown.totalAmount.toLocaleString(
                    "en-IN"
                  )}
                </span>

              </div>

              <div className="flex items-center justify-between">

                <span className="text-muted-foreground">
                  Refund Type
                </span>

                <span className="capitalize">
                  {refundType}
                </span>

              </div>

              <div className="border-t pt-4">

                <div className="flex items-center justify-between">

                  <span className="font-semibold">
                    Refund Amount
                  </span>

                  <span className="text-xl font-bold text-primary">
                    ₹
                    {payment.breakdown.totalAmount.toLocaleString(
                      "en-IN"
                    )}
                  </span>

                </div>

              </div>

            </div>

          </div>

          <div className="rounded-2xl border border-red-200 bg-red-50 p-5 dark:border-red-900 dark:bg-red-950/20">

            <h4 className="font-semibold text-red-700 dark:text-red-400">
              Important Notice
            </h4>

            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">

              <li>
                • Refund will be processed through the
                original payment gateway.
              </li>

              <li>
                • Processing may take 5–10 business
                days depending on the bank.
              </li>

              <li>
                • Students will receive an automatic
                email notification.
              </li>

              <li>
                • This action should only be performed
                after verification.
              </li>

            </ul>

          </div>
                  </div>

        <DialogFooter className="mt-2 gap-3">

          <Button
            variant="outline"
            className="rounded-xl"
            onClick={() => {
              setReason("");
              setRefundType("full");
              onOpenChange(false);
            }}
          >
            Cancel
          </Button>

          <Button
            className="rounded-xl"
            disabled={reason.trim().length === 0}
            onClick={() => {
              onConfirm(
                payment,
                reason,
                refundType
              );

              setReason("");
              setRefundType("full");

              onOpenChange(false);
            }}
          >
            <RotateCcw className="mr-2 h-4 w-4" />
            Confirm Refund
          </Button>

        </DialogFooter>

      </DialogContent>

    </Dialog>
  );
}