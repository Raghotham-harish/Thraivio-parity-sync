export interface UserProfile {
  id: string;

  fullName: string;

  email: string;

  phone: string;

  location: string;

  education: string;

  image: string;

  headline: string;

  bio: string;

  careerGoal: string;

  linkedin?: string;

  github?: string;

  twitter?: string;

  preferences: {
    emailNotifications: boolean;
    sessionReminders: boolean;
    marketingEmails: boolean;
  };
}