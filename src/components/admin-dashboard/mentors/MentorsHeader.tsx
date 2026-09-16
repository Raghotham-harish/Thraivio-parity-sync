import {
  Download,
  Plus,
  Users,
  ShieldCheck,
} from "lucide-react";

interface MentorsHeaderProps {
  totalMentors: number;
  verifiedMentors: number;

  onAddMentor: () => void;
  onExport: () => void;
}

export default function MentorsHeader({
  totalMentors,
  verifiedMentors,
  onAddMentor,
  onExport,
}: MentorsHeaderProps) {
  return (
    <section className="overflow-hidden rounded-[36px] bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 p-8 text-white shadow-xl">

      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}

        <div className="max-w-2xl">

          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur-md">

            <ShieldCheck className="h-4 w-4" />

            Mentors Management

          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight">

            Manage All Mentors

          </h1>

          <p className="mt-4 max-w-xl text-base leading-7 text-blue-100">

            Review mentor profiles, approve applications,
            verify documents, monitor performance, and manage
            the mentor community from one place.

          </p>

        </div>

        {/* Right */}

        <div className="grid grid-cols-2 gap-4">

          <div className="rounded-3xl bg-white/15 p-5 backdrop-blur-md">

            <div className="flex items-center gap-3">

              <Users className="h-8 w-8" />

              <div>

                <p className="text-sm text-blue-100">

                  Total Mentors

                </p>

                <h3 className="mt-1 text-3xl font-bold">

                  {(totalMentors ?? 0).toLocaleString()}

                </h3>

              </div>

            </div>

          </div>

          <div className="rounded-3xl bg-white/15 p-5 backdrop-blur-md">

            <div className="flex items-center gap-3">

              <ShieldCheck className="h-8 w-8" />

              <div>

                <p className="text-sm text-blue-100">

                  Verified

                </p>

                <h3 className="mt-1 text-3xl font-bold">

                  {(verifiedMentors ?? 0).toLocaleString()}

                </h3>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Actions */}

      <div className="mt-8 flex flex-wrap gap-4">

        <button
          type="button"
          onClick={onAddMentor}
          className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-blue-700 transition-all hover:shadow-lg"
        >
          <Plus className="h-5 w-5" />

          Add Mentor
        </button>

        <button
          type="button"
          onClick={onExport}
          className="inline-flex items-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20"
        >
          <Download className="h-5 w-5" />

          Export Data
        </button>

      </div>

    </section>
  );
}