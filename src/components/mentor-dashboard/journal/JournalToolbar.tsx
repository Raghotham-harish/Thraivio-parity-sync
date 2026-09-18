import { LayoutGrid, List, Search } from "lucide-react";

interface JournalToolbarProps {
  search: string;

  setSearch: (value: string) => void;

  view: "grid" | "list";

  setView: (value: "grid" | "list") => void;
}

const JournalToolbar = ({ search, setSearch, view, setView }: JournalToolbarProps) => {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="relative w-full lg:max-w-md">
        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search entries, tags, students..."
          className="w-full rounded-xl border border-border bg-background py-2.5 pl-11 pr-4 text-sm outline-none focus:border-primary"
        />
      </div>

      <div className="flex items-center overflow-hidden rounded-xl border border-border">
        <button
          type="button"
          onClick={() => setView("grid")}
          className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors ${
            view === "grid" ? "bg-primary text-white" : "text-muted-foreground hover:bg-secondary"
          }`}
        >
          <LayoutGrid className="h-4 w-4" />
          Grid
        </button>
        <button
          type="button"
          onClick={() => setView("list")}
          className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors ${
            view === "list" ? "bg-primary text-white" : "text-muted-foreground hover:bg-secondary"
          }`}
        >
          <List className="h-4 w-4" />
          List
        </button>
      </div>
    </div>
  );
};

export default JournalToolbar;
