export type ProgramLevel =
  | "beginner"
  | "intermediate"
  | "advanced";

export type ProgramDurationUnit =
  | "hours"
  | "days"
  | "weeks"
  | "months";

export type ProgramStatus =
  | "draft"
  | "pending"
  | "published"
  | "rejected"
  | "inactive"
  | "archived";

export interface ProgramImage {
  url: string;
  publicId: string;
  alt: string;
}

export interface ProgramPricing {
  price: number;
  discountPrice: number;
  currency: string;
  isFree: boolean;
  taxIncluded: boolean;
}

export interface ProgramBenefit {
  title: string;
  description: string;
  icon: string;
  order: number;
}

export interface ProgramRequirement {
  title: string;
  description: string;
  mandatory: boolean;
  order: number;
}

export interface ProgramLearningOutcome {
  title: string;
  description: string;
  order: number;
}

export interface ProgramLesson {
  title: string;
  description: string;
  duration: number;
  videoUrl: string;
  resourceUrl: string;
  preview: boolean;
  order: number;
  isPublished: boolean;
}

export interface ProgramSection {
  title: string;
  description: string;
  lessons: ProgramLesson[];
  order: number;
}

export interface ProgramCurriculum {
  sections: ProgramSection[];
}

export interface ProgramFAQ {
  question: string;
  answer: string;
  order: number;
}

export interface ProgramAnalytics {
  averageRating: number;
  totalReviews: number;
  views: number;
  enrollments: number;
  revenue?: number;
}

export interface ProgramSettings {
  featured?: boolean;
  allowEnrollment?: boolean;
  maxEnrollments?: number;
  [key: string]: unknown;
}

export interface ProgramSEO {
  metaTitle?: string;
  metaDescription?: string;
  [key: string]: unknown;
}

export interface Program {
  id: string;
  mentorId: string;

  slug: string;

  title: string;
  shortDescription: string;
  description: string;

  thumbnail: ProgramImage;
  gallery: ProgramImage[];

  category: string;
  subCategory: string;

  level: ProgramLevel;

  languages: string[];
  tags: string[];

  duration: number;
  durationUnit: ProgramDurationUnit;

  pricing: ProgramPricing;

  benefits: ProgramBenefit[];
  requirements: ProgramRequirement[];
  learningOutcomes: ProgramLearningOutcome[];

  curriculum: ProgramCurriculum;

  faqs: ProgramFAQ[];

  analytics: ProgramAnalytics;
  settings: ProgramSettings;
  seo: ProgramSEO;

  status: ProgramStatus;

  publishedAt: string | null;
  featuredAt: string | null;
  lastUpdatedBy: string | null;

  createdAt: string;
  updatedAt: string;

  finalPrice: number;
  isPublished: boolean;
  isDraft: boolean;
  isArchived: boolean;
  isFeatured: boolean;
  isFree: boolean;
  hasDiscount: boolean;
  canEnroll: boolean;
  completionPercentage: number;
}

export interface CreateProgramPayload {
  title: string;
  shortDescription: string;
  description: string;

  thumbnail: ProgramImage;
  gallery: ProgramImage[];

  category: string;
  subCategory: string;

  level: ProgramLevel;

  languages: string[];
  tags: string[];

  duration: number;
  durationUnit: ProgramDurationUnit;

  pricing: ProgramPricing;

  benefits: ProgramBenefit[];
  requirements: ProgramRequirement[];
  learningOutcomes: ProgramLearningOutcome[];

  curriculum: ProgramCurriculum;

  faqs: ProgramFAQ[];
}

export type UpdateProgramPayload =
  Partial<CreateProgramPayload>;

export interface ProgramQuery {
  page?: number;
  limit?: number;

  search?: string;
  category?: string;
  level?: ProgramLevel;
  status?: ProgramStatus;

  sortBy?:
    | "createdAt"
    | "updatedAt"
    | "title"
    | "publishedAt"
    | "featuredAt";

  sortOrder?: "asc" | "desc";
}

export interface ProgramPagination {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface ProgramListResponse {
  programs: Program[];
  pagination: ProgramPagination;
}

export interface BulkProgramPayload {
  programIds: string[];
}

export interface ProgramDashboardStats {
  totalPrograms: number;
  published: number;
  drafts: number;
  featured: number;
  archived: number;
}

export interface UpdateProgramAnalyticsPayload {
  averageRating?: number;
  totalReviews?: number;
  views?: number;
  enrollments?: number;
}