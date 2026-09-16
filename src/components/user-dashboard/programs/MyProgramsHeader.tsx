import {
  GraduationCap,
  BookOpen,
} from "lucide-react";

interface MyProgramsHeaderProps {
  totalPrograms: number;
}

const MyProgramsHeader = ({
  totalPrograms,
}: MyProgramsHeaderProps) => {
  return (
    <div
      className="
        flex
        flex-col
        lg:flex-row

        lg:items-center
        lg:justify-between

        gap-6
      "
    >
      <div>
        <div
          className="
            inline-flex
            items-center
            gap-2

            bg-blue-50
            text-blue-700

            px-4
            py-2

            rounded-full

            text-sm
            font-medium
          "
        >
          <GraduationCap size={16} />

          Programs
        </div>

        <h1
          className="
            text-4xl
            font-bold

            mt-4
          "
        >
          Program Dashboard
        </h1>

        <p
          className="
            text-slate-500

            mt-3

            max-w-2xl
          "
        >
          Explore published coaching
          programs, discover learning
          opportunities and view detailed
          program information.
        </p>
      </div>

      <div
        className="
          bg-white

          border
          border-slate-200

          rounded-3xl

          px-6
          py-5
        "
      >
        <div
          className="
            flex
            items-center
            gap-3
          "
        >
          <div
            className="
              h-12
              w-12

              rounded-2xl

              bg-blue-50

              flex
              items-center
              justify-center
            "
          >
            <BookOpen
              size={22}
              className="
                text-blue-600
              "
            />
          </div>

          <div>
            <p
              className="
                text-sm
                text-slate-500
              "
            >
              Available Programs
            </p>

            <h3
              className="
                text-2xl
                font-bold
              "
            >
              {totalPrograms}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProgramsHeader;