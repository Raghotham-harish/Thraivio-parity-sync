import { memo } from "react";

import type { AdminEvent } from "@/types/admin-events";

import EventListRow from "./EventListRow";

interface EventsTableProps {
  events: AdminEvent[];

  onView: (event: AdminEvent) => void;

  onEdit: (event: AdminEvent) => void;

  onPublish: (event: AdminEvent) => void;

  onCancel: (event: AdminEvent) => void;

  onDelete: (event: AdminEvent) => void;
}

const EventsTable = ({
  events,
  onView,
  onEdit,
  onPublish,
  onCancel,
  onDelete,
}: EventsTableProps) => {
  return (
    <div
      className="
        overflow-hidden
        rounded-2xl
        border
        bg-card
        shadow-sm
      "
    >
      <div className="overflow-x-auto">

        <table className="min-w-[1850px] w-full">

          {/* Header */}

          <thead
            className="
              sticky
              top-0
              z-10
              bg-secondary
              border-b
            "
          >
            <tr>

              <th className="px-5 py-4 text-left text-sm font-semibold">
                Event
              </th>

              <th className="px-5 py-4 text-left text-sm font-semibold">
                Mentor
              </th>

              <th className="px-5 py-4 text-left text-sm font-semibold">
                Schedule
              </th>

              <th className="px-5 py-4 text-left text-sm font-semibold">
                Rating
              </th>

              <th className="px-5 py-4 text-left text-sm font-semibold">
                Registration
              </th>

              <th className="px-5 py-4 text-left text-sm font-semibold">
                Revenue
              </th>

              <th className="px-5 py-4 text-left text-sm font-semibold">
                Analytics
              </th>

              <th className="px-5 py-4 text-left text-sm font-semibold">
                Actions
              </th>

            </tr>
          </thead>

          {/* Body */}

          <tbody>

            {events.map((event) => (

              <EventListRow
                key={event.id}
                event={event}
                onView={onView}
                onEdit={onEdit}
                onPublish={onPublish}
                onCancel={onCancel}
                onDelete={onDelete}
              />

            ))}

          </tbody>

        </table>

      </div>

      {/* Footer */}

      <div
        className="
          flex
          items-center
          justify-between
          border-t
          bg-secondary
          px-6
          py-4
        "
      >

        <p className="text-sm text-muted-foreground">

          Showing
          <span className="mx-1 font-semibold text-foreground">
            {events.length}
          </span>
          events

        </p>

        <div className="flex items-center gap-2">

          <div className="h-2 w-2 rounded-full bg-[#ECFDF5]" />

          <span className="text-sm text-muted-foreground">

            Live data preview

          </span>

        </div>

      </div>

    </div>
  );
};

export default memo(EventsTable);