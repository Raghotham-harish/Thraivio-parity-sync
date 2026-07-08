import { mentors } from "@/data/mentors";

import type {
  AdminSession,
  AdminSessionStatus,
  AttendanceStatus,
  PaymentStatus,
  RefundStatus,
  MeetingPlatform,
} from "@/types/admin-session";

/* -------------------------------------------------------------------------- */
/*                                  Students                                  */
/* -------------------------------------------------------------------------- */

const students = [
  {
    id: "ST-1001",
    name: "Rahul Sharma",
    image: "https://i.pravatar.cc/300?img=11",
    email: "rahul@gmail.com",
  },

  {
    id: "ST-1002",
    name: "Priya Singh",
    image: "https://i.pravatar.cc/300?img=12",
    email: "priya@gmail.com",
  },

  {
    id: "ST-1003",
    name: "Amit Patel",
    image: "https://i.pravatar.cc/300?img=13",
    email: "amit@gmail.com",
  },

  {
    id: "ST-1004",
    name: "Sneha Gupta",
    image: "https://i.pravatar.cc/300?img=14",
    email: "sneha@gmail.com",
  },

  {
    id: "ST-1005",
    name: "Rohit Verma",
    image: "https://i.pravatar.cc/300?img=15",
    email: "rohit@gmail.com",
  },

  {
    id: "ST-1006",
    name: "Karan Joshi",
    image: "https://i.pravatar.cc/300?img=16",
    email: "karan@gmail.com",
  },

  {
    id: "ST-1007",
    name: "Anjali Mishra",
    image: "https://i.pravatar.cc/300?img=17",
    email: "anjali@gmail.com",
  },

  {
    id: "ST-1008",
    name: "Vikas Sharma",
    image: "https://i.pravatar.cc/300?img=18",
    email: "vikas@gmail.com",
  },
];

/* -------------------------------------------------------------------------- */
/*                                  Constants                                 */
/* -------------------------------------------------------------------------- */

const statuses: AdminSessionStatus[] = [
  "scheduled",
  "live",
  "completed",
  "cancelled",
  "missed",
];

const attendance: AttendanceStatus[] = [
  "waiting",
  "joined",
  "completed",
  "absent",
];

const paymentStatus: PaymentStatus[] = [
  "paid",
  "pending",
  "refunded",
];

const refundStatus: RefundStatus[] = [
  "none",
  "requested",
  "processed",
];

const platforms: MeetingPlatform[] = [
  "Google Meet",
  "Zoom",
  "Microsoft Teams",
];

/* -------------------------------------------------------------------------- */
/*                              Admin Sessions                                */
/* -------------------------------------------------------------------------- */

export const adminSessions: AdminSession[] =
  mentors.flatMap((mentor, mentorIndex) =>
    mentor.programs.map(
      (program, programIndex) => {
        const student =
          students[
            (mentorIndex + programIndex) %
              students.length
          ];

        const status =
          statuses[
            (mentorIndex + programIndex) %
              statuses.length
          ];

        const attendanceStatus =
          attendance[
            (mentorIndex + programIndex) %
              attendance.length
          ];

        const payment =
          paymentStatus[
            (mentorIndex + programIndex) %
              paymentStatus.length
          ];

        const refund =
          refundStatus[
            (mentorIndex + programIndex) %
              refundStatus.length
          ];

        const platform =
          platforms[
            (mentorIndex + programIndex) %
              platforms.length
          ];

        const sessionId = `SES-${mentor.id}-${programIndex + 1}`;

        const programId = `PRG-${mentor.id}-${programIndex + 1}`;

        const bookingId = `BK-${mentor.id}${programIndex + 1}`;

        return {
                      id: sessionId,

          /* ---------------- Mentor ---------------- */

          mentorId: mentor.id,

          mentorName: mentor.name,

          mentorImage: mentor.image,

          mentorRole: mentor.role,

          mentorCompany: mentor.company,

          mentorEmail: `${mentor.name
            .toLowerCase()
            .replace(/\s+/g, ".")}@coachcoaching.com`,

          /* ---------------- Student ---------------- */

          studentId: student.id,

          studentName: student.name,

          studentImage: student.image,

          studentEmail: student.email,

          /* ---------------- Program ---------------- */

          programId,

          programTitle: program.title,

          sessionType: program.title,

          /* ---------------- Schedule ---------------- */

          date: `${20 + programIndex} Jul 2026`,

          time: [
            "09:00 AM",
            "10:30 AM",
            "12:00 PM",
            "02:30 PM",
            "05:00 PM",
            "07:30 PM",
          ][programIndex % 6],

          duration: program.duration,

          timezone: mentor.timezone,

          meetingPlatform: platform,

          meetingLink:
            "https://meet.google.com/demo-session",

          /* ---------------- Status ---------------- */

          status,

          attendance: attendanceStatus,

          paymentStatus: payment,

          refundStatus: refund,

          /* ---------------- Pricing ---------------- */

          amount: program.price,

          refundAmount:
            refund === "processed"
              ? Math.round(program.price * 0.8)
              : 0,

          /* ---------------- Certificate ---------------- */

          certificateIssued:
            status === "completed",

          certificateId:
            status === "completed"
              ? `CERT-${mentor.id}-${programIndex + 1}`
              : undefined,

          /* ---------------- Booking ---------------- */

          bookingReference: bookingId,

          bookedAt: "10 Jul 2026",

          /* ---------------- Notes ---------------- */

          studentNotes:
            "Looking for career guidance and interview preparation.",

          mentorNotes:
            "Focus on roadmap, resume review and mock interview.",

          adminNotes:
            "Verified by admin. Session scheduled successfully.",

          cancelReason:
            status === "cancelled"
              ? "Student requested cancellation."
              : undefined,

          cancelledBy:
            status === "cancelled"
              ? "Student"
              : undefined,

          /* ---------------- Recording ---------------- */

          recordingUrl:
            status === "completed"
              ? "https://example.com/session-recording"
              : undefined,

          /* ---------------- Backend ---------------- */

          createdAt: "2026-07-01",

          updatedAt: "2026-07-05",
        };
      }
    )
  );