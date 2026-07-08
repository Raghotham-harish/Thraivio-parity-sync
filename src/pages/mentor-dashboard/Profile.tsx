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

const Profile = () => {
  const mentorId = 1;

  const mentor = mentors.find(
    (item) => item.id === mentorId
  );

  if (!mentor) {
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
        Mentor Not Found
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <ProfileHeader
        mentorName={mentor.name}
      />

      <ProfileOverviewCard
        mentor={mentor}
      />

      <SkillsCard
        skills={mentor.skills}
      />

      <ExpertiseCard
        expertise={
          mentor.expertise
        }
      />

      <CompaniesCard
        companies={
          mentor.companiesWorked
        }
      />

      <LanguagesCard
        languages={
          mentor.languages
        }
      />

      <AchievementsPreviewCard
        achievements={
          mentor.achievements
        }
      />

      <CertificationsPreviewCard
        certifications={
          mentor.certifications
        }
      />

      <ProgramsPreviewCard
        programs={
          mentor.programs
        }
      />

      <EventsPreviewCard
        events={
          mentor.events
        }
      />

    </div>
  );
};

export default Profile;