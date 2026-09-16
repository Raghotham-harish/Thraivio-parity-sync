import {
  Activity,
  ArrowRight,
  CheckCircle2,
  Database,
  HardDrive,
  Mail,
  Server,
  ShieldCheck,
  Wallet,
} from "lucide-react";

import type {
  PlatformHealth,
} from "@/types/admin-dashboard";

interface SystemHealthProps {
  systems: PlatformHealth[];
}

const iconMap = {
  server: Server,

  database: Database,

  payments: Wallet,

  storage: HardDrive,

  email: Mail,
};

const SystemHealth = ({
  systems,
}: SystemHealthProps) => {
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

              bg-[#ECFDF5]

              px-4
              py-2

              text-sm
              font-medium

              text-[#065F46]
            "
          >
            <Activity size={16} />

            System Health
          </span>

          <h2
            className="
              mt-5

              text-3xl

              font-bold
            "
          >
            Platform Infrastructure
          </h2>

          <p
            className="
              mt-3

              max-w-3xl

              leading-7

              text-muted-foreground
            "
          >
            Monitor infrastructure,
            APIs, database,
            storage and services
            from one place.
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
          Infrastructure Report
        </button>

      </div>

      {/* Grid */}

      <div
        className="
          mt-8

          grid

          gap-6

          sm:grid-cols-2

          xl:grid-cols-3
        "
      >
        {systems.map((system) => {

          const Icon =
            iconMap[
              system.id as keyof typeof iconMap
            ] ?? ShieldCheck;

          const healthy =
            system.status ===
            "healthy";

          return (

            <div
              key={system.id}
              className="
                rounded-2xl

                border
                border-border

                bg-card

                p-7

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

                    ${
                      healthy
                        ? "bg-[#ECFDF5]"
                        : "bg-amber-50"
                    }
                  `}
                >
                  <Icon
                    size={30}
                    className={
                      healthy
                        ? "text-[#0F8F65]"
                        : "text-amber-600"
                    }
                  />
                </div>

                <span
                  className={`
                    inline-flex

                    items-center

                    gap-2

                    rounded-full

                    px-3
                    py-2

                    text-xs
                    font-semibold

                    ${
                      healthy
                        ? "bg-[#ECFDF5] text-[#065F46]"
                        : "bg-[#FFFBEB] text-[#B45309]"
                    }
                  `}
                >
                  <CheckCircle2 size={14} />

                  {healthy
                    ? "Healthy"
                    : "Warning"}
                </span>
              </div>

              {/* Content */}

              <h3
                className="
                  mt-8

                  text-2xl
                  font-bold

                  text-foreground
                "
              >
                {system.title}
              </h3>

              <p
                className="
                  mt-2

                  text-4xl
                  font-bold

                  text-foreground
                "
              >
                {system.value}
              </p>

              <p
                className="
                  mt-3

                  leading-7

                  text-muted-foreground
                "
              >
                Live infrastructure
                monitoring with backend
                connectivity support.
              </p>

              {/* Progress */}

              <div className="mt-7">

                <div
                  className="
                    flex
                    items-center
                    justify-between

                    text-sm
                  "
                >
                  <span className="text-muted-foreground">
                    Health Score
                  </span>

                  <span className="font-semibold">
                    {healthy ? "99%" : "82%"}
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
                    className={`
                      h-full

                      rounded-full

                      ${
                        healthy
                          ? "bg-[#ECFDF5]0"
                          : "bg-[#F59E0B]"
                      }
                    `}
                    style={{
                      width: healthy
                        ? "99%"
                        : "82%",
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
                <div>

                  <p
                    className="
                      text-xs

                      text-muted-foreground
                    "
                  >
                    Last Checked
                  </p>

                  <h5
                    className="
                      mt-1

                      font-semibold
                    "
                  >
                    Just Now
                  </h5>

                </div>

                <ArrowRight
                  size={20}
                  className="
                    text-muted-foreground

                    transition-all

                    group-hover:translate-x-1
                  "
                />

              </div>

            </div>

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

          from-emerald-600

          via-teal-600

          to-cyan-600

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
          <div className="max-w-2xl">

            <span
              className="
                inline-flex

                rounded-full

                bg-card/10

                px-4
                py-2

                text-sm
              "
            >
              🚀 Infrastructure Status
            </span>

            <h3
              className="
                mt-5

                text-4xl
                font-bold
              "
            >
              Platform is healthy
              and running smoothly.
            </h3>

            <p
              className="
                mt-4

                leading-8

                text-emerald-100
              "
            >
              Server uptime,
              database connectivity,
              payment gateway,
              email services and
              cloud storage are
              continuously monitored.
            </p>

          </div>

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
              "
            >
              <h4 className="text-4xl font-bold">
                99.99%
              </h4>

              <p className="mt-2 text-emerald-100">
                Uptime
              </p>
            </div>

            <div
              className="
                rounded-2xl

                bg-card/10

                p-6
              "
            >
              <h4 className="text-4xl font-bold">
                42ms
              </h4>

              <p className="mt-2 text-emerald-100">
                Avg Response
              </p>
            </div>

            <div
              className="
                rounded-2xl

                bg-card/10

                p-6
              "
            >
              <h4 className="text-4xl font-bold">
                Secure
              </h4>

              <p className="mt-2 text-emerald-100">
                SSL Enabled
              </p>
            </div>

            <div
              className="
                rounded-2xl

                bg-card/10

                p-6
              "
            >
              <h4 className="text-4xl font-bold">
                Live
              </h4>

              <p className="mt-2 text-emerald-100">
                Monitoring
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default SystemHealth;