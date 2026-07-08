import { memo } from "react";

import type { AdminEvent } from "@/types/admin-events";

import EventGridCard from "./EventGridCard";

interface EventsGridProps {
  events: AdminEvent[];

  onView: (event: AdminEvent) => void;

  onEdit: (event: AdminEvent) => void;

  onPublish: (event: AdminEvent) => void;

  onCancel: (event: AdminEvent) => void;

  onDelete: (event: AdminEvent) => void;
}

const EventsGrid = ({
  events,
  onView,
  onEdit,
  onPublish,
  onCancel,
  onDelete,
}: EventsGridProps) => {
  return (
    <div
      className="
        grid
        gap-6
        md:grid-cols-2
        xl:grid-cols-3
      "
    >
      {events.map((event) => (
        <EventGridCard
          key={event.id}
          event={event}
          onView={onView}
          onEdit={onEdit}
          onPublish={onPublish}
          onCancel={onCancel}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default memo(EventsGrid);