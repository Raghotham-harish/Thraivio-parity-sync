import { CalendarClock, Download, FolderPlus, Radio } from "lucide-react";

import { FeatureHeader } from "@/components/admin-dashboard/shared/FeatureHeader";

interface SessionsHeaderProps {
  totalSessions: number;
  liveSessions: number;
  todaySessions: number;
  onCreateSession: () => void;
}

const SessionsHeader = ({
  totalSessions,
  liveSessions,
  todaySessions,
  onCreateSession,
}: SessionsHeaderProps) => {
  return (
    <FeatureHeader
      icon={CalendarClock}
      eyebrow="Sessions Management"
      title="Manage Sessions"
      description="Monitor, schedule and manage every mentorship session across the platform. Track live meetings, completed sessions, attendance, payments and cancellations from one centralized dashboard."
      meta={[
        { label: `${totalSessions.toLocaleString()} Total Sessions` },
        { icon: Radio, label: `${liveSessions.toLocaleString()} Live` },
        { label: `${todaySessions.toLocaleString()} Today` },
      ]}
      primaryAction={{ label: "Create Session", icon: FolderPlus, onClick: onCreateSession }}
      secondaryAction={{ label: "Export", icon: Download, onClick: () => {} }}
    />
  );
};

export default SessionsHeader;
