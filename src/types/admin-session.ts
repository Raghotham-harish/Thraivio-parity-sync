export type AdminSessionStatus =
  | "scheduled"
  | "live"
  | "completed"
  | "cancelled"
  | "missed";

export type AttendanceStatus =
  | "waiting"
  | "joined"
  | "completed"
  | "absent";

export type PaymentStatus =
  | "paid"
  | "pending"
  | "refunded";

export type RefundStatus =
  | "none"
  | "requested"
  | "processed";

export type MeetingPlatform =
  | "Google Meet"
  | "Zoom"
  | "Microsoft Teams";

export interface AdminSession {
  id: string;

  /* Mentor */

  mentorId: number;

  mentorName: string;

  mentorImage: string;

  mentorRole: string;

  mentorCompany: string;

  mentorEmail: string;

  /* Student */

  studentId: string;

  studentName: string;

  studentImage: string;

  studentEmail: string;

  /* Program */

  programId: string;

  programTitle: string;

  sessionType: string;

  /* Schedule */

  date: string;

  time: string;

  duration: string;

  timezone: string;

  meetingPlatform: MeetingPlatform;

  meetingLink: string;

  /* Status */

  status: AdminSessionStatus;

  attendance: AttendanceStatus;

  paymentStatus: PaymentStatus;

  refundStatus: RefundStatus;

  /* Money */

  amount: number;

  refundAmount: number;

  /* Certificate */

  certificateIssued: boolean;

  certificateId?: string;

  /* Booking */

  bookingReference: string;

  bookedAt: string;

  /* Notes */

  studentNotes?: string;

  mentorNotes?: string;

  adminNotes?: string;

  cancelReason?: string;

  cancelledBy?: string;

  /* Recording */

  recordingUrl?: string;

  /* Future Backend */

  createdAt: string;

  updatedAt: string;
}