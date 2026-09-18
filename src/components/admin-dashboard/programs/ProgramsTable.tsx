import type { Program } from "@/services/program.service";

import ProgramGridCard from "./ProgramGridCard";
import ProgramListRow from "./ProgramListRow";

interface ProgramsTableProps {
  items: Program[];
  onView: (program: Program) => void;
  onEdit: (program: Program) => void;
  onPublish: (program: Program) => void;
  onDelete: (program: Program) => void;
}

const columns = ["Program", "Status", "Level", "Students", "Rating", "Price"];

export default function ProgramsTable({
  items,
  onView,
  onEdit,
  onPublish,
  onDelete,
}: ProgramsTableProps) {
  return (
    <section className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      {/* Mobile: stacked cards */}
      <div className="grid gap-3 p-4 lg:hidden">
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
      </div>

      {/* Desktop: table */}
      <div className="hidden overflow-x-auto lg:block">
        <table className="min-w-full">
          <thead className="bg-secondary">
            <tr className="border-b border-border text-left">
              {columns.map((column) => (
                <th
                  key={column}
                  className="px-6 py-4 text-sm font-semibold text-muted-foreground"
                >
                  {column}
                </th>
              ))}
              <th className="px-6 py-4 text-center text-sm font-semibold text-muted-foreground">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {items.map((program) => (
              <ProgramListRow
                key={program.id}
                program={program}
                onView={onView}
                onEdit={onEdit}
                onPublish={onPublish}
                onDelete={onDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
