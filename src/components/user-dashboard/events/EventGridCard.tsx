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

interface EventGridCardProps {
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

const EventGridCard = ({
  event,
  onView,
  onJoin,
  onCancel,
}: EventGridCardProps) => {
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
        group

        bg-white

        border
        border-slate-200

        rounded-[32px]

        overflow-hidden

        hover:shadow-2xl
        hover:-translate-y-1

        transition-all
        duration-300
      "
    >
      {/* Top Gradient */}

      <div
        className="
          h-2

          bg-gradient-to-r
          from-blue-600
          via-indigo-600
          to-purple-600
        "
      />

      {/* Header */}

      <div className="p-6">

        <div
          className="
            flex
            items-start
            justify-between
            gap-4
          "
        >
          <div
            className="
              flex
              items-center
              gap-4
            "
          >
            <img
              src={event.mentorImage}
              alt={event.mentorName}
              className="
                h-16
                w-16

                rounded-2xl

                object-cover

                border-2
                border-slate-100
              "
            />

            <div>

              <h3
                className="
                  text-lg
                  font-bold
                "
              >
                {event.mentorName}
              </h3>

              <div
                className="
                  flex
                  items-center
                  gap-2

                  text-slate-500
                  text-sm

                  mt-1
                "
              >
                <Building2 size={14} />
                {event.mentorCompany}
              </div>

              <p
                className="
                  text-xs
                  text-slate-400

                  mt-1
                "
              >
                {event.mentorRole}
              </p>

            </div>

          </div>

          <span
            className={`
              px-3
              py-1.5

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

        </div>

      </div>

      {/* Event Content */}

      <div className="px-6 pb-6">

        <div
          className="
            flex
            gap-5
          "
        >
          {/* Calendar */}

          <div
            className="
              w-24

              rounded-3xl

              overflow-hidden

              border

              shrink-0
            "
          >
            <div
              className="
                bg-blue-600

                text-white

                text-center

                py-2

                font-bold
                tracking-widest
              "
            >
              {event.month}
            </div>

            <div
              className="
                py-5

                text-center
              "
            >
              <h2
                className="
                  text-4xl
                  font-bold
                "
              >
                {event.day}
              </h2>

              <p
                className="
                  text-xs
                  text-slate-500

                  mt-1
                "
              >
                {event.weekday}
              </p>
            </div>
          </div>

          {/* Details */}

          <div className="flex-1">

            <div
              className="
                flex
                justify-between
                gap-3
              "
            >
              <h2
                className="
                  text-xl
                  font-bold
                  leading-snug
                "
              >
                {event.title}
              </h2>

              <span
                className="
                  bg-purple-50
                  text-purple-700

                  px-3
                  py-1

                  rounded-full

                  text-xs
                  font-semibold

                  h-fit
                "
              >
                {event.type}
              </span>
            </div>

            <div
              className="
                mt-5

                space-y-3
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-3

                  text-slate-600
                "
              >
                <CalendarDays size={18} />
                {event.date}
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-3

                  text-slate-600
                "
              >
                <Clock3 size={18} />
                {event.time}
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-3

                  text-slate-600
                "
              >
                <MapPin size={18} />
                {event.mode}
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-3

                  text-slate-600
                "
              >
                <Users size={18} />
                {event.registered}+ Registered
              </div>
            </div>

          </div>

        </div>

        {/* Tags */}

        <div
          className="
            flex
            flex-wrap

            gap-2

            mt-6
          "
        >
          <span
            className="
              bg-blue-50
              text-blue-700

              px-3
              py-1

              rounded-full

              text-xs
              font-medium
            "
          >
            🎤 Live Q&A
          </span>

          <span
            className="
              bg-slate-100
              text-slate-700

              px-3
              py-1

              rounded-full

              text-xs
              font-medium
            "
          >
            📹 Recording
          </span>

          {event.certificateAvailable && (
            <span
              className="
                bg-green-50
                text-green-700

                px-3
                py-1

                rounded-full

                text-xs
                font-medium

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

        {/* Bottom */}

        <div
          className="
            mt-8
            pt-6

            border-t

            space-y-4
          "
        >
          <div
            className="
              flex
              flex-wrap

              gap-3
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
              🎟 {event.seatsLeft} Seats Left
            </span>
          </div>

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-3

              gap-3
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

                hover:bg-slate-50

                transition
              "
            >
              <Eye size={16} />
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
              <ExternalLink size={16} />
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
              <AlertTriangle size={16} />
              Cancel
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default EventGridCard;