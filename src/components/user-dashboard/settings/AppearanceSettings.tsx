import {
  Check,
  Monitor,
  Moon,
  Palette,
  Sparkles,
  Sun,
} from "lucide-react";

import type {
  AppearanceSettings as AppearanceSettingsType,
} from "@/types/settings";

interface AppearanceSettingsProps {
  appearance: AppearanceSettingsType;

  onChange: (
    field: keyof AppearanceSettingsType,
    value: string | boolean
  ) => void;
}

const AppearanceSettings = ({
  appearance,
  onChange,
}: AppearanceSettingsProps) => {
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

              bg-violet-50

              px-4
              py-2

              text-sm
              font-medium

              text-violet-700
            "
          >
            <Palette size={16} />

            Appearance
          </div>

          <h2
            className="
              mt-5

              text-3xl
              font-bold
            "
          >
            Customize Your Experience
          </h2>

          <p
            className="
              mt-3

              max-w-2xl

              text-slate-500
            "
          >
            Personalize the appearance of
            CoachCoaching with themes,
            colors, layout preferences and
            accessibility options.
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

            bg-violet-50
          "
        >
          <Sparkles
            size={34}
            className="
              text-violet-600
            "
          />
        </div>

      </div>

      {/* Theme Selection */}

      <div
        className="
          mt-10

          grid

          gap-6

          lg:grid-cols-3
        "
      >
                {/* Light Theme */}

        <button
          onClick={() =>
            onChange("theme", "light")
          }
          className={`
            relative

            overflow-hidden

            rounded-[28px]

            border-2

            p-6

            text-left

            transition-all
            duration-300

            hover:-translate-y-1
            hover:shadow-xl

            ${
              appearance.theme === "light"
                ? `
                  border-violet-500
                  bg-violet-50
                `
                : `
                  border-slate-200
                  bg-white
                `
            }
          `}
        >
          {appearance.theme ===
            "light" && (
            <div
              className="
                absolute

                right-5
                top-5
              "
            >
              <div
                className="
                  flex
                  h-8
                  w-8

                  items-center
                  justify-center

                  rounded-full

                  bg-violet-600

                  text-white
                "
              >
                <Check size={16} />
              </div>
            </div>
          )}

          <div
            className="
              flex
              h-16
              w-16

              items-center
              justify-center

              rounded-3xl

              bg-amber-100
            "
          >
            <Sun
              size={30}
              className="
                text-amber-600
              "
            />
          </div>

          <h3
            className="
              mt-6

              text-2xl
              font-bold
            "
          >
            Light Theme
          </h3>

          <p
            className="
              mt-3

              text-slate-500
            "
          >
            Bright interface with clean
            backgrounds for daytime use.
          </p>
        </button>

        {/* Dark Theme */}

        <button
          onClick={() =>
            onChange("theme", "dark")
          }
          className={`
            relative

            overflow-hidden

            rounded-[28px]

            border-2

            p-6

            text-left

            transition-all
            duration-300

            hover:-translate-y-1
            hover:shadow-xl

            ${
              appearance.theme === "dark"
                ? `
                  border-violet-500
                  bg-violet-50
                `
                : `
                  border-slate-200
                  bg-white
                `
            }
          `}
        >
          {appearance.theme ===
            "dark" && (
            <div
              className="
                absolute

                right-5
                top-5
              "
            >
              <div
                className="
                  flex
                  h-8
                  w-8

                  items-center
                  justify-center

                  rounded-full

                  bg-violet-600

                  text-white
                "
              >
                <Check size={16} />
              </div>
            </div>
          )}

          <div
            className="
              flex
              h-16
              w-16

              items-center
              justify-center

              rounded-3xl

              bg-slate-900
            "
          >
            <Moon
              size={30}
              className="
                text-white
              "
            />
          </div>

          <h3
            className="
              mt-6

              text-2xl
              font-bold
            "
          >
            Dark Theme
          </h3>

          <p
            className="
              mt-3

              text-slate-500
            "
          >
            Comfortable viewing experience
            in low-light environments.
          </p>
        </button>

        {/* System Theme */}

        <button
          onClick={() =>
            onChange("theme", "system")
          }
          className={`
            relative

            overflow-hidden

            rounded-[28px]

            border-2

            p-6

            text-left

            transition-all
            duration-300

            hover:-translate-y-1
            hover:shadow-xl

            ${
              appearance.theme ===
              "system"
                ? `
                  border-violet-500
                  bg-violet-50
                `
                : `
                  border-slate-200
                  bg-white
                `
            }
          `}
        >
          {appearance.theme ===
            "system" && (
            <div
              className="
                absolute

                right-5
                top-5
              "
            >
              <div
                className="
                  flex
                  h-8
                  w-8

                  items-center
                  justify-center

                  rounded-full

                  bg-violet-600

                  text-white
                "
              >
                <Check size={16} />
              </div>
            </div>
          )}

          <div
            className="
              flex
              h-16
              w-16

              items-center
              justify-center

              rounded-3xl

              bg-violet-100
            "
          >
            <Monitor
              size={30}
              className="
                text-violet-600
              "
            />
          </div>

          <h3
            className="
              mt-6

              text-2xl
              font-bold
            "
          >
            System Theme
          </h3>

          <p
            className="
              mt-3

              text-slate-500
            "
          >
            Automatically follows your
            operating system appearance.
          </p>
        </button>

      </div>

      {/* Custom Appearance */}

      <div
        className="
          mt-10

          space-y-6
        "
      >
                {/* Accent Color */}

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
            Accent Color
          </h3>

          <p
            className="
              mt-2

              text-slate-500
            "
          >
            Choose your preferred accent
            color across the platform.
          </p>

          <div
            className="
              mt-6

              flex
              flex-wrap

              gap-4
            "
          >
            {[
              "#2563EB",
              "#7C3AED",
              "#059669",
              "#EA580C",
              "#DC2626",
              "#DB2777",
            ].map((color) => (
              <button
                key={color}
                onClick={() =>
                  onChange(
                    "accentColor",
                    color
                  )
                }
                className={`
                  relative

                  h-14
                  w-14

                  rounded-full

                  border-4

                  transition-all

                  hover:scale-110

                  ${
                    appearance.accentColor ===
                    color
                      ? "border-slate-900"
                      : "border-white"
                  }
                `}
                style={{
                  backgroundColor: color,
                }}
              >
                {appearance.accentColor ===
                  color && (
                  <Check
                    size={20}
                    className="
                      absolute

                      left-1/2
                      top-1/2

                      -translate-x-1/2
                      -translate-y-1/2

                      text-white
                    "
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Font Size */}

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
            Font Size
          </h3>

          <div
            className="
              mt-6

              grid

              gap-4

              md:grid-cols-3
            "
          >
            {[
              "Small",
              "Medium",
              "Large",
            ].map((size) => (
              <button
                key={size}
                onClick={() =>
                  onChange(
                    "fontSize",
                    size.toLowerCase()
                  )
                }
                className={`
                  rounded-2xl

                  border

                  py-4

                  font-semibold

                  transition-all

                  ${
                    appearance.fontSize ===
                    size.toLowerCase()
                      ? `
                        border-violet-500
                        bg-violet-50
                        text-violet-700
                      `
                      : `
                        border-slate-200
                      `
                  }
                `}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Layout Density */}

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
            Layout Density
          </h3>

          <div
            className="
              mt-6

              flex

              gap-4
            "
          >
            {[
              "comfortable",
              "compact",
            ].map((layout) => (
              <button
                key={layout}
                onClick={() =>
                  onChange(
                    "layout",
                    layout
                  )
                }
                className={`
                  flex-1

                  rounded-2xl

                  border

                  py-4

                  font-semibold

                  capitalize

                  transition-all

                  ${
                    appearance.layout ===
                    layout
                      ? `
                        border-violet-500
                        bg-violet-50
                        text-violet-700
                      `
                      : `
                        border-slate-200
                      `
                  }
                `}
              >
                {layout}
              </button>
            ))}
          </div>
        </div>

        {/* Animations */}

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
              items-center
              justify-between
            "
          >
            <div>
              <h3
                className="
                  text-xl
                  font-bold
                "
              >
                Interface Animations
              </h3>

              <p
                className="
                  mt-2

                  text-slate-500
                "
              >
                Enable smooth animations
                across the application.
              </p>
            </div>

            <button
              onClick={() =>
                onChange(
                  "animations",
                  !appearance.animations
                )
              }
              className={`
                rounded-full

                px-6
                py-3

                font-medium

                transition

                ${
                  appearance.animations
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
              {appearance.animations
                ? "Enabled"
                : "Disabled"}
            </button>
          </div>
        </div>

        {/* Live Preview */}

        <div
          className="
            rounded-[32px]

            border
            border-slate-200

            bg-slate-50

            p-8
          "
        >
          <h3
            className="
              text-2xl
              font-bold
            "
          >
            Live Preview
          </h3>

          <p
            className="
              mt-2

              text-slate-500
            "
          >
            Preview how your interface
            preferences will look.
          </p>

          <div
            className="
              mt-8

              rounded-3xl

              bg-white

              p-6

              shadow-lg
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
                <h4
                  className="
                    text-xl
                    font-bold
                  "
                >
                  Dashboard Card
                </h4>

                <p
                  className="
                    mt-2

                    text-slate-500
                  "
                >
                  Preview using your current
                  appearance settings.
                </p>
              </div>

              <div
                className="
                  h-12
                  w-12

                  rounded-2xl
                "
                style={{
                  backgroundColor:
                    appearance.accentColor,
                }}
              />
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
            Personalized Experience
          </h4>

          <p
            className="
              mt-2

              max-w-2xl

              text-sm

              text-slate-500
            "
          >
            Your appearance preferences are
            automatically saved and applied
            across your CoachCoaching
            dashboard, providing a consistent
            experience on every device.
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

              bg-violet-50

              px-4
              py-2

              text-sm
              font-medium

              text-violet-700
            "
          >
            <div
              className="
                flex
                items-center
                gap-2
              "
            >
              <Palette size={16} />

              {appearance.theme
                .charAt(0)
                .toUpperCase() +
                appearance.theme.slice(1)}
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
            Font:
            {" "}
            {appearance.fontSize}
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
            Layout:
            {" "}
            {appearance.layout}
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
            Animation
            {" "}
            {appearance.animations
              ? "ON"
              : "OFF"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppearanceSettings;