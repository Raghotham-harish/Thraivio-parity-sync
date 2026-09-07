import { useEffect, useState } from "react";
import { mentors } from "@/data/mentors";

import ProfileHeader from "@/components/mentor-dashboard/profile/ProfileHeader";
import ProfileOverviewCard from "@/components/mentor-dashboard/profile/ProfileOverviewCard";

import SkillsCard from "@/components/mentor-dashboard/profile/SkillsCard";
import ExpertiseCard from "@/components/mentor-dashboard/profile/ExpertiseCard";
import CompaniesCard from "@/components/mentor-dashboard/profile/CompaniesCard";
import LanguagesCard from "@/components/mentor-dashboard/profile/LanguagesCard";

import AchievementsPreviewCard from "@/components/mentor-dashboard/profile/AchievementsPreviewCard";
import CertificationsPreviewCard from "@/components/mentor-dashboard/profile/CertificationsPreviewCard";

import ProgramsPreviewCard from "@/components/mentor-dashboard/profile/ProgramsPreviewCard";
import EventsPreviewCard from "@/components/mentor-dashboard/profile/EventsPreviewCard";

import {
  getMentorByUserId,
} from "@/services/mentor.service";

import type {
  MentorApiResponse,
} from "@/services/mentor.service";

const Profile = () => {
  const staticMentor = mentors.find(
    (item) => item.id === 1
  );

  const [mentor, setMentor] =
    useState<MentorApiResponse | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {
    const loadMentorProfile =
      async () => {
        try {
          setLoading(true);
          setError("");

          const storedUser =
            localStorage.getItem(
              "authUser"
            );

          if (!storedUser) {
            setError(
              "Logged-in user information not found."
            );
            return;
          }

          const user = JSON.parse(
            storedUser
          );

          if (!user?.id) {
            setError(
              "User ID not found."
            );
            return;
          }

          const response =
            await getMentorByUserId(
              user.id
            );

          if (
            !response?.success ||
            !response?.data
          ) {
            setError(
              "Mentor profile not found."
            );
            return;
          }

          setMentor(
            response.data
          );
        } catch (error: any) {
          console.error(
            "Failed to load mentor profile:",
            error
          );

          setError(
            error?.response?.data?.message ||
              error?.message ||
              "Unable to load mentor profile."
          );
        } finally {
          setLoading(false);
        }
      };

    loadMentorProfile();
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
        Loading mentor profile...
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
            text-2xl
            font-bold
            text-slate-900
          "
        >
          Mentor Profile Not Found
        </h2>

        <p
          className="
            mt-3
            text-slate-500
          "
        >
          {error ||
            "Unable to load mentor information."}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <ProfileHeader
        mentorName={
          mentor.company || "Mentor"
        }
      />

      <ProfileOverviewCard
        mentor={mentor}
      />

      <SkillsCard
        skills={mentor.skills}
      />

      <ExpertiseCard
        expertise={mentor.expertise}
      />

      <CompaniesCard
        companies={
          mentor.companiesWorked || []
        }
      />

      <LanguagesCard
        languages={mentor.languages}
      />

      <AchievementsPreviewCard
  achievements={
    mentor.achievements.map((item) =>
      typeof item === "string"
        ? item
        : String(
            (item as any)?.title ||
            (item as any)?.name ||
            (item as any)?.achievement ||
            ""
          )
    )
  }
/>

      <CertificationsPreviewCard
  certifications={
    staticMentor?.certifications || []
  }
/>

      <ProgramsPreviewCard
  programs={
    staticMentor?.programs || []
  }
/>

      <EventsPreviewCard
  events={
    staticMentor?.events || []
  }
/>

    </div>
  );
};

export default Profile;