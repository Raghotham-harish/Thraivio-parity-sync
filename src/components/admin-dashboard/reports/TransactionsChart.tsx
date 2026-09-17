import {
  CreditCard,
  CheckCircle2,
  Clock3,
  XCircle,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import type {
  TransactionChartItem,
} from "@/types/admin-report";

interface TransactionsChartProps {
  data: TransactionChartItem[];
}

export default function TransactionsChart({
  data,
}: TransactionsChartProps) {
  const maxValue = Math.max(
    ...data.flatMap((item) => [
      item.successful,
      item.pending,
      item.failed,
    ])
  );

  return (
    <Card className="rounded-2xl shadow-sm">

      <CardHeader>

        <div className="flex items-center justify-between">

          <div>

            <CardTitle className="text-lg">
              Transactions Overview
            </CardTitle>

            <p className="mt-1 text-sm text-muted-foreground">
              Successful, Pending & Failed Payments
            </p>

          </div>

          <div className="rounded-2xl bg-[#EFF6FF] p-3">

            <CreditCard className="h-6 w-6 text-primary" />

          </div>

        </div>

      </CardHeader>

      <CardContent>

        <div className="mb-8 flex flex-wrap gap-6 text-sm">

          <div className="flex items-center gap-2">

            <CheckCircle2 className="h-4 w-4 text-[#0F8F65]" />

            <span>Successful</span>

          </div>

          <div className="flex items-center gap-2">

            <Clock3 className="h-4 w-4 text-amber-500" />

            <span>Pending</span>

          </div>

          <div className="flex items-center gap-2">

            <XCircle className="h-4 w-4 text-red-600" />

            <span>Failed</span>

          </div>

        </div>

        <div className="flex h-72 items-end justify-between gap-5">
                      {data.map((item) => (
            <div
              key={item.day}
              className="flex flex-1 flex-col items-center gap-3"
            >
              <div className="flex h-60 items-end gap-1">

                <div
                  className="w-4 rounded-t-xl bg-[#ECFDF5] transition-all"
                  style={{
                    height: `${
                      (item.successful / maxValue) * 100
                    }%`,
                  }}
                />

                <div
                  className="w-4 rounded-t-xl bg-[#F59E0B] transition-all"
                  style={{
                    height: `${
                      (item.pending / maxValue) * 100
                    }%`,
                  }}
                />

                <div
                  className="w-4 rounded-t-xl bg-red-500 transition-all"
                  style={{
                    height: `${
                      (item.failed / maxValue) * 100
                    }%`,
                  }}
                />

              </div>

              <div className="space-y-1 text-center">

                <p className="text-sm font-semibold">
                  {item.day}
                </p>

                <div className="space-y-0.5 text-xs text-muted-foreground">

                  <p>
                    S : {item.successful}
                  </p>

                  <p>
                    P : {item.pending}
                  </p>

                  <p>
                    F : {item.failed}
                  </p>

                </div>

              </div>

            </div>
          ))}
                  </div>

      </CardContent>

    </Card>
  );
}