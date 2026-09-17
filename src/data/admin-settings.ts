import type {
  AdminSettingsData,
} from "@/types/admin-settings";

export const adminSettings: AdminSettingsData = {
  general: {
    platformName: "Thraivio",

    platformDescription:
      "Premium mentor marketplace platform.",

    platformUrl:
      "https://thraivio.com",

    language: "English",

    timezone:
      "Asia/Kolkata",

    currency: "INR",
  },

  security: {
    enableTwoFactor: true,

    passwordMinLength: 8,

    requireSpecialCharacter: true,

    sessionTimeout: 30,

    maxLoginAttempts: 5,
  },

  email: {
    smtpHost: "smtp.gmail.com",

    smtpPort: 587,

    smtpUsername:
      "support@thraivio.com",

    smtpPassword:
      "••••••••••",

    senderName:
      "Thraivio",

    senderEmail:
      "support@thraivio.com",
  },
    notifications: {
    emailNotifications: true,

    pushNotifications: true,

    smsNotifications: false,

    adminAlerts: true,
  },

  payments: {
    razorpayEnabled: true,

    stripeEnabled: false,

    paypalEnabled: false,

    commissionRate: 15,

    taxRate: 18,
  },

  storage: {
    storageProvider: "Local",

    maxUploadSize: 100,

    enableCloudStorage: false,
  },
    integrations: {
    firebaseEnabled: true,

    googleOAuthEnabled: true,

    githubOAuthEnabled: true,

    calendlyEnabled: true,
  },

  branding: {
    logo: "/logo.svg",

    favicon: "/favicon.ico",

    primaryColor: "#2563eb",

    secondaryColor: "#0f172a",
  },

  maintenance: {
    maintenanceMode: false,

    maintenanceMessage:
      "The platform is currently under scheduled maintenance. Please check back shortly.",
  },
  };

export const settingsTabs = [
  "General",
  "Platform",
  "Security",
  "Email",
  "Notifications",
  "Payments",
  "Storage",
  "Integrations",
  "Branding",
  "Maintenance",
] as const;

export const settingsStats = {
  totalSettings: 10,

  configuredModules: 9,

  activeIntegrations: 4,

  securityScore: 96,

  uptime: "99.98%",

  lastBackup: "Today • 02:00 AM",

  lastUpdated: "08 Jul 2026",

  environment: "Production",
} as const;