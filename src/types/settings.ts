export type ThemeMode =
  | "light"
  | "dark"
  | "system";

export type FontSize =
  | "small"
  | "medium"
  | "large";

export type LayoutMode =
  | "comfortable"
  | "compact";

export type Language =
  | "English"
  | "Hindi";

export type TimeZone =
  | "Asia/Kolkata"
  | "UTC";

export interface AccountSettings {
  fullName: string;
  username: string;
  headline: string;
  email: string;
  phone: string;
  location: string;
  language: Language;
  timezone: TimeZone;
  profileImage: string;
}

export interface SecuritySettings {
  twoFactorEnabled: boolean;
  recoveryEmail: string;
  recoveryPhone: string;
  lastPasswordChanged: string;
  loginAlerts: boolean;
}

export interface NotificationSettings {
  email: boolean;
  push: boolean;
  sms: boolean;

  mentorMessages: boolean;
  programs: boolean;
  sessions: boolean;
  certificates: boolean;
  events: boolean;
  payments: boolean;

  marketing: boolean;
  weeklyDigest: boolean;
}

export interface AppearanceSettings {
  theme: ThemeMode;

  accentColor: string;

  fontSize: FontSize;

  layout: LayoutMode;

  animations: boolean;
}

export interface PrivacySettings {
  profileVisible: boolean;

  showEducation: boolean;

  showSkills: boolean;

  showCertificates: boolean;

  showSavedMentors: boolean;

  showUpcomingSessions: boolean;

  searchEngineIndexing: boolean;

  analytics: boolean;

  cookies: boolean;

  dataSharing: boolean;
}

export type ConnectedProvider =
  | "google"
  | "github"
  | "linkedin"
  | "microsoft"
  | "apple";

export interface ConnectedAccount {
  id: string;

  provider: ConnectedProvider;

  connected: boolean;

  email: string;

  avatar?: string;

  lastSynced?: string;
}

export type DeviceType =
  | "desktop"
  | "mobile"
  | "tablet";

export interface DeviceSession {
  id: string;

  deviceType: DeviceType;

  deviceName: string;

  browser: string;

  os: string;

  location: string;

  lastActive: string;

  current: boolean;
}

export interface SettingsState {
  account: AccountSettings;

  security: SecuritySettings;

  notifications: NotificationSettings;

  appearance: AppearanceSettings;

  privacy: PrivacySettings;

  connectedAccounts: ConnectedAccount[];

  devices: DeviceSession[];
}