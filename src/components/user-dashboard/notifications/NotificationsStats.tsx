import {
  BellRing,
  MailOpen,
  Mail,
  AlertCircle,
  CalendarDays,
} from "lucide-react";

interface NotificationsStatsProps {
  totalNotifications: number;

  unreadNotifications: number;

  readNotifications: number;

  actionRequired: number;

  thisWeek: number;
}

const NotificationsStats = ({
  totalNotifications,
  unreadNotifications,
  readNotifications,
  actionRequired,
  thisWeek,
}: NotificationsStatsProps) => {
  const stats = [
    {
      title: "Total Notifications",
      value: totalNotifications,

      description:
        "All platform notifications",

      icon: BellRing,

      iconBg: "bg-blue-50",

      iconColor: "text-blue-600",

      progress:
        "bg-blue-600 w-[95%]",
    },

    {
      title: "Unread",

      value: unreadNotifications,

      description:
        "Require your attention",

      icon: Mail,

      iconBg: "bg-red-50",

      iconColor: "text-red-600",

      progress:
        "bg-red-500 w-[70%]",
    },

    {
      title: "Read",

      value: readNotifications,

      description:
        "Already viewed",

      icon: MailOpen,

      iconBg: "bg-green-50",

      iconColor:
        "text-green-600",

      progress:
        "bg-green-600 w-[90%]",
    },

    {
      title: "Action Required",

      value: actionRequired,

      description:
        "Need your response",

      icon: AlertCircle,

      iconBg: "bg-amber-50",

      iconColor:
        "text-amber-600",

      progress:
        "bg-amber-500 w-[60%]",
    },

    {
      title: "This Week",

      value: thisWeek,

      description:
        "Recent notifications",

      icon: CalendarDays,

      iconBg: "bg-purple-50",

      iconColor:
        "text-purple-600",

      progress:
        "bg-purple-600 w-[82%]",
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
        const Icon =
          stat.icon;

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

export default NotificationsStats;