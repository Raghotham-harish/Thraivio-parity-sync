import type { AdminPayment } from "@/types/admin-payment";

import {
  Receipt,
  Download,
  Printer,
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
import { Badge } from "@/components/ui/badge";

interface PaymentReceiptDialogProps {
  open: boolean;

  payment: AdminPayment | null;

  onOpenChange: (open: boolean) => void;

  onDownload: (payment: AdminPayment) => void;

  onPrint: (payment: AdminPayment) => void;
}

export default function PaymentReceiptDialog({
  open,
  payment,
  onOpenChange,
  onDownload,
  onPrint,
}: PaymentReceiptDialogProps) {
  if (!payment) return null;

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="sm:max-w-3xl rounded-2xl">

        <DialogHeader>

          <DialogTitle className="flex items-center gap-2">

            <Receipt className="h-5 w-5 text-primary" />

            Payment Receipt

          </DialogTitle>

          <DialogDescription>
            Successful payment receipt generated for
            this transaction.
          </DialogDescription>

        </DialogHeader>

        <div className="space-y-6">

          <div className="rounded-2xl border p-8">

            <div className="flex flex-col items-center border-b pb-8 text-center">

              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#ECFDF5] dark:bg-green-900/30">

                <CheckCircle2 className="h-10 w-10 text-[#0F8F65]" />

              </div>

              <h2 className="mt-5 text-3xl font-bold">
                Payment Successful
              </h2>

              <p className="mt-2 text-muted-foreground">
                Your payment has been received successfully.
              </p>

              <Badge className="mt-5">
                {payment.status}
              </Badge>

            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">

              <div>

                <h4 className="mb-4 font-semibold">
                  Student
                </h4>

                <p className="font-semibold">
                  {payment.student.name}
                </p>

                <p>{payment.student.email}</p>

                <p>{payment.student.phone}</p>

              </div>

              <div className="text-left md:text-right">

                <h4 className="mb-4 font-semibold">
                  Receipt Details
                </h4>

                <p>
                  <strong>Receipt No :</strong>{" "}
                  {payment.receipt.number}
                </p>

                <p>
                  <strong>Transaction :</strong>{" "}
                  {payment.payment.transactionId}
                </p>

                <p>
                  <strong>Payment Date :</strong>{" "}
                  {payment.payment.paymentDate}
                </p>

                <p>
                  <strong>Method :</strong>{" "}
                  {payment.payment.paymentMethod}
                </p>

              </div>

            </div>
                        <div className="mt-8 overflow-hidden rounded-2xl border">

              <table className="w-full">

                <thead className="bg-muted/40">

                  <tr>

                    <th className="px-5 py-4 text-left">
                      Description
                    </th>

                    <th className="px-5 py-4 text-center">
                      Category
                    </th>

                    <th className="px-5 py-4 text-right">
                      Amount
                    </th>

                  </tr>

                </thead>

                <tbody>

                  <tr className="border-t">

                    <td className="px-5 py-5">

                      <div>

                        <p className="font-semibold">
                          {payment.purchase.title}
                        </p>

                        <p className="mt-1 text-sm text-muted-foreground">
                          {payment.purchase.planType}
                        </p>

                      </div>

                    </td>

                    <td className="px-5 py-5 text-center capitalize">
                      {payment.purchase.category}
                    </td>

                    <td className="px-5 py-5 text-right font-semibold">
                      ₹
                      {payment.breakdown.totalAmount.toLocaleString(
                        "en-IN"
                      )}
                    </td>

                  </tr>

                </tbody>

              </table>

            </div>

            <div className="mt-8 flex justify-end">

              <div className="w-full max-w-sm space-y-3">

                <div className="flex items-center justify-between">

                  <span className="text-muted-foreground">
                    Subtotal
                  </span>

                  <span>
                    ₹
                    {payment.breakdown.subtotal.toLocaleString(
                      "en-IN"
                    )}
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-muted-foreground">
                    Discount
                  </span>

                  <span className="text-[#0F8F65]">
                    - ₹
                    {payment.breakdown.discount.toLocaleString(
                      "en-IN"
                    )}
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-muted-foreground">
                    Tax
                  </span>

                  <span>
                    ₹
                    {payment.breakdown.tax.toLocaleString(
                      "en-IN"
                    )}
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-muted-foreground">
                    Platform Fee
                  </span>

                  <span>
                    ₹
                    {payment.breakdown.platformFee.toLocaleString(
                      "en-IN"
                    )}
                  </span>

                </div>

                <div className="border-t pt-4">

                  <div className="flex items-center justify-between">

                    <span className="text-lg font-bold">
                      Paid Amount
                    </span>

                    <span className="text-2xl font-bold text-primary">
                      ₹
                      {payment.breakdown.totalAmount.toLocaleString(
                        "en-IN"
                      )}
                    </span>

                  </div>

                </div>

              </div>

            </div>

            <div className="mt-10 rounded-2xl border border-green-200 bg-green-50 p-5 dark:border-green-900 dark:bg-green-950/20">

              <h4 className="font-semibold text-[#065F46] dark:text-green-400">
                Payment Confirmation
              </h4>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">

                This receipt confirms that the payment
                has been successfully processed and
                recorded. Please keep this receipt for
                your future reference.

              </p>

            </div>

          </div>
        </div>
                  <DialogFooter className="mt-2 gap-3">

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
            onClick={() => onPrint(payment)}
          >
            <Printer className="mr-2 h-4 w-4" />
            Print Receipt
          </Button>

          <Button
            className="rounded-xl"
            onClick={() => onDownload(payment)}
          >
            <Download className="mr-2 h-4 w-4" />
            Download Receipt
          </Button>

        </DialogFooter>

      </DialogContent>

    </Dialog>
  );
}