import { Plus } from "lucide-react";

interface EventsHeaderProps {
  totalEvents: number;

  onAddEvent: () => void;
}

const EventsHeader = ({
  totalEvents,
  onAddEvent,
}: EventsHeaderProps) => {
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
      {/* Left */}

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
          🎟 Events Management
        </div>

        <h1
          className="
            text-4xl
            font-bold
            mt-4
          "
        >
          Events Dashboard
        </h1>

        <p
          className="
            mt-3
            text-slate-500
            max-w-2xl
          "
        >
          Manage all your workshops,
          webinars, bootcamps and live
          mentoring sessions from one place.
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
            {totalEvents} Active Events
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
            Mentor Dashboard
          </div>

        </div>

      </div>

      {/* Right */}

      <button
        onClick={onAddEvent}
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

        Add New Event
      </button>

    </div>
  );
};

export default EventsHeader;