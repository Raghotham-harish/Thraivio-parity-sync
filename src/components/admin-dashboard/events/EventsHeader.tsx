import { memo } from "react";

import {
  CalendarDays,
  Plus,
  Download,
  Radio,
} from "lucide-react";

import { Button } from "@/components/ui/button";

interface EventsHeaderProps {
  totalEvents: number;
  liveEvents: number;
  upcomingEvents: number;

  onExport: () => void;
  onAddEvent: () => void;
}

const EventsHeader = ({
  totalEvents,
  liveEvents,
  upcomingEvents,
  onExport,
  onAddEvent,
}: EventsHeaderProps) => {
  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-[32px]
        bg-gradient-to-br
        from-blue-700
        via-indigo-700
        to-slate-900
        p-8
        lg:p-10
        text-white
        shadow-xl
      "
    >
      {/* Background Glow */}

      <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}

        <div className="max-w-3xl">
          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/20
              bg-white/10
              px-4
              py-2
              text-sm
              font-semibold
              backdrop-blur
            "
          >
            <CalendarDays size={16} />

            Events Management
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight lg:text-5xl">
            Manage All Events
          </h1>

          <p className="mt-5 max-w-2xl text-blue-100 leading-8">
            Create, publish, manage and monitor every webinar,
            workshop, live session and bootcamp from one premium
            dashboard. Track registrations, revenue, attendance
            and mentor performance with complete control.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
              📅 {totalEvents} Total Events
            </span>

            <span className="rounded-full bg-red-500/20 px-4 py-2 text-sm text-red-100">
              🔴 {liveEvents} Live Now
            </span>

            <span className="rounded-full bg-amber-500/20 px-4 py-2 text-sm text-amber-100">
  🟡 {upcomingEvents} Upcoming
</span>

            <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
              📈 Analytics
            </span>
          </div>
        </div>

        {/* Right */}

        <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
          <Button
            onClick={onAddEvent}
            size="lg"
            className="
              h-12
              rounded-2xl
              bg-white
              px-7
              text-slate-900
              hover:bg-slate-100
            "
          >
            <Plus className="mr-2 h-5 w-5" />

            Add Event
          </Button>

          <Button
            variant="secondary"
            size="lg"
            onClick={onExport}
            className="
              h-12
              rounded-2xl
              border
              border-white/20
              bg-white/10
              px-7
              text-white
              hover:bg-white/20
            "
          >
            <Download className="mr-2 h-5 w-5" />

            Export Events
          </Button>
        </div>
      </div>

      {/* Bottom Stats */}

      <div
        className="
          relative
          z-10
          mt-10
          grid
          gap-4
          md:grid-cols-3
        "
      >
        <div className="rounded-3xl bg-white/10 p-5 backdrop-blur">
          <p className="text-sm text-blue-100">
            Total Events
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {totalEvents}
          </h2>
        </div>

        <div className="rounded-3xl bg-white/10 p-5 backdrop-blur">
          <div className="flex items-center gap-2">
            <Radio className="h-4 w-4 text-red-300" />

            <p className="text-sm text-blue-100">
              Live Events
            </p>
          </div>

          <h2 className="mt-2 text-3xl font-bold">
            {liveEvents}
          </h2>
        </div>

        <div className="rounded-3xl bg-white/10 p-5 backdrop-blur">
  <p className="text-sm text-blue-100">
    Upcoming Events
  </p>

  <h2 className="mt-2 text-3xl font-bold">
    {upcomingEvents}
  </h2>
</div>
      </div>
    </section>
  );
};

export default memo(EventsHeader);