import {
  Eye,
  EyeOff,
  Lock,
  ShieldCheck,
  X,
} from "lucide-react";

import { useState } from "react";

interface ChangePasswordDialogProps {
  open: boolean;

  currentPassword: string;

  newPassword: string;

  confirmPassword: string;

  onClose: () => void;

  onChange: (
    field: string,
    value: string
  ) => void;

  onSave: () => void;
}

const ChangePasswordDialog = ({
  open,
  currentPassword,
  newPassword,
  confirmPassword,
  onClose,
  onChange,
  onSave,
}: ChangePasswordDialogProps) => {
  const [
    showCurrent,
    setShowCurrent,
  ] = useState(false);

  const [
    showNew,
    setShowNew,
  ] = useState(false);

  const [
    showConfirm,
    setShowConfirm,
  ] = useState(false);

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

        bg-black/60

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
            border-slate-200

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

                bg-blue-50

                px-4
                py-2

                text-sm
                font-medium

                text-blue-700
              "
            >
              <ShieldCheck size={16} />

              Security
            </div>

            <h2
              className="
                mt-5

                text-3xl
                font-bold
              "
            >
              Change Password
            </h2>

            <p
              className="
                mt-2

                text-slate-500
              "
            >
              Update your account password
              to keep your Thraivio
              account secure.
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

              hover:bg-slate-100
            "
          >
            <X size={22} />
          </button>
        </div>

        {/* Form */}

        <div
          className="
            space-y-8

            p-8
          "
        >
                      {/* Current Password */}

          <div>
            <label
              className="
                mb-2

                block

                text-sm
                font-medium
              "
            >
              Current Password
            </label>

            <div className="relative">
              <Lock
                size={18}
                className="
                  absolute
                  left-4
                  top-1/2

                  -translate-y-1/2

                  text-slate-400
                "
              />

              <input
                type={
                  showCurrent
                    ? "text"
                    : "password"
                }
                value={currentPassword}
                onChange={(e) =>
                  onChange(
                    "currentPassword",
                    e.target.value
                  )
                }
                placeholder="Enter current password"
                className="
                  w-full

                  rounded-2xl

                  border
                  border-slate-200

                  py-3.5
                  pl-12
                  pr-14

                  outline-none

                  transition

                  focus:border-blue-500
                  focus:ring-2
                  focus:ring-blue-100
                "
              />

              <button
                type="button"
                onClick={() =>
                  setShowCurrent(
                    !showCurrent
                  )
                }
                className="
                  absolute
                  right-4
                  top-1/2

                  -translate-y-1/2

                  text-slate-500

                  hover:text-slate-700
                "
              >
                {showCurrent ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>

          {/* New Password */}

          <div>
            <label
              className="
                mb-2

                block

                text-sm
                font-medium
              "
            >
              New Password
            </label>

            <div className="relative">
              <Lock
                size={18}
                className="
                  absolute
                  left-4
                  top-1/2

                  -translate-y-1/2

                  text-slate-400
                "
              />

              <input
                type={
                  showNew
                    ? "text"
                    : "password"
                }
                value={newPassword}
                onChange={(e) =>
                  onChange(
                    "newPassword",
                    e.target.value
                  )
                }
                placeholder="Create a strong password"
                className="
                  w-full

                  rounded-2xl

                  border
                  border-slate-200

                  py-3.5
                  pl-12
                  pr-14

                  outline-none

                  transition

                  focus:border-blue-500
                  focus:ring-2
                  focus:ring-blue-100
                "
              />

              <button
                type="button"
                onClick={() =>
                  setShowNew(
                    !showNew
                  )
                }
                className="
                  absolute
                  right-4
                  top-1/2

                  -translate-y-1/2

                  text-slate-500

                  hover:text-slate-700
                "
              >
                {showNew ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>

          {/* Confirm Password */}

          <div>
            <label
              className="
                mb-2

                block

                text-sm
                font-medium
              "
            >
              Confirm New Password
            </label>

            <div className="relative">
              <Lock
                size={18}
                className="
                  absolute
                  left-4
                  top-1/2

                  -translate-y-1/2

                  text-slate-400
                "
              />

              <input
                type={
                  showConfirm
                    ? "text"
                    : "password"
                }
                value={confirmPassword}
                onChange={(e) =>
                  onChange(
                    "confirmPassword",
                    e.target.value
                  )
                }
                placeholder="Re-enter new password"
                className="
                  w-full

                  rounded-2xl

                  border
                  border-slate-200

                  py-3.5
                  pl-12
                  pr-14

                  outline-none

                  transition

                  focus:border-blue-500
                  focus:ring-2
                  focus:ring-blue-100
                "
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirm(
                    !showConfirm
                  )
                }
                className="
                  absolute
                  right-4
                  top-1/2

                  -translate-y-1/2

                  text-slate-500

                  hover:text-slate-700
                "
              >
                {showConfirm ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>
                    {/* Password Strength */}

          <div
            className="
              rounded-3xl

              border
              border-slate-200

              bg-slate-50

              p-6
            "
          >
            <div
              className="
                flex
                items-center
                justify-between
              "
            >
              <h3
                className="
                  text-lg
                  font-semibold
                "
              >
                Password Strength
              </h3>

              <span
                className={`
                  rounded-full

                  px-3
                  py-1

                  text-xs
                  font-semibold

                  ${
                    newPassword.length >= 12
                      ? "bg-green-100 text-green-700"
                      : newPassword.length >= 8
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }
                `}
              >
                {newPassword.length >= 12
                  ? "Strong"
                  : newPassword.length >= 8
                  ? "Medium"
                  : "Weak"}
              </span>
            </div>

            <div
              className="
                mt-5

                h-3

                overflow-hidden

                rounded-full

                bg-slate-200
              "
            >
              <div
                className={`
                  h-full

                  rounded-full

                  transition-all
                  duration-500

                  ${
                    newPassword.length >= 12
                      ? "w-full bg-green-500"
                      : newPassword.length >= 8
                      ? "w-2/3 bg-yellow-500"
                      : "w-1/3 bg-red-500"
                  }
                `}
              />
            </div>

            <p
              className="
                mt-4

                text-sm

                text-slate-500
              "
            >
              Use a long password with a mix
              of uppercase letters,
              lowercase letters, numbers and
              special characters.
            </p>
          </div>

          {/* Password Requirements */}

          <div
            className="
              rounded-3xl

              border
              border-blue-100

              bg-blue-50

              p-6
            "
          >
            <h3
              className="
                text-lg
                font-semibold

                text-blue-700
              "
            >
              Password Requirements
            </h3>

            <div
              className="
                mt-5

                space-y-3
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className={`
                    h-3
                    w-3

                    rounded-full

                    ${
                      newPassword.length >= 8
                        ? "bg-green-500"
                        : "bg-slate-300"
                    }
                  `}
                />

                <span className="text-sm">
                  Minimum 8 characters
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className={`
                    h-3
                    w-3

                    rounded-full

                    ${
                      /[A-Z]/.test(newPassword)
                        ? "bg-green-500"
                        : "bg-slate-300"
                    }
                  `}
                />

                <span className="text-sm">
                  At least one uppercase
                  letter
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className={`
                    h-3
                    w-3

                    rounded-full

                    ${
                      /[0-9]/.test(newPassword)
                        ? "bg-green-500"
                        : "bg-slate-300"
                    }
                  `}
                />

                <span className="text-sm">
                  At least one number
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className={`
                    h-3
                    w-3

                    rounded-full

                    ${
                      /[^A-Za-z0-9]/.test(
                        newPassword
                      )
                        ? "bg-green-500"
                        : "bg-slate-300"
                    }
                  `}
                />

                <span className="text-sm">
                  At least one special
                  character
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className={`
                    h-3
                    w-3

                    rounded-full

                    ${
                      newPassword !== "" &&
                      newPassword ===
                        confirmPassword
                        ? "bg-green-500"
                        : "bg-slate-300"
                    }
                  `}
                />

                <span className="text-sm">
                  Passwords match
                </span>
              </div>
            </div>
          </div>
                    {/* Footer */}

          <div
            className="
              flex
              flex-col-reverse

              gap-4

              border-t
              border-slate-200

              pt-8

              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            {/* Left */}

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

                  bg-blue-50
                "
              >
                <ShieldCheck
                  size={22}
                  className="
                    text-blue-600
                  "
                />
              </div>

              <div>
                <h4
                  className="
                    font-semibold
                  "
                >
                  Security Tip
                </h4>

                <p
                  className="
                    mt-1

                    max-w-lg

                    text-sm

                    text-slate-500
                  "
                >
                  Never reuse passwords from
                  other websites. Use a
                  unique password and enable
                  two-factor authentication
                  whenever possible.
                </p>
              </div>
            </div>

            {/* Buttons */}

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
                onClick={onSave}
                disabled={
                  !currentPassword ||
                  !newPassword ||
                  !confirmPassword ||
                  newPassword !==
                    confirmPassword
                }
                className="
                  rounded-xl

                  bg-blue-600

                  px-7
                  py-3

                  font-medium

                  text-white

                  transition

                  hover:bg-blue-700

                  disabled:cursor-not-allowed
                  disabled:opacity-50
                "
              >
                Update Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordDialog;