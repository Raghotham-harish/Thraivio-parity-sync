import { useState, useEffect } from "react";
import type { AdminPayment } from "@/types/admin-payment";

import {
  CreditCard,
  CheckCircle2,
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

interface PaymentStatusDialogProps {
  open: boolean;

  payment: AdminPayment | null;

  onOpenChange: (open: boolean) => void;

  onConfirm: (
    payment: AdminPayment,
    status: string,
    note: string
  ) => void;
}

export default function PaymentStatusDialog({
  open,
  payment,
  onOpenChange,
  onConfirm,
}: PaymentStatusDialogProps) {
  const [status, setStatus] = useState("paid");

  const [note, setNote] = useState("");

  useEffect(() => {
    if (payment) {
      setStatus(payment.status);
      setNote("");
    }
  }, [payment]);

  if (!payment) return null;

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="sm:max-w-xl rounded-3xl">

        <DialogHeader>

          <DialogTitle className="flex items-center gap-2">

            <CreditCard className="h-5 w-5 text-primary" />

            Update Payment Status

          </DialogTitle>

          <DialogDescription>

            Change the payment status.
            This will be reflected throughout
            the platform.

          </DialogDescription>

        </DialogHeader>

        <div className="space-y-6">

          <div className="rounded-2xl border bg-muted/30 p-5">

            <div className="flex items-center justify-between">

              <div>

                <h3 className="font-semibold">
                  {payment.student.name}
                </h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  {payment.purchase.title}
                </p>

              </div>

              <div className="text-right">

                <p className="text-xs text-muted-foreground">
                  Amount
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

          <div className="space-y-2">

            <Label>
              Payment Status
            </Label>

            <Select
              value={status}
              onValueChange={setStatus}
            >

              <SelectTrigger className="h-11 rounded-xl">

                <SelectValue />

              </SelectTrigger>

              <SelectContent>

                <SelectItem value="paid">
                  Paid
                </SelectItem>

                <SelectItem value="pending">
                  Pending
                </SelectItem>

                <SelectItem value="failed">
                  Failed
                </SelectItem>

                <SelectItem value="refunded">
                  Refunded
                </SelectItem>

                <SelectItem value="cancelled">
                  Cancelled
                </SelectItem>

              </SelectContent>

            </Select>

          </div>

          <div className="space-y-2">

            <Label>
              Admin Note
            </Label>

            <Textarea
              rows={5}
              value={note}
              onChange={(e) =>
                setNote(e.target.value)
              }
              placeholder="Reason for changing payment status..."
              className="resize-none rounded-xl"
            />

          </div>
                    <div className="rounded-2xl border p-5">

            <h4 className="mb-4 font-semibold">
              Payment Information
            </h4>

            <div className="grid gap-4 md:grid-cols-2">

              <div>

                <p className="text-xs text-muted-foreground">
                  Transaction ID
                </p>

                <p className="mt-1 break-all font-medium">
                  {payment.payment.transactionId}
                </p>

              </div>

              <div>

                <p className="text-xs text-muted-foreground">
                  Order ID
                </p>

                <p className="mt-1 break-all font-medium">
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
                  Gateway
                </p>

                <p className="mt-1 capitalize">
                  {payment.payment.paymentGateway}
                </p>

              </div>

            </div>

          </div>

          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-900 dark:bg-blue-950/20">

            <div className="flex gap-3">

              <CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-600" />

              <div>

                <h4 className="font-semibold">
                  Status Change Notice
                </h4>

                <p className="mt-2 text-sm leading-7 text-muted-foreground">

                  Updating the payment status will
                  immediately reflect in the Admin,
                  Mentor and Student dashboards.
                  Make sure the selected status is
                  correct before saving.

                </p>

              </div>

            </div>

          </div>

          <div className="rounded-2xl border bg-muted/30 p-5">

            <h4 className="mb-4 font-semibold">
              Status Preview
            </h4>

            <div className="flex items-center justify-between">

              <span className="text-muted-foreground">
                Current Status
              </span>

              <span className="font-semibold capitalize">
                {payment.status}
              </span>

            </div>

            <div className="mt-4 flex items-center justify-between">

              <span className="text-muted-foreground">
                New Status
              </span>

              <span className="font-bold text-primary capitalize">
                {status}
              </span>

            </div>

          </div>
        </div>
                  <DialogFooter className="mt-2 gap-3">

          <Button
            variant="outline"
            className="rounded-xl"
            onClick={() => {
              setStatus(payment.status);
              setNote("");
              onOpenChange(false);
            }}
          >
            Cancel
          </Button>

          <Button
            className="rounded-xl"
            onClick={() => {
              onConfirm(
                payment,
                status,
                note
              );

              onOpenChange(false);
            }}
          >
            <CheckCircle2 className="mr-2 h-4 w-4" />
            Update Status
          </Button>

        </DialogFooter>

      </DialogContent>

    </Dialog>
  );
}