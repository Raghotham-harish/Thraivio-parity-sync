import { Eye, Pencil, Star, Trash2, UploadCloud } from "lucide-react";

import type { Program } from "@/services/program.service";
import StatusBadge from "@/components/shared/StatusBadge";
import {
  formatStatus,
  programImage,
  programPrice,
  programRating,
  programStudents,
  statusVariant,
} from "@/components/shared/programDisplay";

interface ProgramListRowProps {
  program: Program;
  onView: (program: Program) => void;
  onEdit: (program: Program) => void;
  onPublish: (program: Program) => void;
  onDelete: (program: Program) => void;
}

const iconButton =
  "rounded-lg border border-border p-2 text-muted-foreground transition-colors";

// Rendered inside ProgramsTable's <tbody>, so this must stay a <tr>.
export default function ProgramListRow({
  program,
  onView,
  onEdit,
  onPublish,
  onDelete,
}: ProgramListRowProps) {
  const canPublish = program.status === "draft" || program.status === "published";

  return (
    <tr className="border-b border-border transition-colors hover:bg-secondary/60">
      <td className="px-6 py-3">
        <div className="flex items-center gap-3">
          <img
            src={programImage(program)}
            alt={program.thumbnail?.alt || program.title}
            className="h-10 w-10 shrink-0 rounded-lg object-cover"
          />
          <div className="min-w-0">
            <p className="max-w-[260px] truncate font-semibold text-foreground">{program.title}</p>
            <p className="text-xs text-muted-foreground">{program.category || "General"}</p>
          </div>
        </div>
      </td>

      <td className="px-6 py-3">
        <StatusBadge variant={statusVariant(program.status)}>
          {formatStatus(program.status)}
        </StatusBadge>
      </td>

      <td className="px-6 py-3 text-sm capitalize text-foreground">{program.level}</td>
      <td className="px-6 py-3 text-sm text-foreground">{programStudents(program)}</td>

      <td className="px-6 py-3">
        <span className="flex items-center gap-1 text-sm text-foreground">
          <Star className="h-3.5 w-3.5 fill-[#F59E0B] text-[#F59E0B]" />
          {programRating(program).toFixed(1)}
        </span>
      </td>

      <td className="px-6 py-3 text-sm font-semibold text-foreground">{programPrice(program)}</td>

      <td className="px-6 py-3">
        <div className="flex items-center justify-center gap-1.5">
          <button
            type="button"
            onClick={() => onView(program)}
            aria-label="View program"
            title="View"
            className={`${iconButton} hover:bg-[#EFF6FF] hover:text-primary`}
          >
            <Eye className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => onEdit(program)}
            aria-label="Edit program"
            title="Edit"
            className={`${iconButton} hover:bg-[#FFFBEB] hover:text-[#B45309]`}
          >
            <Pencil className="h-4 w-4" />
          </button>
          {canPublish && (
            <button
              type="button"
              onClick={() => onPublish(program)}
              aria-label={program.status === "draft" ? "Publish program" : "Manage program status"}
              title={program.status === "draft" ? "Publish" : "Manage status"}
              className={`${iconButton} hover:bg-[#ECFDF5] hover:text-[#065F46]`}
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
      </td>
    </tr>
  );
}
