import { mentors } from "./mentors";

import type {
  AdminEvent,
  EventAgenda,
  EventStats,
  EventType,
  EventMode,
  EventStatus,
} from "@/types/admin-events";

/* ===========================================================
   Helpers
=========================================================== */

const statuses: EventStatus[] = [
  "published",
  "live",
  "upcoming",
  "completed",
  "cancelled",
] as const;

const durations = [
  "60 Minutes",
  "90 Minutes",
  "120 Minutes",
  "2 Hours",
];

const categories = [
  "Product",
  "Engineering",
  "Career",
  "Startup",
  "Leadership",
  "Marketing",
];

const ticketPrices = [
  0,
  19,
  29,
  39,
  49,
  79,
  99,
];

const learningLibrary = [
  "Live Q&A Session",
  "Certificate of Completion",
  "Recording Access",
  "Resource Material",
  "Community Access",
  "Career Guidance",
];

const requirementsLibrary = [
  "Laptop/Desktop",
  "Stable Internet Connection",
  "Zoom Installed",
  "Notebook",
  "Basic Domain Knowledge",
];

const agendaTemplate = (): EventAgenda[] => [
  {
    id: crypto.randomUUID(),
    title: "Introduction",
    description: "Welcome and mentor introduction.",
    startTime: "07:00 PM",
    endTime: "07:15 PM",
  },
  {
    id: crypto.randomUUID(),
    title: "Core Session",
    description: "Deep dive into the topic.",
    startTime: "07:15 PM",
    endTime: "08:00 PM",
  },
  {
    id: crypto.randomUUID(),
    title: "Live Q&A",
    description: "Questions from attendees.",
    startTime: "08:00 PM",
    endTime: "08:30 PM",
  },
];

const random = <T,>(arr: readonly T[]) =>
  arr[Math.floor(Math.random() * arr.length)];

/* ===========================================================
   Events
=========================================================== */

export const adminEvents: AdminEvent[] = mentors.flatMap(
  (mentor) =>
    mentor.events.map((event, index) => {
      const capacity =
        event.registered +
        event.seatsLeft;

      const ticketPrice =
        random(ticketPrices);

      const revenue =
        ticketPrice * event.registered;

      return {
        id: `${mentor.id}-${index + 1}`,

        mentorId: mentor.id,

        mentorName: mentor.name,

        mentorAvatar: mentor.image,

        mentorCompany: mentor.company,

        mentorCategory:
          mentor.category,

        title: event.title,

        slug: event.title
          .toLowerCase()
          .replaceAll(" ", "-"),

        banner: mentor.image,

        description:
          `${event.title} hosted by ${mentor.name}. Learn directly from an industry expert through practical sessions, networking opportunities and live mentoring.`,

        shortDescription:
          `Live ${event.type} with ${mentor.name}.`,

        category:
          mentor.category ??
          random(categories),

        type: event.type as AdminEvent["type"],

        mode: event.mode as AdminEvent["mode"],

        status:
  statuses[
    (mentor.id + index) %
      statuses.length
  ] as AdminEvent["status"],

        featured:
          mentor.featured &&
          index === 0,

        published:
          index !== 2,

        date: event.date,

        month: event.month,

        day: event.day,

        weekday: event.weekday,

        time: event.time,

        duration:
          random(durations),

        timezone:
          mentor.timezone,

        capacity,

        registered:
          event.registered,

        seatsLeft:
          event.seatsLeft,

        location:
          event.mode === "Online"
            ? "Zoom Meeting"
            : mentor.location,

        meetingLink:
          "https://zoom.us/j/123456789",

        tags: [
          mentor.category,
          event.type,
          mentor.company,
        ],

        agenda:
          agendaTemplate(),

        learningPoints: [
          ...learningLibrary.slice(
            0,
            4
          ),
        ],

        requirements: [
          ...requirementsLibrary.slice(
            0,
            4
          ),
        ],

        analytics: {
          views:
            event.registered * 7,

          registrations:
            event.registered,

          attendees: Math.round(
            event.registered *
              0.86
          ),

          attendanceRate: 86,

          certificatesIssued:
            Math.round(
              event.registered *
                0.81
            ),

          completionRate: 91,

          revenue,
        },

        feedback: {
          totalReviews:
            Math.round(
              event.registered *
                0.52
            ),

          averageRating: 4.9,

          recommendationRate: 96,
        },

        certificate: {
          enabled: true,

          template:
            "Premium Certificate",

          issued: Math.round(
            event.registered *
              0.81
          ),
        },

        revenue: {
          ticketPrice,

          grossRevenue:
            revenue,

          platformFee:
            Math.round(
              revenue * 0.1
            ),

          mentorPayout:
            Math.round(
              revenue * 0.9
            ),

          refundAmount:
            Math.round(
              revenue * 0.02
            ),
        },

        createdAt:
          "2026-01-10",

        updatedAt:
          "2026-06-20",
      };
    })
);
/* ===========================================================
   Stats
=========================================================== */

export const eventStats: EventStats = {
  total: adminEvents.length,

  upcoming: adminEvents.filter(
    (event) => event.status === "upcoming"
  ).length,

  live: adminEvents.filter(
    (event) => event.status === "live"
  ).length,

  completed: adminEvents.filter(
    (event) => event.status === "completed"
  ).length,

  cancelled: adminEvents.filter(
    (event) => event.status === "cancelled"
  ).length,

  registrations: adminEvents.reduce(
    (total, event) => total + event.registered,
    0
  ),
};

/* ===========================================================
   Filters
=========================================================== */

export const eventStatusOptions: {
  label: string;
  value: "all" | EventStatus;
}[] = [
  {
    label: "All Status",
    value: "all",
  },

  {
    label: "Draft",
    value: "draft",
  },

  {
    label: "Published",
    value: "published",
  },

  {
    label: "Live",
    value: "live",
  },

  {
    label: "Upcoming",
    value: "upcoming",
  },

  {
    label: "Completed",
    value: "completed",
  },

  {
    label: "Cancelled",
    value: "cancelled",
  },
];

export const eventCategoryOptions = [
  {
    label: "All Categories",
    value: "all",
  },

  ...Array.from(
    new Set(
      adminEvents.map(
        (event) => event.category
      )
    )
  )
    .sort()
    .map((category) => ({
      label: category,
      value: category,
    })),
];

export const mentorOptions = [
  {
    label: "All Mentors",
    value: "all",
  },

  ...mentors.map((mentor) => ({
    label: mentor.name,
    value: mentor.name,
  })),
];

export const eventTypeOptions: {
  label: string;
  value: "all" | EventType;
}[] = [
  {
    label: "All Types",
    value: "all",
  },

  ...Array.from(
    new Set(
      adminEvents.map(
        (event) => event.type
      )
    )
  ).map((type) => ({
    label: type,
    value: type,
  })),
];

/* ===========================================================
   Dashboard Summary
=========================================================== */

export const totalRevenue =
  adminEvents.reduce(
    (sum, event) =>
      sum + event.revenue.grossRevenue,
    0
  );

export const totalMentorPayout =
  adminEvents.reduce(
    (sum, event) =>
      sum + event.revenue.mentorPayout,
    0
  );

export const totalPlatformFee =
  adminEvents.reduce(
    (sum, event) =>
      sum + event.revenue.platformFee,
    0
  );

export const totalCertificates =
  adminEvents.reduce(
    (sum, event) =>
      sum +
      event.certificate.issued,
    0
  );

export const totalAttendees =
  adminEvents.reduce(
    (sum, event) =>
      sum +
      event.analytics.attendees,
    0
  );

export const averageRating =
  Number(
    (
      adminEvents.reduce(
        (sum, event) =>
          sum +
          event.feedback
            .averageRating,
        0
      ) / adminEvents.length
    ).toFixed(1)
  );

/* ===========================================================
   Quick Analytics
=========================================================== */

export const eventAnalyticsSummary =
  {
    totalRevenue,

    totalMentorPayout,

    totalPlatformFee,

    totalCertificates,

    totalAttendees,

    averageRating,
  };

/* ===========================================================
   Featured Events
=========================================================== */

export const featuredEvents =
  adminEvents.filter(
    (event) => event.featured
  );

export const liveEvents =
  adminEvents.filter(
    (event) =>
      event.status === "live"
  );

export const upcomingEvents =
  adminEvents.filter(
    (event) =>
      event.status ===
      "upcoming"
  );

export const publishedEvents =
  adminEvents.filter(
    (event) =>
      event.published
  );

/* ===========================================================
   Default Export
=========================================================== */

export default adminEvents;