import ProgramListRow from "./ProgramListRow";

import { mentors } from "@/data/mentors";

type Mentor = (typeof mentors)[number];

type Program = Mentor["programs"][number];

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
    <section className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm">

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-slate-50">

            <tr className="border-b border-slate-200 text-left">

              <th className="px-6 py-4 text-sm font-semibold text-slate-600">

                Program

              </th>

              <th className="px-6 py-4 text-sm font-semibold text-slate-600">

                Mentor

              </th>

              <th className="px-6 py-4 text-sm font-semibold text-slate-600">

                Duration

              </th>

              <th className="px-6 py-4 text-sm font-semibold text-slate-600">

                Students

              </th>

              <th className="px-6 py-4 text-sm font-semibold text-slate-600">

                Level

              </th>

              <th className="px-6 py-4 text-sm font-semibold text-slate-600">

                Rating

              </th>

              <th className="px-6 py-4 text-sm font-semibold text-slate-600">

                Price

              </th>

              <th className="px-6 py-4 text-sm font-semibold text-slate-600">

                Revenue

              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold text-slate-600">

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