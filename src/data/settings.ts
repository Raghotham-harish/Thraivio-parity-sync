import type { SettingsState } from "@/types/settings";

export const settingsData: SettingsState = {
  account: {
    fullName: "Sunil Kumar Pal",

    username: "sunilkumarpal",

    headline:
      "MERN Stack Developer • M.Tech CSE Student",

    email: "sunil@example.com",

    phone: "+91 9876543210",

    location: "Bhopal, Madhya Pradesh",

    language: "English",

    timezone: "Asia/Kolkata",

    profileImage:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43d?w=400",
  },

  security: {
    twoFactorEnabled: false,

    recoveryEmail:
      "sunil.recovery@gmail.com",

    recoveryPhone:
      "+91 9876543210",

    lastPasswordChanged:
      "15 Jun 2026",

    loginAlerts: true,
  },

  notifications: {
    email: true,

    push: true,

    sms: false,

    mentorMessages: true,

    programs: true,

    sessions: true,

    certificates: true,

    events: true,

    payments: true,

    marketing: false,

    weeklyDigest: true,
  },

  appearance: {
    theme: "light",

    accentColor: "#2563EB",

    fontSize: "medium",

    layout: "comfortable",

    animations: true,
  },

  privacy: {
    profileVisible: true,

    showEducation: true,

    showSkills: true,

    showCertificates: true,

    showSavedMentors: true,

    showUpcomingSessions: true,

    searchEngineIndexing: false,

    analytics: true,

    cookies: true,

    dataSharing: false,
  },

  connectedAccounts: [
    {
      id: "google",

      provider: "google",

      connected: true,

      email: "sunil@gmail.com",

      avatar:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",

      lastSynced: "2 hours ago",
    },

    {
      id: "github",

      provider: "github",

      connected: true,

      email: "sunilkumarpal",

      avatar:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",

      lastSynced: "Yesterday",
    },

    {
      id: "linkedin",

      provider: "linkedin",

      connected: false,

      email: "",
    },

    {
      id: "microsoft",

      provider: "microsoft",

      connected: false,

      email: "",
    },

    {
      id: "apple",

      provider: "apple",

      connected: false,

      email: "",
    },
  ],

  devices: [
    {
      id: "1",

      deviceType: "desktop",

      deviceName: "HP Pavilion Laptop",

      browser: "Google Chrome",

      os: "Windows 11",

      location: "Bhopal, India",

      lastActive: "Current Session",

      current: true,
    },

    {
      id: "2",

      deviceType: "mobile",

      deviceName: "Samsung Galaxy S24",

      browser: "Chrome Mobile",

      os: "Android 15",

      location: "Bhopal, India",

      lastActive: "Yesterday",

      current: false,
    },

    {
      id: "3",

      deviceType: "desktop",

      deviceName: "Office Desktop",

      browser: "Microsoft Edge",

      os: "Windows 11",

      location: "Indore, India",

      lastActive: "3 days ago",

      current: false,
    },
  ],
};