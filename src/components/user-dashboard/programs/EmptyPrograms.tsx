import { Search } from "lucide-react";

import { EmptyState } from "@/components/shared/EmptyState";
import planningIllustration from "@/assets/illustrations/planning.svg";

interface EmptyProgramsProps {
  onBrowsePrograms: () => void;
}

const EmptyPrograms = ({
  onBrowsePrograms,
}: EmptyProgramsProps) => {
  return (
    <EmptyState
      illustration={planningIllustration}
      title="No Programs Found"
      description="You haven't enrolled in any mentorship programs yet."
      action={{
        label: "Browse Programs",
        onClick: onBrowsePrograms,
        icon: Search,
      }}
    />
  );
};

export default EmptyPrograms;
