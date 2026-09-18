import {
  Bell,
  Search,
  ChevronDown,
} from "lucide-react";

import { useEffect, useState } from "react";

import { MobileNavTrigger } from "@/components/shared/MobileNavDrawer";
import {
  getCurrentUser,
  type AuthUser,
} from "@/services/auth.service";

interface DashboardTopbarProps {
  onMenuClick: () => void;
}

const DashboardTopbar = ({ onMenuClick }: DashboardTopbarProps) => {
  const [user, setUser] =
    useState<AuthUser | null>(null);

  useEffect(() => {
    const loadCurrentUser = async () => {
      try {
        const currentUser =
          await getCurrentUser();

        setUser(currentUser);
      } catch (error) {
        console.error(
          "Failed to load current user:",
          error
        );
      }
    };

    loadCurrentUser();
  }, []);

  return (
    <header
      className="
        bg-white
        border-b
        border-slate-200
        h-20
        shrink-0
        px-4
        lg:px-8
        flex
        items-center
        justify-between
        gap-4
        sticky
        top-0
        z-30
      "
    >
      {/* Left */}

      <div className="flex items-center gap-4">
        <MobileNavTrigger onClick={onMenuClick} />

        <div className="min-w-0">
          <h1 className="truncate text-2xl font-bold">
            Welcome Back 👋
          </h1>

          <p className="hidden text-slate-500 text-sm mt-1 sm:block">
            Manage your mentorship business
          </p>
        </div>
      </div>

      {/* Right */}

      <div className="flex items-center gap-4">

        {/* Search */}

        <div className="relative hidden md:block">

          <Search
            size={18}
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-slate-400
            "
          />

          <input
            type="text"
            placeholder="Search..."
            className="
              w-72
              pl-11
              pr-4
              py-3
              border
              border-slate-200
              rounded-xl
              outline-none
              focus:border-blue-500
            "
          />

        </div>

        {/* Notifications */}

        <button
          className="
            h-12
            w-12
            rounded-xl
            border
            border-slate-200
            flex
            items-center
            justify-center
            relative
            hover:bg-slate-50
          "
        >
          <Bell size={20} />

          <span
            className="
              absolute
              top-2
              right-2
              h-2
              w-2
              bg-red-500
              rounded-full
            "
          />
        </button>

        {/* Profile */}

        <div
          className="
            flex
            items-center
            gap-3
            bg-slate-50
            px-3
            py-2
            rounded-2xl
            cursor-pointer
          "
        >
          <img
            src={
              user?.avatar ||
              "/default-avatar.png"
            }
            alt={user?.fullName || "User"}
            className="
              h-12
              w-12
              rounded-full
              object-cover
            "
          />

          <div className="hidden md:block">

            <h4 className="font-semibold">
              {user?.fullName || "Mentor"}
            </h4>

            <p className="text-xs text-slate-500">
              {user?.role || "Mentor"}
            </p>

          </div>

          <ChevronDown
            size={18}
            className="text-slate-500"
          />

        </div>

      </div>

    </header>
  );
};

export default DashboardTopbar;