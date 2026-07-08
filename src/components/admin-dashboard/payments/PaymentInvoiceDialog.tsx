import type { AdminPayment } from "@/types/admin-payment";

import {
  FileText,
  Download,
  Printer,
  Building2,
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

interface PaymentInvoiceDialogProps {
  open: boolean;

  payment: AdminPayment | null;

  onOpenChange: (open: boolean) => void;

  onDownload: (payment: AdminPayment) => void;

  onPrint: (payment: AdminPayment) => void;
}

export default function PaymentInvoiceDialog({
  open,
  payment,
  onOpenChange,
  onDownload,
  onPrint,
}: PaymentInvoiceDialogProps) {
  if (!payment) return null;

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="sm:max-w-4xl rounded-3xl">

        <DialogHeader>

          <DialogTitle className="flex items-center gap-2">

            <FileText className="h-5 w-5 text-primary" />

            Payment Invoice

          </DialogTitle>

          <DialogDescription>
            Preview the generated invoice before
            downloading or printing.
          </DialogDescription>

        </DialogHeader>

        <div className="space-y-6">

          <div className="rounded-3xl border p-8">

            <div className="flex flex-col gap-6 border-b pb-6 md:flex-row md:items-start md:justify-between">

              <div>

                <h2 className="text-3xl font-bold">
                  INVOICE
                </h2>

                <p className="mt-3 text-sm text-muted-foreground">
                  Invoice No.
                </p>

                <p className="font-semibold">
                  {payment.invoice.number}
                </p>

              </div>

              <div className="text-right">

                <div className="flex items-center justify-end gap-2">

                  <Building2 className="h-5 w-5 text-primary" />

                  <h3 className="text-xl font-bold">
                    CoachCoaching
                  </h3>

                </div>

                <p className="mt-3 text-sm text-muted-foreground">
                  support@coachcoaching.com
                </p>

                <p className="text-sm text-muted-foreground">
                  www.coachcoaching.com
                </p>

              </div>

            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">

              <div>

                <h4 className="mb-3 font-semibold">
                  Billed To
                </h4>

                <p className="font-semibold">
                  {payment.billing.name}
                </p>

                <p>{payment.billing.email}</p>

                <p>{payment.billing.phone}</p>

                <p className="mt-2">
                  {payment.billing.address}
                </p>

                <p>
                  {payment.billing.city},{" "}
                  {payment.billing.state}
                </p>

                <p>{payment.billing.country}</p>

              </div>

              <div className="text-left md:text-right">

                <h4 className="mb-3 font-semibold">
                  Payment Details
                </h4>

                <p>
                  <strong>Order ID :</strong>{" "}
                  {payment.payment.orderId}
                </p>

                <p>
                  <strong>Transaction :</strong>{" "}
                  {payment.payment.transactionId}
                </p>

                <p>
                  <strong>Method :</strong>{" "}
                  {payment.payment.paymentMethod}
                </p>

                <p>
                  <strong>Date :</strong>{" "}
                  {payment.payment.paymentDate}
                </p>

              </div>

            </div>
                        <div className="mt-8 overflow-hidden rounded-2xl border">

              <table className="w-full">

                <thead className="bg-muted/40">

                  <tr>

                    <th className="px-5 py-4 text-left">
                      Item
                    </th>

                    <th className="px-5 py-4 text-center">
                      Category
                    </th>

                    <th className="px-5 py-4 text-center">
                      Qty
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

                    <td className="px-5 py-5 text-center">
                      {payment.purchase.quantity}
                    </td>

                    <td className="px-5 py-5 text-right font-semibold">
                      ₹
                      {payment.breakdown.subtotal.toLocaleString(
                        "en-IN"
                      )}
                    </td>

                  </tr>

                </tbody>

              </table>

            </div>

            <div className="mt-8 flex justify-end">

              <div className="w-full max-w-sm space-y-3">

                <div className="flex justify-between">

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

                <div className="flex justify-between">

                  <span className="text-muted-foreground">
                    Discount
                  </span>

                  <span className="text-green-600">
                    - ₹
                    {payment.breakdown.discount.toLocaleString(
                      "en-IN"
                    )}
                  </span>

                </div>

                <div className="flex justify-between">

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

                <div className="flex justify-between">

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

                  <div className="flex justify-between">

                    <span className="text-lg font-bold">
                      Total
                    </span>

                    <span className="text-2xl font-bold">
                      ₹
                      {payment.breakdown.totalAmount.toLocaleString(
                        "en-IN"
                      )}
                    </span>

                  </div>

                </div>

              </div>

            </div>

            <div className="mt-10 rounded-2xl bg-muted/30 p-5">

              <h4 className="font-semibold">
                Notes
              </h4>

              <p className="mt-2 text-sm leading-7 text-muted-foreground">

                Thank you for choosing CoachCoaching.
                This invoice is generated automatically
                after successful payment and serves as
                proof of purchase.

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
            Print Invoice
          </Button>

          <Button
            className="rounded-xl"
            onClick={() => onDownload(payment)}
          >
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>

        </DialogFooter>

      </DialogContent>

    </Dialog>
  );
}