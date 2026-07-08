import { memo } from "react";

import {
  BadgeCheck,
  Building2,
  CalendarDays,
  Clock3,
  Star,
} from "lucide-react";

import type { AdminEvent } from "@/types/admin-events";

interface EventListRowProps {
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

const EventListRow = ({
  event,
  onView,
  onEdit,
  onPublish,
  onCancel,
  onDelete,
}: EventListRowProps) => {
  return (
    <tr className="border-b transition hover:bg-slate-50">

      {/* Event */}

      <td className="px-5 py-5">

        <div className="flex gap-5">

          <img
            src={event.banner}
            alt={event.title}
            className="
              h-24
              w-36
              rounded-2xl
              object-cover
              shadow-sm
            "
          />

          <div className="min-w-[280px]">

            <div className="flex flex-wrap gap-2">

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
                    bg-yellow-100
                    px-3
                    py-1
                    text-xs
                    font-semibold
                    text-yellow-700
                  "
                >
                  ⭐ Featured
                </span>

              )}

              {event.published && (

                <span
                  className="
                    rounded-full
                    bg-emerald-100
                    px-3
                    py-1
                    text-xs
                    font-semibold
                    text-emerald-700
                  "
                >
                  Published
                </span>

              )}

            </div>

            <h3 className="mt-4 text-xl font-bold">

              {event.title}

            </h3>

            <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">

              {event.shortDescription}

            </p>

            <div className="mt-4 flex flex-wrap gap-2">

              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium">
                {event.category}
              </span>

              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                {event.type}
              </span>

              <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
                {event.mode}
              </span>

            </div>

          </div>

        </div>

      </td>

      {/* Mentor */}

      <td className="px-5 py-5">

        <div className="flex items-center gap-4">

          <img
            src={event.mentorAvatar}
            alt={event.mentorName}
            className="
              h-14
              w-14
              rounded-full
              object-cover
            "
          />

          <div>

            <div className="flex items-center gap-2">

              <h4 className="font-semibold">

                {event.mentorName}

              </h4>

              <BadgeCheck
                className="
                  h-4
                  w-4
                  text-blue-600
                "
              />

            </div>

            <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">

              <Building2 className="h-4 w-4" />

              {event.mentorCompany}

            </div>

            <p className="mt-2 text-xs text-muted-foreground">

              {event.mentorCategory}

            </p>

          </div>

        </div>

      </td>

      {/* Date */}

      <td className="px-5 py-5">

        <div className="space-y-4">

          <div className="flex items-center gap-3">

            <CalendarDays
              className="
                h-5
                w-5
                text-blue-600
              "
            />

            <div>

              <p className="font-medium">

                {event.date}

              </p>

              <p className="text-xs text-muted-foreground">

                {event.weekday}

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

              <p className="font-medium">

                {event.time}

              </p>

              <p className="text-xs text-muted-foreground">

                {event.duration}

              </p>

            </div>

          </div>

        </div>

      </td>

      {/* Rating */}

      <td className="px-5 py-5">

        <div className="flex items-center gap-2">

          <Star
            className="
              h-4
              w-4
              fill-yellow-400
              text-yellow-400
            "
          />

          <span className="font-semibold">

            {event.feedback.averageRating}

          </span>

        </div>

        <p className="mt-2 text-xs text-muted-foreground">

          {event.feedback.totalReviews} Reviews

        </p>
        </td>
              {/* Registration */}

      <td className="px-5 py-5">

        <div className="min-w-[220px]">

          <div className="flex items-center justify-between">

            <span className="text-sm font-medium">
              Registered
            </span>

            <span className="font-bold">
              {event.registered}/{event.capacity}
            </span>

          </div>

          <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">

            <div
              className="
                h-full
                rounded-full
                bg-gradient-to-r
                from-blue-600
                to-indigo-600
              "
              style={{
                width: `${Math.min(
                  100,
                  (event.registered / event.capacity) * 100
                )}%`,
              }}
            />

          </div>

          <div className="mt-3 flex justify-between text-xs text-muted-foreground">

            <span>
              {event.registered} Registered
            </span>

            <span>
              {event.seatsLeft} Seats Left
            </span>

          </div>

        </div>

      </td>

      {/* Revenue */}

      <td className="px-5 py-5">

        <div className="min-w-[220px] space-y-3">

          <div>

