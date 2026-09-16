import { Download, FolderPlus, Layers3 } from "lucide-react";

import { FeatureHeader } from "@/components/admin-dashboard/shared/FeatureHeader";

interface ProgramsHeaderProps {
  totalPrograms: number;
  publishedPrograms: number;
  onAddProgram: () => void;
  onExport: () => void;
}

export default function ProgramsHeader({
  totalPrograms,
  publishedPrograms,
  onAddProgram,
  onExport,
}: ProgramsHeaderProps) {
  return (
    <FeatureHeader
      icon={Layers3}
      eyebrow="Programs Management"
      title="Manage Programs"
      description="Manage all coaching programs available on the platform. Review content, publish new programs, update pricing and monitor enrollments from one place."
      meta={[
        { label: `${totalPrograms.toLocaleString()} Total Programs` },
        { label: `${publishedPrograms.toLocaleString()} Published` },
      ]}
      primaryAction={{ label: "Add Program", icon: FolderPlus, onClick: onAddProgram }}
      secondaryAction={{ label: "Export", icon: Download, onClick: onExport }}
    />
  );
}
