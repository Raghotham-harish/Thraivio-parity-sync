import { NotebookPen, Plus } from "lucide-react";

interface JournalHeaderProps {
  totalEntries: number;

  onAddEntry: () => void;
}

const JournalHeader = ({ totalEntries, onAddEntry }: JournalHeaderProps) => {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
          <NotebookPen className="h-3.5 w-3.5" />
          My Journal
        </span>

        <h1 className="mt-2 text-3xl font-bold text-foreground">Session Journal</h1>

        <p className="mt-2 max-w-2xl text-muted-foreground">
          A private space for reflections on your sessions, student progress, and ideas — visible
          only to you.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-lg bg-secondary px-3 py-1.5 text-sm font-medium text-foreground">
            {totalEntries} {totalEntries === 1 ? "Entry" : "Entries"}
          </span>
        </div>
      </div>

      <button
        type="button"
        onClick={onAddEntry}
        className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-white transition-colors hover:bg-primary/90"
      >
        <Plus className="h-5 w-5" />
        New Entry
      </button>
    </div>
  );
};

export default JournalHeader;
