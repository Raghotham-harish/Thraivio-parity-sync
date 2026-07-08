import {
  Award,
  BadgeCheck,
  BookOpen,
  Medal,
  Star,
  Trophy,
} from "lucide-react";

interface Achievement {
  id: string;

  title: string;

  description: string;

  icon:
    | "trophy"
    | "medal"
    | "award"
    | "star";

  progress: number;

  unlocked: boolean;

  xp: number;
}

interface AchievementsProps {
  achievements: Achievement[];

  totalXP: number;

  completedAchievements: number;

  totalAchievements: number;
}

const iconMap = {
  trophy: Trophy,
  medal: Medal,
  award: Award,
  star: Star,
};

const Achievements = ({
  achievements,
  totalXP,
  completedAchievements,
  totalAchievements,
}: AchievementsProps) => {
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
              gap-2

              rounded-full

              bg-yellow-50

              px-4
              py-2

              text-sm
              font-medium

              text-yellow-700
            "
          >
            <Trophy size={16} />

            Achievements
          </span>

          <h2
            className="
              mt-5

              text-3xl
              font-bold
            "
          >
            Learning Milestones
          </h2>

          <p
            className="
              mt-3

              max-w-3xl

              text-slate-500
            "
          >
            Unlock badges, earn XP and
            celebrate your learning journey.
          </p>
        </div>

        <div
          className="
            flex
            gap-4
          "
        >
          <div
            className="
              rounded-3xl

              bg-blue-50

              px-6
              py-5
            "
          >
            <p className="text-sm text-slate-500">
              Total XP
            </p>

            <h3 className="mt-2 text-3xl font-bold text-blue-600">
              {totalXP}
            </h3>
          </div>

          <div
            className="
              rounded-3xl

              bg-green-50

              px-6
              py-5
            "
          >
            <p className="text-sm text-slate-500">
              Completed
            </p>

            <h3 className="mt-2 text-3xl font-bold text-green-600">
              {completedAchievements}/
              {totalAchievements}
            </h3>
          </div>
        </div>
      </div>

      {/* Cards */}

      <div
        className="
          mt-8

          grid

          gap-6

          md:grid-cols-2
          xl:grid-cols-4
        "
      >
        {achievements.map((achievement) => {
          const Icon =
            iconMap[achievement.icon];

          return (
            <div
              key={achievement.id}
              className="
                rounded-[30px]

                border
                border-slate-200

                bg-white

                p-7

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-blue-200
                hover:shadow-xl
              "
            >
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

                    ${
                      achievement.unlocked
                        ? "bg-yellow-50"
                        : "bg-slate-100"
                    }
                  `}
                >
                  <Icon
                    size={30}
                    className={
                      achievement.unlocked
                        ? "text-yellow-600"
                        : "text-slate-400"
                    }
                  />
                </div>

                {achievement.unlocked && (
                  <BadgeCheck
                    size={24}
                    className="text-green-600"
                  />
                )}
              </div>

              <h3
                className="
                  mt-7

                  text-xl
                  font-bold
                "
              >
                {achievement.title}
              </h3>

              <p
                className="
                  mt-3

                  leading-7

                  text-slate-500
                "
              >
                {achievement.description}
              </p>

              {/* Progress */}

              <div className="mt-6">
                <div
                  className="
                    flex
                    justify-between

                    text-sm
                  "
                >
                  <span>
                    Progress
                  </span>

                  <span>
                    {achievement.progress}%
                  </span>
                </div>

                <div
                  className="
                    mt-2

                    h-2

                    overflow-hidden

                    rounded-full

                    bg-slate-200
                  "
                >
                  <div
                    className="
                      h-full

                      rounded-full

                      bg-gradient-to-r
                      from-blue-500
                      to-indigo-600
                    "
                    style={{
                      width: `${achievement.progress}%`,
                    }}
                  />
                </div>
              </div>

              <div
                className="
                  mt-7

                  flex
                  items-center
                  justify-between
                "
              >
                <div
                  className="
                    inline-flex
                    items-center
                    gap-2

                    rounded-full

                    bg-blue-50

                    px-4
                    py-2

                    text-sm
                    font-semibold

                    text-blue-700
                  "
                >
                  <BookOpen size={16} />

                  {achievement.xp} XP
                </div>

                <span
                  className={`
                    rounded-full

                    px-3
                    py-1

                    text-xs
                    font-semibold

                    ${
                      achievement.unlocked
                        ? "bg-green-100 text-green-700"
                        : "bg-slate-100 text-slate-600"
                    }
                  `}
                >
                  {achievement.unlocked
                    ? "Unlocked"
                    : "In Progress"}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Banner */}

      <div
        className="
          mt-8

          rounded-[32px]

          bg-gradient-to-r
          from-yellow-500
          via-orange-500
          to-red-500

          p-8

          text-white
        "
      >
        <div
          className="
            flex
            flex-col

            gap-6

            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          <div>
            <h3
              className="
                text-3xl
                font-bold
              "
            >
              Keep Learning 🚀
            </h3>

            <p
              className="
                mt-3

                max-w-2xl

                text-orange-100
              "
            >
              Complete more sessions,
              programs and challenges to
              unlock premium badges and
              climb the leaderboard.
            </p>
          </div>

          <div
            className="
              flex
              h-24
              w-24

              items-center
              justify-center

              rounded-full

              bg-white/10
            "
          >
            <Trophy size={48} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;