import {
  Award,
  BookOpen,
  CalendarCheck,
  Heart,
} from "lucide-react";

interface ProfileStatsProps {
  enrolledPrograms: number;

  completedSessions: number;

  certificates: number;

  savedMentors: number;
}

const ProfileStats = ({
  enrolledPrograms,
  completedSessions,
  certificates,
  savedMentors,
}: ProfileStatsProps) => {
  const stats = [
    {
      title: "Enrolled Programs",
      value: enrolledPrograms,
      icon: BookOpen,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
      description:
        "Programs currently enrolled",
      progress: 85,
      progressColor: "bg-blue-600",
    },

    {
      title: "Sessions Attended",
      value: completedSessions,
      icon: CalendarCheck,
      iconBg: "bg-green-50",
      iconColor: "text-green-600",
      description:
        "Mentorship sessions completed",
      progress: 72,
      progressColor: "bg-green-600",
    },

    {
      title: "Certificates Earned",
      value: certificates,
      icon: Award,
      iconBg: "bg-amber-50",
      iconColor: "text-amber-600",
      description:
        "Verified learning achievements",
      progress: 60,
      progressColor: "bg-amber-500",
    },

    {
      title: "Saved Mentors",
      value: savedMentors,
      icon: Heart,
      iconBg: "bg-rose-50",
      iconColor: "text-rose-600",
      description:
        "Mentors bookmarked for learning",
      progress: 92,
      progressColor: "bg-rose-500",
    },
  ];

  return (
    <div
      className="
        grid
        gap-6

        sm:grid-cols-2
        xl:grid-cols-4
      "
    >
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="
              rounded-[28px]

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
                mt-6

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

                  ${stat.progressColor}
                `}
                style={{
                  width: `${stat.progress}%`,
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProfileStats;