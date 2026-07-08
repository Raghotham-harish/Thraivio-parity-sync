import type { DashboardState } from "@/types/dashboard";

export const dashboardData: DashboardState = {
  hero: {
    userName: "Sunil Kumar Pal",

    avatar:
      "https://i.pravatar.cc/150?img=12",

    greeting: "Good Morning 👋",

    welcomeMessage:
      "Continue your mentorship journey and achieve your career goals.",

    level: 12,

    xp: 4860,

    xpProgress:78,

    streak: 18,

    profileCompletion: 92,
  },

  stats: [
    {
      id: "programs",

      title: "Programs",

      value: "08",

      change: "+2 This Month",

      changeType: "increase",

      icon: "BookOpen",

      color: "text-blue-600",

      bgColor: "bg-blue-50",
    },

    {
      id: "sessions",

      title: "Sessions",

      value: "26",

      change: "+4 This Week",

      changeType: "increase",

      icon: "CalendarCheck",

      color: "text-emerald-600",

      bgColor: "bg-emerald-50",
    },

    {
      id: "certificates",

      title: "Certificates",

      value: "05",

      change: "+1 New",

      changeType: "increase",

      icon: "Award",

      color: "text-amber-600",

      bgColor: "bg-amber-50",
    },

    {
      id: "saved",

      title: "Saved Mentors",

      value: "14",

      change: "+3 Recently",

      changeType: "increase",

      icon: "Heart",

      color: "text-pink-600",

      bgColor: "bg-pink-50",
    },

    {
      id: "hours",

      title: "Learning Hours",

      value: "148",

      change: "+12 hrs",

      changeType: "increase",

      icon: "Clock3",

      color: "text-violet-600",

      bgColor: "bg-violet-50",
    },

    {
      id: "completion",

      title: "Completion",

      value: "87%",

      change: "+6%",

      changeType: "increase",

      icon: "TrendingUp",

      color: "text-cyan-600",

      bgColor: "bg-cyan-50",
    },
  ],

  continueLearning: [
    {
      id: "1",

      title: "Advanced React Masterclass",

      mentor: "Sarah Johnson",

      thumbnail:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",

      progress: 72,

      completedLessons: 18,

      totalLessons: 25,

      duration: "32 Hours",

      nextLesson: "React Performance",

      category: "Frontend",
    },

    {
      id: "2",

      title: "Node.js Backend Bootcamp",

      mentor: "David Miller",

      thumbnail:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",

      progress: 41,

      completedLessons: 9,

      totalLessons: 22,

      duration: "26 Hours",

      nextLesson: "JWT Authentication",

      category: "Backend",
    },
  ],

  upcomingSessions: [
    {
      id: "1",

      mentorName: "Emily Carter",

      mentorImage:
        "https://randomuser.me/api/portraits/women/68.jpg",

      topic: "Career Guidance",

      date: "28 Jun 2026",

      time: "07:00 PM",

      duration: "60 min",

      meetingType: "Google Meet",

      status: "Today",

      joinLink: "#",
    },

    {
      id: "2",

      mentorName: "Michael Brown",

      mentorImage:
        "https://randomuser.me/api/portraits/men/54.jpg",

      topic: "System Design",

      date: "30 Jun 2026",

      time: "05:00 PM",

      duration: "90 min",

      meetingType: "Zoom",

      status: "Upcoming",

      joinLink: "#",
    },
  ],

  recommendedMentors: [
    {
      id: "1",

      name: "Sarah Johnson",

      image:
        "https://randomuser.me/api/portraits/women/44.jpg",

      designation: "Senior Software Engineer",

      company: "Google",

      rating: 4.9,

      reviews: 214,

      experience: 9,

      hourlyPrice: 1499,

      skills: [
        "React",
        "TypeScript",
        "Frontend",
      ],
    },

    {
      id: "2",

      name: "David Miller",

      image:
        "https://randomuser.me/api/portraits/men/41.jpg",

      designation: "Backend Architect",

      company: "Microsoft",

      rating: 4.8,

      reviews: 186,

      experience: 12,

      hourlyPrice: 1799,

      skills: [
        "Node.js",
        "MongoDB",
        "AWS",
      ],
    },

    {
      id: "3",

      name: "Jessica Lee",

      image:
        "https://randomuser.me/api/portraits/women/55.jpg",

      designation: "Product Manager",

      company: "Amazon",

      rating: 4.9,

      reviews: 165,

      experience: 10,

      hourlyPrice: 1999,

      skills: [
        "Product",
        "Leadership",
        "Career",
      ],
    },
  ],

  achievements: [
    {
    id:"1",

    title:"React Master",

    description:"Completed React Advanced Track.",

    icon:"award",

    progress:100,

    unlocked:true,

    xp:600,
},

    {
    id:"2",

    title:"30 Day Streak",

    description:"Learned continuously for 30 days.",

    icon:"trophy",

    progress:70,

    unlocked:false,

    xp:350,
}
  ],

  recentActivities: [
    {
      id: "1",

      title: "Completed Session",

      description:
        "Finished React Performance Session.",

      time: "2 Hours Ago",

      type: "session",
    },

    {
      id: "2",

      title: "Certificate Earned",

      description:
        "React Masterclass Certificate.",

      time: "Yesterday",

      type: "certificate",
    },

    {
      id: "3",

      title: "Saved Mentor",

      description:
        "Added Emily Carter to favourites.",

      time: "2 Days Ago",

      type:"saved",
    },
  ],

  analytics:{
totalLearningHours:148,

weeklyHours:18,

completedPrograms:8,

activeStreak:18,

weeklyProgress:[
2,
3,
4,
2,
5,
6,
4,
],
},

  quickActions: [
    {
      id: "1",

      title: "Browse Mentors",

      description:
        "Find industry experts.",

      icon: "Users",

      href: "/mentors",

      color: "blue",
    },

    {
      id: "2",

      title: "Book Session",

      description:
        "Schedule a mentorship session.",

      icon: "CalendarPlus",

      href: "/mentors",

      color: "green",
    },

    {
      id: "3",

      title: "Explore Programs",

      description:
        "Discover new learning paths.",

      icon: "GraduationCap",

      href: "/programs",

      color: "purple",
    },

    {
      id: "4",

      title: "Certificates",

      description:
        "View earned certificates.",

      icon: "Award",

      href: "/user-dashboard/certificates",

      color: "amber",
    },
  ],

  announcements: [
    {
      id: "1",

      title: "New AI Mentorship Program",

      description:
        "Enroll now and learn directly from AI industry experts.",

      category: "Program",

      important:true,

      date: "26 Jun 2026",
    },

    {
      id: "2",

      title: "Platform Maintenance",

      description:
        "Scheduled maintenance on Sunday from 2 AM to 4 AM.",

      category: "Program",

      important:false,

      date: "25 Jun 2026",
    },
  ],
};