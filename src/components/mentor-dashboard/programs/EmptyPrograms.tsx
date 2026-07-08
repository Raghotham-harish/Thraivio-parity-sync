import { BookOpen, Plus } from "lucide-react";

interface EmptyProgramsProps {
  onAddProgram: () => void;
}

const EmptyPrograms = ({
  onAddProgram,
}: EmptyProgramsProps) => {
  return (
    <div
      className="
        bg-white
        border
        border-dashed
        border-slate-300

        rounded-3xl

        p-12
        md:p-20

        text-center
      "
    >
      {/* Icon */}

      <div
        className="
          h-24
          w-24

          mx-auto

          rounded-full

          bg-blue-50

          flex
          items-center
          justify-center
        "
      >
        <BookOpen
          size={42}
          className="
            text-blue-600
          "
        />
      </div>

      {/* Title */}

      <h2
        className="
          text-3xl
          font-bold

          mt-8
        "
      >
        No Programs Found
      </h2>

      {/* Description */}

      <p
        className="
          text-slate-500

          max-w-2xl
          mx-auto

          mt-4
        "
      >
        You haven't created any coaching
        programs yet. Start building your
        first mentorship program and begin
        accepting enrollments from students.
      </p>

      {/* Features */}

      <div
        className="
          mt-8

          flex
          flex-wrap
          justify-center

          gap-3
        "
      >
        <span
          className="
            bg-slate-100
            px-4
            py-2
            rounded-full
            text-sm
          "
        >
          Coaching Programs
        </span>

        <span
          className="
            bg-slate-100
            px-4
            py-2
            rounded-full
            text-sm
          "
        >
          Live Sessions
        </span>

        <span
          className="
            bg-slate-100
            px-4
            py-2
            rounded-full
            text-sm
          "
        >
          Career Growth
        </span>

        <span
          className="
            bg-slate-100
            px-4
            py-2
            rounded-full
            text-sm
          "
        >
          Student Enrollments
        </span>
      </div>

      {/* CTA */}

      <button
        onClick={onAddProgram}
        className="
          mt-10

          inline-flex
          items-center
          gap-2

          bg-blue-600
          hover:bg-blue-700

          text-white

          px-6
          py-4

          rounded-2xl

          font-semibold

          transition
          hover:shadow-lg
        "
      >
        <Plus size={20} />

        Create First Program
      </button>

    </div>
  );
};

export default EmptyPrograms;