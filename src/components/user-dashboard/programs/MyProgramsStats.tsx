import {
  Award,
  BookOpen,
  CheckCircle2,
  Layers3,
} from "lucide-react";

interface MyProgramsStatsProps {
  activePrograms: number;
  completedPrograms: number;
  certificatesEarned: number;
  totalPrograms: number;
}

const MyProgramsStats = ({
  activePrograms,
  completedPrograms,
  certificatesEarned,
  totalPrograms,
}: MyProgramsStatsProps) => {
  const stats = [
    {
      title: "Published Programs",
      value: activePrograms,
      icon: BookOpen,
      description: "Currently published",
    },
    {
      title: "Featured Programs",
      value: completedPrograms,
      icon: Award,
      description: "Featured programs",
    },
    {
      title: "Free Programs",
      value: certificatesEarned,
      icon: CheckCircle2,
      description: "Available for free",
    },
    {
      title: "Total Programs",
      value: totalPrograms,
      icon: Layers3,
      description: "Programs available",
    },
  ];

  return (
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-4

        gap-4
        lg:gap-6
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

              rounded-2xl

              p-5

              shadow-sm

              transition

              hover:shadow-md
            "
          >
            <div
              className="
                flex
                items-start
                justify-between

                gap-4
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

                <p
                  className="
                    text-2xl
                    lg:text-3xl

                    font-bold

                    text-slate-900

                    mt-2
                  "
                >
                  {stat.value}
                </p>

                <p
                  className="
                    text-xs

                    text-slate-400

                    mt-1
                  "
                >
                  {stat.description}
                </p>
              </div>

              <div
                className="
                  h-11
                  w-11

                  rounded-xl

                  bg-blue-50
                  text-blue-600

                  flex
                  items-center
                  justify-center

                  shrink-0
                "
              >
                <Icon size={21} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyProgramsStats;