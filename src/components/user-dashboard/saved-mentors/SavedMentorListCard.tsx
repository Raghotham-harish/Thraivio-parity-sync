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

interface SavedMentorListCardProps {
  mentor: any;

  onRemove: (
    mentorId: number
  ) => void;
}

const SavedMentorListCard = ({
  mentor,
  onRemove,
}: SavedMentorListCardProps) => {
  return (
    <div
      className="
        bg-white

        border
        border-slate-200

        rounded-[32px]

        overflow-hidden

        hover:shadow-2xl

        transition-all
        duration-300
      "
    >
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

        <div
          className="
            flex
            flex-col

            xl:flex-row
            xl:items-center

            gap-8
          "
        >
          {/* LEFT */}

          <div
            className="
              flex
              gap-5

              xl:w-[380px]
            "
          >
            <div className="relative">

              <img
                src={mentor.image}
                alt={mentor.name}
                className="
                  h-24
                  w-24

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

            <div className="flex-1">

              <div
                className="
                  flex
                  flex-wrap

                  items-center

                  gap-2
                "
              >
                {mentor.featured && (
                  <span
                    className="
                      px-3
                      py-1

                      rounded-full

                      bg-blue-100
                      text-blue-700

                      text-xs
                      font-semibold

                      flex
                      items-center
                      gap-1
                    "
                  >
                    <BadgeCheck
                      size={14}
                    />
                    Featured
                  </span>
                )}

                <span
                  className="
                    px-3
                    py-1

                    rounded-full

                    bg-green-100
                    text-green-700

                    text-xs
                    font-semibold
                  "
                >
                  Active
                </span>

              </div>

              <h2
                className="
                  text-2xl
                  font-bold

                  mt-4
                "
              >
                {mentor.name}
              </h2>

              <p
                className="
                  text-slate-600

                  mt-1
                "
              >
                {mentor.role}
              </p>

              <p
                className="
                  text-slate-500
                  text-sm

                  mt-1
                "
              >
                {mentor.company}
              </p>

              <div
                className="
                  flex
                  items-center

                  gap-2

                  mt-4
                "
              >
                <Star
                  size={16}
                  fill="currentColor"
                  className="
                    text-amber-500
                  "
                />

                <span
                  className="
                    font-semibold
                  "
                >
                  {mentor.rating}
                </span>

                <span
                  className="
                    text-slate-400
                  "
                >
                  •
                </span>

                <span
                  className="
                    text-slate-500
                    text-sm
                  "
                >
                  {mentor.reviewsCount}
                  {" "}
                  Reviews
                </span>
              </div>

            </div>
          </div>

          {/* CENTER */}

          <div
            className="
              flex-1

              grid
              md:grid-cols-2
              xl:grid-cols-3

              gap-5
            "
          >
            <div
              className="
                bg-slate-50

                rounded-2xl

                p-5
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

                p-5
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
                Students Coached
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

                p-5
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
                Sessions Done
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

          {/* RIGHT */}

          <div
            className="
              xl:w-[280px]

              shrink-0
            "
          >
            <div
              className="
                bg-slate-50

                rounded-3xl

                p-5
              "
            >
              <h4
                className="
                  font-semibold
                "
              >
                Top Skills
              </h4>

              <div
                className="
                  flex
                  flex-wrap

                  gap-2

                  mt-4
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

                          bg-white

                          text-xs
                          font-medium
                        "
                      >
                        {skill}
                      </span>
                    )
                  )}
              </div>

              <div
                className="
                  flex
                  flex-col

                  gap-3

                  mt-6
                "
              >
                <Link
                  to={`/mentor/${mentor.id}`}
                  className="
                    border

                    py-3

                    rounded-xl

                    font-medium

                    flex
                    items-center
                    justify-center
                    gap-2

                    hover:bg-white

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

                    rounded-xl

                    font-medium

                    transition
                  "
                >
                  Book Session
                </button>

                <button
                  onClick={() =>
                    onRemove(
                      mentor.id
                    )
                  }
                  className="
                    bg-red-600
                    hover:bg-red-700

                    text-white

                    py-3

                    rounded-xl

                    font-medium

                    flex
                    items-center
                    justify-center
                    gap-2

                    transition
                  "
                >
                  <Heart
                    size={16}
                    fill="currentColor"
                  />

                  Remove Saved
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default SavedMentorListCard;