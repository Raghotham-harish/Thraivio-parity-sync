
import {
  Edit,
  Eye,
  Star,
  Trash2,
  Users,
} from "lucide-react";

import type { Program } from "@/services/program.service";

interface ProgramListCardProps {
  program: Program;
  onView: (program: Program) => void;
  onEdit: (program: Program) => void;
  onPublish: (program: Program) => void;
  onDelete: (program: Program) => void;
}

const PROGRAM_DUMMY_IMAGE =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900";

const statusStyles: Record<string, string> = {
  published: "bg-emerald-100 text-emerald-700",
  draft: "bg-slate-100 text-slate-700",
  pending: "bg-amber-100 text-amber-700",
  rejected: "bg-red-100 text-red-700",
  inactive: "bg-orange-100 text-orange-700",
  archived: "bg-purple-100 text-purple-700",
};

function formatCurrency(amount: number, currency = "USD") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function ProgramListCard({
  program,
  onView,
  onEdit,
  onPublish,
  onDelete,
}: ProgramListCardProps) {
  const imageUrl = program.thumbnail?.url || PROGRAM_DUMMY_IMAGE;

  const price = program.finalPrice ?? program.pricing?.price ?? 0;

  const statusClass =
    statusStyles[program.status] || "bg-slate-100 text-slate-700";

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md sm:p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        {/* Image */}
        <div className="h-44 w-full shrink-0 overflow-hidden rounded-xl sm:h-48 lg:h-28 lg:w-44">
          <img
            src={imageUrl}
            alt={program.thumbnail?.alt || program.title}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Main Information */}
        <div className="min-w-0 flex-1 space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusClass}`}
            >
              {program.status.charAt(0).toUpperCase() +
                program.status.slice(1)}
            </span>

            {program.isFeatured && (
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-700">
                <Star className="h-3 w-3 fill-current" />
                Featured
              </span>
            )}
          </div>

          <h3 className="truncate text-base font-bold text-slate-900 sm:text-lg">
            {program.title}
          </h3>

          <p className="line-clamp-2 text-sm text-slate-500">
            {program.shortDescription || "No description available."}
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500">
            <span className="capitalize">{program.category}</span>
            <span className="capitalize">{program.level}</span>

            <span className="inline-flex items-center gap-1">
              <Users className="h-3.5 w-3.5" />
              {program.analytics?.enrollments ?? 0} enrollments
            </span>

            <span className="inline-flex items-center gap-1">
              <Star className="h-3.5 w-3.5" />
              {(program.analytics?.averageRating ?? 0).toFixed(1)}
            </span>
          </div>
        </div>

        {/* Price */}
        <div className="shrink-0 lg:min-w-28 lg:text-right">
          <p className="text-lg font-bold text-slate-900">
            {program.pricing?.isFree
              ? "Free"
              : formatCurrency(
                  price,
                  program.pricing?.currency || "USD",
                )}
          </p>

          <p className="text-xs text-slate-500">Program price</p>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-2 lg:flex-col">
          <button
            type="button"
            onClick={() => onView(program)}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            <Eye className="h-4 w-4" />
            <span className="sm:hidden">View</span>
          </button>

          <button
            type="button"
            onClick={() => onEdit(program)}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            <Edit className="h-4 w-4" />
            <span className="sm:hidden">Edit</span>
          </button>

          {program.status === "draft" && (
            <button
              type="button"
              onClick={() => onPublish(program)}
              className="rounded-xl bg-emerald-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Publish
            </button>
          )}

          <button
            type="button"
            onClick={() => onDelete(program)}
            aria-label={`Delete ${program.title}`}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-200 px-3 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </article>
  );
}