import { Eye, Pencil, Star, Trash2, UploadCloud, Users } from "lucide-react";

import type { Program } from "@/services/program.service";
import StatusBadge from "@/components/shared/StatusBadge";
import {
  formatCurrency,
  formatStatus,
  programDuration,
  programImage,
  programIsFeatured,
  programPrice,
  programRating,
  programRevenue,
  programStudents,
  statusVariant,
} from "@/components/shared/programDisplay";

interface ProgramGridCardProps {
  program: Program;
  onView: (program: Program) => void;
  onEdit: (program: Program) => void;
  onPublish: (program: Program) => void;
  onDelete: (program: Program) => void;
}

export default function ProgramGridCard({
  program,
  onView,
  onEdit,
  onPublish,
  onDelete,
}: ProgramGridCardProps) {
  const canPublish = program.status === "draft" || program.status === "published";

  return (
    <article className="rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:shadow-md">
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

      {/* Body */}
      <div className="mt-3">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-[#EFF6FF] px-2.5 py-1 text-[11px] font-semibold text-primary">
            {program.category || "General"}
          </span>
          <span className="font-bold text-foreground">{programPrice(program)}</span>
        </div>

        <h3 className="mt-2 line-clamp-1 font-semibold text-foreground">{program.title}</h3>
        <p className="mt-1 line-clamp-1 text-sm text-muted-foreground">
          {program.shortDescription || "No description available."}
        </p>
      </div>

      {/* Stat strip */}
      <div className="mt-3 grid grid-cols-4 divide-x divide-border rounded-xl bg-secondary py-2 text-center">
        <div>
          <p className="text-sm font-bold text-foreground">{programDuration(program)}</p>
          <p className="text-[11px] text-muted-foreground">Duration</p>
        </div>
        <div>
          <p className="text-sm font-bold text-foreground">{programStudents(program)}</p>
          <p className="text-[11px] text-muted-foreground">Students</p>
        </div>
        <div>
          <p className="text-sm font-bold capitalize text-foreground">{program.level}</p>
          <p className="text-[11px] text-muted-foreground">Level</p>
        </div>
        <div>
          <p className="flex items-center justify-center gap-0.5 text-sm font-bold text-foreground">
            <Star className="h-3 w-3 fill-[#F59E0B] text-[#F59E0B]" />
            {programRating(program).toFixed(1)}
          </p>
          <p className="text-[11px] text-muted-foreground">Rating</p>
        </div>
      </div>

      {/* Revenue */}
      <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <Users className="h-3.5 w-3.5" />
          Revenue
        </span>
        <span className="font-semibold text-foreground">
          {formatCurrency(programRevenue(program), program.pricing?.currency || "USD")}
        </span>
      </div>

      {/* Actions */}
      <div className="mt-3 flex items-center gap-2">
        <button
          type="button"
          onClick={() => onView(program)}
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
        >
          <Eye className="h-4 w-4" />
          View
        </button>

        <button
          type="button"
          onClick={() => onEdit(program)}
          aria-label="Edit program"
          title="Edit"
          className="rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:bg-[#FFFBEB] hover:text-[#B45309]"
        >
          <Pencil className="h-4 w-4" />
        </button>

        {canPublish && (
          <button
            type="button"
            onClick={() => onPublish(program)}
            aria-label={program.status === "draft" ? "Publish program" : "Manage program status"}
            title={program.status === "draft" ? "Publish" : "Manage status"}
            className="rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:bg-[#ECFDF5] hover:text-[#065F46]"
          >
            <UploadCloud className="h-4 w-4" />
          </button>
        )}

        <button
          type="button"
          onClick={() => onDelete(program)}
          aria-label="Delete program"
          title="Delete"
          className="rounded-lg border border-border p-2 text-[#BA1A1A] transition-colors hover:bg-[#FFDAD6]"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </article>
  );
}
