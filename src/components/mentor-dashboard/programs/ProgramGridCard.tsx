import { Pencil, Star, Trash2, Users } from "lucide-react";

import type { Program } from "@/types/program";

interface ProgramGridCardProps {
  program: Program;

  onEdit: (program: Program) => void;

  onDelete: (program: Program) => void;
}

const ProgramGridCard = ({ program, onEdit, onDelete }: ProgramGridCardProps) => {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:shadow-md">
      {/* Thumbnail + title */}
      <div className="flex items-start gap-3">
        {program.image && (
          <img
            src={program.image}
            alt={program.title}
            className="h-12 w-12 shrink-0 rounded-lg object-cover"
          />
        )}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <h3 className="truncate font-semibold text-foreground">{program.title}</h3>
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
      </div>

      {/* Stat strip */}
      <div className="mt-3 grid grid-cols-3 divide-x divide-border rounded-xl bg-secondary py-2 text-center">
        <div>
          <p className="flex items-center justify-center gap-1 text-xs font-bold text-foreground">
            <Users className="h-3 w-3" />
            {program.students}
          </p>
          <p className="text-[10px] text-muted-foreground">Students</p>
        </div>
        <div>
          <p className="text-xs font-bold text-foreground">${program.price}</p>
          <p className="text-[10px] text-muted-foreground">Price</p>
        </div>
        <div>
          <p className="flex items-center justify-center gap-0.5 text-xs font-bold text-foreground">
            <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
            {program.rating ?? "—"}
          </p>
          <p className="text-[10px] text-muted-foreground">{program.reviews ?? 0} reviews</p>
        </div>
      </div>

      {typeof program.seatsLeft === "number" && (
        <p className="mt-2.5 text-xs text-muted-foreground">{program.seatsLeft} seats left</p>
      )}

      {/* Actions */}
      <div className="mt-3 flex items-center gap-2">
        <button
          type="button"
          onClick={() => onEdit(program)}
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
        >
          <Pencil className="h-4 w-4" />
          Edit
        </button>
        <button
          type="button"
          onClick={() => onDelete(program)}
          aria-label="Delete program"
          title="Delete"
          className="rounded-lg border border-border p-2 text-red-600 transition-colors hover:bg-[#FFDAD6]"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default ProgramGridCard;
