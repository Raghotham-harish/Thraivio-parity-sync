import { Download, Save, Settings2 } from "lucide-react";

import { FeatureHeader } from "@/components/admin-dashboard/shared/FeatureHeader";

interface SettingsHeaderProps {
  environment: string;
  lastUpdated: string;
  onSave: () => void;
  onExport: () => void;
}

export default function SettingsHeader({
  environment,
  lastUpdated,
  onSave,
  onExport,
}: SettingsHeaderProps) {
  return (
    <FeatureHeader
      icon={Settings2}
      eyebrow="Platform Settings"
      title="System Configuration"
      description="Configure platform preferences, integrations, branding, security and all global application settings from one place."
      meta={[
        { icon: Settings2, label: environment },
        { label: `Updated ${lastUpdated}` },
      ]}
      primaryAction={{ label: "Save Changes", icon: Save, onClick: onSave }}
      secondaryAction={{ label: "Export Settings", icon: Download, onClick: onExport }}
    />
  );
}
