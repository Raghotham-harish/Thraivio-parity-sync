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

              bg-emerald-50

              px-4
              py-2

              text-sm
              font-medium

              text-emerald-700
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

              text-slate-500
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
            border-slate-200

            bg-white

            px-6
            py-3

            font-semibold

            transition

            hover:bg-slate-50
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
                rounded-[30px]

                border
                border-slate-200

                bg-white

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

                    rounded-3xl

                    ${
                      healthy
                        ? "bg-emerald-50"
                        : "bg-amber-50"
                    }
                  `}
                >
                  <Icon
                    size={30}
                    className={
                      healthy
                        ? "text-emerald-600"
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
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-amber-100 text-amber-700"
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

                  text-slate-900
                "
              >
                {system.title}
              </h3>

              <p
                className="
                  mt-2

                  text-4xl
                  font-bold

                  text-slate-900
                "
              >
                {system.value}
              </p>

              <p
                className="
                  mt-3

                  leading-7

                  text-slate-500
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
                  <span className="text-slate-500">
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

                    bg-slate-100
                  "
                >
                  <div
                    className={`
                      h-full

                      rounded-full

                      ${
                        healthy
                          ? "bg-emerald-500"
                          : "bg-amber-500"
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

                      text-slate-500
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
                    text-slate-400

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

          rounded-[36px]

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

                bg-white/10

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
                rounded-3xl

                bg-white/10

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
                rounded-3xl

                bg-white/10

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
                rounded-3xl

                bg-white/10

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
                rounded-3xl

                bg-white/10

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