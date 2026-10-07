import api from "@/lib/api";
import type { ApiResponse } from "@/services/program.service";

/** Public event shape returned by coaching-backend's EventMapper.toPublicResponse. */
export interface PublicEvent {
  id: string;
  mentorId: string;
  slug: string;
  title: string;
  shortDescription?: string;
  thumbnail?: { url?: string; alt?: string } | null;
  category?: string;
  type?: string;
  mode?: string;
  schedule?: { startDate?: string; endDate?: string; timezone?: string } | null;
  pricing?: { price?: number; discountPrice?: number; currency?: string; isFree?: boolean } | null;
}

const EVENTS_BASE_URL = "/api/v1/events";

/**
 * GET /api/v1/events/upcoming
 */
export const getUpcomingEvents = async (): Promise<ApiResponse<PublicEvent[]>> => {
  const response = await api.get<ApiResponse<PublicEvent[]>>(`${EVENTS_BASE_URL}/upcoming`);
  return response.data;
};
