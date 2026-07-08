import {
  GraduationCap,
  Search,
} from "lucide-react";

interface EmptyProgramsProps {
  onBrowsePrograms: () => void;
}

const EmptyPrograms = ({
  onBrowsePrograms,
}: EmptyProgramsProps) => {
  return (
    <div
      className="
        bg-white

        border

        rounded-[32px]

        p-12

        text-center
      "
    >
      <div
        className="
          h-24
          w-24

          mx-auto

          rounded-3xl

          bg-blue-50

          flex
          items-center
          justify-center
        "
      >
        <GraduationCap
          size={42}
          className="
            text-blue-600
          "
        />
      </div>

      <h2
        className="
          text-3xl
          font-bold

          mt-8
        "
      >
        No Programs Found
      </h2>

      <p
        className="
          text-slate-500

          mt-4

          max-w-xl
          mx-auto
        "
      >
        You have not enrolled in any
        mentorship programs yet.
      </p>

      <button
        onClick={onBrowsePrograms}
        className="
          mt-8

          bg-blue-600
          hover:bg-blue-700

          text-white

          px-6
          py-3

          rounded-xl

          font-medium

          inline-flex
          items-center
          gap-2

          transition
        "
      >
        <Search size={18} />
        Browse Programs
      </button>
    </div>
  );
};

export default EmptyPrograms;