import type { AuthUser } from "@/services/auth.service";
import type { UserRole } from "@/types/auth";

/** The logged-in user saved by the login form, or null when signed out. */
export function getAuthUser(): AuthUser | null {
  if (!localStorage.getItem("accessToken")) return null;

  try {
    const raw = localStorage.getItem("authUser");
    return raw ? (JSON.parse(raw) as AuthUser) : null;
  } catch {
    return null;
  }
}

export function dashboardPathFor(role: UserRole | string | undefined): string {
  if (role === "admin") return "/admin";
  if (role === "mentor") return "/mentor-dashboard";
  return "/user-dashboard";
}

/**
 * Only allow in-app redirects (e.g. "/mentor-dashboard/bookings") so a
 * crafted ?redirect= can't send people to another site after login.
 */
export function safeRedirect(path: string | null): string | null {
  if (!path || !path.startsWith("/") || path.startsWith("//")) return null;
  return path;
}
