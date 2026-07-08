import {
  CalendarClock,
  CheckCircle2,
  XCircle,
  Wallet,
  Clock3,
} from "lucide-react";

interface SessionsStatsProps {
  upcomingSessions: number;

  completedSessions: number;

  cancelledSessions: number;

  totalSpent: number;

  totalHours: number;
}

const SessionsStats = ({
  upcomingSessions,
  completedSessions,
  cancelledSessions,
  totalSpent,
  totalHours,
}: SessionsStatsProps) => {
  const stats = [
    {
      title: "Upcoming Sessions",
      value: upcomingSessions,
      icon: CalendarClock,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
      description:
        "Scheduled mentoring calls",
      progress:
        "bg-blue-600 w-[80%]",
    },

    {
      title: "Completed",
      value: completedSessions,
      icon: CheckCircle2,
      iconBg: "bg-green-50",
      iconColor: "text-green-600",
      description:
        "Successfully attended",
      progress:
        "bg-green-600 w-[75%]",
    },

    {
      title: "Cancelled",
      value: cancelledSessions,
      icon: XCircle,
      iconBg: "bg-red-50",
      iconColor: "text-red-600",
      description:
        "Missed or cancelled",
      progress:
        "bg-red-500 w-[35%]",
    },

    {
      title: "Total Invested",
      value: `$${totalSpent}`,
      icon: Wallet,
      iconBg: "bg-purple-50",
      iconColor: "text-purple-600",
      description:
        "Learning investment",
      progress:
        "bg-purple-600 w-[90%]",
    },

    {
      title: "Hours Learned",
      value: totalHours,
      icon: Clock3,
      iconBg: "bg-amber-50",
      iconColor: "text-amber-600",
      description:
        "Total mentoring hours",
      progress:
        "bg-amber-500 w-[65%]",
    },
  ];

  return (
    <div
      className="
        grid
        sm:grid-cols-2
        xl:grid-cols-5

        gap-6
      "
    >
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="
              bg-white

              border
              border-slate-200

              rounded-[28px]

              p-6

              hover:shadow-xl
              hover:-translate-y-1

              transition-all
              duration-300
            "
          >
            <div
              className="
                flex
                items-start
                justify-between
              "
            >
              <div>
                <p
                  className="
                    text-sm
                    text-slate-500
                  "
                >
                  {stat.title}
                </p>

                <h3
                  className="
                    text-4xl
                    font-bold

                    mt-3
                  "
                >
                  {stat.value}
                </h3>

                <p
                  className="
                    text-xs
                    text-slate-400

                    mt-2
                  "
                >
                  {stat.description}
                </p>
              </div>

              <div
                className={`
                  h-14
                  w-14

                  rounded-2xl

                  flex
                  items-center
                  justify-center

                  ${stat.iconBg}
                `}
              >
                <Icon
                  size={26}
                  className={
                    stat.iconColor
                  }
                />
              </div>
            </div>

            <div
              className="
                mt-6

                h-2

                rounded-full

                bg-slate-100

                overflow-hidden
              "
            >
              <div
                className={`
                  h-full
                  rounded-full

                  ${stat.progress}
                `}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SessionsStats;