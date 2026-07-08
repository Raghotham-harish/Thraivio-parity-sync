import { Plus } from "lucide-react";

interface AvailabilityHeaderProps {
  totalDays: number;

  onAddAvailability: () => void;
}

const AvailabilityHeader = ({
  totalDays,
  onAddAvailability,
}: AvailabilityHeaderProps) => {
  return (
    <div
      className="
        flex
        flex-col
        lg:flex-row
        lg:items-center
        lg:justify-between
        gap-6
      "
    >
      <div>

        <div
          className="
            inline-flex
            items-center

            px-4
            py-2

            rounded-full

            bg-blue-50
            text-blue-700

            text-sm
            font-medium
          "
        >
          📅 Availability Management
        </div>

        <h1
          className="
            text-4xl
            font-bold
            mt-4
          "
        >
          Availability Dashboard
        </h1>

        <p
          className="
            mt-3
            text-slate-500
            max-w-2xl
          "
        >
          Manage your available mentoring
          dates and session slots.
        </p>

        <div
          className="
            mt-5
            flex
            flex-wrap
            gap-3
          "
        >
          <div
            className="
              px-4
              py-2

              rounded-xl

              bg-slate-100

              text-sm
              font-medium
            "
          >
            {totalDays} Available Days
          </div>

          <div
            className="
              px-4
              py-2

              rounded-xl

              bg-green-50
              text-green-700

              text-sm
              font-medium
            "
          >
            Booking Enabled
          </div>
        </div>

      </div>

      <button
        onClick={
          onAddAvailability
        }
        className="
          bg-blue-600
          hover:bg-blue-700

          text-white

          px-6
          py-4

          rounded-2xl

          font-semibold

          flex
          items-center
          gap-2

          transition
          hover:shadow-lg
        "
      >
        <Plus size={20} />

        Add Availability
      </button>

    </div>
  );
};

export default AvailabilityHeader;