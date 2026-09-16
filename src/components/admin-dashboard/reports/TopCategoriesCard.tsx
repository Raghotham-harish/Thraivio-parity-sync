import {
  PieChart,
  IndianRupee,
  Percent,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import type {
  TopCategoryReport,
} from "@/types/admin-report";

interface TopCategoriesCardProps {
  categories: TopCategoryReport[];
}

export default function TopCategoriesCard({
  categories,
}: TopCategoriesCardProps) {
  return (
    <Card className="rounded-2xl shadow-sm">

      <CardHeader>

        <div className="flex items-center justify-between">

          <div>

            <CardTitle className="text-lg">
              Top Categories
            </CardTitle>

            <p className="mt-1 text-sm text-muted-foreground">
              Revenue distribution by category
            </p>

          </div>

          <div className="rounded-2xl bg-secondary p-3">

            <PieChart className="h-6 w-6 text-violet-600" />

          </div>

        </div>

      </CardHeader>

      <CardContent className="space-y-5">

        {categories.map((category) => (

          <div
            key={category.category}
            className="rounded-2xl border p-5 transition-all hover:bg-muted/40"
          >

            <div className="flex items-start justify-between gap-4">

              <div className="space-y-2">

                <h4 className="font-semibold capitalize">
                  {category.category}
                </h4>

                <p className="text-sm text-muted-foreground">
                  {category.totalSales.toLocaleString()} Sales
                </p>

              </div>

              <div className="text-right">
                                <div className="flex items-center justify-end gap-2">

                  <Percent className="h-4 w-4 text-primary" />

                  <span className="font-semibold">
                    {category.percentage}%
                  </span>

                </div>

                <div className="mt-3 space-y-2 text-sm">

                  <div className="flex items-center justify-end gap-2">

                    <IndianRupee className="h-4 w-4 text-[#0F8F65]" />

                    <span className="font-semibold text-[#0F8F65]">
                      ₹
                      {category.revenue.toLocaleString("en-IN")}
                    </span>

                  </div>

                  <div className="text-xs text-muted-foreground">

                    {category.totalSales.toLocaleString()}
                    {" "}
                    Total Sales

                  </div>

                </div>

              </div>

            </div>

            <div className="mt-5">

              <div className="h-2 w-full overflow-hidden rounded-full bg-muted">

                <div
                  className="h-full rounded-full bg-primary transition-all duration-500"
                  style={{
                    width: `${category.percentage}%`,
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