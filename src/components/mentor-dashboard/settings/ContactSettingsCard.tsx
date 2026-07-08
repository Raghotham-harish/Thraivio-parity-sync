import type { MentorSettings } from "@/types/mentor-settings";

interface ContactSettingsCardProps {
  settings: MentorSettings;

  setSettings: React.Dispatch<
    React.SetStateAction<MentorSettings>
  >;
}

const ContactSettingsCard = ({
  settings,
  setSettings,
}: ContactSettingsCardProps) => {
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
          Contact Information
        </h2>

        <p
          className="
            text-slate-500
            mt-2
          "
        >
          Manage your contact and
          communication details.
        </p>

      </div>

      <div
        className="
          grid
          md:grid-cols-2
          gap-5
        "
      >
        <div>
          <label className="font-medium">
            Email Address
          </label>

          <input
            type="email"
            value={settings.email}
            onChange={(e) =>
              setSettings({
                ...settings,
                email:
                  e.target.value,
              })
            }
            className="
              w-full
              mt-2

              border
              rounded-xl

              p-4
            "
          />
        </div>

        <div>
          <label className="font-medium">
            Phone Number
          </label>

          <input
            type="text"
            value={settings.phone}
            onChange={(e) =>
              setSettings({
                ...settings,
                phone:
                  e.target.value,
              })
            }
            className="
              w-full
              mt-2

              border
              rounded-xl

              p-4
            "
          />
        </div>

        <div>
          <label className="font-medium">
            Location
          </label>

          <input
            type="text"
            value={settings.location}
            onChange={(e) =>
              setSettings({
                ...settings,
                location:
                  e.target.value,
              })
            }
            className="
              w-full
              mt-2

              border
              rounded-xl

              p-4
            "
          />
        </div>

        <div>
          <label className="font-medium">
            Website
          </label>

          <input
            type="url"
            value={settings.website}
            onChange={(e) =>
              setSettings({
                ...settings,
                website:
                  e.target.value,
              })
            }
            className="
              w-full
              mt-2

              border
              rounded-xl

              p-4
            "
          />
        </div>

      </div>

    </div>
  );
};

export default ContactSettingsCard;