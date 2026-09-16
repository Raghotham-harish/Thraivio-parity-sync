
import type { Program } from "@/services/program.service";

import ProgramGridCard from "./ProgramGridCard";

interface ProgramsGridProps {
  items: Program[];

  onView: (program: Program) => void;
  onEdit: (program: Program) => void;
  onPublish: (program: Program) => void;
  onDelete: (program: Program) => void;
}

export default function ProgramsGrid({
  items,
  onView,
  onEdit,
  onPublish,
  onDelete,
}: ProgramsGridProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section
      aria-label="Programs grid"
      className="grid grid-cols-1 gap-5 md:grid-cols-2 2xl:grid-cols-3"
    >
      {items.map((program) => (
        <ProgramGridCard
          key={program.id}
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