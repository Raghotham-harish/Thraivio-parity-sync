import {
  Award,
  BookOpen,
  Building2,
  CheckCircle2,
  Clock3,
  Download,
  GraduationCap,
  PlayCircle,
  Users,
  X,
} from "lucide-react";

import type { UserProgram } from "@/types/userProgram";

interface ProgramDetailsModalProps {
  open: boolean;

  program: UserProgram | null;

  onClose: () => void;
}

const ProgramDetailsModal = ({
  open,
  program,
  onClose,
}: ProgramDetailsModalProps) => {
  if (!open || !program)
    return null;

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
        fixed
        inset-0
        z-50

        bg-black/60
        backdrop-blur-sm

        flex
        items-center
        justify-center

        p-4
      "
    >
      <div
        className="
          bg-white

          w-full
          max-w-6xl

          rounded-[32px]

          overflow-hidden

          shadow-2xl

          max-h-[90vh]

          flex
          flex-col
        "
      >
        {/* Hero */}

        <div
          className="
            relative

            bg-gradient-to-r
            from-blue-600
            via-indigo-600
            to-purple-600

            p-8

            text-white
          "
        >
          <button
            onClick={onClose}
            className="
              absolute
              top-6
              right-6

              h-10
              w-10

              rounded-full

              bg-white/20

              flex
              items-center
              justify-center

              hover:bg-white/30

              transition
            "
          >
            <X size={20} />
          </button>

          <div className="max-w-4xl">

            <span
              className={`
                inline-flex

                px-4
                py-2

                rounded-full

                text-sm
                font-medium

                bg-white

                ${
                  statusStyles[
                    program.status
                  ]
                }
              `}
            >
              {program.status}
            </span>

            <h2
              className="
                text-4xl
                font-bold

                mt-5
              "
            >
              {program.title}
            </h2>

            <p
              className="
                text-blue-100

                mt-4

                max-w-3xl
              "
            >
              Premium mentor-led learning
              experience designed to
              accelerate career growth,
              skill development and
              real-world execution.
            </p>

          </div>
        </div>

        {/* Body */}

        <div
          className="
            overflow-y-auto

            flex-1

            p-8
          "
        >
          <div
            className="
              grid
              xl:grid-cols-3

              gap-8
            "
          >
            {/* Left Side */}

            <div className="xl:col-span-2 space-y-6">

              {/* Mentor */}

              <div
                className="
                  border

                  rounded-3xl

                  p-6
                "
              >
                <h3
                  className="
                    text-xl
                    font-bold

                    mb-5
                  "
                >
                  Program Mentor
                </h3>

                <div
                  className="
                    flex
                    items-center
                    gap-5
                  "
                >
                  <img
                    src={program.mentorImage}
                    alt={program.mentorName}
                    className="
                      h-20
                      w-20

                      rounded-3xl

                      object-cover
                    "
                  />

                  <div>

                    <h4
                      className="
                        text-xl
                        font-bold
                      "
                    >
                      {program.mentorName}
                    </h4>

                    <p
                      className="
                        text-slate-600
                      "
                    >
                      {program.mentorRole}
                    </p>

                    <div
                      className="
                        flex
                        items-center
                        gap-2

                        mt-2

                        text-slate-500
                      "
                    >
                      <Building2 size={16} />

                      {program.mentorCompany}
                    </div>

                  </div>
                </div>
              </div>

              {/* Program Information */}

              <div
                className="
                  border

                  rounded-3xl

                  p-6
                "
              >
                <h3
                  className="
                    text-xl
                    font-bold

                    mb-5
                  "
                >
                  Program Information
                </h3>

                <div
                  className="
                    grid
                    md:grid-cols-2

                    gap-5
                  "
                >
                  <div className="flex items-center gap-3">
                    <Clock3 size={18} />
                    {program.duration}
                  </div>

                  <div className="flex items-center gap-3">
                    <Users size={18} />
                    {program.students}+ Students
                  </div>

                  <div className="flex items-center gap-3">
                    <GraduationCap size={18} />
                    {program.level}
                  </div>

                  <div className="flex items-center gap-3">
                    <BookOpen size={18} />
                    {program.completedLessons}/
                    {program.totalLessons}
                    Lessons
                  </div>
                </div>
              </div>
                            {/* Curriculum */}

              <div
                className="
                  border

                  rounded-3xl

                  p-6
                "
              >
                <h3
                  className="
                    text-xl
                    font-bold

                    mb-5
                  "
                >
                  Curriculum Overview
                </h3>

                <div className="space-y-3">

                  <div>
                    ✅ Foundation Concepts
                  </div>

                  <div>
                    ✅ Practical Assignments
                  </div>

                  <div>
                    ✅ Live Mentor Sessions
                  </div>

                  <div>
                    ✅ Real World Projects
                  </div>

                  <div>
                    ✅ Mock Interviews
                  </div>

                  <div>
                    ✅ Career Guidance
                  </div>

                </div>
              </div>

              {/* Benefits */}

              <div
                className="
                  border

                  rounded-3xl

                  p-6
                "
              >
                <h3
                  className="
                    text-xl
                    font-bold

                    mb-5
                  "
                >
                  Included Benefits
                </h3>

                <div className="space-y-4">

                  <div className="flex gap-3">
                    <CheckCircle2
                      className="
                        text-green-600
                      "
                    />
                    Weekly Live Sessions
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle2
                      className="
                        text-green-600
                      "
                    />
                    Resume Review
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle2
                      className="
                        text-green-600
                      "
                    />
                    Mock Interviews
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle2
                      className="
                        text-green-600
                      "
                    />
                    Community Access
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle2
                      className="
                        text-green-600
                      "
                    />
                    Session Recordings
                  </div>

                </div>
              </div>

            </div>
                        <div>

              <div
                className="
                  sticky
                  top-0

                  border

                  rounded-3xl

                  p-6

                  bg-slate-50
                "
              >
                <h3
                  className="
                    text-xl
                    font-bold
                  "
                >
                  Learning Summary
                </h3>

                <div className="mt-6">

                  <p
                    className="
                      text-sm
                      text-slate-500
                    "
                  >
                    Overall Progress
                  </p>

                  <h2
                    className="
                      text-5xl
                      font-bold

                      text-blue-600

                      mt-2
                    "
                  >
                    {program.progress}%
                  </h2>

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

                </div>

                <div
                  className="
                    mt-6

                    space-y-4
                  "
                >
                  <div
                    className="
                      bg-white

                      rounded-2xl

                      p-4
                    "
                  >
                    <p className="text-sm text-slate-500">
                      Enrolled Date
                    </p>

                    <h4 className="font-semibold mt-1">
                      {program.enrolledDate}
                    </h4>
                  </div>

                  <div
                    className="
                      bg-white

                      rounded-2xl

                      p-4
                    "
                  >
                    <p className="text-sm text-slate-500">
                      Next Session
                    </p>

                    <h4 className="font-semibold mt-1">
                      {program.nextSession}
                    </h4>
                  </div>

                  <div
                    className="
                      bg-white

                      rounded-2xl

                      p-4
                    "
                  >
                    <p className="text-sm text-slate-500">
                      Program Fee
                    </p>

                    <h4
                      className="
                        text-blue-600
                        font-bold
                        mt-1
                      "
                    >
                      ${program.price}
                    </h4>
                  </div>

                </div>

                {program.certificateAvailable && (
                  <div
                    className="
                      mt-5

                      bg-green-50

                      rounded-2xl

                      p-4

                      flex
                      items-center
                      gap-3
                    "
                  >
                    <Award
                      size={20}
                      className="
                        text-green-600
                      "
                    />

                    <span
                      className="
                        text-green-700
                        font-medium
                      "
                    >
                      Certificate Available
                    </span>
                  </div>
                )}

                <div
                  className="
                    mt-6

                    space-y-3
                  "
                >
                  <button
                    className="
                      w-full

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
                    "
                  >
                    <PlayCircle size={18} />
                    Continue Learning
                  </button>

                  <button
                    className="
                      w-full

                      border

                      py-3

                      rounded-xl

                      font-medium
                    "
                  >
                    View Curriculum
                  </button>

                  {program.certificateAvailable && (
                    <button
                      className="
                        w-full

                        border

                        py-3

                        rounded-xl

                        font-medium

                        flex
                        items-center
                        justify-center
                        gap-2
                      "
                    >
                      <Download size={18} />
                      Download Certificate
                    </button>
                  )}
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetailsModal;