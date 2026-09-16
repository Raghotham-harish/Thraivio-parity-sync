
import {
  Edit,
  Eye,
  Star,
  Trash2,
  Users,
} from "lucide-react";

import type { Program } from "@/services/program.service";

interface ProgramsTableProps {
  items: Program[];
  onView: (program: Program) => void;
  onEdit: (program: Program) => void;
  onPublish: (program: Program) => void;
  onDelete: (program: Program) => void;
}

const statusStyles: Record<string, string> = {
  published: "bg-emerald-100 text-emerald-700",
  draft: "bg-slate-100 text-slate-700",
  pending: "bg-amber-100 text-amber-700",
  rejected: "bg-red-100 text-red-700",
  inactive: "bg-orange-100 text-orange-700",
  archived: "bg-purple-100 text-purple-700",
};

const PROGRAM_DUMMY_IMAGE =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900";

function formatCurrency(amount: number, currency = "USD") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

function formatStatus(status: string) {
  return status.charAt(0).toUpperCase() + status.slice(1);
}

export default function ProgramsTable({
  items,
  onView,
  onEdit,
  onPublish,
  onDelete,
}: ProgramsTableProps) {
  return (
    <div className="w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[1050px] border-collapse text-left">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th className="px-5 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                Program
              </th>

              <th className="px-5 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                Category
              </th>

              <th className="px-5 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                Status
              </th>

              <th className="px-5 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                Price
              </th>

              <th className="px-5 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                Enrollments
              </th>

              <th className="px-5 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                Rating
              </th>

              <th className="px-5 py-4 text-right text-xs font-bold uppercase tracking-wide text-slate-500">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {items.map((program) => {
              const imageUrl =
                program.thumbnail?.url || PROGRAM_DUMMY_IMAGE;

              const price =
                program.finalPrice ?? program.pricing?.price ?? 0;

              const statusClass =
                statusStyles[program.status] ||
                "bg-slate-100 text-slate-700";

              return (
                <tr
                  key={program.id}
                  className="transition hover:bg-slate-50/80"
                >
                  {/* Program */}
                  <td className="px-5 py-4">
                    <div className="flex max-w-xs items-center gap-3">
                      <img
                        src={imageUrl}
                        alt={program.thumbnail?.alt || program.title}
                        className="h-14 w-16 shrink-0 rounded-xl object-cover"
                      />

                      <div className="min-w-0">
                        <p className="truncate text-sm font-bold text-slate-900">
                          {program.title}
                        </p>

                        <p className="mt-1 truncate text-xs capitalize text-slate-500">
                          {program.level}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Category */}
                  <td className="px-5 py-4">
                    <span className="text-sm capitalize text-slate-600">
                      {program.category || "General"}
                    </span>
                  </td>

                  {/* Status */}
                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${statusClass}`}
                    >
                      {formatStatus(program.status)}
                    </span>
                  </td>

                  {/* Price */}
                  <td className="px-5 py-4">
                    <span className="text-sm font-semibold text-slate-800">
                      {program.pricing?.isFree
                        ? "Free"
                        : formatCurrency(
                            price,
                            program.pricing?.currency || "USD",
                          )}
                    </span>
                  </td>

                  {/* Enrollments */}
                  <td className="px-5 py-4">
                    <span className="inline-flex items-center gap-1.5 text-sm text-slate-600">
                      <Users className="h-4 w-4 text-slate-400" />
                      {program.analytics?.enrollments ?? 0}
                    </span>
                  </td>

                  {/* Rating */}
                  <td className="px-5 py-4">
                    <span className="inline-flex items-center gap-1.5 text-sm text-slate-600">
                      <Star className="h-4 w-4 text-amber-400" />
                      {(program.analytics?.averageRating ?? 0).toFixed(1)}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-5 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => onView(program)}
                        aria-label={`View ${program.title}`}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:bg-slate-100"
                      >
                        <Eye className="h-4 w-4" />
                      </button>

                      <button
                        type="button"
                        onClick={() => onEdit(program)}
                        aria-label={`Edit ${program.title}`}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-indigo-200 text-indigo-600 transition hover:bg-indigo-50"
                      >
                        <Edit className="h-4 w-4" />
                      </button>

                      {program.status === "draft" && (
                        <button
                          type="button"
                          onClick={() => onPublish(program)}
                          className="rounded-lg bg-emerald-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-emerald-700"
                        >
                          Publish
                        </button>
                      )}

                      <button
                        type="button"
                        onClick={() => onDelete(program)}
                        aria-label={`Delete ${program.title}`}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-red-200 text-red-600 transition hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}