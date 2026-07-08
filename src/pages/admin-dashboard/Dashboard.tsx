import { useNavigate } from "react-router-dom";

import DashboardHeader from "@/components/admin-dashboard/dashboard/DashboardHeader";
import DashboardHero from "@/components/admin-dashboard/dashboard/DashboardHero";
import DashboardStats from "@/components/admin-dashboard/dashboard/DashboardStats";
import PlatformOverview from "@/components/admin-dashboard/dashboard/PlatformOverview";
import RevenueAnalytics from "@/components/admin-dashboard/dashboard/RevenueAnalytics";
import SystemHealth from "@/components/admin-dashboard/dashboard/SystemHealth";
import DashboardQuickActions from "@/components/admin-dashboard/dashboard/QuickActions";
import RecentUsers from "@/components/admin-dashboard/dashboard/RecentUsers";
import RecentMentors from "@/components/admin-dashboard/dashboard/RecentMentors";
import RecentPayments from "@/components/admin-dashboard/dashboard/RecentPayments";
import RecentSessions from "@/components/admin-dashboard/dashboard/RecentSessions";
import ActivityTimeline from "@/components/admin-dashboard/dashboard/ActivityTimeline";

import {
  dashboardHero,
  dashboardStats,
  revenueAnalytics,
  recentUsers,
  recentMentors,
  recentPayments,
  upcomingSessions,
  platformHealth,
  activityTimeline,
  quickActions,
} from "@/data/admin-dashboard";

const Dashboard = () => {
  const navigate = useNavigate();

  /* =====================================================
     Header Actions
  ====================================================== */

  const handleRefresh = () => {
    console.log("Refresh Dashboard");
  };

  const handleExport = () => {
    console.log("Export Report");
  };

  /* =====================================================
     Hero Actions
  ====================================================== */

  const handleViewReports = () => {
    navigate("/admin/reports");
  };

  const handleManagePlatform = () => {
    navigate("/admin/settings");
  };

  /* =====================================================
     Dashboard Stat Card
  ====================================================== */

  const handleStatCard = (id: string) => {
    console.log(id);
  };

  /* =====================================================
     Quick Actions
  ====================================================== */

  const handleQuickAction = (path: string) => {
    navigate(path);
  };

  /* =====================================================
     User Actions
  ====================================================== */

  const handleViewUser = (id: string) => {
    console.log("View User", id);
  };

  const handleBlockUser = (id: string) => {
    console.log("Block User", id);
  };

  const handleDeleteUser = (id: string) => {
    console.log("Delete User", id);
  };

  /* =====================================================
     Mentor Actions
  ====================================================== */

  const handleViewMentor = (id: string) => {
    console.log("View Mentor", id);
  };

  const handleApproveMentor = (id: string) => {
    console.log("Approve Mentor", id);
  };

  const handleRejectMentor = (id: string) => {
    console.log("Reject Mentor", id);
  };

  /* =====================================================
     Payment Actions
  ====================================================== */

  const handleViewPayment = (id: string) => {
    console.log("View Payment", id);
  };

  const handleRefundPayment = (id: string) => {
    console.log("Refund Payment", id);
  };

  const handleInvoice = (id: string) => {
    console.log("Download Invoice", id);
  };

  /* =====================================================
     Session Actions
  ====================================================== */

  const handleViewSession = (id: string) => {
    console.log("View Session", id);
  };

  const handleJoinSession = (id: string) => {
    console.log("Join Session", id);
  };

  const handleCancelSession = (id: string) => {
    console.log("Cancel Session", id);
  };

  return (
    <div className="space-y-10">

      <DashboardHeader
        adminName="Admin"
        pendingApprovals={12}
        onRefresh={handleRefresh}
        onExport={handleExport}
      />

      <DashboardHero
        {...dashboardHero}
        onViewReports={handleViewReports}
        onManagePlatform={handleManagePlatform}
      />

      <DashboardStats
        stats={dashboardStats}
        onCardClick={handleStatCard}
      />

      <PlatformOverview
        totalUsers={12845}
        totalMentors={486}
        totalPrograms={84}
        totalEvents={42}
        verifiedMentors={438}
        platformHealth={98}
      />
            <RevenueAnalytics
        revenue={revenueAnalytics}
      />

      <SystemHealth
        systems={platformHealth}
      />

      <DashboardQuickActions
        actions={quickActions}
        onActionClick={handleQuickAction}
      />

      <RecentUsers
        users={recentUsers}
        onView={handleViewUser}
        onBlock={handleBlockUser}
        onDelete={handleDeleteUser}
      />

      <RecentMentors
        mentors={recentMentors}
        onView={handleViewMentor}
        onApprove={handleApproveMentor}
        onReject={handleRejectMentor}
      />
            <RecentPayments
        payments={recentPayments}
        onView={handleViewPayment}
        onRefund={handleRefundPayment}
        onInvoice={handleInvoice}
      />

      <RecentSessions
        sessions={upcomingSessions}
        onView={handleViewSession}
        onJoin={handleJoinSession}
        onCancel={handleCancelSession}
      />

      <ActivityTimeline
        activities={activityTimeline}
      />
    </div>
  );
};

export default Dashboard;