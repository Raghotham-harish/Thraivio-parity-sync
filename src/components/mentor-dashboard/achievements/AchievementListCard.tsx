import {
  Trophy,
  Pencil,
  Trash2,
} from "lucide-react";

import type { Achievement } from "@/types/achievement";

interface AchievementListCardProps {
  achievement: Achievement;

  onEdit: (
    achievement: Achievement
  ) => void;

  onDelete: (
    achievement: Achievement
  ) => void;
}

const AchievementListCard = ({
  achievement,
  onEdit,
  onDelete,
}: AchievementListCardProps) => {
  return (
    <div
      className="
        bg-white

        border
        border-slate-200

        rounded-3xl

        p-6

        hover:shadow-xl

        transition-all
        duration-300
      "
    >
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
        {/* Left */}

        <div
          className="
            flex
            items-center
            gap-5
          "
        >
          <div
            className="
              h-16
              w-16

              rounded-2xl

              bg-amber-100

              flex
              items-center
              justify-center

              shrink-0
            "
          >
            <Trophy
              size={30}
              className="
                text-amber-600
              "
            />
          </div>

          <div>

            <h3
              className="
                text-xl
                font-bold
              "
            >
              {achievement.title}
            </h3>

            <p
              className="
                text-slate-500
                mt-2
              "
            >
              Career Milestone
            </p>

            <span
              className="
                inline-flex
                items-center

                mt-3

                px-3
                py-1

                rounded-full

                bg-amber-50
                text-amber-700

                text-xs
                font-medium
              "
            >
              🏆 Achievement
            </span>

          </div>

        </div>

        {/* Right */}

        <div
          className="
            flex
            gap-3
          "
        >
          <button
            onClick={() =>
              onEdit(
                achievement
              )
            }
            className="
              border
              border-blue-600

              text-blue-600

              px-5
              py-3

              rounded-2xl

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
              onDelete(
                achievement
              )
            }
            className="
              bg-red-600
              hover:bg-red-700

              text-white

              px-5
              py-3

              rounded-2xl

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
  );
};

export default AchievementListCard;