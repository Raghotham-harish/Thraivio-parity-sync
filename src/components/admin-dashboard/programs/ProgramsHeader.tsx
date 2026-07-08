import {
  Download,
  FolderPlus,
  Layers3,
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
    <section className="overflow-hidden rounded-[32px] bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 text-white shadow-xl">

      <div className="flex flex-col gap-8 p-8 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}

        <div className="flex items-start gap-5">

          <div className="rounded-3xl bg-white/15 p-5 backdrop-blur">

            <Layers3 className="h-10 w-10" />

          </div>

          <div>

            <span className="inline-flex rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-widest backdrop-blur">

              Programs Management

            </span>

            <h1 className="mt-4 text-4xl font-bold">

              Manage Programs

            </h1>

            <p className="mt-3 max-w-2xl text-blue-100 leading-7">

              Manage all coaching programs available on the
              platform. Review content, publish new programs,
              update pricing and monitor enrollments from one
              place.

            </p>

          </div>

        </div>

        {/* Right */}

        <div className="flex flex-col gap-4 lg:items-end">

          <div className="flex flex-wrap gap-3">

            <button
              type="button"
              onClick={onExport}
              className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-3 font-semibold backdrop-blur transition hover:bg-white/20"
            >
              <Download className="h-5 w-5" />

              Export
            </button>

            <button
              type="button"
              onClick={onAddProgram}
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-semibold text-indigo-700 transition hover:bg-slate-100"
            >
              <FolderPlus className="h-5 w-5" />

              Add Program
            </button>

          </div>

          <div className="flex gap-6 rounded-2xl bg-white/10 px-6 py-4 backdrop-blur">

            <div>

              <p className="text-xs uppercase tracking-widest text-blue-100">

                Total Programs

              </p>

              <h3 className="mt-2 text-3xl font-bold">

                {totalPrograms}

              </h3>

            </div>

            <div className="h-12 w-px bg-white/20" />

            <div>

              <p className="text-xs uppercase tracking-widest text-blue-100">

                Published

              </p>

              <h3 className="mt-2 text-3xl font-bold">

                {publishedPrograms}

              </h3>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}