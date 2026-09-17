import { Pencil, Trophy, Trash2 } from "lucide-react";

import type { Achievement } from "@/types/achievement";

interface AchievementGridCardProps {
  achievement: Achievement;

  onEdit: (achievement: Achievement) => void;

  onDelete: (achievement: Achievement) => void;
}

const AchievementGridCard = ({ achievement, onEdit, onDelete }: AchievementGridCardProps) => {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:shadow-md">
      <div className="icon-bg-mint flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
        <Trophy className="h-5 w-5 text-[#1DD7A5]" />
      </div>
      <h3 className="min-w-0 flex-1 truncate font-semibold text-foreground">
        {achievement.title}
      </h3>
      <div className="flex shrink-0 items-center gap-2">
        <button
          type="button"
          onClick={() => onEdit(achievement)}
          aria-label="Edit achievement"
          title="Edit"
          className="rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <Pencil className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => onDelete(achievement)}
          aria-label="Delete achievement"
          title="Delete"
          className="rounded-lg border border-border p-2 text-red-600 transition-colors hover:bg-[#FFDAD6]"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default AchievementGridCard;
