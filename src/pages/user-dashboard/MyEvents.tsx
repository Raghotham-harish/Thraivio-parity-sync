import { useMemo, useState } from "react";

import type { UserEvent } from "@/types/user-event";

import MyEventsHeader from "@/components/user-dashboard/events/MyEventsHeader";
import MyEventsStats from "@/components/user-dashboard/events/MyEventsStats";
import MyEventsToolbar from "@/components/user-dashboard/events/MyEventsToolbar";

import EventGridCard from "@/components/user-dashboard/events/EventGridCard";
import EventListCard from "@/components/user-dashboard/events/EventListCard";

import EventDetailsModal from "@/components/user-dashboard/events/EventDetailsModal";
import CancelRegistrationDialog from "@/components/user-dashboard/events/CancelRegistrationDialog";

import EmptyEvents from "@/components/user-dashboard/events/EmptyEvents";

const initialEvents: UserEvent[] = [
  {
    id: "1",

    mentorId: 1,
    mentorName: "Sarah Johnson",
    mentorRole: "Senior Product Mentor",
    mentorCompany: "Google",
    mentorImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600",

    title: "AI Product Workshop",

    date: "20 June 2026",
    month: "JUN",
    day: "20",
    weekday: "Saturday",

    time: "07:00 PM IST",

    type: "Workshop",
    mode: "Online",

    registered: 245,
    seatsLeft: 12,

    registrationDate:
      "12 June 2026",

    eventStatus: "upcoming",

    certificateAvailable: true,

    joinLink: "#",

    recordingLink: "#",
  },

  {
    id: "2",

    mentorId: 2,
    mentorName: "Michael Lee",
    mentorRole:
      "Senior Engineering Mentor",
    mentorCompany: "Microsoft",
    mentorImage:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600",

    title: "Modern React Summit",

    date: "15 July 2026",
    month: "JUL",
    day: "15",
    weekday: "Wednesday",

    time: "10:00 AM IST",

    type: "Conference",
    mode: "Online",

    registered: 520,
    seatsLeft: 25,

    registrationDate:
      "10 June 2026",

    eventStatus: "upcoming",

    certificateAvailable: true,

    joinLink: "#",

    recordingLink: "#",
  },

  {
    id: "3",

    mentorId: 3,
    mentorName: "Emily Carter",
    mentorRole:
      "Senior Career Coach",
    mentorCompany: "LinkedIn",
    mentorImage:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600",

    title:
      "Resume Building Masterclass",

    date: "10 July 2026",
    month: "JUL",
    day: "10",
    weekday: "Friday",

    time: "07:00 PM IST",

    type: "Workshop",
    mode: "Online",

    registered: 285,
    seatsLeft: 15,

    registrationDate:
      "15 June 2026",

    eventStatus: "attended",

    certificateAvailable: true,

    joinLink: "#",

    recordingLink: "#",
  },

  {
    id: "4",

    mentorId: 5,
    mentorName: "Priya Verma",
    mentorRole:
      "Leadership Mentor",
    mentorCompany: "Amazon",
    mentorImage:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600",

    title:
      "Women In Leadership Summit",

    date: "22 July 2026",
    month: "JUL",
    day: "22",
    weekday: "Wednesday",

    time: "10:30 AM IST",

    type: "Conference",
    mode: "Online",

    registered: 750,
    seatsLeft: 28,

    registrationDate:
      "18 June 2026",

    eventStatus: "upcoming",

    certificateAvailable: false,

    joinLink: "#",

    recordingLink: "#",
  },

  {
    id: "5",

    mentorId: 6,
    mentorName: "Robert Brown",
    mentorRole:
      "Marketing Expert",
    mentorCompany: "Meta",
    mentorImage:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=600",

    title:
      "Digital Marketing Summit",

    date: "25 July 2026",
    month: "JUL",
    day: "25",
    weekday: "Saturday",

    time: "11:00 AM IST",

    type: "Conference",
    mode: "Online",

    registered: 620,
    seatsLeft: 30,

    registrationDate:
      "20 June 2026",

    eventStatus: "cancelled",

    certificateAvailable: false,

    joinLink: "#",

    recordingLink: "#",
  },
];

