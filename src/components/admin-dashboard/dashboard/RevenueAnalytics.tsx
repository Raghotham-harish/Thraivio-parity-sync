import {
  ArrowUpRight,
  DollarSign,
  TrendingUp,
  Wallet,
} from "lucide-react";

import type { RevenueData } from "@/types/admin-dashboard";

interface RevenueAnalyticsProps {
  revenue: RevenueData[];
}

const RevenueAnalytics = ({
  revenue,
}: RevenueAnalyticsProps) => {
  const currentMonth =
    revenue[revenue.length - 1];

  const previousMonth =
    revenue[revenue.length - 2];

  const growth =
    previousMonth
      ? (
          ((currentMonth.revenue -
            previousMonth.revenue) /
            previousMonth.revenue) *
          100
        ).toFixed(1)
      : "0";

  const totalRevenue = revenue.reduce(
    (sum, item) => sum + item.revenue,
    0
  );

  const totalBookings = revenue.reduce(
    (sum, item) => sum + item.bookings,
    0
  );

  return (
    <section className="mt-10">
      {/* Header */}

      <div
        className="
          flex
          flex-col

          gap-5

          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >
        <div>
          <span
            className="
              inline-flex
              items-center

              rounded-full

              bg-[#ECFDF5]

              px-4
              py-2

              text-sm
              font-medium

              text-[#065F46]
            "
          >
            Revenue Analytics
          </span>

          <h2
            className="
              mt-5

              text-3xl
              font-bold
            "
          >
            Revenue Overview
          </h2>

          <p
            className="
              mt-3

              max-w-3xl

              leading-7

              text-muted-foreground
            "
          >
            Track monthly revenue,
            bookings and business
            growth across the
            CoachCoaching platform.
          </p>
        </div>

        <button
          className="
            rounded-2xl

            border
            border-border

            bg-card

            px-6
            py-3

            font-semibold

            transition

            hover:bg-secondary
          "
        >
          View Financial Report
        </button>
      </div>

      {/* Summary */}

      <div
        className="
          mt-8

          grid

          gap-6

          lg:grid-cols-3
        "
      >
        {/* Total Revenue */}

        <div
          className="
            rounded-2xl

            border
            border-border

            bg-card

            p-6

            shadow-sm
          "
        >
          <div
            className="
              flex
              items-center
              justify-between
            "
          >
            <div
              className="
                flex

                h-16
                w-16

                items-center
                justify-center

                rounded-2xl

                bg-[#ECFDF5]
              "
            >
              <DollarSign
                className="text-[#0F8F65]"
                size={30}
              />
            </div>

            <div
              className="
                rounded-full

                bg-[#ECFDF5]

                px-3
                py-2

                text-sm
                font-semibold

                text-[#065F46]
              "
            >
              +{growth}%
            </div>
          </div>

          <h3
            className="
              mt-7

              text-4xl
              font-bold
            "
          >
            $
            {totalRevenue.toLocaleString()}
          </h3>

          <p
            className="
              mt-2

              text-muted-foreground
            "
          >
            Total Revenue
          </p>
        </div>

        {/* Total Bookings */}

        <div
          className="
            rounded-2xl

            border
            border-border

            bg-card

            p-6

            shadow-sm
          "
        >
          <div
            className="
              flex
              items-center
              justify-between
            "
          >
            <div
              className="
                flex

                h-16
                w-16

                items-center
                justify-center

                rounded-2xl

                bg-blue-50
              "
            >
              <Wallet
                className="text-primary"
                size={30}
              />
            </div>

            <TrendingUp
              className="text-primary"
              size={22}
            />
          </div>

          <h3
            className="
              mt-7

              text-4xl
              font-bold
            "
          >
            {totalBookings}
          </h3>

          <p
            className="
              mt-2

              text-muted-foreground
            "
          >
            Total Bookings
          </p>
        </div>

        {/* Best Month */}

        <div
          className="
            rounded-2xl

            border
            border-border

            bg-gradient-to-r

            from-blue-600
            via-indigo-600
            to-violet-600

            p-6

            text-white
          "
        >
          <ArrowUpRight size={30} />

          <h3
            className="
              mt-7

              text-4xl
              font-bold
            "
          >
            {currentMonth.month}
          </h3>

          <p className="mt-2 text-blue-100">
            Best Performing Month
          </p>
                    <div
            className="
              mt-6

              rounded-2xl

              bg-card/10

              p-4

              backdrop-blur-sm
            "
          >
            <div
              className="
                flex
                items-center
                justify-between

                text-sm
              "
            >
              <span className="text-blue-100">
                Revenue
              </span>

              <span className="font-semibold">
                $
                {currentMonth.revenue.toLocaleString()}
              </span>
            </div>

            <div
              className="
                mt-3

                h-2

                overflow-hidden

                rounded-full

                bg-card/20
              "
            >
              <div
                className="
                  h-full

                  rounded-full

                  bg-card
                "
                style={{
                  width: "88%",
                }}
              />
            </div>

            <p
              className="
                mt-3

                text-sm

                text-blue-100
              "
            >
              Highest revenue generated
              this year.
            </p>
          </div>

        </div>

      </div>

      {/* Revenue Trend */}

      <div
        className="
          mt-8

          rounded-2xl

          border
          border-border

          bg-card

          p-8
        "
      >
        <div
          className="
            flex
            items-center
            justify-between
          "
        >
          <div>

            <h3
              className="
                text-2xl
                font-bold
              "
            >
              Monthly Revenue Trend
            </h3>

            <p
              className="
                mt-2

                text-muted-foreground
              "
            >
              Chart placeholder.
              Recharts / ApexCharts
              will be integrated with
              backend data later.
            </p>

          </div>

          <div
            className="
              rounded-full

              bg-[#ECFDF5]

              px-4
              py-2

              text-sm
              font-semibold

              text-[#065F46]
            "
          >
            +{growth}% Growth
          </div>

        </div>

        {/* Fake Chart */}

        <div
          className="
            mt-10

            flex
            items-end

            justify-between

            gap-4

            h-72
          "
        >
          {revenue.map((item) => {
            const maxRevenue = Math.max(
              ...revenue.map(
                (r) => r.revenue
              )
            );

            const height =
              (item.revenue /
                maxRevenue) *
              100;

            return (
              <div
                key={item.month}
                className="
                  flex-1

                  flex
                  flex-col

                  items-center
                "
              >
                <div
                  className="
                    w-full

                    rounded-t-2xl

                    bg-gradient-to-t
                    from-blue-600
                    to-violet-500

                    transition-all
                    duration-300

                    hover:opacity-90
                  "
                  style={{
                    height: `${height}%`,
                  }}
                />

                <span
                  className="
                    mt-3

                    text-sm

                    font-medium

                    text-muted-foreground
                  "
                >
                  {item.month}
                </span>
              </div>
            );
          })}
        </div>

        {/* Footer */}

        <div
          className="
            mt-8

            flex
            flex-col

            gap-5

            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          <div>

            <h4
              className="
                text-lg
                font-semibold
              "
            >
              Backend Integration Ready
            </h4>

            <p
              className="
                mt-2

                text-muted-foreground
              "
            >
              Replace this placeholder
              with live analytics from
              Firebase or REST APIs.
            </p>

          </div>

          <button
            className="
              rounded-2xl

              bg-primary

              px-6
              py-3

              font-semibold

              text-white

              transition

              hover:bg-primary/90
            "
          >
            View Detailed Report
          </button>

        </div>

      </div>

    </section>
  );
};

export default RevenueAnalytics;