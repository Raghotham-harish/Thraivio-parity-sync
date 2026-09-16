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

              text-[#2563EB]
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

              text-muted-foreground
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
            border-border

            bg-card

            px-6
            py-3

            font-semibold

            transition

            hover:bg-secondary
          "
        >
          View Activity Log
        </button>

      </div>

      {/* Timeline */}

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

                      text-primary

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

                        bg-secondary
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

                          text-foreground
                        "
                      >
                        {activity.title}
                      </h3>

                      <p
                        className="
                          mt-2

                          leading-7

                          text-muted-foreground
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

                          text-[#2563EB]
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

                          bg-[#ECFDF5]

                          px-3
                          py-1.5

                          text-xs
                          font-semibold

                          text-[#065F46]
                        "
                      >
                        <span
                          className="
                            h-2
                            w-2

                            rounded-full

                            bg-[#ECFDF5]0
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
            border-border

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

                text-muted-foreground
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

              bg-primary

              px-6
              py-3

              font-semibold

              text-white

              transition

              hover:bg-primary/90
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