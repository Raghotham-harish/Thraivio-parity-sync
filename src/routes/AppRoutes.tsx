import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";

import MentorsPage from "@/pages/mentors";
import MentorProfilePage from "@/pages/MentorProfile";
import BecomeMentorPage from "@/pages/BecomeCoach";
import CategoriesPage from "@/pages/Categories";
import MentorProgramsPage from "@/pages/MentorProgramsPage";
import MentorEventsPage from "@/pages/MentorEventsPage";
import MentorCertificationsPage from "@/pages/MentorCertificationsPage";
import MentorAchievementsPage from "@/pages/MentorAchievementsPage";
import LoginPage from "@/pages/Login";
import SignupPage from "@/pages/Signup";
import ForgotPasswordPage from "@/pages/forgotPassword/index";
import ResetPasswordPage from "@/pages/resetPassword/index";

import MentorDashboardLayout from "@/layouts/MentorDashboardLayout";
import Dashboard from "@/pages/mentor-dashboard/Dashboard";
import Profile from "@/pages/mentor-dashboard/Profile";
import Programs from "@/pages/mentor-dashboard/Programs";
import Events from "@/pages/mentor-dashboard/Events";
import Achievements from "@/pages/mentor-dashboard/Achievements";
import Certifications from "@/pages/mentor-dashboard/Certifications";
import AvailabilityPage from "@/pages/mentor-dashboard/Availability";
import Surveys from "@/pages/mentor-dashboard/Surveys";
import Pricing from "@/pages/mentor-dashboard/Pricing";
import Videos from "@/pages/mentor-dashboard/Videos";
import FAQ from "@/pages/mentor-dashboard/FAQ";
import Bookings from "@/pages/mentor-dashboard/Bookings";
import Journal from "@/pages/mentor-dashboard/Journal";
import Settings from "@/pages/mentor-dashboard/Settings";


import UserDashboardLayout from "@/layouts/UserDashboardLayout";
import UserDashboard from "@/pages/user-dashboard/Dashboard";
import UserProfile from "@/pages/user-dashboard/MyProfile";
import UserSessions from "@/pages/user-dashboard/MySessions";
import UserPrograms from "@/pages/user-dashboard/MyPrograms";
import UserEvents from "@/pages/user-dashboard/MyEvents";
import SavedMentors from "@/pages/user-dashboard/SavedMentors";
import Certificates from "@/pages/user-dashboard/MyCertificates";
import Payments from "@/pages/user-dashboard/MyPayments";
import Notifications from "@/pages/user-dashboard/Notifications";
import UserSettings from "@/pages/user-dashboard/Settings";
import HelpSupport from "@/pages/user-dashboard/HelpSupport";
import UserSurveys from "@/pages/user-dashboard/Surveys";

import AdminDashboardLayout from "../layouts/AdminDashboardLayout";

// Lazy-loaded: the admin panel is a large, distinct part of the app that
// most visitors (mentors/coachees on the public site) never load. Splitting
// it out keeps the main bundle from shipping ~16 admin pages' worth of code
// to every visitor up front.
const AdminDashboard = lazy(() => import("@/pages/admin-dashboard/Dashboard"));
const MentorsManagement = lazy(() => import("@/pages/admin-dashboard/MentorsManagement"));
const UsersManagement = lazy(() => import("@/pages/admin-dashboard/UsersManagement"));
const ProgramsManagement = lazy(() => import("@/pages/admin-dashboard/ProgramsManagement"));
const SessionsManagement = lazy(() => import("@/pages/admin-dashboard/SessionsManagement"));
const EventsManagement = lazy(() => import("@/pages/admin-dashboard/EventsManagement"));
const CertificatesManagement = lazy(() => import("@/pages/admin-dashboard/CertificatesManagement"));
const PaymentsManagement = lazy(() => import("@/pages/admin-dashboard/PaymentsManagement"));
const ReportsManagement = lazy(() => import("@/pages/admin-dashboard/ReportsManagement"));
const ReviewsManagement = lazy(() => import("@/pages/admin-dashboard/ReviewsManagement"));
const NotificationsManagement = lazy(() => import("@/pages/admin-dashboard/NotificationsManagement"));
const CMSManagement = lazy(() => import("@/pages/admin-dashboard/CMSManagement"));
const SupportManagement = lazy(() => import("@/pages/admin-dashboard/SupportManagement"));
const RolesPermissions = lazy(() => import("@/pages/admin-dashboard/RolesPermissions"));
const AdminSettings = lazy(() => import("@/pages/admin-dashboard/AdminSettings"));
const SurveysManagement = lazy(() => import("@/pages/admin-dashboard/SurveysManagement"));

function AdminRouteFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div
        className="h-10 w-10 animate-spin rounded-full border-4 border-secondary border-t-primary"
        role="status"
        aria-label="Loading"
      />
    </div>
  );
}

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>

        {/* Home = Mentor Directory */}
        <Route
          path="/"
          element={<MentorsPage />}
        />

        {/* Mentor Directory */}
        <Route
          path="/mentors"
          element={<MentorsPage />}
        />

        {/* Individual Mentor Profile */}
        <Route
          path="/mentors/:id"
          element={<MentorProfilePage />}
        />

        <Route
  path="/mentor/:id/programs"
  element={<MentorProgramsPage />}
/>

<Route
  path="/mentor/:id/events"
  element={<MentorEventsPage />}
/>

<Route
  path="/mentor/:id/certifications"
  element={<MentorCertificationsPage />}
/>

<Route
  path="/mentor/:id/achievements"
  element={<MentorAchievementsPage />}
/>

        {/* Categories */}
        <Route
          path="/categories"
          element={<CategoriesPage />}
        />

        {/* Become Mentor */}
        <Route
          path="/become-mentor"
          element={<BecomeMentorPage />}
        />

      </Route>

      {/* Login */}
<Route
  path="/login"
  element={<LoginPage />}
/>

{/* Create Profile / Signup */}
<Route
  path="/signup"
  element={<SignupPage />}
/>

<Route
  path="/forgot-password"
  element={<ForgotPasswordPage />}
/>

<Route
  path="/reset-password"
  element={<ResetPasswordPage />}
/>

<Route
  path="/mentor-dashboard"
  element={<MentorDashboardLayout />}
>
  {/* Dashboard Home */}
  <Route
    index
    element={<Dashboard />}
  />

  {/* My Profile */}
  <Route
    path="profile"
    element={<Profile />}
  />

  {/* Programs */}
  <Route
    path="programs"
    element={<Programs />}
  />

    {/* Events */}
  <Route
    path="events"
    element={<Events />}
  />

  <Route
  path="achievements"
  element={<Achievements />}
/>

   <Route
  path="certifications"
  element={<Certifications />}
/>

  <Route
  path="availability"
  element={<AvailabilityPage />}
/>

<Route
  path="surveys"
  element={<Surveys />}
/>

   <Route
  path="pricing"
  element={<Pricing />}
/>

   <Route
  path="videos"
  element={<Videos />}
/>

   <Route
  path="faq"
  element={<FAQ />}
/>

   <Route
  path="bookings"
  element={<Bookings />}
/>

   <Route
  path="journal"
  element={<Journal />}
/>

   <Route
   path="settings"
   element={<Settings />}
/>

</Route>

<Route
  path="/user-dashboard"
  element={<UserDashboardLayout />}
>
  <Route
    index
    element={<UserDashboard />}
  />

  <Route
    path="profile"
    element={<UserProfile />}
  />

  <Route
    path="sessions"
    element={<UserSessions />}
  />

  <Route
    path="programs"
    element={<UserPrograms />}
  />

  <Route
    path="events"
    element={<UserEvents />}
  />

  <Route
    path="saved-mentors"
    element={<SavedMentors />}
  />

  <Route
    path="certificates"
    element={<Certificates />}
  />

  <Route
    path="payments"
    element={<Payments />}
  />

  <Route
    path="notifications"
    element={<Notifications />}
  />

  <Route
    path="settings"
    element={<UserSettings />}
  />

  <Route 
  path="surveys" 
  element={<UserSurveys />} 
/>

  <Route
  path="help-support"
  element={<HelpSupport />}
/>
</Route>


<Route
  path="/admin"
  element={
    <Suspense fallback={<AdminRouteFallback />}>
      <AdminDashboardLayout />
    </Suspense>
  }
>
<Route
    index
    element={<AdminDashboard />}
  />
  <Route
  path="/admin/mentors"
  element={<MentorsManagement />}
/>
  <Route
  path="/admin/users"
  element={<UsersManagement />}
/>
<Route
  path="/admin/sessions"
  element={<SessionsManagement />}
/>
  <Route
  path="/admin/programs"
  element={<ProgramsManagement />}
/>
<Route
  path="/admin/events"
  element={<EventsManagement />}
/>
<Route
  path="/admin/certificates"
  element={<CertificatesManagement />}
/>
<Route
  path="/admin/payments"
  element={<PaymentsManagement />}
/>
<Route
  path="/admin/reports"
  element={<ReportsManagement />}
/>

<Route 
  path="/admin/surveys" 
  element={<SurveysManagement />} 
/>

<Route
  path="/admin/reviews"
  element={<ReviewsManagement />}
/>
<Route
  path="/admin/notifications"
  element={<NotificationsManagement />}
/>
<Route
  path="/admin/cms"
  element={<CMSManagement />}
/>
<Route
  path="/admin/support"
  element={<SupportManagement />}
/>
<Route
  path="/admin/roles"
  element={<RolesPermissions />}
/>
<Route
  path="/admin/settings"
  element={<AdminSettings />}
/>
</Route>

    </Routes>
  );
};

export default AppRoutes;