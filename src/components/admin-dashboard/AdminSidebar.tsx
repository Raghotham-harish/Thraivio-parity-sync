import { NavLink } from "react-router-dom";

import {
  GraduationCap,
  LogOut,
} from "lucide-react";

import { adminSidebarItems } from "@/data/admin-sidebar";

const AdminSidebar = () => {
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
      {/* Logo */}

      <div
        className="
          h-20

          border-b
          border-slate-200

          px-6

          flex
          items-center
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

            <h2
              className="
                text-lg
                font-bold
              "
            >
              Admin Panel
            </h2>

            <p
              className="
                text-xs
                text-slate-500
              "
            >
              CoachCoaching
            </p>

          </div>

        </div>
      </div>

      {/* Navigation */}

      <div
        className="
          flex-1

          overflow-y-auto

          p-4

          scrollbar-thin
        "
      >
        <div className="space-y-2">

          {adminSidebarItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.title}
                to={item.path}
                end={
                  item.path ===
                  "/admin"
                }
                className={({ isActive }) =>
                  `
                    flex
                    items-center
                    gap-3

                    rounded-2xl

                    px-4
                    py-3

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
          border-t
          border-slate-200

          p-4
        "
      >
        <div
          className="
            rounded-2xl

            bg-blue-50

            p-4
          "
        >
          <h4 className="font-semibold">
            Platform Overview
          </h4>

          <p
            className="
              mt-2

              text-sm
              leading-6

              text-slate-500
            "
          >
            Manage mentors, users,
            sessions, payments,
            reports and platform
            settings from one place.
          </p>

          <button
            className="
              mt-5

              flex
              items-center
              gap-2

              rounded-xl

              border
              border-red-200

              px-4
              py-2

              text-sm
              font-medium

              text-red-600

              transition

              hover:bg-red-50
            "
          >
            <LogOut size={18} />

            Logout
          </button>
        </div>
      </div>
    </aside>
  );
};

export default AdminSidebar;