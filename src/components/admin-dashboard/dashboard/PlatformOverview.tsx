import {
  BadgeCheck,
  BookOpen,
  CalendarDays,
  GraduationCap,
  ShieldCheck,
  Users,
} from "lucide-react";

interface PlatformOverviewProps {
  totalUsers: number;

  totalMentors: number;

  totalPrograms: number;

  totalEvents: number;

  verifiedMentors: number;

  platformHealth: number;
}

const PlatformOverview = ({
  totalUsers,
  totalMentors,
  totalPrograms,
  totalEvents,
  verifiedMentors,
  platformHealth,
}: PlatformOverviewProps) => {
  const overviewCards = [
    {
      title: "Platform Users",
      value: totalUsers.toLocaleString(),
      icon: Users,
      color: "blue",
      bg: "bg-blue-50",
      text: "text-blue-600",
    },

    {
      title: "Verified Mentors",
      value: verifiedMentors.toLocaleString(),
      icon: BadgeCheck,
      color: "emerald",
      bg: "bg-emerald-50",
      text: "text-emerald-600",
    },

    {
      title: "Programs",
      value: totalPrograms.toLocaleString(),
      icon: BookOpen,
      color: "orange",
      bg: "bg-orange-50",
      text: "text-orange-600",
    },

    {
      title: "Events",
      value: totalEvents.toLocaleString(),
      icon: CalendarDays,
      color: "violet",
      bg: "bg-violet-50",
      text: "text-violet-600",
    },

    {
      title: "Mentors",
      value: totalMentors.toLocaleString(),
      icon: GraduationCap,
      color: "cyan",
      bg: "bg-cyan-50",
      text: "text-cyan-600",
    },

    {
      title: "Platform Health",
      value: `${platformHealth}%`,
      icon: ShieldCheck,
      color: "green",
      bg: "bg-green-50",
      text: "text-green-600",
    },
  ];

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

              rounded-full

              bg-violet-50

              px-4
              py-2

              text-sm
              font-medium

              text-violet-700
            "
          >
            Platform Overview
          </span>

          <h2
            className="
              mt-5

              text-3xl

              font-bold
            "
          >
            Overall Platform Performance
          </h2>

          <p
            className="
              mt-3

              max-w-3xl

              leading-7

              text-slate-500
            "
          >
            Monitor the complete
            CoachCoaching ecosystem
            including mentors,
            learners, programs,
            events and platform health.
          </p>

        </div>

        <button
          className="
            rounded-2xl

            border
            border-slate-200

            bg-white

            px-6
            py-3

            font-semibold

            transition

            hover:bg-slate-50
          "
        >
          View Details
        </button>

      </div>

      {/* Grid */}

      <div
        className="
          mt-8

          grid

          gap-6

          md:grid-cols-2

          xl:grid-cols-3
        "
      >
        {overviewCards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="
                rounded-[30px]

                border
                border-slate-200

                bg-white

                p-6

                transition-all

                duration-300

                hover:-translate-y-2

                hover:shadow-xl
              "
            >
              {/* Top */}
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

                    ${card.bg}
                  `}
                >
                  <Icon
                    size={30}
                    className={card.text}
                  />
                </div>

                <span
                  className="
                    rounded-full

                    bg-emerald-100

                    px-3
                    py-2

                    text-xs
                    font-semibold

                    text-emerald-700
                  "
                >
                  Live
                </span>
              </div>

              {/* Value */}

              <h3
                className="
                  mt-8

                  text-4xl
                  font-bold

                  text-slate-900
                "
              >
                {card.value}
              </h3>

              {/* Title */}

              <p
                className="
                  mt-2

                  text-lg
                  font-semibold

                  text-slate-700
                "
              >
                {card.title}
              </p>

              {/* Description */}

              <p
                className="
                  mt-3

                  text-sm

                  leading-6

                  text-slate-500
                "
              >
                Live platform statistics
                updated from dashboard
                analytics. Backend API
                integration ready.
              </p>

              {/* Progress */}

              <div className="mt-6">

                <div
                  className="
                    flex
                    items-center
                    justify-between

                    text-sm
                  "
                >
                  <span className="text-slate-500">
                    Performance
                  </span>

                  <span
                    className="
                      font-semibold
                    "
                  >
                    {card.title ===
                    "Platform Health"
                      ? platformHealth
                      : 95}
                    %
                  </span>
                </div>

                <div
                  className="
                    mt-3

                    h-2

                    overflow-hidden

                    rounded-full

                    bg-slate-100
                  "
                >
                  <div
                    className="
                      h-full

                      rounded-full

                      bg-gradient-to-r

                      from-blue-600

                      via-indigo-500

                      to-violet-500
                    "
                    style={{
                      width: `${
                        card.title ===
                        "Platform Health"
                          ? platformHealth
                          : 95
                      }%`,
                    }}
                  />
                </div>

              </div>

              {/* Footer */}

              <div
                className="
                  mt-8

                  flex
                  items-center
                  justify-between
                "
              >
                <button
                  className="
                    text-sm
                    font-semibold

                    text-blue-600

                    transition

                    hover:text-blue-700
                  "
                >
                  View Details
                </button>

                <div
                  className="
                    flex
                    items-center
                    gap-2
                  "
                >
                  <span
                    className="
                      h-2.5
                      w-2.5

                      rounded-full

                      bg-emerald-500
                    "
                  />

                  <span
                    className="
                      text-xs

                      text-slate-500
                    "
                  >
                    Healthy
                  </span>
                </div>

              </div>

            </div>
          );
        })}
      </div>

      {/* Bottom Summary */}

      <div
        className="
          mt-8

          rounded-[32px]

          bg-gradient-to-r

          from-slate-900

          via-slate-800

          to-slate-900

          p-8

          text-white
        "
      >
        <div
          className="
            flex
            flex-col

            gap-8

            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          <div>

            <span
              className="
                rounded-full

                bg-white/10

                px-4
                py-2

                text-sm
              "
            >
              Platform Summary
            </span>

            <h3
              className="
                mt-5

                text-4xl
                font-bold
              "
            >
              Everything is running
              smoothly 🚀
            </h3>

            <p
              className="
                mt-4

                max-w-2xl

                leading-8

                text-slate-300
              "
            >
              Your platform is healthy with
              growing users, verified mentors,
              active learning programs,
              successful events and stable
              infrastructure.
            </p>

          </div>

          <button
            className="
              rounded-2xl

              bg-white

              px-8
              py-4

              font-semibold

              text-slate-900

              transition-all

              hover:scale-105
            "
          >
            View Full Analytics
          </button>

        </div>

      </div>

    </section>
  );
};

export default PlatformOverview;