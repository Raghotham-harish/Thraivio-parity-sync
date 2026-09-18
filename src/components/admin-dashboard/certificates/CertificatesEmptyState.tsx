import { memo } from "react";

import { Plus, RotateCcw } from "lucide-react";

import EmptyState from "@/components/shared/EmptyState";
import folderIllustration from "@/assets/illustrations/folder.svg";

interface CertificatesEmptyStateProps {
  search: string;

  activeFilters: number;

  loading?: boolean;

  onIssueCertificate: () => void;

  onRefresh: () => void;

  onResetFilters: () => void;

  onImportCertificates: () => void;

  onDocumentation?: () => void;
}

const CertificatesEmptyState = ({
  onIssueCertificate,
  onResetFilters,
}: CertificatesEmptyStateProps) => {
  return (
    <EmptyState
      illustration={folderIllustration}
      title="No Certificates Found"
      description="No certificates match your current search or filters."
      action={{
        label: "Issue Certificate",
        onClick: onIssueCertificate,
        icon: Plus,
      }}
      secondaryAction={{
        label: "Reset Filters",
        onClick: onResetFilters,
        icon: RotateCcw,
      }}
    />
  );
};

export default memo(CertificatesEmptyState);
