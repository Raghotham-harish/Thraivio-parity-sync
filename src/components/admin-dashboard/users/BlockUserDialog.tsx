import {
  memo,
  useState,
} from "react";

import {
  ShieldBan,
  Bell,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import type { AdminUser } from "@/types/admin-users";

interface BlockUserDialogProps {
  open: boolean;

  user: AdminUser | null;

  onOpenChange: (open: boolean) => void;

  onConfirm: (
    user: AdminUser,
    reason: string,
    duration: string,
    notes: string,
    notify: boolean
  ) => void;
}

function BlockUserDialog({
  open,
  user,
  onOpenChange,
  onConfirm,
}: BlockUserDialogProps) {
  const [reason, setReason] = useState("");

  const [duration, setDuration] =
    useState("7 Days");

  const [notes, setNotes] = useState("");

  const [notify, setNotify] =
    useState(true);

  if (!user) return null;

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent
  className="
    w-full
    max-w-2xl
    max-h-[90vh]
    overflow-hidden
    p-0
  "
>

        {/* Header */}

        <div className=" bg-[#F59E0B]  p-8 text-white">

          <div className="flex items-center gap-5">

            <div className="rounded-2xl bg-card/20 p-4">

              <ShieldBan className="h-10 w-10" />

            </div>

            <div>

              <DialogHeader>

                <DialogTitle className="text-3xl font-bold text-white">

                  Block User

                </DialogTitle>

                <DialogDescription className="mt-2 text-amber-100">

                  Temporarily or permanently restrict this account.

                </DialogDescription>

              </DialogHeader>

            </div>

          </div>

        </div>

       {/* Body */}

<div
  className="
    flex-1
    overflow-y-auto
    px-8
    py-8
    space-y-6
    max-h-[calc(90vh-240px)]
  "
>

          {/* User */}

          <div className="flex items-center gap-5 rounded-2xl border border-border bg-secondary p-5">

            <img
              src={user.avatar}
              alt={user.name}
              className="h-16 w-16 rounded-full object-cover"
            />

            <div>

              <h3 className="text-xl font-bold text-foreground">
                {user.name}
              </h3>

              <p className="text-muted-foreground">
                {user.email}
              </p>

            </div>

          </div>

          {/* Reason */}

          <div>

            <label className="mb-2 block text-sm font-semibold text-foreground">

              Block Reason

            </label>

            <select
              value={reason}
              onChange={(e) =>
                setReason(e.target.value)
              }
              className="h-12 w-full rounded-2xl border border-border px-4 outline-none focus:border-amber-500"
            >
              <option value="">
                Select reason
              </option>

              <option value="spam">
                Spam Activity
              </option>

              <option value="abuse">
                Abuse / Harassment
              </option>

              <option value="payment">
                Payment Fraud
              </option>

              <option value="policy">
                Policy Violation
              </option>

              <option value="other">
                Other
              </option>

            </select>

          </div>

          {/* Duration */}

          <div>

            <label className="mb-2 block text-sm font-semibold text-foreground">

              Block Duration

            </label>

            <select
              value={duration}
              onChange={(e) =>
                setDuration(e.target.value)
              }
              className="h-12 w-full rounded-2xl border border-border px-4 outline-none focus:border-amber-500"
            >
              <option>1 Day</option>

              <option>7 Days</option>

              <option>30 Days</option>

              <option>Permanent</option>

            </select>

          </div>
                    {/* Admin Notes */}

          <div>

            <label className="mb-2 block text-sm font-semibold text-foreground">
              Admin Notes
            </label>

            <textarea
              rows={5}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Write additional notes for this action..."
              className="w-full rounded-2xl border border-border p-4 outline-none transition-all focus:border-amber-500"
            />

          </div>

          {/* Notify User */}

          <div className="rounded-2xl border border-border bg-secondary p-5">

            <label className="flex cursor-pointer items-start justify-between gap-5">

              <div>

                <div className="flex items-center gap-2">

                  <Bell className="h-5 w-5 text-amber-600" />

                  <h4 className="font-semibold text-foreground">
                    Notify User
                  </h4>

                </div>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Send an email notification explaining why the account
                  has been blocked and include the selected duration.
                </p>

              </div>

              <input
                type="checkbox"
                checked={notify}
                onChange={(e) => setNotify(e.target.checked)}
                className="mt-1 h-5 w-5 rounded border-border text-amber-600 focus:ring-amber-500"
              />

            </label>

          </div>

          {/* Warning */}

          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">

            <h4 className="font-semibold text-amber-800">
              Before you continue
            </h4>

            <ul className="mt-3 space-y-2 text-sm leading-6 text-[#B45309]">

              <li>
                • User won't be able to access the platform while blocked.
              </li>

              <li>
                • Existing purchases and history will remain محفوظ.
              </li>

              <li>
                • The account can be restored anytime from Admin Panel.
              </li>

            </ul>

          </div>

        </div>

        {/* Footer */}

        <DialogFooter
  className="
    sticky
    bottom-0
    bg-card
    border-t
    border-border
    px-8
    py-5
    flex
    justify-end
    gap-3
    rounded-b-3xl
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
                user,
                reason,
                duration,
                notes,
                notify
              )
            }
            className="h-12 rounded-2xl bg-[#F59E0B] px-6 font-semibold text-white transition hover:bg-[#D97706]"
          >
            <ShieldBan className="mr-2 inline h-4 w-4" />

            Confirm Block

          </button>

        </DialogFooter>

      </DialogContent>

    </Dialog>
  );
}
export default memo(BlockUserDialog);