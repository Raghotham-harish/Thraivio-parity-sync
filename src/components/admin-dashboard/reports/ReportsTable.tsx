import {
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import type {
  RevenueSourceReport,
} from "@/types/admin-report";

interface ReportsTableProps {
  reports: RevenueSourceReport[];
}

export default function ReportsTable({
  reports,
}: ReportsTableProps) {
  return (
    <Card className="rounded-2xl shadow-sm">

      <CardHeader>

        <CardTitle>
          Revenue Analytics Table
        </CardTitle>

      </CardHeader>

      <CardContent>

        <Table>

          <TableHeader>

            <TableRow>

              <TableHead>
                Category
              </TableHead>

              <TableHead>
                Revenue
              </TableHead>

              <TableHead>
                Share
              </TableHead>

              <TableHead className="text-right">
                Trend
              </TableHead>

            </TableRow>

          </TableHeader>

          <TableBody>

            {reports.map((report) => (
              <TableRow
                key={report.source}
              >
                                <TableCell className="font-medium capitalize">
                  {report.source}
                </TableCell>

                <TableCell>
                  ₹
                  {report.amount.toLocaleString("en-IN")}
                </TableCell>

                <TableCell>
                  <div className="flex items-center gap-2">

                    <div className="h-2 w-24 overflow-hidden rounded-full bg-muted">

                      <div
                        className="h-full rounded-full bg-primary"
                        style={{
                          width: `${report.percentage}%`,
                        }}
                      />

                    </div>

                    <span className="text-sm font-medium">
                      {report.percentage}%
                    </span>

                  </div>
                </TableCell>

                <TableCell className="text-right">

                  <div className="flex items-center justify-end gap-2">

                    {report.percentage >= 20 ? (
                      <ArrowUpRight className="h-4 w-4 text-[#0F8F65]" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4 text-amber-500" />
                    )}

                    <span
                      className={
                        report.percentage >= 20
                          ? "font-medium text-[#0F8F65]"
                          : "font-medium text-amber-500"
                      }
                    >
                      {report.percentage >= 20
                        ? "Growing"
                        : "Average"}
                    </span>

                  </div>

                </TableCell>

              </TableRow>
            ))}
                      </TableBody>

        </Table>

      </CardContent>

    </Card>
  );
}