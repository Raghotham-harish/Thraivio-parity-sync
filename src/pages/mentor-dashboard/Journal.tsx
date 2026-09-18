import { useMemo, useState } from "react";

import type { JournalEntry } from "@/types/journal";

import JournalHeader from "@/components/mentor-dashboard/journal/JournalHeader";
import JournalToolbar from "@/components/mentor-dashboard/journal/JournalToolbar";
import JournalGridCard from "@/components/mentor-dashboard/journal/JournalGridCard";
import JournalListCard from "@/components/mentor-dashboard/journal/JournalListCard";
import EmptyJournal from "@/components/mentor-dashboard/journal/EmptyJournal";
import JournalFormModal from "@/components/mentor-dashboard/journal/JournalFormModal";
import DeleteJournalDialog from "@/components/mentor-dashboard/journal/DeleteJournalDialog";

const initialEntries: JournalEntry[] = [
  {
    id: "1",
    title: "Rahul — mock interview follow-up",
    body: "Rahul did well on system design but froze on behavioral questions. Suggested he prepare 3 STAR-format stories before our next call. Strong candidate overall — recommend the Career Acceleration program.",
    tags: ["mock-interview", "follow-up"],
    linkedStudentName: "Rahul Sharma",
    createdAt: "2026-09-10",
    updatedAt: "2026-09-10",
  },
  {
    id: "2",
    title: "Idea: cohort-based leadership program",
    body: "A few mentees have asked about group coaching for first-time managers. Worth pitching a 6-week cohort program next quarter — could pair well with the existing Leadership Growth Program content.",
    tags: ["program-idea"],
    createdAt: "2026-09-05",
    updatedAt: "2026-09-12",
  },
  {
    id: "3",
    title: "Priya — career pivot progress",
    body: "Priya's transition from marketing to product is going well. She shipped her first PRD this month. Next session: mock PM interview + resume review.",
    tags: ["progress", "career-pivot"],
    linkedStudentName: "Priya Patel",
    createdAt: "2026-08-28",
    updatedAt: "2026-09-01",
  },
];

const Journal = () => {
  const [entries, setEntries] = useState(initialEntries);
  const [search, setSearch] = useState("");
  const [view, setView] = useState<"grid" | "list">("grid");

  const [selectedEntry, setSelectedEntry] = useState<JournalEntry | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const filteredEntries = useMemo(() => {
    const query = search.toLowerCase();
    return entries.filter(
      (entry) =>
        entry.title.toLowerCase().includes(query) ||
        entry.body.toLowerCase().includes(query) ||
        entry.tags.some((tag) => tag.toLowerCase().includes(query)) ||
        entry.linkedStudentName?.toLowerCase().includes(query),
    );
  }, [entries, search]);

  const handleAddEntry = () => {
    setSelectedEntry(null);
    setIsFormOpen(true);
  };

  const handleEditEntry = (entry: JournalEntry) => {
    setSelectedEntry(entry);
    setIsFormOpen(true);
  };

  const handleDeleteEntry = (entry: JournalEntry) => {
    setSelectedEntry(entry);
    setIsDeleteOpen(true);
  };

  const handleSaveEntry = (entry: JournalEntry) => {
    setEntries((prev) =>
      prev.some((item) => item.id === entry.id)
        ? prev.map((item) => (item.id === entry.id ? entry : item))
        : [entry, ...prev],
    );
    setIsFormOpen(false);
  };

  const confirmDelete = () => {
    if (!selectedEntry) return;
    setEntries((prev) => prev.filter((item) => item.id !== selectedEntry.id));
    setIsDeleteOpen(false);
  };

  return (
    <div className="space-y-6">
      <JournalHeader totalEntries={entries.length} onAddEntry={handleAddEntry} />

      <JournalToolbar search={search} setSearch={setSearch} view={view} setView={setView} />

      {filteredEntries.length === 0 ? (
        <EmptyJournal onAddEntry={handleAddEntry} />
      ) : view === "grid" ? (
        <div className="grid gap-4 lg:grid-cols-2">
          {filteredEntries.map((entry) => (
            <JournalGridCard
              key={entry.id}
              entry={entry}
              onEdit={handleEditEntry}
              onDelete={handleDeleteEntry}
            />
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {filteredEntries.map((entry) => (
            <JournalListCard
              key={entry.id}
              entry={entry}
              onEdit={handleEditEntry}
              onDelete={handleDeleteEntry}
            />
          ))}
        </div>
      )}

      <JournalFormModal
        open={isFormOpen}
        entry={selectedEntry}
        onClose={() => setIsFormOpen(false)}
        onSave={handleSaveEntry}
      />

      <DeleteJournalDialog
        open={isDeleteOpen}
        entry={selectedEntry}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={confirmDelete}
      />
    </div>
  );
};

export default Journal;
