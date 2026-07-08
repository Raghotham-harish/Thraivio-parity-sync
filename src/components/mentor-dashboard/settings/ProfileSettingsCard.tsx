import type { MentorSettings } from "@/types/mentor-settings";

interface ProfileSettingsCardProps {
  settings: MentorSettings;

  setSettings: React.Dispatch<
    React.SetStateAction<MentorSettings>
  >;
}

const ProfileSettingsCard = ({
  settings,
  setSettings,
}: ProfileSettingsCardProps) => {
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
          Profile Information
        </h2>

        <p
          className="
            text-slate-500
            mt-2
          "
        >
          Update your mentor profile
          information.
        </p>
      </div>

      {/* Avatar */}

      <div
        className="
          flex
          items-center
          gap-5

          mb-8
        "
      >
        <img
          src={settings.profileImage}
          alt={settings.name}
          className="
            h-24
            w-24

            rounded-full

            object-cover

            border-4
            border-blue-100
          "
        />

        <div>
          <button
            className="
              bg-blue-600
              hover:bg-blue-700

              text-white

              px-5
              py-3

              rounded-xl

              font-medium
            "
          >
            Change Photo
          </button>

          <p
            className="
              text-xs
              text-slate-500
              mt-2
            "
          >
            JPG, PNG up to 5MB
          </p>
        </div>
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
            Full Name
          </label>

          <input
            type="text"
            value={settings.name}
            onChange={(e) =>
              setSettings({
                ...settings,
                name:
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
            Company
          </label>

          <input
            type="text"
            value={settings.company}
            onChange={(e) =>
              setSettings({
                ...settings,
                company:
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
            Headline
          </label>

          <input
            type="text"
            value={settings.headline}
            onChange={(e) =>
              setSettings({
                ...settings,
                headline:
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
            Expertise
          </label>

          <input
            type="text"
            value={settings.expertise}
            onChange={(e) =>
              setSettings({
                ...settings,
                expertise:
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

        <div className="md:col-span-2">
          <label className="font-medium">
            Languages
          </label>

          <input
            type="text"
            value={settings.languages}
            onChange={(e) =>
              setSettings({
                ...settings,
                languages:
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

        <div className="md:col-span-2">
          <label className="font-medium">
            About
          </label>

          <textarea
            rows={6}
            value={settings.about}
            onChange={(e) =>
              setSettings({
                ...settings,
                about:
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

export default ProfileSettingsCard;