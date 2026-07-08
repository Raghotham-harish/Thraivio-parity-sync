import {
  Clock3,
  Users,
  Star,
  Pencil,
  Trash2,
} from "lucide-react";

import type { Program } from "@/types/program";

interface ProgramListCardProps {
  program: Program;

  onEdit: (
    program: Program
  ) => void;

  onDelete: (
    program: Program
  ) => void;
}

const ProgramListCard = ({
  program,
  onEdit,
  onDelete,
}: ProgramListCardProps) => {
  return (
    <div
      className="
        bg-white
        border
        border-slate-200
        rounded-3xl
        overflow-hidden

        hover:shadow-xl

        transition-all
        duration-300
      "
    >
      <div
        className="
          flex
          flex-col

          xl:flex-row
        "
      >
        {/* Image */}

        <div
          className="
            relative

            xl:w-[340px]
            shrink-0
          "
        >
          <img
            src={
              program.image ||
              "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900"
            }
            alt={program.title}
            className="
              h-full
              w-full
              object-cover
              min-h-[280px]
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/60
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
              text-white
              font-semibold
            "
          >
            {program.level}
          </span>

          {program.featured && (
            <span
              className="
                absolute
                top-4
                right-4

                bg-blue-600
                text-white

                px-3
                py-1

                rounded-full

                text-xs
                font-semibold
              "
            >
              🔥 Best Seller
            </span>
          )}

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
                tracking-wider
              "
            >
              Career Accelerator
            </p>

            <h3
              className="
                text-2xl
                font-bold
                mt-1
              "
            >
              {program.title}
            </h3>

          </div>

        </div>

        {/* Content */}

        <div
          className="
            flex-1
            p-6
          "
        >
          {/* Top */}

          <div
            className="
              flex
              flex-col

              lg:flex-row
              lg:justify-between

              gap-5
            "
          >
            <div>

              <h2
                className="
                  text-2xl
                  font-bold
                "
              >
                {program.title}
              </h2>

              <p
                className="
                  mt-3
                  text-slate-500
                  max-w-2xl
                "
              >
                {program.description ||
                  "Structured mentorship program designed to accelerate your career growth with personalized coaching, practical projects and industry guidance."}
              </p>

            </div>

            <div>

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
                  text-4xl
                  font-bold
                  text-blue-600
                "
              >
                ${program.price}
              </h2>

            </div>

          </div>

          {/* Stats */}

          <div
            className="
              flex
              flex-wrap
              gap-6
              mt-6
            "
          >
            <div
              className="
                flex
                items-center
                gap-2
              "
            >
              <Clock3 size={18} />

              {program.duration}
            </div>

            <div
              className="
                flex
                items-center
                gap-2
              "
            >
              <Users size={18} />

              {program.students}
              + Students
            </div>

            <div
              className="
                flex
                items-center
                gap-2
              "
            >
              <Star
                size={18}
                fill="currentColor"
                className="
                  text-yellow-500
                "
              />

              {program.rating || 4.9}

              <span
                className="
                  text-slate-500
                "
              >
                (
                {program.reviews ||
                  120}
                Reviews)
              </span>

            </div>

          </div>

          {/* Features */}

          <div
            className="
              grid
              md:grid-cols-2
              gap-3
              mt-6
            "
          >
            <div>
              ✅ Weekly Live Sessions
            </div>

            <div>
              ✅ Resume Review
            </div>

            <div>
              ✅ Mock Interviews
            </div>

            <div>
              ✅ Priority Community Access
            </div>
          </div>

          {/* Bottom */}

          <div
            className="
              flex
              flex-col

              lg:flex-row
              lg:items-center
              lg:justify-between

              gap-5

              mt-8
            "
          >
            <div
              className="
                bg-amber-50
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
                Seats Remaining
              </p>

              <p
                className="
                  font-semibold
                  text-amber-700
                "
              >
                Only
                {" "}
                {program.seatsLeft ||
                  8}
                {" "}
                Spots Left
              </p>

            </div>

            <div
              className="
                flex
                gap-3
              "
            >
              <button
                onClick={() =>
                  onEdit(program)
                }
                className="
                  border
                  border-blue-600

                  text-blue-600

                  px-5
                  py-3

                  rounded-xl

                  flex
                  items-center
                  gap-2

                  hover:bg-blue-600
                  hover:text-white

                  transition
                "
              >
                <Pencil size={18} />

                Edit
              </button>

              <button
                onClick={() =>
                  onDelete(program)
                }
                className="
                  bg-red-600
                  hover:bg-red-700

                  text-white

                  px-5
                  py-3

                  rounded-xl

                  flex
                  items-center
                  gap-2

                  transition
                "
              >
                <Trash2 size={18} />

                Delete
              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ProgramListCard;