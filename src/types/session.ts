export type SessionStatus =
  | "upcoming"
  | "completed"
  | "cancelled";

export type PaymentStatus =
  | "paid"
  | "pending"
  | "refunded";

export interface Session {
  id: string;

  mentorId: number;

  mentorName: string;

  mentorImage: string;

  mentorRole: string;

  mentorCompany: string;

  mentorCategory: string;

  sessionType: string;

  date: string;

  time: string;

  duration: string;

  amount: number;

  status: SessionStatus;

  paymentStatus: PaymentStatus;

  meetingLink: string;

  bookingReference: string;

  bookedAt: string;

  timezone: string;

  notes?: string;

  canJoin: boolean;

  canReschedule: boolean;

  canCancel: boolean;
}