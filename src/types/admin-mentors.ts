export type MentorStatus =
  | "active"
  | "pending"
  | "suspended";

export type VerificationStatus =
  | "verified"
  | "pending"
  | "rejected";

export type MentorMembership =
  | "free"
  | "pro"
  | "enterprise";

export interface MentorSkill {
  id: string;
  name: string;
}

export interface MentorLanguage {
  id: string;
  name: string;
}

export interface MentorCertification {
  id: string;
  title: string;
  issuer: string;
  year: string;
}

export interface AdminMentor {
  id: string;

  name: string;

  username: string;

  email: string;

  avatar: string;

  coverImage: string;

  headline: string;

  bio: string;

  location: string;

  timezone: string;

  experience: number;

  rating: number;

  totalReviews: number;

  completedSessions: number;

  activePrograms: number;

  earnings: number;

  hourlyRate: number;

  membership: MentorMembership;

  status: MentorStatus;

  verification: VerificationStatus;

  featured: boolean;
  
  published: boolean;

  available: boolean;

  joinedAt: string;

  lastActive: string;

  skills: MentorSkill[];

  languages: MentorLanguage[];

  certifications: MentorCertification[];
}

export interface MentorStats {
  totalMentors: number;

  activeMentors: number;

  pendingApprovals: number;

  verifiedMentors: number;

  suspendedMentors: number;

  featuredMentors: number;
}