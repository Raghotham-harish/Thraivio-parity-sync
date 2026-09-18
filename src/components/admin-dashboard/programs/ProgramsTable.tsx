import ProgramGridCard from "./ProgramGridCard";
import ProgramListRow from "./ProgramListRow";

import { mentors } from "@/data/mentors";

type Mentor = (typeof mentors)[number];

interface ProgramsTableProps {
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

export default function ProgramsTable({
  items,
  onView,
  onEdit,
  onPublish,
  onDelete,
}: ProgramsTableProps) {
  return (
    <section className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">

      <div className="grid gap-3 p-4 lg:hidden">
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
      </div>

      <div className="hidden overflow-x-auto lg:block">

        <table className="min-w-full">

          <thead className="bg-secondary">

            <tr className="border-b border-border text-left">

              <th className="px-6 py-4 text-sm font-semibold text-muted-foreground">

                Program

              </th>

              <th className="px-6 py-4 text-sm font-semibold text-muted-foreground">

                Mentor

              </th>

              <th className="px-6 py-4 text-sm font-semibold text-muted-foreground">

                Duration

              </th>

              <th className="px-6 py-4 text-sm font-semibold text-muted-foreground">

                Students

              </th>

              <th className="px-6 py-4 text-sm font-semibold text-muted-foreground">

                Level

              </th>

              <th className="px-6 py-4 text-sm font-semibold text-muted-foreground">

                Rating

              </th>

              <th className="px-6 py-4 text-sm font-semibold text-muted-foreground">

                Price

              </th>

              <th className="px-6 py-4 text-sm font-semibold text-muted-foreground">

                Revenue

              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold text-muted-foreground">

                Actions

              </th>

            </tr>

          </thead>

          <tbody>

            {items.map(({ mentor, program }) => (

              <ProgramListRow
                key={`${mentor.id}-${program.title}`}
                mentor={mentor}
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