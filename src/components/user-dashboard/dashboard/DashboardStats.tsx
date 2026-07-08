import {
  Award,
  BookOpen,
  CalendarCheck,
  Clock3,
  Heart,
  TrendingUp,
} from "lucide-react";

import type { DashboardStat } from "@/types/dashboard";

interface DashboardStatsProps {
  stats: DashboardStat[];
}

const iconMap = {
  BookOpen,
  CalendarCheck,
  Award,
  Heart,
  Clock3,
  TrendingUp,
};

const DashboardStats = ({
  stats,
}: DashboardStatsProps) => {
  return (
    <section
      className="
        mt-8

        grid

        gap-6

        sm:grid-cols-2
        xl:grid-cols-3
      "
    >
      {stats.map((item) => {
        const Icon =
          iconMap[
            item.icon as keyof typeof iconMap
          ];

        return (
          <div
            key={item.id}
            className="
              group

              overflow-hidden

              rounded-[32px]

              border
              border-slate-200

              bg-white

              p-7

              transition-all
              duration-300

              hover:-translate-y-1
              hover:border-blue-200
              hover:shadow-xl
            "
          >
            <div
              className="
                flex
                items-start
                justify-between
              "
            >
              <div
                className={`
                  flex

                  h-16
                  w-16

                  items-center
                  justify-center

                  rounded-3xl

                  ${item.bgColor}
                `}
              >
                {Icon && (
                  <Icon
                    size={30}
                    className={item.color}
                  />
                )}
              </div>

              <span
                className={`
                  rounded-full

                  px-3
                  py-1

                  text-xs
                  font-semibold

                  ${
                    item.changeType ===
                    "increase"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }
                `}
              >
                {item.change}
              </span>
            </div>

            <div className="mt-8">
              <p
                className="
                  text-sm

                  text-slate-500
                "
              >
                {item.title}
              </p>

              <h2
                className="
                  mt-2

                  text-4xl
                  font-bold

                  text-slate-900
                "
              >
                {item.value}
              </h2>
            </div>

            <div
              className="
                mt-7

                h-2

                overflow-hidden

                rounded-full

                bg-slate-100
              "
            >
              <div
                className={`
                  h-full

                  rounded-full

                  transition-all
                  duration-500

                  group-hover:w-full

                  ${
                    item.bgColor
                      .replace(
                        "bg-",
                        "bg-"
                      )
                  }
                `}
                style={{
                  width: "70%",
                }}
              />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default DashboardStats;