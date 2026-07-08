import { useMemo, useState } from "react";

import { userProfile } from "@/data/userProfile";

import ProfileHeader from "@/components/user-dashboard/profile/ProfileHeader";
import ProfileHero from "@/components/user-dashboard/profile/ProfileHero";
import ProfileStats from "@/components/user-dashboard/profile/ProfileStats";
import AboutSection from "@/components/user-dashboard/profile/AboutSection";
import EducationSection from "@/components/user-dashboard/profile/EducationSection";
import SkillsSection from "@/components/user-dashboard/profile/SkillsSection";
import InterestsSection from "@/components/user-dashboard/profile/InterestsSection";
import CareerGoalsSection from "@/components/user-dashboard/profile/CareerGoalsSection";
import CertificatesPreview from "@/components/user-dashboard/profile/CertificatesPreview";
import SavedMentorsPreview from "@/components/user-dashboard/profile/SavedMentorsPreview";
import UpcomingSessionsPreview from "@/components/user-dashboard/profile/UpcomingSessionsPreview";
import RecentActivity from "@/components/user-dashboard/profile/RecentActivity";

import EditProfileDialog from "@/components/user-dashboard/profile/EditProfileDialog";
import UploadPhotoDialog from "@/components/user-dashboard/profile/UploadPhotoDialog";
import SaveProfileBar from "@/components/user-dashboard/profile/SaveProfileBar";

