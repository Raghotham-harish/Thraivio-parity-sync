import { memo } from "react";

import {
  CalendarDays,
  CheckCircle2,
  Globe2,
  Rocket,
  Users,
} from "lucide-react";

import type { AdminEvent } from "@/types/admin-events";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface PublishEventDialogProps {
  open: boolean;

  loading?: boolean;

  event: AdminEvent | null;

  onOpenChange: (open: boolean) => void;

  onConfirm: () => void;
}

const PublishEventDialog = ({
  open,
  loading = false,
  event,
  onOpenChange,
  onConfirm,
}: PublishEventDialogProps) => {
  if (!event) return null;

  return (
    <AlertDialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <AlertDialogContent className="max-w-3xl">

        <AlertDialogHeader>

          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">

            <Rocket className="h-10 w-10 text-emerald-600" />

          </div>

          <AlertDialogTitle className="text-center text-3xl">

            Publish Event

          </AlertDialogTitle>

          <AlertDialogDescription className="mt-4 text-center leading-7">

            This event will become visible to users,
            mentors and the public marketplace.

          </AlertDialogDescription>

        </AlertDialogHeader>

        {/* Event Summary */}

        <div
          className="
            mt-8
            rounded-3xl
            border
            bg-slate-50
            p-6
          "
        >

          <div className="flex gap-5">

            <img
              src={event.banner}
              alt={event.title}
              className="
                h-24
                w-36
                rounded-2xl
                object-cover
              "
            />

            <div className="flex-1">

              <h3 className="text-xl font-bold">

                {event.title}

              </h3>

              <p className="mt-2 text-muted-foreground">

                Hosted by {event.mentorName}

              </p>

              <div className="mt-5 flex flex-wrap gap-3">

                <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2">

                  <CalendarDays className="h-4 w-4 text-blue-600" />

                  <span className="text-sm">

                    {event.date}

                  </span>

                </div>

                <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2">

                  <Users className="h-4 w-4 text-indigo-600" />

                  <span className="text-sm">

                    {event.capacity} Seats

                  </span>

                </div>

                <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2">

                  <Globe2 className="h-4 w-4 text-emerald-600" />

                  <span className="text-sm">

                    {event.mode}

                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Publish Checklist */}

        <div className="mt-8 rounded-3xl border bg-white p-6">

          <h3 className="text-xl font-bold">

            Publish Checklist

          </h3>

          <div className="mt-6 space-y-4">

            {[
              "Event details completed",
              "Mentor assigned",
              "Schedule configured",
              "Banner uploaded",
              "Registration enabled",
              "Certificate configured",
            ].map((item) => (

              <div
                key={item}
                className="flex items-center gap-3"
              >

                <CheckCircle2 className="h-5 w-5 text-emerald-600" />

                <span>{item}</span>

              </div>

            ))}

          </div>

        </div>
                {/* Visibility */}

        <div
          className="
            mt-8
            grid
            gap-6
            lg:grid-cols-2
          "
        >

          {/* Public Visibility */}

          <div
            className="
              rounded-3xl
              border
              bg-white
              p-6
            "
          >

            <div className="flex items-center gap-3">

              <Globe2 className="h-6 w-6 text-blue-600" />

              <h3 className="text-xl font-bold">

                Visibility

              </h3>

            </div>

            <div className="mt-6 space-y-4">

              <div className="flex items-center justify-between">

                <span className="text-muted-foreground">

                  Marketplace

                </span>

                <span className="font-semibold text-emerald-600">

                  Visible

                </span>

              </div>

              <div className="flex items-center justify-between">

                <span className="text-muted-foreground">

                  Mentor Profile

                </span>

                <span className="font-semibold text-emerald-600">

                  Visible

                </span>

              </div>

              <div className="flex items-center justify-between">

                <span className="text-muted-foreground">

                  User Dashboard

                </span>

                <span className="font-semibold text-emerald-600">

                  Visible

                </span>

              </div>

              <div className="flex items-center justify-between">

                <span className="text-muted-foreground">

                  Search Results

                </span>

                <span className="font-semibold text-emerald-600">

                  Indexed

                </span>

              </div>

            </div>

          </div>

          {/* Notifications */}

          <div
            className="
              rounded-3xl
              border
              bg-white
              p-6
            "
          >

            <h3 className="text-xl font-bold">

              Notifications

            </h3>

            <div className="mt-6 space-y-4">

              <div className="flex items-start gap-3">

                <CheckCircle2 className="mt-1 h-5 w-5 text-emerald-600" />

                <p className="text-sm leading-7">

                  Mentor notification will be sent.

                </p>

              </div>

              <div className="flex items-start gap-3">

                <CheckCircle2 className="mt-1 h-5 w-5 text-emerald-600" />

                <p className="text-sm leading-7">

                  Event becomes available in marketplace.

                </p>

              </div>

              <div className="flex items-start gap-3">

                <CheckCircle2 className="mt-1 h-5 w-5 text-emerald-600" />

                <p className="text-sm leading-7">

                  Registration opens automatically.

                </p>

              </div>

              <div className="flex items-start gap-3">

                <CheckCircle2 className="mt-1 h-5 w-5 text-emerald-600" />

                <p className="text-sm leading-7">

                  Event analytics tracking starts.

                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Benefits */}

        <div
          className="
            mt-8
            rounded-3xl
            border
            bg-gradient-to-r
            from-emerald-50
            via-green-50
            to-lime-50
            p-8
          "
        >

          <h3 className="text-2xl font-bold">

            What happens after publishing?

          </h3>

          <div
            className="
              mt-8
              grid
              gap-5
              md:grid-cols-2
            "
          >

            <div className="rounded-2xl bg-white p-5">

              <h4 className="font-semibold">

                Users Can Register

              </h4>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">

                Registration will become available
                immediately.

              </p>

            </div>

            <div className="rounded-2xl bg-white p-5">

              <h4 className="font-semibold">

                Mentor Dashboard

              </h4>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">

                Event appears inside mentor dashboard.

              </p>

            </div>

            <div className="rounded-2xl bg-white p-5">

              <h4 className="font-semibold">

                Analytics Enabled

              </h4>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">

                Views, registrations and revenue
                tracking start.

              </p>

            </div>

            <div className="rounded-2xl bg-white p-5">

              <h4 className="font-semibold">

                Public Marketplace

              </h4>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">

                Event becomes searchable for users.

              </p>

            </div>

          </div>

        </div>
                {/* Footer */}

        <AlertDialogFooter className="mt-10">

          <AlertDialogCancel
            disabled={loading}
          >
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction
            disabled={loading}
            onClick={(e) => {
              /**
               * Prevent auto close while
               * publish request is running.
               */
              e.preventDefault();

              onConfirm();
            }}
            className="
              bg-emerald-600
              hover:bg-emerald-700
              focus:ring-emerald-500
            "
          >

            {loading ? (

              <>

                <svg
                  className="
                    mr-2
                    h-4
                    w-4
                    animate-spin
                  "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >

                  <circle
                    className="opacity-20"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />

                  <path
                    className="opacity-100"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />

                </svg>

                Publishing...

              </>

            ) : (

              <>

                <Rocket className="mr-2 h-4 w-4" />

                Publish Event

              </>

            )}

          </AlertDialogAction>

        </AlertDialogFooter>

        {/*
        =========================================================

        Backend TODO

        - Publish Event API
        - Change Status -> Published
        - Enable Registrations
        - Notify Mentor
        - Notify Interested Users
        - Marketplace Listing
        - Search Index Update
        - Analytics Initialization
        - Activity Log
        - Push Notification
        - Email Notification
        - Toast Success/Error
        - Refresh Events List

        =========================================================
        */}

      </AlertDialogContent>

    </AlertDialog>

  );

};

export default memo(PublishEventDialog);