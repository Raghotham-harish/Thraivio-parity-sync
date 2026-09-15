import {
  BadgeDollarSign,
  CreditCard,
  Receipt,
  TrendingUp,
  Clock3,
  AlertTriangle,
  RotateCcw,
  Wallet,
} from "lucide-react";

import { StatCard, type StatCardAccent } from "@/components/admin-dashboard/shared/StatCard";

interface PaymentsStatsProps {
  totalRevenue: number;
  totalTransactions: number;
  successfulPayments: number;
  pendingPayments: number;
  failedPayments: number;
  refundedAmount: number;
  averageOrderValue: number;
  monthlyRevenue: number;
}

export default function PaymentsStats({
  totalRevenue,
  totalTransactions,
  successfulPayments,
  pendingPayments,
  failedPayments,
  refundedAmount,
  averageOrderValue,
  monthlyRevenue,
}: PaymentsStatsProps) {
  const stats: {
    title: string;
    value: string;
    description: string;
    icon: typeof BadgeDollarSign;
    accent: StatCardAccent;
  }[] = [
    { title: "Total Revenue", value: `₹${totalRevenue.toLocaleString("en-IN")}`, description: "Platform earnings", icon: BadgeDollarSign, accent: "success" },
    { title: "Transactions", value: totalTransactions.toLocaleString(), description: "All payment records", icon: CreditCard, accent: "default" },
    { title: "Successful", value: successfulPayments.toLocaleString(), description: "Completed payments", icon: Receipt, accent: "success" },
    { title: "Pending", value: pendingPayments.toLocaleString(), description: "Awaiting confirmation", icon: Clock3, accent: "default" },
    { title: "Failed", value: failedPayments.toLocaleString(), description: "Payment failures", icon: AlertTriangle, accent: "default" },
    { title: "Refunded", value: `₹${refundedAmount.toLocaleString("en-IN")}`, description: "Refund amount", icon: RotateCcw, accent: "default" },
    { title: "Average Order", value: `₹${averageOrderValue.toLocaleString("en-IN")}`, description: "Average transaction", icon: Wallet, accent: "default" },
    { title: "Monthly Revenue", value: `₹${monthlyRevenue.toLocaleString("en-IN")}`, description: "Current month", icon: TrendingUp, accent: "success" },
  ];

  return (
    <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <StatCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          description={stat.description}
          icon={stat.icon}
          accent={stat.accent}
        />
      ))}
    </section>
  );
}
