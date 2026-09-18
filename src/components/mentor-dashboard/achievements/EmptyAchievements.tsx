import { Plus } from "lucide-react";

import { EmptyState } from "@/components/shared/EmptyState";
import goalIllustration from "@/assets/illustrations/goal.svg";

interface EmptyAchievementsProps {
  onAddAchievement: () => void;
}

const EmptyAchievements = ({ onAddAchievement }: EmptyAchievementsProps) => {
  return (
    <EmptyState
      illustration={goalIllustration}
      title="No Achievements Found"
      description="Showcase your accomplishments and mentorship milestones to build trust with future mentees."
      action={{
        label: "Create First Achievement",
        onClick: onAddAchievement,
        icon: Plus,
      }}
    />
  );
};

export default EmptyAchievements;
