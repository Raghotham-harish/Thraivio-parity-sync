/* ===========================================================
   Admin Events Types
   CoachCoaching Admin Dashboard
=========================================================== */

export type EventStatus =
  | "draft"
  | "published"
  | "live"
  | "upcoming"
  | "completed"
  | "cancelled";

export type EventView = "grid" | "list";

export type EventMode =
  | "Online"
  | "Offline"
  | "Hybrid";

export type EventType =
  | "Workshop"
  | "Webinar"
  | "Masterclass"
  | "Conference"
  | "Bootcamp"
  | "AMA"
  | "Networking"
  | "Live Session"
  | "Live Event";

export interface EventAgenda {
  id: string;

  title: string;

  description: string;

  startTime: string;

  endTime: string;
}

export interface EventFeedback {
  totalReviews: number;

  averageRating: number;

  recommendationRate: number;
}

export interface EventAnalytics {
  views: number;

  registrations: number;

  attendees: number;

  attendanceRate: number;

  certificatesIssued: number;

  completionRate: number;

  revenue: number;
}

export interface EventCertificate {
  enabled: boolean;

  template: string;

  issued: number;
}

export interface EventRevenue {
  ticketPrice: number;

  grossRevenue: number;

  platformFee: number;

  mentorPayout: number;

  refundAmount: number;
}

export interface AdminEvent {

  id: string;

  mentorId: number;

  mentorName: string;

  mentorAvatar: string;

  mentorCompany: string;

  mentorCategory: string;

  title: string;

  slug: string;

  banner: string;

  description: string;

  shortDescription: string;

  category: string;

  type: EventType;

  mode: EventMode;

  status: EventStatus;

  featured: boolean;

  published: boolean;

  date: string;

  month: string;

  day: string;

  weekday: string;

  time: string;

  duration: string;

  timezone: string;

  capacity: number;

  registered: number;

  seatsLeft: number;

  location: string;

  meetingLink: string;

  tags: string[];

  agenda: EventAgenda[];

  learningPoints: string[];

  requirements: string[];

  analytics: EventAnalytics;

  feedback: EventFeedback;

  certificate: EventCertificate;

  revenue: EventRevenue;

  createdAt: string;

  updatedAt: string;
}

export interface EventStats {

  total: number;

  upcoming: number;

  live: number;

  completed: number;

  cancelled: number;

  registrations: number;
}

export interface EventFilters {

  search: string;

  status: EventStatus | "all";

  category: string;

  mentor: string;

  type: string;

  date: string;
}