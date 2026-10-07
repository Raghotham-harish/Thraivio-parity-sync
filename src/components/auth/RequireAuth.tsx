import type { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { dashboardPathFor, getAuthUser } from "@/lib/auth";
import type { UserRole } from "@/types/auth";

interface RequireAuthProps {
  role: UserRole;
  children: ReactNode;
}

/**
 * Dashboards were reachable without signing in. Signed-out visitors go to
 * /login (and come back here afterwards); signed-in users with a different
 * role go to their own dashboard. The API still enforces access; this only
 * keeps people out of screens that can't load for them.
 */
const RequireAuth = ({ role, children }: RequireAuthProps) => {
  const location = useLocation();
  const user = getAuthUser();

  if (!user) {
    const redirect = encodeURIComponent(location.pathname + location.search);
    return <Navigate to={`/login?redirect=${redirect}`} replace />;
  }

  if (user.role !== role) {
    return <Navigate to={dashboardPathFor(user.role)} replace />;
  }

  return <>{children}</>;
};

export default RequireAuth;
