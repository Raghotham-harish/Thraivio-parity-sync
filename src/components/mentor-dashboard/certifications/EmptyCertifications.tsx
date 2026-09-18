import { Plus } from "lucide-react";

import { EmptyState } from "@/components/shared/EmptyState";
import goalIllustration from "@/assets/illustrations/goal.svg";

interface EmptyCertificationsProps {
  onAddCertification: () => void;
}

const EmptyCertifications = ({ onAddCertification }: EmptyCertificationsProps) => {
  return (
    <EmptyState
      illustration={goalIllustration}
      title="No Certifications Found"
      description="Add your professional certifications and credentials to build trust and credibility with mentees."
      action={{
        label: "Add First Certification",
        onClick: onAddCertification,
        icon: Plus,
      }}
    />
  );
};

export default EmptyCertifications;
