import {
  Award,
  BookOpen,
  CalendarCheck,
  Clock3,
  CreditCard,
  Heart,
  MessageCircle,
  PlayCircle,
} from "lucide-react";

type ActivityType =
  | "session"
  | "program"
  | "certificate"
  | "payment"
  | "saved"
  | "message";

interface Activity {
  id: string;

  type: ActivityType;

  title: string;

  description: string;

  time: string;
}

interface RecentActivitiesProps {
  activities: Activity[];
}

const iconMap = {
  session: CalendarCheck,
  program: BookOpen,
  certificate: Award,
  payment: CreditCard,
  saved: Heart,
  message: MessageCircle,
};

const colorMap = {
  session: "bg-blue-50 text-blue-600",

  program: "bg-violet-50 text-violet-600",

  certificate:
    "bg-amber-50 text-amber-600",

  payment: "bg-emerald-50 text-emerald-600",

  saved: "bg-pink-50 text-pink-600",

  message: "bg-cyan-50 text-cyan-600",
};

const RecentActivities = ({
  activities,
}: RecentActivitiesProps) => {
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

              bg-slate-100

              px-4
              py-2

              text-sm
              font-medium
            "
          >
            <Clock3 size={16} />

            Activity Timeline
          </span>

          <h2
            className="
              mt-5

              text-3xl
              font-bold
            "
          >
            Recent Activities
          </h2>

          <p
            className="
              mt-3

              max-w-3xl

              text-slate-500
            "
          >
            View all your latest learning
            activities in one place.
          </p>
        </div>

        <button
          className="
            rounded-2xl

            border
            border-slate-200

            px-6
            py-3

            font-semibold

            transition

            hover:bg-slate-50
          "
        >
          View All
        </button>
      </div>

      {/* Timeline */}

      <div
        className="
          mt-8

          space-y-6
        "
      >
        {activities.map((activity) => {
          const Icon =
            iconMap[activity.type];

          return (
            <div
              key={activity.id}
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
                  flex-col

                  gap-6

                  lg:flex-row
                  lg:items-center
                  lg:justify-between
                "
              >
                {/* Left */}

                <div
                  className="
                    flex
                    gap-5
                  "
                >
                  <div
                    className={`
                      flex

                      h-16
                      w-16

                      shrink-0

                      items-center
                      justify-center

                      rounded-3xl

                      ${colorMap[activity.type]}
                    `}
                  >
                    <Icon size={30} />
                  </div>

                  <div>
                    <h3
                      className="
                        text-xl
                        font-bold
                      "
                    >
                      {activity.title}
                    </h3>

                    <p
                      className="
                        mt-3

                        leading-7

                        text-slate-500
                      "
                    >
                      {activity.description}
                    </p>

                    <div
                      className="
                        mt-5

                        inline-flex
                        items-center
                        gap-2

                        rounded-full

                        bg-slate-100

                        px-4
                        py-2

                        text-sm
                        text-slate-600
                      "
                    >
                      <Clock3 size={14} />

                      {activity.time}
                    </div>
                  </div>
                </div>

                {/* Right */}

                <div
                  className="
                    flex

                    items-center

                    gap-3
                  "
                >
                  <button
                    className="
                      rounded-xl

                      border
                      border-slate-200

                      px-5
                      py-3

                      font-medium

                      transition

                      hover:bg-slate-50
                    "
                  >
                    Details
                  </button>

                  <button
                    className="
                      rounded-xl

                      bg-blue-600

                      px-5
                      py-3

                      font-medium

                      text-white

                      transition

                      hover:bg-blue-700
                    "
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Banner */}

      <div
        className="
          mt-8

          rounded-[32px]

          bg-gradient-to-r
          from-blue-600
          to-indigo-700

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
              Stay Consistent 📈
            </h3>

            <p
              className="
                mt-3

                max-w-2xl

                text-blue-100
              "
            >
              Every session, program and
              achievement helps you become
              a better learner. Keep your
              momentum going.
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
              <PlayCircle size={46} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentActivities;