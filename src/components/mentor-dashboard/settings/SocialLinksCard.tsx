import type { MentorSettings } from "@/types/mentor-settings";

interface SocialLinksCardProps {
  settings: MentorSettings;

  setSettings: React.Dispatch<
    React.SetStateAction<MentorSettings>
  >;
}

const SocialLinksCard = ({
  settings,
  setSettings,
}: SocialLinksCardProps) => {
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
          Social Links
        </h2>

        <p
          className="
            text-slate-500
            mt-2
          "
        >
          Connect your professional
          social profiles.
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
            LinkedIn
          </label>

          <input
            type="url"
            value={settings.linkedIn}
            onChange={(e) =>
              setSettings({
                ...settings,
                linkedIn:
                  e.target.value,
              })
            }
            placeholder="https://linkedin.com/in/..."
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
            Twitter / X
          </label>

          <input
            type="url"
            value={settings.twitter}
            onChange={(e) =>
              setSettings({
                ...settings,
                twitter:
                  e.target.value,
              })
            }
            placeholder="https://x.com/..."
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
            YouTube
          </label>

          <input
            type="url"
            value={settings.youtube}
            onChange={(e) =>
              setSettings({
                ...settings,
                youtube:
                  e.target.value,
              })
            }
            placeholder="https://youtube.com/..."
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
            GitHub
          </label>

          <input
            type="url"
            value={settings.github}
            onChange={(e) =>
              setSettings({
                ...settings,
                github:
                  e.target.value,
              })
            }
            placeholder="https://github.com/..."
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
            Portfolio Website
          </label>

          <input
            type="url"
            value={settings.portfolio}
            onChange={(e) =>
              setSettings({
                ...settings,
                portfolio:
                  e.target.value,
              })
            }
            placeholder="https://yourportfolio.com"
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

export default SocialLinksCard;