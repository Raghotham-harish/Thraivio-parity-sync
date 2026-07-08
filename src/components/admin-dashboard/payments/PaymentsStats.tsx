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
  const stats = [
    {
      title: "Total Revenue",
      value: `₹${totalRevenue.toLocaleString("en-IN")}`,
      subtitle: "Platform earnings",
      icon: BadgeDollarSign,
      iconBg: "bg-emerald-500/10",
      iconColor: "text-emerald-600",
    },
    {
      title: "Transactions",
      value: totalTransactions.toLocaleString(),
      subtitle: "All payment records",
      icon: CreditCard,
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-600",
    },
    {
      title: "Successful",
      value: successfulPayments.toLocaleString(),
      subtitle: "Completed payments",
      icon: Receipt,
      iconBg: "bg-green-500/10",
      iconColor: "text-green-600",
    },
    {
      title: "Pending",
      value: pendingPayments.toLocaleString(),
      subtitle: "Awaiting confirmation",
      icon: Clock3,
      iconBg: "bg-amber-500/10",
      iconColor: "text-amber-600",
    },
    {
      title: "Failed",
      value: failedPayments.toLocaleString(),
      subtitle: "Payment failures",
      icon: AlertTriangle,
      iconBg: "bg-red-500/10",
      iconColor: "text-red-600",
    },
    {
      title: "Refunded",
      value: `₹${refundedAmount.toLocaleString("en-IN")}`,
      subtitle: "Refund amount",
      icon: RotateCcw,
      iconBg: "bg-purple-500/10",
      iconColor: "text-purple-600",
    },
    {
      title: "Average Order",
      value: `₹${averageOrderValue.toLocaleString("en-IN")}`,
      subtitle: "Average transaction",
      icon: Wallet,
      iconBg: "bg-cyan-500/10",
      iconColor: "text-cyan-600",
    },
    {
      title: "Monthly Revenue",
      value: `₹${monthlyRevenue.toLocaleString("en-IN")}`,
      subtitle: "Current month",
      icon: TrendingUp,
      iconBg: "bg-indigo-500/10",
      iconColor: "text-indigo-600",
    },
  ];

  return (
    <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="group overflow-hidden rounded-3xl border border-border bg-background p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-start justify-between">
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${stat.iconBg}`}
              >
                <Icon className={`h-7 w-7 ${stat.iconColor}`} />
              </div>

              <div className="rounded-full bg-muted px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                Live
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <p className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </p>

              <h3 className="text-3xl font-bold tracking-tight">
                {stat.value}
              </h3>

              <p className="text-xs text-muted-foreground">
                {stat.subtitle}
              </p>
            </div>

            <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-muted">
              <div className="h-full w-2/3 rounded-full bg-primary transition-all duration-500 group-hover:w-full" />
            </div>
          </div>
        );
      })}
    </section>
  );
}