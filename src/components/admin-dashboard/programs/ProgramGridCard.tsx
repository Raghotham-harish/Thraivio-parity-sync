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

interface ProgramGridCardProps {
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

export default function ProgramGridCard({
  mentor,
  program,
  onView,
  onEdit,
  onPublish,
  onDelete,
}: ProgramGridCardProps) {
  const estimatedRevenue =
    program.price * program.students;

  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Cover */}

      <div className="relative">

        <img
          src={mentor.image}
          alt={program.title}
          className="h-56 w-full object-cover"
        />

        <div className="absolute inset-0  from-black/60 via-black/10 to-transparent" />

        {/* Badges */}

        <div className="absolute left-5 top-5 flex gap-2">

          <span className="rounded-full bg-[#ECFDF5] px-3 py-1 text-xs font-semibold text-white">

            Published

          </span>

          <span className="rounded-full bg-[#F59E0B] px-3 py-1 text-xs font-semibold text-white">

            Featured

          </span>

        </div>

        {/* Mentor */}

        <div className="absolute bottom-5 left-5 flex items-center gap-3">

          <img
            src={mentor.image}
            alt={mentor.name}
            className="h-12 w-12 rounded-full border-2 border-white object-cover"
          />

          <div>

            <h4 className="font-semibold text-white">

              {mentor.name}

            </h4>

            <p className="text-sm text-white/80">

              {mentor.company}

            </p>

          </div>

        </div>

      </div>

      {/* Body */}

      <div className="space-y-6 p-6">
                <div>

          <div className="flex items-center justify-between">

            <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-[#2563EB]">

              {mentor.category}

            </span>

            <span className="font-bold text-primary">

              ₹{program.price.toLocaleString()}

            </span>

          </div>

          <h3 className="mt-4 line-clamp-2 text-2xl font-bold text-foreground">

            {program.title}

          </h3>

        </div>

        {/* Stats */}

        <div className="grid grid-cols-2 gap-4">

          <div className="rounded-2xl bg-secondary p-4">

            <div className="flex items-center gap-2 text-muted-foreground">

              <Clock3 className="h-4 w-4" />

              <span className="text-sm">

                Duration

              </span>

            </div>

            <p className="mt-2 font-semibold text-foreground">

              {program.duration}

            </p>

          </div>

          <div className="rounded-2xl bg-secondary p-4">

            <div className="flex items-center gap-2 text-muted-foreground">

              <Users className="h-4 w-4" />

              <span className="text-sm">

                Students

              </span>

            </div>

            <p className="mt-2 font-semibold text-foreground">

              {program.students}

            </p>

          </div>

          <div className="rounded-2xl bg-secondary p-4">

            <div className="flex items-center gap-2 text-muted-foreground">

              <BookOpen className="h-4 w-4" />

              <span className="text-sm">

                Level

              </span>

            </div>

            <p className="mt-2 font-semibold text-foreground">

              {program.level}

            </p>

          </div>

          <div className="rounded-2xl bg-secondary p-4">

            <div className="flex items-center gap-2 text-muted-foreground">

              <Star className="h-4 w-4 fill-[#F59E0B] text-[#F59E0B]" />

              <span className="text-sm">

                Rating

              </span>

            </div>

            <p className="mt-2 font-semibold text-foreground">

              {mentor.rating}

            </p>

          </div>

        </div>

        {/* Revenue */}

        <div className="rounded-2xl bg-[#EFF6FF] p-5">

          <p className="text-sm text-primary">

            Estimated Revenue

          </p>

          <h3 className="mt-2 text-3xl font-bold text-[#2563EB]">

            ₹{estimatedRevenue.toLocaleString()}

          </h3>

        </div>
                {/* Actions */}

        <div className="grid grid-cols-2 gap-3">

          <button
            type="button"
            onClick={() =>
              onView(mentor, program)
            }
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 font-semibold text-foreground transition hover:bg-secondary"
          >
            <Eye className="h-5 w-5" />

            View

          </button>

          <button
            type="button"
            onClick={() =>
              onEdit(mentor, program)
            }
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 font-semibold text-[#B45309] transition hover:bg-[#FFFBEB]"
          >
            <Pencil className="h-5 w-5" />

            Edit

          </button>

          <button
            type="button"
            onClick={() =>
              onPublish(mentor, program)
            }
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#10B981] px-4 py-3 font-semibold text-white transition hover:bg-[#0da271]"
          >
            <UploadCloud className="h-5 w-5" />

            Publish

          </button>

          <button
            type="button"
            onClick={() =>
              onDelete(mentor, program)
            }
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-destructive px-4 py-3 font-semibold text-white transition hover:bg-destructive/90"
          >
            <Trash2 className="h-5 w-5" />

            Delete

          </button>

        </div>

      </div>

    </article>
  );
}