            <p className="text-xs text-muted-foreground">
              Gross Revenue
            </p>

            <h4 className="mt-1 text-xl font-bold text-emerald-700">
              ${event.revenue.grossRevenue.toLocaleString()}
            </h4>

          </div>

          <div className="grid grid-cols-2 gap-3">

            <div>

              <p className="text-xs text-muted-foreground">
                Platform
              </p>

              <p className="font-medium">
                ${event.revenue.platformFee.toLocaleString()}
              </p>

            </div>

            <div>

              <p className="text-xs text-muted-foreground">
                Mentor
              </p>

              <p className="font-medium">
                ${event.revenue.mentorPayout.toLocaleString()}
              </p>

            </div>

          </div>

        </div>

      </td>

      {/* Analytics */}

      <td className="px-5 py-5">

        <div className="min-w-[240px] grid grid-cols-2 gap-4">

          <div
            className="
              rounded-xl
              border
              bg-slate-50
              p-3
            "
          >

            <p className="text-xs text-muted-foreground">
              Attendance
            </p>

            <h5 className="mt-2 text-lg font-bold">
              {event.analytics.attendees}
            </h5>

            <p className="text-xs text-emerald-600">
              {event.analytics.attendanceRate}% Present
            </p>

          </div>

          <div
            className="
              rounded-xl
              border
              bg-slate-50
              p-3
            "
          >

            <p className="text-xs text-muted-foreground">
              Certificates
            </p>

            <h5 className="mt-2 text-lg font-bold">
              {event.certificate.issued}
            </h5>

            <p className="text-xs text-blue-600">
              Issued
            </p>

          </div>

        </div>

        <div className="mt-4 grid grid-cols-3 gap-3 text-center">

          <div>

            <p className="text-xs text-muted-foreground">
              Views
            </p>

            <p className="font-semibold">
              {event.analytics.views}
            </p>

          </div>

          <div>

            <p className="text-xs text-muted-foreground">
              Completion
            </p>

            <p className="font-semibold">
              {event.analytics.completionRate}%
            </p>

          </div>

          <div>

            <p className="text-xs text-muted-foreground">
              Rating
            </p>

            <p className="font-semibold">
              {event.feedback.averageRating}
            </p>

          </div>

        </div>

      </td>
            {/* Actions */}

      <td className="px-5 py-5">

        <div className="flex min-w-[220px] flex-wrap gap-2">

          <button
            onClick={() => onView(event)}
            className="
              rounded-xl
              border
              bg-white
              px-3
              py-2
              text-xs
              font-semibold
              transition-all
              hover:border-blue-500
              hover:bg-blue-50
              hover:text-blue-700
            "
          >
            👁 View
          </button>

          <button
            onClick={() => onEdit(event)}
            className="
              rounded-xl
              border
              bg-white
              px-3
              py-2
              text-xs
              font-semibold
              transition-all
              hover:border-amber-500
              hover:bg-amber-50
              hover:text-amber-700
            "
          >
            ✏ Edit
          </button>

          {event.published ? (

            <button
              onClick={() => onCancel(event)}
              className="
                rounded-xl
                bg-rose-600
                px-3
                py-2
                text-xs
                font-semibold
                text-white
                transition-all
                hover:bg-rose-700
              "
            >
              Cancel
            </button>

          ) : (

            <button
              onClick={() => onPublish(event)}
              className="
                rounded-xl
                bg-emerald-600
                px-3
                py-2
                text-xs
                font-semibold
                text-white
                transition-all
                hover:bg-emerald-700
              "
            >
              Publish
            </button>

          )}

          <button
            onClick={() => onDelete(event)}
            className="
              rounded-xl
              bg-slate-900
              px-3
              py-2
              text-xs
              font-semibold
              text-white
              transition-all
              hover:bg-black
            "
          >
            Delete
          </button>

        </div>

        <div
          className="
            mt-5
            rounded-xl
            border
            bg-slate-50
            p-3
            text-xs
          "
        >

          <div className="flex justify-between">

            <span className="text-muted-foreground">

              Created

            </span>

            <span className="font-medium">

              {event.createdAt}

            </span>

          </div>

          <div className="mt-2 flex justify-between">

            <span className="text-muted-foreground">

              Updated

            </span>

            <span className="font-medium">

              {event.updatedAt}

            </span>

          </div>

        </div>

      </td>

    </tr>
  );
};

export default memo(EventListRow);