import api from "@/lib/api";

// ======================================================
// COMMON API TYPES
// ======================================================

export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data: T;
}

// ======================================================
// PROGRAM TYPES
// ======================================================

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

// ======================================================
// PROGRAM RESPONSE
// ======================================================

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

  // Backend calculated fields
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

// ======================================================
// CREATE / UPDATE PAYLOADS
// ======================================================

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

// ======================================================
// PROGRAM QUERY
// ======================================================

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

// ======================================================
// BULK PROGRAM
// ======================================================

export interface BulkProgramPayload {
  programIds: string[];
}

// ======================================================
// ADMIN DASHBOARD
// ======================================================

export interface ProgramDashboardStats {
  totalPrograms: number;
  published: number;
  drafts: number;
  featured: number;
  archived: number;
}

// ======================================================
// ANALYTICS
// ======================================================

export interface UpdateProgramAnalyticsPayload {
  averageRating?: number;
  totalReviews?: number;
  views?: number;
  enrollments?: number;
}

// ======================================================
// HELPERS
// ======================================================

const PROGRAMS_BASE_URL = "/api/v1/programs";

const encodeProgramSlug = (slug: string): string => {
  return encodeURIComponent(slug.trim());
};

// ======================================================
// PUBLIC PROGRAM APIs
// ======================================================

/**
 * Get programs with search, filters,
 * sorting and pagination.
 *
 * GET /api/v1/programs
 */
export const getPrograms = async (
  query?: ProgramQuery
): Promise<ApiResponse<ProgramListResponse>> => {
  const response = await api.get<
    ApiResponse<ProgramListResponse>
  >(PROGRAMS_BASE_URL, {
    params: query,
  });

  return response.data;
};

/**
 * Get featured programs.
 *
 * GET /api/v1/programs/featured
 */
export const getFeaturedPrograms = async (): Promise<
  ApiResponse<Program[]>
> => {
  const response = await api.get<
    ApiResponse<Program[]>
  >(`${PROGRAMS_BASE_URL}/featured`);

  return response.data;
};

/**
 * Get published programs.
 *
 * GET /api/v1/programs/published
 */
export const getPublishedPrograms = async (): Promise<
  ApiResponse<Program[]>
> => {
  const response = await api.get<
    ApiResponse<Program[]>
  >(`${PROGRAMS_BASE_URL}/published`);

  return response.data;
};

/**
 * Get top-rated programs.
 *
 * GET /api/v1/programs/top-rated
 */
export const getTopRatedPrograms = async (
  limit = 10
): Promise<ApiResponse<Program[]>> => {
  const response = await api.get<
    ApiResponse<Program[]>
  >(`${PROGRAMS_BASE_URL}/top-rated`, {
    params: {
      limit,
    },
  });

  return response.data;
};

/**
 * Get most-viewed programs.
 *
 * GET /api/v1/programs/most-viewed
 */
export const getMostViewedPrograms = async (
  limit = 10
): Promise<ApiResponse<Program[]>> => {
  const response = await api.get<
    ApiResponse<Program[]>
  >(`${PROGRAMS_BASE_URL}/most-viewed`, {
    params: {
      limit,
    },
  });

  return response.data;
};

/**
 * Get newest programs.
 *
 * GET /api/v1/programs/newest
 */
export const getNewestPrograms = async (
  limit = 10
): Promise<ApiResponse<Program[]>> => {
  const response = await api.get<
    ApiResponse<Program[]>
  >(`${PROGRAMS_BASE_URL}/newest`, {
    params: {
      limit,
    },
  });

  return response.data;
};

/**
 * Get a public program by slug.
 *
 * GET /api/v1/programs/slug/:slug
 */
export const getProgramBySlug = async (
  slug: string
): Promise<ApiResponse<Program>> => {
  const encodedSlug = encodeProgramSlug(slug);

  const response = await api.get<
    ApiResponse<Program>
  >(
    `${PROGRAMS_BASE_URL}/slug/${encodedSlug}`
  );

  return response.data;
};

// ======================================================
// MENTOR PROGRAM APIs
// ======================================================

/**
 * Get logged-in mentor's programs.
 *
 * GET /api/v1/programs/me
 */
export const getMyPrograms = async (): Promise<
  ApiResponse<Program[]>
> => {
  const response = await api.get<
    ApiResponse<Program[]>
  >(`${PROGRAMS_BASE_URL}/me`);

  return response.data;
};

/**
 * Create a new program.
 *
 * POST /api/v1/programs
 *
 * mentorId is intentionally NOT sent.
 * Backend resolves the mentor from
 * the authenticated user.
 */
export const createProgram = async (
  data: CreateProgramPayload
): Promise<ApiResponse<Program>> => {
  const response = await api.post<
    ApiResponse<Program>
  >(
    PROGRAMS_BASE_URL,
    data
  );

  return response.data;
};

/**
 * Update a program.
 *
 * PATCH /api/v1/programs/:programId
 */
export const updateProgram = async (
  programId: string,
  data: UpdateProgramPayload
): Promise<ApiResponse<Program>> => {
  const response = await api.patch<
    ApiResponse<Program>
  >(
    `${PROGRAMS_BASE_URL}/${programId}`,
    data
  );

  return response.data;
};

/**
 * Delete a program.
 *
 * DELETE /api/v1/programs/:programId
 */
export const deleteProgram = async (
  programId: string
): Promise<ApiResponse<unknown>> => {
  const response = await api.delete<
    ApiResponse<unknown>
  >(
    `${PROGRAMS_BASE_URL}/${programId}`
  );

  return response.data;
};

/**
 * Publish a program.
 *
 * POST /api/v1/programs/:programId/publish
 */
export const publishProgram = async (
  programId: string
): Promise<ApiResponse<Program>> => {
  const response = await api.post<
    ApiResponse<Program>
  >(
    `${PROGRAMS_BASE_URL}/${programId}/publish`
  );

  return response.data;
};

/**
 * Unpublish a program.
 *
 * POST /api/v1/programs/:programId/unpublish
 */
export const unpublishProgram = async (
  programId: string
): Promise<ApiResponse<Program>> => {
  const response = await api.post<
    ApiResponse<Program>
  >(
    `${PROGRAMS_BASE_URL}/${programId}/unpublish`
  );

  return response.data;
};

/**
 * Feature a program.
 *
 * POST /api/v1/programs/:programId/feature
 */
export const featureProgram = async (
  programId: string
): Promise<ApiResponse<Program>> => {
  const response = await api.post<
    ApiResponse<Program>
  >(
    `${PROGRAMS_BASE_URL}/${programId}/feature`
  );

  return response.data;
};

/**
 * Remove a program from featured.
 *
 * POST /api/v1/programs/:programId/unfeature
 */
export const unfeatureProgram = async (
  programId: string
): Promise<ApiResponse<Program>> => {
  const response = await api.post<
    ApiResponse<Program>
  >(
    `${PROGRAMS_BASE_URL}/${programId}/unfeature`
  );

  return response.data;
};

/**
 * Activate a program.
 *
 * POST /api/v1/programs/:programId/activate
 */
export const activateProgram = async (
  programId: string
): Promise<ApiResponse<Program>> => {
  const response = await api.post<
    ApiResponse<Program>
  >(
    `${PROGRAMS_BASE_URL}/${programId}/activate`
  );

  return response.data;
};

/**
 * Deactivate a program.
 *
 * POST /api/v1/programs/:programId/deactivate
 */
export const deactivateProgram = async (
  programId: string
): Promise<ApiResponse<Program>> => {
  const response = await api.post<
    ApiResponse<Program>
  >(
    `${PROGRAMS_BASE_URL}/${programId}/deactivate`
  );

  return response.data;
};

/**
 * Archive a program.
 *
 * POST /api/v1/programs/:programId/archive
 */
export const archiveProgram = async (
  programId: string
): Promise<ApiResponse<Program>> => {
  const response = await api.post<
    ApiResponse<Program>
  >(
    `${PROGRAMS_BASE_URL}/${programId}/archive`
  );

  return response.data;
};

/**
 * Restore an archived program.
 *
 * POST /api/v1/programs/:programId/restore
 */
export const restoreProgram = async (
  programId: string
): Promise<ApiResponse<Program>> => {
  const response = await api.post<
    ApiResponse<Program>
  >(
    `${PROGRAMS_BASE_URL}/${programId}/restore`
  );

  return response.data;
};

// ======================================================
// BULK PROGRAM APIs
// ======================================================

