import {
  BookOpen,
  Search,
} from "lucide-react";

interface EmptyProgramsProps {
  onBrowsePrograms?: () => void;
  hasSearch?: boolean;
}

const EmptyPrograms = ({
  onBrowsePrograms,
  hasSearch = false,
}: EmptyProgramsProps) => {
  return (
    <div
      className="
        w-full

        rounded-3xl

        border
        border-dashed
        border-slate-300

        bg-white

        px-6
        py-16

        text-center
      "
    >
      <div
        className="
          mx-auto

          h-16
          w-16

          rounded-2xl

          bg-blue-50
          text-blue-600

          flex
          items-center
          justify-center
        "
      >
        {hasSearch ? (
          <Search size={28} />
        ) : (
          <BookOpen size={28} />
        )}
      </div>

      <h3
        className="
          text-xl
          font-bold

          text-slate-900

          mt-5
        "
      >
        {hasSearch
          ? "No Programs Found"
          : "No Programs Available"}
      </h3>

      <p
        className="
          max-w-md

          mx-auto

          text-sm
          leading-6

          text-slate-500

          mt-2
        "
      >
        {hasSearch
          ? "We couldn't find any programs matching your search or selected filter. Try changing your search or filter."
          : "There are no published programs available right now. Please check back later for new programs."}
      </p>

      {onBrowsePrograms && (
        <button
          type="button"
          onClick={
            onBrowsePrograms
          }
          className="
            inline-flex
            items-center
            justify-center
            gap-2

            mt-6

            px-5
            py-3

            rounded-xl

            bg-blue-600
            hover:bg-blue-700

            text-white

            text-sm
            font-semibold

            transition
          "
        >
          <BookOpen size={17} />

          Browse Programs
        </button>
      )}
    </div>
  );
};

export default EmptyPrograms;