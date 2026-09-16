import { memo } from "react";

import {
  CalendarX2,
  Plus,
  RotateCcw,
  RefreshCw,
  Upload,
  Search,
  Sparkles,
  FilterX,
  BookOpen,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";

interface EventsEmptyStateProps {
  search: string;

  activeFilters: number;

  loading?: boolean;

  onCreate: () => void;

  onRefresh: () => void;

  onResetFilters: () => void;

  onImport: () => void;

  onDocumentation?: () => void;
}

const EventsEmptyState = ({
  search,
  activeFilters,
  loading = false,
  onCreate,
  onRefresh,
  onResetFilters,
  onImport,
  onDocumentation,
}: EventsEmptyStateProps) => {
  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-2xl
        border
        
        from-white
        
        
        p-10
        shadow-sm
      "
    >
      {/* Decorative Background */}

      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#EFF6FF] blur-3xl" />

      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-secondary blur-3xl" />

      <div className="relative z-10">

        {/* Hero */}

        <div className="flex flex-col items-center text-center">

          <div className="relative">

            <div
              className="
                absolute
                inset-0
                rounded-full
                bg-blue-500/20
                blur-3xl
              "
            />

            <div
              className="
                relative
                flex
                h-36
                w-36
                items-center
                justify-center
                rounded-full
                
                bg-primary
                
                
                text-white
                shadow-2xl
              "
            >
              <CalendarX2 className="h-20 w-20" />
            </div>

          </div>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#EFF6FF] px-4 py-2 text-sm font-medium text-[#2563EB]">

            <Sparkles className="h-4 w-4" />

            Events Management

          </div>

          <h2 className="mt-6 text-4xl font-bold tracking-tight">

            No Events Found

          </h2>

          <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground">

            There are no events matching your current search and
            filter criteria. Create a new webinar, workshop,
            bootcamp or live session, or adjust your filters to
            discover existing events.

          </p>
                    {/* Search & Filter Summary */}

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">

            {search.trim() !== "" && (
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  bg-card
                  px-5
                  py-3
                  shadow-sm
                "
              >
                <Search className="h-4 w-4 text-primary" />

                <span className="text-sm font-medium">
                  Search :
                </span>

                <span className="text-sm text-muted-foreground">
                  "{search}"
                </span>
              </div>
            )}

            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                bg-card
                px-5
                py-3
                shadow-sm
              "
            >
              <FilterX className="h-4 w-4 text-orange-500" />

              <span className="text-sm font-medium">
                Active Filters :
              </span>

              <span className="rounded-full bg-orange-100 px-2 py-1 text-xs font-semibold text-orange-700">
                {activeFilters}
              </span>
            </div>

            {loading && (
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  bg-card
                  px-5
                  py-3
                  shadow-sm
                "
              >
                <RefreshCw className="h-4 w-4 animate-spin text-primary" />

                <span className="text-sm font-medium">
                  Refreshing Events...
                </span>
              </div>
            )}

          </div>

          {/* Premium Tips */}

          <div
            className="
              mt-12
              grid
              w-full
              gap-6
              lg:grid-cols-3
            "
          >

            <div
              className="
                rounded-2xl
                border
                bg-card
                p-6
                shadow-sm
                transition-all
                hover:-translate-y-1
                hover:shadow-lg
              "
            >

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EFF6FF]">

                <Search className="h-7 w-7 text-primary" />

              </div>

              <h3 className="text-lg font-semibold">

                Check Search

              </h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">

                Try different keywords, mentor names,
                categories or event titles.

              </p>

            </div>

            <div
              className="
                rounded-2xl
                border
                bg-card
                p-6
                shadow-sm
                transition-all
                hover:-translate-y-1
                hover:shadow-lg
              "
            >

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFFBEB]">

                <FilterX className="h-7 w-7 text-amber-600" />

              </div>

              <h3 className="text-lg font-semibold">

                Reset Filters

              </h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">

                Remove status, mentor, category and date filters
                to see every available event.

              </p>

            </div>

            <div
              className="
                rounded-2xl
                border
                bg-card
                p-6
                shadow-sm
                transition-all
                hover:-translate-y-1
                hover:shadow-lg
              "
            >

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ECFDF5]">

                <Plus className="h-7 w-7 text-[#0F8F65]" />

              </div>

              <h3 className="text-lg font-semibold">

                Create New Event

              </h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">

                Publish your first workshop, webinar,
                masterclass or live mentoring session.

              </p>

            </div>

          </div>

          {/* Quick Help */}

          <div
            className="
              mt-10
              w-full
              rounded-[28px]
              border
              bg-card
              p-8
              shadow-sm
            "
          >

            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

              <div>

                <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-medium text-muted-foreground">

                  <BookOpen className="h-4 w-4" />

                  Need Help?

                </div>

                <h3 className="mt-5 text-2xl font-bold">

                  Learn how Events Management works

                </h3>

                <p className="mt-3 max-w-2xl text-muted-foreground leading-7">

                  Read documentation to understand event
                  publishing, registrations, certificates,
                  analytics and mentor management.

                </p>

              </div>

              <Button
                variant="outline"
                className="h-12 rounded-2xl px-7"
                onClick={onDocumentation}
              >
                Documentation

                <ArrowRight className="ml-2 h-4 w-4" />

              </Button>

            </div>

          </div>
                    {/* Primary Actions */}

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">

            <Button
              size="lg"
              onClick={onCreate}
              className="
                h-12
                rounded-2xl
                px-8
                shadow-lg
              "
            >
              <Plus className="mr-2 h-5 w-5" />

              Create Event
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={onImport}
              className="
                h-12
                rounded-2xl
                px-8
              "
            >
              <Upload className="mr-2 h-5 w-5" />

              Import Events
            </Button>

            <Button
              variant="outline"
              size="lg"
              disabled={loading}
              onClick={onRefresh}
              className="
                h-12
                rounded-2xl
                px-8
              "
            >
              <RefreshCw
                className={`mr-2 h-5 w-5 ${
                  loading ? "animate-spin" : ""
                }`}
              />

              Refresh
            </Button>

            <Button
              variant="secondary"
              size="lg"
              onClick={onResetFilters}
              className="
                h-12
                rounded-2xl
                px-8
              "
            >
              <RotateCcw className="mr-2 h-5 w-5" />

              Reset Filters
            </Button>

          </div>

          {/* Bottom CTA */}

          <div
            className="
              mt-14
              rounded-2xl
              border
              
              bg-primary
              
              
              p-8
              text-white
              shadow-xl
            "
          >

            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

              <div>

                <div className="inline-flex items-center gap-2 rounded-full bg-card/10 px-4 py-2 text-sm backdrop-blur">

                  <Sparkles className="h-4 w-4" />

                  CoachCoaching Events

                </div>

                <h3 className="mt-5 text-3xl font-bold">

                  Start Managing Professional Events

                </h3>

                <p className="mt-4 max-w-2xl text-blue-100 leading-8">

                  Build webinars, workshops, bootcamps,
                  masterclasses and live mentoring sessions.
                  Track registrations, revenue, attendance,
                  certificates and mentor performance from one
                  premium dashboard.

                </p>

              </div>

              <Button
                size="lg"
                onClick={onCreate}
                className="
                  h-14
                  rounded-2xl
                  bg-card
                  px-8
                  text-foreground
                  hover:bg-secondary
                "
              >
                Create Your First Event

                <ArrowRight className="ml-2 h-5 w-5" />

              </Button>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
};

export default memo(EventsEmptyState);