/**
 * Delete multiple programs.
 *
 * DELETE /api/v1/programs/bulk
 */
export const deleteManyPrograms = async (
  programIds: string[]
): Promise<ApiResponse<unknown>> => {
  const response = await api.delete<
    ApiResponse<unknown>
  >(
    `${PROGRAMS_BASE_URL}/bulk`,
    {
      data: {
        programIds,
      },
    }
  );

  return response.data;
};

/**
 * Publish multiple programs.
 *
 * POST /api/v1/programs/bulk/publish
 */
export const publishManyPrograms = async (
  programIds: string[]
): Promise<ApiResponse<unknown>> => {
  const response = await api.post<
    ApiResponse<unknown>
  >(
    `${PROGRAMS_BASE_URL}/bulk/publish`,
    {
      programIds,
    }
  );

  return response.data;
};

/**
 * Archive multiple programs.
 *
 * POST /api/v1/programs/bulk/archive
 */
export const archiveManyPrograms = async (
  programIds: string[]
): Promise<ApiResponse<unknown>> => {
  const response = await api.post<
    ApiResponse<unknown>
  >(
    `${PROGRAMS_BASE_URL}/bulk/archive`,
    {
      programIds,
    }
  );

  return response.data;
};

/**
 * Feature multiple programs.
 *
 * POST /api/v1/programs/bulk/feature
 */
export const featureManyPrograms = async (
  programIds: string[]
): Promise<ApiResponse<unknown>> => {
  const response = await api.post<
    ApiResponse<unknown>
  >(
    `${PROGRAMS_BASE_URL}/bulk/feature`,
    {
      programIds,
    }
  );

  return response.data;
};

// ======================================================
// ANALYTICS APIs
// ======================================================

/**
 * Increment program views.
 *
 * PATCH /api/v1/programs/:programId/views
 */
export const incrementProgramViews = async (
  programId: string
): Promise<ApiResponse<unknown>> => {
  const response = await api.patch<
    ApiResponse<unknown>
  >(
    `${PROGRAMS_BASE_URL}/${programId}/views`
  );

  return response.data;
};

/**
 * Increment program enrollments.
 *
 * PATCH /api/v1/programs/:programId/enrollments
 *
 * IMPORTANT:
 * This is only an analytics counter.
 * It is NOT the actual enrollment/purchase API.
 */
export const incrementProgramEnrollments =
  async (
    programId: string
  ): Promise<ApiResponse<unknown>> => {
    const response = await api.patch<
      ApiResponse<unknown>
    >(
      `${PROGRAMS_BASE_URL}/${programId}/enrollments`
    );

    return response.data;
  };

/**
 * Update program analytics.
 *
 * PATCH /api/v1/programs/:programId/analytics
 */
export const updateProgramAnalytics = async (
  programId: string,
  data: UpdateProgramAnalyticsPayload
): Promise<ApiResponse<Program>> => {
  const response = await api.patch<
    ApiResponse<Program>
  >(
    `${PROGRAMS_BASE_URL}/${programId}/analytics`,
    data
  );

  return response.data;
};

// ======================================================
// ADMIN PROGRAM APIs
// ======================================================

/**
 * Get program dashboard statistics.
 *
 * GET /api/v1/programs/dashboard
 */
export const getProgramDashboardStats =
  async (): Promise<
    ApiResponse<ProgramDashboardStats>
  > => {
    const response =
      await api.get<
        ApiResponse<ProgramDashboardStats>
      >(
        `${PROGRAMS_BASE_URL}/dashboard`
      );

    return response.data;
  };

/**
 * Get draft programs.
 *
 * GET /api/v1/programs/drafts
 */
export const getDraftPrograms = async (): Promise<
  ApiResponse<Program[]>
> => {
  const response = await api.get<
    ApiResponse<Program[]>
  >(
    `${PROGRAMS_BASE_URL}/drafts`
  );

  return response.data;
};

/**
 * Get archived programs.
 *
 * GET /api/v1/programs/archived
 */
export const getArchivedPrograms = async (): Promise<
  ApiResponse<Program[]>
> => {
  const response = await api.get<
    ApiResponse<Program[]>
  >(
    `${PROGRAMS_BASE_URL}/archived`
  );

  return response.data;
};