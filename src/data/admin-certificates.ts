import type {
  AdminCertificate,
} from "@/types/admin-certificate";

const mentorImages = [
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300",
];

const studentImages = [
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300",
  "https://images.unsplash.com/photo-1546961329-78bef0414d7c?w=300",
  "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=300",
  "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=300",
];

export const adminCertificates: AdminCertificate[] = [
  {
    id: "CERT-1001",

    certificateNumber: "CC-2026-1001",

    credentialId: "CRD-8D91A21",

    studentId: "USR-001",

    studentName: "Rahul Sharma",

    studentEmail: "rahul@example.com",

    studentImage: studentImages[0],

    mentorId: "MEN-001",

    mentorName: "Amit Verma",

    mentorRole: "Senior Product Coach",

    mentorCompany: "Google",

    mentorImage: mentorImages[0],

    title: "Advanced Product Management",

    description:
      "Successfully completed Advanced Product Management Program.",

    category: "Program",

    programId: "PRG-001",

    programTitle:
      "Advanced Product Management",

    issueDate: "12 Jun 2026",

    completionDate:
      "10 Jun 2026",

    status: "issued",

    verificationStatus:
      "verified",

    score: "96%",

    grade: "A+",

    duration: "12 Weeks",

    skills: [
      "Product Strategy",
      "Leadership",
      "Roadmaps",
      "Research",
    ],

    qrCode:
      "https://dummyimage.com/180x180/000/fff.png&text=QR",

    certificateUrl: "#",

    verificationUrl: "#",

    downloadCount: 45,

    viewCount: 112,

    issuedBy:
      "Thraivio Admin",

    lastDownloaded:
      "18 Jun 2026",

    notes:
      "Excellent Performance",

    createdAt:
      "12 Jun 2026",

    updatedAt:
      "18 Jun 2026",
  },

  {
    id: "CERT-1002",

    certificateNumber:
      "CC-2026-1002",

    credentialId:
      "CRD-92KL88D",

    studentId: "USR-002",

    studentName: "Priya Singh",

    studentEmail:
      "priya@example.com",

    studentImage: studentImages[1],

    mentorId: "MEN-002",

    mentorName:
      "Neha Kapoor",

    mentorRole:
      "Leadership Coach",

    mentorCompany: "Microsoft",

    mentorImage:
      mentorImages[1],

    title:
      "Leadership Bootcamp",

    description:
      "Completed leadership bootcamp.",

    category: "Program",

    programId: "PRG-002",

    programTitle:
      "Leadership Bootcamp",

    issueDate:
      "03 Jul 2026",

    completionDate:
      "01 Jul 2026",

    status: "issued",

    verificationStatus:
      "verified",

    score: "93%",

    grade: "A",

    duration: "8 Weeks",

    skills: [
      "Leadership",
      "Communication",
      "Management",
    ],

    qrCode:
      "https://dummyimage.com/180x180/000/fff.png&text=QR",

    certificateUrl: "#",

    verificationUrl: "#",

    downloadCount: 27,

    viewCount: 68,

    issuedBy:
      "Thraivio Admin",

    lastDownloaded:
      "05 Jul 2026",

    createdAt:
      "03 Jul 2026",

    updatedAt:
      "05 Jul 2026",
  },

  {
    id: "CERT-1003",

    certificateNumber:
      "CC-2026-1003",

    credentialId:
      "CRD-3JK77LM",

    studentId: "USR-003",

    studentName:
      "Ankit Patel",

    studentEmail:
      "ankit@example.com",

    studentImage:
      studentImages[2],

    mentorId:
      "MEN-003",

    mentorName:
      "Rohit Mehta",

    mentorRole:
      "Engineering Mentor",

    mentorCompany: "Amazon",

    mentorImage:
      mentorImages[2],

    title:
      "System Design Masterclass",

    description:
      "Successfully completed masterclass.",

    category: "Session",

    sessionId:
      "SES-001",

    sessionTitle:
      "System Design",

    issueDate:
      "18 May 2026",

    completionDate:
      "18 May 2026",

    status: "issued",

    verificationStatus:
      "verified",

    score: "98%",

    grade: "A+",

    duration: "3 Hours",

    skills: [
      "Scalability",
      "Architecture",
      "Caching",
      "Load Balancing",
    ],

    qrCode:
      "https://dummyimage.com/180x180/000/fff.png&text=QR",

    certificateUrl: "#",

    verificationUrl: "#",

    downloadCount: 61,

    viewCount: 154,

    issuedBy:
      "Thraivio Admin",

    lastDownloaded:
      "19 May 2026",

    createdAt:
      "18 May 2026",

    updatedAt:
      "19 May 2026",
  },

  {
    id: "CERT-1004",

    certificateNumber:
      "CC-2026-1004",

    credentialId:
      "CRD-AB771P",

    studentId:
      "USR-004",

    studentName:
      "Sneha Joshi",

    studentEmail:
      "sneha@example.com",

    studentImage:
      studentImages[3],

    mentorId:
      "MEN-004",

    mentorName:
      "Karan Malhotra",

    mentorRole:
      "AI Mentor",

    mentorCompany:
      "OpenAI",

    mentorImage:
      mentorImages[3],

    title:
      "Generative AI Workshop",

    description:
      "Workshop completion certificate.",

    category: "Event",

    eventId:
      "EVT-001",

    eventTitle:
      "Generative AI Summit",

    issueDate:
      "28 Apr 2026",

    completionDate:
      "28 Apr 2026",

    status:
      "pending",

    verificationStatus:
      "unverified",

    skills: [
      "Prompt Engineering",
      "LLMs",
      "AI",
    ],

    qrCode:
      "https://dummyimage.com/180x180/000/fff.png&text=QR",

    certificateUrl: "#",

    verificationUrl: "#",

    downloadCount: 0,

    viewCount: 14,

    issuedBy:
      "Thraivio Admin",

    createdAt:
      "28 Apr 2026",

    updatedAt:
      "28 Apr 2026",
  },

  {
    id: "CERT-1005",

    certificateNumber:
      "CC-2026-1005",

    credentialId:
      "CRD-X99KLP",

    studentId:
      "USR-005",

    studentName:
      "Vikram Rao",

    studentEmail:
      "vikram@example.com",

    studentImage:
      studentImages[4],

    mentorId:
      "MEN-005",

    mentorName:
      "Anjali Shah",

    mentorRole:
      "Career Mentor",

    mentorCompany:
      "LinkedIn",

    mentorImage:
      mentorImages[4],

    title:
      "Career Growth Accelerator",

    description:
      "Career coaching completion certificate.",

    category:
      "Program",

    programId:
      "PRG-005",

    programTitle:
      "Career Accelerator",

    issueDate:
      "15 Mar 2026",

    completionDate:
      "14 Mar 2026",

    expiryDate:
      "15 Mar 2029",

    status:
      "expired",

    verificationStatus:
      "verified",

    score:
      "88%",

    grade:
      "B+",

    duration:
      "6 Weeks",

    skills: [
      "Resume",
      "Interview",
      "Networking",
    ],

    qrCode:
      "https://dummyimage.com/180x180/000/fff.png&text=QR",

    certificateUrl: "#",

    verificationUrl: "#",

    downloadCount: 39,

    viewCount: 81,

    issuedBy:
      "Thraivio Admin",

    lastDownloaded:
      "20 Mar 2026",

    createdAt:
      "15 Mar 2026",

    updatedAt:
      "20 Mar 2026",
  },
];
// ==============================
// Certificate Statistics
// ==============================

