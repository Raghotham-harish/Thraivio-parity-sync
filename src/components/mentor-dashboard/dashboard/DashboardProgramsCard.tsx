import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  mentor: any;
}

const DashboardProgramsCard = ({
  mentor,
}: Props) => {
  const programs =
    Array.isArray(mentor?.programs)
      ? mentor.programs.slice(0, 3)
      : [];

  return (
    <div
      className="
        bg-white
        border
        rounded-3xl
        p-6
        shadow-sm
      "
    >
      <div
        className="
          flex
          items-center
          justify-between
          mb-6
        "
      >
        <div>
          <h3
            className="
              text-xl
              font-bold
            "
          >
            Programs
          </h3>

          <p
            className="
              text-sm
              text-slate-500
              mt-1
            "
          >
            Your latest mentorship
            programs
          </p>
        </div>

        <BookOpen
          className="
            text-blue-600
          "
        />
      </div>

      <div className="space-y-4">
        {programs.map(
          (
            program: any,
            index: number
          ) => (
            <div
              key={
                program?._id ??
                `program-${index}`
              }
              className="
                border
                rounded-2xl
                p-4
              "
            >
              <div
                className="
                  flex
                  items-start
                  justify-between
                "
              >
                <div>
                  <h4
                    className="
                      font-semibold
                    "
                  >
                    {program?.title ??
                      "Untitled Program"}
                  </h4>

                  <p
                    className="
                      text-sm
                      text-slate-500
                      mt-1
                    "
                  >
                    {program?.level ??
                      "N/A"}
                  </p>
                </div>

                <span
                  className="
                    bg-blue-50
                    text-blue-600
                    px-3
                    py-1
                    rounded-full
                    text-xs
                    font-medium
                  "
                >
                  ${program?.price ?? 0}
                </span>
              </div>

              <div
                className="
                  flex
                  justify-between
                  mt-4
                  text-sm
                "
              >
                <span>
                  {program?.duration ??
                    "N/A"}
                </span>

                <span>
                  {program?.students ??
                    0}{" "}
                  Students
                </span>
              </div>
            </div>
          )
        )}
      </div>

      <Link
        to="/mentor-dashboard/programs"
        className="
          block
          text-center
          mt-6
          text-blue-600
          font-medium
        "
      >
        View All Programs
      </Link>
    </div>
  );
};

export default DashboardProgramsCard;