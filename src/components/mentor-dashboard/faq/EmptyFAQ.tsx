import { Plus } from "lucide-react";

import { EmptyState } from "@/components/shared/EmptyState";
import chatIllustration from "@/assets/illustrations/chat.svg";

interface EmptyFAQProps {
  onAddFAQ: () => void;
}

const EmptyFAQ = ({ onAddFAQ }: EmptyFAQProps) => {
  return (
    <EmptyState
      illustration={chatIllustration}
      title="No FAQs Found"
      description="Create frequently asked questions to help students understand your mentorship process and offerings."
      action={{
        label: "Add First FAQ",
        onClick: onAddFAQ,
        icon: Plus,
      }}
    />
  );
};

export default EmptyFAQ;