export const certificateStats = {
  total: adminCertificates.length,

  issued: adminCertificates.filter(
    (item) => item.status === "issued"
  ).length,

  pending: adminCertificates.filter(
    (item) => item.status === "pending"
  ).length,

  revoked: adminCertificates.filter(
    (item) => item.status === "revoked"
  ).length,

  expired: adminCertificates.filter(
    (item) => item.status === "expired"
  ).length,

  verified: adminCertificates.filter(
    (item) =>
      item.verificationStatus ===
      "verified"
  ).length,

  downloads:
    adminCertificates.reduce(
      (sum, item) =>
        sum + item.downloadCount,
      0
    ),

  averageScore:
    Math.round(
      adminCertificates.reduce(
        (sum, item) => {
          const score = Number(
            (item.score || "0").replace(
              "%",
              ""
            )
          );

          return sum + score;
        },
        0
      ) /
        adminCertificates.filter(
          (item) => item.score
        ).length
    ) || 0,
};

// ==============================
// Status Options
// ==============================

export const certificateStatusOptions =
  [
    {
      label: "All Status",
      value: "all",
    },

    {
      label: "Issued",
      value: "issued",
    },

    {
      label: "Pending",
      value: "pending",
    },

    {
      label: "Revoked",
      value: "revoked",
    },

    {
      label: "Expired",
      value: "expired",
    },
  ];

// ==============================
// Category Options
// ==============================

export const certificateCategoryOptions =
  [
    {
      label: "All Categories",
      value: "all",
    },

    {
      label: "Program",
      value: "Program",
    },

    {
      label: "Session",
      value: "Session",
    },

    {
      label: "Event",
      value: "Event",
    },
  ];

// ==============================
// Verification Options
// ==============================

export const verificationOptions =
  [
    {
      label: "All",
      value: "all",
    },

    {
      label: "Verified",
      value: "verified",
    },

    {
      label: "Unverified",
      value: "unverified",
    },
  ];

// ==============================
// Mentor Options
// ==============================

export const mentorOptions = [
  {
    label: "All Mentors",
    value: "all",
  },

  ...Array.from(
    new Map(
      adminCertificates.map(
        (item) => [
          item.mentorId,

          {
            label:
              item.mentorName,

            value:
              item.mentorId,
          },
        ]
      )
    ).values()
  ),
];

// ==============================
// Student Options
// ==============================

export const studentOptions = [
  {
    label: "All Students",
    value: "all",
  },

  ...Array.from(
    new Map(
      adminCertificates.map(
        (item) => [
          item.studentId,

          {
            label:
              item.studentName,

            value:
              item.studentId,
          },
        ]
      )
    ).values()
  ),
];

// ==============================
// View Options
// ==============================

export const certificateViewOptions =
  [
    {
      label: "Grid",
      value: "grid",
    },

    {
      label: "List",
      value: "list",
    },
  ];

// ==============================
// Default Filters
// ==============================

export const defaultCertificateFilters =
  {
    search: "",

    status: "all",

    category: "all",

    mentor: "all",

    student: "all",

    verification: "all",

    date: "",
  };