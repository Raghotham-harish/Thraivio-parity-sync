import { memo } from "react";

import {
  AlertTriangle,
  CalendarDays,
  DollarSign,
  Users,
  Trash2,
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

interface DeleteEventDialogProps {
  open: boolean;

  loading?: boolean;

  event: AdminEvent | null;

  onOpenChange: (open: boolean) => void;

  onConfirm: () => void;
}

const DeleteEventDialog = ({
  open,
  loading = false,
  event,
  onOpenChange,
  onConfirm,
}: DeleteEventDialogProps) => {

  if (!event) return null;

  return (

    <AlertDialog
      open={open}
      onOpenChange={onOpenChange}
    >

      <AlertDialogContent className="max-w-2xl">

        <AlertDialogHeader>

          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#FFDAD6]">

            <Trash2 className="h-10 w-10 text-red-600" />

          </div>

          <AlertDialogTitle className="text-center text-3xl">

            Delete Event

          </AlertDialogTitle>

          <AlertDialogDescription className="mt-4 text-center leading-7">

            This action cannot be undone.
            This will permanently remove the event,
            registrations and related analytics.

          </AlertDialogDescription>

        </AlertDialogHeader>

        {/* Event */}

        <div
          className="
            mt-8
            rounded-2xl
            border
            bg-secondary
            p-6
          "
        >

          <div className="flex items-center gap-5">

            <img
              src={event.banner}
              alt={event.title}
              className="
                h-20
                w-32
                rounded-xl
                object-cover
              "
            />

            <div>

              <h3 className="text-lg font-bold">

                {event.title}

              </h3>

              <p className="mt-2 text-muted-foreground">

                {event.mentorName}

              </p>

            </div>

          </div>

        </div>
                {/* Impact Summary */}

        <div className="mt-8 grid gap-5 md:grid-cols-2">

          {/* Registrations */}

          <div
            className="
              rounded-2xl
              border
              bg-blue-50
              p-5
            "
          >

            <div className="flex items-center gap-3">

              <Users className="h-5 w-5 text-primary" />

              <h4 className="font-semibold">

                Registrations

              </h4>

            </div>

            <h3 className="mt-5 text-3xl font-bold">

              {event.registered}

            </h3>

            <p className="mt-2 text-sm text-muted-foreground">

              Registered attendees will lose
              access to this event.

            </p>

          </div>

          {/* Revenue */}

          <div
            className="
              rounded-2xl
              border
              bg-[#ECFDF5]
              p-5
            "
          >

            <div className="flex items-center gap-3">

              <DollarSign className="h-5 w-5 text-[#0F8F65]" />

              <h4 className="font-semibold">

                Revenue

              </h4>

            </div>

            <h3 className="mt-5 text-3xl font-bold">

              $

              {event.revenue.grossRevenue.toLocaleString()}

            </h3>

            <p className="mt-2 text-sm text-muted-foreground">

              Total generated revenue associated
              with this event.

            </p>

          </div>

          {/* Certificates */}

          <div
            className="
              rounded-2xl
              border
              bg-violet-50
              p-5
            "
          >

            <div className="flex items-center gap-3">

              <CalendarDays className="h-5 w-5 text-violet-600" />

              <h4 className="font-semibold">

                Certificates

              </h4>

            </div>

            <h3 className="mt-5 text-3xl font-bold">

              {event.certificate.issued}

            </h3>

            <p className="mt-2 text-sm text-muted-foreground">

              Issued certificates may become
              unavailable after deletion.

            </p>

          </div>

          {/* Warning */}

          <div
            className="
              rounded-2xl
              border
              bg-red-50
              p-5
            "
          >

            <div className="flex items-center gap-3">

              <AlertTriangle className="h-5 w-5 text-red-600" />

              <h4 className="font-semibold">

                Permanent Action

              </h4>

            </div>

            <p className="mt-5 text-sm leading-7 text-muted-foreground">

              Deleting this event permanently removes:

            </p>

            <ul className="mt-4 space-y-2 text-sm">

              <li>• Event Information</li>

              <li>• Registrations</li>

              <li>• Attendance Records</li>

              <li>• Certificates</li>

              <li>• Revenue Reports</li>

              <li>• Feedback & Reviews</li>

            </ul>

          </div>

        </div>

        {/* Warning Banner */}

        <div
          className="
            mt-8
            rounded-2xl
            border
            border-red-200
            
            bg-destructive
            
            
            p-6
          "
        >

          <div className="flex items-start gap-4">

            <AlertTriangle
              className="
                mt-1
                h-6
                w-6
                text-red-600
              "
            />

            <div>

              <h3 className="font-bold text-[#BA1A1A]">

                This action is irreversible

              </h3>

              <p className="mt-3 leading-7 text-muted-foreground">

                Once deleted, this event and all related
                registrations, analytics, certificates,
                mentor reports and attendee history cannot
                be recovered.

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
            onClick={(eventAction) => {
              /**
               * Prevent AlertDialog from closing
               * automatically while delete request
               * is running.
               */
              eventAction.preventDefault();

              onConfirm();
            }}
            disabled={loading}
            className="
              bg-destructive
              hover:bg-destructive/90
              focus:ring-red-500
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

                Deleting...

              </>

            ) : (

              <>

                <Trash2 className="mr-2 h-4 w-4" />

                Delete Event

              </>

            )}

          </AlertDialogAction>

        </AlertDialogFooter>

        {/*
        ===========================================================
        Backend Integration (TODO)
        ===========================================================

        - Delete Event API
        - Delete Banner Storage
        - Delete Registrations
        - Delete Certificates
        - Delete Analytics
        - Delete Revenue Logs
        - Delete Notifications
        - Refresh Events List
        - Toast Success/Error
        - Optimistic UI Update
        ===========================================================
        */}

      </AlertDialogContent>

    </AlertDialog>

  );

};

export default memo(DeleteEventDialog);