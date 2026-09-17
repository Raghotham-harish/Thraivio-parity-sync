import { Pencil, Trophy, Trash2 } from "lucide-react";

import type { Achievement } from "@/types/achievement";

interface AchievementListCardProps {
  achievement: Achievement;

  onEdit: (achievement: Achievement) => void;

  onDelete: (achievement: Achievement) => void;
}

const AchievementListCard = ({ achievement, onEdit, onDelete }: AchievementListCardProps) => {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-sm transition-colors hover:bg-secondary/40">
      <div className="icon-bg-mint flex h-9 w-9 shrink-0 items-center justify-center rounded-lg">
        <Trophy className="h-4 w-4 text-[#1DD7A5]" />
      </div>
      <h3 className="min-w-0 flex-1 truncate text-sm font-semibold text-foreground">
        {achievement.title}
      </h3>
      <div className="flex shrink-0 items-center gap-1.5">
        <button
          type="button"
          onClick={() => onEdit(achievement)}
          aria-label="Edit achievement"
          title="Edit"
          className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <Pencil className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => onDelete(achievement)}
          aria-label="Delete achievement"
          title="Delete"
          className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-[#FFDAD6] hover:text-red-600"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default AchievementListCard;
