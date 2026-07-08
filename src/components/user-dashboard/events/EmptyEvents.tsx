import {
  CalendarDays,
  Search,
} from "lucide-react";

interface EmptyEventsProps {
  onBrowseEvents: () => void;
}

const EmptyEvents = ({
  onBrowseEvents,
}: EmptyEventsProps) => {
  return (
    <div
      className="
        bg-white

        border

        rounded-[32px]

        p-12

        text-center
      "
    >
      <div
        className="
          h-24
          w-24

          mx-auto

          rounded-3xl

          bg-blue-50

          flex
          items-center
          justify-center
        "
      >
        <CalendarDays
          size={42}
          className="
            text-blue-600
          "
        />
      </div>

      <h2
        className="
          text-3xl
          font-bold

          mt-8
        "
      >
        No Events Found
      </h2>

      <p
        className="
          text-slate-500

          mt-4

          max-w-xl
          mx-auto
        "
      >
        You have not registered for any
        workshops, webinars or mentoring
        events yet.
      </p>

      <button
        onClick={onBrowseEvents}
        className="
          mt-8

          bg-blue-600
          hover:bg-blue-700

          text-white

          px-6
          py-3

          rounded-xl

          font-medium

          inline-flex
          items-center
          gap-2

          transition
        "
      >
        <Search size={18} />
        Browse Events
      </button>
    </div>
  );
};

export default EmptyEvents;