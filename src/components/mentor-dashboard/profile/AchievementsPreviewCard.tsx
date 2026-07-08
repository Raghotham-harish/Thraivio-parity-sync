import { Trophy } from "lucide-react";

interface Props {
  achievements: string[];
}

const AchievementsPreviewCard = ({
  achievements,
}: Props) => {
  return (
    <div
      className="
        bg-white
        border
        rounded-3xl
        p-8
      "
    >
      <div
        className="
          flex
          items-center
          gap-3
        "
      >
        <Trophy
          className="
            text-amber-500
          "
        />

        <h2
          className="
            text-2xl
            font-bold
          "
        >
          Achievements
        </h2>
      </div>

      <div className="space-y-4 mt-6">

        {achievements.map(
          (
            achievement,
            index
          ) => (
            <div
              key={index}
              className="
                border
                rounded-2xl
                p-5

                bg-amber-50
              "
            >
              🏆 {achievement}
            </div>
          )
        )}

      </div>
    </div>
  );
};

export default AchievementsPreviewCard;