import type {
  AdminUser,
  UserStats,
  UserFilterOption,
  UserCountry,
  UserActivity,
  PaymentHistory,
  PurchasedProgram,
  BookedSession,
  UserCertificate,
} from "@/types/admin-users";

/* -------------------------------------------------------------------------- */
/*                                  Statistics                                */
/* -------------------------------------------------------------------------- */

export const userStats: UserStats = {
  totalUsers: 24856,
  activeUsers: 19842,
  premiumUsers: 11248,
  verifiedUsers: 23120,
  blockedUsers: 214,
  newUsersThisMonth: 1284,
};

/* -------------------------------------------------------------------------- */
/*                                   Filters                                  */
/* -------------------------------------------------------------------------- */

export const statusFilters: UserFilterOption[] = [
  {
    label: "All Status",
    value: "all",
  },
  {
    label: "Active",
    value: "active",
  },
  {
    label: "Inactive",
    value: "inactive",
  },
  {
    label: "Blocked",
    value: "blocked",
  },
  {
    label: "Suspended",
    value: "suspended",
  },
];

export const membershipFilters: UserFilterOption[] = [
  {
    label: "All Plans",
    value: "all",
  },
  {
    label: "Free",
    value: "free",
  },
  {
    label: "Basic",
    value: "basic",
  },
  {
    label: "Premium",
    value: "premium",
  },
  {
    label: "Pro",
    value: "pro",
  },
];

export const verificationFilters: UserFilterOption[] = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Verified",
    value: "verified",
  },
  {
    label: "Pending",
    value: "pending",
  },
  {
    label: "Rejected",
    value: "rejected",
  },
];

/* -------------------------------------------------------------------------- */
/*                                  Countries                                 */
/* -------------------------------------------------------------------------- */

export const countries: UserCountry[] = [
  {
    name: "India",
    code: "IN",
  },
  {
    name: "United States",
    code: "US",
  },
  {
    name: "Canada",
    code: "CA",
  },
  {
    name: "United Kingdom",
    code: "GB",
  },
  {
    name: "Australia",
    code: "AU",
  },
  {
    name: "Germany",
    code: "DE",
  },
  {
    name: "Singapore",
    code: "SG",
  },
];

/* -------------------------------------------------------------------------- */
/*                            Reusable Mock Records                           */
/* -------------------------------------------------------------------------- */

const activities: UserActivity[] = [
  {
    id: "ACT-1001",
    type: "login",
    title: "Logged In",
    description: "Signed in from Chrome on Windows.",
    createdAt: "2 minutes ago",
  },
  {
    id: "ACT-1002",
    type: "program",
    title: "Purchased Program",
    description: "Leadership Masterclass enrolled successfully.",
    createdAt: "Today • 10:15 AM",
  },
  {
    id: "ACT-1003",
    type: "session",
    title: "Session Booked",
    description: "Booked a 60 min mentorship session.",
    createdAt: "Yesterday",
  },
  {
    id: "ACT-1004",
    type: "payment",
    title: "Payment Successful",
    description: "Premium Membership renewed.",
    createdAt: "2 days ago",
  },
  {
    id: "ACT-1005",
    type: "certificate",
    title: "Certificate Earned",
    description: "Completed Career Growth Program.",
    createdAt: "5 days ago",
  },
];

const paymentHistory: PaymentHistory[] = [
  {
    id: "PAY-1001",
    amount: 4999,
    currency: "INR",
    status: "paid",
    method: "Credit Card",
    invoiceId: "INV-9001",
    createdAt: "2026-06-20",
  },
  {
    id: "PAY-1002",
    amount: 1499,
    currency: "INR",
    status: "paid",
    method: "UPI",
    invoiceId: "INV-9002",
    createdAt: "2026-05-12",
  },
];

const purchasedPrograms: PurchasedProgram[] = [
  {
    id: "PRG-1001",
    title: "Leadership Masterclass",
    mentorName: "Sarah Johnson",
    thumbnail:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    category: "Leadership",
    progress: 82,
    completed: false,
    purchasedAt: "2026-04-15",
  },
  {
    id: "PRG-1002",
    title: "Career Acceleration",
    mentorName: "Michael Brown",
    thumbnail:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    category: "Career",
    progress: 100,
    completed: true,
    purchasedAt: "2026-02-10",
  },
];