const MyProfile = () => {
  const [profile, setProfile] =
    useState(userProfile);

  const [editDialogOpen, setEditDialogOpen] =
    useState(false);

  const [
    uploadPhotoOpen,
    setUploadPhotoOpen,
  ] = useState(false);

  const [saving, setSaving] =
    useState(false);

  const [hasChanges, setHasChanges] =
    useState(false);

  // Skills

  const [newSkill, setNewSkill] =
    useState("");

  // Interests

  const [
    newInterest,
    setNewInterest,
  ] = useState("");

    const handleProfileChange = (
    field: string,
    value: string
  ) => {
    setProfile((prev) => ({
      ...prev,

      [field]: value,
    }));

    setHasChanges(true);
  };

  const handleUploadPhoto = (
    file: File
  ) => {
    const image =
      URL.createObjectURL(file);

    setProfile((prev) => ({
      ...prev,

      profileImage: image,
    }));

    setHasChanges(true);
  };

  const handleRemovePhoto = () => {
    setProfile((prev) => ({
      ...prev,

      profileImage:
        "/images/default-avatar.png",
    }));

    setHasChanges(true);
  };

    const handleSave =
    async () => {
      setSaving(true);

      await new Promise(
        (resolve) =>
          setTimeout(
            resolve,
            1200
          )
      );

      setSaving(false);

      setHasChanges(false);

      /*
        Firebase

        updateDoc()

        API

        PUT /profile

      */
    };

  const handleDiscard =
    () => {
      setProfile(userProfile);

      setNewSkill("");

      setNewInterest("");

      setHasChanges(false);
    };

      const profileCompletion =
    useMemo(() => {
      let score = 0;

      if (profile.fullName)
        score += 10;

      if (profile.bio)
        score += 10;

      if (profile.profileImage)
        score += 10;

      if (
        profile.skills.length
      )
        score += 20;

      if (
        profile.interests.length
      )
        score += 15;

      if (
        profile.education.length
      )
        score += 15;

      if (
        profile.certificates.length
      )
        score += 20;

      return score;
    }, [profile]);

      return (
    <div
      className="
        min-h-screen

        bg-slate-50
      "
    >
      <div
        className="
          mx-auto

          flex
          max-w-7xl

          flex-col

          gap-8

          px-6
          py-8
        "
      >
        {/* Header */}

        <ProfileHeader
          profileCompletion={
            profileCompletion
          }
        />

        {/* Hero */}

        <ProfileHero
          profile={profile}
          profileCompletion={
            profileCompletion
          }
          onEditProfile={() =>
            setEditDialogOpen(true)
          }
          onUploadPhoto={() =>
            setUploadPhotoOpen(true)
          }
        />

        {/* Stats */}

        <ProfileStats
          enrolledPrograms={
            profile.stats.programs
          }
          completedSessions={
            profile.stats.sessions
          }
          certificates={
            profile.stats.certificates
          }
          savedMentors={
            profile.stats.savedMentors
          }
        />

        {/* About */}

        <AboutSection
          bio={profile.bio}
          onChange={(value) =>
            setProfile((prev) => ({
              ...prev,

              bio: value,
            }))
          }
        />

        {/* Education */}

        <EducationSection
          education={
            profile.education
          }
          onAddEducation={() => {
            /*
              Next Part
            */
          }}
          onEditEducation={() => {
            /*
              Next Part
            */
          }}
          onDeleteEducation={() => {
            /*
              Next Part
            */
          }}
        />
                {/* Skills */}

        <SkillsSection
          skills={profile.skills}
          newSkill={newSkill}
          onSkillChange={setNewSkill}
          onAddSkill={() => {
            const skill = newSkill.trim();

            if (!skill) return;

            if (
              profile.skills.includes(skill)
            )
              return;

            setProfile((prev) => ({
              ...prev,

              skills: [
                ...prev.skills,
                skill,
              ],
            }));

            setNewSkill("");

            setHasChanges(true);
          }}
          onRemoveSkill={(skill) => {
            setProfile((prev) => ({
              ...prev,

              skills:
                prev.skills.filter(
                  (item) =>
                    item !== skill
                ),
            }));

            setHasChanges(true);
          }}
        />

        {/* Interests */}

        <InterestsSection
          interests={
            profile.interests
          }
          newInterest={
            newInterest
          }
          onInterestChange={
            setNewInterest
          }
          onAddInterest={() => {
            const interest =
              newInterest.trim();

            if (!interest) return;

            if (
              profile.interests.includes(
                interest
              )
            )
              return;

            setProfile((prev) => ({
              ...prev,

              interests: [
                ...prev.interests,
                interest,
              ],
            }));

            setNewInterest("");

            setHasChanges(true);
          }}
          onRemoveInterest={(
            interest
          ) => {
            setProfile((prev) => ({
              ...prev,

              interests:
                prev.interests.filter(
                  (item) =>
                    item !==
                    interest
                ),
            }));

            setHasChanges(true);
          }}
        />

        {/* Career Goals */}

        <CareerGoalsSection
          targetRole={
  profile.careerGoals
    .targetRole
}

preferredCompany={
  profile.careerGoals
    .preferredCompany
}

preferredLocation={
  profile.careerGoals
    .preferredLocation
}

careerGoal={
  profile.careerGoals
    .careerGoal
}
          onChange={(
            field,
            value
          ) => {
            setProfile((prev) => ({
              ...prev,

              careerGoals: {
  ...prev.careerGoals,

  [field]: value,
},
            }));

            setHasChanges(true);
          }}
        />

        {/* Certificates */}

        <CertificatesPreview
          certificates={
            profile.certificates
          }
        />

                {/* Saved Mentors */}

        <SavedMentorsPreview
          mentors={
            profile.savedMentors
          }
        />

        {/* Upcoming Sessions */}

        <UpcomingSessionsPreview
          sessions={
            profile.upcomingSessions
          }
        />

        {/* Recent Activity */}

        <RecentActivity
          activities={
            profile.recentActivities
          }
        />

      </div>

              {/* Edit Profile Dialog */}

        <EditProfileDialog
          open={editDialogOpen}
          profile={{
            fullName: profile.fullName,
            headline: profile.headline,
            email: profile.email,
            phone: profile.phone,
            location: profile.location,
          }}
          onClose={() =>
            setEditDialogOpen(false)
          }
          onChange={(
            field,
            value
          ) => {
            setProfile((prev) => ({
              ...prev,

              [field]: value,
            }));

            setHasChanges(true);
          }}
          onSave={() => {
            setEditDialogOpen(false);

            setHasChanges(true);
          }}
        />

        {/* Upload Photo Dialog */}

        <UploadPhotoDialog
          open={uploadPhotoOpen}
          previewImage={
            profile.profileImage
          }
          onClose={() =>
            setUploadPhotoOpen(false)
          }
          onUpload={
            handleUploadPhoto
          }
          onRemove={() => {
            handleRemovePhoto();

            setUploadPhotoOpen(false);
          }}
        />

        {/* Save Bar */}

        <SaveProfileBar
          hasChanges={
            hasChanges
          }
          saving={saving}
          onSave={handleSave}
          onDiscard={
            handleDiscard
          }
        />
              </div>
  );
};

export default MyProfile;
