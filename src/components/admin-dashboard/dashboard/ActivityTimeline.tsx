import {
  Award,
  BadgeCheck,
  CalendarCheck,
  CreditCard,
  Shield,
  UserPlus,
} from "lucide-react";

import type {
  ActivityItem,
} from "@/types/admin-dashboard";

interface ActivityTimelineProps {
  activities: ActivityItem[];
}

const activityIcons = {
  mentor: BadgeCheck,

  booking: CalendarCheck,

  payment: CreditCard,

  certificate: Award,

  user: UserPlus,
};

const ActivityTimeline = ({
  activities,
}: ActivityTimelineProps) => {
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

              bg-blue-50

              px-4
              py-2

              text-sm
              font-medium

              text-blue-700
            "
          >
            Activity Timeline
          </span>

          <h2
            className="
              mt-5

              text-3xl

              font-bold
            "
          >
            Latest Platform Activities
          </h2>

          <p
            className="
              mt-3

              max-w-3xl

              leading-7

              text-slate-500
            "
          >
            Monitor everything happening
            across your platform in
            chronological order.
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
          View Activity Log
        </button>

      </div>

      {/* Timeline */}

      <div
        className="
          mt-8

          rounded-[30px]

          border
          border-slate-200

          bg-white

          p-8
        "
      >
        <div className="space-y-8">

          {activities.map((activity) => {

            const Icon =
              activityIcons[
                activity.type as keyof typeof activityIcons
              ] ?? Shield;

            return (

              <div
                key={activity.id}
                className="
                  flex

                  items-start

                  gap-5
                "
              >
                {/* Timeline Icon */}
                                <div className="relative flex flex-col items-center">

                  {/* Icon */}

                  <div
                    className="
                      flex

                      h-14
                      w-14

                      items-center
                      justify-center

                      rounded-2xl

                      bg-blue-50

                      text-blue-600

                      shadow-sm
                    "
                  >
                    <Icon size={24} />
                  </div>

                  {/* Vertical Line */}

                  {activity.id !==
                    activities[
                      activities.length - 1
                    ].id && (
                    <div
                      className="
                        mt-2

                        h-20
                        w-px

                        bg-slate-200
                      "
                    />
                  )}

                </div>

                {/* Content */}

                <div className="flex-1">

                  <div
                    className="
                      flex
                      flex-col

                      gap-4

                      lg:flex-row
                      lg:items-start
                      lg:justify-between
                    "
                  >
                    <div>

                      <h3
                        className="
                          text-lg
                          font-semibold

                          text-slate-900
                        "
                      >
                        {activity.title}
                      </h3>

                      <p
                        className="
                          mt-2

                          leading-7

                          text-slate-500
                        "
                      >
                        {activity.description}
                      </p>

                    </div>

                    {/* Right */}

                    <div
                      className="
                        flex
                        flex-col

                        items-start

                        gap-3

                        lg:items-end
                      "
                    >
                      <span
                        className="
                          rounded-full

                          bg-blue-50

                          px-4
                          py-2

                          text-sm
                          font-medium

                          text-blue-700
                        "
                      >
                        {activity.createdAt}
                      </span>

                      <span
                        className="
                          inline-flex

                          items-center

                          gap-2

                          rounded-full

                          bg-emerald-100

                          px-3
                          py-1.5

                          text-xs
                          font-semibold

                          text-emerald-700
                        "
                      >
                        <span
                          className="
                            h-2
                            w-2

                            rounded-full

                            bg-emerald-500
                          "
                        />

                        Live
                      </span>

                    </div>

                  </div>

                </div>

              </div>

            );
          })}

        </div>

        {/* Footer */}

        <div
          className="
            mt-10

            flex
            flex-col

            gap-4

            border-t
            border-slate-200

            pt-8

            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          <div>

            <h4
              className="
                text-lg
                font-semibold
              "
            >
              Activity Monitoring
            </h4>

            <p
              className="
                mt-2

                text-slate-500
              "
            >
              All platform activities will
              automatically appear here once
              backend/Firebase integration
              is connected.
            </p>

          </div>

          <button
            className="
              rounded-2xl

              bg-blue-600

              px-6
              py-3

              font-semibold

              text-white

              transition

              hover:bg-blue-700
            "
          >
            Open Activity Center
          </button>

        </div>

      </div>

    </section>
  );
};

export default ActivityTimeline;