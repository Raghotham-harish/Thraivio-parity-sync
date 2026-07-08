import type { MentorSettings } from "@/types/mentor-settings";

interface PrivacySettingsCardProps {
  settings: MentorSettings;

  setSettings: React.Dispatch<
    React.SetStateAction<MentorSettings>
  >;
}

const PrivacySettingsCard = ({
  settings,
  setSettings,
}: PrivacySettingsCardProps) => {
  return (
    <div
      className="
        bg-white

        border
        border-slate-200

        rounded-3xl

        p-6
      "
    >
      <div className="mb-6">

        <h2
          className="
            text-2xl
            font-bold
          "
        >
          Privacy Settings
        </h2>

        <p
          className="
            text-slate-500
            mt-2
          "
        >
          Control what information is visible
          on your public mentor profile.
        </p>

      </div>

      <div className="space-y-5">

        <div className="flex items-center justify-between border rounded-2xl p-4">

          <div>
            <h4 className="font-semibold">
              Show Email Address
            </h4>

            <p className="text-sm text-slate-500">
              Display email publicly.
            </p>
          </div>

          <input
            type="checkbox"
            checked={settings.showEmail}
            onChange={(e) =>
              setSettings({
                ...settings,
                showEmail:
                  e.target.checked,
              })
            }
            className="h-5 w-5"
          />

        </div>

        <div className="flex items-center justify-between border rounded-2xl p-4">

          <div>
            <h4 className="font-semibold">
              Show Phone Number
            </h4>

            <p className="text-sm text-slate-500">
              Display phone publicly.
            </p>
          </div>

          <input
            type="checkbox"
            checked={settings.showPhone}
            onChange={(e) =>
              setSettings({
                ...settings,
                showPhone:
                  e.target.checked,
              })
            }
            className="h-5 w-5"
          />

        </div>

        <div className="flex items-center justify-between border rounded-2xl p-4">

          <div>
            <h4 className="font-semibold">
              Public Profile
            </h4>

            <p className="text-sm text-slate-500">
              Allow profile visibility.
            </p>
          </div>

          <input
            type="checkbox"
            checked={settings.publicProfile}
            onChange={(e) =>
              setSettings({
                ...settings,
                publicProfile:
                  e.target.checked,
              })
            }
            className="h-5 w-5"
          />

        </div>

        <div className="flex items-center justify-between border rounded-2xl p-4">

          <div>
            <h4 className="font-semibold">
              Search Visibility
            </h4>

            <p className="text-sm text-slate-500">
              Show profile in mentor search.
            </p>
          </div>

          <input
            type="checkbox"
            checked={
              settings.searchVisibility
            }
            onChange={(e) =>
              setSettings({
                ...settings,
                searchVisibility:
                  e.target.checked,
              })
            }
            className="h-5 w-5"
          />

        </div>

      </div>

    </div>
  );
};

export default PrivacySettingsCard;