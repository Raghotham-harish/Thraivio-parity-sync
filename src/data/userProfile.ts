import type { UserProfile } from "@/types/userProfile";

export const userProfile: UserProfile = {
  id: "user-001",

  fullName: "Sunil Kumar Pal",

  headline: "MERN Stack Developer • M.Tech CSE Student",

  bio:
    "Passionate full-stack developer with strong experience in React, TypeScript, Node.js and MongoDB. Currently pursuing M.Tech in Computer Science while building real-world production applications.",

  email: "sunil@example.com",

  phone: "+91 9876543210",

  location: "Bhopal, Madhya Pradesh, India",

  profileImage:
    "https://i.pravatar.cc/150?img=12",

  coverImage:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1400",

  education: [
    {
      id: "edu-1",

      institution:
        "University Institute of Technology",

      degree: "M.Tech",

      branch:
        "Computer Science & Engineering",

      passingYear: "2027",

      cgpa: "8.8",

      location: "Bhopal",
    },

    {
      id: "edu-2",

      institution: "Engineering College",

      degree: "B.Tech",

      branch:
        "Computer Science & Engineering",

      passingYear: "2025",

      cgpa: "8.4",

      location: "Bhopal",
    },
  ],

  skills: [
    "React",

    "TypeScript",

    "Next.js",

    "Node.js",

    "Express.js",

    "MongoDB",

    "Firebase",

    "Tailwind CSS",

    "Git",

    "REST API",
  ],

  interests: [
    "Web Development",

    "Artificial Intelligence",

    "Open Source",

    "System Design",

    "Cloud Computing",

    "UI / UX",
  ],

  careerGoals: {
  targetRole:
    "Frontend / Full Stack Engineer",

  preferredCompany:
    "Google",

  preferredLocation:
    "Remote",

  careerGoal:
    "Become a Software Engineer in a global product company and build scalable production applications.",

  workMode:
    "Remote",
},

  socialLinks: {
    linkedin:
      "https://linkedin.com/in/your-profile",

    github:
      "https://github.com/sunilkumarpal",

    portfolio:
      "https://portfolio.com",
  },

  stats: {
    programs: 8,

    sessions: 42,

    certificates: 12,

    savedMentors: 18,
  },

  certificates: [
    {
      id: "cert-1",

      title:
        "React Advanced Certification",

      issuer: "Thraivio",

      issueDate: "12 Jun 2026",

      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600",

      verified: true,   
    },

    {
      id: "cert-2",

      title:
        "Node.js Professional",

      issuer: "Thraivio",

      issueDate: "02 Apr 2026",

      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600",

      verified: true,  
    },

    {
      id: "cert-3",

      title:
        "MongoDB Developer",

      issuer: "Thraivio",

      issueDate: "15 Jan 2026",

      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600",

     verified: true,   
    },
  ],

  savedMentors: [
    {
      id: "mentor-1",

      name: "Sarah Johnson",

      role: "Senior Software Engineer",

      company: "Google",

      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",

      rating: 4.9,

      expertise: [
  "React",
  "Career Guidance",
  "Frontend",
],
    },

    {
      id: "mentor-2",

      name: "David Miller",

      role: "Engineering Manager",

      company: "Microsoft",

      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500",

      rating: 4.8,

      expertise: [
  "Leadership",
  "System Design",
  "Career Growth",
],
    },

    {
      id: "mentor-3",

      name: "Emily Brown",

      role: "Frontend Architect",

      company: "Amazon",

      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500",

      rating: 4.9,

      expertise: [
  "React",
  "UI/UX",
  "Architecture",
],
    },
  ],

  upcomingSessions: [
    {
      id: "session-1",

      mentorName: "Sarah Johnson",

      mentorImage:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",

      title:
        "React Performance Optimization",

      date: "28 Jun 2026",

      time: "07:30 PM",

      meetingLink:
        "#",

      platform:
  "Google Meet",  
    },
  ],

  recentActivities: [
    {
      id: "activity-1",

      title:
        "Completed React Program",

      description:
        "Successfully completed Advanced React Learning Path.",

      date:
        "2 hours ago",

      type: "program",
    },

    {
      id: "activity-2",

      title:
        "Certificate Earned",

      description:
        "Received Node.js Professional Certificate.",

      date:
        "Yesterday",

      type: "certificate",
    },

    {
      id: "activity-3",

      title:
        "Saved New Mentor",

      description:
        "Added Sarah Johnson to Saved Mentors.",

      date:
        "3 days ago",

      type: "mentor",
    },
  ],
};