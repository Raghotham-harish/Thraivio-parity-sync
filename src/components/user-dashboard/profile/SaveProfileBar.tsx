import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  Save,
} from "lucide-react";

interface SaveProfileBarProps {
  hasChanges: boolean;

  saving: boolean;

  onSave: () => void;

  onDiscard: () => void;
}

const SaveProfileBar = ({
  hasChanges,
  saving,
  onSave,
  onDiscard,
}: SaveProfileBarProps) => {
  if (!hasChanges) return null;

  return (
    <div
      className="
        fixed

        bottom-6
        left-1/2

        z-50

        w-[95%]
        max-w-5xl

        -translate-x-1/2

        rounded-3xl

        border
        border-slate-200

        bg-white/95

        backdrop-blur-xl

        shadow-2xl
      "
    >
      <div
        className="
          flex
          flex-col

          gap-6

          p-6

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

              bg-amber-50
            "
          >
            <AlertCircle
              size={26}
              className="
                text-amber-600
              "
            />
          </div>

          <div>

            <h3
              className="
                text-lg
                font-semibold
              "
            >
              Unsaved Changes
            </h3>

            <p
              className="
                mt-1

                max-w-xl

                text-sm

                text-slate-500
              "
            >
              You have unsaved profile
              changes. Save them now to
              update your account across
              CoachCoaching.
            </p>

          </div>

        </div>

        {/* Right */}

        <div
          className="
            flex
            flex-col

            gap-3

            sm:flex-row
          "
        >
          <button
            onClick={onDiscard}
            disabled={saving}
            className="
              rounded-xl

              border
              border-slate-200

              px-6
              py-3

              font-medium

              transition

              hover:bg-slate-50

              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          >
            Discard Changes
          </button>
                    <button
            onClick={onSave}
            disabled={saving}
            className="
              inline-flex
              items-center
              justify-center

              gap-2

              rounded-xl

              bg-blue-600

              px-6
              py-3

              font-medium

              text-white

              transition

              hover:bg-blue-700

              disabled:cursor-not-allowed
              disabled:opacity-70
            "
          >
            {saving ? (
              <>
                <Loader2
                  size={18}
                  className="
                    animate-spin
                  "
                />

                Saving...
              </>
            ) : (
              <>
                <Save size={18} />

                Save Changes
              </>
            )}
          </button>
        </div>
      </div>

      {/* Bottom Status */}

      <div
        className="
          flex
          items-center
          justify-center

          gap-2

          border-t
          border-slate-200

          bg-slate-50

          px-6
          py-4

          text-sm

          text-slate-600
        "
      >
        <CheckCircle2
          size={16}
          className="
            text-green-600
          "
        />

        Your changes will be securely
        saved and synced across your
        CoachCoaching account.
      </div>
    </div>
  );
};

export default SaveProfileBar;