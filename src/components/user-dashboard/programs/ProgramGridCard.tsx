import { BadgeCheck, Eye } from "lucide-react";

import { StatusBadge, type StatusBadgeVariant } from "@/components/shared/StatusBadge";
import type { UserProgram } from "@/types/userProgram";

interface ProgramGridCardProps {
  program: UserProgram;

  onView: (program: UserProgram) => void;
}

const statusVariant: Record<UserProgram["status"], StatusBadgeVariant> = {
  active: "info",
  completed: "success",
  paused: "warning",
  upcoming: "neutral",
};

const ProgramGridCard = ({ program, onView }: ProgramGridCardProps) => {
  const progressPct = program.totalLessons
    ? Math.round((program.completedLessons / program.totalLessons) * 100)
    : program.progress;

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:shadow-md">
      {/* Title + status */}
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <h3 className="truncate font-semibold text-foreground">{program.title}</h3>
          <p className="truncate text-xs text-muted-foreground">
            {program.level} · {program.duration}
          </p>
        </div>
        <StatusBadge variant={statusVariant[program.status]} className="shrink-0">
          {program.status}
        </StatusBadge>
      </div>

      {/* Mentor */}
      <div className="mt-3 flex items-center gap-2 rounded-xl bg-secondary px-3 py-2">
        <img
          src={program.mentorImage}
          alt={program.mentorName}
          className="h-6 w-6 shrink-0 rounded-full object-cover"
        />
        <span className="min-w-0 flex-1 truncate text-sm font-medium text-foreground">
          {program.mentorName}
        </span>
        <span className="shrink-0 text-xs text-muted-foreground">{program.mentorCompany}</span>
      </div>

      {/* Progress */}
      <div className="mt-3 flex items-center gap-2">
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full rounded-full bg-primary"
            style={{ width: `${Math.min(progressPct, 100)}%` }}
          />
        </div>
        <span className="shrink-0 text-[11px] font-semibold text-muted-foreground">
          {program.completedLessons}/{program.totalLessons} lessons
        </span>
      </div>

      {/* Meta */}
      <div className="mt-2.5 flex items-center justify-between text-xs">
        <span className="text-muted-foreground">Next: {program.nextSession}</span>
        <span className="font-semibold text-foreground">${program.price}</span>
      </div>

      {program.certificateAvailable && (
        <div className="mt-1.5 flex items-center gap-1 text-xs text-[#065F46]">
          <BadgeCheck className="h-3.5 w-3.5" />
          Certificate available
        </div>
      )}

      {/* Actions */}
      <button
        type="button"
        onClick={() => onView(program)}
        className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
      >
        <Eye className="h-4 w-4" />
        View Program
      </button>
    </div>
  );
};

export default ProgramGridCard;
