import { memo } from "react";

import {
  AlertTriangle,
  CalendarDays,
  CircleDollarSign,
  Mail,
  Users,
  XCircle,
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

interface CancelEventDialogProps {
  open: boolean;

  loading?: boolean;

  event: AdminEvent | null;

  onOpenChange: (open: boolean) => void;

  onConfirm: () => void;
}

const CancelEventDialog = ({
  open,
  loading = false,
  event,
  onOpenChange,
  onConfirm,
}: CancelEventDialogProps) => {

  if (!event) return null;

  return (

    <AlertDialog
      open={open}
      onOpenChange={onOpenChange}
    >

      <AlertDialogContent className="max-w-3xl">

        <AlertDialogHeader>

          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">

            <XCircle className="h-10 w-10 text-orange-600" />

          </div>

          <AlertDialogTitle className="text-center text-3xl">

            Cancel Event

          </AlertDialogTitle>

          <AlertDialogDescription className="mt-4 text-center leading-7">

            Cancelling this event will prevent future
            registrations and notify all registered
            attendees.

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

                    {event.registered} Registered

                  </span>

                </div>

                <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2">

                  <CircleDollarSign className="h-4 w-4 text-emerald-600" />

                  <span className="text-sm">

                    ${event.revenue.grossRevenue.toLocaleString()}

                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Impact Summary */}

        <div
          className="
            mt-8
            grid
            gap-6
            lg:grid-cols-2
          "
        >

          <div
            className="
              rounded-3xl
              border
              bg-white
              p-6
            "
          >

            <div className="flex items-center gap-3">

              <Mail className="h-6 w-6 text-blue-600" />

              <h3 className="text-xl font-bold">

                Notifications

              </h3>

            </div>

            <div className="mt-6 space-y-4">

              <div className="flex items-start gap-3">

                <AlertTriangle className="mt-1 h-5 w-5 text-orange-500" />

                <p className="text-sm leading-7">

                  Registered attendees will receive
                  cancellation emails.

                </p>

              </div>

              <div className="flex items-start gap-3">

                <AlertTriangle className="mt-1 h-5 w-5 text-orange-500" />

                <p className="text-sm leading-7">

                  Mentor will be notified immediately.

                </p>

              </div>

              <div className="flex items-start gap-3">

                <AlertTriangle className="mt-1 h-5 w-5 text-orange-500" />

                <p className="text-sm leading-7">

                  Event will disappear from marketplace.

                </p>

              </div>

            </div>

          </div>
          </div>
                  {/* Refund & Impact */}

        <div
          className="
            mt-8
            grid
            gap-6
            lg:grid-cols-2
          "
        >

          {/* Refund Summary */}

          <div
            className="
              rounded-3xl
              border
              bg-white
              p-6
            "
          >

            <div className="flex items-center gap-3">

              <CircleDollarSign className="h-6 w-6 text-emerald-600" />

              <h3 className="text-xl font-bold">

                Refund Summary

              </h3>

            </div>

            <div className="mt-6 space-y-5">

              <div className="flex items-center justify-between">

                <span className="text-muted-foreground">

                  Ticket Price

                </span>

                <span className="font-semibold">

                  ${event.revenue.ticketPrice}

                </span>

              </div>

              <div className="flex items-center justify-between">

                <span className="text-muted-foreground">

                  Registered Users

                </span>

                <span className="font-semibold">

                  {event.registered}

                </span>

              </div>

              <div className="flex items-center justify-between">

                <span className="text-muted-foreground">

                  Refund Amount

                </span>

                <span className="font-semibold text-orange-600">

                  ${event.revenue.refundAmount.toLocaleString()}

                </span>

              </div>

              <div className="flex items-center justify-between">

                <span className="text-muted-foreground">

                  Gross Revenue

                </span>

                <span className="font-bold">

                  ${event.revenue.grossRevenue.toLocaleString()}

                </span>

              </div>

            </div>

          </div>

          {/* Event Impact */}

          <div
            className="
              rounded-3xl
              border
              bg-white
              p-6
            "
          >

            <h3 className="text-xl font-bold">

              Cancellation Impact

            </h3>

            <div className="mt-6 space-y-4">

              <div className="flex items-start gap-3">

                <AlertTriangle className="mt-1 h-5 w-5 text-orange-500" />

                <p className="text-sm leading-7">

                  Registration will be closed immediately.

                </p>

              </div>

              <div className="flex items-start gap-3">

                <AlertTriangle className="mt-1 h-5 w-5 text-orange-500" />

                <p className="text-sm leading-7">

                  Certificates won't be generated for this event.

                </p>

              </div>

              <div className="flex items-start gap-3">

                <AlertTriangle className="mt-1 h-5 w-5 text-orange-500" />

                <p className="text-sm leading-7">

                  Event analytics will remain available for admins.

                </p>

              </div>

              <div className="flex items-start gap-3">

                <AlertTriangle className="mt-1 h-5 w-5 text-orange-500" />

                <p className="text-sm leading-7">

                  Mentor dashboard will show the event as cancelled.

                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Warning Banner */}

        <div
          className="
            mt-8
            rounded-3xl
            border
            border-orange-200
            bg-gradient-to-r
            from-orange-50
            via-amber-50
            to-yellow-50
            p-6
          "
        >

          <div className="flex items-start gap-4">

            <AlertTriangle
              className="
                mt-1
                h-6
                w-6
                text-orange-600
              "
            />

            <div>

              <h3 className="font-bold text-orange-700">

                Before Cancelling

              </h3>

              <p className="mt-3 leading-7 text-muted-foreground">

                Make sure attendees have been informed,
                refund policy has been reviewed, and
                the mentor has acknowledged the cancellation.
                This action will immediately stop all future
                registrations.

              </p>

            </div>

          </div>

        </div>
                {/* Footer */}

        <AlertDialogFooter className="mt-10">

          <AlertDialogCancel
            disabled={loading}
          >
            Keep Event
          </AlertDialogCancel>

          <AlertDialogAction
            disabled={loading}
            onClick={(e) => {
              /**
               * Prevent auto close while
               * cancellation request is running.
               */
              e.preventDefault();

              onConfirm();
            }}
            className="
              bg-orange-600
              hover:bg-orange-700
              focus:ring-orange-500
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

                Cancelling...

              </>

            ) : (

              <>

                <XCircle className="mr-2 h-4 w-4" />

                Confirm Cancellation

              </>

            )}

          </AlertDialogAction>

        </AlertDialogFooter>

        {/*
        =========================================================

        Backend Integration (TODO)

        - Cancel Event API
        - Update Status -> Cancelled
        - Disable Registrations
        - Notify Registered Users
        - Notify Mentor
        - Send Cancellation Email
        - Refund Workflow
        - Activity Log
        - Push Notifications
        - Analytics Update
        - Marketplace Visibility Update
        - Refresh Events List
        - Toast Success / Error

        =========================================================
        */}

      </AlertDialogContent>

    </AlertDialog>

  );

};

export default memo(CancelEventDialog);