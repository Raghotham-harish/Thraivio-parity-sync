import {
  AlertTriangle,
  ShieldAlert,
} from "lucide-react";

interface DangerZoneProps {
  onExportData: () => void;

  onDeactivate: () => void;

  onDeleteAccount: () => void;
}

const DangerZone = ({
  onExportData,
  onDeactivate,
  onDeleteAccount,
}: DangerZoneProps) => {
  return (
    <div
      className="
        rounded-[32px]

        border
        border-red-200

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

              bg-red-100

              px-4
              py-2

              text-sm
              font-medium

              text-red-700
            "
          >
            <AlertTriangle size={16} />

            Danger Zone
          </div>

          <h2
            className="
              mt-5

              text-3xl
              font-bold
            "
          >
            Account Management
          </h2>

          <p
            className="
              mt-3

              max-w-2xl

              text-slate-500
            "
          >
            These actions permanently affect
            your CoachCoaching account.
            Please review each option
            carefully before continuing.
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

            bg-red-100
          "
        >
          <ShieldAlert
            size={34}
            className="
              text-red-600
            "
          />
        </div>

      </div>

      {/* Actions */}

      <div
        className="
          mt-10

          space-y-6
        "
      >
                {/* Export Data */}

        <div
          className="
            rounded-3xl

            border
            border-slate-200

            p-6

            transition-all

            hover:border-blue-200
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
            <div>
              <h3
                className="
                  text-xl
                  font-bold
                "
              >
                Export My Data
              </h3>

              <p
                className="
                  mt-2

                  max-w-2xl

                  text-slate-500
                "
              >
                Download a complete copy of
                your profile, certificates,
                sessions, mentor history and
                learning progress.
              </p>
            </div>

            <button
              onClick={onExportData}
              className="
                rounded-xl

                bg-blue-600

                px-6
                py-3

                font-medium

                text-white

                transition

                hover:bg-blue-700
              "
            >
              Export Data
            </button>
          </div>
        </div>

        {/* Download Archive */}

        <div
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
            <div>
              <h3
                className="
                  text-xl
                  font-bold
                "
              >
                Download Account Archive
              </h3>

              <p
                className="
                  mt-2

                  max-w-2xl

                  text-slate-500
                "
              >
                Generate an archive that
                contains all account
                information for backup
                purposes.
              </p>
            </div>

            <button
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
              Download Archive
            </button>
          </div>
        </div>

        {/* Deactivate */}

        <div
          className="
            rounded-3xl

            border
            border-amber-200

            bg-amber-50

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
            <div>
              <h3
                className="
                  text-xl
                  font-bold

                  text-amber-900
                "
              >
                Deactivate Account
              </h3>

              <p
                className="
                  mt-2

                  max-w-2xl

                  text-amber-800
                "
              >
                Temporarily disable your
                account. You can reactivate
                it anytime by signing in
                again.
              </p>
            </div>

            <button
              onClick={onDeactivate}
              className="
                rounded-xl

                bg-amber-500

                px-6
                py-3

                font-medium

                text-white

                transition

                hover:bg-amber-600
              "
            >
              Deactivate
            </button>
          </div>
        </div>

        {/* Delete */}

        <div
          className="
            rounded-3xl

            border-2
            border-red-300

            bg-red-50

            p-8
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
            <div>
              <h3
                className="
                  text-2xl
                  font-bold

                  text-red-700
                "
              >
                Delete Account Permanently
              </h3>

              <p
                className="
                  mt-3

                  max-w-2xl

                  text-red-600
                "
              >
                This action permanently
                removes your CoachCoaching
                account, certificates,
                sessions, saved mentors,
                profile data and all related
                information.

                This action cannot be
                undone.
              </p>
            </div>

            <button
              onClick={onDeleteAccount}
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
              Delete Account
            </button>
          </div>
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
          border-red-200

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

              text-red-700
            "
          >
            Before You Continue
          </h4>

          <p
            className="
              mt-2

              max-w-2xl

              text-sm

              text-slate-500
            "
          >
            We strongly recommend exporting
            your data before deactivating or
            permanently deleting your
            account. Deleted accounts,
            certificates, learning progress,
            mentor history and personal data
            cannot be recovered.
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

              bg-red-100

              px-4
              py-2

              text-sm
              font-medium

              text-red-700
            "
          >
            <AlertTriangle size={16} />

            Irreversible Actions
          </div>

          <div
            className="
              inline-flex
              items-center
              gap-2

              rounded-full

              bg-amber-100

              px-4
              py-2

              text-sm
              font-medium

              text-amber-700
            "
          >
            <ShieldAlert size={16} />

            Backup Recommended
          </div>
        </div>
      </div>

      {/* Final Warning */}

      <div
        className="
          mt-8

          rounded-3xl

          border
          border-red-200

          bg-gradient-to-r
          from-red-50
          to-rose-50

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
            <ShieldAlert
              size={28}
              className="
                text-red-600
              "
            />
          </div>

          <div>
            <h3
              className="
                text-lg
                font-bold

                text-red-700
              "
            >
              Important Notice
            </h3>

            <p
              className="
                mt-2

                leading-7

                text-slate-600
              "
            >
              Permanent account deletion
              removes your profile, enrolled
              programs, mentorship sessions,
              certificates, achievements,
              saved mentors, settings and
              every piece of associated data
              from CoachCoaching. This
              operation cannot be reversed,
              so please make sure you have
              exported everything you need
              before continuing.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default DangerZone;