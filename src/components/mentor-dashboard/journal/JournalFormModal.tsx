import { useEffect, useState } from "react";
import { X } from "lucide-react";

import type { JournalEntry } from "@/types/journal";

interface JournalFormModalProps {
  open: boolean;

  entry: JournalEntry | null;

  onClose: () => void;

  onSave: (entry: JournalEntry) => void;
}

const today = () => new Date().toISOString().slice(0, 10);

const emptyEntry = (): JournalEntry => ({
  id: Date.now().toString(),
  title: "",
  body: "",
  tags: [],
  createdAt: today(),
  updatedAt: today(),
});

const JournalFormModal = ({ open, entry, onClose, onSave }: JournalFormModalProps) => {
  const [formData, setFormData] = useState<JournalEntry>(emptyEntry());
  const [tagsInput, setTagsInput] = useState("");

  useEffect(() => {
    if (entry) {
      setFormData(entry);
      setTagsInput(entry.tags.join(", "));
    } else {
      setFormData(emptyEntry());
      setTagsInput("");
    }
  }, [entry, open]);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...formData,
      tags: tagsInput
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
      updatedAt: today(),
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/50 p-4">
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-card p-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              {entry ? "Edit Entry" : "New Journal Entry"}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Private to you — not visible to students or admins.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-sm font-medium text-foreground">Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="e.g. Rahul — mock interview follow-up"
              className="mt-2 w-full rounded-xl border border-border bg-background p-3 text-sm outline-none focus:border-primary"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground">Linked student (optional)</label>
            <input
              type="text"
              value={formData.linkedStudentName ?? ""}
              onChange={(e) => setFormData({ ...formData, linkedStudentName: e.target.value })}
              placeholder="e.g. Rahul Sharma"
              className="mt-2 w-full rounded-xl border border-border bg-background p-3 text-sm outline-none focus:border-primary"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground">Entry</label>
            <textarea
              value={formData.body}
              onChange={(e) => setFormData({ ...formData, body: e.target.value })}
              rows={6}
              placeholder="What happened, what to follow up on, ideas for next time..."
              className="mt-2 w-full resize-none rounded-xl border border-border bg-background p-3 text-sm outline-none focus:border-primary"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground">Tags (comma-separated)</label>
            <input
              type="text"
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              placeholder="career-guidance, follow-up"
              className="mt-2 w-full rounded-xl border border-border bg-background p-3 text-sm outline-none focus:border-primary"
            />
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
            >
              {entry ? "Save Changes" : "Create Entry"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JournalFormModal;
