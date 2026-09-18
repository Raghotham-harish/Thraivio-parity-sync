import {
  Home,
  GraduationCap,
  Users,
  Building2,
  CalendarCheck,
  BookOpen,
  CalendarDays,
  Award,
  CreditCard,
  Star,
  BarChart3,
  Bell,
  FileText,
  CircleHelp,
  Shield,
  Settings,
  ClipboardList,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

export interface AdminSidebarItem {
  title: string;
  path: string;
  icon: LucideIcon;
}

export const adminSidebarItems: AdminSidebarItem[] = [
  {
    title: "Dashboard",
    path: "/admin",
    icon: Home,
  },

  {
    title: "Mentors",
    path: "/admin/mentors",
    icon: GraduationCap,
  },

  {
    title: "Users",
    path: "/admin/users",
    icon: Users,
  },

  {
    title: "Companies",
    path: "/admin/companies",
    icon: Building2,
  },

  {
    title: "Sessions",
    path: "/admin/sessions",
    icon: CalendarCheck,
  },

  {
    title: "Programs",
    path: "/admin/programs",
    icon: BookOpen,
  },

  {
    title: "Surveys",
    path: "/admin/surveys",
    icon: ClipboardList,
  },

  {
    title: "Events",
    path: "/admin/events",
    icon: CalendarDays,
  },

  {
    title: "Certificates",
    path: "/admin/certificates",
    icon: Award,
  },

  {
    title: "Payments",
    path: "/admin/payments",
    icon: CreditCard,
  },

  {
    title: "Reviews",
    path: "/admin/reviews",
    icon: Star,
  },

  {
    title: "Reports",
    path: "/admin/reports",
    icon: BarChart3,
  },

  {
    title: "Notifications",
    path: "/admin/notifications",
    icon: Bell,
  },

  {
    title: "CMS",
    path: "/admin/cms",
    icon: FileText,
  },

  {
    title: "Support",
    path: "/admin/support",
    icon: CircleHelp,
  },

  {
    title: "Roles & Permissions",
    path: "/admin/roles",
    icon: Shield,
  },

  {
    title: "Settings",
    path: "/admin/settings",
    icon: Settings,
  },
];