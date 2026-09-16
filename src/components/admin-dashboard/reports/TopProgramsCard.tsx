import {
  BookOpen,
  IndianRupee,
  Star,
  Users,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import type {
  TopProgramReport,
} from "@/types/admin-report";

interface TopProgramsCardProps {
  programs: TopProgramReport[];
}

export default function TopProgramsCard({
  programs,
}: TopProgramsCardProps) {
  return (
    <Card className="rounded-2xl shadow-sm">

      <CardHeader>

        <div className="flex items-center justify-between">

          <div>

            <CardTitle className="text-lg">
              Top Programs
            </CardTitle>

            <p className="mt-1 text-sm text-muted-foreground">
              Highest revenue generating programs
            </p>

          </div>

          <div className="rounded-2xl bg-[#EFF6FF] p-3">

            <BookOpen className="h-6 w-6 text-primary" />

          </div>

        </div>

      </CardHeader>

      <CardContent className="space-y-5">

        {programs.map((program) => (

          <div
            key={program.id}
            className="rounded-2xl border p-5 transition-all hover:bg-muted/40"
          >

            <div className="flex items-start justify-between gap-4">

              <div className="space-y-2">

                <h4 className="font-semibold">
                  {program.title}
                </h4>

                <p className="text-sm text-muted-foreground">
                  {program.mentor}
                </p>

                <div className="inline-flex rounded-full border px-3 py-1 text-xs font-medium capitalize">
                  {program.category}
                </div>

              </div>

              <div className="text-right">
                                <div className="flex items-center justify-end gap-1">

                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

                  <span className="font-semibold">
                    {program.rating.toFixed(1)}
                  </span>

                </div>

                <div className="mt-3 space-y-2 text-sm">

                  <div className="flex items-center justify-end gap-2">

                    <Users className="h-4 w-4 text-muted-foreground" />

                    <span>
                      {program.enrollments.toLocaleString()} Enrollments
                    </span>

                  </div>

                  <div className="flex items-center justify-end gap-2">

                    <IndianRupee className="h-4 w-4 text-[#0F8F65]" />

                    <span className="font-semibold text-[#0F8F65]">
                      ₹
                      {program.revenue.toLocaleString("en-IN")}
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>

        ))}
      </CardContent>

    </Card>
  );
}