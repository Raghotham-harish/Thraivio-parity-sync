import {
  BadgeCheck,
  Briefcase,
  Globe,
} from "lucide-react";

interface Props {
  mentor: any;
}

const ProfileOverviewCard = ({
  mentor,
}: Props) => {
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
        <img
          src={mentor.image}
          alt={mentor.name}
          className="
            h-36
            w-36

            rounded-full

            object-cover

            border-4
            border-blue-100
          "
        />

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
              {mentor.name}
            </h2>

            <BadgeCheck
              className="
                text-blue-600
              "
            />
          </div>

          <p
            className="
              text-xl
              text-blue-600
              mt-2
            "
          >
            {mentor.role}
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
              {mentor.company}
            </div>

            <div
              className="
                flex
                items-center
                gap-2
              "
            >
              <Globe size={18} />
              {mentor.languages?.join(", ")}
            </div>
          </div>

          <p
            className="
              mt-6
              text-slate-600
              leading-relaxed
            "
          >
            {mentor.about}
          </p>

        </div>

      </div>
    </div>
  );
};

export default ProfileOverviewCard;