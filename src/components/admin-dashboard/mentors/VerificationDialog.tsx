import { useState } from "react";

import {
  BadgeCheck,
  Bell,
  FileCheck2,
  ShieldCheck,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogFooter,
} from "@/components/ui/dialog";

import { DialogHeaderBand } from "@/components/admin-dashboard/shared/DialogHeaderBand";
import type { AdminMentor } from "@/types/admin-mentors";

interface VerificationDialogProps {
  open: boolean;

  mentor: AdminMentor | null;

  onOpenChange: (open: boolean) => void;

  onConfirm: (
    mentor: AdminMentor,
    status: string,
    remarks: string,
    notify: boolean
  ) => void;
}

export default function VerificationDialog({
  open,
  mentor,
  onOpenChange,
  onConfirm,
}: VerificationDialogProps) {
  const [status, setStatus] =
    useState("verified");

  const [remarks, setRemarks] =
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

        <DialogHeaderBand
          icon={ShieldCheck}
          title="Verify Mentor"
          description="Review mentor identity, documents and verification status before approving."
        />

        {/* Body */}

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

              <p className="mt-2 text-muted-foreground">

                {mentor.email}

              </p>

              <div className="mt-3 flex gap-2">

                <span className="rounded-full bg-[#EFF6FF] px-3 py-1 text-xs font-semibold text-[#2563EB]">

                  {mentor.membership}

                </span>

                <span className="rounded-full bg-[#ECFDF5] px-3 py-1 text-xs font-semibold text-[#065F46]">

                  {mentor.status}

                </span>

              </div>

            </div>

          </div>

          {/* Verification Checklist */}

          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">

            <h3 className="text-lg font-bold text-blue-800">

              Verification Checklist

            </h3>

            <div className="mt-5 space-y-3">

              {[
                "Identity proof uploaded",
                "Government ID verified",
                "Certificates reviewed",
                "Profile information matched",
                "Email verified",
                "Phone verified",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <BadgeCheck className="h-5 w-5 text-primary" />

                  <span className="text-sm text-blue-800">

                    {item}

                  </span>

                </div>
              ))}

            </div>

          </div>

          {/* Documents */}

          <div className="rounded-2xl border border-border bg-card p-6">

            <h3 className="flex items-center gap-2 text-lg font-bold text-foreground">

              <FileCheck2 className="h-5 w-5 text-primary" />

              Submitted Documents

            </h3>

            <div className="mt-5 space-y-3">

              {[
                "Government ID",
                "Professional Certificate",
                "Resume",
                "Experience Letter",
              ].map((doc) => (
                <div
                  key={doc}
                  className="flex items-center justify-between rounded-2xl border border-border p-4"
                >
                  <span className="font-medium text-foreground">

                    {doc}

                  </span>

                  <span className="rounded-full bg-[#ECFDF5] px-3 py-1 text-xs font-semibold text-[#065F46]">

                    Verified

                  </span>

                </div>
              ))}

            </div>

          </div>
                    {/* Verification Status */}

          <div>

            <label className="mb-3 block text-sm font-semibold text-foreground">

              Verification Status

            </label>

            <select
              value={status}
              onChange={(e) =>
                setStatus(e.target.value)
              }
              className="h-12 w-full rounded-2xl border border-border bg-card px-4 outline-none transition focus:border-blue-500"
            >
              <option value="verified">
                Verified
              </option>

              <option value="pending">
                Pending Review
              </option>

              <option value="rejected">
                Rejected
              </option>

            </select>

          </div>

          {/* Admin Remarks */}

          <div>

            <label className="mb-3 block text-sm font-semibold text-foreground">

              Admin Remarks

            </label>

            <textarea
              rows={5}
              value={remarks}
              onChange={(e) =>
                setRemarks(e.target.value)
              }
              placeholder="Write verification remarks..."
              className="w-full rounded-2xl border border-border bg-card p-4 outline-none transition-all focus:border-blue-500"
            />

          </div>

          {/* Notify Mentor */}

          <div className="rounded-2xl border border-border bg-secondary p-6">

            <label className="flex cursor-pointer items-start justify-between gap-5">

              <div>

                <div className="flex items-center gap-3">

                  <Bell className="h-5 w-5 text-primary" />

                  <h4 className="font-semibold text-foreground">

                    Notify Mentor

                  </h4>

                </div>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">

                  Send the verification result to the mentor
                  with remarks and next steps.

                </p>

              </div>

              <input
                type="checkbox"
                checked={notify}
                onChange={(e) =>
                  setNotify(e.target.checked)
                }
                className="mt-1 h-5 w-5 rounded border-border text-primary focus:ring-blue-500"
              />

            </label>

          </div>

          {/* Verification Summary */}

          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">

            <h4 className="font-semibold text-blue-800">

              Verification Result

            </h4>

            <ul className="mt-4 space-y-2 text-sm leading-7 text-[#2563EB]">

              <li>
                • Verified mentors receive a verification badge.
              </li>

              <li>
                • Verified mentors gain access to all mentor features.
              </li>

              <li>
                • Pending mentors remain under review.
              </li>

              <li>
                • Rejected mentors must update documents before reapplying.
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
                status,
                remarks,
                notify
              )
            }
            className="h-12 rounded-2xl bg-primary px-6 font-semibold text-white transition hover:bg-primary/90"
          >

            <ShieldCheck className="mr-2 inline h-5 w-5" />

            Save Verification

          </button>

        </DialogFooter>

      </DialogContent>

    </Dialog>
  );
}