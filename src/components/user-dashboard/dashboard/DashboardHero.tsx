import {
  Award,
  Flame,
  Star,
  Trophy,
} from "lucide-react";

import type { DashboardHero as DashboardHeroType } from "@/types/dashboard";

interface DashboardHeroProps {
  hero: DashboardHeroType;
}

const DashboardHero = ({
  hero,
}: DashboardHeroProps) => {
  return (
    <section
      className="
        mt-8

        overflow-hidden

        rounded-[36px]

        bg-gradient-to-r
        from-blue-600
        via-indigo-600
        to-violet-600

        p-8

        text-white
      "
    >
      <div
        className="
          flex
          flex-col

          gap-10

          xl:flex-row
          xl:items-center
          xl:justify-between
        "
      >
        {/* Left */}

        <div className="flex-1">
          <div
            className="
              inline-flex
              items-center
              gap-2

              rounded-full

              bg-white/15

              px-4
              py-2

              text-sm
              font-medium
            "
          >
            <Star size={16} />

            Level {hero.level}
          </div>

          <h2
            className="
              mt-6

              text-4xl
              font-bold
            "
          >
            {hero.greeting}
          </h2>

          <p
            className="
              mt-4

              max-w-2xl

              text-blue-100

              leading-8
            "
          >
            {hero.welcomeMessage}
          </p>

          {/* XP */}

          <div className="mt-8">
            <div
              className="
                mb-3

                flex
                items-center
                justify-between
              "
            >
              <span
                className="
                  text-sm
                  text-blue-100
                "
              >
                Experience Points
              </span>

              <span
                className="
                  font-semibold
                "
              >
                {hero.xp} XP
              </span>
            </div>

            <div
              className="
                h-3

                overflow-hidden

                rounded-full

                bg-white/20
              "
            >
              <div
                className="
                  h-full

                  rounded-full

                  bg-white
                "
                style={{
                  width: `${Math.min(
                    hero.profileCompletion,
                    100
                  )}%`,
                }}
              />
            </div>
          </div>
        </div>

        {/* Right */}

        <div
          className="
            w-full

            xl:w-[420px]
          "
        >
          <div
            className="
              rounded-[32px]

              bg-white/10

              p-6

              backdrop-blur-md
            "
          >
            <div
              className="
                flex
                items-center
                gap-5
              "
            >
              <img
                src={hero.avatar}
                alt={hero.userName}
                className="
                  h-24
                  w-24

                  rounded-3xl

                  border-4
                  border-white/30

                  object-cover
                "
              />

              <div>
                <h3
                  className="
                    text-2xl
                    font-bold
                  "
                >
                  {hero.userName}
                </h3>

                <p className="text-blue-100">
                  Premium Learner
                </p>
              </div>
            </div>

            {/* Stats */}

            <div
              className="
                mt-8

                grid

                grid-cols-3

                gap-4
              "
            >
              <div
                className="
                  rounded-2xl

                  bg-white/10

                  p-4

                  text-center
                "
              >
                <Flame
                  size={26}
                  className="
                    mx-auto

                    text-orange-300
                  "
                />

                <h4
                  className="
                    mt-3

                    text-2xl
                    font-bold
                  "
                >
                  {hero.streak}
                </h4>

                <p
                  className="
                    mt-1

                    text-xs

                    text-blue-100
                  "
                >
                  Day Streak
                </p>
              </div>

              <div
                className="
                  rounded-2xl

                  bg-white/10

                  p-4

                  text-center
                "
              >
                <Award
                  size={26}
                  className="
                    mx-auto

                    text-yellow-300
                  "
                />

                <h4
                  className="
                    mt-3

                    text-2xl
                    font-bold
                  "
                >
                  {hero.level}
                </h4>

                <p
                  className="
                    mt-1

                    text-xs

                    text-blue-100
                  "
                >
                  Current Level
                </p>
              </div>

              <div
                className="
                  rounded-2xl

                  bg-white/10

                  p-4

                  text-center
                "
              >
                <Trophy
                  size={26}
                  className="
                    mx-auto

                    text-emerald-300
                  "
                />

                <h4
                  className="
                    mt-3

                    text-2xl
                    font-bold
                  "
                >
                  {hero.profileCompletion}%
                </h4>

                <p
                  className="
                    mt-1

                    text-xs

                    text-blue-100
                  "
                >
                  Profile
                </p>
              </div>
            </div>

            {/* Footer */}

            <div
              className="
                mt-8

                rounded-2xl

                bg-white/10

                p-5
              "
            >
              <div
                className="
                  flex
                  items-center
                  justify-between
                "
              >
                <span className="text-blue-100">
                  Next Milestone
                </span>

                <span
                  className="
                    font-semibold
                  "
                >
                  Level {hero.level + 1}
                </span>
              </div>

              <div
                className="
                  mt-4

                  h-2

                  overflow-hidden

                  rounded-full

                  bg-white/20
                "
              >
                <div
                  className="
                    h-full

                    rounded-full

                    bg-yellow-300
                  "
                  style={{
                    width: `${hero.profileCompletion}%`,
                  }}
                />
              </div>

              <p
                className="
                  mt-3

                  text-sm

                  text-blue-100
                "
              >
                Keep learning to unlock the
                next achievement and earn
                more XP.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardHero;