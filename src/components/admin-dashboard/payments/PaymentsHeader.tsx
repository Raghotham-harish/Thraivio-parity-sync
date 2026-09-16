import { CreditCard, Download, Plus } from "lucide-react";

import { FeatureHeader } from "@/components/admin-dashboard/shared/FeatureHeader";

interface PaymentsHeaderProps {
  totalPayments: number;
  totalRevenue: number;
  onCreatePayment: () => void;
  onExport: () => void;
}

export function PaymentsHeader({
  totalPayments,
  totalRevenue,
  onCreatePayment,
  onExport,
}: PaymentsHeaderProps) {
  return (
    <FeatureHeader
      icon={CreditCard}
      eyebrow="Admin Dashboard"
      title="Payment Management"
      description="Manage platform payments, monitor transactions, review invoices, process refunds, and track mentor payouts from one centralized dashboard."
      meta={[
        { icon: CreditCard, label: `${totalPayments.toLocaleString()} Payments` },
        { label: `₹${totalRevenue.toLocaleString("en-IN")}` },
      ]}
      primaryAction={{ label: "Create Payment", icon: Plus, onClick: onCreatePayment }}
      secondaryAction={{ label: "Export", icon: Download, onClick: onExport }}
    />
  );
}

export default PaymentsHeader;
