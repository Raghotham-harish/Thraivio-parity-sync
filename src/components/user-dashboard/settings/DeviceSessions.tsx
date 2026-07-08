import {
  Laptop,
  Smartphone,
  Monitor,
  ShieldCheck,
} from "lucide-react";

import type {
  DeviceSession,
} from "@/types/settings";

interface DeviceSessionsProps {
  sessions: DeviceSession[];

  onLogoutDevice: (
    id: string
  ) => void;

  onLogoutAll: () => void;
}

const DeviceSessions = ({
  sessions,
  onLogoutDevice,
  onLogoutAll,
}: DeviceSessionsProps) => {
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

              bg-indigo-50

              px-4
              py-2

              text-sm
              font-medium

              text-indigo-700
            "
          >
            <Laptop size={16} />

            Device Sessions
          </div>

          <h2
            className="
              mt-5

              text-3xl
              font-bold
            "
          >
            Active Devices
          </h2>

          <p
            className="
              mt-3

              max-w-2xl

              text-slate-500
            "
          >
            Review all devices currently
            signed in to your CoachCoaching
            account. Remove any session you
            don't recognize to keep your
            account secure.
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

            bg-indigo-50
          "
        >
          <ShieldCheck
            size={34}
            className="
              text-indigo-600
            "
          />
        </div>

      </div>

      {/* Device List */}

      <div
        className="
          mt-10

          space-y-6
        "
      >
                {sessions.map((session) => {
          const Icon =
            session.deviceType === "mobile"
              ? Smartphone
              : session.deviceType === "desktop"
              ? Monitor
              : Laptop;

          return (
            <div
              key={session.id}
              className="
                rounded-3xl

                border
                border-slate-200

                p-6

                transition-all

                hover:border-indigo-200
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
                {/* Left */}

                <div
                  className="
                    flex
                    gap-5

                    flex-1
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

                      bg-indigo-50
                    "
                  >
                    <Icon
                      size={30}
                      className="
                        text-indigo-600
                      "
                    />
                  </div>

                  <div className="flex-1">

                    <div
                      className="
                        flex
                        flex-wrap

                        items-center

                        gap-3
                      "
                    >
                      <h3
                        className="
                          text-2xl
                          font-bold
                        "
                      >
                        {session.deviceName}
                      </h3>

                      {session.current && (
                        <span
                          className="
                            rounded-full

                            bg-green-100

                            px-3
                            py-1

                            text-xs
                            font-semibold

                            text-green-700
                          "
                        >
                          Current Device
                        </span>
                      )}
                    </div>

                    <p
                      className="
                        mt-2

                        text-slate-500
                      "
                    >
                      {session.browser}
                      {" • "}
                      {session.os}
                    </p>

                    <div
                      className="
                        mt-6

                        grid

                        gap-4

                        md:grid-cols-3
                      "
                    >
                      {/* Location */}

                      <div
                        className="
                          rounded-2xl

                          bg-slate-50

                          p-4
                        "
                      >
                        <p
                          className="
                            text-sm

                            text-slate-500
                          "
                        >
                          Location
                        </p>

                        <h4
                          className="
                            mt-2

                            font-semibold
                          "
                        >
                          {session.location}
                        </h4>
                      </div>

                      {/* Last Active */}

                      <div
                        className="
                          rounded-2xl

                          bg-indigo-50

                          p-4
                        "
                      >
                        <p
                          className="
                            text-sm

                            text-indigo-600
                          "
                        >
                          Last Active
                        </p>

                        <h4
                          className="
                            mt-2

                            font-semibold

                            text-indigo-700
                          "
                        >
                          {session.lastActive}
                        </h4>
                      </div>

                      {/* Status */}

                      <div
                        className="
                          rounded-2xl

                          bg-green-50

                          p-4
                        "
                      >
                        <p
                          className="
                            text-sm

                            text-green-600
                          "
                        >
                          Status
                        </p>

                        <h4
                          className="
                            mt-2

                            font-semibold

                            text-green-700
                          "
                        >
                          {session.current
                            ? "Active Now"
                            : "Signed In"}
                        </h4>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Right */}

                <div
                  className="
                    flex

                    lg:flex-col

                    gap-3

                    shrink-0
                  "
                >
                  {!session.current && (
                    <button
                      onClick={() =>
                        onLogoutDevice(
                          session.id
                        )
                      }
                      className="
                        rounded-xl

                        border
                        border-red-200

                        px-5
                        py-3

                        font-medium

                        text-red-600

                        transition

                        hover:bg-red-50
                      "
                    >
                      Logout Device
                    </button>
                  )}

                  {session.current && (
                    <div
                      className="
                        rounded-xl

                        bg-green-50

                        px-5
                        py-3

                        text-center

                        font-medium

                        text-green-700
                      "
                    >
                      Current Session
                    </div>
                  )}
                </div>

              </div>
            </div>
          );
        })}
              {/* Security Overview */}

      <div
        className="
          mt-10

          rounded-[32px]

          bg-gradient-to-r
          from-indigo-600
          via-blue-600
          to-cyan-600

          p-8

          text-white
        "
      >
        <div
          className="
            flex
            flex-col

            gap-8

            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          {/* Left */}

          <div>
            <div
              className="
                inline-flex
                items-center
                gap-2

                rounded-full

                bg-white/15

                px-4
                py-2

                text-sm
                font-medium
              "
            >
              <ShieldCheck size={16} />

              Security Overview
            </div>

            <h3
              className="
                mt-5

                text-3xl
                font-bold
              "
            >
              Your Account is Protected
            </h3>

            <p
              className="
                mt-4

                max-w-2xl

                text-blue-100
              "
            >
              Review your active sessions
              regularly. Remove devices that
              you no longer use to keep your
              CoachCoaching account secure.
            </p>
          </div>

          {/* Stats */}

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

                bg-white/10

                p-5

                backdrop-blur
              "
            >
              <p
                className="
                  text-sm

                  text-blue-100
                "
              >
                Active Devices
              </p>

              <h4
                className="
                  mt-2

                  text-4xl
                  font-bold
                "
              >
                {sessions.length}
              </h4>
            </div>

            <div
              className="
                rounded-2xl

                bg-white/10

                p-5

                backdrop-blur
              "
            >
              <p
                className="
                  text-sm

                  text-blue-100
                "
              >
                Current Device
              </p>

              <h4
                className="
                  mt-2

                  text-2xl
                  font-bold
                "
              >
                {
                  sessions.find(
                    (item) =>
                      item.current
                  )?.deviceName
                }
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* Security Tips */}

      <div
        className="
          mt-10

          rounded-3xl

          border
          border-amber-200

          bg-amber-50

          p-8
        "
      >
        <h3
          className="
            text-2xl
            font-bold

            text-amber-800
          "
        >
          Security Recommendations
        </h3>

        <div
          className="
            mt-6

            space-y-4
          "
        >
          <div
            className="
              flex
              gap-3
            "
          >
            <ShieldCheck
              size={20}
              className="
                mt-0.5

                text-amber-600
              "
            />

            <p className="text-slate-700">
              Review unknown devices every
              few weeks.
            </p>
          </div>

          <div
            className="
              flex
              gap-3
            "
          >
            <ShieldCheck
              size={20}
              className="
                mt-0.5

                text-amber-600
              "
            />

            <p className="text-slate-700">
              Enable Two-Factor
              Authentication for stronger
              account protection.
            </p>
          </div>

          <div
            className="
              flex
              gap-3
            "
          >
            <ShieldCheck
              size={20}
              className="
                mt-0.5

                text-amber-600
              "
            />

            <p className="text-slate-700">
              Log out from public or shared
              computers after every session.
            </p>
          </div>
        </div>
      </div>

      {/* Logout All */}

      <div
        className="
          mt-10

          flex
          justify-end
        "
      >
        <button
          onClick={onLogoutAll}
          className="
            rounded-xl

            bg-red-600

            px-7
            py-3.5

            font-medium

            text-white

            transition

            hover:bg-red-700
          "
        >
          Logout From All Devices
        </button>
      </div>
      </div>
            {/* Footer */}

      <div
        className="
          mt-10

          flex
          flex-col

          gap-5

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
            Session Management
          </h4>

          <p
            className="
              mt-2

              max-w-2xl

              text-sm

              text-slate-500
            "
          >
            Your active sessions are securely
            managed across all devices.
            Regularly reviewing connected
            devices helps keep your
            CoachCoaching account safe from
            unauthorized access.
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
              inline-flex
              items-center
              gap-2

              rounded-full

              bg-green-50

              px-4
              py-2

              text-sm
              font-medium

              text-green-700
            "
          >
            <ShieldCheck size={16} />

            Secure Sessions
          </div>

          <div
            className="
              inline-flex
              items-center
              gap-2

              rounded-full

              bg-indigo-50

              px-4
              py-2

              text-sm
              font-medium

              text-indigo-700
            "
          >
            <Laptop size={16} />

            {sessions.length} Device
            {sessions.length !== 1
              ? "s"
              : ""}
          </div>

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
            <Monitor size={16} />

            {
              sessions.filter(
                (item) =>
                  item.current
              ).length
            }{" "}
            Active
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceSessions;