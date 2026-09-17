import { Download, Plus, Users, Activity } from "lucide-react";

import { FeatureHeader } from "@/components/admin-dashboard/shared/FeatureHeader";

interface UsersHeaderProps {
  totalUsers: number;
  activeUsers: number;
  onExport?: () => void;
  onAddUser?: () => void;
}

export default function UsersHeader({
  totalUsers,
  activeUsers,
  onExport,
  onAddUser,
}: UsersHeaderProps) {
  return (
    <FeatureHeader
      icon={Users}
      eyebrow="Users Management"
      title="Manage All Users"
      description="Manage all registered users, monitor account activity, memberships, verification status and user engagement from one centralized dashboard."
      meta={[
        { icon: Users, label: `${totalUsers.toLocaleString()} Total Users` },
        { icon: Activity, label: `${activeUsers.toLocaleString()} Active Users` },
      ]}
      primaryAction={{ label: "Add User", icon: Plus, onClick: onAddUser ?? (() => {}) }}
      secondaryAction={{ label: "Export Users", icon: Download, onClick: onExport ?? (() => {}) }}
    />
  );
}
