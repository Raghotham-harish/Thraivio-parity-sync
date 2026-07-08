import {
  ArrowDownRight,
  ArrowUpRight,
  Award,
  BookOpen,
  CalendarCheck,
  CalendarDays,
  DollarSign,
  GraduationCap,
  Star,
  Users,
  ChevronRight,
} from "lucide-react";

import type { DashboardStat } from "@/types/admin-dashboard";

interface DashboardStatsProps {
  stats: DashboardStat[];

  onCardClick?: (id: string) => void;
}

const iconMap = {
  Users,

  GraduationCap,

  CalendarCheck,

  BookOpen,

  CalendarDays,

  DollarSign,

  Award,

  Star,
};

const colorMap = {
  blue: {
    bg: "bg-blue-50",

    icon: "text-blue-600",

    badge: "bg-blue-100 text-blue-700",

    border: "hover:border-blue-200",
  },

  emerald: {
    bg: "bg-emerald-50",

    icon: "text-emerald-600",

    badge:
      "bg-emerald-100 text-emerald-700",

    border:
      "hover:border-emerald-200",
  },

  violet: {
    bg: "bg-violet-50",

    icon: "text-violet-600",

    badge:
      "bg-violet-100 text-violet-700",

    border:
      "hover:border-violet-200",
  },

  orange: {
    bg: "bg-orange-50",

    icon: "text-orange-600",

    badge:
      "bg-orange-100 text-orange-700",

    border:
      "hover:border-orange-200",
  },

  cyan: {
    bg: "bg-cyan-50",

    icon: "text-cyan-600",

    badge:
      "bg-cyan-100 text-cyan-700",

    border:
      "hover:border-cyan-200",
  },

  amber: {
    bg: "bg-amber-50",

    icon: "text-amber-600",

    badge:
      "bg-amber-100 text-amber-700",

    border:
      "hover:border-amber-200",
  },

  green: {
    bg: "bg-green-50",

    icon: "text-green-600",

    badge:
      "bg-green-100 text-green-700",

    border:
      "hover:border-green-200",
  },

  pink: {
    bg: "bg-pink-50",

    icon: "text-pink-600",

    badge:
      "bg-pink-100 text-pink-700",

    border:
      "hover:border-pink-200",
  },
};

const DashboardStats = ({
  stats,
  onCardClick,
}: DashboardStatsProps) => {
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

              bg-blue-50

              px-4
              py-2

              text-sm
              font-medium

              text-blue-700
            "
          >
            Platform Analytics
          </span>

          <h2
            className="
              mt-5

              text-3xl
              font-bold

              text-slate-900
            "
          >
            Key Performance Indicators
          </h2>

          <p
            className="
              mt-3

              max-w-3xl

              leading-7

              text-slate-500
            "
          >
            Monitor users, mentors,
            sessions, revenue,
            certificates and platform
            performance in real time.
          </p>
        </div>

        <button
          className="
            rounded-2xl

            border
            border-slate-200

            bg-white

            px-6
            py-3

            font-semibold

            transition-all

            hover:bg-slate-50
          "
        >
          View Complete Analytics
        </button>
      </div>

      {/* Stats Grid */}

      <div
        className="
          mt-8

          grid

          gap-6

          sm:grid-cols-2

          xl:grid-cols-4
        "
      >
        {stats.map((item) => {
          const Icon =
            iconMap[
              item.icon as keyof typeof iconMap
            ];

          const colors =
            colorMap[
              item.color as keyof typeof colorMap
            ];

          const isPositive =
            item.trend === "up";

          return (
            <button
              key={item.id}
              onClick={() =>
                onCardClick?.(item.id)
              }
              className={`
                group

                rounded-[30px]

                border
                border-slate-200

                bg-white

                p-6

                text-left

                transition-all
                duration-300

                hover:-translate-y-2

                hover:shadow-xl

                ${colors.border}
              `}
            >
              {/* Card Header */}

              <div
                className="
                  flex
                  items-center
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

                    ${colors.bg}
                  `}
                >
                  <Icon
                    size={30}
                    className={
                      colors.icon
                    }
                  />
                </div>

                <ChevronRight
                  size={22}
                  className="
                    text-slate-400

                    transition-all

                    group-hover:translate-x-1

                    group-hover:text-blue-600
                  "
                />
              </div>

              {/* Body */}
                            {/* Value */}

              <h3
                className="
                  mt-7

                  text-4xl
                  font-bold

                  text-slate-900
                "
              >
                {item.value}
              </h3>

              {/* Title */}

              <h4
                className="
                  mt-3

                  text-lg
                  font-semibold

                  text-slate-900
                "
              >
                {item.title}
              </h4>

              {/* Description */}

              <p
                className="
                  mt-2

                  min-h-[48px]

                  text-sm

                  leading-6

                  text-slate-500
                "
              >
                {item.description}
              </p>

              {/* Trend */}

              <div
                className="
                  mt-6

                  flex
                  items-center
                  justify-between
                "
              >
                <div
                  className={`
                    inline-flex

                    items-center

                    gap-2

                    rounded-full

                    px-3
                    py-2

                    text-sm
                    font-semibold

                    ${colors.badge}
                  `}
                >
                  {isPositive ? (
                    <ArrowUpRight size={16} />
                  ) : (
                    <ArrowDownRight size={16} />
                  )}

                  {item.change}%
                </div>

                <span
                  className="
                    text-sm

                    text-slate-500
                  "
                >
                  This Month
                </span>
              </div>

              {/* Progress */}

              <div className="mt-6">

                <div
                  className="
                    flex
                    items-center
                    justify-between

                    text-sm
                  "
                >
                  <span className="text-slate-500">
                    Performance
                  </span>

                  <span className="font-semibold">
                    {Math.min(
                      Math.round(item.change * 4),
                      100
                    )}
                    %
                  </span>
                </div>

                <div
                  className="
                    mt-3

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

                      ${colors.bg}
                    `}
                    style={{
                      width: `${Math.min(
                        Math.round(
                          item.change * 4
                        ),
                        100
                      )}%`,
                    }}
                  />
                </div>

              </div>

              {/* Footer */}

              <div
                className="
                  mt-8

                  flex
                  items-center
                  justify-between
                "
              >
                <span
  className="
    text-sm
    font-semibold
    text-blue-600

    transition

    group-hover:text-blue-700
  "
>
  View Details
</span>

                <div
                  className="
                    flex
                    items-center
                    gap-2
                  "
                >
                  <span
                    className="
                      h-2.5
                      w-2.5

                      rounded-full

                      bg-emerald-500
                    "
                  />

                  <span
                    className="
                      text-xs

                      text-slate-500
                    "
                  >
                    Live
                  </span>
                </div>
              </div>

            </button>
          );
        })}
      </div>
    </section>
  );
};

export default DashboardStats;