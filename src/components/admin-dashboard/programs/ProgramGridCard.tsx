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
    <article className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Cover */}

      <div className="relative">

        <img
          src={mentor.image}
          alt={program.title}
          className="h-56 w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Badges */}

        <div className="absolute left-5 top-5 flex gap-2">

          <span className="rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white">

            Published

          </span>

          <span className="rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold text-white">

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

            <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">

              {mentor.category}

            </span>

            <span className="font-bold text-indigo-600">

              ₹{program.price.toLocaleString()}

            </span>

          </div>

          <h3 className="mt-4 line-clamp-2 text-2xl font-bold text-slate-900">

            {program.title}

          </h3>

        </div>

        {/* Stats */}

        <div className="grid grid-cols-2 gap-4">

          <div className="rounded-2xl bg-slate-50 p-4">

            <div className="flex items-center gap-2 text-slate-500">

              <Clock3 className="h-4 w-4" />

              <span className="text-sm">

                Duration

              </span>

            </div>

            <p className="mt-2 font-semibold text-slate-900">

              {program.duration}

            </p>

          </div>

          <div className="rounded-2xl bg-slate-50 p-4">

            <div className="flex items-center gap-2 text-slate-500">

              <Users className="h-4 w-4" />

              <span className="text-sm">

                Students

              </span>

            </div>

            <p className="mt-2 font-semibold text-slate-900">

              {program.students}

            </p>

          </div>

          <div className="rounded-2xl bg-slate-50 p-4">

            <div className="flex items-center gap-2 text-slate-500">

              <BookOpen className="h-4 w-4" />

              <span className="text-sm">

                Level

              </span>

            </div>

            <p className="mt-2 font-semibold text-slate-900">

              {program.level}

            </p>

          </div>

          <div className="rounded-2xl bg-slate-50 p-4">

            <div className="flex items-center gap-2 text-slate-500">

              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />

              <span className="text-sm">

                Rating

              </span>

            </div>

            <p className="mt-2 font-semibold text-slate-900">

              {mentor.rating}

            </p>

          </div>

        </div>

        {/* Revenue */}

        <div className="rounded-3xl bg-indigo-50 p-5">

          <p className="text-sm text-indigo-600">

            Estimated Revenue

          </p>

          <h3 className="mt-2 text-3xl font-bold text-indigo-700">

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
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            <Eye className="h-5 w-5" />

            View

          </button>

          <button
            type="button"
            onClick={() =>
              onEdit(mentor, program)
            }
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 font-semibold text-amber-700 transition hover:bg-amber-100"
          >
            <Pencil className="h-5 w-5" />

            Edit

          </button>

          <button
            type="button"
            onClick={() =>
              onPublish(mentor, program)
            }
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-4 py-3 font-semibold text-white transition hover:bg-emerald-700"
          >
            <UploadCloud className="h-5 w-5" />

            Publish

          </button>

          <button
            type="button"
            onClick={() =>
              onDelete(mentor, program)
            }
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-red-600 px-4 py-3 font-semibold text-white transition hover:bg-red-700"
          >
            <Trash2 className="h-5 w-5" />

            Delete

          </button>

        </div>

      </div>

    </article>
  );
}