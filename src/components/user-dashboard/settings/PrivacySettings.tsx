import {
  Eye,
  EyeOff,
  Shield,
  Lock,
  Globe,
  ShieldCheck,
} from "lucide-react";

import type {
  PrivacySettings as PrivacySettingsType,
} from "@/types/settings";

interface PrivacySettingsProps {
  privacy: PrivacySettingsType;

  onToggle: (
    field: keyof PrivacySettingsType
  ) => void;
}

const PrivacySettings = ({
  privacy,
  onToggle,
}: PrivacySettingsProps) => {
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

              bg-emerald-50

              px-4
              py-2

              text-sm
              font-medium

              text-emerald-700
            "
          >
            <Shield size={16} />

            Privacy Settings
          </div>

          <h2
            className="
              mt-5

              text-3xl
              font-bold
            "
          >
            Privacy & Visibility
          </h2>

          <p
            className="
              mt-3

              max-w-2xl

              text-slate-500
            "
          >
            Control who can view your
            profile, learning progress,
            achievements and personal
            information across the
            Thraivio platform.
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

            bg-emerald-50
          "
        >
          <ShieldCheck
            size={34}
            className="
              text-emerald-600
            "
          />
        </div>

      </div>

      {/* Privacy Controls */}

      <div
        className="
          mt-10

          space-y-6
        "
      >
                {/* Profile Visibility */}

        <div
          className="
            rounded-3xl

            border
            border-slate-200

            p-6

            transition-all

            hover:border-emerald-200
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

                  bg-emerald-50
                "
              >
                {privacy.profileVisible ? (
                  <Eye
                    size={30}
                    className="text-emerald-600"
                  />
                ) : (
                  <EyeOff
                    size={30}
                    className="text-slate-600"
                  />
                )}
              </div>

              <div>
                <h3
                  className="
                    text-xl
                    font-bold
                  "
                >
                  Public Profile
                </h3>

                <p
                  className="
                    mt-2

                    text-slate-500
                  "
                >
                  Allow other learners and
                  mentors to discover your
                  profile.
                </p>
              </div>
            </div>

            <button
              onClick={() =>
                onToggle(
                  "profileVisible"
                )
              }
              className={`
                rounded-full

                px-6
                py-3

                font-medium

                transition

                ${
                  privacy.profileVisible
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
              {privacy.profileVisible
                ? "Visible"
                : "Hidden"}
            </button>
          </div>
        </div>

        {/* Education Visibility */}

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

              gap-6
            "
          >
            <div>
              <h3
                className="
                  text-xl
                  font-bold
                "
              >
                Education
              </h3>

              <p
                className="
                  mt-2

                  text-slate-500
                "
              >
                Display your education
                history on your public
                profile.
              </p>
            </div>

            <button
              onClick={() =>
                onToggle(
                  "showEducation"
                )
              }
              className={`
                rounded-full

                px-6
                py-3

                font-medium

                transition

                ${
                  privacy.showEducation
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
              {privacy.showEducation
                ? "Visible"
                : "Hidden"}
            </button>
          </div>
        </div>

        {/* Skills Visibility */}

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

              gap-6
            "
          >
            <div>
              <h3
                className="
                  text-xl
                  font-bold
                "
              >
                Skills
              </h3>

              <p
                className="
                  mt-2

                  text-slate-500
                "
              >
                Show your technical skills
                to mentors and recruiters.
              </p>
            </div>

            <button
              onClick={() =>
                onToggle(
                  "showSkills"
                )
              }
              className={`
                rounded-full

                px-6
                py-3

                font-medium

                transition

                ${
                  privacy.showSkills
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
              {privacy.showSkills
                ? "Visible"
                : "Hidden"}
            </button>
          </div>
        </div>

        {/* Certificates Visibility */}

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

              gap-6
            "
          >
            <div>
              <h3
                className="
                  text-xl
                  font-bold
                "
              >
                Certificates
              </h3>

              <p
                className="
                  mt-2

                  text-slate-500
                "
              >
                Showcase earned
                certificates on your public
                learning profile.
              </p>
            </div>

            <button
              onClick={() =>
                onToggle(
                  "showCertificates"
                )
              }
              className={`
                rounded-full

                px-6
                py-3

                font-medium

                transition

                ${
                  privacy.showCertificates
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
              {privacy.showCertificates
                ? "Visible"
                : "Hidden"}
            </button>
          </div>
        </div>
                {/* Privacy Preferences */}

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
            Privacy Preferences
          </h3>

          <p
            className="
              mt-2

              text-slate-500
            "
          >
            Control how your activity and
            profile information are shared
            across Thraivio.
          </p>

          <div
            className="
              mt-8

              space-y-5
            "
          >
            {/* Saved Mentors */}

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
                  Saved Mentors
                </h4>

                <p
                  className="
                    mt-1

                    text-sm

                    text-slate-500
                  "
                >
                  Show mentors you've saved
                  on your profile.
                </p>
              </div>

              <button
                onClick={() =>
                  onToggle(
                    "showSavedMentors"
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
                    privacy.showSavedMentors
                      ? "bg-green-100 text-green-700"
                      : "bg-slate-100 text-slate-700"
                  }
                `}
              >
                {privacy.showSavedMentors
                  ? "Visible"
                  : "Hidden"}
              </button>
            </div>

            {/* Upcoming Sessions */}

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
                  Upcoming Sessions
                </h4>

                <p
                  className="
                    mt-1

                    text-sm

                    text-slate-500
                  "
                >
                  Display upcoming learning
                  sessions on your profile.
                </p>
              </div>

              <button
                onClick={() =>
                  onToggle(
                    "showUpcomingSessions"
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
                    privacy.showUpcomingSessions
                      ? "bg-green-100 text-green-700"
                      : "bg-slate-100 text-slate-700"
                  }
                `}
              >
                {privacy.showUpcomingSessions
                  ? "Visible"
                  : "Hidden"}
              </button>
            </div>

            {/* Search Visibility */}

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
              <div
                className="
                  flex
                  items-start
                  gap-4
                "
              >
                <Globe
                  size={24}
                  className="
                    text-blue-600
                  "
                />

                <div>
                  <h4
                    className="
                      font-semibold
                    "
                  >
                    Search Engine Visibility
                  </h4>

                  <p
                    className="
                      mt-1

                      text-sm

                      text-slate-500
                    "
                  >
                    Allow Google and other
                    search engines to index
                    your public profile.
                  </p>
                </div>
              </div>

              <button
                onClick={() =>
                  onToggle(
                    "searchEngineIndexing"
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
                    privacy.searchEngineIndexing
                      ? "bg-green-100 text-green-700"
                      : "bg-slate-100 text-slate-700"
                  }
                `}
              >
                {privacy.searchEngineIndexing
                  ? "Enabled"
                  : "Disabled"}
              </button>
            </div>

            {/* Analytics */}

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
                  Analytics & Usage Data
                </h4>

                <p
                  className="
                    mt-1

                    text-sm

                    text-slate-500
                  "
                >
                  Help improve the platform
                  by anonymously sharing
                  usage insights.
                </p>
              </div>

              <button
                onClick={() =>
                  onToggle(
                    "analytics"
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
                    privacy.analytics
                      ? "bg-green-100 text-green-700"
                      : "bg-slate-100 text-slate-700"
                  }
                `}
              >
                {privacy.analytics
                  ? "Enabled"
                  : "Disabled"}
              </button>
            </div>

            {/* Cookies */}

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
                  Personalized Cookies
                </h4>

                <p
                  className="
                    mt-1

                    text-sm

                    text-slate-500
                  "
                >
                  Improve your experience
                  using personalized cookies.
                </p>
              </div>

              <button
                onClick={() =>
                  onToggle(
                    "cookies"
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
                    privacy.cookies
                      ? "bg-green-100 text-green-700"
                      : "bg-slate-100 text-slate-700"
                  }
                `}
              >
                {privacy.cookies
                  ? "Enabled"
                  : "Disabled"}
              </button>
            </div>

            {/* Data Sharing */}

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
              <div
                className="
                  flex
                  items-start
                  gap-4
                "
              >
                <Lock
                  size={24}
                  className="
                    text-emerald-600
                  "
                />

                <div>
                  <h4
                    className="
                      font-semibold
                    "
                  >
                    Data Sharing
                  </h4>

                  <p
                    className="
                      mt-1

                      text-sm

                      text-slate-500
                    "
                  >
                    Share limited profile
                    information with trusted
                    Thraivio partners.
                  </p>
                </div>
              </div>

              <button
                onClick={() =>
                  onToggle(
                    "dataSharing"
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
                    privacy.dataSharing
                      ? "bg-green-100 text-green-700"
                      : "bg-slate-100 text-slate-700"
                  }
                `}
              >
                {privacy.dataSharing
                  ? "Enabled"
                  : "Disabled"}
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
            Privacy Protected
          </h4>

          <p
            className="
              mt-2

              max-w-2xl

              text-sm

              text-slate-500
            "
          >
            Your privacy preferences are
            securely stored and automatically
            synchronized across all your
            Thraivio devices. You can
            update these settings anytime.
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

              bg-emerald-50

              px-4
              py-2

              text-sm
              font-medium

              text-emerald-700
            "
          >
            <Shield size={16} />

            Privacy Enabled
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
            <Globe size={16} />

            Secure Profile
          </div>

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
            <Lock size={16} />

            Protected Data
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacySettings;