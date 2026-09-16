import MentorListRow from "./MentorListRow";

import type { AdminMentor } from "@/types/admin-mentors";

interface MentorsTableProps {
  mentors: AdminMentor[];

  onView: (mentor: AdminMentor) => void;

  onApprove: (mentor: AdminMentor) => void;

  onReject: (mentor: AdminMentor) => void;

  onVerify: (mentor: AdminMentor) => void;

  onFeature: (mentor: AdminMentor) => void;

  onUnfeature: (mentor: AdminMentor) => void;
}

export default function MentorsTable({
  mentors,
  onView,
  onApprove,
  onReject,
  onVerify,
  onFeature,
  onUnfeature
}: MentorsTableProps) {
  return (
    <section className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">

      {/* Header */}

      <div className="grid grid-cols-[2.5fr_0.8fr_0.9fr_0.9fr_0.9fr_1fr_1.3fr] gap-6 border-b border-border bg-secondary px-6 py-5 text-sm font-semibold text-muted-foreground">

        <span>Mentor</span>

        <span>Experience</span>

        <span>Sessions</span>

        <span>Programs</span>

        <span>Earnings</span>

        <span>Status</span>

        <span className="text-right">
          Actions
        </span>

      </div>

      {/* Rows */}

      <div>

        {mentors.map((mentor) => (
          <MentorListRow
            key={mentor.id}
            mentor={mentor}
            onView={onView}
            onApprove={onApprove}
            onReject={onReject}
            onVerify={onVerify}
            onFeature={onFeature}
            onUnfeature={onUnfeature}
          />
        ))}

      </div>

    </section>
  );
}