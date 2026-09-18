import { Clock3, Eye, Star, Users } from "lucide-react";

import type { Program } from "@/types/program";
import StatusBadge from "@/components/shared/StatusBadge";
import {
  formatStatus,
  programDuration,
  programImage,
  programIsFeatured,
  programPrice,
  programRating,
  programReviews,
  programStudents,
  statusVariant,
} from "@/components/shared/programDisplay";

interface ProgramGridCardProps {
  program: Program;
  onView: (program: Program) => void;
}

const ProgramGridCard = ({ program, onView }: ProgramGridCardProps) => {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:shadow-md">
      {/* Thumbnail */}
      <div className="relative h-28 overflow-hidden rounded-xl">
        <img
          src={programImage(program)}
          alt={program.thumbnail?.alt || program.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute left-2 top-2 flex gap-1.5">
          <StatusBadge variant={statusVariant(program.status)}>
            {formatStatus(program.status)}
          </StatusBadge>
          {programIsFeatured(program) && (
            <span className="rounded-full bg-amber-400 px-2 py-0.5 text-[10px] font-semibold text-foreground">
              Featured
            </span>
          )}
        </div>
      </div>

      {/* Title */}
      <div className="mt-3">
        <div className="flex items-center justify-between gap-2">
          <span className="truncate rounded-full bg-[#EFF6FF] px-2.5 py-1 text-[11px] font-semibold text-primary">
            {program.category || "General"}
          </span>
          <span className="shrink-0 font-bold text-foreground">{programPrice(program)}</span>
        </div>
        <h3 className="mt-2 line-clamp-1 font-semibold text-foreground">{program.title}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
          {program.shortDescription || "No description available."}
        </p>
      </div>

      {/* Stat strip */}
      <div className="mt-3 grid grid-cols-3 divide-x divide-border rounded-xl bg-secondary py-2 text-center">
        <div>
          <p className="flex items-center justify-center gap-1 text-xs font-bold text-foreground">
            <Clock3 className="h-3 w-3" />
            {programDuration(program)}
          </p>
          <p className="text-[10px] capitalize text-muted-foreground">{program.level}</p>
        </div>
        <div>
          <p className="flex items-center justify-center gap-1 text-xs font-bold text-foreground">
            <Users className="h-3 w-3" />
            {programStudents(program)}
          </p>
          <p className="text-[10px] text-muted-foreground">Enrolled</p>
        </div>
        <div>
          <p className="flex items-center justify-center gap-0.5 text-xs font-bold text-foreground">
            <Star className="h-3 w-3 fill-[#F59E0B] text-[#F59E0B]" />
            {programRating(program).toFixed(1)}
          </p>
          <p className="text-[10px] text-muted-foreground">{programReviews(program)} reviews</p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => onView(program)}
        className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
      >
        <Eye className="h-4 w-4" />
        View Details
      </button>
    </div>
  );
};

export default ProgramGridCard;
