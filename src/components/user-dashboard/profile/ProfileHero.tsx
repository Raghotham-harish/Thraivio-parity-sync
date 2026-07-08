import {
  Camera,
  Edit3,
  Globe,
  Mail,
  MapPin,
  User,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";

import type { UserProfile } from "@/types/userProfile";

interface ProfileHeroProps {
  profile: UserProfile;

  profileCompletion: number;

  onEditProfile: () => void;

  onUploadPhoto: () => void;
}

const ProfileHero = ({
  profile,
  profileCompletion,
  onEditProfile,
  onUploadPhoto,
}: ProfileHeroProps) => {
  return (
    <div
      className="
        overflow-hidden

        rounded-[32px]

        border
        border-slate-200

        bg-white
      "
    >
      {/* Cover */}

      <div className="relative h-72">

        <img
          src={profile.coverImage}
          alt="Cover"
          className="
            h-full
            w-full

            object-cover
          "
        />

        <div
          className="
            absolute
            inset-0

            bg-gradient-to-t

            from-black/70
            via-black/20
            to-transparent
          "
        />

        <button
          onClick={onUploadPhoto}
          className="
            absolute

            right-6
            top-6

            flex
            items-center
            gap-2

            rounded-xl

            bg-white/90

            px-4
            py-2

            text-sm
            font-medium

            backdrop-blur

            transition

            hover:bg-white
          "
        >
          <Camera size={16} />

          Change Cover
        </button>

      </div>

      {/* Body */}

      <div className="relative px-8 pb-8">

        {/* Profile */}

        <div
          className="
            -mt-20

            flex
            flex-col

            xl:flex-row

            xl:items-end
            xl:justify-between

            gap-8
          "
        >
          <div
            className="
              flex
              flex-col

              lg:flex-row

              lg:items-end

              gap-6
            "
          >
            {/* Avatar */}

            <div className="relative">

              <img
                src={profile.profileImage}
                alt={profile.fullName}
                className="
                  h-40
                  w-40

                  rounded-[32px]

                  border-[6px]
                  border-white

                  object-cover

                  shadow-xl
                "
              />

              <button
                onClick={onUploadPhoto}
                className="
                  absolute

                  bottom-3
                  right-3

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

            {/* Info */}

            <div className="pb-2">

              <h2
                className="
                  text-4xl
                  font-bold
                "
              >
                {profile.fullName}
              </h2>

              <p
                className="
                  mt-3

                  text-lg

                  text-slate-600
                "
              >
                {profile.headline}
              </p>

              <div
                className="
                  mt-4

                  flex
                  flex-wrap

                  items-center

                  gap-4

                  text-slate-500
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-2
                  "
                >
                  <MapPin size={17} />

                  {profile.location}
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-2
                  "
                >
                  <Mail size={17} />

                  {profile.email}
                </div>
              </div>
                            {/* Social Links */}

              <div
                className="
                  mt-6

                  flex
                  flex-wrap

                  items-center

                  gap-3
                "
              >
                <a
                  href={profile.socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    h-11
                    w-11

                    rounded-xl

                    border
                    border-slate-200

                    flex
                    items-center
                    justify-center

                    hover:bg-slate-100

                    transition
                  "
                >
                  <FaGithub size={18} />
                </a>

                <a
                  href={profile.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    h-11
                    w-11

                    rounded-xl

                    border
                    border-slate-200

                    flex
                    items-center
                    justify-center

                    hover:bg-blue-50
                    hover:text-blue-600

                    transition
                  "
                >
                  <FaLinkedin size={18} />
                </a>

                <a
                  href={profile.socialLinks.portfolio}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    h-11
                    w-11

                    rounded-xl

                    border
                    border-slate-200

                    flex
                    items-center
                    justify-center

                    hover:bg-green-50
                    hover:text-green-600

                    transition
                  "
                >
                  <Globe size={18} />
                </a>
              </div>

            </div>
          </div>

          {/* Right Side */}

          <div
            className="
              w-full
              xl:w-[360px]

              shrink-0
            "
          >
            <div
              className="
                rounded-[28px]

                border
                border-slate-200

                bg-slate-50

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
                    Profile Completion
                  </p>

                  <h3
                    className="
                      mt-2

                      text-4xl
                      font-bold

                      text-blue-600
                    "
                  >
                    {profileCompletion}%
                  </h3>
                </div>

                <div
                  className="
                    h-16
                    w-16

                    rounded-3xl

                    bg-blue-50

                    flex
                    items-center
                    justify-center
                  "
                >
                  <User
                    size={30}
                    className="
                      text-blue-600
                    "
                  />
                </div>
              </div>

              <div
                className="
                  mt-6

                  h-3

                  rounded-full

                  bg-slate-200

                  overflow-hidden
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
                    width: `${profileCompletion}%`,
                  }}
                />
              </div>

              <p
                className="
                  mt-4

                  text-sm

                  text-slate-500
                "
              >
                Complete your profile to
                unlock better mentor
                recommendations and a more
                personalized learning
                experience.
              </p>

              <div
                className="
                  mt-8

                  flex
                  flex-col

                  gap-3
                "
              >
                <button
                  onClick={onEditProfile}
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2

                    rounded-xl

                    bg-blue-600

                    py-3

                    font-medium

                    text-white

                    transition

                    hover:bg-blue-700
                  "
                >
                  <Edit3 size={18} />

                  Edit Profile
                </button>

                <button
                  onClick={onUploadPhoto}
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2

                    rounded-xl

                    border
                    border-slate-300

                    py-3

                    font-medium

                    transition

                    hover:bg-white
                  "
                >
                  <Camera size={18} />

                  Upload Photo
                </button>
              </div>
            </div>
          </div>
                  </div>
      </div>
    </div>
  );
};

export default ProfileHero;