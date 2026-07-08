import { useMemo, useState } from "react";

import ReportsHeader from "@/components/admin-dashboard/reports/ReportsHeader";
import ReportsStats from "@/components/admin-dashboard/reports/ReportsStats";
import ReportsToolbar from "@/components/admin-dashboard/reports/ReportsToolbar";
import ReportsGrid from "@/components/admin-dashboard/reports/ReportsGrid";
import ReportsTable from "@/components/admin-dashboard/reports/ReportsTable";
import ExportReportsDialog from "@/components/admin-dashboard/reports/ExportReportsDialog";

import { adminReports } from "@/data/admin-reports";

export default function ReportsManagement() {
  const reports = adminReports;

  const [search, setSearch] = useState("");

  const [period, setPeriod] =
    useState("30days");

  const [reportType, setReportType] =
    useState("all");

  const [category, setCategory] =
    useState("all");

  const [mentor, setMentor] =
    useState("");

  const [exportDialogOpen, setExportDialogOpen] =
    useState(false);

  const [includeRevenue, setIncludeRevenue] =
    useState(true);

  const [includeUsers, setIncludeUsers] =
    useState(true);

  const [includeMentors, setIncludeMentors] =
    useState(true);

  const [includePayments, setIncludePayments] =
    useState(true);

  const filteredReports = useMemo(() => {
    return reports;
  }, [
    reports,
    search,
    period,
    reportType,
    category,
    mentor,
  ]);
    const handleRefresh = () => {
    console.log("Refresh Reports");
  };

  const handleExport = () => {
    setExportDialogOpen(true);
  };

  const handleExportExcel = () => {
    console.log("Export Excel");
    setExportDialogOpen(false);
  };

  const handleExportCSV = () => {
    console.log("Export CSV");
    setExportDialogOpen(false);
  };

  const handleExportPDF = () => {
    console.log("Export PDF");
    setExportDialogOpen(false);
  };

  const handleExportJSON = () => {
    console.log("Export JSON");
    setExportDialogOpen(false);
  };

  return (
    <div className="space-y-8">

      <ReportsHeader
        totalRevenue={filteredReports.revenue.totalRevenue}
        totalTransactions={
          filteredReports.revenue.totalTransactions
        }
        onRefresh={handleRefresh}
        onExport={handleExport}
      />

      <ReportsStats
        totalRevenue={filteredReports.revenue.totalRevenue}
        totalTransactions={
          filteredReports.revenue.totalTransactions
        }
        totalUsers={filteredReports.users.totalUsers}
        totalMentors={filteredReports.mentors.totalMentors}
        totalPrograms={
          filteredReports.programs.totalPrograms
        }
        totalSessions={
          filteredReports.sessions.totalSessions
        }
        totalEvents={filteredReports.events.totalEvents}
        averageOrderValue={
          filteredReports.revenue.averageOrderValue
        }
      />

      <ReportsToolbar
        search={search}
        onSearchChange={setSearch}
        period={period}
        onPeriodChange={setPeriod}
        reportType={reportType}
        onReportTypeChange={setReportType}
        category={category}
        onCategoryChange={setCategory}
        mentor={mentor}
        onMentorChange={setMentor}
        onRefresh={handleRefresh}
        onExport={handleExport}
      />
            <ReportsGrid
        reports={filteredReports}
      />

      <ReportsTable
        reports={filteredReports.revenueSources}
      />

      <ExportReportsDialog
        open={exportDialogOpen}
        onOpenChange={setExportDialogOpen}

        includeRevenue={includeRevenue}
        includeUsers={includeUsers}
        includeMentors={includeMentors}
        includePayments={includePayments}

        onIncludeRevenueChange={setIncludeRevenue}
        onIncludeUsersChange={setIncludeUsers}
        onIncludeMentorsChange={setIncludeMentors}
        onIncludePaymentsChange={setIncludePayments}

        onExportExcel={handleExportExcel}
        onExportCSV={handleExportCSV}
        onExportPDF={handleExportPDF}
        onExportJSON={handleExportJSON}
      />
            <div className="h-px w-full bg-border" />

      <section className="space-y-6">

        <div className="flex flex-col gap-2">

          <h2 className="text-2xl font-bold tracking-tight">
            Business Analytics
          </h2>

          <p className="text-sm text-muted-foreground">
            Revenue insights, platform growth,
            mentor performance and transaction
            analytics.
          </p>

        </div>

        <ReportsGrid
          reports={filteredReports}
        />

      </section>

      <section className="space-y-6">

        <div className="flex flex-col gap-2">

          <h2 className="text-2xl font-bold tracking-tight">
            Revenue Breakdown
          </h2>

          <p className="text-sm text-muted-foreground">
            Detailed revenue distribution across
            platform services.
          </p>

        </div>

        <ReportsTable
          reports={filteredReports.revenueSources}
        />

      </section>
            <ExportReportsDialog
        open={exportDialogOpen}
        onOpenChange={setExportDialogOpen}

        includeRevenue={includeRevenue}
        includeUsers={includeUsers}
        includeMentors={includeMentors}
        includePayments={includePayments}

        onIncludeRevenueChange={setIncludeRevenue}
        onIncludeUsersChange={setIncludeUsers}
        onIncludeMentorsChange={setIncludeMentors}
        onIncludePaymentsChange={setIncludePayments}

        onExportExcel={handleExportExcel}
        onExportCSV={handleExportCSV}
        onExportPDF={handleExportPDF}
        onExportJSON={handleExportJSON}
      />

      <div className="pb-2" />

    </div>
  );
}