import { memo } from "react";

import {
  CalendarDays,
  Radio,
  Clock3,
  CheckCircle2,
  XCircle,
  Users,
  TrendingUp,
} from "lucide-react";

interface EventsStatsProps {
  total: number;
  upcoming: number;
  live: number;
  completed: number;
  cancelled: number;
  registrations: number;
}

const stats = (
  props: EventsStatsProps
) => [
  {
    title: "Total Events",
    value: props.total,
    icon: CalendarDays,
    color:
      "from-blue-500 to-indigo-600",
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
    description: "All created events",
  },

  {
    title: "Upcoming",
    value: props.upcoming,
    icon: Clock3,
    color:
      "from-violet-500 to-purple-600",
    bg: "bg-violet-50",
    iconColor: "text-violet-600",
    description: "Scheduled sessions",
  },

  {
    title: "Live Events",
    value: props.live,
    icon: Radio,
    color:
      "from-red-500 to-rose-600",
    bg: "bg-red-50",
    iconColor: "text-red-600",
    description: "Running now",
  },

  {
    title: "Completed",
    value: props.completed,
    icon: CheckCircle2,
    color:
      "from-emerald-500 to-green-600",
    bg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    description: "Successfully finished",
  },

  {
    title: "Cancelled",
    value: props.cancelled,
    icon: XCircle,
    color:
      "from-orange-500 to-red-500",
    bg: "bg-orange-50",
    iconColor: "text-orange-600",
    description: "Cancelled events",
  },

  {
    title: "Registrations",
    value: props.registrations,
    icon: Users,
    color:
      "from-cyan-500 to-sky-600",
    bg: "bg-cyan-50",
    iconColor: "text-cyan-600",
    description: "Total participants",
  },
];

const EventsStats = (
  props: EventsStatsProps
) => {
  return (
    <section
      className="
        grid
        gap-6
        sm:grid-cols-2
        xl:grid-cols-3
        2xl:grid-cols-6
      "
    >
      {stats(props).map(
        (
          {
            title,
            value,
            icon: Icon,
            color,
            bg,
            iconColor,
            description,
          },
          index
        ) => (
          <div
            key={title}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              bg-white
              p-6
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
            "
          >
            <div
              className={`
                absolute
                inset-x-0
                top-0
                h-1
                bg-gradient-to-r
                ${color}
              `}
            />

            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  {title}
                </p>

                <h2 className="mt-3 text-4xl font-bold tracking-tight">
                  {value.toLocaleString()}
                </h2>

                <p className="mt-3 text-sm text-muted-foreground">
                  {description}
                </p>
              </div>

              <div
                className={`
                  ${bg}
                  rounded-2xl
                  p-3
                `}
              >
                <Icon
                  className={`h-6 w-6 ${iconColor}`}
                />
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-medium text-emerald-600">
                <TrendingUp className="h-4 w-4" />

                +12%
              </div>

              <span className="text-xs text-muted-foreground">
                vs last month
              </span>
            </div>

            <div
              className="
                pointer-events-none
                absolute
                -right-10
                -bottom-10
                h-24
                w-24
                rounded-full
                bg-slate-100/40
                transition-transform
                duration-300
                group-hover:scale-125
              "
            />

            {index === 2 && (
              <span
                className="
                  absolute
                  right-4
                  top-4
                  flex
                  h-2.5
                  w-2.5
                  rounded-full
                  bg-red-500
                "
              />
            )}
          </div>
        )
      )}
    </section>
  );
};

export default memo(EventsStats);