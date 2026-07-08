import {
  Bell,
  BellRing,
  Mail,
  MessageCircle,
  Smartphone,
} from "lucide-react";

import type {
  NotificationSettings as NotificationSettingsType,
} from "@/types/settings";

interface NotificationSettingsProps {
  notifications: NotificationSettingsType;

  onToggle: (
    field: keyof NotificationSettingsType
  ) => void;
}

const NotificationSettings = ({
  notifications,
  onToggle,
}: NotificationSettingsProps) => {
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

              bg-amber-50

              px-4
              py-2

              text-sm
              font-medium

              text-amber-700
            "
          >
            <Bell size={16} />

            Notifications
          </div>

          <h2
            className="
              mt-5

              text-3xl
              font-bold
            "
          >
            Notification Preferences
          </h2>

          <p
            className="
              mt-3

              max-w-2xl

              text-slate-500
            "
          >
            Choose how you'd like to receive
            updates about mentors, sessions,
            programs, certificates and your
            account activity.
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

            bg-amber-50
          "
        >
          <BellRing
            size={34}
            className="
              text-amber-600
            "
          />
        </div>

      </div>

      {/* Notification Groups */}

      <div
        className="
          mt-10

          space-y-6
        "
      >
                {/* Email Notifications */}

        <div
          className="
            rounded-3xl

            border
            border-slate-200

            p-6

            transition-all

            hover:border-amber-200
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

                  items-center
                  justify-center

                  rounded-3xl

                  bg-blue-50
                "
              >
                <Mail
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
                  Email Notifications
                </h3>

                <p
                  className="
                    mt-2

                    text-slate-500
                  "
                >
                  Receive important updates
                  directly in your inbox.
                </p>
              </div>
            </div>

            <button
              onClick={() =>
                onToggle("email")
              }
              className={`
                rounded-full

                px-6
                py-3

                font-medium

                transition

                ${
                  notifications.email
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
              {notifications.email
                ? "Enabled"
                : "Disabled"}
            </button>
          </div>
        </div>

        {/* Push Notifications */}

        <div
          className="
            rounded-3xl

            border
            border-slate-200

            p-6

            transition-all

            hover:border-amber-200
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

                  bg-green-50
                "
              >
                <BellRing
                  size={30}
                  className="
                    text-green-600
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
                  Push Notifications
                </h3>

                <p
                  className="
                    mt-2

                    text-slate-500
                  "
                >
                  Get instant updates while
                  using CoachCoaching.
                </p>
              </div>
            </div>

            <button
              onClick={() =>
                onToggle("push")
              }
              className={`
                rounded-full

                px-6
                py-3

                font-medium

                transition

                ${
                  notifications.push
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
              {notifications.push
                ? "Enabled"
                : "Disabled"}
            </button>
          </div>
        </div>

        {/* SMS Notifications */}

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
                  SMS Notifications
                </h3>

                <p
                  className="
                    mt-2

                    text-slate-500
                  "
                >
                  Receive important alerts
                  through SMS messages.
                </p>
              </div>
            </div>

            <button
              onClick={() =>
                onToggle("sms")
              }
              className={`
                rounded-full

                px-6
                py-3

                font-medium

                transition

                ${
                  notifications.sms
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
              {notifications.sms
                ? "Enabled"
                : "Disabled"}
            </button>
          </div>
        </div>

        {/* Mentor Messages */}

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
                <MessageCircle
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
                  Mentor Messages
                </h3>

                <p
                  className="
                    mt-2

                    text-slate-500
                  "
                >
                  Receive notifications for
                  mentor replies and new
                  messages.
                </p>
              </div>
            </div>

            <button
              onClick={() =>
                onToggle(
                  "mentorMessages"
                )
              }
              className={`
                rounded-full

                px-6
                py-3

                font-medium

                transition

                ${
                  notifications.mentorMessages
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
              {notifications.mentorMessages
                ? "Enabled"
                : "Disabled"}
            </button>
          </div>
        </div>
                {/* Learning Notifications */}

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
            Learning Notifications
          </h3>

          <p
            className="
              mt-2

              text-slate-500
            "
          >
            Control notifications related to
            your learning journey.
          </p>

          <div
            className="
              mt-8

              grid

              gap-5

              lg:grid-cols-2
            "
          >
            {/* Programs */}

            <div
              className="
                flex
                items-center
                justify-between

                rounded-2xl

                border
                border-slate-200

                p-5
              "
            >
              <div>
                <h4
                  className="
                    font-semibold
                  "
                >
                  Programs
                </h4>

                <p
                  className="
                    mt-1

                    text-sm

                    text-slate-500
                  "
                >
                  New lessons & updates.
                </p>
              </div>

              <button
                onClick={() =>
                  onToggle("programs")
                }
                className={`
                  rounded-full

                  px-5
                  py-2

                  text-sm
                  font-medium

                  transition

                  ${
                    notifications.programs
                      ? "bg-green-100 text-green-700"
                      : "bg-slate-100 text-slate-700"
                  }
                `}
              >
                {notifications.programs
                  ? "ON"
                  : "OFF"}
              </button>
            </div>

            {/* Sessions */}

            <div
              className="
                flex
                items-center
                justify-between

                rounded-2xl

                border
                border-slate-200

                p-5
              "
            >
              <div>
                <h4
                  className="
                    font-semibold
                  "
                >
                  Sessions
                </h4>

                <p
                  className="
                    mt-1

                    text-sm

                    text-slate-500
                  "
                >
                  Session reminders &
                  schedule updates.
                </p>
              </div>

              <button
                onClick={() =>
                  onToggle("sessions")
                }
                className={`
                  rounded-full

                  px-5
                  py-2

                  text-sm
                  font-medium

                  transition

                  ${
                    notifications.sessions
                      ? "bg-green-100 text-green-700"
                      : "bg-slate-100 text-slate-700"
                  }
                `}
              >
                {notifications.sessions
                  ? "ON"
                  : "OFF"}
              </button>
            </div>

            {/* Certificates */}

            <div
              className="
                flex
                items-center
                justify-between

                rounded-2xl

                border
                border-slate-200

                p-5
              "
            >
              <div>
                <h4
                  className="
                    font-semibold
                  "
                >
                  Certificates
                </h4>

                <p
                  className="
                    mt-1

                    text-sm

                    text-slate-500
                  "
                >
                  Earned certificates &
                  achievements.
                </p>
              </div>

              <button
                onClick={() =>
                  onToggle("certificates")
                }
                className={`
                  rounded-full

                  px-5
                  py-2

                  text-sm
                  font-medium

                  transition

                  ${
                    notifications.certificates
                      ? "bg-green-100 text-green-700"
                      : "bg-slate-100 text-slate-700"
                  }
                `}
              >
                {notifications.certificates
                  ? "ON"
                  : "OFF"}
              </button>
            </div>

            {/* Events */}

            <div
              className="
                flex
                items-center
                justify-between

                rounded-2xl

                border
                border-slate-200

                p-5
              "
            >
              <div>
                <h4
                  className="
                    font-semibold
                  "
                >
                  Events
                </h4>

                <p
                  className="
                    mt-1

                    text-sm

                    text-slate-500
                  "
                >
                  Workshops & webinars.
                </p>
              </div>

              <button
                onClick={() =>
                  onToggle("events")
                }
                className={`
                  rounded-full

                  px-5
                  py-2

                  text-sm
                  font-medium

                  transition

                  ${
                    notifications.events
                      ? "bg-green-100 text-green-700"
                      : "bg-slate-100 text-slate-700"
                  }
                `}
              >
                {notifications.events
                  ? "ON"
                  : "OFF"}
              </button>
            </div>
          </div>
        </div>

        {/* Marketing */}

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
            Marketing & Updates
          </h3>

          <div
            className="
              mt-8

              space-y-5
            "
          >
            {/* Marketing Emails */}

            <div
              className="
                flex
                items-center
                justify-between

                rounded-2xl

                border
                border-slate-200

                p-5
              "
            >
              <div>
                <h4
                  className="
                    font-semibold
                  "
                >
                  Marketing Emails
                </h4>

                <p
                  className="
                    mt-1

                    text-sm

                    text-slate-500
                  "
                >
                  Product news, offers &
                  platform updates.
                </p>
              </div>

              <button
                onClick={() =>
                  onToggle("marketing")
                }
                className={`
                  rounded-full

                  px-5
                  py-2

                  text-sm
                  font-medium

                  transition

                  ${
                    notifications.marketing
                      ? "bg-green-100 text-green-700"
                      : "bg-slate-100 text-slate-700"
                  }
                `}
              >
                {notifications.marketing
                  ? "ON"
                  : "OFF"}
              </button>
            </div>

            {/* Weekly Digest */}

            <div
              className="
                flex
                items-center
                justify-between

                rounded-2xl

                border
                border-slate-200

                p-5
              "
            >
              <div>
                <h4
                  className="
                    font-semibold
                  "
                >
                  Weekly Digest
                </h4>

                <p
                  className="
                    mt-1

                    text-sm

                    text-slate-500
                  "
                >
                  Weekly learning progress
                  summary.
                </p>
              </div>

              <button
                onClick={() =>
                  onToggle(
                    "weeklyDigest"
                  )
                }
                className={`
                  rounded-full

                  px-5
                  py-2

                  text-sm
                  font-medium

                  transition

                  ${
                    notifications.weeklyDigest
                      ? "bg-green-100 text-green-700"
                      : "bg-slate-100 text-slate-700"
                  }
                `}
              >
                {notifications.weeklyDigest
                  ? "ON"
                  : "OFF"}
              </button>
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
            Stay Updated
          </h4>

          <p
            className="
              mt-2

              max-w-2xl

              text-sm

              text-slate-500
            "
          >
            Customize how CoachCoaching
            keeps you informed. Enable only
            the notifications that matter to
            you while reducing unnecessary
            interruptions.
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

              bg-blue-50

              px-4
              py-2

              text-sm
              font-medium

              text-blue-700
            "
          >
            <div
              className="
                flex
                items-center
                gap-2
              "
            >
              <Bell size={16} />

              Smart Notifications
            </div>
          </div>

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
            Email{" "}
            {notifications.email
              ? "ON"
              : "OFF"}
          </div>

          <div
            className="
              rounded-full

              bg-amber-50

              px-4
              py-2

              text-sm
              font-medium

              text-amber-700
            "
          >
            Push{" "}
            {notifications.push
              ? "ON"
              : "OFF"}
          </div>

          <div
            className="
              rounded-full

              bg-purple-50

              px-4
              py-2

              text-sm
              font-medium

              text-purple-700
            "
          >
            Weekly Digest{" "}
            {notifications.weeklyDigest
              ? "ON"
              : "OFF"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationSettings;