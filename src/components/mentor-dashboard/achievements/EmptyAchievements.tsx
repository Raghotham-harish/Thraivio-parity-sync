import {
  Plus,
  Trophy,
} from "lucide-react";

interface EmptyAchievementsProps {
  onAddAchievement: () => void;
}

const EmptyAchievements = ({
  onAddAchievement,
}: EmptyAchievementsProps) => {
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

          bg-amber-50

          flex
          items-center
          justify-center
        "
      >
        <Trophy
          size={42}
          className="
            text-amber-600
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
        No Achievements Found
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
        Showcase your accomplishments,
        awards, leadership milestones,
        mentorship impact and career
        highlights to build trust with
        future mentees.
      </p>

      {/* Tags */}

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
          Awards
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
          Leadership
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
          Speaking
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
          Mentorship
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
          Recognition
        </span>
      </div>

      {/* CTA */}

      <button
        onClick={
          onAddAchievement
        }
        className="
          mt-10

          inline-flex
          items-center
          gap-2

          bg-amber-600
          hover:bg-amber-700

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

        Create First Achievement
      </button>
    </div>
  );
};

export default EmptyAchievements;