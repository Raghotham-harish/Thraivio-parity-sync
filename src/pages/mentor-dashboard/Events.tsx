import { useMemo, useState } from "react";

import { mentors } from "@/data/mentors";

import type { Event } from "@/types/event";

import EventsHeader from "@/components/mentor-dashboard/events/EventsHeader";
import EventsToolbar from "@/components/mentor-dashboard/events/EventsToolbar";

import EventGridCard from "@/components/mentor-dashboard/events/EventGridCard";
import EventListCard from "@/components/mentor-dashboard/events/EventListCard";

import EmptyEvents from "@/components/mentor-dashboard/events/EmptyEvents";

import EventFormModal from "@/components/mentor-dashboard/events/EventFormModal";

import DeleteEventDialog from "@/components/mentor-dashboard/events/DeleteEventDialog";

const Events = () => {
  /**
   * Temporary
   *
   * Later:
   * Logged In Mentor ID
   */

  const mentorId = 1;

  const mentor = mentors.find(
    (item) => item.id === mentorId
  );

  const [search, setSearch] =
    useState("");

  const [view, setView] =
    useState<"grid" | "list">(
      "grid"
    );

  const [isFormOpen, setIsFormOpen] =
    useState(false);

  const [
    selectedEvent,
    setSelectedEvent,
  ] = useState<Event | null>(
    null
  );

  const [
    isDeleteOpen,
    setIsDeleteOpen,
  ] = useState(false);

  if (!mentor) {
    return (
      <div
        className="
          bg-white
          border
          rounded-3xl
          p-10
          text-center
        "
      >
        <h2
          className="
            text-3xl
            font-bold
          "
        >
          Mentor Not Found
        </h2>

        <p
          className="
            text-slate-500
            mt-3
          "
        >
          Unable to load mentor
          information.
        </p>
      </div>
    );
  }

  const filteredEvents =
    useMemo(() => {
      return mentor.events.filter(
        (event) =>
          event.title
            .toLowerCase()
            .includes(
              search.toLowerCase()
            ) ||
          event.type
            .toLowerCase()
            .includes(
              search.toLowerCase()
            ) ||
          event.mode
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
      );
    }, [mentor, search]);

  const handleAddEvent =
    () => {
      setSelectedEvent(
        null
      );

      setIsFormOpen(true);
    };

  const handleEditEvent =
    (
      event: Event
    ) => {
      setSelectedEvent(
        event
      );

      setIsFormOpen(true);
    };

  const handleDeleteEvent =
    (
      event: Event
    ) => {
      setSelectedEvent(
        event
      );

      setIsDeleteOpen(true);
    };

  const handleSaveEvent =
    (
      event: Event
    ) => {
      /**
       * Backend Integration Later
       */

      console.log(
        "Save Event",
        event
      );

      setIsFormOpen(false);
    };

  const confirmDelete =
    () => {
      /**
       * Backend Integration Later
       */

      console.log(
        "Delete Event",
        selectedEvent
      );

      setIsDeleteOpen(false);
    };

  return (
    <div className="space-y-8">

      {/* Header */}

      <EventsHeader
        totalEvents={
          mentor.events.length
        }
        onAddEvent={
          handleAddEvent
        }
      />

      {/* Toolbar */}

      <EventsToolbar
        search={search}
        setSearch={setSearch}
        view={view}
        setView={setView}
      />

      {/* Empty State */}

      {filteredEvents.length ===
      0 ? (
        <EmptyEvents
          onAddEvent={
            handleAddEvent
          }
        />
      ) : (
        <>
          {/* Grid View */}

          {view === "grid" && (
            <div
              className="
                grid
                lg:grid-cols-2
                gap-6
              "
            >
              {filteredEvents.map(
                (
                  event,
                  index
                ) => (
                  <EventGridCard
                    key={index}
                    event={event}
                    onEdit={
                      handleEditEvent
                    }
                    onDelete={
                      handleDeleteEvent
                    }
                  />
                )
              )}
            </div>
          )}

          {/* List View */}

          {view === "list" && (
            <div className="space-y-6">

              {filteredEvents.map(
                (
                  event,
                  index
                ) => (
                  <EventListCard
                    key={index}
                    event={event}
                    onEdit={
                      handleEditEvent
                    }
                    onDelete={
                      handleDeleteEvent
                    }
                  />
                )
              )}

            </div>
          )}
        </>
      )}

      {/* Create / Edit Modal */}

      <EventFormModal
        open={isFormOpen}
        event={selectedEvent}
        onClose={() =>
          setIsFormOpen(false)
        }
        onSave={
          handleSaveEvent
        }
      />

      {/* Delete Dialog */}

      <DeleteEventDialog
        open={isDeleteOpen}
        event={selectedEvent}
        onClose={() =>
          setIsDeleteOpen(false)
        }
        onConfirm={
          confirmDelete
        }
      />

    </div>
  );
};

export default Events;