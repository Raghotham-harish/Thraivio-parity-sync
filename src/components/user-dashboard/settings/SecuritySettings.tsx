import {
  ChevronRight,
  KeyRound,
  Lock,
  Mail,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

import type {
  SecuritySettings as SecuritySettingsType,
} from "@/types/settings";

interface SecuritySettingsProps {
  security: SecuritySettingsType;

  onToggle: (
    field: keyof SecuritySettingsType
  ) => void;

  onOpenPasswordDialog: () => void;
}

const SecuritySettings = ({
  security,
  onToggle,
  onOpenPasswordDialog,
}: SecuritySettingsProps) => {
  return (
    <div
      className="
        rounded-[32px]

        border
        border-slate-200

        bg-white

        p-8
      "
    >
      {/* Header */}

      <div
        className="
          flex
          flex-col
          gap-6

          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >
        <div>

          <div
            className="
              inline-flex
              items-center
              gap-2

              rounded-full

              bg-emerald-50

              px-4
              py-2

              text-sm
              font-medium

              text-emerald-700
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
            Account Security
          </h2>

          <p
            className="
              mt-3

              max-w-2xl

              text-slate-500
            "
          >
            Protect your account by managing
            your password, recovery options,
            login alerts and two-factor
            authentication.
          </p>

        </div>

        <div
          className="
            flex
            h-20
            w-20

            items-center
            justify-center

            rounded-[28px]

            bg-emerald-50
          "
        >
          <ShieldCheck
            size={34}
            className="
              text-emerald-600
            "
          />
        </div>

      </div>

      {/* Security Cards */}

      <div
        className="
          mt-10

          space-y-5
        "
      >
                {/* Change Password */}

        <div
          className="
            rounded-3xl

            border
            border-slate-200

            p-6

            transition-all

            hover:border-emerald-200
            hover:shadow-lg
          "
        >
          <div
            className="
              flex
              flex-col

              gap-6

              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            <div
              className="
                flex
                gap-5
              "
            >
              <div
                className="
                  flex
                  h-16
                  w-16

                  shrink-0

                  items-center
                  justify-center

                  rounded-3xl

                  bg-emerald-50
                "
              >
                <KeyRound
                  size={30}
                  className="
                    text-emerald-600
                  "
                />
              </div>

              <div>
                <h3
                  className="
                    text-xl
                    font-bold
                  "
                >
                  Password
                </h3>

                <p
                  className="
                    mt-2

                    text-slate-500
                  "
                >
                  Last changed on
                  {" "}
                  {security.lastPasswordChanged}
                </p>

                <p
                  className="
                    mt-1

                    text-sm

                    text-slate-400
                  "
                >
                  We recommend updating
                  your password every
                  90 days.
                </p>
              </div>
            </div>

            <button
              onClick={
                onOpenPasswordDialog
              }
              className="
                inline-flex
                items-center
                gap-2

                rounded-xl

                bg-emerald-600

                px-5
                py-3

                font-medium

                text-white

                transition

                hover:bg-emerald-700
              "
            >
              Change Password

              <ChevronRight
                size={18}
              />
            </button>
          </div>
        </div>

        {/* Two Factor */}

        <div
          className="
            rounded-3xl

            border
            border-slate-200

            p-6

            transition-all

            hover:border-emerald-200
          "
        >
          <div
            className="
              flex
              flex-col

              gap-6

              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            <div
              className="
                flex
                gap-5
              "
            >
              <div
                className="
                  flex
                  h-16
                  w-16

                  items-center
                  justify-center

                  rounded-3xl

                  bg-blue-50
                "
              >
                <ShieldCheck
                  size={30}
                  className="
                    text-blue-600
                  "
                />
              </div>

              <div>
                <h3
                  className="
                    text-xl
                    font-bold
                  "
                >
                  Two-Factor Authentication
                </h3>

                <p
                  className="
                    mt-2

                    text-slate-500
                  "
                >
                  Add an extra security
                  layer to your account.
                </p>
              </div>
            </div>

            <button
              onClick={() =>
                onToggle(
                  "twoFactorEnabled"
                )
              }
              className={`
                rounded-full

                px-6
                py-3

                font-medium

                transition

                ${
                  security.twoFactorEnabled
                    ? `
                      bg-green-100
                      text-green-700
                    `
                    : `
                      bg-slate-100
                      text-slate-700
                    `
                }
              `}
            >
              {security.twoFactorEnabled
                ? "Enabled"
                : "Enable"}
            </button>
          </div>
        </div>

        {/* Recovery Email */}

        <div
          className="
            rounded-3xl

            border
            border-slate-200

            p-6
          "
        >
          <div
            className="
              flex
              flex-col

              gap-6

              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            <div
              className="
                flex
                gap-5
              "
            >
              <div
                className="
                  flex
                  h-16
                  w-16

                  items-center
                  justify-center

                  rounded-3xl

                  bg-amber-50
                "
              >
                <Mail
                  size={30}
                  className="
                    text-amber-600
                  "
                />
              </div>

              <div>
                <h3
                  className="
                    text-xl
                    font-bold
                  "
                >
                  Recovery Email
                </h3>

                <p
                  className="
                    mt-2

                    text-slate-500
                  "
                >
                  {security.recoveryEmail}
                </p>
              </div>
            </div>

            <button
              className="
                rounded-xl

                border
                border-slate-200

                px-5
                py-3

                font-medium

                transition

                hover:bg-slate-50
              "
            >
              Update
            </button>
          </div>
        </div>

        {/* Recovery Phone */}

        <div
          className="
            rounded-3xl

            border
            border-slate-200

            p-6
          "
        >
          <div
            className="
              flex
              flex-col

              gap-6

              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            <div
              className="
                flex
                gap-5
              "
            >
              <div
                className="
                  flex
                  h-16
                  w-16

                  items-center
                  justify-center

                  rounded-3xl

                  bg-purple-50
                "
              >
                <Smartphone
                  size={30}
                  className="
                    text-purple-600
                  "
                />
              </div>

              <div>
                <h3
                  className="
                    text-xl
                    font-bold
                  "
                >
                  Recovery Phone
                </h3>

                <p
                  className="
                    mt-2

                    text-slate-500
                  "
                >
                  {security.recoveryPhone}
                </p>
              </div>
            </div>

            <button
              className="
                rounded-xl

                border
                border-slate-200

                px-5
                py-3

                font-medium

                transition

                hover:bg-slate-50
              "
            >
              Update
            </button>
          </div>
        </div>
                {/* Login Alerts */}

        <div
          className="
            rounded-3xl

            border
            border-slate-200

            p-6
          "
        >
          <div
            className="
              flex
              flex-col

              gap-6

              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            <div
              className="
                flex
                gap-5
              "
            >
              <div
                className="
                  flex
                  h-16
                  w-16

                  items-center
                  justify-center

                  rounded-3xl

                  bg-red-50
                "
              >
                <Lock
                  size={30}
                  className="
                    text-red-600
                  "
                />
              </div>

              <div>
                <h3
                  className="
                    text-xl
                    font-bold
                  "
                >
                  Login Alerts
                </h3>

                <p
                  className="
                    mt-2

                    text-slate-500
                  "
                >
                  Receive an email whenever a
                  new device signs in to your
                  account.
                </p>
              </div>
            </div>

            <button
              onClick={() =>
                onToggle(
                  "loginAlerts"
                )
              }
              className={`
                rounded-full

                px-6
                py-3

                font-medium

                transition

                ${
                  security.loginAlerts
                    ? `
                      bg-green-100
                      text-green-700
                    `
                    : `
                      bg-slate-100
                      text-slate-700
                    `
                }
              `}
            >
              {security.loginAlerts
                ? "Enabled"
                : "Disabled"}
            </button>
          </div>
        </div>

        {/* Security Overview */}

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
              flex-col

              gap-8

              xl:flex-row
              xl:items-center
              xl:justify-between
            "
          >
            {/* Left */}

            <div className="flex-1">

              <h3
                className="
                  text-2xl
                  font-bold
                "
              >
                Security Score
              </h3>

              <p
                className="
                  mt-2

                  text-slate-500
                "
              >
                Based on your current
                security settings and
                account protection.
              </p>

              <div
                className="
                  mt-6

                  h-3

                  overflow-hidden

                  rounded-full

                  bg-slate-200
                "
              >
                <div
                  className="
                    h-full

                    rounded-full

                    bg-gradient-to-r
                    from-green-500
                    to-emerald-600
                  "
                  style={{
                    width: `${
                      security.twoFactorEnabled
                        ? 95
                        : 70
                    }%`,
                  }}
                />
              </div>

              <div
                className="
                  mt-3

                  text-sm
                  font-medium

                  text-green-700
                "
              >
                {security.twoFactorEnabled
                  ? "95% Secure"
                  : "70% Secure"}
              </div>

            </div>

            {/* Right */}

            <div
              className="
                grid

                gap-4

                sm:grid-cols-2
              "
            >
              <div
                className="
                  rounded-2xl

                  bg-white

                  p-5
                "
              >
                <p
                  className="
                    text-sm
                    text-slate-500
                  "
                >
                  Last Password Change
                </p>

                <h4
                  className="
                    mt-2

                    text-lg
                    font-bold
                  "
                >
                  {
                    security.lastPasswordChanged
                  }
                </h4>
              </div>

              <div
                className="
                  rounded-2xl

                  bg-white

                  p-5
                "
              >
                <p
                  className="
                    text-sm
                    text-slate-500
                  "
                >
                  Two-Factor
                </p>

                <h4
                  className={`
                    mt-2

                    text-lg
                    font-bold

                    ${
                      security.twoFactorEnabled
                        ? "text-green-600"
                        : "text-amber-600"
                    }
                  `}
                >
                  {security.twoFactorEnabled
                    ? "Enabled"
                    : "Disabled"}
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Login */}

        <div
          className="
            rounded-3xl

            border
            border-slate-200

            p-6
          "
        >
          <h3
            className="
              text-xl
              font-bold
            "
          >
            Recent Login
          </h3>

          <p
            className="
              mt-2

              text-slate-500
            "
          >
            HP Pavilion • Chrome •
            Windows 11
          </p>

          <div
            className="
              mt-6

              flex
              flex-wrap

              gap-3
            "
          >
            <div
              className="
                rounded-full

                bg-blue-50

                px-4
                py-2

                text-sm
                font-medium

                text-blue-700
              "
            >
              Current Device
            </div>

            <div
              className="
                rounded-full

                bg-slate-100

                px-4
                py-2

                text-sm
                font-medium

                text-slate-700
              "
            >
              Bhopal, India
            </div>

            <div
              className="
                rounded-full

                bg-green-100

                px-4
                py-2

                text-sm
                font-medium

                text-green-700
              "
            >
              Active Now
            </div>
          </div>
        </div>
              </div>

      {/* Footer */}

      <div
        className="
          mt-10

          flex
          flex-col

          gap-4

          border-t
          border-slate-200

          pt-6

          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >
        {/* Left */}

        <div>
          <h4
            className="
              font-semibold
            "
          >
            Security Recommendations
          </h4>

          <p
            className="
              mt-2

              max-w-2xl

              text-sm

              text-slate-500
            "
          >
            Enable Two-Factor Authentication,
            regularly update your password and
            keep login alerts enabled to
            maximize your account security.
          </p>
        </div>

        {/* Right */}

        <div
          className="
            flex
            flex-wrap

            items-center

            gap-3
          "
        >
          <div
            className="
              rounded-full

              bg-green-50

              px-4
              py-2

              text-sm
              font-medium

              text-green-700
            "
          >
            <div
              className="
                flex
                items-center
                gap-2
              "
            >
              <ShieldCheck size={16} />

              Protected
            </div>
          </div>

          <div
            className="
              rounded-full

              bg-blue-50

              px-4
              py-2

              text-sm
              font-medium

              text-blue-700
            "
          >
            Login Alerts
            {" "}
            {security.loginAlerts
              ? "ON"
              : "OFF"}
          </div>

          <div
            className="
              rounded-full

              bg-emerald-50

              px-4
              py-2

              text-sm
              font-medium

              text-emerald-700
            "
          >
            2FA
            {" "}
            {security.twoFactorEnabled
              ? "Enabled"
              : "Disabled"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecuritySettings;