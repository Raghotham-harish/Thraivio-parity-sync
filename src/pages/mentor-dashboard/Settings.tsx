import { useState } from "react";

import { mentors } from "@/data/mentors";

import type { MentorSettings } from "@/types/mentor-settings";

import SettingsHeader from "@/components/mentor-dashboard/settings/SettingsHeader";

import ProfileSettingsCard from "@/components/mentor-dashboard/settings/ProfileSettingsCard";

import ContactSettingsCard from "@/components/mentor-dashboard/settings/ContactSettingsCard";

import SocialLinksCard from "@/components/mentor-dashboard/settings/SocialLinksCard";

import NotificationSettingsCard from "@/components/mentor-dashboard/settings/NotificationSettingsCard";

import PrivacySettingsCard from "@/components/mentor-dashboard/settings/PrivacySettingsCard";

import SecuritySettingsCard from "@/components/mentor-dashboard/settings/SecuritySettingsCard";

import DangerZoneCard from "@/components/mentor-dashboard/settings/DangerZoneCard";

const Settings = () => {
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

  const [settings, setSettings] =
    useState<MentorSettings>({
      profileImage:
        mentor.image || "",

      name:
        mentor.name || "",

      headline:
        mentor.headline || "",

      company:
        mentor.company || "",

      about:
        mentor.about || "",

      expertise:
        mentor.expertise?.join(", ") ||
        "",

      languages:
        mentor.languages?.join(", ") ||
        "",

      email:
        "mentor@example.com",

      phone:
        "+91 9876543210",

      location:
        "India",

      website:
        "",

      linkedIn:
        mentor.socialLinks
          ?.linkedin || "",

      twitter:
        mentor.socialLinks
          ?.twitter || "",

      youtube:
        mentor.socialLinks
          ?.youtube || "",

      github:
        mentor.socialLinks
          ?.github || "",

      portfolio: "",

      emailNotifications:
        true,

      bookingNotifications:
        true,

      sessionReminders:
        true,

      marketingEmails:
        false,

      weeklyReports:
        true,

      showEmail:
        false,

      showPhone:
        false,

      publicProfile:
        true,

      searchVisibility:
        true,
    });

  const handleSave =
    () => {
      console.log(
        "Settings Saved",
        settings
      );
    };

  return (
    <div className="space-y-8">

      <SettingsHeader
        onSave={handleSave}
      />

      <ProfileSettingsCard
        settings={settings}
        setSettings={
          setSettings
        }
      />

      <ContactSettingsCard
        settings={settings}
        setSettings={
          setSettings
        }
      />

      <SocialLinksCard
        settings={settings}
        setSettings={
          setSettings
        }
      />

      <NotificationSettingsCard
        settings={settings}
        setSettings={
          setSettings
        }
      />

      <PrivacySettingsCard
        settings={settings}
        setSettings={
          setSettings
        }
      />

      <SecuritySettingsCard />

      <DangerZoneCard />

    </div>
  );
};

export default Settings;