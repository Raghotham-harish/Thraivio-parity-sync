import {
  Award,
  BookOpen,
  Building2,
  CalendarDays,
  Clock3,
  Eye,
  GraduationCap,
  PlayCircle,
  Star,
  Users,
} from "lucide-react";

import type { UserProgram } from "@/types/userProgram";

interface ProgramListCardProps {
  program: UserProgram;

  onView: (
    program: UserProgram
  ) => void;
}

const ProgramListCard = ({
  program,
  onView,
}: ProgramListCardProps) => {
  const statusStyles = {
    active:
      "bg-blue-100 text-blue-700",

    completed:
      "bg-green-100 text-green-700",

    paused:
      "bg-amber-100 text-amber-700",

    upcoming:
      "bg-purple-100 text-purple-700",
  };

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
            xl:justify-between

            gap-6
          "
        >
          {/* Left */}

          <div
            className="
              flex
              gap-5

              flex-1
            "
          >
            <div className="shrink-0">

              <img
                src={program.mentorImage}
                alt={program.mentorName}
                className="
                  h-20
                  w-20

                  rounded-3xl

                  object-cover

                  border-2
                  border-slate-100
                "
              />

            </div>

            <div className="flex-1">

              {/* Badges */}

              <div
                className="
                  flex
                  flex-wrap

                  gap-2
                "
              >
                <span
                  className={`
                    px-3
                    py-1

                    rounded-full

                    text-xs
                    font-semibold

                    ${
                      statusStyles[
                        program.status
                      ]
                    }
                  `}
                >
                  {program.status}
                </span>

                <span
                  className="
                    bg-purple-100
                    text-purple-700

                    px-3
                    py-1

                    rounded-full

                    text-xs
                    font-semibold
                  "
                >
                  {program.level}
                </span>

                {program.certificateAvailable && (
                  <span
                    className="
                      bg-green-100
                      text-green-700

                      px-3
                      py-1

                      rounded-full

                      text-xs
                      font-semibold

                      flex
                      items-center
                      gap-1
                    "
                  >
                    <Award size={12} />
                    Certificate
                  </span>
                )}
              </div>

              {/* Title */}

              <h2
                className="text-xl xl:text-2xl font-bold mt-4"
              >
                {program.title}
              </h2>

              {/* Mentor */}

              <div
                className="
                  flex
                  flex-wrap

                  items-center

                  gap-2

                  text-slate-600

                  mt-3
                "
              >
                <span className="font-semibold">
                  {program.mentorName}
                </span>

                <span>•</span>

                <div
                  className="
                    flex
                    items-center
                    gap-1
                  "
                >
                  <Building2 size={14} />

                  {program.mentorCompany}
                </div>
              </div>

              <p
                className="
                  text-sm
                  text-slate-500

                  mt-1
                "
              >
                {program.mentorRole}
              </p>

              {/* Rating */}

              <div
                className="
                  flex
                  items-center
                  gap-1

                  mt-4
                "
              >
                {[1,2,3,4,5].map(
                  (star) => (
                    <Star
                      key={star}
                      size={14}
                      fill="currentColor"
                      className="
                        text-yellow-500
                      "
                    />
                  )
                )}

                <span
                  className="
                    ml-2

                    text-sm
                    text-slate-500
                  "
                >
                  4.9 (120 Reviews)
                </span>
              </div>

              {/* Info */}

              <div
                className="
                  grid
                  sm:grid-cols-2
                  xl:grid-cols-4

                  gap-4

                  mt-6
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-2

                    text-slate-600
                  "
                >
                  <Clock3 size={16} />

                  {program.duration}
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-2

                    text-slate-600
                  "
                >
                  <Users size={16} />

                  {program.students}+ Students
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-2

                    text-slate-600
                  "
                >
                  <BookOpen size={16} />

                  {program.completedLessons}/
                  {program.totalLessons}
                  Lessons
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-2

                    text-slate-600
                  "
                >
                  <GraduationCap
                    size={16}
                  />

                  {program.level}
                </div>
              </div>

              <div
  className="
    flex
    flex-wrap
    gap-2
    mt-5
  "
>
  <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs">
    Live Sessions
  </span>

  <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs">
    Mock Interviews
  </span>

  <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs">
    Community
  </span>

  <span className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-xs">
    Assignments
  </span>
</div>

            </div>

          </div>

          {/* Right */}

          <div
            className="
              xl:w-72

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
              <p
                className="
                  text-sm
                  text-slate-500
                "
              >
                Program Progress
              </p>

              <h4
                className="
                  text-3xl
                  font-bold

                  text-blue-600

                  mt-2
                "
              >
                {program.progress}%
              </h4>

              <div
                className="
                  h-3

                  bg-slate-200

                  rounded-full

                  overflow-hidden

                  mt-4
                "
              >
                <div
                  className="
                    h-full

                    bg-gradient-to-r
                    from-blue-600
                    to-indigo-600

                    rounded-full
                  "
                  style={{
                    width: `${program.progress}%`,
                  }}
                />
              </div>

              <div
                className="
                  mt-5

                  space-y-3
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-2

                    text-sm
                  "
                >
                  <CalendarDays
                    size={16}
                  />

                  Enrolled:
                  {" "}
                  {program.enrolledDate}
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-2

                    text-sm
                  "
                >
                  <Clock3 size={16} />

                  {program.nextSession}
                </div>
              </div>

              <div
                className="
                  mt-5

                  bg-gradient-to-r
from-blue-50
to-indigo-50

                  rounded-2xl

                  p-4
                "
              >
                <p
                  className="
                    text-sm
                    text-slate-500
                  "
                >
                  Program Fee
                </p>

                <h3
                  className="
                    text-2xl
                    font-bold

                    text-blue-600

                    mt-1
                  "
                >
                  ${program.price}
                </h3>
              </div>

              <div
                className="
                  flex
                  flex-col

                  gap-3

                  mt-5
                "
              >
                <button
                  onClick={() =>
                    onView(program)
                  }
                  className="
                    border
                    border-slate-300

                    py-2.5

                    rounded-xl

                    font-medium

                    flex
                    items-center
                    justify-center
                    gap-2

                    hover:bg-slate-100

                    transition
                  "
                >
                  <Eye size={18} />
                  View Details
                </button>

                <button
                  className="
                    bg-blue-600
                    hover:bg-blue-700

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
                  <PlayCircle
                    size={18}
                  />
                  Continue Learning
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ProgramListCard;