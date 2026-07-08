import {
  AlertTriangle,
  ShieldAlert,
  Trash2,
  X,
} from "lucide-react";

interface DeleteAccountDialogProps {
  open: boolean;

  password: string;

  confirmationText: string;

  onClose: () => void;

  onChange: (
    field: string,
    value: string
  ) => void;

  onDelete: () => void;
}

const DeleteAccountDialog = ({
  open,
  password,
  confirmationText,
  onClose,
  onChange,
  onDelete,
}: DeleteAccountDialogProps) => {
  if (!open) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-50

        flex
        items-center
        justify-center

        bg-black/70

        p-6
      "
    >
      <div
        className="
          w-full
          max-w-3xl

          overflow-hidden

          rounded-[32px]

          bg-white

          shadow-2xl
        "
      >
        {/* Header */}

        <div
          className="
            flex
            items-center
            justify-between

            border-b
            border-red-200

            bg-gradient-to-r
            from-red-50
            to-rose-50

            p-8
          "
        >
          <div>

            <div
              className="
                inline-flex
                items-center
                gap-2

                rounded-full

                bg-red-100

                px-4
                py-2

                text-sm
                font-medium

                text-red-700
              "
            >
              <ShieldAlert size={16} />

              Permanent Action
            </div>

            <h2
              className="
                mt-5

                text-3xl
                font-bold

                text-red-700
              "
            >
              Delete Account
            </h2>

            <p
              className="
                mt-2

                max-w-xl

                text-slate-600
              "
            >
              This action permanently deletes
              your CoachCoaching account and
              all associated data.
            </p>

          </div>

          <button
            onClick={onClose}
            className="
              flex
              h-12
              w-12

              items-center
              justify-center

              rounded-xl

              transition

              hover:bg-white
            "
          >
            <X size={22} />
          </button>
        </div>

        {/* Body */}

        <div className="space-y-8 p-8">
                      {/* Warning Card */}

          <div
            className="
              rounded-3xl

              border
              border-red-200

              bg-red-50

              p-6
            "
          >
            <div
              className="
                flex
                items-start

                gap-4
              "
            >
              <div
                className="
                  flex

                  h-14
                  w-14

                  shrink-0

                  items-center
                  justify-center

                  rounded-2xl

                  bg-red-100
                "
              >
                <AlertTriangle
                  size={28}
                  className="
                    text-red-600
                  "
                />
              </div>

              <div className="flex-1">
                <h3
                  className="
                    text-xl
                    font-bold

                    text-red-700
                  "
                >
                  This action cannot be
                  undone
                </h3>

                <p
                  className="
                    mt-2

                    text-slate-600
                  "
                >
                  Once your account is
                  deleted, CoachCoaching
                  permanently removes all
                  associated data from your
                  account.
                </p>

                <ul
                  className="
                    mt-6

                    space-y-3

                    text-sm

                    text-slate-600
                  "
                >
                  <li>
                    • Your profile and account
                    information
                  </li>

                  <li>
                    • Mentorship sessions and
                    bookings
                  </li>

                  <li>
                    • Certificates and
                    achievements
                  </li>

                  <li>
                    • Saved mentors and
                    favorites
                  </li>

                  <li>
                    • Learning progress and
                    enrolled programs
                  </li>

                  <li>
                    • Settings and preferences
                  </li>

                  <li>
                    • All uploaded files and
                    profile images
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Password */}

          <div>
            <label
              className="
                mb-2

                block

                text-sm
                font-medium
              "
            >
              Confirm Your Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) =>
                onChange(
                  "password",
                  e.target.value
                )
              }
              placeholder="Enter your password"
              className="
                w-full

                rounded-2xl

                border
                border-slate-200

                px-5
                py-3.5

                outline-none

                transition

                focus:border-red-500
                focus:ring-2
                focus:ring-red-100
              "
            />

            <p
              className="
                mt-2

                text-sm

                text-slate-500
              "
            >
              Enter your current password to
              verify this request.
            </p>
          </div>

          {/* DELETE Confirmation */}

          <div>
            <label
              className="
                mb-2

                block

                text-sm
                font-medium
              "
            >
              Type
              <span
                className="
                  mx-1

                  rounded

                  bg-red-100

                  px-2
                  py-1

                  font-bold

                  text-red-700
                "
              >
                DELETE
              </span>
              to confirm
            </label>

            <input
              type="text"
              value={confirmationText}
              onChange={(e) =>
                onChange(
                  "confirmationText",
                  e.target.value
                )
              }
              placeholder="Type DELETE"
              className="
                w-full

                rounded-2xl

                border
                border-slate-200

                px-5
                py-3.5

                outline-none

                transition

                focus:border-red-500
                focus:ring-2
                focus:ring-red-100
              "
            />

            <p
              className="
                mt-2

                text-sm

                text-slate-500
              "
            >
              This extra confirmation helps
              prevent accidental account
              deletion.
            </p>
          </div>
                    {/* Footer */}

          <div
            className="
              flex
              flex-col-reverse

              gap-4

              border-t
              border-red-200

              pt-8

              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            {/* Security Note */}

            <div
              className="
                flex
                items-start

                gap-3
              "
            >
              <div
                className="
                  flex

                  h-12
                  w-12

                  shrink-0

                  items-center
                  justify-center

                  rounded-2xl

                  bg-red-100
                "
              >
                <ShieldAlert
                  size={22}
                  className="
                    text-red-600
                  "
                />
              </div>

              <div>
                <h4
                  className="
                    font-semibold

                    text-red-700
                  "
                >
                  Final Warning
                </h4>

                <p
                  className="
                    mt-1

                    max-w-lg

                    text-sm

                    text-slate-500
                  "
                >
                  Account deletion is
                  permanent. Once deleted,
                  your learning history,
                  certificates, mentor
                  sessions and profile cannot
                  be restored by
                  CoachCoaching Support.
                </p>
              </div>
            </div>

            {/* Action Buttons */}

            <div
              className="
                flex
                flex-col

                gap-3

                sm:flex-row
              "
            >
              <button
                onClick={onClose}
                className="
                  rounded-xl

                  border
                  border-slate-300

                  px-6
                  py-3

                  font-medium

                  transition

                  hover:bg-slate-50
                "
              >
                Cancel
              </button>

              <button
                onClick={onDelete}
                disabled={
                  !password ||
                  confirmationText !==
                    "DELETE"
                }
                className="
                  inline-flex
                  items-center
                  justify-center

                  gap-2

                  rounded-xl

                  bg-red-600

                  px-7
                  py-3

                  font-medium

                  text-white

                  transition

                  hover:bg-red-700

                  disabled:cursor-not-allowed
                  disabled:opacity-50
                "
              >
                <Trash2 size={18} />

                Delete Forever
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccountDialog;