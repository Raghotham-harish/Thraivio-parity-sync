import type { AdminSession } from "@/types/admin-session";

import SessionGridCard from "./SessionGridCard";

interface SessionsGridProps {
  sessions: AdminSession[];

  onView: (session: AdminSession) => void;

  onEdit: (session: AdminSession) => void;

  onComplete: (
    session: AdminSession
  ) => void;

  onCancel: (
    session: AdminSession
  ) => void;

  onDelete: (
    session: AdminSession
  ) => void;
}

const SessionsGrid = ({
  sessions,
  onView,
  onEdit,
  onComplete,
  onCancel,
  onDelete,
}: SessionsGridProps) => {
  if (sessions.length === 0) {
    return null;
  }

  return (
    <div
      className="
        grid

        gap-6

        md:grid-cols-2

        2xl:grid-cols-3
      "
    >
      {sessions.map((session) => (
        <SessionGridCard
          key={session.id}
          session={session}
          onView={onView}
          onEdit={onEdit}
          onComplete={onComplete}
          onCancel={onCancel}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default SessionsGrid;