import { NotebookPen } from "lucide-react";

import { EmptyState } from "@/components/shared/EmptyState";
import planningIllustration from "@/assets/illustrations/planning.svg";

interface EmptyJournalProps {
  onAddEntry: () => void;
}

const EmptyJournal = ({ onAddEntry }: EmptyJournalProps) => {
  return (
    <EmptyState
      illustration={planningIllustration}
      title="No Journal Entries Yet"
      description="Keep a private record of session reflections, student progress, and ideas for future programs."
      action={{
        label: "Write First Entry",
        onClick: onAddEntry,
        icon: NotebookPen,
      }}
    />
  );
};

export default EmptyJournal;
