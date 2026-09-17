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
    <tr className="border-b border-border transition hover:bg-secondary">

      {/* Program */}

      <td className="px-4 py-3">

        <div className="flex items-center gap-4">

          <img
            src={mentor.image}
            alt={program.title}
            className="h-11 w-11 rounded-xl object-cover"
          />

          <div>

            <h3 className="font-semibold text-foreground">

              {program.title}

            </h3>

            <div className="mt-2 flex flex-wrap gap-2">

              <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-[#2563EB]">

                {mentor.category}

              </span>

              <span className="rounded-full bg-[#ECFDF5] px-3 py-1 text-xs font-semibold text-[#065F46]">

                Published

              </span>

            </div>

          </div>

        </div>

      </td>

      {/* Mentor */}

      <td className="px-4 py-3">

        <div className="flex items-center gap-3">

          <img
            src={mentor.image}
            alt={mentor.name}
            className="h-9 w-9 rounded-full object-cover"
          />

          <div>

            <h4 className="font-semibold text-foreground">

              {mentor.name}

            </h4>

            <p className="text-sm text-muted-foreground">

              {mentor.company}

            </p>

          </div>

        </div>

      </td>

      {/* Duration */}

      <td className="px-4 py-3">

        <div className="flex items-center gap-2">

          <Clock3 className="h-4 w-4 text-muted-foreground" />

          {program.duration}

        </div>

      </td>

      {/* Students */}

      <td className="px-4 py-3">

        <div className="flex items-center gap-2">

          <Users className="h-4 w-4 text-muted-foreground" />

          {program.students}

        </div>

      </td>

      {/* Level */}

      <td className="px-4 py-3">

        <div className="flex items-center gap-2">

          <BookOpen className="h-4 w-4 text-muted-foreground" />

          {program.level}

        </div>

      </td>

      {/* Rating */}

      <td className="px-4 py-3">

        <div className="flex items-center gap-2">

          <Star className="h-4 w-4 fill-[#F59E0B] text-[#F59E0B]" />

          {mentor.rating}

        </div>

      </td>

      {/* Price */}

      <td className="px-4 py-3 font-semibold text-primary">

        ₹{program.price.toLocaleString()}

      </td>

      {/* Revenue */}

      <td className="px-4 py-3 font-bold text-[#0F8F65]">

        ₹{estimatedRevenue.toLocaleString()}

      </td>
            {/* Actions */}

      <td className="px-4 py-3">

        <div className="flex items-center gap-2">

          <button
            type="button"
            onClick={() =>
              onView(mentor, program)
            }
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-card text-foreground transition hover:bg-secondary"
            aria-label="View program"
            title="View Program"
          >
            <Eye className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={() =>
              onEdit(mentor, program)
            }
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-amber-200 bg-amber-50 text-[#B45309] transition hover:bg-[#FFFBEB]"
            aria-label="Edit program"
            title="Edit Program"
          >
            <Pencil className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={() =>
              onPublish(mentor, program)
            }
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#A7E8CE] bg-[#ECFDF5] text-[#065F46] transition hover:bg-[#ECFDF5]"
            aria-label="Publish program"
            title="Publish Program"
          >
            <UploadCloud className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={() =>
              onDelete(mentor, program)
            }
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-red-200 bg-red-50 text-[#BA1A1A] transition hover:bg-[#FFDAD6]"
            aria-label="Delete program"
            title="Delete Program"
          >
            <Trash2 className="h-4 w-4" />
          </button>

        </div>

      </td>

    </tr>
  );
}