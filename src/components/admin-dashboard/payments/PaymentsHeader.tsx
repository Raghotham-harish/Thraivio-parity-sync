import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Download, Plus } from "lucide-react";

interface PaymentsHeaderProps {
  totalPayments: number;
  totalRevenue: number;
  onCreatePayment: () => void;
  onExport: () => void;
}

export function PaymentsHeader({
  totalPayments,
  totalRevenue,
  onCreatePayment,
  onExport,
}: PaymentsHeaderProps) {
  return (
    <div className="flex flex-col gap-6 rounded-3xl border border-border bg-background p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between">
      <div className="space-y-4">
        <Badge
          variant="secondary"
          className="w-fit rounded-full px-4 py-1 text-xs font-semibold"
        >
          Admin Dashboard
        </Badge>

        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Payment Management
          </h1>

          <p className="max-w-2xl text-sm text-muted-foreground">
            Manage platform payments, monitor transactions, review invoices,
            process refunds, and track mentor payouts from one centralized
            dashboard.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-2 rounded-full border px-3 py-1.5">
            <CreditCard className="h-4 w-4" />
            <span>{totalPayments.toLocaleString()} Payments</span>
          </div>

          <div className="rounded-full border px-3 py-1.5 font-semibold text-foreground">
            ₹{totalRevenue.toLocaleString("en-IN")}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button
          variant="outline"
          className="h-11 rounded-xl"
          onClick={onExport}
        >
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>

        <Button
          className="h-11 rounded-xl"
          onClick={onCreatePayment}
        >
          <Plus className="mr-2 h-4 w-4" />
          Create Payment
        </Button>
      </div>
    </div>
  );
}

export default PaymentsHeader;