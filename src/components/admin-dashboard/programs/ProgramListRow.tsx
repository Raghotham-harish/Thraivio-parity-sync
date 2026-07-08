import {
  BookOpen,
  Clock3,
  Eye,
  Pencil,
  Star,
  Trash2,
  UploadCloud,
  Users,
} from "lucide-react";

import { mentors } from "@/data/mentors";

type Mentor = (typeof mentors)[number];

type Program = Mentor["programs"][number];

interface ProgramListRowProps {
  mentor: Mentor;

  program: Mentor["programs"][number];

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

export default function ProgramListRow({
  mentor,
  program,
  onView,
  onEdit,
  onPublish,
  onDelete,
}: ProgramListRowProps) {
  const estimatedRevenue =
    program.price * program.students;

  return (
    <tr className="border-b border-slate-200 transition hover:bg-slate-50">

      {/* Program */}

      <td className="px-6 py-5">

        <div className="flex items-center gap-4">

          <img
            src={mentor.image}
            alt={program.title}
            className="h-16 w-16 rounded-2xl object-cover"
          />

          <div>

            <h3 className="font-semibold text-slate-900">

              {program.title}

            </h3>

            <div className="mt-2 flex flex-wrap gap-2">

              <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">

                {mentor.category}

              </span>

              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">

                Published

              </span>

            </div>

          </div>

        </div>

      </td>

      {/* Mentor */}

      <td className="px-6 py-5">

        <div className="flex items-center gap-3">

          <img
            src={mentor.image}
            alt={mentor.name}
            className="h-12 w-12 rounded-full object-cover"
          />

          <div>

            <h4 className="font-semibold text-slate-900">

              {mentor.name}

            </h4>

            <p className="text-sm text-slate-500">

              {mentor.company}

            </p>

          </div>

        </div>

      </td>

      {/* Duration */}

      <td className="px-6 py-5">

        <div className="flex items-center gap-2">

          <Clock3 className="h-4 w-4 text-slate-400" />

          {program.duration}

        </div>

      </td>

      {/* Students */}

      <td className="px-6 py-5">

        <div className="flex items-center gap-2">

          <Users className="h-4 w-4 text-slate-400" />

          {program.students}

        </div>

      </td>

      {/* Level */}

      <td className="px-6 py-5">

        <div className="flex items-center gap-2">

          <BookOpen className="h-4 w-4 text-slate-400" />

          {program.level}

        </div>

      </td>

      {/* Rating */}

      <td className="px-6 py-5">

        <div className="flex items-center gap-2">

          <Star className="h-4 w-4 fill-amber-400 text-amber-400" />

          {mentor.rating}

        </div>

      </td>

      {/* Price */}

      <td className="px-6 py-5 font-semibold text-indigo-600">

        ₹{program.price.toLocaleString()}

      </td>

      {/* Revenue */}

      <td className="px-6 py-5 font-bold text-emerald-600">

        ₹{estimatedRevenue.toLocaleString()}

      </td>
            {/* Actions */}

      <td className="px-6 py-5">

        <div className="flex items-center gap-2">

          <button
            type="button"
            onClick={() =>
              onView(mentor, program)
            }
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50"
            title="View Program"
          >
            <Eye className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={() =>
              onEdit(mentor, program)
            }
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-200 bg-amber-50 text-amber-700 transition hover:bg-amber-100"
            title="Edit Program"
          >
            <Pencil className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={() =>
              onPublish(mentor, program)
            }
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-700 transition hover:bg-emerald-100"
            title="Publish Program"
          >
            <UploadCloud className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={() =>
              onDelete(mentor, program)
            }
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-red-200 bg-red-50 text-red-700 transition hover:bg-red-100"
            title="Delete Program"
          >
            <Trash2 className="h-4 w-4" />
          </button>

        </div>

      </td>

    </tr>
  );
}