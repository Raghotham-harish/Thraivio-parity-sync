import { Download, Plus, ShieldCheck, Users } from "lucide-react";

import { FeatureHeader } from "@/components/admin-dashboard/shared/FeatureHeader";

interface MentorsHeaderProps {
  totalMentors: number;
  verifiedMentors: number;
  onAddMentor: () => void;
  onExport: () => void;
}

export default function MentorsHeader({
  totalMentors,
  verifiedMentors,
  onAddMentor,
  onExport,
}: MentorsHeaderProps) {
  return (
    <FeatureHeader
      icon={ShieldCheck}
      eyebrow="Mentors Management"
      title="Manage All Mentors"
      description="Review mentor profiles, approve applications, verify documents, monitor performance, and manage the mentor community from one place."
      meta={[
        { icon: Users, label: `${totalMentors.toLocaleString()} Total Mentors` },
        { icon: ShieldCheck, label: `${verifiedMentors.toLocaleString()} Verified` },
      ]}
      primaryAction={{ label: "Add Mentor", icon: Plus, onClick: onAddMentor }}
      secondaryAction={{ label: "Export Data", icon: Download, onClick: onExport }}
    />
  );
}
