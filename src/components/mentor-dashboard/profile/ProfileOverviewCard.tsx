import {
  BadgeCheck,
  Briefcase,
  Globe,
} from "lucide-react";

import type { MentorApiResponse } from "@/services/mentor.service";

interface Props {
  mentor: MentorApiResponse;
}

const ProfileOverviewCard = ({
  mentor,
}: Props) => {
  const isVerified =
    mentor.verificationStatus === "verified";

  const mentorInitial =
    mentor.name?.charAt(0)?.toUpperCase() || "M";

  return (
    <div
      className="
        bg-white
        border
        rounded-3xl
        p-8
      "
    >
      <div
        className="
          flex
          flex-col
          lg:flex-row
          gap-8
        "
      >
        <div
          className="
            h-36
            w-36
            rounded-full
            border-4
            border-blue-100
            bg-blue-50
            flex
            items-center
            justify-center
            text-5xl
            font-bold
            text-blue-600
            shrink-0
          "
        >
          {mentorInitial}
        </div>

        <div className="flex-1">
          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            <h2
              className="
                text-4xl
                font-bold
              "
            >
              {mentor.name || "Mentor"}
            </h2>

            {isVerified && (
              <BadgeCheck
                className="
                  text-blue-600
                "
              />
            )}
          </div>

          <p
            className="
              text-xl
              text-blue-600
              mt-2
            "
          >
            {mentor.headline || "Mentor"}
          </p>

          <div
            className="
              flex
              flex-wrap
              gap-5
              mt-5
            "
          >
            <div
              className="
                flex
                items-center
                gap-2
              "
            >
              <Briefcase size={18} />
              {mentor.company || "Not specified"}
            </div>

            <div
              className="
                flex
                items-center
                gap-2
              "
            >
              <Globe size={18} />
              {mentor.languages?.length
                ? mentor.languages.join(", ")
                : "Not specified"}
            </div>
          </div>

          <p
            className="
              mt-6
              text-slate-600
              leading-relaxed
            "
          >
            {mentor.about ||
              "No description available."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileOverviewCard;