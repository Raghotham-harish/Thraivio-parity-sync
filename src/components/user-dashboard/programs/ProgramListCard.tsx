import { Eye, Star, Users } from "lucide-react";

import type { Program } from "@/types/program";
import StatusBadge from "@/components/shared/StatusBadge";
import {
  formatStatus,
  programDuration,
  programImage,
  programIsFeatured,
  programPrice,
  programRating,
  programStudents,
  statusVariant,
} from "@/components/shared/programDisplay";

interface ProgramListCardProps {
  program: Program;
  onView: (program: Program) => void;
}

const ProgramListCard = ({ program, onView }: ProgramListCardProps) => {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:shadow-md lg:flex-row lg:items-center lg:gap-6">
      <div className="flex min-w-0 flex-1 items-center gap-3">
        <img
          src={programImage(program)}
          alt={program.thumbnail?.alt || program.title}
          className="h-12 w-12 shrink-0 rounded-lg object-cover"
        />
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <h3 className="truncate font-semibold text-foreground">{program.title}</h3>
            {programIsFeatured(program) && (
              <span className="shrink-0 rounded-full bg-amber-400 px-2 py-0.5 text-[10px] font-bold text-foreground">
                Featured
              </span>
            )}
          </div>
          <p className="truncate text-xs capitalize text-muted-foreground">
            {program.category || "General"} · {program.level} · {programDuration(program)}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-5 text-sm">
        <StatusBadge variant={statusVariant(program.status)}>
          {formatStatus(program.status)}
        </StatusBadge>
        <span className="flex items-center gap-1 text-foreground">
          <Users className="h-3.5 w-3.5 text-muted-foreground" />
          {programStudents(program)}
        </span>
        <span className="flex items-center gap-1 text-foreground">
          <Star className="h-3.5 w-3.5 fill-[#F59E0B] text-[#F59E0B]" />
          {programRating(program).toFixed(1)}
        </span>
        <span className="font-semibold text-foreground">{programPrice(program)}</span>
      </div>

      <button
        type="button"
        onClick={() => onView(program)}
        className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
      >
        <Eye className="h-4 w-4" />
        View
      </button>
    </div>
  );
};

export default ProgramListCard;
