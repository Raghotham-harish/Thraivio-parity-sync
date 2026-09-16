
import {
  Download,
  FolderPlus,
  Layers3,
  Sparkles,
} from "lucide-react";

interface ProgramsHeaderProps {
  totalPrograms: number;
  publishedPrograms: number;
  onAddProgram: () => void;
  onExport: () => void;
}

export default function ProgramsHeader({
  totalPrograms,
  publishedPrograms,
  onAddProgram,
  onExport,
}: ProgramsHeaderProps) {
  return (
    <section className="overflow-hidden rounded-2xl bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-600 text-white shadow-xl sm:rounded-3xl">
      <div className="flex flex-col gap-6 p-5 sm:p-7 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:p-8">
        {/* Header Content */}
        <div className="flex min-w-0 items-start gap-4 sm:gap-5">
          <div className="shrink-0 rounded-2xl bg-white/15 p-3 backdrop-blur-sm sm:rounded-3xl sm:p-5">
            <Layers3 className="h-7 w-7 sm:h-10 sm:w-10" />
          </div>

          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] backdrop-blur-sm sm:px-4 sm:text-xs">
              <Sparkles className="h-3.5 w-3.5" />
              Programs Management
            </div>

            <h1 className="mt-3 text-2xl font-bold tracking-tight sm:mt-4 sm:text-3xl lg:text-4xl">
              Manage Programs
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-blue-100 sm:mt-3 sm:text-base sm:leading-7">
              Manage coaching programs, review content, update pricing,
              control publishing status, and monitor programs from one
              central dashboard.
            </p>
          </div>
        </div>

        {/* Header Actions and Summary */}
        <div className="flex shrink-0 flex-col gap-4 lg:items-end">
          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            <button
              type="button"
              onClick={onExport}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-4 py-2.5 text-sm font-semibold backdrop-blur-sm transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/70 sm:rounded-2xl sm:px-5"
            >
              <Download className="h-4 w-4 sm:h-5 sm:w-5" />
              Export
            </button>

            <button
              type="button"
              onClick={onAddProgram}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-indigo-700 shadow-sm transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-white/70 sm:rounded-2xl sm:px-5"
            >
              <FolderPlus className="h-4 w-4 sm:h-5 sm:w-5" />
              Add Program
            </button>
          </div>

          <div className="flex w-full items-center gap-5 rounded-2xl bg-white/10 px-4 py-4 backdrop-blur-sm sm:w-auto sm:gap-7 sm:px-6">
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-blue-100 sm:text-xs sm:tracking-widest">
                Total Programs
              </p>

              <p className="mt-1.5 text-2xl font-bold tabular-nums sm:mt-2 sm:text-3xl">
                {totalPrograms}
              </p>
            </div>

            <div className="h-12 w-px shrink-0 bg-white/20" />

            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-blue-100 sm:text-xs sm:tracking-widest">
                Published
              </p>

              <p className="mt-1.5 text-2xl font-bold tabular-nums sm:mt-2 sm:text-3xl">
                {publishedPrograms}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}