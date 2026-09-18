import { Star, Users } from "lucide-react";

import type { Program } from "@/types/program";
import StatusBadge from "@/components/shared/StatusBadge";
import {
  formatStatus,
  programDuration,
  programImage,
  programIsFeatured,
  programPrice,
  programRating,
  programSeatsLeft,
  programStudents,
  statusVariant,
} from "@/components/shared/programDisplay";
import ProgramWorkflowActions from "./ProgramWorkflowActions";
import { useProgramWorkflow } from "./useProgramWorkflow";

interface ProgramListCardProps {
  program: Program;
  onEdit: (program: Program) => void;
  onDelete: (program: Program) => void;
  onProgramUpdate: (program: Program) => void;
}

const ProgramListCard = ({
  program,
  onEdit,
  onDelete,
  onProgramUpdate,
}: ProgramListCardProps) => {
  const { currentProgram, isActionLoading, actionError, run } = useProgramWorkflow(
    program,
    onProgramUpdate,
  );
  const seatsLeft = programSeatsLeft(currentProgram);

  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:shadow-md lg:flex-row lg:items-center lg:gap-6">
      <div className="flex min-w-0 flex-1 items-center gap-3">
        <img
          src={programImage(currentProgram)}
          alt={currentProgram.thumbnail?.alt || currentProgram.title}
          className="h-12 w-12 shrink-0 rounded-lg object-cover"
        />
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <h3 className="truncate font-semibold text-foreground">{currentProgram.title}</h3>
            {programIsFeatured(currentProgram) && (
              <span className="shrink-0 rounded-full bg-amber-400 px-2 py-0.5 text-[10px] font-bold text-foreground">
                Featured
              </span>
            )}
          </div>
          <p className="truncate text-xs capitalize text-muted-foreground">
            {currentProgram.level} · {programDuration(currentProgram)}
            {seatsLeft !== null && ` · ${seatsLeft} seats left`}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-5 text-sm">
        <StatusBadge variant={statusVariant(currentProgram.status)}>
          {formatStatus(currentProgram.status)}
        </StatusBadge>
        <span className="flex items-center gap-1 text-foreground">
          <Users className="h-3.5 w-3.5 text-muted-foreground" />
          {programStudents(currentProgram)}
        </span>
        <span className="flex items-center gap-1 text-foreground">
          <Star className="h-3.5 w-3.5 fill-[#F59E0B] text-[#F59E0B]" />
          {programRating(currentProgram).toFixed(1)}
        </span>
        <span className="font-semibold text-foreground">{programPrice(currentProgram)}</span>
      </div>

      <div className="lg:w-72">
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

export default ProgramListCard;
