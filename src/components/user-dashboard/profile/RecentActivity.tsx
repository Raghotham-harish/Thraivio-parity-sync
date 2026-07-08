import {
  Award,
  BookOpen,
  CalendarClock,
  ChevronRight,
  Heart,
} from "lucide-react";

import { Link } from "react-router-dom";

import type {
  RecentActivity as RecentActivityType,
} from "@/types/userProfile";

interface RecentActivityProps {
  activities: RecentActivityType[];
}

const RecentActivity = ({
  activities,
}: RecentActivityProps) => {
  const previewActivities =
    activities.slice(0, 5);

  const getActivityIcon = (
    type: RecentActivityType["type"]
  ) => {
    switch (type) {
      case "program":
        return {
          icon: BookOpen,
          bg: "bg-blue-50",
          color: "text-blue-600",
        };

      case "certificate":
        return {
          icon: Award,
          bg: "bg-amber-50",
          color: "text-amber-600",
        };

      case "mentor":
        return {
          icon: Heart,
          bg: "bg-rose-50",
          color: "text-rose-600",
        };

      case "session":
        return {
          icon: CalendarClock,
          bg: "bg-green-50",
          color: "text-green-600",
        };

      default:
        return {
          icon: BookOpen,
          bg: "bg-slate-100",
          color: "text-slate-600",
        };
    }
  };

  return (
    <div
      className="
        bg-white

        border
        border-slate-200

        rounded-[32px]

        p-8
      "
    >
      {/* Header */}

      <div
        className="
          flex
          flex-col
          lg:flex-row

          lg:items-center
          lg:justify-between

          gap-5
        "
      >
        <div>

          <div
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
            <CalendarClock size={16} />

            Recent Activity
          </div>

          <h2
            className="
              mt-5

              text-3xl
              font-bold
            "
          >
            Learning Timeline
          </h2>

          <p
            className="
              mt-3

              max-w-2xl

              text-slate-500
            "
          >
            Track your latest learning
            progress, mentorship sessions,
            certificates and achievements.
          </p>

        </div>

        <Link
          to="/user-dashboard"
          className="
            inline-flex
            items-center
            gap-2

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
          View Timeline

          <ChevronRight
            size={18}
          />
        </Link>

      </div>

      {/* Timeline */}

      <div
        className="
          mt-10

          space-y-6
        "
      >
        {previewActivities.map(
          (activity) => {
            const {
              icon: Icon,
              bg,
              color,
            } = getActivityIcon(
              activity.type
            );

            return (
              <div
                key={activity.id}
                className="
                  flex

                  gap-5
                "
              >
                <div
                  className={`
                    flex

                    h-14
                    w-14

                    shrink-0

                    items-center
                    justify-center

                    rounded-2xl

                    ${bg}
                  `}
                >
                  <Icon
                    size={24}
                    className={color}
                  />
                </div>

                <div
                  className="
                    flex-1

                    rounded-3xl

                    border
                    border-slate-200

                    p-5

                    transition-all

                    hover:shadow-lg
                  "
                >
                  <div
                    className="
                      flex
                      flex-col

                      lg:flex-row

                      lg:items-center
                      lg:justify-between

                      gap-3
                    "
                  >
                    <div>
                      <h3
                        className="
                          text-lg
                          font-bold
                        "
                      >
                        {activity.title}
                      </h3>
                                            <p
                        className="
                          mt-2

                          text-slate-500
                        "
                      >
                        {activity.description}
                      </p>
                    </div>

                    <div
                      className="
                        inline-flex
                        items-center

                        rounded-full

                        bg-slate-100

                        px-4
                        py-2

                        text-sm
                        font-medium

                        text-slate-600
                      "
                    >
                      {activity.date}
                    </div>
                  </div>

                  {/* Activity Type */}

                  <div
                    className="
                      mt-5

                      flex
                      flex-wrap

                      items-center

                      gap-3
                    "
                  >
                    <div
                      className={`
                        inline-flex
                        items-center

                        gap-2

                        rounded-full

                        px-4
                        py-2

                        text-sm
                        font-medium

                        ${bg}
                        ${color}
                      `}
                    >
                      <Icon size={16} />

                      {activity.type
                        .charAt(0)
                        .toUpperCase() +
                        activity.type.slice(
                          1
                        )}
                    </div>

                    <button
                      className="
                        rounded-full

                        border
                        border-slate-200

                        px-4
                        py-2

                        text-sm
                        font-medium

                        transition

                        hover:bg-slate-50
                      "
                    >
                      View Details
                    </button>
                  </div>
                </div>

                {/* Timeline Line */}

                {activity.id !==
                  previewActivities[
                    previewActivities.length -
                      1
                  ].id && (
                  <div
                    className="
                      absolute

                      left-7
                      top-16

                      h-16
                      w-0.5

                      bg-slate-200
                    "
                  />
                )}
              </div>
            );
          }
        )}
      </div>
            {/* Empty State */}

      {previewActivities.length === 0 && (
        <div
          className="
            mt-10

            rounded-3xl

            border-2
            border-dashed
            border-slate-200

            py-16

            text-center
          "
        >
          <div
            className="
              mx-auto

              flex
              h-20
              w-20

              items-center
              justify-center

              rounded-3xl

              bg-slate-100
            "
          >
            <CalendarClock
              size={36}
              className="
                text-slate-600
              "
            />
          </div>

          <h3
            className="
              mt-6

              text-2xl
              font-bold
            "
          >
            No Recent Activity
          </h3>

          <p
            className="
              mx-auto

              mt-3

              max-w-lg

              text-slate-500
            "
          >
            Your recent learning activities
            will appear here once you join
            programs, complete sessions,
            earn certificates or save
            mentors.
          </p>

          <Link
            to="/programs"
            className="
              mt-8

              inline-flex
              items-center
              gap-2

              rounded-xl

              bg-slate-900

              px-6
              py-3

              font-medium

              text-white

              transition

              hover:bg-slate-800
            "
          >
            Explore Programs

            <ChevronRight
              size={18}
            />
          </Link>
        </div>
      )}

      {/* Footer */}

      <div
        className="
          mt-10

          border-t
          border-slate-200

          pt-6

          flex
          flex-col
          lg:flex-row

          lg:items-center
          lg:justify-between

          gap-4
        "
      >
        <div>
          <h4
            className="
              font-semibold
            "
          >
            Activity Timeline
          </h4>

          <p
            className="
              mt-1

              max-w-2xl

              text-sm
              text-slate-500
            "
          >
            Your learning timeline keeps a
            record of completed programs,
            mentorship sessions,
            certificates and important
            milestones throughout your
            CoachCoaching journey.
          </p>
        </div>

        <div
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

            text-slate-700
          "
        >
          <CalendarClock size={16} />

          {activities.length} Activit
          {activities.length === 1
            ? "y"
            : "ies"}
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;