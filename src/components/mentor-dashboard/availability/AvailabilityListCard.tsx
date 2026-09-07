import {
  CalendarDays,
  Clock3,
  Pencil,
  Trash2,
} from "lucide-react";

import type { Availability } from "@/types/availability";

interface AvailabilityListCardProps {
  availability: Availability;

  onEdit: (
    availability: Availability
  ) => void;

  onDelete: (
    availability: Availability
  ) => void;
}

const AvailabilityListCard = ({
  availability,
  onEdit,
  onDelete,
}: AvailabilityListCardProps) => {
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
        {/* Left Day */}

        <div
          className="
            bg-gradient-to-br
            from-blue-600
            to-blue-700

            text-white

            xl:w-[240px]

            flex
            flex-col
            items-center
            justify-center

            py-10
          "
        >
          <CalendarDays
            size={40}
          />

          <h2
            className="
              text-4xl
              font-bold

              mt-4
            "
          >
            {availability.day}
          </h2>

          <p className="mt-2 opacity-90">
            Available Day
          </p>
        </div>

        {/* Right */}

        <div
          className="
            flex-1
            p-6
          "
        >
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
                className={`
                  px-3
                  py-1

                  rounded-full

                  text-xs
                  font-semibold

                  ${
                    availability.enabled
                      ? "bg-green-100 text-green-700"
                      : "bg-slate-100 text-slate-600"
                  }
                `}
              >
                {availability.enabled
                  ? "🟢 Available"
                  : "⚪ Disabled"}
              </span>

              <h2
                className="
                  text-3xl
                  font-bold

                  mt-4
                "
              >
                {availability.day}
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
                {availability.slots.length}
                {" "}
                Slots
              </span>
            </div>
          </div>

          {/* Slots */}

          <div className="mt-8">
            <div
              className="
                flex
                items-center
                gap-2

                mb-4
              "
            >
              <Clock3 size={18} />

              <span className="font-medium">
                Available Slots
              </span>
            </div>

            <div
              className="
                flex
                flex-wrap
                gap-2
              "
            >
              {availability.slots.map(
                (slot, index) => (
                  <span
                    key={`${slot.start}-${slot.end}-${index}`}
                    className="
                      bg-blue-50
                      text-blue-700

                      px-3
                      py-2

                      rounded-xl

                      text-sm
                    "
                  >
                    {slot.start} - {slot.end}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Footer */}

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
                bg-slate-50

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
                Total Available Slots
              </p>

              <p
                className="
                  font-bold
                  text-blue-600
                "
              >
                {availability.slots.length}
                {" "}
                Slots
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
                  onEdit(
                    availability
                  )
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
                  onDelete(
                    availability
                  )
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

export default AvailabilityListCard;