import RevenueChart from "./RevenueChart";
import TransactionsChart from "./TransactionsChart";
import UsersGrowthChart from "./UsersGrowthChart";
import MentorPerformanceChart from "./MentorPerformanceChart";
import TopMentorsCard from "./TopMentorsCard";
import TopProgramsCard from "./TopProgramsCard";
import TopCategoriesCard from "./TopCategoriesCard";
import RevenueSourcesCard from "./RevenueSourcesCard";
import RecentTransactionsCard from "./RecentTransactionsCard";

import type { AdminReportData } from "@/types/admin-report";

interface ReportsGridProps {
  reports: AdminReportData;
}

export default function ReportsGrid({
  reports,
}: ReportsGridProps) {
  return (
    <div className="space-y-6">

      <div className="grid gap-6 xl:grid-cols-2">

        <RevenueChart
          data={reports.revenueChart}
          totalRevenue={reports.revenue.totalRevenue}
          growth={reports.revenue.revenueGrowth}
        />

        <TransactionsChart
          data={reports.transactionChart}
        />

      </div>

      <div className="grid gap-6 xl:grid-cols-2">

        <UsersGrowthChart
          data={reports.userGrowthChart}
        />

        <MentorPerformanceChart
          data={reports.mentorGrowthChart}
        />

      </div>

      <div className="grid gap-6 xl:grid-cols-2">

        <TopMentorsCard
          mentors={reports.topMentors}
        />

        <TopProgramsCard
          programs={reports.topPrograms}
        />

      </div>

      <div className="grid gap-6 xl:grid-cols-2">
                <TopCategoriesCard
          categories={reports.topCategories}
        />

        <RevenueSourcesCard
          sources={reports.revenueSources}
        />

      </div>

      <RecentTransactionsCard
        transactions={reports.recentTransactions}
      />

    </div>
  );
}