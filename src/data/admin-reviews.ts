import type {
  AdminReview,
  ReviewStats,
} from "@/types/admin-review";

export const reviewStats: ReviewStats = {
  totalReviews: 2846,

  approvedReviews: 2498,

  pendingReviews: 168,

  rejectedReviews: 94,

  reportedReviews: 86,

  averageRating: 4.7,

  verifiedReviews: 2314,

  flaggedReviews: 42,
};

export const reviews: AdminReview[] = [
  {
    id: "1",

    reviewId: "REV-100001",

    type: "mentor",

    status: "approved",

    rating: 5,

    title: "Outstanding mentorship",

    review:
      "The mentor explained every concept clearly and helped me crack my frontend interview. Highly recommended.",

    helpfulCount: 124,

    verifiedPurchase: true,

    createdAt: "05 Jul 2026",

    updatedAt: "05 Jul 2026",

    user: {
      id: "USR-001",

      name: "Rahul Sharma",

      email: "rahul@example.com",

      avatar: "https://i.pravatar.cc/150?img=11",
    },

    mentor: {
      id: "MEN-001",

      name: "Aman Verma",

      avatar: "https://i.pravatar.cc/150?img=21",

      company: "Google",
    },

    target: {
      id: "M-101",

      title: "Frontend Mentorship",
    },
  },

  {
    id: "2",

    reviewId: "REV-100002",

    type: "program",

    status: "pending",

    rating: 4,

    title: "Very informative program",

    review:
      "Content quality is excellent and assignments are practical. Waiting for more advanced modules.",

    helpfulCount: 56,

    verifiedPurchase: true,

    createdAt: "04 Jul 2026",

    updatedAt: "04 Jul 2026",

    user: {
      id: "USR-002",

      name: "Priya Patel",

      email: "priya@example.com",

      avatar: "https://i.pravatar.cc/150?img=32",
    },

    mentor: {
      id: "MEN-002",

      name: "Neha Kapoor",

      avatar: "https://i.pravatar.cc/150?img=42",

      company: "Microsoft",
    },

    target: {
      id: "P-201",

      title: "Advanced React Bootcamp",
    },
  },
    {
    id: "3",

    reviewId: "REV-100003",

    type: "session",

    status: "reported",

    rating: 2,

    title: "Session started late",

    review:
      "The mentor joined the session nearly 20 minutes late. The content was useful but the scheduling experience needs improvement.",

    helpfulCount: 18,

    verifiedPurchase: true,

    createdAt: "03 Jul 2026",

    updatedAt: "04 Jul 2026",

    user: {
      id: "USR-003",

      name: "Arjun Singh",

      email: "arjun@example.com",

      avatar: "https://i.pravatar.cc/150?img=17",
    },

    mentor: {
      id: "MEN-003",

      name: "Rohit Sharma",

      avatar: "https://i.pravatar.cc/150?img=27",

      company: "Amazon",
    },

    target: {
      id: "S-301",

      title: "React Mock Interview Session",
    },
  },

  {
    id: "4",

    reviewId: "REV-100004",

    type: "event",

    status: "approved",

    rating: 5,

    title: "Amazing live event",

    review:
      "The live Q&A session was very interactive. Every question was answered with practical examples.",

    helpfulCount: 92,

    verifiedPurchase: false,

    createdAt: "02 Jul 2026",

    updatedAt: "02 Jul 2026",

    user: {
      id: "USR-004",

      name: "Sneha Gupta",

      email: "sneha@example.com",

      avatar: "https://i.pravatar.cc/150?img=45",
    },

    mentor: {
      id: "MEN-004",

      name: "Ankit Mishra",

      avatar: "https://i.pravatar.cc/150?img=54",

      company: "Meta",
    },

    target: {
      id: "E-401",

      title: "Frontend Career Masterclass",
    },
  },
    {
    id: "5",

    reviewId: "REV-100005",

    type: "certificate",

    status: "rejected",

    rating: 1,

    title: "Certificate issue",

    review:
      "The certificate contained incorrect spelling in my name and took several days to be corrected.",

    helpfulCount: 9,

    verifiedPurchase: true,

    createdAt: "01 Jul 2026",

    updatedAt: "02 Jul 2026",

    user: {
      id: "USR-005",

      name: "Karan Mehta",

      email: "karan@example.com",

      avatar: "https://i.pravatar.cc/150?img=61",
    },

    mentor: {
      id: "MEN-005",

      name: "Sakshi Jain",

      avatar: "https://i.pravatar.cc/150?img=33",

      company: "Adobe",
    },

    target: {
      id: "C-501",

      title: "React Certification",
    },
  },

  {
    id: "6",

    reviewId: "REV-100006",

    type: "mentor",

    status: "approved",

    rating: 5,

    title: "Excellent career guidance",

    review:
      "Resume review, mock interview and career roadmap were extremely helpful. Worth every session.",

    helpfulCount: 187,

    verifiedPurchase: true,

    createdAt: "30 Jun 2026",

    updatedAt: "30 Jun 2026",

    user: {
      id: "USR-006",

      name: "Vikram Yadav",

      email: "vikram@example.com",

      avatar: "https://i.pravatar.cc/150?img=15",
    },

    mentor: {
      id: "MEN-006",

      name: "Riya Sharma",

      avatar: "https://i.pravatar.cc/150?img=48",

      company: "Netflix",
    },

    target: {
      id: "M-601",

      title: "Career Mentorship",
    },
  },
  ];

export const reviewTypes = [
  {
    label: "All Reviews",
    value: "all",
  },
  {
    label: "Mentor",
    value: "mentor",
  },
  {
    label: "Program",
    value: "program",
  },
  {
    label: "Session",
    value: "session",
  },
  {
    label: "Event",
    value: "event",
  },
  {
    label: "Certificate",
    value: "certificate",
  },
] as const;

export const reviewStatuses = [
  {
    label: "All Status",
    value: "all",
  },
  {
    label: "Approved",
    value: "approved",
  },
  {
    label: "Pending",
    value: "pending",
  },
  {
    label: "Rejected",
    value: "rejected",
  },
  {
    label: "Reported",
    value: "reported",
  },
] as const;

export const reviewRatings = [
  {
    label: "All Ratings",
    value: "all",
  },
  {
    label: "5 Stars",
    value: 5,
  },
  {
    label: "4 Stars",
    value: 4,
  },
  {
    label: "3 Stars",
    value: 3,
  },
  {
    label: "2 Stars",
    value: 2,
  },
  {
    label: "1 Star",
    value: 1,
  },
] as const;