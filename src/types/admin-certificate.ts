export type CertificateCategory =
  | "Program"
  | "Session"
  | "Event";

export type CertificateStatus =
  | "pending"
  | "issued"
  | "revoked"
  | "expired";

export type VerificationStatus =
  | "verified"
  | "unverified";

export type CertificateView =
  | "grid"
  | "list";

export interface AdminCertificate {
  id: string;

  certificateNumber: string;

  credentialId: string;

  studentId: string;

  studentName: string;

  studentEmail: string;

  studentImage: string;

  mentorId: string;

  mentorName: string;

  mentorRole: string;

  mentorCompany: string;

  mentorImage: string;

  title: string;

  description: string;

  category: CertificateCategory;

  programId?: string;

  programTitle?: string;

  sessionId?: string;

  sessionTitle?: string;

  eventId?: string;

  eventTitle?: string;

  issueDate: string;

  completionDate: string;

  expiryDate?: string;

  status: CertificateStatus;

  verificationStatus: VerificationStatus;

  score?: string;

  grade?: string;

  duration?: string;

  skills: string[];

  qrCode: string;

  certificateUrl: string;

  verificationUrl: string;

  downloadCount: number;

  viewCount: number;

  issuedBy: string;

  lastDownloaded?: string;

  notes?: string;

  createdAt: string;

  updatedAt: string;
}

export interface CertificateStats {
  total: number;

  issued: number;

  pending: number;

  revoked: number;

  expired: number;

  verified: number;

  downloads: number;

  averageScore: number;
}

export interface CertificateFilterOption {
  label: string;

  value: string;
}

export interface CertificateFilters {
  search: string;

  status: string;

  category: string;

  mentor: string;

  student: string;

  verification: string;

  date: string;
}

export interface CertificateFormData {
  studentId: string;

  mentorId: string;

  title: string;

  description: string;

  category: CertificateCategory;

  completionDate: string;

  issueDate: string;

  expiryDate?: string;

  score?: string;

  grade?: string;

  duration?: string;

  skills: string[];

  notes?: string;

  verificationStatus: VerificationStatus;
}