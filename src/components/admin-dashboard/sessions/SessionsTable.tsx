import type { AdminSession } from "@/types/admin-session";

import SessionListRow from "./SessionListRow";

interface SessionsTableProps {
  sessions: AdminSession[];

  onView: (session: AdminSession) => void;

  onEdit: (session: AdminSession) => void;

  onComplete: (session: AdminSession) => void;

  onCancel: (session: AdminSession) => void;

  onDelete: (session: AdminSession) => void;
}

const SessionsTable = ({
  sessions,
  onView,
  onEdit,
  onComplete,
  onCancel,
  onDelete,
}: SessionsTableProps) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="border-b border-border bg-secondary">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground">
                Session
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground">
                Mentor
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground">
                Student
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground">
                Schedule
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground">
                Platform
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground">
                Payment
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground">
                Attendance
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground">
                Status
              </th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-muted-foreground">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((session) => (
              <SessionListRow
                key={session.id}
                session={session}
                onView={onView}
                onEdit={onEdit}
                onComplete={onComplete}
                onCancel={onCancel}
                onDelete={onDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SessionsTable;
