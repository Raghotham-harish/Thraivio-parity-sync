import { useState } from "react";

import {
  BadgeCheck,
  Bell,
  CheckCircle2,
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

interface ApproveMentorDialogProps {
  open: boolean;

  mentor: AdminMentor | null;

  onOpenChange: (open: boolean) => void;

  onConfirm: (
    mentor: AdminMentor,
    notes: string,
    notify: boolean
  ) => void;
}

export default function ApproveMentorDialog({
  open,
  mentor,
  onOpenChange,
  onConfirm,
}: ApproveMentorDialogProps) {
  const [notes, setNotes] = useState("");

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

        <div className=" bg-[#10B981]   p-8 text-white">

          <div className="flex items-center gap-5">

            <div className="rounded-2xl bg-card/20 p-4">

              <BadgeCheck className="h-10 w-10" />

            </div>

            <div>

              <DialogHeader>

                <DialogTitle className="text-3xl font-bold text-white">

                  Approve Mentor

                </DialogTitle>

                <DialogDescription className="mt-2 text-emerald-100">

                  Approve this mentor profile and
                  allow them to start accepting
                  coaching sessions.

                </DialogDescription>

              </DialogHeader>

            </div>

          </div>

        </div>

        {/* Scroll Body */}

        <div className="flex-1 space-y-8 overflow-y-auto px-8 py-8">
                      {/* Mentor */}

          <div className="flex items-center gap-5 rounded-2xl border border-border bg-secondary p-5">

            <img
              src={mentor.avatar}
              alt={mentor.name}
              className="h-20 w-20 rounded-full object-cover"
            />

            <div className="flex-1">

              <h3 className="text-xl font-bold text-foreground">

                {mentor.name}

              </h3>

              <p className="mt-1 text-muted-foreground">

                {mentor.headline}

              </p>

              <div className="mt-3 flex flex-wrap gap-2">

                <span className="rounded-full bg-[#EFF6FF] px-3 py-1 text-xs font-semibold text-[#2563EB]">

                  {mentor.membership}

                </span>

                <span className="rounded-full bg-[#ECFDF5] px-3 py-1 text-xs font-semibold text-[#065F46]">

                  {mentor.verification}

                </span>

              </div>

            </div>

          </div>

          {/* Checklist */}

          <div className="rounded-2xl border border-[#A7E8CE] bg-[#ECFDF5] p-6">

            <h3 className="text-lg font-bold text-emerald-800">

              Approval Checklist

            </h3>

            <div className="mt-5 space-y-3">

              {[
                "Profile information reviewed",
                "Documents verified",
                "Identity confirmed",
                "Skills validated",
                "Ready for onboarding",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-[#0F8F65]" />

                  <span className="text-sm text-[#065F46]">

                    {item}

                  </span>

                </div>
              ))}

            </div>

          </div>
                    {/* Admin Notes */}

          <div>

            <label className="mb-3 block text-sm font-semibold text-foreground">

              Approval Notes

            </label>

            <textarea
              rows={5}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Write optional notes for this approval..."
              className="w-full rounded-2xl border border-border bg-card p-4 outline-none transition-all focus:border-emerald-500"
            />

          </div>

          {/* Notify Mentor */}

          <div className="rounded-2xl border border-border bg-secondary p-6">

            <label className="flex cursor-pointer items-start justify-between gap-5">

              <div>

                <div className="flex items-center gap-3">

                  <Bell className="h-5 w-5 text-[#0F8F65]" />

                  <h4 className="font-semibold text-foreground">

                    Notify Mentor

                  </h4>

                </div>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">

                  Send an approval email with onboarding instructions,
                  mentor dashboard access and next steps.

                </p>

              </div>

              <input
                type="checkbox"
                checked={notify}
                onChange={(e) =>
                  setNotify(e.target.checked)
                }
                className="mt-1 h-5 w-5 rounded border-border text-[#0F8F65] focus:ring-emerald-500"
              />

            </label>

          </div>

          {/* Success Notice */}

          <div className="rounded-2xl border border-[#A7E8CE] bg-[#ECFDF5] p-6">

            <h4 className="font-semibold text-emerald-800">

              After approval

            </h4>

            <ul className="mt-4 space-y-2 text-sm leading-7 text-[#065F46]">

              <li>
                • Mentor profile becomes publicly visible.
              </li>

              <li>
                • Mentor can publish programs and events.
              </li>

              <li>
                • Booking requests will be enabled.
              </li>

              <li>
                • Mentor dashboard access will be activated.
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
                notes,
                notify
              )
            }
            className="h-12 rounded-2xl bg-[#10B981] px-6 font-semibold text-white transition hover:bg-[#0da271]"
          >

            <BadgeCheck className="mr-2 inline h-5 w-5" />

            Approve Mentor

          </button>

        </DialogFooter>

      </DialogContent>

    </Dialog>
  );
}