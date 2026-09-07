import MentorGridCard from "./MentorGridCard";

import type { AdminMentor } from "@/types/admin-mentors";

interface MentorsGridProps {
  mentors: AdminMentor[];

  onView: (mentor: AdminMentor) => void;

  onApprove: (mentor: AdminMentor) => void;

  onReject: (mentor: AdminMentor) => void;

  onVerify: (mentor: AdminMentor) => void;

  onFeature: (mentor: AdminMentor) => void;

  onUnfeature: (mentor: AdminMentor) => void;
}

export default function MentorsGrid({
  mentors,
  onView,
  onApprove,
  onReject,
  onVerify,
  onFeature,
  onUnfeature
}: MentorsGridProps) {
  return (
    <section
      className="
        grid
        gap-6
        sm:grid-cols-1
        lg:grid-cols-2
        2xl:grid-cols-3
      "
    >
      {mentors.map((mentor) => (
        <MentorGridCard
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
    </section>
  );
}