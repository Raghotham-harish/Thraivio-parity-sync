import { useEffect, useState } from "react";

import {
  getMentorByUserId,
  updateMentorLastActive,
} from "@/services/mentor.service";

import type {
  MentorApiResponse,
} from "@/services/mentor.service";

import DashboardHeader from "@/components/mentor-dashboard/dashboard/DashboardHeader";
import DashboardStats from "@/components/mentor-dashboard/dashboard/DashboardStats";
import DashboardAnalytics from "@/components/mentor-dashboard/dashboard/DashboardAnalytics";

import DashboardProgramsCard from "@/components/mentor-dashboard/dashboard/DashboardProgramsCard";
import DashboardEventsCard from "@/components/mentor-dashboard/dashboard/DashboardEventsCard";

import DashboardBookingsCard from "@/components/mentor-dashboard/dashboard/DashboardBookingsCard";
import DashboardAvailabilityCard from "@/components/mentor-dashboard/dashboard/DashboardAvailabilityCard";

import DashboardPricingCard from "@/components/mentor-dashboard/dashboard/DashboardPricingCard";
import DashboardVideosCard from "@/components/mentor-dashboard/dashboard/DashboardVideosCard";

import DashboardAchievementsCard from "@/components/mentor-dashboard/dashboard/DashboardAchievementsCard";
import DashboardCertificationsCard from "@/components/mentor-dashboard/dashboard/DashboardCertificationsCard";

import DashboardQuickActions from "@/components/mentor-dashboard/dashboard/DashboardQuickActions";
import DashboardProfileCompletion from "@/components/mentor-dashboard/dashboard/DashboardProfileCompletion";

const Dashboard = () => {
  /* ------------------------------
   * Temporary
   *
   * Future:
   * Logged In Mentor
   */

  const [mentor, setMentor] =
  useState<MentorApiResponse | null>(null);

const [loading, setLoading] =
  useState(true);

const [error, setError] =
  useState("");

useEffect(() => {
  const loadMentor = async () => {
    try {
      setLoading(true);
      setError("");

      const storedUser =
        localStorage.getItem("authUser");

      if (!storedUser) {
        setError(
          "Logged-in user information not found."
        );
        return;
      }

      const user =
        JSON.parse(storedUser);

      if (!user?.id) {
        setError("User ID not found.");
        return;
      }

      const response =
  await getMentorByUserId(user.id);

if (
  !response?.success ||
  !response?.data
) {
  setError(
    "Mentor profile not found."
  );
  return;
}

setMentor(response.data);

try {
  await updateMentorLastActive(response.data.id);
} catch (error) {
  console.error(
    "Failed to update mentor last active:",
    error
  );
}
    } catch (error: any) {
      console.error(
        "Failed to load mentor dashboard:",
        error
      );

      setError(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to load mentor dashboard."
      );
    } finally {
      setLoading(false);
    }
  };

  loadMentor();
}, []);

  if (loading) {
  return (
    <div
      className="
        bg-white
        border
        rounded-3xl
        p-10
        text-center
      "
    >
      <p className="text-slate-500">
        Loading mentor dashboard...
      </p>
    </div>
  );
}

if (error || !mentor) {
  return (
    <div
      className="
        bg-white
        border
        rounded-3xl
        p-10
        text-center
      "
    >
      <h2
        className="
          text-3xl
          font-bold
        "
      >
        Unable to Load Mentor Dashboard
      </h2>

      <p
        className="
          text-slate-500
          mt-3
        "
      >
        {error || "Mentor profile not found."}
      </p>
    </div>
  );
}

  return (
    <div className="space-y-8">

      {/* Hero */}

      <DashboardHeader
        mentor={mentor}
      />

      {/* Stats */}

      <DashboardStats
        mentor={mentor}
      />

      {/* Analytics */}

      <DashboardAnalytics
        mentor={mentor}
      />

      {/* Programs + Events */}

      <div
        className="
          grid
          xl:grid-cols-2
          gap-8
        "
      >
        <DashboardProgramsCard
          mentor={mentor}
        />

        <DashboardEventsCard
          mentor={mentor}
        />
      </div>

      {/* Bookings + Availability */}

      <div
        className="
          grid
          xl:grid-cols-2
          gap-8
        "
      >
        <DashboardBookingsCard />

        <DashboardAvailabilityCard
          mentor={mentor}
        />
      </div>

      {/* Pricing + Videos */}

      <div
        className="
          grid
          xl:grid-cols-2
          gap-8
        "
      >
        <DashboardPricingCard
          mentor={mentor}
        />

        <DashboardVideosCard
          mentor={mentor}
        />
      </div>

      {/* Achievement + Certification */}

      <div
        className="
          grid
          xl:grid-cols-2
          gap-8
        "
      >
        <DashboardAchievementsCard
          mentor={mentor}
        />

        <DashboardCertificationsCard
          mentor={mentor}
        />
      </div>

      {/* Bottom Section */}

      <div
        className="
          grid
          xl:grid-cols-2
          gap-8
        "
      >
        <DashboardQuickActions />

        <DashboardProfileCompletion
          mentor={mentor}
        />
      </div>

    </div>
  );
};

export default Dashboard;