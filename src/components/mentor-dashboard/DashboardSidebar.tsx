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
  NotebookPen,
  Settings,
} from "lucide-react";

import { MobileNavDrawer } from "@/components/shared/MobileNavDrawer";
import { ThraivioHorizontal } from "@/components/shared/ThraivioLogos";
import { cn } from "@/lib/utils";

const menuItems = [
  { title: "Dashboard", path: "/mentor-dashboard", icon: LayoutDashboard },
  { title: "My Profile", path: "/mentor-dashboard/profile", icon: User },
  { title: "Programs", path: "/mentor-dashboard/programs", icon: BookOpen },
  { title: "Events", path: "/mentor-dashboard/events", icon: CalendarDays },
  { title: "Pricing", path: "/mentor-dashboard/pricing", icon: DollarSign },
  { title: "Availability", path: "/mentor-dashboard/availability", icon: Clock3 },
  { title: "Surveys", path: "/mentor-dashboard/surveys", icon: ClipboardList },
  { title: "Certifications", path: "/mentor-dashboard/certifications", icon: Award },
  { title: "Achievements", path: "/mentor-dashboard/achievements", icon: Trophy },
  { title: "Videos", path: "/mentor-dashboard/videos", icon: Video },
  { title: "FAQ", path: "/mentor-dashboard/faq", icon: HelpCircle },
  { title: "Bookings", path: "/mentor-dashboard/bookings", icon: CalendarCheck },
  { title: "Journal", path: "/mentor-dashboard/journal", icon: NotebookPen },
  { title: "Settings", path: "/mentor-dashboard/settings", icon: Settings },
];

interface DashboardSidebarContentProps {
  onNavigate?: () => void;
}

const DashboardSidebarContent = ({ onNavigate }: DashboardSidebarContentProps) => (
  <div className="flex h-full flex-col bg-card">
    {/* Logo */}
    <div className="flex h-20 items-center border-b border-border px-6">
      <div>
        <ThraivioHorizontal width={132} height={43} />
        <p className="mt-0.5 text-xs font-medium text-muted-foreground">Mentor Panel</p>
      </div>
    </div>

    {/* Menu */}
    <div className="flex-1 overflow-y-auto p-4 scrollbar-thin">
      <div className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.title}
              to={item.path}
              end={item.path === "/mentor-dashboard"}
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

    {/* Bottom */}
    <div className="border-t border-border p-4">
      <div className="rounded-2xl bg-secondary p-4">
        <h4 className="font-semibold text-foreground">Mentor Pro</h4>
        <p className="mt-2 text-sm text-muted-foreground">
          Manage programs, events, bookings and grow your mentorship business.
        </p>
      </div>
    </div>
  </div>
);

interface DashboardSidebarProps {
  mobileOpen: boolean;
  onMobileOpenChange: (open: boolean) => void;
}

const DashboardSidebar = ({ mobileOpen, onMobileOpenChange }: DashboardSidebarProps) => {
  return (
    <>
      <aside className="hidden h-screen w-72 shrink-0 flex-col border-r border-border bg-card lg:sticky lg:top-0 lg:flex">
        <DashboardSidebarContent />
      </aside>

      <MobileNavDrawer open={mobileOpen} onOpenChange={onMobileOpenChange} title="Mentor navigation">
        <DashboardSidebarContent onNavigate={() => onMobileOpenChange(false)} />
      </MobileNavDrawer>
    </>
  );
};

export default DashboardSidebar;
