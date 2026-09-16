import {
  ArrowRight,
  BadgeCheck,
  Bell,
  BookOpen,
  CalendarDays,
  FileText,
  LifeBuoy,
  Settings,
  Shield,
  Users,
} from "lucide-react";

import type {
  QuickAction,
} from "@/types/admin-dashboard";

interface QuickActionsProps {
  actions: QuickAction[];

  onActionClick?: (path: string) => void;
}

const iconMap = {
  BadgeCheck,

  Users,

  BookOpen,

  CalendarDays,

  Bell,

  FileText,

  LifeBuoy,

  Settings,

  Shield,
};

const colorMap = {
  blue: {
    bg: "bg-blue-50",
    icon: "text-primary",
  },

  emerald: {
    bg: "bg-[#ECFDF5]",
    icon: "text-[#0F8F65]",
  },

  violet: {
    bg: "bg-violet-50",
    icon: "text-violet-600",
  },

  orange: {
    bg: "bg-orange-50",
    icon: "text-[#B45309]",
  },

  pink: {
    bg: "bg-pink-50",
    icon: "text-pink-600",
  },

  cyan: {
    bg: "bg-cyan-50",
    icon: "text-primary",
  },

  indigo: {
    bg: "bg-[#EFF6FF]",
    icon: "text-primary",
  },

  slate: {
    bg: "bg-secondary",
    icon: "text-foreground",
  },
};

const DashboardQuickActions = ({
  actions,
  onActionClick,
}: QuickActionsProps) => {
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

              bg-[#EFF6FF]

              px-4
              py-2

              text-sm
              font-medium

              text-[#2563EB]
            "
          >
            Quick Actions
          </span>

          <h2
            className="
              mt-5

              text-3xl

              font-bold
            "
          >
            Administrator Shortcuts
          </h2>

          <p
            className="
              mt-3

              max-w-3xl

              leading-7

              text-muted-foreground
            "
          >
            Instantly access the most
            frequently used admin
            operations from one place.
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
          Customize Actions
        </button>

      </div>

      {/* Grid */}

      <div
        className="
          mt-8

          grid

          gap-6

          sm:grid-cols-2

          xl:grid-cols-4
        "
      >
        {actions.map((action) => {
          const Icon =
            iconMap[
              action.icon as keyof typeof iconMap
            ] ?? Shield;

          const colors =
            colorMap.indigo;

          return (
            <button
              key={action.id}
              onClick={() =>
                onActionClick?.(
                  action.path
                )
              }
              className="
                group

                rounded-2xl

                border
                border-border

                bg-card

                p-7

                text-left

                transition-all
                duration-300

                hover:-translate-y-2

                hover:border-indigo-200

                hover:shadow-xl
              "
            >
              {/* Card Top */}
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

                    ${colors.bg}
                  `}
                >
                  <Icon
                    size={30}
                    className={colors.icon}
                  />
                </div>

                <ArrowRight
                  size={22}
                  className="
                    text-muted-foreground

                    transition-all
                    duration-300

                    group-hover:translate-x-1

                    group-hover:text-primary
                  "
                />
              </div>

              {/* Content */}

              <h3
                className="
                  mt-7

                  text-2xl
                  font-bold

                  text-foreground

                  transition-colors

                  group-hover:text-primary
                "
              >
                {action.title}
              </h3>

              <p
                className="
                  mt-3

                  min-h-[56px]

                  leading-7

                  text-muted-foreground
                "
              >
                {action.description}
              </p>

              {/* Footer */}

              <div
                className="
                  mt-8

                  flex
                  items-center
                  justify-between
                "
              >
                <span
                  className="
                    inline-flex

                    items-center

                    gap-2

                    rounded-full

                    bg-secondary

                    px-4
                    py-2

                    text-sm
                    font-semibold

                    transition-all

                    group-hover:bg-indigo-600

                    group-hover:text-white
                  "
                >
                  Open

                  <ArrowRight size={16} />
                </span>

                <div
                  className="
                    h-2.5
                    w-2.5

                    rounded-full

                    bg-[#ECFDF5]0
                  "
                />
              </div>

            </button>
          );
        })}
      </div>

      {/* Bottom Banner */}

      <div
        className="
          mt-10

          overflow-hidden

          rounded-2xl

          bg-gradient-to-r

          from-slate-900

          via-indigo-900

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
          {/* Left */}

          <div className="max-w-2xl">

            <span
              className="
                inline-flex

                items-center

                gap-2

                rounded-full

                bg-card/10

                px-4
                py-2

                text-sm
              "
            >
              ⚡ Admin Productivity
            </span>

            <h3
              className="
                mt-5

                text-4xl
                font-bold

                leading-tight
              "
            >
              Everything an Admin
              needs in one place.
            </h3>

            <p
              className="
                mt-4

                leading-8

                text-slate-300
              "
            >
              Approve mentors,
              manage users,
              monitor payments,
              review reports,
              send notifications
              and control the
              complete platform
              from a single dashboard.
            </p>

            <button
              className="
                mt-8

                inline-flex

                items-center

                gap-2

                rounded-2xl

                bg-card

                px-7
                py-3.5

                font-semibold

                text-foreground

                transition-all

                duration-300

                hover:scale-105
              "
            >
              Open Admin Center

              <ArrowRight size={18} />
            </button>

          </div>

          {/* Right */}

          <div
            className="
              grid

              gap-4

              sm:grid-cols-2
            "
          >
            <div
              className="
                rounded-2xl

                bg-card/10

                p-6

                backdrop-blur-sm
              "
            >
              <h4
                className="
                  text-4xl
                  font-bold
                "
              >
                15+
              </h4>

              <p className="mt-2 text-slate-300">
                Admin Modules
              </p>
            </div>

            <div
              className="
                rounded-2xl

                bg-card/10

                p-6

                backdrop-blur-sm
              "
            >
              <h4
                className="
                  text-4xl
                  font-bold
                "
              >
                24/7
              </h4>

              <p className="mt-2 text-slate-300">
                Platform Monitoring
              </p>
            </div>

            <div
              className="
                rounded-2xl

                bg-card/10

                p-6

                backdrop-blur-sm
              "
            >
              <h4
                className="
                  text-4xl
                  font-bold
                "
              >
                100%
              </h4>

              <p className="mt-2 text-slate-300">
                Secure Controls
              </p>
            </div>

            <div
              className="
                rounded-2xl

                bg-card/10

                p-6

                backdrop-blur-sm
              "
            >
              <h4
                className="
                  text-4xl
                  font-bold
                "
              >
                Real-Time
              </h4>

              <p className="mt-2 text-slate-300">
                Platform Insights
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default DashboardQuickActions;