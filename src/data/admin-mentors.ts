import type {
  AdminMentor,
  MentorStats,
} from "@/types/admin-mentors";

export const mentorStats: MentorStats = {
  totalMentors: 2480,
  activeMentors: 2135,
  pendingApprovals: 74,
  verifiedMentors: 1968,
  suspendedMentors: 29,
  featuredMentors: 148,
};

export const mentors: AdminMentor[] = [
  {
    id: "mentor-001",

    name: "Sarah Johnson",

    username: "sarahjohnson",

    email: "sarah@example.com",

    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",

    coverImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",

    headline:
      "Leadership Coach & Startup Advisor",

    bio:
      "Helping founders and professionals scale their careers through leadership coaching.",

    location: "New York, USA",

    timezone: "EST",

    experience: 12,

    rating: 4.9,

    totalReviews: 824,

    completedSessions: 2410,

    activePrograms: 7,

    earnings: 124500,

    hourlyRate: 120,

    membership: "enterprise",

    status: "active",

    verification: "verified",

    featured: true,

    published: true,

    available: true,

    joinedAt: "2023-02-18",

    lastActive: "5 min ago",

    skills: [
      {
        id: "1",
        name: "Leadership",
      },
      {
        id: "2",
        name: "Career Growth",
      },
      {
        id: "3",
        name: "Startup",
      },
    ],

    languages: [
      {
        id: "1",
        name: "English",
      },
      {
        id: "2",
        name: "Spanish",
      },
    ],

    certifications: [
      {
        id: "1",
        title: "ICF PCC",

        issuer: "ICF",

        year: "2022",
      },
    ],
  },

  {
    id: "mentor-002",

    name: "Rahul Sharma",

    username: "rahulsharma",

    email: "rahul@example.com",

    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",

    coverImage:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200",

    headline:
      "Software Architect",

    bio:
      "Senior software architect mentoring engineers and tech leads.",

    location: "Bangalore, India",

    timezone: "IST",

    experience: 10,

    rating: 4.8,

    totalReviews: 521,

    completedSessions: 1732,

    activePrograms: 5,

    earnings: 84500,

    hourlyRate: 80,

    membership: "pro",

    status: "active",

    verification: "verified",

    featured: false,

    published: true,

    available: true,

    joinedAt: "2023-07-11",

    lastActive: "18 min ago",

    skills: [
      {
        id: "1",
        name: "React",
      },
      {
        id: "2",
        name: "Node.js",
      },
      {
        id: "3",
        name: "System Design",
      },
    ],

    languages: [
      {
        id: "1",
        name: "English",
      },
      {
        id: "2",
        name: "Hindi",
      },
    ],

    certifications: [
      {
        id: "1",
        title: "AWS Solutions Architect",

        issuer: "Amazon",

        year: "2023",
      },
    ],
  },

  {
    id: "mentor-003",

    name: "Emily Carter",

    username: "emilycarter",

    email: "emily@example.com",

    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",

    coverImage:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200",

    headline:
      "Product Management Mentor",

    bio:
      "Helping aspiring product managers crack top product companies.",

    location: "London, UK",

    timezone: "GMT",

    experience: 9,

    rating: 4.7,

    totalReviews: 442,

    completedSessions: 1344,

    activePrograms: 4,

    earnings: 68200,

    hourlyRate: 95,

    membership: "pro",

    status: "pending",

    verification: "pending",

    featured: false,

    published: false,

    available: false,

    joinedAt: "2024-01-09",

    lastActive: "2 days ago",

    skills: [
      {
        id: "1",
        name: "Product Strategy",
      },
      {
        id: "2",
        name: "Agile",
      },
      {
        id: "3",
        name: "UX",
      },
    ],

    languages: [
      {
        id: "1",
        name: "English",
      },
    ],

    certifications: [
      {
        id: "1",
        title: "Scrum Master",

        issuer: "Scrum.org",

        year: "2021",
      },
    ],
  },
];