import {
  Heart,
  Sparkles,
  Users,
  Video,
  Star,
} from "lucide-react";

interface SavedMentorsStatsProps {
  totalMentors: number;

  featuredMentors: number;

  totalStudents: number;

  totalSessions: number;

  averageRating: number;
}

const SavedMentorsStats = ({
  totalMentors,
  featuredMentors,
  totalStudents,
  totalSessions,
  averageRating,
}: SavedMentorsStatsProps) => {
  const stats = [
    {
      title: "Saved Mentors",
      value: totalMentors,
      description:
        "Mentors bookmarked by you",

      icon: Heart,

      iconBg: "bg-red-50",

      iconColor: "text-red-600",

      progress:
        "bg-red-500 w-[85%]",
    },

    {
      title: "Featured Mentors",
      value: featuredMentors,
      description:
        "Top rated mentor profiles",

      icon: Sparkles,

      iconBg: "bg-amber-50",

      iconColor:
        "text-amber-600",

      progress:
        "bg-amber-500 w-[75%]",
    },

    {
      title: "Students Coached",
      value:
        totalStudents.toLocaleString(),

      description:
        "Combined mentor impact",

      icon: Users,

      iconBg: "bg-blue-50",

      iconColor:
        "text-blue-600",

      progress:
        "bg-blue-600 w-[95%]",
    },

    {
      title: "Sessions Completed",
      value:
        totalSessions.toLocaleString(),

      description:
        "Total mentoring sessions",

      icon: Video,

      iconBg: "bg-green-50",

      iconColor:
        "text-green-600",

      progress:
        "bg-green-600 w-[88%]",
    },

    {
      title: "Average Rating",
      value:
        averageRating.toFixed(1),

      description:
        "Overall mentor rating",

      icon: Star,

      iconBg: "bg-purple-50",

      iconColor:
        "text-purple-600",

      progress:
        "bg-purple-600 w-[92%]",
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
                  {
                    stat.description
                  }
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

export default SavedMentorsStats;