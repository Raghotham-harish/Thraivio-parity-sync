import {
  Wallet,
  IndianRupee,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import type {
  RevenueSourceReport,
} from "@/types/admin-report";

interface RevenueSourcesCardProps {
  sources: RevenueSourceReport[];
}

export default function RevenueSourcesCard({
  sources,
}: RevenueSourcesCardProps) {
  return (
    <Card className="rounded-2xl shadow-sm">

      <CardHeader>

        <div className="flex items-center justify-between">

          <div>

            <CardTitle className="text-lg">
              Revenue Sources
            </CardTitle>

            <p className="mt-1 text-sm text-muted-foreground">
              Revenue contribution by source
            </p>

          </div>

          <div className="rounded-2xl bg-[#ECFDF5]/10 p-3">

            <Wallet className="h-6 w-6 text-[#0F8F65]" />

          </div>

        </div>

      </CardHeader>

      <CardContent className="space-y-5">

        {sources.map((source) => (

          <div
            key={source.source}
            className="rounded-2xl border p-5 transition-all hover:bg-muted/40"
          >

            <div className="flex items-start justify-between gap-4">

              <div className="space-y-2">

                <h4 className="font-semibold capitalize">
                  {source.source}
                </h4>

                <p className="text-sm text-muted-foreground">
                  Revenue Source
                </p>

              </div>

              <div className="text-right">
                                <div className="flex items-center justify-end gap-2">

                  <IndianRupee className="h-4 w-4 text-[#0F8F65]" />

                  <span className="font-semibold text-[#0F8F65]">
                    ₹
                    {source.amount.toLocaleString("en-IN")}
                  </span>

                </div>

                <div className="mt-3 space-y-2 text-sm">

                  <div className="flex items-center justify-end gap-2">

                    <span className="font-medium">
                      {source.percentage}%
                    </span>

                  </div>

                  <div className="text-xs text-muted-foreground">

                    Platform Revenue Share

                  </div>

                </div>

              </div>

            </div>

            <div className="mt-5">

              <div className="h-2 w-full overflow-hidden rounded-full bg-muted">

                <div
                  className="h-full rounded-full bg-[#ECFDF5] transition-all duration-500"
                  style={{
                    width: `${source.percentage}%`,
                  }}
                />

              </div>

            </div>

          </div>

        ))}
              </CardContent>

    </Card>
  );
}