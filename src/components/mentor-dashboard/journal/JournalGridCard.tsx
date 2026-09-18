import { Pencil, Trash2 } from "lucide-react";

import type { JournalEntry } from "@/types/journal";

interface JournalGridCardProps {
  entry: JournalEntry;

  onEdit: (entry: JournalEntry) => void;

  onDelete: (entry: JournalEntry) => void;
}

const JournalGridCard = ({ entry, onEdit, onDelete }: JournalGridCardProps) => {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:shadow-md">
      {/* Title + date */}
      <div className="flex items-start justify-between gap-2">
        <h3 className="min-w-0 truncate font-semibold text-foreground">{entry.title}</h3>
        <span className="shrink-0 text-xs text-muted-foreground">{entry.updatedAt}</span>
      </div>

      {entry.linkedStudentName && (
        <p className="mt-1 text-xs text-muted-foreground">Re: {entry.linkedStudentName}</p>
      )}

      {/* Body snippet */}
      <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted-foreground">{entry.body}</p>

      {/* Tags */}
      {entry.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap items-center gap-1.5">
          {entry.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-secondary px-2.5 py-1 text-[11px] text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="mt-3 flex items-center gap-2">
        <button
          type="button"
          onClick={() => onEdit(entry)}
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
        >
          <Pencil className="h-4 w-4" />
          Edit
        </button>
        <button
          type="button"
          onClick={() => onDelete(entry)}
          aria-label="Delete entry"
          title="Delete"
          className="rounded-lg border border-border p-2 text-red-600 transition-colors hover:bg-[#FFDAD6]"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default JournalGridCard;
