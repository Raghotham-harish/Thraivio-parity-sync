import { Pencil, Star, Trash2 } from "lucide-react";

import type { Program } from "@/types/program";

interface ProgramListCardProps {
  program: Program;

  onEdit: (program: Program) => void;

  onDelete: (program: Program) => void;
}

const ProgramListCard = ({ program, onEdit, onDelete }: ProgramListCardProps) => {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-border bg-card px-4 py-3 shadow-sm transition-colors hover:bg-secondary/40">
      {program.image && (
        <img
          src={program.image}
          alt={program.title}
          className="h-10 w-10 shrink-0 rounded-lg object-cover"
        />
      )}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <h3 className="truncate text-sm font-semibold text-foreground">{program.title}</h3>
          {program.featured && (
            <span className="shrink-0 rounded-full bg-amber-400 px-2 py-0.5 text-[10px] font-bold text-foreground">
              Featured
            </span>
          )}
        </div>
        <p className="truncate text-xs text-muted-foreground">
          {program.level} · {program.duration}
        </p>
      </div>

      <div className="hidden shrink-0 items-center gap-4 text-center text-xs text-muted-foreground sm:flex">
        <div>
          <p className="font-semibold text-foreground">{program.students}</p>
          Students
        </div>
        <div>
          <p className="flex items-center justify-center gap-0.5 font-semibold text-foreground">
            <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
            {program.rating ?? "—"}
          </p>
          Rating
        </div>
      </div>

      <div className="hidden w-14 shrink-0 text-right text-xs lg:block">
        <span className="font-semibold text-foreground">${program.price}</span>
        {typeof program.seatsLeft === "number" && (
          <p className="text-muted-foreground">{program.seatsLeft} left</p>
        )}
      </div>

      <div className="flex shrink-0 items-center gap-1.5">
        <button
          type="button"
          onClick={() => onEdit(program)}
          aria-label="Edit program"
          title="Edit"
          className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <Pencil className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => onDelete(program)}
          aria-label="Delete program"
          title="Delete"
          className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-[#FFDAD6] hover:text-red-600"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default ProgramListCard;
