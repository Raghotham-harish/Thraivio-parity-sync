import {
  Settings,
  ShieldCheck,
} from "lucide-react";

interface SettingsHeaderProps {
  completion: number;

  activeSection: string;
}

const SettingsHeader = ({
  completion,
  activeSection,
}: SettingsHeaderProps) => {
  return (
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
          <Settings size={16} />

          Settings
        </div>

        <h1
          className="
            mt-5

            text-4xl
            font-bold
          "
        >
          Account Settings
        </h1>

        <p
          className="
            mt-3

            max-w-3xl

            text-slate-500
          "
        >
          Manage your account preferences,
          security, notifications,
          privacy, connected accounts and
          personalize your Thraivio
          experience.
        </p>
      </div>

      {/* Right */}

      <div
        className="
          w-full
          lg:w-[360px]

          rounded-[30px]

          border
          border-slate-200

          bg-white

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
          <div>
            <p
              className="
                text-sm
                text-slate-500
              "
            >
              Settings Completion
            </p>

            <h3
              className="
                mt-2

                text-4xl
                font-bold

                text-blue-600
              "
            >
              {completion}%
            </h3>
          </div>

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
        </div>

        {/* Progress */}

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
              from-blue-600
              to-indigo-600

              transition-all
              duration-500
            "
            style={{
              width: `${completion}%`,
            }}
          />
        </div>

        <div
          className="
            mt-5

            flex
            items-center
            justify-between
          "
        >
          <div>
            <p
              className="
                text-sm
                text-slate-500
              "
            >
              Active Section
            </p>

            <h4
              className="
                mt-1

                font-semibold
              "
            >
              {activeSection}
            </h4>
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
            Secure
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsHeader;