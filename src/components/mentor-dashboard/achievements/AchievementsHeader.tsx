import { Plus } from "lucide-react";

interface AchievementsHeaderProps {
  totalAchievements: number;

  onAddAchievement: () => void;
}

const AchievementsHeader = ({
  totalAchievements,
  onAddAchievement,
}: AchievementsHeaderProps) => {
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
      {/* Left */}

      <div>
        <div
          className="
            inline-flex
            items-center
            px-4
            py-1.5
            rounded-full
            bg-blue-50
            text-blue-700
            text-sm
            font-medium
          "
        >
          🏆 Achievement Management
        </div>

        <h1
          className="
            text-4xl
            font-bold
            mt-4
          "
        >
          Achievements Dashboard
        </h1>

        <p
          className="
            mt-3
            text-slate-500
            max-w-2xl
          "
        >
          Showcase your biggest milestones,
          recognitions, awards and professional
          accomplishments.
        </p>

        <div
          className="
            mt-5
            flex
            flex-wrap
            gap-3
          "
        >
          <div
            className="
              px-4
              py-2

              rounded-xl

              bg-slate-100

              text-sm
              font-medium
            "
          >
            {totalAchievements} Achievements
          </div>

          <div
            className="
              px-4
              py-2

              rounded-xl

              bg-green-50
              text-green-700

              text-sm
              font-medium
            "
          >
            Mentor Dashboard
          </div>
        </div>
      </div>

      {/* Right */}

      <button
        onClick={onAddAchievement}
        className="
          bg-blue-600
          hover:bg-blue-700
          text-white
          px-6
          py-4
          rounded-2xl
          font-semibold
          flex
          items-center
          justify-center
          gap-2
          transition
          hover:shadow-lg
        "
      >
        <Plus size={20} />
        Add Achievement
      </button>
    </div>
  );
};

export default AchievementsHeader;