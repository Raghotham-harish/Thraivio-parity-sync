import {
  ArrowRight,
  BadgeCheck,
  DollarSign,
  TrendingUp,
  Users,
  CalendarCheck,
} from "lucide-react";

interface DashboardHeroProps {
  totalRevenue: string;

  totalUsers: string;

  activeMentors: string;

  todaySessions: string;

  monthlyGrowth: number;

  onViewReports?: () => void;

  onManagePlatform?: () => void;
}

const DashboardHero = ({
  totalRevenue,
  totalUsers,
  activeMentors,
  todaySessions,
  monthlyGrowth,
  onViewReports,
  onManagePlatform,
}: DashboardHeroProps) => {
  return (
    <section
      className="
        mt-8

        overflow-hidden

        rounded-2xl

        bg-gradient-hero

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

          {/* Badge */}

          <div
            className="
              inline-flex
              items-center
              gap-2

              rounded-full

              bg-card/15

              px-4
              py-2

              text-sm
              font-medium
            "
          >
            <BadgeCheck size={16} />

            Platform Running Smoothly
          </div>

          {/* Heading */}

          <h2
            className="
              mt-6

              text-5xl
              font-bold

              leading-tight
            "
          >
            Welcome to

            <br />

            Thraivio Admin
          </h2>

          {/* Description */}

          <p
            className="
              mt-5

              max-w-2xl

              leading-8

              text-blue-100
            "
          >
            Monitor platform growth,
            revenue, mentors,
            users, sessions,
            analytics and every
            important activity
            from one dashboard.
          </p>

          {/* Buttons */}

          <div
            className="
              mt-8

              flex
              flex-wrap

              gap-4
            "
          >
            <button
              onClick={onViewReports}
              className="
                inline-flex
                items-center
                gap-2

                rounded-2xl

                bg-card

                px-7
                py-3.5

                font-semibold

                text-[#2563EB]

                transition-all

                hover:scale-105
              "
            >
              View Reports

              <ArrowRight size={18} />
            </button>

            <button
              onClick={onManagePlatform}
              className="
                rounded-2xl

                border
                border-white/30

                bg-card/10

                px-7
                py-3.5

                font-semibold

                backdrop-blur-md

                transition-all

                hover:bg-card/20
              "
            >
              Manage Platform
            </button>
          </div>

        </div>

        {/* Right */}

        <div
          className="
            w-full

            xl:w-[430px]
          "
        >
          <div
            className="
              rounded-2xl

              bg-card/10

              p-7

              backdrop-blur-md
            "
          >
            {/* Revenue */}

            <div
              className="
                flex
                items-center
                justify-between
              "
            >
              <div>

                <p className="text-blue-100">
                  Monthly Revenue
                </p>

                <h3
                  className="
                    mt-2

                    text-4xl
                    font-bold
                  "
                >
                  {totalRevenue}
                </h3>

              </div>

              <div
                className="
                  flex

                  h-16
                  w-16

                  items-center
                  justify-center

                  rounded-2xl

                  bg-card/15
                "
              >
                <DollarSign size={32} />
              </div>

            </div>

            {/* Growth */}

            <div
              className="
                mt-8

                flex
                items-center
                justify-between
              "
            >
              <span className="text-blue-100">
                Monthly Growth
              </span>

              <div
                className="
                  inline-flex
                  items-center
                  gap-2

                  rounded-full

                  bg-[#1DD7A5]/20

                  px-4
                  py-2
                "
              >
                <TrendingUp size={18} />

                <span
                  className="
                    font-semibold
                  "
                >
                  +{monthlyGrowth}%
                </span>
              </div>
            </div>
                        {/* Divider */}

            <div
              className="
                my-8

                h-px

                bg-card/20
              "
            />

            {/* Platform Metrics */}

            <div
              className="
                grid

                grid-cols-3

                gap-4
              "
            >
              {/* Users */}

              <div
                className="
                  rounded-2xl

                  bg-card/10

                  p-4

                  text-center
                "
              >
                <Users
                  size={26}
                  className="
                    mx-auto

                    text-cyan-200
                  "
                />

                <h4
                  className="
                    mt-3

                    text-2xl
                    font-bold
                  "
                >
                  {totalUsers}
                </h4>

                <p
                  className="
                    mt-1

                    text-xs

                    text-blue-100
                  "
                >
                  Total Users
                </p>
              </div>

              {/* Mentors */}

              <div
                className="
                  rounded-2xl

                  bg-card/10

                  p-4

                  text-center
                "
              >
                <BadgeCheck
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
                  {activeMentors}
                </h4>

                <p
                  className="
                    mt-1

                    text-xs

                    text-blue-100
                  "
                >
                  Active Mentors
                </p>
              </div>

              {/* Sessions */}

              <div
                className="
                  rounded-2xl

                  bg-card/10

                  p-4

                  text-center
                "
              >
                <CalendarCheck
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
                  {todaySessions}
                </h4>

                <p
                  className="
                    mt-1

                    text-xs

                    text-blue-100
                  "
                >
                  Today's Sessions
                </p>
              </div>
            </div>

            {/* Bottom Summary */}

            <div
              className="
                mt-8

                rounded-2xl

                bg-card/10

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
                  Platform Health
                </span>

                <span
                  className="
                    rounded-full

                    bg-[#ECFDF5]/20

                    px-3
                    py-1

                    text-sm
                    font-semibold

                    text-emerald-200
                  "
                >
                  Excellent
                </span>
              </div>

              <div
                className="
                  mt-4

                  h-2

                  overflow-hidden

                  rounded-full

                  bg-card/20
                "
              >
                <div
                  className="
                    h-full

                    rounded-full

                    bg-emerald-400
                  "
                  style={{
                    width: "92%",
                  }}
                />
              </div>

              <p
                className="
                  mt-4

                  text-sm

                  leading-6

                  text-blue-100
                "
              >
                Your platform is performing
                exceptionally well with
                strong mentor engagement,
                healthy user activity,
                consistent revenue growth
                and stable system uptime.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default DashboardHero;