import { Search } from "lucide-react";

import { EmptyState } from "@/components/shared/EmptyState";
import searchIllustration from "@/assets/illustrations/search.svg";

interface EmptySavedMentorsProps {
  onBrowseMentors?: () => void;
}

const EmptySavedMentors = ({
  onBrowseMentors,
}: EmptySavedMentorsProps) => {
  return (
    <EmptyState
      illustration={searchIllustration}
      title="No Saved Mentors Yet"
      description="Save your favorite mentors for quick access to their profiles and sessions."
      action={
        onBrowseMentors
          ? {
              label: "Browse Mentors",
              onClick: onBrowseMentors,
              icon: Search,
            }
          : undefined
      }
    />
  );
};

export default EmptySavedMentors;
