import {
  AlertTriangle,
  BookOpen,
  Trash2,
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

interface DeleteProgramDialogProps {
  open: boolean;

  mentor: Mentor | null;

  program: Program | null;

  onOpenChange: (open: boolean) => void;

  onConfirm: (
    mentor: Mentor,
    program: Mentor["programs"][number]
  ) => void;
}

export default function DeleteProgramDialog({
  open,
  mentor,
  program,
  onOpenChange,
  onConfirm,
}: DeleteProgramDialogProps) {
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
          rounded-2xl
          p-0
        "
      >

        {/* Header */}

        <div className=" bg-destructive   p-8 text-white">

          <div className="flex items-center gap-5">

            <div className="rounded-2xl bg-card/20 p-4">

              <Trash2 className="h-10 w-10" />

            </div>

            <div>

              <DialogHeader>

                <DialogTitle className="text-3xl font-bold text-white">

                  Delete Program

                </DialogTitle>

                <DialogDescription className="mt-2 text-red-100">

                  This action cannot be undone.

                </DialogDescription>

              </DialogHeader>

            </div>

          </div>

        </div>

        {/* Body */}

        <div className="space-y-6 p-8">

          {/* Program */}

          <div className="flex items-center gap-5 rounded-2xl border border-border bg-secondary p-5">

            <img
              src={mentor.image}
              alt={program.title}
              className="h-20 w-20 rounded-2xl object-cover"
            />

            <div>

              <h3 className="text-xl font-bold text-foreground">

                {program.title}

              </h3>

              <p className="mt-1 text-muted-foreground">

                {mentor.name}

              </p>

              <span className="mt-3 inline-flex rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-[#2563EB]">

                {mentor.category}

              </span>

            </div>

          </div>

          {/* Warning */}

          <div className="rounded-2xl border border-red-200 bg-red-50 p-6">

            <div className="flex items-start gap-4">

              <AlertTriangle className="mt-1 h-8 w-8 text-red-600" />

              <div>

                <h4 className="font-bold text-red-800">

                  Warning

                </h4>

                <p className="mt-3 leading-7 text-[#BA1A1A]">

                  Deleting this program will remove it from
                  the Main Website, Mentor Dashboard,
                  User Dashboard and Admin Dashboard.

                </p>

              </div>

            </div>

          </div>

          {/* Impact */}

          <div className="rounded-2xl border border-border bg-card p-6">

            <h4 className="flex items-center gap-2 font-semibold">

              <BookOpen className="h-5 w-5 text-primary" />

              What will happen?

            </h4>

            <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">

              <li>
                • Program will no longer appear on the website.
              </li>

              <li>
                • Students won't be able to enroll.
              </li>

              <li>
                • Mentor dashboard listing will be removed.
              </li>

              <li>
                • Existing analytics may remain in reports.
              </li>

            </ul>

          </div>
                  </div>

        {/* Footer */}

        <DialogFooter className="border-t border-border bg-card p-6">

          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="rounded-2xl border border-border bg-card px-6 py-3 font-semibold text-foreground transition hover:bg-secondary"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={() =>
              onConfirm(mentor, program)
            }
            className="inline-flex items-center gap-2 rounded-2xl bg-destructive px-6 py-3 font-semibold text-white transition hover:bg-destructive/90"
          >
            <Trash2 className="h-5 w-5" />

            Delete Program

          </button>

        </DialogFooter>

      </DialogContent>

    </Dialog>
  );
}