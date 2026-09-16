import { BarChart3, Download, RefreshCw } from "lucide-react";

import { FeatureHeader } from "@/components/admin-dashboard/shared/FeatureHeader";

interface ReportsHeaderProps {
  totalRevenue: number;
  totalTransactions: number;
  onRefresh: () => void;
  onExport: () => void;
}

export default function ReportsHeader({
  totalRevenue,
  totalTransactions,
  onRefresh,
  onExport,
}: ReportsHeaderProps) {
  return (
    <FeatureHeader
      icon={BarChart3}
      eyebrow="Reports & Analytics"
      title="Reports Management"
      description="Monitor platform revenue, mentor performance, transactions, user growth, payments, programs, sessions and business analytics from one centralized dashboard."
      meta={[
        { icon: BarChart3, label: `${totalTransactions.toLocaleString()} Transactions` },
        { label: `₹${totalRevenue.toLocaleString("en-IN")} Revenue` },
      ]}
      primaryAction={{ label: "Export Report", icon: Download, onClick: onExport }}
      secondaryAction={{ label: "Refresh", icon: RefreshCw, onClick: onRefresh }}
    />
  );
}
