import {
  CalendarDays,
  CheckCircle2,
  Award,
  Ticket,
} from "lucide-react";

interface MyEventsStatsProps {
  upcomingEvents: number;

  attendedEvents: number;

  certificatesEarned: number;

  totalRegistrations: number;
}

const MyEventsStats = ({
  upcomingEvents,
  attendedEvents,
  certificatesEarned,
  totalRegistrations,
}: MyEventsStatsProps) => {
  const stats = [
    {
      title: "Upcoming Events",
      value: upcomingEvents,
      icon: CalendarDays,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
      description:
        "Events waiting for you",
    },

    {
      title: "Attended Events",
      value: attendedEvents,
      icon: CheckCircle2,
      iconBg: "bg-green-50",
      iconColor: "text-green-600",
      description:
        "Successfully completed",
    },

    {
      title: "Certificates",
      value: certificatesEarned,
      icon: Award,
      iconBg: "bg-amber-50",
      iconColor: "text-amber-600",
      description:
        "Certificates earned",
    },

    {
      title: "Registrations",
      value: totalRegistrations,
      icon: Ticket,
      iconBg: "bg-purple-50",
      iconColor: "text-purple-600",
      description:
        "Total registered events",
    },
  ];

  return (
    <div
      className="
        grid
        sm:grid-cols-2
        xl:grid-cols-4

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
                  className={stat.iconColor}
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

                  ${
                    stat.title ===
                    "Upcoming Events"
                      ? "bg-blue-600 w-[75%]"
                      : stat.title ===
                        "Attended Events"
                      ? "bg-green-600 w-[85%]"
                      : stat.title ===
                        "Certificates"
                      ? "bg-amber-500 w-[65%]"
                      : "bg-purple-600 w-[90%]"
                  }
                `}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyEventsStats;