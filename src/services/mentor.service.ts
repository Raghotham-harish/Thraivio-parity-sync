import api from "@/lib/api";

/* =========================================================
   Common Types
========================================================= */

export interface MentorPricing {
  introCall: number;
  mentorshipCall: number;
  mockInterview: number;
  monthlyProgram: number;
}

export interface MentorSessionDuration {
  introCall: number;
  mentorshipCall: number;
  mockInterview: number;
  monthlyProgram: number;
}

export interface MentorApiResponse {
  id: string;
  userId?: string;

  // User model fields
  name: string;
  avatar?: string | null;
  role: string;
  location: string;

  // Mentor model fields
  slug: string;
  headline: string;
  about: string;
  company: string;

  experience: number;
  companiesWorked?: string[];

  expertise: string[];
  skills: string[];
  languages: string[];

  achievements: unknown[];
  certifications: unknown[];

  pricing: MentorPricing;
  sessionDuration: MentorSessionDuration;

  availability: unknown[];
  videos: unknown[];
  faqs: unknown[];

  socialLinks?: unknown;
  settings?: unknown;
  analytics?: AnalyticsPayload;

  averageRating: number;
  totalReviews: number;
  totalStudents: number;
  totalSessions?: number;

  profileViews: number;

  featured: boolean;

  verificationStatus?: string;
  status?: string;
  acceptingBookings?: boolean;

  publicProfileUrl: string;

  lastActiveAt?: string;
  publishedAt?: string;
  approvedAt?: string;
  approvedBy?: string;
  rejectionReason?: string;

  createdAt?: string;
  updatedAt?: string;
}

export interface MentorPagination {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface GetMentorsResponse {
  success: boolean;
  data: {
    mentors: MentorApiResponse[];
    pagination: MentorPagination;
  };
}

export interface SingleMentorResponse {
  success: boolean;
  message?: string;
  data: MentorApiResponse;
}

export interface MentorListResponse {
  success: boolean;
  data: MentorApiResponse[];
}

export interface MentorMessageResponse {
  success: boolean;
  message: string;
  data?: MentorApiResponse;
}

export interface MentorDashboardStats {
  totalMentors: number;
  publishedMentors: number;
  pendingVerification: number;
  verifiedMentors: number;
  featuredMentors: number;
  activeMentors: number;
  blockedMentors: number;
  totalProfileViews: number;
  totalStudents: number;
  totalSessions: number;
  totalReviews: number;
  averageRating: number;
}

export interface MentorDashboardStatsResponse {
  success: boolean;
  data: MentorDashboardStats;
}

/* =========================================================
   Query Types
========================================================= */

export interface MentorQuery {
  search?: string;
  page?: number;
  limit?: number;

  sortBy?:
    | "createdAt"
    | "updatedAt"
    | "averageRating"
    | "profileViews"
    | "experience";

  sortOrder?: "asc" | "desc";

  status?: string;
  verificationStatus?: string;
  featured?: boolean;
  acceptingBookings?: boolean;

