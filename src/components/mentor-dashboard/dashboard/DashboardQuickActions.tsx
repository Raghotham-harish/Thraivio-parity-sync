import { Link } from "react-router-dom";

import {
  Plus,
  BookOpen,
  CalendarDays,
  Trophy,
  Award,
  Video,
  DollarSign,
} from "lucide-react";

const actions = [
  {
    title: "Add Program",
    icon: BookOpen,
    path:
      "/mentor-dashboard/programs",
  },

  {
    title: "Add Event",
    icon: CalendarDays,
    path:
      "/mentor-dashboard/events",
  },

  {
    title: "Add Achievement",
    icon: Trophy,
    path:
      "/mentor-dashboard/achievements",
  },

  {
    title: "Add Certification",
    icon: Award,
    path:
      "/mentor-dashboard/certifications",
  },

  {
    title: "Add Video",
    icon: Video,
    path:
      "/mentor-dashboard/videos",
  },

  {
    title: "Update Pricing",
    icon: DollarSign,
    path:
      "/mentor-dashboard/pricing",
  },
];

const DashboardQuickActions = () => {
  return (
    <div
      className="
        bg-white
        border
        rounded-3xl
        p-6
        shadow-sm
      "
    >
      <div
        className="
          flex
          items-center
          justify-between
          mb-6
        "
      >
        <h3
          className="
            text-xl
            font-bold
          "
        >
          Quick Actions
        </h3>

        <Plus
          className="
            text-blue-600
          "
        />
      </div>

      <div className="space-y-3">

        {actions.map(
          (action) => {
            const Icon =
              action.icon;

            return (
              <Link
                key={action.title}
                to={action.path}
                className="
                  flex
                  items-center
                  gap-3
                  p-4
                  rounded-2xl
                  border
                  hover:bg-blue-50
                  hover:border-blue-200
                  transition-all
                "
              >
                <div
                  className="
                    h-10
                    w-10
                    rounded-xl
                    bg-blue-100
                    text-blue-600
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Icon size={18} />
                </div>

                <span
                  className="
                    font-medium
                  "
                >
                  {action.title}
                </span>
              </Link>
            );
          }
        )}

      </div>
    </div>
  );
};

export default DashboardQuickActions;