import {
  ArrowRight,
  Bookmark,
  Briefcase,
  Star,
} from "lucide-react";

import type { RecommendedMentor } from "@/types/dashboard";

interface RecommendedMentorsProps {
  mentors: RecommendedMentor[];
}

const RecommendedMentors = ({
  mentors,
}: RecommendedMentorsProps) => {
  return (
    <section className="mt-10">
      {/* Header */}

      <div
        className="
          flex
          flex-col

          gap-4

          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >
        <div>
          <span
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
            <Briefcase size={16} />

            Recommended Mentors
          </span>

          <h2
            className="
              mt-5

              text-3xl
              font-bold
            "
          >
            Learn From Industry Experts
          </h2>

          <p
            className="
              mt-3

              max-w-3xl

              text-slate-500
            "
          >
            Personalized mentor recommendations
            based on your learning journey,
            interests and completed programs.
          </p>
        </div>
      </div>

      {/* Cards */}

      <div
        className="
          mt-8

          grid

          gap-7

          lg:grid-cols-2
          2xl:grid-cols-3
        "
      >
        {mentors.map((mentor) => (
          <div
            key={mentor.id}
            className="
              group

              overflow-hidden

              rounded-[32px]

              border
              border-slate-200

              bg-white

              transition-all
              duration-300

              hover:-translate-y-1
              hover:border-blue-200
              hover:shadow-xl
            "
          >
            {/* Image */}

            <div className="relative">
              <img
                src={mentor.image}
                alt={mentor.name}
                className="
                  h-72
                  w-full

                  object-cover
                "
              />

              <button
                className="
                  absolute

                  right-5
                  top-5

                  flex

                  h-12
                  w-12

                  items-center
                  justify-center

                  rounded-full

                  bg-white/90

                  transition

                  hover:bg-white
                "
              >
                <Bookmark
                  size={20}
                  className="
                    text-slate-600
                  "
                />
              </button>
            </div>

            {/* Content */}

            <div className="p-7">
              <div
                className="
                  flex
                  items-start
                  justify-between
                  gap-4
                "
              >
                <div>
                  <h3
                    className="
                      text-2xl
                      font-bold
                    "
                  >
                    {mentor.name}
                  </h3>

                  <p
                    className="
                      mt-2

                      text-slate-500
                    "
                  >
                    {mentor.designation}
                  </p>

                  <p
                    className="
                      text-sm

                      text-blue-600
                    "
                  >
                    {mentor.company}
                  </p>
                </div>

                <div
                  className="
                    rounded-2xl

                    bg-amber-50

                    px-3
                    py-2
                  "
                >
                  <div className="flex items-center gap-1">
                    <Star
                      size={16}
                      className="
                        fill-yellow-400
                        text-yellow-400
                      "
                    />

                    <span
                      className="
                        font-semibold
                      "
                    >
                      {mentor.rating}
                    </span>
                  </div>
                </div>
              </div>

              {/* Meta */}

              <div
                className="
                  mt-7

                  grid

                  grid-cols-2

                  gap-4
                "
              >
                <div
                  className="
                    rounded-2xl

                    bg-slate-50

                    p-4
                  "
                >
                  <p className="text-sm text-slate-500">
                    Experience
                  </p>

                  <h4 className="mt-2 font-semibold">
                    {mentor.experience} Years
                  </h4>
                </div>

                <div
                  className="
                    rounded-2xl

                    bg-slate-50

                    p-4
                  "
                >
                  <p className="text-sm text-slate-500">
                    Reviews
                  </p>

                  <h4 className="mt-2 font-semibold">
                    {mentor.reviews}
                  </h4>
                </div>
              </div>

              {/* Skills */}

              <div
                className="
                  mt-7

                  flex
                  flex-wrap

                  gap-2
                "
              >
                {mentor.skills.map((skill) => (
                  <span
                    key={skill}
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
                    {skill}
                  </span>
                ))}
              </div>

              {/* Footer */}

              <div
                className="
                  mt-8

                  flex
                  items-center
                  justify-between
                "
              >
                <div>
                  <p className="text-sm text-slate-500">
                    Starting From
                  </p>

                  <h3
                    className="
                      mt-2

                      text-3xl
                      font-bold

                      text-blue-600
                    "
                  >
                    ₹{mentor.hourlyPrice}
                  </h3>

                  <p
                    className="
                      text-sm

                      text-slate-500
                    "
                  >
                    per session
                  </p>
                </div>

                <button
                  className="
                    inline-flex
                    items-center
                    gap-2

                    rounded-2xl

                    bg-blue-600

                    px-6
                    py-3.5

                    font-semibold

                    text-white

                    transition

                    hover:bg-blue-700
                  "
                >
                  View Profile

                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecommendedMentors;