// src/types/admin-users.ts

export type UserStatus =
  | "active"
  | "inactive"
  | "blocked"
  | "suspended";

export type MembershipType =
  | "free"
  | "basic"
  | "premium"
  | "pro";

export type VerificationStatus =
  | "verified"
  | "pending"
  | "rejected";

export type Gender =
  | "male"
  | "female"
  | "other";

export type ActivityType =
  | "login"
  | "program"
  | "session"
  | "payment"
  | "certificate"
  | "review";

export interface UserStats {
  totalUsers: number;
  activeUsers: number;
  premiumUsers: number;
  verifiedUsers: number;
  blockedUsers: number;
  newUsersThisMonth: number;
}

export interface UserActivity {
  id: string;
  type: ActivityType;
  title: string;
  description: string;
  createdAt: string;
}

export interface PaymentHistory {
  id: string;
  amount: number;
  currency: string;
  status: "paid" | "pending" | "failed" | "refunded";
  method: string;
  invoiceId: string;
  createdAt: string;
}

export interface PurchasedProgram {
  id: string;
  title: string;
  mentorName: string;
  thumbnail: string;
  category: string;
  progress: number;
  completed: boolean;
  purchasedAt: string;
}

export interface BookedSession {
  id: string;
  mentorName: string;
  mentorAvatar: string;
  sessionType: string;
  duration: string;
  date: string;
  time: string;
  status:
    | "upcoming"
    | "completed"
    | "cancelled";
}

export interface UserCertificate {
  id: string;
  title: string;
  issuedBy: string;
  issuedDate: string;
  certificateUrl: string;
}

export interface AdminUser {
  id: string;

  name: string;
  username: string;

  email: string;
  phone: string;

  avatar: string;
  coverImage: string;

  role: string;

  membership: MembershipType;

  status: UserStatus;

  verification: VerificationStatus;

  gender: Gender;

  bio: string;

  occupation: string;
  company: string;

  website: string;
  linkedin: string;
  github: string;
  twitter: string;

  country: string;
  city: string;
  timezone: string;

  joinedAt: string;
  lastActive: string;

  completion: number;

  sessions: number;
  bookedSessions: number;

  programs: number;

  certificates: number;

  reviews: number;

  favoriteMentors: number;

  totalSpent: number;

  skills: string[];

  notes: string;

  activities: UserActivity[];

  paymentHistory: PaymentHistory[];

  purchasedPrograms: PurchasedProgram[];

  bookedSessionHistory: BookedSession[];

  certificatesList: UserCertificate[];
}

export interface UserFilterOption {
  label: string;
  value: string;
}

export interface UserCountry {
  name: string;
  code: string;
}