import {
  X,
  User,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

interface EditProfileDialogProps {
  open: boolean;

  profile: {
    fullName: string;
    headline: string;
    email: string;
    phone: string;
    location: string;
  };

  onClose: () => void;

  onChange: (
    field: string,
    value: string
  ) => void;

  onSave: () => void;
}

const EditProfileDialog = ({
  open,
  profile,
  onClose,
  onChange,
  onSave,
}: EditProfileDialogProps) => {
  if (!open) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-50

        flex
        items-center
        justify-center

        bg-black/50

        p-6
      "
    >
      <div
        className="
          w-full
          max-w-3xl

          rounded-[32px]

          bg-white

          shadow-2xl
        "
      >
        {/* Header */}

        <div
          className="
            flex
            items-center
            justify-between

            border-b
            border-slate-200

            p-8
          "
        >
          <div>

            <h2
              className="
                text-3xl
                font-bold
              "
            >
              Edit Profile
            </h2>

            <p
              className="
                mt-2

                text-slate-500
              "
            >
              Update your profile information.
            </p>

          </div>

          <button
            onClick={onClose}
            className="
              flex
              h-12
              w-12

              items-center
              justify-center

              rounded-xl

              transition

              hover:bg-slate-100
            "
          >
            <X size={22} />
          </button>
        </div>

        {/* Body */}

        <div
          className="
            grid

            gap-6

            p-8

            md:grid-cols-2
          "
        >
          {/* Full Name */}

          <div>
            <label className="mb-2 block text-sm font-medium">
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
                value={profile.fullName}
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

                  focus:border-blue-500
                  focus:ring-2
                  focus:ring-blue-100
                "
              />
            </div>
          </div>

          {/* Headline */}

          <div>
            <label className="mb-2 block text-sm font-medium">
              Headline
            </label>

            <input
              type="text"
              value={profile.headline}
              onChange={(e) =>
                onChange(
                  "headline",
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

                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-100
              "
            />
          </div>
                    {/* Email */}

          <div>
            <label className="mb-2 block text-sm font-medium">
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
                value={profile.email}
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
            <label className="mb-2 block text-sm font-medium">
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
                value={profile.phone}
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

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium">
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
                value={profile.location}
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
        </div>
                {/* Footer */}

        <div
          className="
            flex
            flex-col-reverse
            gap-4

            border-t
            border-slate-200

            p-8

            sm:flex-row
            sm:items-center
            sm:justify-end
          "
        >
          <button
            onClick={onClose}
            className="
              rounded-xl

              border
              border-slate-200

              px-6
              py-3

              font-medium

              transition

              hover:bg-slate-50
            "
          >
            Cancel
          </button>

          <button
            onClick={onSave}
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
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileDialog;