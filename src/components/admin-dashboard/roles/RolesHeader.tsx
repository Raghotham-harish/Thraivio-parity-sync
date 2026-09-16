import { Download, Plus, ShieldCheck } from "lucide-react";

import { FeatureHeader } from "@/components/admin-dashboard/shared/FeatureHeader";

interface RolesHeaderProps {
  totalRoles: number;
  totalUsersAssigned: number;
  onCreate: () => void;
  onExport: () => void;
}

export default function RolesHeader({
  totalRoles,
  totalUsersAssigned,
  onCreate,
  onExport,
}: RolesHeaderProps) {
  return (
    <FeatureHeader
      icon={ShieldCheck}
      eyebrow="Roles & Permissions"
      title="Access Control Management"
      description="Manage administrator roles, permissions, access levels and platform security policies from a centralized dashboard."
      meta={[
        { icon: ShieldCheck, label: `${totalRoles.toLocaleString()} Roles` },
        { label: `${totalUsersAssigned.toLocaleString()} Assigned Users` },
      ]}
      primaryAction={{ label: "Create Role", icon: Plus, onClick: onCreate }}
      secondaryAction={{ label: "Export", icon: Download, onClick: onExport }}
    />
  );
}