  skill?: string;
  expertise?: string;
  company?: string;
  language?: string;
  location?: string;
}

/* =========================================================
   Payload Types
========================================================= */

export type CreateMentorPayload = {
  userId: string;
  slug: string;
  headline: string;
  about: string;
  company: string;
  experience: number;
  companiesWorked: string[];
  expertise: string[];
  skills: string[];
  languages: string[];

  pricing: unknown;
  sessionDuration: unknown;

  socialLinks?: unknown;
  settings?: unknown;
  analytics?: unknown;

  featured?: boolean;
  acceptingBookings?: boolean;
};

export type UpdateMentorPayload =
  Partial<CreateMentorPayload>;

export type UpdateProfilePayload = {
  slug?: string;
  headline?: string;
  about?: string;
  company?: string;
  experience?: number;
  companiesWorked?: string[];
  expertise?: string[];
  skills?: string[];
  languages?: string[];
};

export type UpdatePricingPayload = {
  pricing: unknown;
  sessionDuration: unknown;
};

export type UpdateAvailabilityPayload = {
  availability: unknown[];
};

export type AchievementPayload =
  Record<string, unknown>;

export type CertificationPayload =
  Record<string, unknown>;

export type VideoPayload =
  Record<string, unknown>;

export type FAQPayload =
  Record<string, unknown>;

export type AnalyticsPayload = {
  totalStudents?: number;
  totalSessions?: number;
  totalReviews?: number;
  averageRating?: number;
  profileViews?: number;
};

export type RejectMentorPayload = {
  reason: string;
};

/* =========================================================
   PUBLIC MENTOR APIs
========================================================= */

/**
 * GET /api/v1/mentors/
 */
export const getMentors = async (
  query?: MentorQuery
): Promise<GetMentorsResponse> => {
  const response =
    await api.get<GetMentorsResponse>(
      "/api/v1/mentors/",
      {
        params: query,
      }
    );

  return response.data;
};

/**
 * GET /api/v1/mentors/top-rated
 */
export const getTopRatedMentors = async (
  limit = 10
): Promise<MentorListResponse> => {
  const response =
    await api.get<MentorListResponse>(
      "/api/v1/mentors/top-rated",
      {
        params: { limit },
      }
    );

  return response.data;
};

/**
 * GET /api/v1/mentors/most-viewed
 */
export const getMostViewedMentors = async (
  limit = 10
): Promise<MentorListResponse> => {
  const response =
    await api.get<MentorListResponse>(
      "/api/v1/mentors/most-viewed",
      {
        params: { limit },
      }
    );

  return response.data;
};

/**
 * GET /api/v1/mentors/newest
 */
export const getNewestMentors = async (
  limit = 10
): Promise<MentorListResponse> => {
  const response =
    await api.get<MentorListResponse>(
      "/api/v1/mentors/newest",
      {
        params: { limit },
      }
    );

  return response.data;
};

/**
 * GET /api/v1/mentors/slug/:slug
 */
export const getMentorBySlug = async (
  slug: string
): Promise<SingleMentorResponse> => {
  const response =
    await api.get<SingleMentorResponse>(
      `/api/v1/mentors/slug/${slug}`
    );

  return response.data;
};

/**
 * GET /api/v1/mentors/:mentorId
 */
export const getMentorById = async (
  mentorId: string
): Promise<SingleMentorResponse> => {
  const response =
    await api.get<SingleMentorResponse>(
      `/api/v1/mentors/${mentorId}`
    );

  return response.data;
};

/**
 * PATCH /api/v1/mentors/:mentorId/profile-view
 */
export const incrementMentorProfileView =
  async (
    mentorId: string
  ): Promise<MentorMessageResponse> => {
    const response =
      await api.patch<MentorMessageResponse>(
        `/api/v1/mentors/${mentorId}/profile-view`
      );

    return response.data;
  };

/* =========================================================
   MENTOR PROFILE APIs
========================================================= */

/**
 * POST /api/v1/mentors/
 */
export const createMentor = async (
  payload: CreateMentorPayload
): Promise<SingleMentorResponse> => {
  const response =
    await api.post<SingleMentorResponse>(
      "/api/v1/mentors/",
      payload
    );

  return response.data;
};

/**
 * GET /api/v1/mentors/user/:userId
 */
export const getMentorByUserId = async (
  userId: string
): Promise<SingleMentorResponse> => {
  const response =
    await api.get<SingleMentorResponse>(
      `/api/v1/mentors/user/${userId}`
    );

  return response.data;
};

/**
 * PATCH /api/v1/mentors/:mentorId
 */
export const updateMentor = async (
  mentorId: string,
  payload: UpdateMentorPayload
): Promise<SingleMentorResponse> => {
  const response =
    await api.patch<SingleMentorResponse>(
      `/api/v1/mentors/${mentorId}`,
      payload
    );

  return response.data;
};

/**
 * DELETE /api/v1/mentors/:mentorId
 */
export const deleteMentor = async (
  mentorId: string
): Promise<MentorMessageResponse> => {
  const response =
    await api.delete<MentorMessageResponse>(
      `/api/v1/mentors/${mentorId}`
    );

  return response.data;
};

/**
 * PATCH /api/v1/mentors/:mentorId/last-active
 */
export const updateMentorLastActive =
  async (
    mentorId: string
  ): Promise<MentorMessageResponse> => {
    const response =
      await api.patch<MentorMessageResponse>(
        `/api/v1/mentors/${mentorId}/last-active`
      );

    return response.data;
  };

/* =========================================================
   AVAILABILITY
========================================================= */

/**
 * PATCH /api/v1/mentors/:mentorId/availability
 */
export const updateMentorAvailability =
  async (
    mentorId: string,
    payload: UpdateAvailabilityPayload
  ): Promise<SingleMentorResponse> => {
    const response =
      await api.patch<SingleMentorResponse>(
        `/api/v1/mentors/${mentorId}/availability`,
        payload
      );

    return response.data;
  };

/* =========================================================
   ACHIEVEMENTS
========================================================= */

/**
 * POST /api/v1/mentors/:mentorId/achievements
 */
export const addMentorAchievement = async (
  mentorId: string,
  payload: AchievementPayload
): Promise<SingleMentorResponse> => {
  const response =
    await api.post<SingleMentorResponse>(
      `/api/v1/mentors/${mentorId}/achievements`,
      payload
    );

  return response.data;
};

/**
 * PATCH /api/v1/mentors/:mentorId/achievements/:achievementId
 */
export const updateMentorAchievement =
  async (
    mentorId: string,
    achievementId: string,
    payload: AchievementPayload
  ): Promise<SingleMentorResponse> => {
    const response =
      await api.patch<SingleMentorResponse>(
        `/api/v1/mentors/${mentorId}/achievements/${achievementId}`,
        payload
      );

    return response.data;
  };

/**
 * DELETE /api/v1/mentors/:mentorId/achievements/:achievementId
 */
export const deleteMentorAchievement =
  async (
    mentorId: string,
    achievementId: string
  ): Promise<SingleMentorResponse> => {
    const response =
      await api.delete<SingleMentorResponse>(
        `/api/v1/mentors/${mentorId}/achievements/${achievementId}`
      );

    return response.data;
  };

/* =========================================================
   CERTIFICATIONS
========================================================= */

/**
 * POST /api/v1/mentors/:mentorId/certifications
 */
export const addMentorCertification =
  async (
    mentorId: string,
    payload: CertificationPayload
  ): Promise<SingleMentorResponse> => {
    const response =
      await api.post<SingleMentorResponse>(
        `/api/v1/mentors/${mentorId}/certifications`,
        payload
      );

    return response.data;
  };

/**
 * PATCH /api/v1/mentors/:mentorId/certifications/:certificationId
 */
export const updateMentorCertification =
  async (
    mentorId: string,
    certificationId: string,
    payload: CertificationPayload
  ): Promise<SingleMentorResponse> => {
    const response =
      await api.patch<SingleMentorResponse>(
        `/api/v1/mentors/${mentorId}/certifications/${certificationId}`,
        payload
      );

    return response.data;
  };

/**
 * DELETE /api/v1/mentors/:mentorId/certifications/:certificationId
 */
export const deleteMentorCertification =
  async (
    mentorId: string,
    certificationId: string
  ): Promise<SingleMentorResponse> => {
    const response =
      await api.delete<SingleMentorResponse>(
        `/api/v1/mentors/${mentorId}/certifications/${certificationId}`
      );

    return response.data;
  };

/* =========================================================
   VIDEOS
========================================================= */

/**
 * POST /api/v1/mentors/:mentorId/videos
 */
export const addMentorVideo = async (
  mentorId: string,
  payload: VideoPayload
): Promise<SingleMentorResponse> => {
  const response =
    await api.post<SingleMentorResponse>(
      `/api/v1/mentors/${mentorId}/videos`,
      payload
    );

  return response.data;
};

/**
 * PATCH /api/v1/mentors/:mentorId/videos/:videoId
 */
export const updateMentorVideo = async (
  mentorId: string,
  videoId: string,
  payload: VideoPayload
): Promise<SingleMentorResponse> => {
  const response =
    await api.patch<SingleMentorResponse>(
      `/api/v1/mentors/${mentorId}/videos/${videoId}`,
      payload
    );

  return response.data;
};

/**
 * DELETE /api/v1/mentors/:mentorId/videos/:videoId
 */
export const deleteMentorVideo = async (
  mentorId: string,
  videoId: string
): Promise<SingleMentorResponse> => {
  const response =
    await api.delete<SingleMentorResponse>(
      `/api/v1/mentors/${mentorId}/videos/${videoId}`
    );

  return response.data;
};

/* =========================================================
   FAQs
========================================================= */

/**
 * POST /api/v1/mentors/:mentorId/faqs
 */
export const addMentorFAQ = async (
  mentorId: string,
  payload: FAQPayload
): Promise<SingleMentorResponse> => {
  const response =
    await api.post<SingleMentorResponse>(
      `/api/v1/mentors/${mentorId}/faqs`,
      payload
    );

  return response.data;
};

/**
 * PATCH /api/v1/mentors/:mentorId/faqs/:faqId
 */
export const updateMentorFAQ = async (
  mentorId: string,
  faqId: string,
  payload: FAQPayload
): Promise<SingleMentorResponse> => {
  const response =
    await api.patch<SingleMentorResponse>(
      `/api/v1/mentors/${mentorId}/faqs/${faqId}`,
      payload
    );

  return response.data;
};

/**
 * DELETE /api/v1/mentors/:mentorId/faqs/:faqId
 */
export const deleteMentorFAQ = async (
  mentorId: string,
  faqId: string
): Promise<SingleMentorResponse> => {
  const response =
    await api.delete<SingleMentorResponse>(
      `/api/v1/mentors/${mentorId}/faqs/${faqId}`
    );

  return response.data;
};

/* =========================================================
   PUBLISH / UNPUBLISH
========================================================= */

/**
 * PATCH /api/v1/mentors/:mentorId/publish
 */
export const publishMentor = async (
  mentorId: string
): Promise<SingleMentorResponse> => {
  const response =
    await api.patch<SingleMentorResponse>(
      `/api/v1/mentors/${mentorId}/publish`
    );

  return response.data;
};

/**
 * PATCH /api/v1/mentors/:mentorId/unpublish
 */
export const unpublishMentor = async (
  mentorId: string
): Promise<SingleMentorResponse> => {
  const response =
    await api.patch<SingleMentorResponse>(
      `/api/v1/mentors/${mentorId}/unpublish`
    );

  return response.data;
};

/* =========================================================
   MENTOR DASHBOARD
========================================================= */

/**
 * GET /api/v1/mentors/dashboard/stats
 */
export const getMentorDashboardStats =
  async (): Promise<MentorDashboardStatsResponse> => {
    const response =
      await api.get<MentorDashboardStatsResponse>(
        "/api/v1/mentors/dashboard/stats"
      );

    return response.data;
  };

/**
 * PATCH /api/v1/mentors/:mentorId/analytics
 */
export const updateMentorAnalytics =
  async (
    mentorId: string,
    payload: AnalyticsPayload
  ): Promise<SingleMentorResponse> => {
    const response =
      await api.patch<SingleMentorResponse>(
        `/api/v1/mentors/${mentorId}/analytics`,
        payload
      );

    return response.data;
  };

/* =========================================================
   ADMIN — VERIFICATION
========================================================= */

/**
 * PATCH /api/v1/mentors/:mentorId/verify
 */
export const verifyMentor = async (
  mentorId: string
): Promise<SingleMentorResponse> => {
  const response =
    await api.patch<SingleMentorResponse>(
      `/api/v1/mentors/${mentorId}/verify`
    );

  return response.data;
};

/**
 * PATCH /api/v1/mentors/:mentorId/reject
 */
export const rejectMentor = async (
  mentorId: string,
  payload: RejectMentorPayload
): Promise<SingleMentorResponse> => {
  const response =
    await api.patch<SingleMentorResponse>(
      `/api/v1/mentors/${mentorId}/reject`,
      payload
    );

  return response.data;
};

/* =========================================================
   ADMIN — FEATURE
========================================================= */

/**
 * PATCH /api/v1/mentors/:mentorId/feature
 */
export const featureMentor = async (
  mentorId: string
): Promise<SingleMentorResponse> => {
  const response =
    await api.patch<SingleMentorResponse>(
      `/api/v1/mentors/${mentorId}/feature`
    );

  return response.data;
};

/**
 * PATCH /api/v1/mentors/:mentorId/unfeature
 */
export const unfeatureMentor = async (
  mentorId: string
): Promise<SingleMentorResponse> => {
  const response =
    await api.patch<SingleMentorResponse>(
      `/api/v1/mentors/${mentorId}/unfeature`
    );

  return response.data;
};

/* =========================================================
   ADMIN — BOOKINGS ENABLE / DISABLE
========================================================= */

/**
 * PATCH /api/v1/mentors/:mentorId/bookings/enable
 */
export const enableMentorBookings = async (
  mentorId: string
): Promise<SingleMentorResponse> => {
  const response =
    await api.patch<SingleMentorResponse>(
      `/api/v1/mentors/${mentorId}/bookings/enable`
    );

  return response.data;
};

/**
 * PATCH /api/v1/mentors/:mentorId/bookings/disable
 */
export const disableMentorBookings = async (
  mentorId: string
): Promise<SingleMentorResponse> => {
  const response =
    await api.patch<SingleMentorResponse>(
      `/api/v1/mentors/${mentorId}/bookings/disable`
    );

  return response.data;
};

/* =========================================================
   ADMIN — STATUS
========================================================= */

/**
 * PATCH /api/v1/mentors/:mentorId/activate
 */
export const activateMentor = async (
  mentorId: string
): Promise<SingleMentorResponse> => {
  const response =
    await api.patch<SingleMentorResponse>(
      `/api/v1/mentors/${mentorId}/activate`
    );

  return response.data;
};

/**
 * PATCH /api/v1/mentors/:mentorId/deactivate
 */
export const deactivateMentor = async (
  mentorId: string
): Promise<SingleMentorResponse> => {
  const response =
    await api.patch<SingleMentorResponse>(
      `/api/v1/mentors/${mentorId}/deactivate`
    );

  return response.data;
};

/**
 * PATCH /api/v1/mentors/:mentorId/block
 */
export const blockMentor = async (
  mentorId: string
): Promise<SingleMentorResponse> => {
  const response =
    await api.patch<SingleMentorResponse>(
      `/api/v1/mentors/${mentorId}/block`
    );

  return response.data;
};

/**
 * PATCH /api/v1/mentors/:mentorId/unblock
 */
export const unblockMentor = async (
  mentorId: string
): Promise<SingleMentorResponse> => {
  const response =
    await api.patch<SingleMentorResponse>(
      `/api/v1/mentors/${mentorId}/unblock`
    );

  return response.data;
};

/* =========================================================
   ADMIN — SOFT DELETE / RESTORE
========================================================= */

/**
 * PATCH /api/v1/mentors/:mentorId/soft-delete
 */
export const softDeleteMentor = async (
  mentorId: string
): Promise<SingleMentorResponse> => {
  const response =
    await api.patch<SingleMentorResponse>(
      `/api/v1/mentors/${mentorId}/soft-delete`
    );

  return response.data;
};

/**
 * PATCH /api/v1/mentors/:mentorId/restore
 */
export const restoreMentor = async (
  mentorId: string
): Promise<SingleMentorResponse> => {
  const response =
    await api.patch<SingleMentorResponse>(
      `/api/v1/mentors/${mentorId}/restore`
    );

  return response.data;
};