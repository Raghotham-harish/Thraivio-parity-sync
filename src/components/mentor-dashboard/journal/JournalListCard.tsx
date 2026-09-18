import { NotebookPen, Pencil, Trash2 } from "lucide-react";

import type { JournalEntry } from "@/types/journal";

interface JournalListCardProps {
  entry: JournalEntry;

  onEdit: (entry: JournalEntry) => void;

  onDelete: (entry: JournalEntry) => void;
}

const JournalListCard = ({ entry, onEdit, onDelete }: JournalListCardProps) => {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-border bg-card px-4 py-3 shadow-sm transition-colors hover:bg-secondary/40">
      <div className="icon-bg flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
        <NotebookPen className="h-4 w-4 text-primary" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-foreground">{entry.title}</p>
        <p className="truncate text-xs text-muted-foreground">{entry.body}</p>
      </div>

      <div className="hidden shrink-0 flex-wrap items-center gap-1.5 sm:flex">
        {entry.tags.slice(0, 2).map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-secondary px-2.5 py-1 text-[11px] text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <span className="hidden shrink-0 text-xs text-muted-foreground lg:block">
        {entry.updatedAt}
      </span>

      <div className="flex shrink-0 items-center gap-1.5">
        <button
          type="button"
          onClick={() => onEdit(entry)}
          aria-label="Edit entry"
          title="Edit"
          className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <Pencil className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => onDelete(entry)}
          aria-label="Delete entry"
          title="Delete"
          className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-[#FFDAD6] hover:text-red-600"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default JournalListCard;
