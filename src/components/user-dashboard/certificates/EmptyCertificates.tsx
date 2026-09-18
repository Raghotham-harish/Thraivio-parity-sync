import { EmptyState } from "@/components/shared/EmptyState";
import goalIllustration from "@/assets/illustrations/goal.svg";

interface EmptyCertificatesProps {
  onBrowsePrograms: () => void;

  onBrowseEvents: () => void;
}

const EmptyCertificates = ({
  onBrowsePrograms,
  onBrowseEvents,
}: EmptyCertificatesProps) => {
  return (
    <EmptyState
      illustration={goalIllustration}
      title="No Certificates Yet"
      description="Complete programs, events, and sessions to earn verified certificates from your mentors."
      action={{
        label: "Browse Programs",
        onClick: onBrowsePrograms,
      }}
      secondaryAction={{
        label: "Browse Events",
        onClick: onBrowseEvents,
      }}
    />
  );
};

export default EmptyCertificates;
