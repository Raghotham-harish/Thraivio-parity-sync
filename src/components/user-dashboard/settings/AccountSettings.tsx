import {
  Camera,
  Globe,
  Mail,
  MapPin,
  Phone,
  User,
} from "lucide-react";

import type {
  AccountSettings as AccountSettingsType,
} from "@/types/settings";

interface AccountSettingsProps {
  account: AccountSettingsType;

  onChange: (
    field: keyof AccountSettingsType,
    value: string
  ) => void;

  onUploadPhoto: () => void;
}

const AccountSettings = ({
  account,
  onChange,
  onUploadPhoto,
}: AccountSettingsProps) => {
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
          lg:flex-row

          lg:items-center
          lg:justify-between

          gap-6
        "
      >
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
            <User size={16} />

            Account Information
          </div>

          <h2
            className="
              mt-5

              text-3xl
              font-bold
            "
          >
            Personal Details
          </h2>

          <p
            className="
              mt-3

              max-w-2xl

              text-slate-500
            "
          >
            Update your personal
            information, contact details
            and profile preferences.
          </p>

        </div>
                {/* Profile Card */}

        <div
          className="
            flex
            h-20
            w-20

            items-center
            justify-center

            rounded-[28px]

            bg-blue-50
          "
        >
          <User
            size={34}
            className="
              text-blue-600
            "
          />
        </div>
      </div>

      {/* Profile Photo */}

      <div
        className="
          mt-10

          flex
          flex-col

          items-center

          rounded-[28px]

          bg-slate-50

          p-8
        "
      >
        <div className="relative">

          <img
            src={account.profileImage}
            alt={account.fullName}
            className="
              h-36
              w-36

              rounded-full

              border-4
              border-white

              object-cover

              shadow-xl
            "
          />

          <button
            onClick={onUploadPhoto}
            className="
              absolute

              bottom-2
              right-2

              flex
              h-11
              w-11

              items-center
              justify-center

              rounded-xl

              bg-blue-600

              text-white

              shadow-lg

              transition

              hover:bg-blue-700
            "
          >
            <Camera size={18} />
          </button>

        </div>

        <h3
          className="
            mt-5

            text-2xl
            font-bold
          "
        >
          {account.fullName}
        </h3>

        <p
          className="
            mt-2

            text-slate-500
          "
        >
          {account.headline}
        </p>

        <button
          onClick={onUploadPhoto}
          className="
            mt-6

            inline-flex
            items-center
            gap-2

            rounded-xl

            bg-blue-600

            px-5
            py-3

            font-medium

            text-white

            transition

            hover:bg-blue-700
          "
        >
          <Camera size={18} />

          Change Profile Photo
        </button>
      </div>

      {/* Form */}

      <div
        className="
          mt-10

          grid

          gap-6

          md:grid-cols-2
        "
      >
        {/* Full Name */}

        <div>

          <label
            className="
              mb-2

              block

              text-sm
              font-medium
            "
          >
            Full Name
          </label>

          <div className="relative">

            <User
              size={18}
              className="
                absolute

                left-4
                top-1/2

                -translate-y-1/2

                text-slate-400
              "
            />

            <input
              type="text"
              value={account.fullName}
              onChange={(e) =>
                onChange(
                  "fullName",
                  e.target.value
                )
              }
              className="
                w-full

                rounded-2xl

                border
                border-slate-200

                py-3.5
                pl-12
                pr-4

                outline-none

                transition

                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-100
              "
            />

          </div>

        </div>

        {/* Username */}

        <div>

          <label
            className="
              mb-2

              block

              text-sm
              font-medium
            "
          >
            Username
          </label>

          <input
            type="text"
            value={account.username}
            onChange={(e) =>
              onChange(
                "username",
                e.target.value
              )
            }
            className="
              w-full

              rounded-2xl

              border
              border-slate-200

              px-4
              py-3.5

              outline-none

              transition

              focus:border-blue-500
              focus:ring-2
              focus:ring-blue-100
            "
          />

        </div>

                {/* Headline */}

        <div className="md:col-span-2">

          <label
            className="
              mb-2

              block

              text-sm
              font-medium
            "
          >
            Professional Headline
          </label>

          <input
            type="text"
            value={account.headline}
            onChange={(e) =>
              onChange(
                "headline",
                e.target.value
              )
            }
            placeholder="Frontend Developer • React • TypeScript"
            className="
              w-full

              rounded-2xl

              border
              border-slate-200

              px-4
              py-3.5

              outline-none

              transition

              focus:border-blue-500
              focus:ring-2
              focus:ring-blue-100
            "
          />

        </div>

        {/* Email */}

        <div>

          <label
            className="
              mb-2

              block

              text-sm
              font-medium
            "
          >
            Email Address
          </label>

          <div className="relative">

            <Mail
              size={18}
              className="
                absolute

                left-4
                top-1/2

                -translate-y-1/2

                text-slate-400
              "
            />

            <input
              type="email"
              value={account.email}
              onChange={(e) =>
                onChange(
                  "email",
                  e.target.value
                )
              }
              className="
                w-full

                rounded-2xl

                border
                border-slate-200

                py-3.5
                pl-12
                pr-4

                outline-none

                transition

                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-100
              "
            />

          </div>

        </div>

        {/* Phone */}

        <div>

          <label
            className="
              mb-2

              block

              text-sm
              font-medium
            "
          >
            Phone Number
          </label>

          <div className="relative">

            <Phone
              size={18}
              className="
                absolute

                left-4
                top-1/2

                -translate-y-1/2

                text-slate-400
              "
            />

            <input
              type="tel"
              value={account.phone}
              onChange={(e) =>
                onChange(
                  "phone",
                  e.target.value
                )
              }
              className="
                w-full

                rounded-2xl

                border
                border-slate-200

                py-3.5
                pl-12
                pr-4

                outline-none

                transition

                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-100
              "
            />

          </div>

        </div>

        {/* Location */}

        <div>

          <label
            className="
              mb-2

              block

              text-sm
              font-medium
            "
          >
            Location
          </label>

          <div className="relative">

            <MapPin
              size={18}
              className="
                absolute

                left-4
                top-1/2

                -translate-y-1/2

                text-slate-400
              "
            />

            <input
              type="text"
              value={account.location}
              onChange={(e) =>
                onChange(
                  "location",
                  e.target.value
                )
              }
              className="
                w-full

                rounded-2xl

                border
                border-slate-200

                py-3.5
                pl-12
                pr-4

                outline-none

                transition

                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-100
              "
            />

          </div>

        </div>

        {/* Language */}

        <div>

          <label
            className="
              mb-2

              block

              text-sm
              font-medium
            "
          >
            Language
          </label>

          <select
            value={account.language}
            onChange={(e) =>
              onChange(
                "language",
                e.target.value
              )
            }
            className="
              w-full

              rounded-2xl

              border
              border-slate-200

              bg-white

              px-4
              py-3.5

              outline-none

              transition

              focus:border-blue-500
              focus:ring-2
              focus:ring-blue-100
            "
          >
            <option value="English">
              English
            </option>

            <option value="Hindi">
              Hindi
            </option>
          </select>

        </div>

        {/* Timezone */}

        <div className="md:col-span-2">

          <label
            className="
              mb-2

              block

              text-sm
              font-medium
            "
          >
            Timezone
          </label>

          <div className="relative">

            <Globe
              size={18}
              className="
                absolute

                left-4
                top-1/2

                -translate-y-1/2

                text-slate-400
              "
            />

            <select
              value={account.timezone}
              onChange={(e) =>
                onChange(
                  "timezone",
                  e.target.value
                )
              }
              className="
                w-full

                rounded-2xl

                border
                border-slate-200

                bg-white

                py-3.5
                pl-12
                pr-4

                outline-none

                transition

                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-100
              "
            >
              <option value="Asia/Kolkata">
                Asia/Kolkata (IST)
              </option>

              <option value="UTC">
                UTC
              </option>
            </select>

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
            Account Information
          </h4>

          <p
            className="
              mt-2

              max-w-2xl

              text-sm

              text-slate-500
            "
          >
            Keep your personal information
            accurate and up to date. This
            information is used across your
            CoachCoaching profile, mentorship
            sessions and learning activities.
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

              bg-green-50

              px-4
              py-2

              text-sm
              font-medium

              text-green-700
            "
          >
            ✓ Account Verified
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
            Language:
            {" "}
            {account.language}
          </div>

          <div
            className="
              rounded-full

              bg-slate-100

              px-4
              py-2

              text-sm
              font-medium

              text-slate-700
            "
          >
            {account.timezone}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;