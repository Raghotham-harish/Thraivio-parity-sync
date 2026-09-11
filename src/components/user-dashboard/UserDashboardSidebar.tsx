import { NavLink } from "react-router-dom";

import {
  LayoutDashboard,
  User,
  CalendarCheck,
  BookOpen,
  CalendarDays,
  Heart,
  Award,
  CreditCard,
  Bell,
  Settings,
  GraduationCap,
  CircleHelp,
  ClipboardList,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    path: "/user-dashboard",
    icon: LayoutDashboard,
  },

  {
    title: "My Profile",
    path: "/user-dashboard/profile",
    icon: User,
  },

  {
    title: "My Sessions",
    path: "/user-dashboard/sessions",
    icon: CalendarCheck,
  },

  {
    title: "My Programs",
    path: "/user-dashboard/programs",
    icon: BookOpen,
  },

  {
    title: "My Events",
    path: "/user-dashboard/events",
    icon: CalendarDays,
  },

  {
    title: "Saved Mentors",
    path: "/user-dashboard/saved-mentors",
    icon: Heart,
  },

  {
    title: "My Certificates",
    path: "/user-dashboard/certificates",
    icon: Award,
  },

  {
    title: "My Payments",
    path: "/user-dashboard/payments",
    icon: CreditCard,
  },

  {
    title: "Notifications",
    path: "/user-dashboard/notifications",
    icon: Bell,
  },

  {
  title: "Surveys",
  path: "/user-dashboard/surveys",
  icon: ClipboardList,
},

  {
    title: "Settings",
    path: "/user-dashboard/settings",
    icon: Settings,
  },

  {
  title: "Help & Support",
  path: "/user-dashboard/help-support",
  icon: CircleHelp,
},
];

const UserDashboardSidebar = () => {
  return (
    <aside
      className="
        w-72
        h-screen
        shrink-0
        bg-white
        border-r
        border-slate-200
        flex
        flex-col
      "
    >
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
        <div className="flex items-center gap-3">

          <div
            className="
              h-12
              w-12
              rounded-2xl
              bg-blue-600
              flex
              items-center
              justify-center
              text-white
            "
          >
            <GraduationCap size={24} />
          </div>

          <div>
            <h2 className="font-bold text-lg">
              Student Panel
            </h2>

            <p className="text-xs text-slate-500">
              Dashboard
            </p>
          </div>

        </div>
      </div>

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
                  "/user-dashboard"
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
            Learning Journey
          </h4>

          <p className="text-sm text-slate-500 mt-2">
            Track sessions, programs,
            events and mentorship progress.
          </p>
        </div>
      </div>
    </aside>
  );
};

export default UserDashboardSidebar;