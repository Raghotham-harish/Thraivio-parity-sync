import { memo } from "react";

import { CalendarDays, Download, Plus, Radio } from "lucide-react";

import { FeatureHeader } from "@/components/admin-dashboard/shared/FeatureHeader";

interface EventsHeaderProps {
  totalEvents: number;
  liveEvents: number;
  upcomingEvents: number;
  onExport: () => void;
  onAddEvent: () => void;
}

const EventsHeader = ({
  totalEvents,
  liveEvents,
  upcomingEvents,
  onExport,
  onAddEvent,
}: EventsHeaderProps) => {
  return (
    <FeatureHeader
      icon={CalendarDays}
      eyebrow="Events Management"
      title="Manage All Events"
      description="Create, publish, manage and monitor every webinar, workshop, live session and bootcamp from one dashboard. Track registrations, revenue, attendance and mentor performance with complete control."
      meta={[
        { label: `${totalEvents.toLocaleString()} Total Events` },
        { icon: Radio, label: `${liveEvents.toLocaleString()} Live` },
        { label: `${upcomingEvents.toLocaleString()} Upcoming` },
      ]}
      primaryAction={{ label: "Add Event", icon: Plus, onClick: onAddEvent }}
      secondaryAction={{ label: "Export Events", icon: Download, onClick: onExport }}
    />
  );
};

export default memo(EventsHeader);
