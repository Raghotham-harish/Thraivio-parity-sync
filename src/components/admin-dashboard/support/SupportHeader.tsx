import { Download, Headset, Plus } from "lucide-react";

import { FeatureHeader } from "@/components/admin-dashboard/shared/FeatureHeader";

interface SupportHeaderProps {
  totalTickets: number;
  customerSatisfaction: string;
  onCreate: () => void;
  onExport: () => void;
}

export default function SupportHeader({
  totalTickets,
  customerSatisfaction,
  onCreate,
  onExport,
}: SupportHeaderProps) {
  return (
    <FeatureHeader
      icon={Headset}
      eyebrow="Support Management"
      title="Customer Support Center"
      description="Manage customer support tickets, assign requests, monitor ticket progress and resolve issues efficiently from one place."
      meta={[
        { icon: Headset, label: `${totalTickets.toLocaleString()} Tickets` },
        { label: `${customerSatisfaction} Satisfaction` },
      ]}
      primaryAction={{ label: "Create Ticket", icon: Plus, onClick: onCreate }}
      secondaryAction={{ label: "Export", icon: Download, onClick: onExport }}
    />
  );
}
