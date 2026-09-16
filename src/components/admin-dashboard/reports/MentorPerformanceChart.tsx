import {
  GraduationCap,
  TrendingUp,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import type {
  MentorGrowthChartItem,
} from "@/types/admin-report";

interface MentorPerformanceChartProps {
  data: MentorGrowthChartItem[];
}

export default function MentorPerformanceChart({
  data,
}: MentorPerformanceChartProps) {
  const maxMentors = Math.max(
    ...data.map((item) => item.mentors)
  );

  return (
    <Card className="rounded-2xl shadow-sm">

      <CardHeader>

        <div className="flex items-center justify-between">

          <div>

            <CardTitle className="text-lg">
              Mentor Performance
            </CardTitle>

            <p className="mt-1 text-sm text-muted-foreground">
              Monthly mentor growth & performance
            </p>

          </div>

          <div className="rounded-2xl bg-[#FFFBEB] p-3">

            <GraduationCap className="h-6 w-6 text-[#B45309]" />

          </div>

        </div>

      </CardHeader>

      <CardContent>

        <div className="mb-8 flex items-center justify-between rounded-2xl border p-4">

          <div>

            <p className="text-sm text-muted-foreground">
              Total Mentors
            </p>

            <h3 className="mt-1 text-3xl font-bold">
              {data[
                data.length - 1
              ].mentors.toLocaleString()}
            </h3>

          </div>

          <div className="flex items-center gap-2 rounded-full bg-[#FFFBEB] px-4 py-2 text-sm font-semibold text-[#B45309]">

            <TrendingUp className="h-4 w-4" />

            Growing

          </div>

        </div>

        <div className="flex h-72 items-end justify-between gap-4">
                      {data.map((item) => {
            const height =
              (item.mentors / maxMentors) * 100;

            return (
              <div
                key={item.month}
                className="flex flex-1 flex-col items-center gap-3"
              >
                <div className="flex h-60 w-full items-end">

                  <div
                    className="w-full rounded-t-2xl  bg-[#F59E0B]  transition-all duration-300 hover:opacity-90"
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
                    {item.mentors.toLocaleString()}
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