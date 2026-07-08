import {
  BookOpen,
  CalendarDays,
  Video,
  CalendarCheck,
  Trophy,
  Award,
} from "lucide-react";

interface Props {
  mentor: any;
}

const DashboardStats = ({
  mentor,
}: Props) => {
  const stats = [
    {
      title: "Programs",
      value:
        mentor.programs.length,
      icon: BookOpen,
      color:
        "bg-blue-50 text-blue-600",
    },

    {
      title: "Events",
      value:
        mentor.events.length,
      icon: CalendarDays,
      color:
        "bg-purple-50 text-purple-600",
    },

    {
      title: "Videos",
      value:
        mentor.videos.length,
      icon: Video,
      color:
        "bg-pink-50 text-pink-600",
    },

    {
      title: "Bookings",
      value:
        mentor.sessionsCompleted,
      icon: CalendarCheck,
      color:
        "bg-green-50 text-green-600",
    },

    {
      title: "Achievements",
      value:
        mentor.achievements.length,
      icon: Trophy,
      color:
        "bg-orange-50 text-orange-600",
    },

    {
      title: "Certifications",
      value:
        mentor.certifications.length,
      icon: Award,
      color:
        "bg-cyan-50 text-cyan-600",
    },
  ];

  return (
    <div
      className="
        grid
        sm:grid-cols-2
        xl:grid-cols-3
        2xl:grid-cols-6
        gap-6
      "
    >
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="
              bg-white
              border
              rounded-3xl
              p-6
              shadow-sm
              hover:shadow-lg
              transition-all
              duration-300
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

                <p
                  className="
                    text-sm
                    text-slate-500
                  "
                >
                  {item.title}
                </p>

                <h3
                  className="
                    text-4xl
                    font-bold
                    mt-3
                  "
                >
                  {item.value}
                </h3>

              </div>

              <div
                className={`
                  h-14
                  w-14
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  ${item.color}
                `}
              >
                <Icon size={26} />
              </div>
            </div>

            <div
              className="
                mt-5
                pt-4
                border-t
              "
            >
              <span
                className="
                  text-xs
                  font-medium
                  text-green-600
                "
              >
                Active Data
              </span>
            </div>

          </div>
        );
      })}
    </div>
  );
};

export default DashboardStats;