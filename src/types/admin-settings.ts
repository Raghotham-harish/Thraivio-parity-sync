export interface GeneralSettings {
  platformName: string;

  platformDescription: string;

  platformUrl: string;

  language: string;

  timezone: string;

  currency: string;
}

export interface SecuritySettings {
  enableTwoFactor: boolean;

  passwordMinLength: number;

  requireSpecialCharacter: boolean;

  sessionTimeout: number;

  maxLoginAttempts: number;
}

export interface EmailSettings {
  smtpHost: string;

  smtpPort: number;

  smtpUsername: string;

  smtpPassword: string;

  senderName: string;

  senderEmail: string;
}

export interface NotificationSettings {
  emailNotifications: boolean;

  pushNotifications: boolean;

  smsNotifications: boolean;

  adminAlerts: boolean;
}

export interface PaymentSettings {
  razorpayEnabled: boolean;

  stripeEnabled: boolean;

  paypalEnabled: boolean;

  commissionRate: number;

  taxRate: number;
}
export interface StorageSettings {
  storageProvider: string;

  maxUploadSize: number;

  enableCloudStorage: boolean;
}

export interface IntegrationSettings {
  firebaseEnabled: boolean;

  googleOAuthEnabled: boolean;

  githubOAuthEnabled: boolean;

  calendlyEnabled: boolean;
}

export interface BrandingSettings {
  logo: string;

  favicon: string;

  primaryColor: string;

  secondaryColor: string;
}

export interface MaintenanceSettings {
  maintenanceMode: boolean;

  maintenanceMessage: string;
}

export interface AdminSettingsData {
  general: GeneralSettings;

  security: SecuritySettings;

  email: EmailSettings;

  notifications: NotificationSettings;

  payments: PaymentSettings;

  storage: StorageSettings;

  integrations: IntegrationSettings;

  branding: BrandingSettings;

  maintenance: MaintenanceSettings;
}