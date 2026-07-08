import { memo } from "react";

import {
  CalendarDays,
  Clock3,
  Building2,
  Star,
  BadgeCheck,
} from "lucide-react";

import type { AdminEvent } from "@/types/admin-events";

interface EventGridCardProps {
  event: AdminEvent;

  onView: (event: AdminEvent) => void;

  onEdit: (event: AdminEvent) => void;

  onPublish: (event: AdminEvent) => void;

  onCancel: (event: AdminEvent) => void;

  onDelete: (event: AdminEvent) => void;
}

const statusClasses: Record<
  AdminEvent["status"],
  string
> = {
  draft:
    "bg-slate-100 text-slate-700",

  published:
    "bg-blue-100 text-blue-700",

  live:
    "bg-red-100 text-red-600",

  upcoming:
    "bg-amber-100 text-amber-700",

  completed:
    "bg-emerald-100 text-emerald-700",

  cancelled:
    "bg-rose-100 text-rose-700",
};

const EventGridCard = ({
  event,
  onView,
  onEdit,
  onPublish,
  onCancel,
  onDelete,
}: EventGridCardProps) => {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-[28px]
        border
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      {/* Banner */}

      <div className="relative h-56 overflow-hidden">

        <img
          src={event.banner}
          alt={event.title}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Top Badges */}

        <div className="absolute left-5 top-5 flex flex-wrap gap-2">

          <span
            className={`
              rounded-full
              px-3
              py-1
              text-xs
              font-semibold
              capitalize
              ${statusClasses[event.status]}
            `}
          >
            {event.status}
          </span>

          {event.featured && (

            <span
              className="
                rounded-full
                bg-yellow-400
                px-3
                py-1
                text-xs
                font-semibold
                text-slate-900
              "
            >
              ⭐ Featured
            </span>

          )}

          {event.published && (

            <span
              className="
                rounded-full
                bg-emerald-500
                px-3
                py-1
                text-xs
                font-semibold
                text-white
              "
            >
              Published
            </span>

          )}

        </div>

        {/* Category */}

        <div className="absolute bottom-5 left-5">

          <span
            className="
              rounded-full
              bg-white/15
              px-4
              py-2
              text-sm
              font-medium
              text-white
              backdrop-blur-md
            "
          >
            {event.category}
          </span>

        </div>

      </div>

      {/* Content */}

      <div className="space-y-6 p-6">

        {/* Title */}

        <div>

          <h3
            className="
              line-clamp-2
              text-2xl
              font-bold
              tracking-tight
            "
          >
            {event.title}
          </h3>

          <p
            className="
              mt-3
              line-clamp-2
              text-sm
              leading-6
              text-muted-foreground
            "
          >
            {event.shortDescription}
          </p>

        </div>

        {/* Mentor */}

        <div
          className="
            flex
            items-center
            justify-between
          "
        >

          <div className="flex items-center gap-3">

            <img
              src={event.mentorAvatar}
              alt={event.mentorName}
              className="
                h-12
                w-12
                rounded-full
                object-cover
                ring-2
                ring-slate-100
              "
            />

            <div>

              <h4 className="font-semibold">

                {event.mentorName}

              </h4>

              <div
                className="
                  mt-1
                  flex
                  items-center
                  gap-1
                  text-sm
                  text-muted-foreground
                "
              >

                <Building2 className="h-4 w-4" />

                {event.mentorCompany}

              </div>

            </div>

          </div>

          <BadgeCheck
            className="
              h-6
              w-6
              text-blue-600
            "
          />

        </div>

        {/* Date Time */}

        <div
          className="
            grid
            gap-4
            sm:grid-cols-2
          "
        >

          <div className="flex items-center gap-3">

            <CalendarDays
              className="
                h-5
                w-5
                text-blue-600
              "
            />

            <div>

              <p className="text-xs text-muted-foreground">
                Date
              </p>

              <p className="font-medium">
                {event.date}
              </p>

            </div>

          </div>

          <div className="flex items-center gap-3">

            <Clock3
              className="
                h-5
                w-5
                text-indigo-600
              "
            />

            <div>

              <p className="text-xs text-muted-foreground">
                Time
              </p>

              <p className="font-medium">
                {event.time}
              </p>

            </div>

          </div>

        </div>

        {/* Type */}

        <div className="flex flex-wrap gap-2">

          <span
            className="
              rounded-full
              bg-slate-100
              px-3
              py-1
              text-xs
              font-medium
            "
          >
            {event.type}
          </span>

          <span
            className="
              rounded-full
              bg-blue-50
              px-3
              py-1
              text-xs
              font-medium
              text-blue-700
            "
          >
            {event.mode}
          </span>

          <span
            className="
              rounded-full
              bg-amber-50
              px-3
              py-1
              text-xs
              font-medium
              text-amber-700
            "
          >
            <Star className="mr-1 inline h-3 w-3" />

            {event.feedback.averageRating}
          </span>

        </div>
                {/* Metrics */}

        <div className="grid grid-cols-2 gap-4">

          {/* Registered */}

          <div
            className="
              rounded-2xl
              border
              bg-slate-50
              p-4
            "
          >
            <p className="text-xs text-muted-foreground">
              Registered
            </p>

            <h4 className="mt-2 text-2xl font-bold">
              {event.registered}
            </h4>

            <p className="mt-1 text-xs text-emerald-600">
              Active Registrations
            </p>
          </div>

          {/* Capacity */}

          <div
            className="
              rounded-2xl
              border
              bg-slate-50
              p-4
            "
          >
            <p className="text-xs text-muted-foreground">
              Capacity
            </p>

            <h4 className="mt-2 text-2xl font-bold">
              {event.capacity}
            </h4>

            <p className="mt-1 text-xs text-muted-foreground">
              Total Seats
            </p>
          </div>

        </div>

        {/* Registration Progress */}

        <div>

          <div className="mb-2 flex items-center justify-between">

            <span className="text-sm font-medium">
              Registration Progress
            </span>

            <span className="text-sm text-muted-foreground">

              {Math.round(
                (event.registered /
                  event.capacity) *
                  100
              )}
              %

            </span>

          </div>

          <div
            className="
              h-2.5
              overflow-hidden
              rounded-full
              bg-slate-100
            "
          >

            <div
              className="
                h-full
                rounded-full
                bg-gradient-to-r
                from-blue-600
                to-indigo-600
                transition-all
              "
              style={{
                width: `${Math.min(
                  100,
                  Math.round(
                    (event.registered /
                      event.capacity) *
                      100
                  )
                )}%`,
              }}
            />

          </div>

        </div>

        {/* Revenue */}

        <div
          className="
            rounded-2xl
            border
            bg-gradient-to-r
            from-emerald-50
            to-green-50
            p-5
          "
        >

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-muted-foreground">
                Gross Revenue
              </p>

              <h3 className="mt-2 text-3xl font-bold text-emerald-700">

                $
                {event.revenue.grossRevenue.toLocaleString()}

              </h3>

            </div>

            <div
              className="
                rounded-2xl
                bg-emerald-100
                p-3
              "
            >

              💰

            </div>

          </div>

          <div className="mt-5 grid grid-cols-2 gap-4">

            <div>

              <p className="text-xs text-muted-foreground">
                Mentor Payout
              </p>

              <p className="font-semibold">

                $
                {event.revenue.mentorPayout.toLocaleString()}

              </p>

            </div>

            <div>

              <p className="text-xs text-muted-foreground">
                Platform Fee
              </p>

              <p className="font-semibold">

                $
                {event.revenue.platformFee.toLocaleString()}

              </p>

            </div>

          </div>

        </div>

        {/* Analytics */}

        <div
          className="
            grid
            grid-cols-2
            gap-4
          "
        >

          <div
            className="
              rounded-2xl
              border
              p-4
            "
          >

            <p className="text-xs text-muted-foreground">

              Attendance

            </p>

            <h4 className="mt-2 text-xl font-bold">

              {event.analytics.attendees}

            </h4>

            <p className="mt-1 text-xs text-emerald-600">

              {event.analytics.attendanceRate}% Present

            </p>

          </div>

          <div
            className="
              rounded-2xl
              border
              p-4
            "
          >

            <p className="text-xs text-muted-foreground">

              Certificates

            </p>

            <h4 className="mt-2 text-xl font-bold">

              {event.certificate.issued}

            </h4>

            <p className="mt-1 text-xs text-blue-600">

              Generated

            </p>

          </div>

        </div>

        {/* Quick Analytics */}

        <div
          className="
            rounded-2xl
            border
            bg-slate-50
            p-5
          "
        >

          <h4 className="font-semibold">

            Performance

          </h4>

          <div className="mt-4 grid grid-cols-3 gap-4">

            <div>

              <p className="text-xs text-muted-foreground">

                Views

              </p>

              <h5 className="mt-1 font-bold">

                {event.analytics.views}

              </h5>

            </div>

            <div>

              <p className="text-xs text-muted-foreground">

                Completion

              </p>

              <h5 className="mt-1 font-bold">

                {event.analytics.completionRate}%

              </h5>

            </div>

            <div>

              <p className="text-xs text-muted-foreground">

                Reviews

              </p>

              <h5 className="mt-1 font-bold">

                {event.feedback.totalReviews}

              </h5>

            </div>

          </div>

        </div>
                {/* Action Buttons */}

        <div className="grid grid-cols-2 gap-3">

          <button
            onClick={() => onView(event)}
            className="
              rounded-2xl
              border
              bg-white
              px-4
              py-3
              text-sm
              font-semibold
              transition-all
              hover:border-blue-500
              hover:bg-blue-50
              hover:text-blue-700
            "
          >
            👁 View Details
          </button>

          <button
            onClick={() => onEdit(event)}
            className="
              rounded-2xl
              border
              bg-white
              px-4
              py-3
              text-sm
              font-semibold
              transition-all
              hover:border-amber-500
              hover:bg-amber-50
              hover:text-amber-700
            "
          >
            ✏ Edit Event
          </button>

        </div>

        <div className="grid grid-cols-2 gap-3">

          {event.published ? (

            <button
              onClick={() => onCancel(event)}
              className="
                rounded-2xl
                bg-rose-600
                px-4
                py-3
                text-sm
                font-semibold
                text-white
                transition-all
                hover:bg-rose-700
              "
            >
              Cancel Event
            </button>

          ) : (

            <button
              onClick={() => onPublish(event)}
              className="
                rounded-2xl
                bg-emerald-600
                px-4
                py-3
                text-sm
                font-semibold
                text-white
                transition-all
                hover:bg-emerald-700
              "
            >
              Publish Event
            </button>

          )}

          <button
            onClick={() => onDelete(event)}
            className="
              rounded-2xl
              bg-slate-900
              px-4
              py-3
              text-sm
              font-semibold
              text-white
              transition-all
              hover:bg-black
            "
          >
            Delete
          </button>

        </div>

        {/* Footer */}

        <div
          className="
            flex
            items-center
            justify-between
            rounded-2xl
            border-t
            pt-5
          "
        >

          <div>

            <p className="text-xs text-muted-foreground">

              Created

            </p>

            <p className="font-medium">

              {event.createdAt}

            </p>

          </div>

          <div className="text-right">

            <p className="text-xs text-muted-foreground">

              Updated

            </p>

            <p className="font-medium">

              {event.updatedAt}

            </p>

          </div>

        </div>

      </div>

    </article>

  );
};

export default memo(EventGridCard);