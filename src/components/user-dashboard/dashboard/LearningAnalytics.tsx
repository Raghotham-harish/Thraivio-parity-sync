import {
  ArrowUpRight,
  BarChart3,
  BookOpen,
  Clock3,
  Flame,
  Target,
  Trophy,
} from "lucide-react";

interface LearningAnalyticsProps {
  totalLearningHours: number;

  weeklyHours: number;

  completedPrograms: number;

  activeStreak: number;

  weeklyProgress: number[];
}

const days = [
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun",
];

const LearningAnalytics = ({
  totalLearningHours,
  weeklyHours,
  completedPrograms,
  activeStreak,
  weeklyProgress,
}: LearningAnalyticsProps) => {
  const max = Math.max(...weeklyProgress);

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

              bg-indigo-50

              px-4
              py-2

              text-sm
              font-medium

              text-indigo-700
            "
          >
            <BarChart3 size={16} />

            Learning Analytics
          </span>

          <h2
            className="
              mt-5

              text-3xl
              font-bold
            "
          >
            Your Learning Insights
          </h2>

          <p
            className="
              mt-3

              max-w-3xl

              text-slate-500
            "
          >
            Track your learning activity,
            progress, streaks and completed
            programs to stay consistent.
          </p>
        </div>

        <button
          className="
            inline-flex
            items-center
            gap-2

            rounded-2xl

            border
            border-slate-200

            px-6
            py-3.5

            font-semibold

            transition

            hover:bg-slate-50
          "
        >
          View Detailed Report

          <ArrowUpRight size={18} />
        </button>
      </div>

      {/* Stats */}

      <div
        className="
          mt-8

          grid

          gap-6

          sm:grid-cols-2
          xl:grid-cols-4
        "
      >
        {/* Hours */}

        <div
          className="
            rounded-[30px]

            border
            border-slate-200

            bg-white

            p-6
          "
        >
          <div
            className="
              flex
              h-16
              w-16

              items-center
              justify-center

              rounded-3xl

              bg-blue-50
            "
          >
            <Clock3
              className="text-blue-600"
              size={30}
            />
          </div>

          <p className="mt-7 text-slate-500">
            Total Learning
          </p>

          <h3 className="mt-2 text-4xl font-bold">
            {totalLearningHours}h
          </h3>
        </div>

        {/* Week */}

        <div
          className="
            rounded-[30px]

            border
            border-slate-200

            bg-white

            p-6
          "
        >
          <div
            className="
              flex
              h-16
              w-16

              items-center
              justify-center

              rounded-3xl

              bg-green-50
            "
          >
            <Target
              className="text-green-600"
              size={30}
            />
          </div>

          <p className="mt-7 text-slate-500">
            This Week
          </p>

          <h3 className="mt-2 text-4xl font-bold">
            {weeklyHours}h
          </h3>
        </div>

        {/* Programs */}

        <div
          className="
            rounded-[30px]

            border
            border-slate-200

            bg-white

            p-6
          "
        >
          <div
            className="
              flex
              h-16
              w-16

              items-center
              justify-center

              rounded-3xl

              bg-violet-50
            "
          >
            <BookOpen
              className="text-violet-600"
              size={30}
            />
          </div>

          <p className="mt-7 text-slate-500">
            Programs
          </p>

          <h3 className="mt-2 text-4xl font-bold">
            {completedPrograms}
          </h3>
        </div>

        {/* Streak */}

        <div
          className="
            rounded-[30px]

            border
            border-slate-200

            bg-white

            p-6
          "
        >
          <div
            className="
              flex
              h-16
              w-16

              items-center
              justify-center

              rounded-3xl

              bg-orange-50
            "
          >
            <Flame
              className="text-orange-600"
              size={30}
            />
          </div>

          <p className="mt-7 text-slate-500">
            Active Streak
          </p>

          <h3 className="mt-2 text-4xl font-bold">
            {activeStreak}
          </h3>
        </div>
      </div>

      {/* Weekly Chart */}

      <div
        className="
          mt-8

          rounded-[32px]

          border
          border-slate-200

          bg-white

          p-8
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
            <h3 className="text-2xl font-bold">
              Weekly Learning
            </h3>

            <p className="mt-2 text-slate-500">
              Hours spent learning this week
            </p>
          </div>

          <div
            className="
              rounded-full

              bg-blue-50

              px-4
              py-2

              text-sm
              font-semibold

              text-blue-700
            "
          >
            Last 7 Days
          </div>
        </div>

        <div
          className="
            mt-10

            flex

            h-72

            items-end
            justify-between

            gap-5
          "
        >
          {weeklyProgress.map((value, index) => (
            <div
              key={days[index]}
              className="
                flex
                flex-1
                flex-col
                items-center
              "
            >
              <div
                className="
                  w-full

                  rounded-t-3xl

                  bg-gradient-to-t
                  from-blue-600
                  to-cyan-400

                  transition-all

                  hover:opacity-80
                "
                style={{
                  height: `${(value / max) * 220}px`,
                }}
              />

              <span
                className="
                  mt-4

                  text-sm
                  font-medium

                  text-slate-500
                "
              >
                {days[index]}
              </span>

              <span
                className="
                  mt-1

                  text-sm

                  font-semibold
                "
              >
                {value}h
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Banner */}

      <div
        className="
          mt-8

          rounded-[32px]

          bg-gradient-to-r
          from-indigo-600
          via-blue-600
          to-cyan-600

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
              Great Progress 🎉
            </h3>

            <p
              className="
                mt-3

                max-w-2xl

                text-blue-100
              "
            >
              You're maintaining a strong
              learning streak. Keep attending
              sessions and completing
              programs to unlock more
              achievements.
            </p>
          </div>

          <div
            className="
              flex
              h-20
              w-20

              items-center
              justify-center

              rounded-full

              bg-white/10
            "
          >
            <Trophy size={40} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningAnalytics;