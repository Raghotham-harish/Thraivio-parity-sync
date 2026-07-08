import {
  CalendarDays,
  Clock3,
  MapPin,
  Users,
  Building2,
  Award,
  Eye,
  ExternalLink,
  AlertTriangle,
} from "lucide-react";

import type { UserEvent } from "@/types/user-event";

interface EventListCardProps {
  event: UserEvent;

  onView: (
    event: UserEvent
  ) => void;

  onJoin: (
    event: UserEvent
  ) => void;

  onCancel: (
    event: UserEvent
  ) => void;
}

const EventListCard = ({
  event,
  onView,
  onJoin,
  onCancel,
}: EventListCardProps) => {
  const statusStyles = {
    upcoming:
      "bg-blue-100 text-blue-700",

    attended:
      "bg-green-100 text-green-700",

    cancelled:
      "bg-red-100 text-red-700",
  };

  return (
    <div
      className="
        bg-white

        border
        border-slate-200

        rounded-[32px]

        overflow-hidden

        hover:shadow-2xl

        transition-all
        duration-300
      "
    >
      <div
        className="
          h-2

          bg-gradient-to-r
          from-blue-600
          via-indigo-600
          to-purple-600
        "
      />

      <div className="p-6">

        <div
          className="
            flex
            flex-col

            xl:flex-row

            xl:items-center
            xl:justify-between

            gap-6
          "
        >
          {/* Left Section */}

          <div
            className="
              flex
              gap-5

              flex-1
            "
          >
            {/* Mentor Image */}

            <div className="shrink-0">

              <img
                src={event.mentorImage}
                alt={event.mentorName}
                className="
                  h-24
                  w-24

                  rounded-3xl

                  object-cover

                  border-2
                  border-slate-100
                "
              />

            </div>

            {/* Content */}

            <div className="flex-1">

              {/* Badges */}

              <div
                className="
                  flex
                  flex-wrap

                  gap-2
                "
              >
                <span
                  className={`
                    px-3
                    py-1

                    rounded-full

                    text-xs
                    font-semibold

                    ${
                      statusStyles[
                        event.eventStatus
                      ]
                    }
                  `}
                >
                  {event.eventStatus}
                </span>

                <span
                  className="
                    bg-purple-100
                    text-purple-700

                    px-3
                    py-1

                    rounded-full

                    text-xs
                    font-semibold
                  "
                >
                  {event.type}
                </span>

                <span
                  className="
                    bg-blue-100
                    text-blue-700

                    px-3
                    py-1

                    rounded-full

                    text-xs
                    font-semibold
                  "
                >
                  {event.mode}
                </span>

                {event.certificateAvailable && (
                  <span
                    className="
                      bg-green-100
                      text-green-700

                      px-3
                      py-1

                      rounded-full

                      text-xs
                      font-semibold

                      flex
                      items-center
                      gap-1
                    "
                  >
                    <Award size={12} />
                    Certificate
                  </span>
                )}
              </div>

              {/* Title */}

              <h2
                className="
                  text-2xl
                  font-bold

                  mt-4
                "
              >
                {event.title}
              </h2>

              {/* Mentor */}

              <div
                className="
                  flex
                  flex-wrap

                  items-center

                  gap-2

                  text-slate-600

                  mt-3
                "
              >
                <span className="font-semibold">
                  {event.mentorName}
                </span>

                <span>•</span>

                <div
                  className="
                    flex
                    items-center
                    gap-1
                  "
                >
                  <Building2 size={14} />
                  {event.mentorCompany}
                </div>
              </div>

              <p
                className="
                  text-sm
                  text-slate-500

                  mt-1
                "
              >
                {event.mentorRole}
              </p>

              {/* Event Info */}

              <div
                className="
                  grid
                  md:grid-cols-2

                  gap-4

                  mt-6
                "
              >
                <div className="flex items-center gap-2 text-slate-600">
                  <CalendarDays size={16} />
                  {event.date}
                </div>

                <div className="flex items-center gap-2 text-slate-600">
                  <Clock3 size={16} />
                  {event.time}
                </div>

                <div className="flex items-center gap-2 text-slate-600">
                  <MapPin size={16} />
                  {event.mode}
                </div>

                <div className="flex items-center gap-2 text-slate-600">
                  <Users size={16} />
                  {event.registered}+ Registered
                </div>
              </div>

            </div>

          </div>

          {/* Right Section */}

          <div
            className="
              xl:w-80

              shrink-0
            "
          >
            <div
              className="
                bg-slate-50

                rounded-3xl

                p-5
              "
            >
              <p
                className="
                  text-sm
                  text-slate-500
                "
              >
                Registration Date
              </p>

              <h4
                className="
                  font-semibold

                  mt-1
                "
              >
                {event.registrationDate}
              </h4>

              <div
                className="
                  flex
                  flex-wrap

                  gap-2

                  mt-5
                "
              >
                <span
                  className="
                    bg-green-50
                    text-green-700

                    px-3
                    py-2

                    rounded-xl

                    text-sm
                    font-medium
                  "
                >
                  👥 {event.registered}+ Joined
                </span>

                <span
                  className="
                    bg-red-50
                    text-red-700

                    px-3
                    py-2

                    rounded-xl

                    text-sm
                    font-medium
                  "
                >
                  🎟 {event.seatsLeft} Left
                </span>
              </div>

              <div
                className="
                  flex
                  flex-col

                  gap-3

                  mt-5
                "
              >
                <button
                  onClick={() =>
                    onView(event)
                  }
                  className="
                    border
                    border-slate-300

                    py-3

                    rounded-xl

                    font-medium

                    flex
                    items-center
                    justify-center
                    gap-2

                    hover:bg-slate-100

                    transition
                  "
                >
                  <Eye size={18} />
                  View Details
                </button>

                <button
                  onClick={() =>
                    onJoin(event)
                  }
                  className="
                    bg-blue-600
                    hover:bg-blue-700

                    text-white

                    py-3

                    rounded-xl

                    font-medium

                    flex
                    items-center
                    justify-center
                    gap-2

                    transition
                  "
                >
                  <ExternalLink size={18} />
                  Join Event
                </button>

                <button
                  onClick={() =>
                    onCancel(event)
                  }
                  className="
                    bg-red-600
                    hover:bg-red-700

                    text-white

                    py-3

                    rounded-xl

                    font-medium

                    flex
                    items-center
                    justify-center
                    gap-2

                    transition
                  "
                >
                  <AlertTriangle size={18} />
                  Cancel Registration
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default EventListCard;