import {
  Award,
  BookOpen,
  Building2,
  Clock3,
  Eye,
  PlayCircle,
  Star,
  Users,
} from "lucide-react";

import type { UserProgram } from "@/types/userProgram";

interface ProgramGridCardProps {
  program: UserProgram;

  onView: (
    program: UserProgram
  ) => void;
}

const ProgramGridCard = ({
  program,
  onView,
}: ProgramGridCardProps) => {
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
      {/* Top Banner */}

      <div className="relative h-44">

        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200"
          alt={program.title}
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
            from-black/80
            via-black/20
            to-transparent
          "
        />

        <span
          className="
            absolute
            top-4
            left-4

            bg-white/20
            backdrop-blur

            px-3
            py-1

            rounded-full

            text-xs
            font-semibold

            text-white
          "
        >
          {program.level}
        </span>

        <span
          className={`
            absolute
            top-4
            right-4

            px-3
            py-1

            rounded-full

            text-xs
            font-semibold

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

        <div
          className="
            absolute
            bottom-5
            left-5

            text-white
          "
        >
          <p
            className="
              text-xs
              uppercase
              tracking-widest
            "
          >
            Premium Program
          </p>

          <h2
            className="
              text-xl
              font-bold

              mt-1
            "
          >
            {program.title}
          </h2>
        </div>

      </div>

      {/* Body */}

      <div className="p-6">

        {/* Mentor */}

        <div
          className="
            flex
            items-center
            gap-4
          "
        >
          <img
            src={program.mentorImage}
            alt={program.mentorName}
            className="
              h-14
              w-14

              rounded-2xl

              object-cover

              border
            "
          />

          <div>

            <h3
              className="
                font-bold
                text-lg
              "
            >
              {program.mentorName}
            </h3>

            <div
              className="
                flex
                items-center
                gap-2

                text-slate-500
                text-sm

                mt-1
              "
            >
              <Building2 size={14} />

              {program.mentorCompany}
            </div>

            <p
              className="
                text-xs
                text-slate-400

                mt-1
              "
            >
              {program.mentorRole}
            </p>

          </div>

        </div>

        {/* Rating */}

        <div
          className="
            flex
            items-center
            gap-1

            mt-5
          "
        >
          {[1,2,3,4,5].map(
            (star) => (
              <Star
                key={star}
                size={15}
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

        {/* Stats */}

        <div
          className="
            grid
            grid-cols-2

            gap-4

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
            <div
              className="
                flex
                items-center
                gap-2
              "
            >
              <Clock3 size={16} />

              <span className="text-sm">
                Duration
              </span>
            </div>

            <h4
              className="
                mt-2
                font-bold
              "
            >
              {program.duration}
            </h4>
          </div>

          <div
            className="
              bg-slate-50

              rounded-2xl

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
              <Users size={16} />

              <span className="text-sm">
                Students
              </span>
            </div>

            <h4
              className="
                mt-2
                font-bold
              "
            >
              {program.students}+
            </h4>
          </div>
        </div>

        {/* Progress */}

        <div className="mt-6">

          <div
            className="
              flex
              justify-between

              text-sm

              mb-2
            "
          >
            <span>
              Progress
            </span>

            <span
              className="
                font-semibold
                text-blue-600
              "
            >
              {program.progress}%
            </span>
          </div>

          <div
            className="
              h-3

              bg-slate-100

              rounded-full

              overflow-hidden
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

        {/* Features */}

        <div className="mt-5 flex flex-wrap gap-2">
  <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs">
    Live Sessions
  </span>

  <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs">
    Mock Interviews
  </span>

  <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs">
    Community
  </span>
</div>

        {/* Certificate */}

        {program.certificateAvailable && (
          <div
            className="
              mt-5

              bg-green-50

              text-green-700

              px-4
              py-3

              rounded-2xl

              flex
              items-center
              gap-2
            "
          >
            <Award size={18} />

            Certificate Available
          </div>
        )}

        {/* Lessons */}

        <div
          className="
            mt-5

            bg-blue-50

            rounded-2xl

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
            <BookOpen size={16} />

            Lessons
          </div>

          <h4
            className="
              font-bold

              mt-2
            "
          >
            {program.completedLessons}/
            {program.totalLessons}
          </h4>
        </div>

        {/* Price */}

        <div className="mt-5">

          <p
            className="
              text-sm
              text-slate-500
            "
          >
            Program Fee
          </p>

          <h2
            className="
              text-3xl
              font-bold
              text-blue-600
            "
          >
            ${program.price}
          </h2>

        </div>

        {/* Buttons */}

        <div
          className="
            grid
            grid-cols-2

            gap-3

            mt-6
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

              hover:bg-slate-50

              transition
            "
          >
            <Eye size={16} />
            Details
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
            <PlayCircle size={16} />
            Continue
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProgramGridCard;