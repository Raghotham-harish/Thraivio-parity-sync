import { useState } from "react";

import {
  Bell,
  ShieldX,
  TriangleAlert,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import type { AdminMentor } from "@/types/admin-mentors";

interface RejectMentorDialogProps {
  open: boolean;

  mentor: AdminMentor | null;

  onOpenChange: (open: boolean) => void;

  onConfirm: (
    mentor: AdminMentor,
    reason: string,
    notes: string,
    notify: boolean
  ) => void;
}

export default function RejectMentorDialog({
  open,
  mentor,
  onOpenChange,
  onConfirm,
}: RejectMentorDialogProps) {
  const [reason, setReason] =
    useState("");

  const [notes, setNotes] =
    useState("");

  const [notify, setNotify] =
    useState(true);

  if (!mentor) return null;

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent
        className="
          flex
          max-h-[90vh]
          max-w-2xl
          flex-col
          overflow-hidden
          rounded-2xl
          p-0
        "
      >
        {/* Header */}

        <div className="bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 p-8 text-white">

          <div className="flex items-center gap-5">

            <div className="rounded-2xl bg-card/20 p-4">

              <ShieldX className="h-10 w-10" />

            </div>

            <div>

              <DialogHeader>

                <DialogTitle className="text-3xl font-bold text-white">

                  Reject Mentor

                </DialogTitle>

                <DialogDescription className="mt-2 text-red-100">

                  Reject this mentor application and provide
                  a clear reason for the decision.

                </DialogDescription>

              </DialogHeader>

            </div>

          </div>

        </div>

        {/* Body */}

        <div className="flex-1 space-y-8 overflow-y-auto px-8 py-8">
                      {/* Mentor */}

          <div className="flex items-center gap-5 rounded-2xl border border-border bg-secondary p-5">

            <img
              src={mentor.avatar}
              alt={mentor.name}
              className="h-20 w-20 rounded-full object-cover"
            />

            <div>

              <h3 className="text-xl font-bold text-foreground">

                {mentor.name}

              </h3>

              <p className="mt-2 text-muted-foreground">

                {mentor.headline}

              </p>

            </div>

          </div>

          {/* Reason */}

          <div>

            <label className="mb-3 block text-sm font-semibold text-foreground">

              Rejection Reason

            </label>

            <select
              value={reason}
              onChange={(e) =>
                setReason(e.target.value)
              }
              className="h-12 w-full rounded-2xl border border-border px-4 outline-none focus:border-red-500"
            >
              <option value="">
                Select reason
              </option>

              <option value="documents">
                Invalid Documents
              </option>

              <option value="experience">
                Insufficient Experience
              </option>

              <option value="identity">
                Identity Verification Failed
              </option>

              <option value="policy">
                Policy Violation
              </option>

              <option value="other">
                Other
              </option>

            </select>

          </div>

          {/* Warning */}

          <div className="rounded-2xl border border-red-200 bg-red-50 p-6">

            <div className="flex gap-3">

              <TriangleAlert className="mt-1 h-6 w-6 text-red-600" />

              <div>

                <h3 className="font-semibold text-red-800">

                  Important

                </h3>

                <p className="mt-2 text-sm leading-7 text-[#BA1A1A]">

                  Rejecting this mentor will prevent them
                  from publishing programs, accepting
                  bookings or accessing mentor features
                  until they submit a new application.

                </p>

              </div>

            </div>

          </div>
                    {/* Admin Notes */}

          <div>

            <label className="mb-3 block text-sm font-semibold text-foreground">

              Admin Notes

            </label>

            <textarea
              rows={5}
              value={notes}
              onChange={(e) =>
                setNotes(e.target.value)
              }
              placeholder="Write detailed feedback for the mentor..."
              className="w-full rounded-2xl border border-border bg-card p-4 outline-none transition-all focus:border-red-500"
            />

          </div>

          {/* Notify Mentor */}

          <div className="rounded-2xl border border-border bg-secondary p-6">

            <label className="flex cursor-pointer items-start justify-between gap-5">

              <div>

                <div className="flex items-center gap-3">

                  <Bell className="h-5 w-5 text-red-600" />

                  <h4 className="font-semibold text-foreground">

                    Notify Mentor

                  </h4>

                </div>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">

                  Send an email explaining why the application
                  was rejected and what improvements are required
                  before submitting another application.

                </p>

              </div>

              <input
                type="checkbox"
                checked={notify}
                onChange={(e) =>
                  setNotify(e.target.checked)
                }
                className="mt-1 h-5 w-5 rounded border-border text-red-600 focus:ring-red-500"
              />

            </label>

          </div>

          {/* Rejection Summary */}

          <div className="rounded-2xl border border-red-200 bg-red-50 p-6">

            <h4 className="font-semibold text-red-800">

              What happens after rejection?

            </h4>

            <ul className="mt-4 space-y-2 text-sm leading-7 text-[#BA1A1A]">

              <li>
                • Mentor profile will remain hidden from users.
              </li>

              <li>
                • Mentor dashboard access will stay disabled.
              </li>

              <li>
                • Programs and events cannot be published.
              </li>

              <li>
                • Mentor may submit a revised application later.
              </li>

            </ul>

          </div>

        </div>

        {/* Footer */}

        <DialogFooter
          className="
            sticky
            bottom-0
            border-t
            border-border
            bg-card
            px-8
            py-6
          "
        >

          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="h-12 rounded-2xl border border-border bg-card px-6 font-semibold text-foreground transition hover:bg-secondary"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={() =>
              onConfirm(
                mentor,
                reason,
                notes,
                notify
              )
            }
            className="h-12 rounded-2xl bg-destructive px-6 font-semibold text-white transition hover:bg-destructive/90"
          >

            <ShieldX className="mr-2 inline h-5 w-5" />

            Reject Mentor

          </button>

        </DialogFooter>

      </DialogContent>

    </Dialog>
  );
}