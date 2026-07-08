import {
  CalendarDays,
  Clock3,
  MapPin,
  Users,
  Building2,
  Award,
  ExternalLink,
  PlayCircle,
  Download,
  X,
} from "lucide-react";

import type { UserEvent } from "@/types/user-event";

interface EventDetailsModalProps {
  open: boolean;

  event: UserEvent | null;

  onClose: () => void;

  onJoin: (
    event: UserEvent
  ) => void;

  onCancel: (
    event: UserEvent
  ) => void;
}

const EventDetailsModal = ({
  open,
  event,
  onClose,
  onJoin,
  onCancel,
}: EventDetailsModalProps) => {
  if (!open || !event) return null;

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
        fixed
        inset-0
        z-50

        bg-black/60
        backdrop-blur-sm

        flex
        items-center
        justify-center

        p-4
      "
    >
      <div
        className="
          bg-white

          w-full
          max-w-5xl

          rounded-[32px]

          overflow-hidden

          shadow-2xl

          max-h-[90vh]

          flex
          flex-col
        "
      >
        {/* Header */}

        <div
          className="
            relative

            bg-gradient-to-r
            from-blue-600
            via-indigo-600
            to-purple-600

            p-8

            text-white
          "
        >
          <button
            onClick={onClose}
            className="
              absolute
              top-6
              right-6

              h-10
              w-10

              rounded-full

              bg-white/20

              flex
              items-center
              justify-center

              hover:bg-white/30

              transition
            "
          >
            <X size={20} />
          </button>

          <div className="max-w-3xl">
            <span
              className="
                inline-flex

                px-4
                py-2

                rounded-full

                bg-white/20

                text-sm
                font-medium
              "
            >
              {event.type}
            </span>

            <h2
              className="
                text-4xl
                font-bold

                mt-5
              "
            >
              {event.title}
            </h2>

            <p
              className="
                text-blue-100

                mt-4
              "
            >
              Learn directly from industry experts through
              live workshops, webinars and mentoring
              experiences.
            </p>
          </div>
        </div>

        {/* Body */}

        <div
          className="
            overflow-y-auto

            flex-1

            p-8
          "
        >
          <div
            className="
              grid
              xl:grid-cols-3

              gap-8
            "
          >
            {/* Left */}

            <div className="xl:col-span-2 space-y-6">
              {/* Mentor */}

              <div
                className="
                  border

                  rounded-3xl

                  p-6
                "
              >
                <h3
                  className="
                    text-xl
                    font-bold

                    mb-5
                  "
                >
                  Event Mentor
                </h3>

                <div
                  className="
                    flex
                    items-center
                    gap-5
                  "
                >
                  <img
                    src={event.mentorImage}
                    alt={event.mentorName}
                    className="
                      h-20
                      w-20

                      rounded-3xl

                      object-cover
                    "
                  />

                  <div>
                    <h4
                      className="
                        text-xl
                        font-bold
                      "
                    >
                      {event.mentorName}
                    </h4>

                    <p
                      className="
                        text-slate-600
                      "
                    >
                      {event.mentorRole}
                    </p>

                    <div
                      className="
                        flex
                        items-center
                        gap-2

                        mt-2

                        text-slate-500
                      "
                    >
                      <Building2 size={16} />
                      {event.mentorCompany}
                    </div>
                  </div>
                </div>
              </div>

              {/* Event Details */}

              <div
                className="
                  border

                  rounded-3xl

                  p-6
                "
              >
                <h3
                  className="
                    text-xl
                    font-bold

                    mb-5
                  "
                >
                  Event Information
                </h3>

                <div
                  className="
                    grid
                    md:grid-cols-2

                    gap-5
                  "
                >
                  <div className="flex items-center gap-3">
                    <CalendarDays size={18} />
                    {event.date}
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock3 size={18} />
                    {event.time}
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin size={18} />
                    {event.mode}
                  </div>

                  <div className="flex items-center gap-3">
                    <Users size={18} />
                    {event.registered}+ Registered
                  </div>
                </div>
              </div>

              {/* Benefits */}

              <div
                className="
                  border

                  rounded-3xl

                  p-6
                "
              >
                <h3
                  className="
                    text-xl
                    font-bold

                    mb-5
                  "
                >
                  Included Benefits
                </h3>

                <div className="space-y-3">
                  <div>✅ Live Interactive Session</div>
                  <div>✅ Q&A With Mentor</div>
                  <div>✅ Session Recording</div>
                  <div>✅ Resource Materials</div>
                  <div>✅ Networking Opportunities</div>

                  {event.certificateAvailable && (
                    <div>
                      ✅ Completion Certificate
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right */}

            <div>
              <div
                className="
                  sticky
                  top-0

                  border

                  rounded-3xl

                  p-6

                  bg-slate-50
                "
              >
                <h3
                  className="
                    text-xl
                    font-bold
                  "
                >
                  Registration Summary
                </h3>

                <div className="mt-6 space-y-4">
                  <div
                    className="
                      bg-white

                      rounded-2xl

                      p-4
                    "
                  >
                    <p className="text-sm text-slate-500">
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
                  </div>

                  <div
                    className="
                      bg-white

                      rounded-2xl

                      p-4
                    "
                  >
                    <p className="text-sm text-slate-500">
                      Status
                    </p>

                    <span
                      className={`
                        inline-flex

                        mt-2

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
                  </div>

                  <div
                    className="
                      bg-white

                      rounded-2xl

                      p-4
                    "
                  >
                    <p className="text-sm text-slate-500">
                      Seats Remaining
                    </p>

                    <h4
                      className="
                        text-red-600
                        font-bold
                        mt-1
                      "
                    >
                      {event.seatsLeft} Seats Left
                    </h4>
                  </div>

                  {event.certificateAvailable && (
                    <div
                      className="
                        bg-green-50

                        rounded-2xl

                        p-4

                        flex
                        items-center
                        gap-3
                      "
                    >
                      <Award
                        size={20}
                        className="
                          text-green-600
                        "
                      />

                      <span
                        className="
                          text-green-700
                          font-medium
                        "
                      >
                        Certificate Available
                      </span>
                    </div>
                  )}
                </div>

                {/* Actions */}

                <div
                  className="
                    mt-6

                    space-y-3
                  "
                >
                  <button
                    onClick={() =>
                      onJoin(event)
                    }
                    className="
                      w-full

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

                  {event.recordingLink && (
                    <button
                      className="
                        w-full

                        border

                        py-3

                        rounded-xl

                        font-medium

                        flex
                        items-center
                        justify-center
                        gap-2
                      "
                    >
                      <PlayCircle size={18} />
                      Watch Recording
                    </button>
                  )}

                  {event.certificateAvailable && (
                    <button
                      className="
                        w-full

                        border

                        py-3

                        rounded-xl

                        font-medium

                        flex
                        items-center
                        justify-center
                        gap-2
                      "
                    >
                      <Download size={18} />
                      Download Certificate
                    </button>
                  )}

                  <button
                    onClick={() =>
                      onCancel(event)
                    }
                    className="
                      w-full

                      bg-red-600
                      hover:bg-red-700

                      text-white

                      py-3

                      rounded-xl

                      font-medium

                      transition
                    "
                  >
                    Cancel Registration
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsModal;