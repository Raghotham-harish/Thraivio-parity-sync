import {
  AlertTriangle,
  Award,
  Building2,
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

import { Button } from "@/components/ui/button";

import type {
  AdminCertificate,
} from "@/types/admin-certificate";

interface DeleteCertificateDialogProps {
  open: boolean;

  certificate: AdminCertificate | null;

  onOpenChange: (
    open: boolean
  ) => void;

  onConfirm: () => void;
}

const DeleteCertificateDialog = ({
  open,
  certificate,
  onOpenChange,
  onConfirm,
}: DeleteCertificateDialogProps) => {
  if (!certificate) return null;

  return (
    <Dialog
      open={open}
      onOpenChange={
        onOpenChange
      }
    >
      <DialogContent className="max-w-2xl overflow-hidden rounded-[32px] p-0">

        {/* Hero */}

        <section
          className="
            relative
            overflow-hidden
            bg-gradient-to-r
            from-red-600
            via-rose-600
            to-red-700
            p-8
            text-white
          "
        >
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10">

            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm backdrop-blur">

              <AlertTriangle className="h-4 w-4" />

              Dangerous Action

            </div>

            <DialogHeader className="mt-6 text-left">

              <DialogTitle className="text-4xl font-bold text-white">

                Delete Certificate

              </DialogTitle>

              <DialogDescription className="mt-4 max-w-xl text-base leading-7 text-red-100">

                This action permanently removes the
                certificate from the platform.
                Learners won't be able to verify
                or download it anymore.

              </DialogDescription>

            </DialogHeader>

          </div>

        </section>

        {/* Content */}

        <div className="space-y-8 p-8">

          {/* Certificate */}

          <div className="rounded-3xl border bg-white p-6">

            <div className="flex gap-5">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100">

                <Award className="h-8 w-8 text-red-600" />

              </div>

              <div className="flex-1">

                <h3 className="text-2xl font-bold">

                  {certificate.title}

                </h3>

                <p className="mt-2 text-muted-foreground">

                  Certificate Number :
                  {" "}
                  {certificate.certificateNumber}

                </p>

                <p className="mt-1 font-mono text-sm text-muted-foreground break-all">

                  {certificate.credentialId}

                </p>

              </div>

            </div>

          </div>

          {/* Student */}

          <div className="grid gap-5 md:grid-cols-2">

            <div className="rounded-3xl border p-5">

              <h4 className="mb-4 font-semibold">

                Student

              </h4>

              <div className="flex gap-4">

                <img
                  src={certificate.studentImage}
                  alt={certificate.studentName}
                  className="h-16 w-16 rounded-2xl object-cover"
                />

                <div>

                  <p className="font-semibold">

                    {certificate.studentName}

                  </p>

                  <p className="text-sm text-muted-foreground">

                    {certificate.studentEmail}

                  </p>

                </div>

              </div>

            </div>

            <div className="rounded-3xl border p-5">

              <h4 className="mb-4 font-semibold">

                Mentor

              </h4>

              <div className="flex gap-4">

                <img
                  src={certificate.mentorImage}
                  alt={certificate.mentorName}
                  className="h-16 w-16 rounded-2xl object-cover"
                />

                <div>

                  <p className="font-semibold">

                    {certificate.mentorName}

                  </p>

                  <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">

                    <Building2 className="h-4 w-4" />

                    {certificate.mentorCompany}

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Warning */}

          <div className="rounded-3xl border border-red-200 bg-red-50 p-6">

            <div className="flex items-start gap-4">

              <AlertTriangle className="mt-1 h-6 w-6 text-red-600" />

              <div>

                <h3 className="text-lg font-bold text-red-700">

                  Warning

                </h3>

                <ul className="mt-4 space-y-2 text-sm leading-7 text-red-700">

                  <li>
                    • Certificate will be removed permanently.
                  </li>

                  <li>
                    • Verification URL will stop working.
                  </li>

                  <li>
                    • Download link will become invalid.
                  </li>

                  <li>
                    • Student achievement history may be affected.
                  </li>

                  <li>
                    • This action cannot be undone.
                  </li>

                </ul>

              </div>

            </div>

          </div>

        </div>

        {/* Footer */}

        <DialogFooter className="border-t bg-slate-50 px-8 py-6">

          <Button
            variant="outline"
            onClick={() =>
              onOpenChange(false)
            }
          >
            Cancel
          </Button>

          <Button
            variant="destructive"
            onClick={onConfirm}
          >
            <Trash2 className="mr-2 h-4 w-4" />

            Delete Certificate

          </Button>

        </DialogFooter>

      </DialogContent>

    </Dialog>
  );
};

export default DeleteCertificateDialog;