const MyEvents = () => {
  const [events, setEvents] =
    useState(initialEvents);

  const [search, setSearch] =
    useState("");

  const [view, setView] =
    useState<"grid" | "list">(
      "grid"
    );

  const [
    selectedFilter,
    setSelectedFilter,
  ] = useState("all");

  const [
    selectedEvent,
    setSelectedEvent,
  ] = useState<UserEvent | null>(
    null
  );

  const [
    detailsOpen,
    setDetailsOpen,
  ] = useState(false);

  const [
    cancelOpen,
    setCancelOpen,
  ] = useState(false);

  const filteredEvents =
    useMemo(() => {
      return events.filter(
        (event) => {
          const matchesSearch =
            event.title
              .toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||
            event.mentorName
              .toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||
            event.mentorCompany
              .toLowerCase()
              .includes(
                search.toLowerCase()
              );

          const matchesFilter =
            selectedFilter ===
            "all"
              ? true
              : event.eventStatus ===
                selectedFilter;

          return (
            matchesSearch &&
            matchesFilter
          );
        }
      );
    }, [
      events,
      search,
      selectedFilter,
    ]);

  const upcomingEvents =
    events.filter(
      (event) =>
        event.eventStatus ===
        "upcoming"
    ).length;

  const attendedEvents =
    events.filter(
      (event) =>
        event.eventStatus ===
        "attended"
    ).length;

  const certificatesEarned =
    events.filter(
      (event) =>
        event.certificateAvailable
    ).length;

  const handleView =
    (event: UserEvent) => {
      setSelectedEvent(event);

      setDetailsOpen(true);
    };

  const handleJoin =
    (event: UserEvent) => {
      if (!event.joinLink)
        return;

      window.open(
        event.joinLink,
        "_blank"
      );
    };

  const handleCancel =
    (event: UserEvent) => {
      setSelectedEvent(event);

      setCancelOpen(true);
    };

  const confirmCancel =
    () => {
      if (!selectedEvent)
        return;

      setEvents((prev) =>
        prev.map((event) =>
          event.id ===
          selectedEvent.id
            ? {
                ...event,
                eventStatus:
                  "cancelled",
              }
            : event
        )
      );

      setCancelOpen(false);
    };

  const handleBrowseEvents =
    () => {
      console.log(
        "Navigate to public events page"
      );
    };

  return (
    <div className="space-y-8">

      <MyEventsHeader
        totalEvents={
          events.length
        }
      />

      <MyEventsStats
        upcomingEvents={
          upcomingEvents
        }
        attendedEvents={
          attendedEvents
        }
        certificatesEarned={
          certificatesEarned
        }
        totalRegistrations={
          events.length
        }
      />

      <MyEventsToolbar
        search={search}
        setSearch={setSearch}
        view={view}
        setView={setView}
        selectedFilter={
          selectedFilter
        }
        setSelectedFilter={
          setSelectedFilter
        }
      />

      {filteredEvents.length ===
      0 ? (
        <EmptyEvents
          onBrowseEvents={
            handleBrowseEvents
          }
        />
      ) : (
        <>
          {view === "grid" && (
            <div
              className="
                grid
                xl:grid-cols-2

                gap-6
              "
            >
              {filteredEvents.map(
                (event) => (
                  <EventGridCard
                    key={event.id}
                    event={event}
                    onView={
                      handleView
                    }
                    onJoin={
                      handleJoin
                    }
                    onCancel={
                      handleCancel
                    }
                  />
                )
              )}
            </div>
          )}

          {view === "list" && (
            <div className="space-y-6">
              {filteredEvents.map(
                (event) => (
                  <EventListCard
                    key={event.id}
                    event={event}
                    onView={
                      handleView
                    }
                    onJoin={
                      handleJoin
                    }
                    onCancel={
                      handleCancel
                    }
                  />
                )
              )}
            </div>
          )}
        </>
      )}

      <EventDetailsModal
        open={detailsOpen}
        event={selectedEvent}
        onClose={() =>
          setDetailsOpen(false)
        }
        onJoin={handleJoin}
        onCancel={
          handleCancel
        }
      />

      <CancelRegistrationDialog
        open={cancelOpen}
        event={selectedEvent}
        onClose={() =>
          setCancelOpen(false)
        }
        onConfirm={
          confirmCancel
        }
      />

    </div>
  );
};

export default MyEvents;