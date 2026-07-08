import {
  CheckCircle2,
  Clock3,
  CreditCard,
  XCircle,
  RotateCcw,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import type {
  RecentTransactionReport,
} from "@/types/admin-report";

interface RecentTransactionsCardProps {
  transactions: RecentTransactionReport[];
}

export default function RecentTransactionsCard({
  transactions,
}: RecentTransactionsCardProps) {
  const getStatusBadge = (
    status: RecentTransactionReport["status"]
  ) => {
    switch (status) {
      case "paid":
        return (
          <Badge className="bg-emerald-500 hover:bg-emerald-500">
            <CheckCircle2 className="mr-1 h-3 w-3" />
            Paid
          </Badge>
        );

      case "pending":
        return (
          <Badge
            variant="secondary"
            className="bg-amber-500 text-white hover:bg-amber-500"
          >
            <Clock3 className="mr-1 h-3 w-3" />
            Pending
          </Badge>
        );

      case "failed":
        return (
          <Badge
            variant="destructive"
            className="gap-1"
          >
            <XCircle className="h-3 w-3" />
            Failed
          </Badge>
        );

      case "refunded":
        return (
          <Badge className="bg-purple-500 hover:bg-purple-500">
            <RotateCcw className="mr-1 h-3 w-3" />
            Refunded
          </Badge>
        );
    }
  };

  return (
    <Card className="rounded-3xl shadow-sm">

      <CardHeader>

        <div className="flex items-center justify-between">

          <div>

            <CardTitle className="text-lg">
              Recent Transactions
            </CardTitle>

            <p className="mt-1 text-sm text-muted-foreground">
              Latest platform payment activity
            </p>

          </div>

          <div className="rounded-2xl bg-blue-500/10 p-3">

            <CreditCard className="h-6 w-6 text-blue-600" />

          </div>

        </div>

      </CardHeader>

      <CardContent className="space-y-4">

        {transactions.map((transaction) => (
                      <div
            key={transaction.id}
            className="rounded-2xl border p-5 transition-all hover:bg-muted/40"
          >

            <div className="flex items-start justify-between gap-4">

              <div className="space-y-2">

                <h4 className="font-semibold">
                  {transaction.invoice}
                </h4>

                <p className="text-sm text-muted-foreground">
                  {transaction.student}
                </p>

                <p className="text-xs text-muted-foreground">
                  Mentor : {transaction.mentor}
                </p>

                <p className="text-xs capitalize text-muted-foreground">
                  {transaction.category}
                </p>

              </div>

              <div className="space-y-3 text-right">

                {getStatusBadge(transaction.status)}

                <div className="text-lg font-bold text-emerald-600">
                  ₹
                  {transaction.amount.toLocaleString("en-IN")}
                </div>

                <p className="text-xs text-muted-foreground">
                  {transaction.paymentMethod}
                </p>

                <p className="text-xs text-muted-foreground">
                  {transaction.createdAt}
                </p>

              </div>

            </div>

          </div>

        ))}
              </CardContent>

    </Card>
  );
}