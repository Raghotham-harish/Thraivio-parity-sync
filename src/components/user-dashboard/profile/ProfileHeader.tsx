import {
  User,
  ShieldCheck,
} from "lucide-react";

interface ProfileHeaderProps {
  profileCompletion: number;
}

const ProfileHeader = ({
  profileCompletion,
}: ProfileHeaderProps) => {
  return (
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
      {/* Left */}

      <div>
        <div
          className="
            inline-flex
            items-center
            gap-2

            bg-blue-50
            text-blue-700

            px-4
            py-2

            rounded-full

            text-sm
            font-medium
          "
        >
          <User size={16} />

          My Profile
        </div>

        <h1
          className="
            text-4xl
            font-bold

            mt-4
          "
        >
          Learning Profile
        </h1>

        <p
          className="
            mt-3

            max-w-2xl

            text-slate-500
          "
        >
          Manage your personal profile,
          education, skills, interests,
          learning goals and showcase
          your achievements throughout
          your learning journey.
        </p>
      </div>

      {/* Right */}

      <div
        className="
          bg-white

          border
          border-slate-200

          rounded-3xl

          px-6
          py-5
        "
      >
        <div
          className="
            flex
            items-center
            gap-3
          "
        >
          <div
            className="
              h-12
              w-12

              rounded-2xl

              bg-blue-50

              flex
              items-center
              justify-center
            "
          >
            <ShieldCheck
              size={22}
              className="
                text-blue-600
              "
            />
          </div>

          <div>
            <p
              className="
                text-sm
                text-slate-500
              "
            >
              Profile Completion
            </p>

            <h3
              className="
                text-2xl
                font-bold
              "
            >
              {profileCompletion}%
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;