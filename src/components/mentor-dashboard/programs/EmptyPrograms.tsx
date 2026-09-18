import { Plus } from "lucide-react";

import { EmptyState } from "@/components/shared/EmptyState";
import planningIllustration from "@/assets/illustrations/planning.svg";

interface EmptyProgramsProps {
  onAddProgram: () => void;
}

const EmptyPrograms = ({ onAddProgram }: EmptyProgramsProps) => {
  return (
    <EmptyState
      illustration={planningIllustration}
      title="No Programs Found"
      description="Start building your first mentorship program and begin accepting enrollments from students."
      action={{
        label: "Create First Program",
        onClick: onAddProgram,
        icon: Plus,
      }}
    />
  );
};

export default EmptyPrograms;
