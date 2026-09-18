import { Search } from "lucide-react";

import { EmptyState } from "@/components/shared/EmptyState";
import planningIllustration from "@/assets/illustrations/planning.svg";

interface EmptyProgramsProps {
  onBrowsePrograms?: () => void;
  hasSearch?: boolean;
}

const EmptyPrograms = ({ onBrowsePrograms, hasSearch = false }: EmptyProgramsProps) => {
  return (
    <EmptyState
      illustration={planningIllustration}
      title={hasSearch ? "No Matching Programs" : "No Programs Found"}
      description={
        hasSearch
          ? "No programs match your search. Try a different keyword or clear the search."
          : "There are no programs available right now. Check back soon."
      }
      action={
        onBrowsePrograms
          ? { label: "Browse Programs", onClick: onBrowsePrograms, icon: Search }
          : undefined
      }
    />
  );
};

export default EmptyPrograms;
