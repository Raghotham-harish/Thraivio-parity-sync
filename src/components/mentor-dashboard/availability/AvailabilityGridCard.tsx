import {
  CalendarDays,
  Clock3,
  Pencil,
  Trash2,
} from "lucide-react";

import type { Availability } from "@/types/availability";

interface AvailabilityGridCardProps {
  availability: Availability;

  onEdit: (
    availability: Availability
  ) => void;

  onDelete: (
    availability: Availability
  ) => void;
}

const AvailabilityGridCard = ({
  availability,
  onEdit,
  onDelete,
}: AvailabilityGridCardProps) => {
  return (
    <div
      className="
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
      {/* Top */}

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
          <div
            className="
              h-14
              w-14

              rounded-2xl

              bg-blue-100

              flex
              items-center
              justify-center
            "
          >
            <CalendarDays
              size={26}
              className="
                text-blue-600
              "
            />
          </div>

          <div>
            <p
              className="
                text-sm
                text-slate-500
              "
            >
              Available Day
            </p>

            <h3
              className="
                text-2xl
                font-bold
              "
            >
              {availability.day}
            </h3>
          </div>
        </div>

        <span
          className={`
            px-3
            py-1

            rounded-full

            text-xs
            font-semibold

            ${
              availability.enabled
                ? "bg-green-50 text-green-700"
                : "bg-slate-100 text-slate-600"
            }
          `}
        >
          {availability.enabled
            ? "Available"
            : "Disabled"}
        </span>
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
          <Clock3
            size={18}
            className="
              text-blue-600
            "
          />

          <h4 className="font-semibold">
            Time Slots
          </h4>
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
                  font-medium
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
            Total Slots
          </p>

          <h4
            className="
              text-lg
              font-bold
              text-blue-600
            "
          >
            {availability.slots.length}
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
  );
};

export default AvailabilityGridCard;