import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import DashboardHeader from "@/components/user-dashboard/dashboard/DashboardHeader";
import DashboardHero from "@/components/user-dashboard/dashboard/DashboardHero";
import DashboardStats from "@/components/user-dashboard/dashboard/DashboardStats";
import ContinueLearning from "@/components/user-dashboard/dashboard/ContinueLearning";
import UpcomingSessions from "@/components/user-dashboard/dashboard/UpcomingSessions";
import RecommendedMentors from "@/components/user-dashboard/dashboard/RecommendedMentors";
import LearningAnalytics from "@/components/user-dashboard/dashboard/LearningAnalytics";
import Achievements from "@/components/user-dashboard/dashboard/Achievements";
import RecentActivities from "@/components/user-dashboard/dashboard/RecentActivities";
import QuickActions from "@/components/user-dashboard/dashboard/QuickActions";
import Announcements from "@/components/user-dashboard/dashboard/Announcements";

import { dashboardData } from "@/data/dashboard";

const Dashboard = () => {
  const navigate = useNavigate();

  

  /* -------------------------------- */
  /* Navigation Helpers               */
  /* -------------------------------- */

  const go = useCallback(
    (path: string) => {
      navigate(path);
    },
    [navigate]
  );

  /* -------------------------------- */
  /* Announcement Actions             */
  /* -------------------------------- */

  const handleReadAnnouncement =
    useCallback((id: string) => {
      console.log(
        "Announcement :",
        id
      );

      // Future Firebase / Backend
    }, []);

  /* -------------------------------- */
  /* Derived Values                   */
  /* -------------------------------- */

  const totalXP =
    dashboardData.achievements.reduce(
      (total, item) =>
        total + item.xp,
      0
    );

  const completedAchievements =
    dashboardData.achievements.filter(
      (item) => item.unlocked
    ).length;

  return (
    <main
      className="
        min-h-screen

        bg-slate-50

        px-6
        py-8

        lg:px-8
        2xl:px-10
      "
    >
      <div
        className="
          mx-auto

          max-w-[1700px]
        "
      >
        {/* Header */}

        <DashboardHeader
  userName={
    dashboardData.hero.userName
  }
/>

        {/* Hero */}

        <DashboardHero
          hero={dashboardData.hero}
        />

        {/* Stats */}

        <DashboardStats
          stats={dashboardData.stats}
        />

        {/* Continue Learning */}

        <ContinueLearning
          courses={
            dashboardData.continueLearning
          }
        />

        {/* Upcoming Sessions */}

        <UpcomingSessions
          sessions={
            dashboardData.upcomingSessions
          }
        />

        {/* Recommended Mentors */}

        <RecommendedMentors
          mentors={
            dashboardData.recommendedMentors
          }
        />

        {/* Analytics */}

          <LearningAnalytics
  totalLearningHours={
    dashboardData.analytics
      .totalLearningHours
  }
  weeklyHours={
    dashboardData.analytics
      .weeklyHours
  }
  completedPrograms={
    dashboardData.analytics
      .completedPrograms
  }
  activeStreak={
    dashboardData.analytics
      .activeStreak
  }
  weeklyProgress={
    dashboardData.analytics
      .weeklyProgress
  }
/>

        {/* Achievements */}

        <Achievements
          achievements={
            dashboardData.achievements
          }
          totalXP={totalXP}
          completedAchievements={
            completedAchievements
          }
          totalAchievements={
            dashboardData.achievements
              .length
          }
        />

        {/* Recent Activities */}

        <RecentActivities
          activities={
            dashboardData.recentActivities
          }
        />

        {/* Quick Actions */}

        <QuickActions
          onBookSession={() =>
            go("/mentors")
          }
          onExploreMentors={() =>
            go("/mentors")
          }
          onPrograms={() =>
            go("/programs")
          }
          onEvents={() =>
            go("/events")
          }
          onCertificates={() =>
            go(
              "/user-dashboard/certificates"
            )
          }
          onPayments={() =>
            go(
              "/user-dashboard/payments"
            )
          }
          onSavedMentors={() =>
            go(
              "/user-dashboard/saved-mentors"
            )
          }
          onHelpSupport={() =>
            go(
              "/user-dashboard/help-support"
            )
          }
        />

        {/* Announcements */}

        <Announcements
          announcements={
            dashboardData.announcements
          }
          onViewAll={() =>
            go(
              "/user-dashboard/notifications"
            )
          }
          onRead={
            handleReadAnnouncement
          }
        />
      </div>
    </main>
  );
};

export default Dashboard;