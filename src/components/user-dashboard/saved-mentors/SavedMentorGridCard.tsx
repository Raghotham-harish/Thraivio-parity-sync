import {
  Star,
  Users,
  CalendarCheck,
  Briefcase,
  Heart,
  ArrowRight,
  BadgeCheck,
} from "lucide-react";

import { Link } from "react-router-dom";

interface SavedMentorGridCardProps {
  mentor: any;

  onRemove: (
    mentorId: number
  ) => void;
}

const SavedMentorGridCard = ({
  mentor,
  onRemove,
}: SavedMentorGridCardProps) => {
  return (
    <div
      className="
        group

        bg-white

        border
        border-slate-200

        rounded-[32px]

        overflow-hidden

        hover:shadow-2xl
        hover:-translate-y-1

        transition-all
        duration-300
      "
    >
      {/* Top Gradient */}

      <div
        className="
          h-2

          bg-gradient-to-r
          from-blue-600
          via-indigo-600
          to-purple-600
        "
      />

      <div className="p-6">

        {/* Header */}

        <div
          className="
            flex
            items-start
            justify-between
          "
        >
          <div
            className="
              flex
              items-center
              gap-4
            "
          >
            <div className="relative">

              <img
                src={mentor.image}
                alt={mentor.name}
                className="
                  h-20
                  w-20

                  rounded-3xl

                  object-cover

                  border
                "
              />

              <div
                className="
                  absolute
                  bottom-0
                  right-0

                  h-4
                  w-4

                  rounded-full

                  bg-green-500

                  border-2
                  border-white
                "
              />
            </div>

            <div>

              <div
                className="
                  flex
                  items-center
                  gap-2
                "
              >
                <h3
                  className="
                    text-lg
                    font-bold
                  "
                >
                  {mentor.name}
                </h3>

                {mentor.featured && (
                  <BadgeCheck
                    size={18}
                    className="
                      text-blue-600
                    "
                  />
                )}
              </div>

              <p
                className="
                  text-sm
                  text-slate-600

                  mt-1
                "
              >
                {mentor.role}
              </p>

              <p
                className="
                  text-sm
                  text-slate-500

                  mt-1
                "
              >
                {mentor.company}
              </p>

            </div>
          </div>

          <button
            onClick={() =>
              onRemove(
                mentor.id
              )
            }
            className="
              h-11
              w-11

              rounded-2xl

              bg-red-50

              flex
              items-center
              justify-center

              text-red-600

              hover:bg-red-100

              transition
            "
          >
            <Heart
              size={18}
              fill="currentColor"
            />
          </button>

        </div>

        {/* Rating */}

        <div
          className="
            flex
            items-center
            gap-3

            mt-6
          "
        >
          <div
            className="
              flex
              items-center
              gap-1

              text-amber-500
            "
          >
            <Star
              size={16}
              fill="currentColor"
            />

            <span
              className="
                font-semibold
              "
            >
              {mentor.rating}
            </span>
          </div>

          <span
            className="
              text-slate-400
            "
          >
            •
          </span>

          <span
            className="
              text-sm
              text-slate-500
            "
          >
            {mentor.reviewsCount}
            {" "}
            Reviews
          </span>
        </div>

        {/* Stats */}

        <div
          className="
            grid
            grid-cols-3

            gap-3

            mt-6
          "
        >
          <div
            className="
              bg-slate-50

              rounded-2xl

              p-4
            "
          >
            <Briefcase
              size={18}
              className="
                text-blue-600
              "
            />

            <p
              className="
                text-xs
                text-slate-500

                mt-2
              "
            >
              Experience
            </p>

            <h4
              className="
                font-bold

                mt-1
              "
            >
              {mentor.experience}
            </h4>
          </div>

          <div
            className="
              bg-slate-50

              rounded-2xl

              p-4
            "
          >
            <Users
              size={18}
              className="
                text-green-600
              "
            />

            <p
              className="
                text-xs
                text-slate-500

                mt-2
              "
            >
              Students
            </p>

            <h4
              className="
                font-bold

                mt-1
              "
            >
              {mentor.studentsCoached}
            </h4>
          </div>

          <div
            className="
              bg-slate-50

              rounded-2xl

              p-4
            "
          >
            <CalendarCheck
              size={18}
              className="
                text-purple-600
              "
            />

            <p
              className="
                text-xs
                text-slate-500

                mt-2
              "
            >
              Sessions
            </p>

            <h4
              className="
                font-bold

                mt-1
              "
            >
              {mentor.sessionsCompleted}
            </h4>
          </div>
        </div>

        {/* Skills */}

        <div
          className="
            flex
            flex-wrap

            gap-2

            mt-6
          "
        >
          {mentor.skills
            ?.slice(0, 4)
            .map(
              (
                skill: string
              ) => (
                <span
                  key={skill}
                  className="
                    px-3
                    py-2

                    rounded-full

                    bg-blue-50

                    text-blue-700

                    text-xs
                    font-medium
                  "
                >
                  {skill}
                </span>
              )
            )}
        </div>

        {/* CTA */}

        <div
          className="
            grid
            grid-cols-2

            gap-3

            mt-8
          "
        >
          <Link
            to={`/mentor/${mentor.id}`}
            className="
              border

              py-3

              rounded-2xl

              flex
              items-center
              justify-center
              gap-2

              font-medium

              hover:bg-slate-50

              transition
            "
          >
            View Profile

            <ArrowRight
              size={16}
            />
          </Link>

          <button
            className="
              bg-blue-600
              hover:bg-blue-700

              text-white

              py-3

              rounded-2xl

              font-medium

              transition
            "
          >
            Book Session
          </button>
        </div>

      </div>
    </div>
  );
};

export default SavedMentorGridCard;