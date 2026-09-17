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
      text: "text-primary",
    },

    {
      title: "Verified Mentors",
      value: verifiedMentors.toLocaleString(),
      icon: BadgeCheck,
      color: "emerald",
      bg: "bg-[#ECFDF5]",
      text: "text-[#0F8F65]",
    },

    {
      title: "Programs",
      value: totalPrograms.toLocaleString(),
      icon: BookOpen,
      color: "orange",
      bg: "bg-orange-50",
      text: "text-[#B45309]",
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
      text: "text-primary",
    },

    {
      title: "Platform Health",
      value: `${platformHealth}%`,
      icon: ShieldCheck,
      color: "green",
      bg: "bg-green-50",
      text: "text-[#0F8F65]",
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

              text-muted-foreground
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

              text-muted-foreground
            "
          >
            Monitor the complete
            Thraivio ecosystem
            including mentors,
            learners, programs,
            events and platform health.
          </p>

        </div>

        <button
          className="
            rounded-2xl

            border
            border-border

            bg-card

            px-6
            py-3

            font-semibold

            transition

            hover:bg-secondary
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
                rounded-2xl

                border
                border-border

                bg-card

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

                    rounded-2xl

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

                    bg-[#ECFDF5]

                    px-3
                    py-2

                    text-xs
                    font-semibold

                    text-[#065F46]
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

                  text-foreground
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

                  text-foreground
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

                  text-muted-foreground
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
                  <span className="text-muted-foreground">
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

                    bg-secondary
                  "
                >
                  <div
                    className="
                      h-full

                      rounded-full

                      

                      bg-primary

                      

                      
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

                    text-primary

                    transition

                    hover:text-[#2563EB]
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

                      bg-[#10B981]
                    "
                  />

                  <span
                    className="
                      text-xs

                      text-muted-foreground
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

          rounded-2xl

          border
          border-border

          bg-card

          p-8
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

                bg-secondary

                px-4
                py-2

                text-sm
                font-semibold
                text-primary
              "
            >
              Platform Summary
            </span>

            <h3
              className="
                mt-5

                text-3xl
                font-medium
                text-foreground
              "
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Everything is running smoothly
            </h3>

            <p
              className="
                mt-4

                max-w-2xl

                leading-8

                text-muted-foreground
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

              bg-primary

              px-8
              py-4

              font-semibold

              text-white

              transition-all

              hover:bg-primary/90
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