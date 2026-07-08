import {
  CalendarDays,
  Clock3,
  MapPin,
  Users,
  Pencil,
  Trash2,
} from "lucide-react";

import type { Event } from "@/types/event";

interface EventGridCardProps {
  event: Event;

  onEdit: (
    event: Event
  ) => void;

  onDelete: (
    event: Event
  ) => void;
}

const EventGridCard = ({
  event,
  onEdit,
  onDelete,
}: EventGridCardProps) => {
  return (
    <div
      className="
        group

        bg-white

        border
        border-slate-200

        rounded-3xl

        p-6

        hover:shadow-xl
        hover:-translate-y-1

        transition-all
        duration-300
      "
    >
      <div className="flex gap-5">

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
              bg-white

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

        {/* Content */}

        <div className="flex-1">

          <div
            className="
              flex
              justify-between
              gap-3
            "
          >
            <div>

              <span
                className="
                  bg-red-100
                  text-red-600

                  px-3
                  py-1

                  rounded-full

                  text-xs
                  font-semibold
                "
              >
                🔴 LIVE
              </span>

              <h3
                className="
                  text-2xl
                  font-bold
                  mt-3
                "
              >
                {event.title}
              </h3>

            </div>

            <span
              className="
                bg-blue-50
                text-blue-700

                px-3
                py-1

                rounded-full

                h-fit

                text-xs
                font-semibold
              "
            >
              {event.type}
            </span>

          </div>

          {/* Event Info */}

          <div
            className="
              space-y-3
              mt-5
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

              {event.registered}
              +
              Registered
            </div>

          </div>

          {/* Features */}

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
              "
            >
              📹 Recording
            </span>

            <span
              className="
                bg-blue-50
                text-blue-700

                px-3
                py-1

                rounded-full

                text-xs
              "
            >
              📜 Certificate
            </span>

          </div>

          {/* Bottom */}

          <div
            className="
              flex
              items-center
              justify-between

              mt-8
            "
          >
            <div>

              <p
                className="
                  text-sm
                  text-slate-500
                "
              >
                Seats Left
              </p>

              <h4
                className="
                  font-bold
                  text-red-600
                "
              >
                Only
                {" "}
                {event.seatsLeft}
                {" "}
                Left
              </h4>

            </div>

            <div
              className="
                flex
                gap-3
              "
            >
              <button
                onClick={() =>
                  onEdit(event)
                }
                className="
                  border
                  border-blue-600

                  text-blue-600

                  px-5
                  py-3

                  rounded-2xl

                  flex
                  items-center
                  gap-2

                  hover:bg-blue-600
                  hover:text-white

                  transition
                "
              >
                <Pencil size={18} />

                Edit
              </button>

              <button
                onClick={() =>
                  onDelete(event)
                }
                className="
                  bg-red-600
                  hover:bg-red-700

                  text-white

                  px-5
                  py-3

                  rounded-2xl

                  flex
                  items-center
                  gap-2

                  transition
                "
              >
                <Trash2 size={18} />

                Delete
              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default EventGridCard;