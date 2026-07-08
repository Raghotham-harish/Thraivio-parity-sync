import { Trophy } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  mentor: any;
}

const DashboardAchievementsCard = ({
  mentor,
}: Props) => {
  const achievements =
    mentor.achievements.slice(
      0,
      6
    );

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
            Achievements
          </h3>

          <p
            className="
              text-sm
              text-slate-500
              mt-1
            "
          >
            Career milestones and
            recognitions
          </p>

        </div>

        <Trophy
          className="
            text-amber-500
          "
        />
      </div>

      <div className="space-y-3">

        {achievements.map(
          (
            achievement: string,
            index: number
          ) => (
            <div
              key={index}
              className="
                flex
                items-center
                gap-3
                p-4
                rounded-2xl
                border
              "
            >
              <div
                className="
                  h-10
                  w-10
                  rounded-xl
                  bg-amber-50
                  text-amber-600
                  flex
                  items-center
                  justify-center
                "
              >
                <Trophy size={18} />
              </div>

              <p
                className="
                  font-medium
                "
              >
                {achievement}
              </p>

            </div>
          )
        )}

      </div>

      <Link
        to="/mentor-dashboard/achievements"
        className="
          block
          text-center
          mt-6
          text-amber-600
          font-medium
        "
      >
        Manage Achievements
      </Link>
    </div>
  );
};

export default DashboardAchievementsCard;