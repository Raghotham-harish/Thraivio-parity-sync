import {
  Globe,
  Rocket,
  Users,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { mentors } from "@/data/mentors";

type Mentor = (typeof mentors)[number];

type Program = Mentor["programs"][number];

interface PublishProgramDialogProps {
  open: boolean;

  mentor: Mentor | null;

  program: Program | null;

  onOpenChange: (open: boolean) => void;

  onConfirm: (
    mentor: Mentor,
    program: Mentor["programs"][number]
  ) => void;
}

export default function PublishProgramDialog({
  open,
  mentor,
  program,
  onOpenChange,
  onConfirm,
}: PublishProgramDialogProps) {
  if (!mentor || !program) return null;

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent
        className="
          max-w-2xl
          overflow-hidden
          rounded-[30px]
          p-0
        "
      >

        {/* Header */}

        <div className="bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 p-8 text-white">

          <div className="flex items-center gap-5">

            <div className="rounded-3xl bg-white/20 p-4">

              <Rocket className="h-10 w-10" />

            </div>

            <div>

              <DialogHeader>

                <DialogTitle className="text-3xl font-bold text-white">

                  Publish Program

                </DialogTitle>

                <DialogDescription className="mt-2 text-emerald-100">

                  Make this coaching program available
                  across the entire platform.

                </DialogDescription>

              </DialogHeader>

            </div>

          </div>

        </div>

        {/* Body */}

        <div className="space-y-6 p-8">

          {/* Program */}

          <div className="flex items-center gap-5 rounded-3xl border border-slate-200 bg-slate-50 p-5">

            <img
              src={mentor.image}
              alt={program.title}
              className="h-20 w-20 rounded-2xl object-cover"
            />

            <div>

              <h3 className="text-xl font-bold text-slate-900">

                {program.title}

              </h3>

              <p className="mt-1 text-slate-500">

                {mentor.name}

              </p>

              <span className="mt-3 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">

                Ready to Publish

              </span>

            </div>

          </div>

          {/* Visibility */}

          <div className="rounded-3xl border border-slate-200 bg-white p-6">

            <h3 className="font-bold text-slate-900">

              After publishing, this program will appear in:

            </h3>

            <div className="mt-6 space-y-4">

              <div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4">

                <Globe className="h-6 w-6 text-indigo-600" />

                <div>

                  <h4 className="font-semibold">

                    Main Website

                  </h4>

                  <p className="text-sm text-slate-500">

                    Public program listing.

                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4">

                <GraduationCap className="h-6 w-6 text-violet-600" />

                <div>

                  <h4 className="font-semibold">

                    Mentor Dashboard

                  </h4>

                  <p className="text-sm text-slate-500">

                    Mentor can manage this program.

                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4">

                <Users className="h-6 w-6 text-emerald-600" />

                <div>

                  <h4 className="font-semibold">

                    User Dashboard

                  </h4>

                  <p className="text-sm text-slate-500">

                    Learners can enroll and track progress.

                  </p>

                </div>

              </div>

            </div>

          </div>
                    {/* Confirmation */}

          <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">

            <div className="flex items-start gap-4">

              <CheckCircle2 className="mt-1 h-8 w-8 text-emerald-600" />

              <div>

                <h4 className="font-bold text-emerald-800">

                  Ready to Publish

                </h4>

                <p className="mt-3 leading-7 text-emerald-700">

                  Once published, this program will become
                  available across all platform modules.
                  Future backend integration can also notify
                  followers and enrolled users automatically.

                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Footer */}

        <DialogFooter className="border-t border-slate-200 bg-white p-6">

          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="rounded-2xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={() =>
              onConfirm(mentor, program)
            }
            className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
          >
            <Rocket className="h-5 w-5" />

            Publish Program

          </button>

        </DialogFooter>

      </DialogContent>

    </Dialog>
  );
}