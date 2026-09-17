import { NavLink } from "react-router-dom";

import {
  LayoutDashboard,
  User,
  BookOpen,
  CalendarDays,
  DollarSign,
  Clock3,
  Award,
  Trophy,
  Video,
  HelpCircle,
  CalendarCheck,
  ClipboardList,
  Settings,
} from "lucide-react";

import { ThraivioHorizontal } from "@/components/shared/ThraivioLogos";

const menuItems = [
  {
    title: "Dashboard",
    path: "/mentor-dashboard",
    icon: LayoutDashboard,
  },

  {
    title: "My Profile",
    path: "/mentor-dashboard/profile",
    icon: User,
  },

  {
    title: "Programs",
    path: "/mentor-dashboard/programs",
    icon: BookOpen,
  },

  {
    title: "Events",
    path: "/mentor-dashboard/events",
    icon: CalendarDays,
  },

  {
    title: "Pricing",
    path: "/mentor-dashboard/pricing",
    icon: DollarSign,
  },

  {
    title: "Availability",
    path: "/mentor-dashboard/availability",
    icon: Clock3,
  },
  {
  title: "Surveys",
  path: "/mentor-dashboard/surveys",
  icon: ClipboardList,
},
  {
    title: "Certifications",
    path: "/mentor-dashboard/certifications",
    icon: Award,
  },

  {
    title: "Achievements",
    path: "/mentor-dashboard/achievements",
    icon: Trophy,
  },

  {
    title: "Videos",
    path: "/mentor-dashboard/videos",
    icon: Video,
  },

  {
    title: "FAQ",
    path: "/mentor-dashboard/faq",
    icon: HelpCircle,
  },

  {
    title: "Bookings",
    path: "/mentor-dashboard/bookings",
    icon: CalendarCheck,
  },

  {
    title: "Settings",
    path: "/mentor-dashboard/settings",
    icon: Settings,
  },
];

const DashboardSidebar = () => {
  return (
    <aside
  className="
    w-72
    h-screen
    shrink-0

    bg-white

    border-r
    border-slate-200

    sticky
    top-0

    flex
    flex-col

    overflow-hidden
  "
>
      {/* Logo */}

      <div
        className="
          h-20
          border-b
          border-slate-200
          flex
          items-center
          px-6
        "
      >
        <div>
          <ThraivioHorizontal width={132} height={43} />
          <p className="mt-0.5 text-xs font-medium text-slate-500">Mentor Panel</p>
        </div>
      </div>

      {/* Menu */}

      <div
  className="
    flex-1

    overflow-y-auto

    p-4

    scrollbar-thin
  "
>
        <div className="space-y-2">

          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.title}
                to={item.path}
                end={
                  item.path ===
                  "/mentor-dashboard"
                }
                className={({ isActive }) =>
                  `
                    flex
                    items-center
                    gap-3
                    px-4
                    py-3
                    rounded-2xl
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? `
                          bg-blue-600
                          text-white
                          shadow-lg
                        `
                        : `
                          text-slate-600
                          hover:bg-blue-50
                          hover:text-blue-600
                        `
                    }
                  `
                }
              >
                <Icon size={20} />

                <span className="font-medium">
                  {item.title}
                </span>
              </NavLink>
            );
          })}
        </div>
      </div>

      {/* Bottom */}

      <div
        className="
          p-4
          border-t
          border-slate-200
        "
      >
        <div
          className="
            bg-blue-50
            rounded-2xl
            p-4
          "
        >
          <h4 className="font-semibold">
            Mentor Pro
          </h4>

          <p className="text-sm text-slate-500 mt-2">
            Manage programs, events,
            bookings and grow your
            mentorship business.
          </p>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;