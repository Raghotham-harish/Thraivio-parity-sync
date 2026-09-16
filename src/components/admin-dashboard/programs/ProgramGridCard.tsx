
import {
  Archive,
  Edit,
  Eye,
  MoreVertical,
  Star,
  Trash2,
  Users,
} from "lucide-react";

import type { Program } from "@/services/program.service";

interface ProgramGridCardProps {
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

function formatStatus(status: string) {
  return status.charAt(0).toUpperCase() + status.slice(1);
}

function formatCurrency(amount: number, currency = "USD") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function ProgramGridCard({
  program,
  onView,
  onEdit,
  onPublish,
  onDelete,
}: ProgramGridCardProps) {
  const imageUrl = program.thumbnail?.url || PROGRAM_DUMMY_IMAGE;

  const statusClass =
    statusStyles[program.status] || "bg-slate-100 text-slate-700";

  const price = program.finalPrice ?? program.pricing?.price ?? 0;

  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Thumbnail */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={imageUrl}
          alt={program.thumbnail?.alt || program.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* Status */}
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${statusClass}`}
          >
            {formatStatus(program.status)}
          </span>

          {program.isFeatured && (
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-white">
              <Star className="h-3 w-3 fill-current" />
              Featured
            </span>
          )}
        </div>

        {/* Menu */}
        <div className="absolute right-4 top-4">
          <details className="relative">
            <summary className="flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-sm transition hover:bg-white">
              <MoreVertical className="h-4 w-4" />
            </summary>

            <div className="absolute right-0 z-20 mt-2 w-40 overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-xl">
              <button
                type="button"
                onClick={() => onView(program)}
                className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-50"
              >
                <Eye className="h-4 w-4" />
                View
              </button>

              <button
                type="button"
                onClick={() => onEdit(program)}
                className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-50"
              >
                <Edit className="h-4 w-4" />
                Edit
              </button>

              <button
                type="button"
                onClick={() => onDelete(program)}
                className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50"
              >
                <Trash2 className="h-4 w-4" />
                Delete
              </button>
            </div>
          </details>
        </div>

        {/* Bottom Info */}
        <div className="absolute bottom-4 left-4 right-4">
          <p className="mb-1 text-xs font-medium uppercase tracking-wide text-white/75">
            {program.category || "General"}
          </p>

          <h3 className="line-clamp-2 text-lg font-bold leading-snug text-white">
            {program.title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4 p-5">
        <p className="line-clamp-2 min-h-10 text-sm leading-6 text-slate-500">
          {program.shortDescription || "No description available."}
        </p>

        <div className="flex items-center justify-between text-sm">
          <span className="rounded-lg bg-indigo-50 px-2.5 py-1 font-medium capitalize text-indigo-700">
            {program.level}
          </span>

          <span className="font-semibold text-slate-900">
            {program.pricing?.isFree
              ? "Free"
              : formatCurrency(price, program.pricing?.currency || "USD")}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 border-y border-slate-100 py-4">
          <div className="flex items-center gap-2 text-slate-500">
            <Users className="h-4 w-4" />
            <div>
              <p className="text-xs">Enrollments</p>
              <p className="font-semibold text-slate-800">
                {program.analytics?.enrollments ?? 0}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-slate-500">
            <Star className="h-4 w-4" />
            <div>
              <p className="text-xs">Rating</p>
              <p className="font-semibold text-slate-800">
                {(program.analytics?.averageRating ?? 0).toFixed(1)}
              </p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => onView(program)}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 px-3 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            <Eye className="h-4 w-4" />
            View
          </button>

          <button
            type="button"
            onClick={() => onEdit(program)}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            <Edit className="h-4 w-4" />
            Edit
          </button>
        </div>

        {program.status === "draft" && (
          <button
            type="button"
            onClick={() => onPublish(program)}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            Publish Program
          </button>
        )}

        {program.status === "published" && (
          <button
            type="button"
            onClick={() => onPublish(program)}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            <Archive className="h-4 w-4" />
            Manage Status
          </button>
        )}
      </div>
    </article>
  );
}