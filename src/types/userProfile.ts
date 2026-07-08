export interface UserEducation {
  id: string;

  institution: string;

  degree: string;

  branch: string;

  passingYear: string;

  cgpa: string;

  location: string;
}

export interface UserCertificatePreview {
  id: string;

  title: string;

  issuer: string;

  issueDate: string;

  image: string;

  verified: boolean;
}

export interface SavedMentorPreview {
  id: string;

  name: string;

  role: string;

  company: string;

  image: string;

  rating: number;

  expertise: string[];
}

export interface UpcomingSessionPreview {
  id: string;

  mentorName: string;

  mentorImage: string;

  title: string;

  date: string;

  time: string;

  meetingLink: string;

  platform: string;
}

export interface RecentActivity {
  id: string;

  title: string;

  description: string;

  date: string;

  type:
    | "program"
    | "certificate"
    | "mentor"
    | "session";
}

export interface LearningStats {
  programs: number;

  sessions: number;

  certificates: number;

  savedMentors: number;
}

export interface UserProfile {
  id: string;

  fullName: string;

  headline: string;

  bio: string;

  email: string;

  phone: string;

  location: string;

  profileImage: string;

  coverImage: string;

  education: UserEducation[];

  skills: string[];

  interests: string[];

  careerGoals: {
  targetRole: string;

  preferredCompany: string;

  preferredLocation: string;

  careerGoal: string;

  workMode:
    | "Remote"
    | "Hybrid"
    | "On-site"
    | "No Preference";
};

  socialLinks: {
    linkedin: string;

    github: string;

    portfolio: string;
  };

  stats: LearningStats;

  certificates: UserCertificatePreview[];

  savedMentors: SavedMentorPreview[];

  upcomingSessions: UpcomingSessionPreview[];

  recentActivities: RecentActivity[];
}