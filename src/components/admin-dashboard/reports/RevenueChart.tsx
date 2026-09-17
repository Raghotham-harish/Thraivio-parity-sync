import {
  TrendingUp,
  IndianRupee,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import type {
  RevenueChartItem,
} from "@/types/admin-report";

interface RevenueChartProps {
  data: RevenueChartItem[];

  totalRevenue: number;

  growth: number;
}

export default function RevenueChart({
  data,
  totalRevenue,
  growth,
}: RevenueChartProps) {
  const maxRevenue = Math.max(
    ...data.map((item) => item.revenue)
  );

  return (
    <Card className="rounded-2xl shadow-sm">

      <CardHeader className="pb-2">

        <div className="flex items-center justify-between">

          <div>

            <CardTitle className="text-lg">
              Revenue Overview
            </CardTitle>

            <p className="mt-1 text-sm text-muted-foreground">
              Monthly revenue performance
            </p>

          </div>

          <div className="rounded-2xl bg-[#ECFDF5]/10 p-3">

            <TrendingUp className="h-6 w-6 text-[#0F8F65]" />

          </div>

        </div>

      </CardHeader>

      <CardContent>

        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">

          <div>

            <div className="flex items-center gap-2">

              <IndianRupee className="h-5 w-5 text-primary" />

              <span className="text-3xl font-bold">

                {totalRevenue.toLocaleString("en-IN")}

              </span>

            </div>

            <p className="mt-2 text-sm text-muted-foreground">
              Total Revenue
            </p>

          </div>

          <div className="rounded-full bg-[#ECFDF5]/10 px-4 py-2 text-sm font-semibold text-[#0F8F65]">

            +{growth}% Growth

          </div>

        </div>

        <div className="flex h-72 items-end justify-between gap-4">
                      {data.map((item) => {
            const height =
              (item.revenue / maxRevenue) * 100;

            return (
              <div
                key={item.month}
                className="flex flex-1 flex-col items-center gap-3"
              >
                <div className="flex h-60 w-full items-end">

                  <div
                    className="w-full rounded-t-2xl  from-primary to-primary/60 transition-all duration-300 hover:opacity-90"
                    style={{
                      height: `${height}%`,
                    }}
                  />

                </div>

                <div className="space-y-1 text-center">

                  <p className="text-sm font-semibold">
                    {item.month}
                  </p>

                  <p className="text-xs text-muted-foreground">
                    ₹
                    {(
                      item.revenue / 100000
                    ).toFixed(1)}
                    L
                  </p>

                </div>

              </div>
            );
          })}
                  </div>

      </CardContent>

    </Card>
  );
}