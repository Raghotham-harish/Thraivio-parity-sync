import { mentors } from "@/data/mentors";

import type { Session } from "@/types/session";

export const userSessions: Session[] =
  mentors.flatMap(
    (mentor, mentorIndex) => [
      {
        id: `${mentor.id}-1`,

        mentorId: mentor.id,

        mentorName: mentor.name,

        mentorImage: mentor.image,

        mentorRole: mentor.role,

        mentorCompany: mentor.company,

        mentorCategory: mentor.category,

        sessionType: "Mentorship Call",

        date: "25 Jun 2026",

        time: "10:00 AM",

        duration:
          mentor.sessionDuration
            ?.mentorshipCall ||
          "60 Min",

        amount:
          mentor.pricing
            ?.mentorshipCall || 99,

        status:
          mentorIndex % 3 === 0
            ? "upcoming"
            : mentorIndex % 3 === 1
            ? "completed"
            : "cancelled",

        paymentStatus: "paid",

        meetingLink:
          "https://meet.google.com/demo",

        bookingReference: `BK-${mentor.id}${mentorIndex}25`,

        bookedAt: "10 Jun 2026",

        timezone: "Asia/Kolkata",

        notes:
          "Prepare career roadmap discussion and resume review.",

        canJoin:
          mentorIndex % 3 === 0,

        canReschedule:
          mentorIndex % 3 === 0,

        canCancel:
          mentorIndex % 3 === 0,
      },

      {
        id: `${mentor.id}-2`,

        mentorId: mentor.id,

        mentorName: mentor.name,

        mentorImage: mentor.image,

        mentorRole: mentor.role,

        mentorCompany: mentor.company,

        mentorCategory: mentor.category,

        sessionType: "Mock Interview",

        date: "30 Jun 2026",

        time: "03:00 PM",

        duration:
          mentor.sessionDuration
            ?.mockInterview ||
          "90 Min",

        amount:
          mentor.pricing
            ?.mockInterview || 149,

        status: "upcoming",

        paymentStatus: "paid",

        meetingLink:
          "https://meet.google.com/demo",

        bookingReference: `BK-${mentor.id}${mentorIndex}30`,

        bookedAt: "12 Jun 2026",

        timezone: "Asia/Kolkata",

        notes:
          "Technical interview preparation session.",

        canJoin: true,

        canReschedule: true,

        canCancel: true,
      },
    ]
  );