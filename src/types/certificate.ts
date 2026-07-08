export interface Certificate {
  id: string;

  mentorId: number;

  mentorName: string;

  mentorRole: string;

  mentorCompany: string;

  mentorImage: string;

  title: string;

  category:
    | "Program"
    | "Event"
    | "Session";

  issueDate: string;

  completionDate: string;

  certificateNumber: string;

  credentialId: string;

  skills: string[];

  status:
    | "issued"
    | "pending"
    | "expired";

  certificateUrl: string;

  verificationUrl?: string;

  score?: string;
}