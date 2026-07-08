import {
  Users,
  TrendingUp,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import type {
  UserGrowthChartItem,
} from "@/types/admin-report";

interface UsersGrowthChartProps {
  data: UserGrowthChartItem[];
}

export default function UsersGrowthChart({
  data,
}: UsersGrowthChartProps) {
  const maxUsers = Math.max(
    ...data.map((item) => item.users)
  );

  return (
    <Card className="rounded-3xl shadow-sm">

      <CardHeader>

        <div className="flex items-center justify-between">

          <div>

            <CardTitle className="text-lg">
              Users Growth
            </CardTitle>

            <p className="mt-1 text-sm text-muted-foreground">
              Monthly registered users growth
            </p>

          </div>

          <div className="rounded-2xl bg-violet-500/10 p-3">

            <Users className="h-6 w-6 text-violet-600" />

          </div>

        </div>

      </CardHeader>

      <CardContent>

        <div className="mb-8 flex items-center justify-between rounded-2xl border p-4">

          <div>

            <p className="text-sm text-muted-foreground">
              Total Users
            </p>

            <h3 className="mt-1 text-3xl font-bold">
              {data[
                data.length - 1
              ].users.toLocaleString()}
            </h3>

          </div>

          <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-600">

            <TrendingUp className="h-4 w-4" />

            Growing

          </div>

        </div>

        <div className="flex h-72 items-end justify-between gap-4">
                      {data.map((item) => {
            const height =
              (item.users / maxUsers) * 100;

            return (
              <div
                key={item.month}
                className="flex flex-1 flex-col items-center gap-3"
              >
                <div className="flex h-60 w-full items-end">

                  <div
                    className="w-full rounded-t-2xl bg-gradient-to-t from-violet-600 to-violet-400 transition-all duration-300 hover:opacity-90"
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
                    {item.users.toLocaleString()}
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