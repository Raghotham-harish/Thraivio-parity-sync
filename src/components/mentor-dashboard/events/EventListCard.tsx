import {
  CalendarDays,
  Clock3,
  MapPin,
  Users,
  Pencil,
  Trash2,
} from "lucide-react";

import type { Event } from "@/types/event";

interface EventListCardProps {
  event: Event;

  onEdit: (
    event: Event
  ) => void;

  onDelete: (
    event: Event
  ) => void;
}

const EventListCard = ({
  event,
  onEdit,
  onDelete,
}: EventListCardProps) => {
  return (
    <div
      className="
        bg-white

        border
        border-slate-200

        rounded-3xl

        overflow-hidden

        hover:shadow-xl

        transition-all
        duration-300
      "
    >
      <div
        className="
          flex
          flex-col

          xl:flex-row
        "
      >
        {/* Calendar */}

        <div
          className="
            bg-gradient-to-br
            from-blue-600
            to-blue-700

            text-white

            xl:w-[220px]

            flex
            flex-col
            items-center
            justify-center

            py-10
          "
        >
          <p
            className="
              text-lg
              font-semibold
              tracking-widest
            "
          >
            {event.month}
          </p>

          <h2
            className="
              text-6xl
              font-bold
            "
          >
            {event.day}
          </h2>

          <p
            className="
              mt-2
              opacity-90
            "
          >
            {event.weekday}
          </p>

        </div>

        {/* Content */}

        <div
          className="
            flex-1
            p-6
          "
        >
          {/* Top */}

          <div
            className="
              flex
              flex-col

              lg:flex-row
              lg:justify-between

              gap-4
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
                🔴 LIVE EVENT
              </span>

              <h2
                className="
                  text-3xl
                  font-bold
                  mt-4
                "
              >
                {event.title}
              </h2>

            </div>

            <div>

              <span
                className="
                  bg-blue-50
                  text-blue-700

                  px-4
                  py-2

                  rounded-full

                  text-sm
                  font-semibold
                "
              >
                {event.type}
              </span>

            </div>

          </div>

          {/* Details */}

          <div
            className="
              grid
              md:grid-cols-2
              gap-4

              mt-6
            "
          >
            <div
              className="
                flex
                items-center
                gap-3
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
                bg-green-50
                text-green-700

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
              flex-col

              lg:flex-row
              lg:items-center
              lg:justify-between

              gap-5

              mt-8
            "
          >
            <div
              className="
                bg-amber-50

                rounded-2xl

                p-4
              "
            >
              <p
                className="
                  text-sm
                  text-slate-500
                "
              >
                Seats Remaining
              </p>

              <p
                className="
                  font-bold
                  text-red-600
                "
              >
                Only
                {" "}
                {event.seatsLeft}
                {" "}
                Seats Left
              </p>

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

export default EventListCard;