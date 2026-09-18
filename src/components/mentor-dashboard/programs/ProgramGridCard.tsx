import { Clock3, Star, Users } from "lucide-react";

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
  programSeatsLeft,
  programStudents,
  statusVariant,
} from "@/components/shared/programDisplay";
import ProgramWorkflowActions from "./ProgramWorkflowActions";
import { useProgramWorkflow } from "./useProgramWorkflow";

interface ProgramGridCardProps {
  program: Program;
  onEdit: (program: Program) => void;
  onDelete: (program: Program) => void;
  onProgramUpdate: (program: Program) => void;
}

const ProgramGridCard = ({
  program,
  onEdit,
  onDelete,
  onProgramUpdate,
}: ProgramGridCardProps) => {
  const { currentProgram, isActionLoading, actionError, run } = useProgramWorkflow(
    program,
    onProgramUpdate,
  );
  const seatsLeft = programSeatsLeft(currentProgram);

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:shadow-md">
      {/* Identity */}
      <div className="flex items-start gap-3">
        <img
          src={programImage(currentProgram)}
          alt={currentProgram.thumbnail?.alt || currentProgram.title}
          className="h-12 w-12 shrink-0 rounded-lg object-cover"
        />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <h3 className="truncate font-semibold text-foreground">{currentProgram.title}</h3>
            {programIsFeatured(currentProgram) && (
              <span className="shrink-0 rounded-full bg-amber-400 px-2 py-0.5 text-[10px] font-bold text-foreground">
                Featured
              </span>
            )}
          </div>
          <p className="flex items-center gap-1 truncate text-xs capitalize text-muted-foreground">
            {currentProgram.level} · <Clock3 className="h-3 w-3" /> {programDuration(currentProgram)}
          </p>
        </div>
        <StatusBadge variant={statusVariant(currentProgram.status)}>
          {formatStatus(currentProgram.status)}
        </StatusBadge>
      </div>

      {/* Stat strip */}
      <div className="mt-3 grid grid-cols-3 divide-x divide-border rounded-xl bg-secondary py-2 text-center">
        <div>
          <p className="flex items-center justify-center gap-1 text-xs font-bold text-foreground">
            <Users className="h-3 w-3" />
            {programStudents(currentProgram)}
          </p>
          <p className="text-[10px] text-muted-foreground">Students</p>
        </div>
        <div>
          <p className="text-xs font-bold text-foreground">{programPrice(currentProgram)}</p>
          <p className="text-[10px] text-muted-foreground">Price</p>
        </div>
        <div>
          <p className="flex items-center justify-center gap-0.5 text-xs font-bold text-foreground">
            <Star className="h-3 w-3 fill-[#F59E0B] text-[#F59E0B]" />
            {programRating(currentProgram).toFixed(1)}
          </p>
          <p className="text-[10px] text-muted-foreground">
            {programReviews(currentProgram)} reviews
          </p>
        </div>
      </div>

      {seatsLeft !== null && (
        <p className="mt-2.5 text-xs text-muted-foreground">{seatsLeft} seats left</p>
      )}

      <div className="mt-3">
        <ProgramWorkflowActions
          program={currentProgram}
          isLoading={isActionLoading}
          error={actionError}
          onAction={run}
          onEdit={() => onEdit(currentProgram)}
          onDelete={() => onDelete(currentProgram)}
        />
      </div>
    </div>
  );
};

export default ProgramGridCard;
