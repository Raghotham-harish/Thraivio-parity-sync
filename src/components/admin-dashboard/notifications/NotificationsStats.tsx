import {
  Bell,
  Send,
  CalendarClock,
  FileEdit,
  CircleX,
  CheckCheck,
  MousePointerClick,
  TrendingUp,
} from "lucide-react";

import { StatCard, type StatCardAccent } from "@/components/admin-dashboard/shared/StatCard";

interface NotificationsStatsProps {
  totalNotifications: number;
  sentNotifications: number;
  scheduledNotifications: number;
  draftNotifications: number;
  failedNotifications: number;
  totalDelivered: number;
  totalOpened: number;
  openRate: number;
}

export default function NotificationsStats({
  totalNotifications,
  sentNotifications,
  scheduledNotifications,
  draftNotifications,
  failedNotifications,
  totalDelivered,
  totalOpened,
  openRate,
}: NotificationsStatsProps) {
  const stats: {
    title: string;
    value: string;
    description: string;
    icon: typeof Bell;
    accent: StatCardAccent;
  }[] = [
    { title: "Total Notifications", value: totalNotifications.toLocaleString(), description: "All notifications", icon: Bell, accent: "default" },
    { title: "Sent", value: sentNotifications.toLocaleString(), description: "Successfully sent", icon: Send, accent: "success" },
    { title: "Scheduled", value: scheduledNotifications.toLocaleString(), description: "Upcoming notifications", icon: CalendarClock, accent: "default" },
    { title: "Drafts", value: draftNotifications.toLocaleString(), description: "Saved drafts", icon: FileEdit, accent: "default" },
    { title: "Failed", value: failedNotifications.toLocaleString(), description: "Delivery failures", icon: CircleX, accent: "default" },
    { title: "Delivered", value: totalDelivered.toLocaleString(), description: "Successfully delivered", icon: CheckCheck, accent: "success" },
    { title: "Opened", value: totalOpened.toLocaleString(), description: "Users opened", icon: MousePointerClick, accent: "default" },
    { title: "Open Rate", value: `${openRate}%`, description: "Overall engagement", icon: TrendingUp, accent: "success" },
  ];

  return (
    <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <StatCard key={stat.title} title={stat.title} value={stat.value} description={stat.description} icon={stat.icon} accent={stat.accent} />
      ))}
    </section>
  );
}
