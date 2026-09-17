import { BadgeCheck, Eye } from "lucide-react";

import { StatusBadge, type StatusBadgeVariant } from "@/components/shared/StatusBadge";
import type { UserProgram } from "@/types/userProgram";

interface ProgramListCardProps {
  program: UserProgram;

  onView: (program: UserProgram) => void;
}

const statusVariant: Record<UserProgram["status"], StatusBadgeVariant> = {
  active: "info",
  completed: "success",
  paused: "warning",
  upcoming: "neutral",
};

const ProgramListCard = ({ program, onView }: ProgramListCardProps) => {
  const progressPct = program.totalLessons
    ? Math.round((program.completedLessons / program.totalLessons) * 100)
    : program.progress;

  return (
    <div className="flex items-center gap-4 rounded-xl border border-border bg-card px-4 py-3 shadow-sm transition-colors hover:bg-secondary/40">
      <img
        src={program.mentorImage}
        alt={program.mentorName}
        className="h-10 w-10 shrink-0 rounded-full object-cover"
      />
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <h3 className="truncate text-sm font-semibold text-foreground">{program.title}</h3>
          {program.certificateAvailable && (
            <BadgeCheck className="h-3.5 w-3.5 shrink-0 text-[#065F46]" />
          )}
        </div>
        <p className="truncate text-xs text-muted-foreground">
          {program.mentorName} · {program.level}
        </p>
      </div>

      <div className="hidden shrink-0 items-center gap-2 sm:flex">
        <div className="h-1.5 w-20 overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full rounded-full bg-primary"
            style={{ width: `${Math.min(progressPct, 100)}%` }}
          />
        </div>
        <span className="text-xs text-muted-foreground">
          {program.completedLessons}/{program.totalLessons}
        </span>
      </div>

      <div className="hidden w-16 shrink-0 text-right text-xs lg:block">
        <span className="font-semibold text-foreground">${program.price}</span>
        <p className="text-muted-foreground">{program.duration}</p>
      </div>

      <StatusBadge variant={statusVariant[program.status]} className="shrink-0">
        {program.status}
      </StatusBadge>

      <button
        type="button"
        onClick={() => onView(program)}
        aria-label="View program"
        title="View"
        className="shrink-0 rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
      >
        <Eye className="h-4 w-4" />
      </button>
    </div>
  );
};

export default ProgramListCard;
