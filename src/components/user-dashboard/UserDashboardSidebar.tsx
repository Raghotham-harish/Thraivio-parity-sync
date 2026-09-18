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
  CircleHelp,
  ClipboardList,
} from "lucide-react";

import { MobileNavDrawer } from "@/components/shared/MobileNavDrawer";
import { ThraivioHorizontal } from "@/components/shared/ThraivioLogos";
import { cn } from "@/lib/utils";

const menuItems = [
  { title: "Dashboard", path: "/user-dashboard", icon: LayoutDashboard },
  { title: "My Profile", path: "/user-dashboard/profile", icon: User },
  { title: "My Sessions", path: "/user-dashboard/sessions", icon: CalendarCheck },
  { title: "My Programs", path: "/user-dashboard/programs", icon: BookOpen },
  { title: "My Events", path: "/user-dashboard/events", icon: CalendarDays },
  { title: "Saved Mentors", path: "/user-dashboard/saved-mentors", icon: Heart },
  { title: "My Certificates", path: "/user-dashboard/certificates", icon: Award },
  { title: "My Payments", path: "/user-dashboard/payments", icon: CreditCard },
  { title: "Notifications", path: "/user-dashboard/notifications", icon: Bell },
  { title: "Surveys", path: "/user-dashboard/surveys", icon: ClipboardList },
  { title: "Settings", path: "/user-dashboard/settings", icon: Settings },
  { title: "Help & Support", path: "/user-dashboard/help-support", icon: CircleHelp },
];

interface UserDashboardSidebarContentProps {
  onNavigate?: () => void;
}

const UserDashboardSidebarContent = ({ onNavigate }: UserDashboardSidebarContentProps) => (
  <div className="flex h-full flex-col bg-card">
    <div className="flex h-20 items-center border-b border-border px-6">
      <div>
        <ThraivioHorizontal width={132} height={43} />
        <p className="mt-0.5 text-xs font-medium text-muted-foreground">Student Panel</p>
      </div>
    </div>

    <div className="flex-1 overflow-y-auto p-4 scrollbar-thin">
      <div className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.title}
              to={item.path}
              end={item.path === "/user-dashboard"}
              onClick={onNavigate}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-300",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "text-muted-foreground hover:bg-secondary hover:text-primary",
                )
              }
            >
              <Icon size={20} />
              <span className="font-medium">{item.title}</span>
            </NavLink>
          );
        })}
      </div>
    </div>

    <div className="border-t border-border p-4">
      <div className="rounded-2xl bg-secondary p-4">
        <h4 className="font-semibold text-foreground">Learning Journey</h4>
        <p className="mt-2 text-sm text-muted-foreground">
          Track sessions, programs, events and mentorship progress.
        </p>
      </div>
    </div>
  </div>
);

interface UserDashboardSidebarProps {
  mobileOpen: boolean;
  onMobileOpenChange: (open: boolean) => void;
}

const UserDashboardSidebar = ({ mobileOpen, onMobileOpenChange }: UserDashboardSidebarProps) => {
  return (
    <>
      <aside className="hidden h-screen w-72 shrink-0 flex-col border-r border-border bg-card lg:flex">
        <UserDashboardSidebarContent />
      </aside>

      <MobileNavDrawer open={mobileOpen} onOpenChange={onMobileOpenChange} title="Student navigation">
        <UserDashboardSidebarContent onNavigate={() => onMobileOpenChange(false)} />
      </MobileNavDrawer>
    </>
  );
};

export default UserDashboardSidebar;
