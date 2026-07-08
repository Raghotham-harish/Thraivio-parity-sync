import {
  CalendarClock,
  Radio,
  CheckCircle2,
  XCircle,
  IndianRupee,
} from "lucide-react";

interface SessionsStatsProps {
  scheduledSessions: number;

  liveSessions: number;

  completedSessions: number;

  cancelledSessions: number;

  totalRevenue: number;
}

const SessionsStats = ({
  scheduledSessions,
  liveSessions,
  completedSessions,
  cancelledSessions,
  totalRevenue,
}: SessionsStatsProps) => {
  const stats = [
    {
      title: "Scheduled Sessions",
      value: scheduledSessions,
      description: "Upcoming mentorship sessions",
      icon: CalendarClock,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
      progress: "w-[82%]",
      progressColor: "bg-blue-600",
    },

    {
      title: "Live Sessions",
      value: liveSessions,
      description: "Currently running sessions",
      icon: Radio,
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
      progress: "w-[55%]",
      progressColor: "bg-emerald-600",
    },

    {
      title: "Completed",
      value: completedSessions,
      description: "Successfully finished",
      icon: CheckCircle2,
      iconBg: "bg-violet-50",
      iconColor: "text-violet-600",
      progress: "w-[90%]",
      progressColor: "bg-violet-600",
    },

    {
      title: "Cancelled",
      value: cancelledSessions,
      description: "Cancelled or missed",
      icon: XCircle,
      iconBg: "bg-red-50",
      iconColor: "text-red-600",
      progress: "w-[35%]",
      progressColor: "bg-red-500",
    },

    {
      title: "Revenue",
      value: `₹${totalRevenue.toLocaleString()}`,
      description: "Total session earnings",
      icon: IndianRupee,
      iconBg: "bg-amber-50",
      iconColor: "text-amber-600",
      progress: "w-[78%]",
      progressColor: "bg-amber-500",
    },
  ];

  return (
    <div
      className="
        grid
        gap-6

        sm:grid-cols-2
        xl:grid-cols-5
      "
    >
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="
              group

              rounded-[30px]

              border
              border-slate-200

              bg-white

              p-6

              transition-all
              duration-300

              hover:-translate-y-1
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
              <div>
                <p
                  className="
                    text-sm
                    font-medium

                    text-slate-500
                  "
                >
                  {stat.title}
                </p>

                <h3
                  className="
                    mt-3

                    text-4xl
                    font-bold

                    tracking-tight
                  "
                >
                  {stat.value}
                </h3>

                <p
                  className="
                    mt-2

                    text-xs

                    text-slate-400
                  "
                >
                  {stat.description}
                </p>
              </div>

              <div
                className={`
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center

                  rounded-2xl

                  ${stat.iconBg}
                `}
              >
                <Icon
                  size={26}
                  className={stat.iconColor}
                />
              </div>
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

                  ${stat.progress}
                  ${stat.progressColor}
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