import {
  BookOpen,
  Clock3,
  Star,
  Users,
  X,
} from "lucide-react";

import { mentors } from "@/data/mentors";

type Mentor = (typeof mentors)[number];

type Program = Mentor["programs"][number];

interface ProgramDetailsDrawerProps {
  open: boolean;

  mentor: Mentor | null;

  program: Program | null;

  onClose: () => void;
}

export default function ProgramDetailsDrawer({
  open,
  mentor,
  program,
  onClose,
}: ProgramDetailsDrawerProps) {
  if (!open || !mentor || !program)
    return null;

  const revenue =
    program.price * program.students;

  return (
    <div className="fixed inset-0 z-50">

      {/* Overlay */}

      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
      />

      {/* Drawer */}

      <div className="absolute right-0 top-0 flex h-full w-full max-w-2xl flex-col overflow-hidden bg-card shadow-2xl">

        {/* Header */}

        <div className="relative">

          <img
            src={mentor.image}
            alt={program.title}
            className="h-72 w-full object-cover"
          />

          <div className="absolute inset-0  from-black/80 via-black/20 to-transparent" />

          <button
            onClick={onClose}
            className="absolute right-6 top-6 rounded-full bg-card/20 p-3 text-white backdrop-blur transition hover:bg-card/30"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="absolute bottom-8 left-8">

            <span className="rounded-full bg-[#EFF6FF]0 px-4 py-1 text-xs font-semibold text-white">

              {mentor.category}

            </span>

            <h2 className="mt-4 text-4xl font-bold text-white">

              {program.title}

            </h2>

            <div className="mt-4 flex items-center gap-3">

              <img
                src={mentor.image}
                alt={mentor.name}
                className="h-14 w-14 rounded-full border-2 border-white object-cover"
              />

              <div>

                <h4 className="font-semibold text-white">

                  {mentor.name}

                </h4>

                <p className="text-white/80">

                  {mentor.company}

                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Body */}

        <div className="flex-1 space-y-8 overflow-y-auto p-8">
                      {/* Overview */}

          <section>

            <h3 className="text-xl font-bold text-foreground">

              Program Overview

            </h3>

            <p className="mt-4 leading-8 text-muted-foreground">

              This coaching program is currently available
              on the main website, mentor dashboard and
              user dashboard. The admin can review, edit,
              publish or archive this program from here.

            </p>

          </section>

          {/* Stats */}

          <div className="grid grid-cols-2 gap-5">

            <div className="rounded-2xl bg-secondary p-5">

              <div className="flex items-center gap-2 text-muted-foreground">

                <Clock3 className="h-5 w-5" />

                Duration

              </div>

              <h4 className="mt-3 text-xl font-bold">

                {program.duration}

              </h4>

            </div>

            <div className="rounded-2xl bg-secondary p-5">

              <div className="flex items-center gap-2 text-muted-foreground">

                <BookOpen className="h-5 w-5" />

                Level

              </div>

              <h4 className="mt-3 text-xl font-bold">

                {program.level}

              </h4>

            </div>

            <div className="rounded-2xl bg-secondary p-5">

              <div className="flex items-center gap-2 text-muted-foreground">

                <Users className="h-5 w-5" />

                Students

              </div>

              <h4 className="mt-3 text-xl font-bold">

                {program.students}

              </h4>

            </div>

            <div className="rounded-2xl bg-secondary p-5">

              <div className="flex items-center gap-2 text-muted-foreground">

                <Star className="h-5 w-5 fill-[#F59E0B] text-[#F59E0B]" />

                Rating

              </div>

              <h4 className="mt-3 text-xl font-bold">

                {mentor.rating}

              </h4>

            </div>

          </div>

          {/* Revenue */}

          <div className="rounded-2xl  bg-primary  p-6 text-white">

            <p className="text-indigo-100">

              Estimated Revenue

            </p>

            <h3 className="mt-3 text-4xl font-bold">

              ₹{revenue.toLocaleString()}

            </h3>

          </div>
                    {/* Curriculum */}

          <section>

            <h3 className="text-xl font-bold text-foreground">

              Curriculum Overview

            </h3>

            <div className="mt-5 space-y-3">

              {[
                "Introduction & Goal Setting",
                "Core Learning Modules",
                "Practical Assignments",
                "Live Mentoring Sessions",
                "Final Assessment & Certification",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-secondary p-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 font-bold text-white">

                    {index + 1}

                  </div>

                  <span className="font-medium text-foreground">

                    {item}

                  </span>

                </div>
              ))}

            </div>

          </section>

          {/* Admin Insights */}

          <section>

            <h3 className="text-xl font-bold text-foreground">

              Admin Insights

            </h3>

            <div className="mt-5 grid grid-cols-2 gap-5">

              <div className="rounded-2xl border border-border bg-card p-5">

                <p className="text-sm text-muted-foreground">

                  Price

                </p>

                <h4 className="mt-2 text-2xl font-bold text-foreground">

                  ₹{program.price.toLocaleString()}

                </h4>

              </div>

              <div className="rounded-2xl border border-border bg-card p-5">

                <p className="text-sm text-muted-foreground">

                  Status

                </p>

                <span className="mt-3 inline-flex rounded-full bg-[#ECFDF5] px-4 py-2 text-sm font-semibold text-[#065F46]">

                  Published

                </span>

              </div>

              <div className="rounded-2xl border border-border bg-card p-5">

                <p className="text-sm text-muted-foreground">

                  Featured

                </p>

                <span className="mt-3 inline-flex rounded-full bg-[#FFFBEB] px-4 py-2 text-sm font-semibold text-[#B45309]">

                  Featured Program

                </span>

              </div>

              <div className="rounded-2xl border border-border bg-card p-5">

                <p className="text-sm text-muted-foreground">

                  Platform

                </p>

                <h4 className="mt-2 font-semibold text-foreground">

                  Website • Mentor • User

                </h4>

              </div>

            </div>

          </section>

        </div>

        {/* Footer */}

        <div className="border-t border-border bg-card px-8 py-6">

          <div className="flex flex-wrap justify-end gap-4">

            <button
              type="button"
              onClick={onClose}
              className="rounded-2xl border border-border bg-card px-6 py-3 font-semibold text-foreground transition hover:bg-secondary"
            >
              Close
            </button>

            <button
              type="button"
              className="rounded-2xl bg-[#F59E0B] px-6 py-3 font-semibold text-white transition hover:bg-[#D97706]"
            >
              Edit Program
            </button>

            <button
              type="button"
              className="rounded-2xl bg-[#10B981] px-6 py-3 font-semibold text-white transition hover:bg-[#0da271]"
            >
              Publish
            </button>

            <button
              type="button"
              className="rounded-2xl bg-destructive px-6 py-3 font-semibold text-white transition hover:bg-destructive/90"
            >
              Delete
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}