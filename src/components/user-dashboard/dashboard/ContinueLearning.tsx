import {
  ArrowRight,
  BookOpen,
  Clock3,
  PlayCircle,
} from "lucide-react";

import type { ContinueLearning as ContinueLearningType } from "@/types/dashboard";

interface ContinueLearningProps {
  courses: ContinueLearningType[];
}

const ContinueLearning = ({
  courses,
}: ContinueLearningProps) => {
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

              bg-blue-50

              px-4
              py-2

              text-sm
              font-medium

              text-blue-700
            "
          >
            <BookOpen size={16} />

            Continue Learning
          </span>

          <h2
            className="
              mt-5

              text-3xl
              font-bold
            "
          >
            Resume Your Courses
          </h2>

          <p
            className="
              mt-3

              max-w-3xl

              text-slate-500
            "
          >
            Pick up where you left off and
            continue progressing through
            your mentorship programs.
          </p>
        </div>
      </div>

      {/* Cards */}

      <div
        className="
          mt-8

          grid

          gap-8

          xl:grid-cols-2
        "
      >
        {courses.map((course) => (
          <div
            key={course.id}
            className="
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
            {/* Thumbnail */}

            <div className="relative">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="
                  h-60
                  w-full

                  object-cover
                "
              />

              <div
                className="
                  absolute

                  left-6
                  top-6

                  rounded-full

                  bg-white/90

                  px-4
                  py-2

                  text-sm
                  font-semibold

                  text-blue-700
                "
              >
                {course.category}
              </div>

              <button
                className="
                  absolute

                  right-6
                  bottom-6

                  flex

                  h-14
                  w-14

                  items-center
                  justify-center

                  rounded-full

                  bg-blue-600

                  text-white

                  shadow-xl

                  transition

                  hover:scale-105
                "
              >
                <PlayCircle size={28} />
              </button>
            </div>

            {/* Content */}

            <div className="p-7">
              <h3
                className="
                  text-2xl
                  font-bold
                "
              >
                {course.title}
              </h3>

              <p
                className="
                  mt-2

                  text-slate-500
                "
              >
                Mentor • {course.mentor}
              </p>

              {/* Progress */}

              <div className="mt-7">
                <div
                  className="
                    mb-3

                    flex
                    items-center
                    justify-between
                  "
                >
                  <span
                    className="
                      text-sm
                      text-slate-500
                    "
                  >
                    Progress
                  </span>

                  <span
                    className="
                      font-semibold

                      text-blue-600
                    "
                  >
                    {course.progress}%
                  </span>
                </div>

                <div
                  className="
                    h-3

                    overflow-hidden

                    rounded-full

                    bg-slate-100
                  "
                >
                  <div
                    className="
                      h-full

                      rounded-full

                      bg-gradient-to-r
                      from-blue-600
                      to-indigo-600
                    "
                    style={{
                      width: `${course.progress}%`,
                    }}
                  />
                </div>
              </div>

              {/* Info */}

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
                  <p
                    className="
                      text-sm

                      text-slate-500
                    "
                  >
                    Lessons
                  </p>

                  <h4
                    className="
                      mt-2

                      font-bold
                    "
                  >
                    {course.completedLessons}/
                    {course.totalLessons}
                  </h4>
                </div>

                <div
                  className="
                    rounded-2xl

                    bg-slate-50

                    p-4
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                    "
                  >
                    <Clock3
                      size={16}
                      className="
                        text-blue-600
                      "
                    />

                    <span
                      className="
                        text-sm

                        text-slate-500
                      "
                    >
                      Duration
                    </span>
                  </div>

                  <h4
                    className="
                      mt-2

                      font-bold
                    "
                  >
                    {course.duration}
                  </h4>
                </div>
              </div>

              {/* Next Lesson */}

              <div
                className="
                  mt-7

                  rounded-2xl

                  bg-blue-50

                  p-5
                "
              >
                <p
                  className="
                    text-sm

                    text-blue-600
                  "
                >
                  Next Lesson
                </p>

                <h4
                  className="
                    mt-2

                    text-lg
                    font-semibold
                  "
                >
                  {course.nextLesson}
                </h4>
              </div>

              {/* Button */}

              <button
                className="
                  mt-8

                  inline-flex
                  items-center
                  gap-2

                  rounded-2xl

                  bg-blue-600

                  px-7
                  py-3.5

                  font-semibold

                  text-white

                  transition

                  hover:bg-blue-700
                "
              >
                Continue Learning

                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContinueLearning;