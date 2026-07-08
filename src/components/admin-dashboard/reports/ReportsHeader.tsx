import {
  BarChart3,
  Download,
  RefreshCw,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ReportsHeaderProps {
  totalRevenue: number;

  totalTransactions: number;

  onRefresh: () => void;

  onExport: () => void;
}

export default function ReportsHeader({
  totalRevenue,
  totalTransactions,
  onRefresh,
  onExport,
}: ReportsHeaderProps) {
  return (
    <section className="rounded-3xl border border-border bg-background p-6 shadow-sm">

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        <div className="space-y-5">

          <Badge
            variant="secondary"
            className="w-fit rounded-full px-4 py-1"
          >
            Reports & Analytics
          </Badge>

          <div>

            <h1 className="text-3xl font-bold tracking-tight">
              Reports Management
            </h1>

            <p className="mt-2 max-w-3xl text-sm leading-7 text-muted-foreground">
              Monitor platform revenue, mentor performance,
              transactions, user growth, payments,
              programs, sessions and business analytics
              from one centralized dashboard.
            </p>

          </div>

          <div className="flex flex-wrap items-center gap-3">

            <div className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium">

              <BarChart3 className="h-4 w-4 text-primary" />

              <span>
                {totalTransactions.toLocaleString()} Transactions
              </span>

            </div>

            <div className="rounded-full border px-4 py-2 text-sm font-semibold">

              ₹{totalRevenue.toLocaleString("en-IN")} Revenue

            </div>

          </div>

        </div>

        <div className="flex flex-wrap gap-3">

          <Button
            variant="outline"
            className="rounded-xl"
            onClick={onRefresh}
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh
          </Button>

          <Button
            className="rounded-xl"
            onClick={onExport}
          >
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>

        </div>

      </div>
          </section>
  );
}