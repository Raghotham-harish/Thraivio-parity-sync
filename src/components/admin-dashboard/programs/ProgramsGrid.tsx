import ProgramGridCard from "./ProgramGridCard";

import { mentors } from "@/data/mentors";

type Mentor = (typeof mentors)[number];

interface ProgramsGridProps {
  items: {
    mentor: Mentor;
    program: Mentor["programs"][number];
  }[];

  onView: (
    mentor: Mentor,
    program: Mentor["programs"][number]
  ) => void;

  onEdit: (
    mentor: Mentor,
    program: Mentor["programs"][number]
  ) => void;

  onPublish: (
    mentor: Mentor,
    program: Mentor["programs"][number]
  ) => void;

  onDelete: (
    mentor: Mentor,
    program: Mentor["programs"][number]
  ) => void;
}

export default function ProgramsGrid({
  items,
  onView,
  onEdit,
  onPublish,
  onDelete,
}: ProgramsGridProps) {
  return (
    <section className="grid gap-6 md:grid-cols-2 2xl:grid-cols-3">

      {items.map(({ mentor, program }) => (
        <ProgramGridCard
          key={`${mentor.id}-${program.title}`}
          mentor={mentor}
          program={program}
          onView={onView}
          onEdit={onEdit}
          onPublish={onPublish}
          onDelete={onDelete}
        />
      ))}

    </section>
  );
}