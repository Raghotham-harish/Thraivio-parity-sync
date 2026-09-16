import type { AdminPayment } from "@/types/admin-payment";

import {
  AlertTriangle,
  Trash2,
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

interface DeletePaymentDialogProps {
  open: boolean;

  payment: AdminPayment | null;

  onOpenChange: (open: boolean) => void;

  onConfirm: (payment: AdminPayment) => void;
}

export default function DeletePaymentDialog({
  open,
  payment,
  onOpenChange,
  onConfirm,
}: DeletePaymentDialogProps) {
  if (!payment) return null;

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="sm:max-w-lg rounded-2xl">

        <DialogHeader>

          <DialogTitle className="flex items-center gap-2 text-destructive">

            <AlertTriangle className="h-5 w-5" />

            Delete Payment

          </DialogTitle>

          <DialogDescription>

            This action cannot be undone.
            Please review the payment details before
            permanently deleting this payment.

          </DialogDescription>

        </DialogHeader>

        <div className="space-y-6">

          <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-5">

            <h3 className="font-semibold">
              Payment Information
            </h3>

            <div className="mt-5 space-y-4">

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
                  Mentor
                </span>

                <span className="font-medium">
                  {payment.mentor.name}
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
                  Amount
                </span>

                <span className="font-bold">
                  ₹
                  {payment.breakdown.totalAmount.toLocaleString(
                    "en-IN"
                  )}
                </span>

              </div>

              <div className="flex items-center justify-between">

                <span className="text-muted-foreground">
                  Transaction ID
                </span>

                <span className="font-medium break-all">
                  {payment.payment.transactionId}
                </span>

              </div>

            </div>

          </div>

          <div className="rounded-2xl border border-amber-300 bg-amber-50 p-5 dark:border-amber-900 dark:bg-amber-950/20">

            <div className="flex gap-3">

              <AlertTriangle className="mt-0.5 h-5 w-5 text-amber-600" />

              <div>

                <h4 className="font-semibold">
                  Warning
                </h4>

                <p className="mt-2 text-sm leading-7 text-muted-foreground">

                  Deleting this payment will permanently
                  remove it from the admin panel.
                  This action should only be used for
                  invalid or duplicate payment records.

                </p>

              </div>

            </div>

          </div>
        </div>
                  <DialogFooter className="mt-2 gap-3">

          <Button
            variant="outline"
            className="rounded-xl"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>

          <Button
            variant="destructive"
            className="rounded-xl"
            onClick={() => {
              onConfirm(payment);
              onOpenChange(false);
            }}
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Delete Payment
          </Button>

        </DialogFooter>

      </DialogContent>

    </Dialog>
  );
}