const bookedSessions: BookedSession[] = [
  {
    id: "SES-1001",
    mentorName: "Sarah Johnson",
    mentorAvatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    sessionType: "1 : 1 Coaching",
    duration: "60 Minutes",
    date: "12 July 2026",
    time: "7:00 PM",
    status: "upcoming",
  },
  {
    id: "SES-1002",
    mentorName: "Michael Brown",
    mentorAvatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    sessionType: "Career Guidance",
    duration: "45 Minutes",
    date: "20 June 2026",
    time: "5:30 PM",
    status: "completed",
  },
];

const certificates: UserCertificate[] = [
  {
    id: "CERT-1001",
    title: "Leadership Excellence",
    issuedBy: "CoachCoaching Academy",
    issuedDate: "2026-05-18",
    certificateUrl: "#",
  },
  {
    id: "CERT-1002",
    title: "Career Growth",
    issuedBy: "CoachCoaching Academy",
    issuedDate: "2026-03-28",
    certificateUrl: "#",
  },
];

/* -------------------------------------------------------------------------- */
/*                               Users Dataset                                */
/* -------------------------------------------------------------------------- */

export const users: AdminUser[] = [
      {
    id: "USR-1001",

    name: "Rahul Sharma",
    username: "rahulsharma",

    email: "rahul@example.com",
    phone: "+91 9876543210",

    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",

    coverImage:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",

    role: "User",

    membership: "premium",

    status: "active",

    verification: "verified",

    gender: "male",

    bio:
      "Passionate software engineer focused on career growth and leadership development.",

    occupation: "Software Engineer",

    company: "Google",

    website: "https://rahul.dev",

    linkedin: "https://linkedin.com/in/rahul",

    github: "https://github.com/rahul",

    twitter: "https://twitter.com/rahul",

    country: "India",

    city: "Bangalore",

    timezone: "Asia/Kolkata",

    joinedAt: "12 Jan 2025",

    lastActive: "5 min ago",

    completion: 96,

    sessions: 18,

    bookedSessions: 12,

    programs: 8,

    certificates: 5,

    reviews: 11,

    favoriteMentors: 6,

    totalSpent: 48600,

    skills: [
      "Leadership",
      "React",
      "Communication",
      "Public Speaking",
    ],

    notes:
      "High engagement user. Frequently purchases premium programs.",

    activities,

    paymentHistory,

    purchasedPrograms,

    bookedSessionHistory: bookedSessions,

    certificatesList: certificates,
  },
    {
    id: "USR-1002",

    name: "Priya Patel",

    username: "priyapatel",

    email: "priya@example.com",

    phone: "+91 9123456780",

    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330",

    coverImage:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72",

    role: "User",

    membership: "pro",

    status: "active",

    verification: "verified",

    gender: "female",

    bio:
      "Product manager who enjoys mentorship, networking and career coaching.",

    occupation: "Product Manager",

    company: "Microsoft",

    website: "https://priya.dev",

    linkedin: "https://linkedin.com/in/priya",

    github: "https://github.com/priya",

    twitter: "https://twitter.com/priya",

    country: "India",

    city: "Hyderabad",

    timezone: "Asia/Kolkata",

    joinedAt: "18 Mar 2025",

    lastActive: "25 min ago",

    completion: 100,

    sessions: 26,

    bookedSessions: 21,

    programs: 11,

    certificates: 8,

    reviews: 18,

    favoriteMentors: 9,

    totalSpent: 72800,

    skills: [
      "Leadership",
      "Management",
      "Strategy",
      "Negotiation",
    ],

    notes:
      "One of the highest spending premium members.",

    activities,

    paymentHistory,

    purchasedPrograms,

    bookedSessionHistory: bookedSessions,

    certificatesList: certificates,
  },
    {
    id: "USR-1003",

    name: "Amit Verma",

    username: "amitverma",

    email: "amit.verma@example.com",

    phone: "+91 9811122233",

    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1",

    coverImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",

    role: "User",

    membership: "premium",

    status: "active",

    verification: "verified",

    gender: "male",

    bio:
      "Senior UI/UX Designer focused on design systems, accessibility and product strategy.",

    occupation: "Senior UI/UX Designer",

    company: "Adobe",

    website: "https://amit.design",

    linkedin: "https://linkedin.com/in/amitverma",

    github: "https://github.com/amitverma",

    twitter: "https://twitter.com/amitverma",

    country: "India",

    city: "Pune",

    timezone: "Asia/Kolkata",

    joinedAt: "08 Feb 2025",

    lastActive: "12 min ago",

    completion: 94,

    sessions: 21,

    bookedSessions: 16,

    programs: 9,

    certificates: 6,

    reviews: 14,

    favoriteMentors: 8,

    totalSpent: 58200,

    skills: [
      "UI Design",
      "UX Research",
      "Figma",
      "Design Systems",
      "Leadership",
    ],

    notes:
      "Very active learner. Frequently joins live mentorship sessions.",

    activities,

    paymentHistory,

    purchasedPrograms,

    bookedSessionHistory: bookedSessions,

    certificatesList: certificates,
  },
    {
    id: "USR-1004",

    name: "Sneha Kapoor",

    username: "snehakapoor",

    email: "sneha@example.com",

    phone: "+91 9870011223",

    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",

    coverImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c",

    role: "User",

    membership: "basic",

    status: "inactive",

    verification: "pending",

    gender: "female",

    bio:
      "Marketing professional exploring career coaching and personal branding.",

    occupation: "Marketing Manager",

    company: "HubSpot",

    website: "https://sneha.me",

    linkedin: "https://linkedin.com/in/snehakapoor",

    github: "",

    twitter: "https://twitter.com/snehakapoor",

    country: "India",

    city: "Mumbai",

    timezone: "Asia/Kolkata",

    joinedAt: "22 Apr 2025",

    lastActive: "3 days ago",

    completion: 82,

    sessions: 9,

    bookedSessions: 7,

    programs: 5,

    certificates: 2,

    reviews: 4,

    favoriteMentors: 3,

    totalSpent: 18600,

    skills: [
      "Marketing",
      "Branding",
      "Communication",
      "Content Strategy",
    ],

    notes:
      "Profile verification pending. Follow-up required by admin.",

    activities,

    paymentHistory,

    purchasedPrograms,

    bookedSessionHistory: bookedSessions,

    certificatesList: certificates,
  },
    {
    id: "USR-1005",

    name: "Rohan Mehta",

    username: "rohanmehta",

    email: "rohan.mehta@example.com",

    phone: "+91 9898989898",

    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",

    coverImage:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2",

    role: "User",

    membership: "pro",

    status: "active",

    verification: "verified",

    gender: "male",

    bio:
      "Entrepreneur passionate about startup growth, leadership and business mentoring.",

    occupation: "Founder & CEO",

    company: "GrowthSpark",

    website: "https://growthspark.io",

    linkedin: "https://linkedin.com/in/rohanmehta",

    github: "https://github.com/rohanmehta",

    twitter: "https://twitter.com/rohanmehta",

    country: "India",

    city: "Delhi",

    timezone: "Asia/Kolkata",

    joinedAt: "14 May 2025",

    lastActive: "2 min ago",

    completion: 100,

    sessions: 34,

    bookedSessions: 28,

    programs: 14,

    certificates: 9,

    reviews: 24,

    favoriteMentors: 11,

    totalSpent: 98500,

    skills: [
      "Leadership",
      "Business Strategy",
      "Sales",
      "Startups",
      "Public Speaking",
    ],

    notes:
      "VIP customer. Eligible for priority mentor support.",

    activities,

    paymentHistory,

    purchasedPrograms,

    bookedSessionHistory: bookedSessions,

    certificatesList: certificates,
  },
    {
    id: "USR-1006",

    name: "Neha Singh",

    username: "nehasingh",

    email: "neha.singh@example.com",

    phone: "+91 9765432101",

    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2",

    coverImage:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",

    role: "User",

    membership: "premium",

    status: "active",

    verification: "verified",

    gender: "female",

    bio:
      "HR leader helping professionals improve communication, interviews and career growth.",

    occupation: "HR Director",

    company: "Infosys",

    website: "https://nehasingh.dev",

    linkedin: "https://linkedin.com/in/nehasingh",

    github: "",

    twitter: "https://twitter.com/nehasingh",

    country: "India",

    city: "Bengaluru",

    timezone: "Asia/Kolkata",

    joinedAt: "30 Jan 2025",

    lastActive: "18 min ago",

    completion: 97,

    sessions: 25,

    bookedSessions: 20,

    programs: 12,

    certificates: 7,

    reviews: 19,

    favoriteMentors: 10,

    totalSpent: 74200,

    skills: [
      "Human Resources",
      "Interview Preparation",
      "Communication",
      "Leadership",
      "Career Coaching",
    ],

    notes:
      "Frequently attends live webinars and mentor events.",

    activities,

    paymentHistory,

    purchasedPrograms,

    bookedSessionHistory: bookedSessions,

    certificatesList: certificates,
  },
    {
    id: "USR-1007",

    name: "Arjun Nair",

    username: "arjunnair",

    email: "arjun.nair@example.com",

    phone: "+91 9823456712",

    avatar:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598",

    coverImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",

    role: "User",

    membership: "basic",

    status: "active",

    verification: "verified",

    gender: "male",

    bio:
      "Cloud engineer passionate about DevOps, AWS, Kubernetes and continuous learning.",

    occupation: "Cloud Engineer",

    company: "Amazon Web Services",

    website: "https://arjunnair.dev",

    linkedin: "https://linkedin.com/in/arjunnair",

    github: "https://github.com/arjunnair",

    twitter: "https://twitter.com/arjunnair",

    country: "India",

    city: "Chennai",

    timezone: "Asia/Kolkata",

    joinedAt: "03 Jun 2025",

    lastActive: "42 min ago",

    completion: 91,

    sessions: 17,

    bookedSessions: 13,

    programs: 7,

    certificates: 4,

    reviews: 9,

    favoriteMentors: 5,

    totalSpent: 32100,

    skills: [
      "AWS",
      "Docker",
      "Kubernetes",
      "DevOps",
      "Terraform",
    ],

    notes:
      "Highly technical user. Interested in advanced engineering mentorship.",

    activities,

    paymentHistory,

    purchasedPrograms,

    bookedSessionHistory: bookedSessions,

    certificatesList: certificates,
  },
    {
    id: "USR-1008",

    name: "Kavya Iyer",

    username: "kavyaiyer",

    email: "kavya.iyer@example.com",

    phone: "+91 9876501234",

    avatar:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df",

    coverImage:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",

    role: "User",

    membership: "free",

    status: "inactive",

    verification: "pending",

    gender: "female",

    bio:
      "Fresh graduate looking for career guidance, interview preparation and mentorship.",

    occupation: "Graduate",

    company: "",

    website: "",

    linkedin: "https://linkedin.com/in/kavyaiyer",

    github: "https://github.com/kavyaiyer",

    twitter: "",

    country: "India",

    city: "Kochi",

    timezone: "Asia/Kolkata",

    joinedAt: "18 Jun 2025",

    lastActive: "8 days ago",

    completion: 73,

    sessions: 4,

    bookedSessions: 3,

    programs: 2,

    certificates: 1,

    reviews: 1,

    favoriteMentors: 2,

    totalSpent: 2900,

    skills: [
      "Communication",
      "Problem Solving",
      "Presentation",
    ],

    notes:
      "Free user. Potential premium conversion candidate.",

    activities,

    paymentHistory,

    purchasedPrograms,

    bookedSessionHistory: bookedSessions,

    certificatesList: certificates,
  },
    {
    id: "USR-1009",

    name: "Vikram Joshi",

    username: "vikramjoshi",

    email: "vikram.joshi@example.com",

    phone: "+91 9812345678",

    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1",

    coverImage:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f",

    role: "User",

    membership: "pro",

    status: "active",

    verification: "verified",

    gender: "male",

    bio:
      "Engineering manager passionate about people leadership, system design and technical mentoring.",

    occupation: "Engineering Manager",

    company: "Netflix",

    website: "https://vikramjoshi.dev",

    linkedin: "https://linkedin.com/in/vikramjoshi",

    github: "https://github.com/vikramjoshi",

    twitter: "https://twitter.com/vikramjoshi",

    country: "India",

    city: "Hyderabad",

    timezone: "Asia/Kolkata",

    joinedAt: "09 Aug 2025",

    lastActive: "9 min ago",

    completion: 99,

    sessions: 38,

    bookedSessions: 31,

    programs: 16,

    certificates: 10,

    reviews: 28,

    favoriteMentors: 13,

    totalSpent: 124500,

    skills: [
      "Leadership",
      "System Design",
      "Architecture",
      "Hiring",
      "Engineering Management",
    ],

    notes:
      "Enterprise customer with very high platform engagement.",

    activities,

    paymentHistory,

    purchasedPrograms,

    bookedSessionHistory: bookedSessions,

    certificatesList: certificates,
  },
    {
    id: "USR-1010",

    name: "Ananya Roy",

    username: "ananyaroy",

    email: "ananya.roy@example.com",

    phone: "+91 9890011223",

    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",

    coverImage:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72",

    role: "User",

    membership: "premium",

    status: "blocked",

    verification: "verified",

    gender: "female",

    bio:
      "Digital marketing consultant interested in executive coaching and leadership development.",

    occupation: "Marketing Consultant",

    company: "Freelancer",

    website: "https://ananyaroy.com",

    linkedin: "https://linkedin.com/in/ananyaroy",

    github: "",

    twitter: "https://twitter.com/ananyaroy",

    country: "India",

    city: "Kolkata",

    timezone: "Asia/Kolkata",

    joinedAt: "27 Sep 2025",

    lastActive: "15 days ago",

    completion: 89,

    sessions: 13,

    bookedSessions: 11,

    programs: 6,

    certificates: 3,

    reviews: 6,

    favoriteMentors: 4,

    totalSpent: 41800,

    skills: [
      "Marketing",
      "Brand Strategy",
      "Growth",
      "Communication",
    ],

    notes:
      "Temporarily blocked due to multiple payment verification issues. Admin review required.",

    activities,

    paymentHistory,

    purchasedPrograms,

    bookedSessionHistory: bookedSessions,

    certificatesList: certificates,
  },
    {
    id: "USR-1011",

    name: "Karan Malhotra",

    username: "karanmalhotra",

    email: "karan.malhotra@example.com",

    phone: "+91 9817788990",

    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",

    coverImage:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",

    role: "User",

    membership: "pro",

    status: "active",

    verification: "verified",

    gender: "male",

    bio:
      "Senior software architect helping engineering teams scale products and leadership skills.",

    occupation: "Software Architect",

    company: "Atlassian",

    website: "https://karanmalhotra.dev",

    linkedin: "https://linkedin.com/in/karanmalhotra",

    github: "https://github.com/karanmalhotra",

    twitter: "https://twitter.com/karanmalhotra",

    country: "India",

    city: "Noida",

    timezone: "Asia/Kolkata",

    joinedAt: "15 Oct 2025",

    lastActive: "4 min ago",

    completion: 100,

    sessions: 42,

    bookedSessions: 35,

    programs: 18,

    certificates: 12,

    reviews: 31,

    favoriteMentors: 15,

    totalSpent: 148900,

    skills: [
      "Software Architecture",
      "Leadership",
      "Microservices",
      "System Design",
      "Cloud",
      "Mentoring",
    ],

    notes:
      "Enterprise customer. High-value member with excellent platform engagement.",

    activities,

    paymentHistory,

    purchasedPrograms,

    bookedSessionHistory: bookedSessions,

    certificatesList: certificates,
  },
    {
    id: "USR-1012",

    name: "Meera Khanna",

    username: "meerakhanna",

    email: "meera.khanna@example.com",

    phone: "+91 9874563210",

    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",

    coverImage:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",

    role: "User",

    membership: "premium",

    status: "suspended",

    verification: "verified",

    gender: "female",

    bio:
      "Career coach helping young professionals improve leadership, confidence and communication skills.",

    occupation: "Career Coach",

    company: "CoachCoaching",

    website: "https://meerakhanna.dev",

    linkedin: "https://linkedin.com/in/meerakhanna",

    github: "",

    twitter: "https://twitter.com/meerakhanna",

    country: "India",

    city: "Jaipur",

    timezone: "Asia/Kolkata",

    joinedAt: "20 Nov 2025",

    lastActive: "28 days ago",

    completion: 92,

    sessions: 19,

    bookedSessions: 15,

    programs: 10,

    certificates: 6,

    reviews: 16,

    favoriteMentors: 8,

    totalSpent: 56400,

    skills: [
      "Career Coaching",
      "Leadership",
      "Communication",
      "Interview Preparation",
      "Personal Branding",
    ],

    notes:
      "Account temporarily suspended for policy review. Awaiting admin approval.",

    activities,

    paymentHistory,

    purchasedPrograms,

    bookedSessionHistory: bookedSessions,

    certificatesList: certificates,
  },

];