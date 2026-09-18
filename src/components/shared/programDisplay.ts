import type { StatusBadgeVariant } from "@/components/shared/StatusBadge";

// Structural shape shared by both `Program` declarations (types/program.ts and
// services/program.service.ts) so display helpers work with either.
export interface ProgramLike {
  title: string;
  status: string;
  thumbnail?: { url?: string; alt?: string } | null;
  finalPrice?: number;
  pricing?: {
    price?: number;
    discountPrice?: number;
    currency?: string;
    isFree?: boolean;
  } | null;
  duration?: number;
  durationUnit?: string;
  analytics?: {
    averageRating?: number;
    totalReviews?: number;
    enrollments?: number;
    revenue?: number;
  } | null;
  isFeatured?: boolean;
  settings?: { featured?: boolean; maxEnrollments?: number } | null;
}

export const PROGRAM_DUMMY_IMAGE =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900";

export function formatCurrency(amount: number, currency = "USD") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatStatus(status: string) {
  return status.charAt(0).toUpperCase() + status.slice(1);
}

export const programStatusVariant: Record<string, StatusBadgeVariant> = {
  published: "success",
  draft: "neutral",
  pending: "warning",
  rejected: "error",
  inactive: "warning",
  archived: "neutral",
};

export const statusVariant = (status: string): StatusBadgeVariant =>
  programStatusVariant[status] ?? "neutral";

export const programImage = (p: ProgramLike) => p.thumbnail?.url || PROGRAM_DUMMY_IMAGE;

export const programPrice = (p: ProgramLike) =>
  p.pricing?.isFree
    ? "Free"
    : formatCurrency(
        p.finalPrice ?? p.pricing?.discountPrice ?? p.pricing?.price ?? 0,
        p.pricing?.currency || "USD",
      );

export const programDuration = (p: ProgramLike) =>
  p.duration ? `${p.duration} ${p.durationUnit ?? ""}`.trim() : "—";

export const programStudents = (p: ProgramLike) => p.analytics?.enrollments ?? 0;
export const programRating = (p: ProgramLike) => p.analytics?.averageRating ?? 0;
export const programReviews = (p: ProgramLike) => p.analytics?.totalReviews ?? 0;
export const programIsFeatured = (p: ProgramLike) =>
  Boolean(p.isFeatured || p.settings?.featured);

export const programRevenue = (p: ProgramLike) =>
  p.analytics?.revenue ?? (p.finalPrice ?? 0) * programStudents(p);

export const programSeatsLeft = (p: ProgramLike) => {
  const max = p.settings?.maxEnrollments ?? 0;
  return max > 0 ? Math.max(max - programStudents(p), 0) : null;
};
