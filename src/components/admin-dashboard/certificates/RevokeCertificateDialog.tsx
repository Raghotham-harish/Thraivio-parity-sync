import {
  useState,
  useEffect,
} from "react";

import {
  ShieldOff,
  AlertTriangle,
  Award,
  Building2,
  Ban,
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

import { Label } from "@/components/ui/label";

import { Textarea } from "@/components/ui/textarea";

import type {
  AdminCertificate,
} from "@/types/admin-certificate";

interface RevokeCertificateDialogProps {
  open: boolean;

  certificate: AdminCertificate | null;

  onOpenChange: (
    open: boolean
  ) => void;

  onConfirm: (
    reason: string
  ) => void;
}

const RevokeCertificateDialog = ({
  open,
  certificate,
  onOpenChange,
  onConfirm,
}: RevokeCertificateDialogProps) => {
  const [reason, setReason] =
    useState("");

  useEffect(() => {
    if (!open) {
      setReason("");
    }
  }, [open]);

  if (!certificate) return null;

  return (
    <Dialog
      open={open}
      onOpenChange={
        onOpenChange
      }
    >
      <DialogContent
        className="
          max-w-3xl
          overflow-hidden
          rounded-2xl
          p-0
        "
      >
        {/* Hero */}

        <section
          className="
            relative
            overflow-hidden
            bg-gradient-to-r
            from-orange-600
            via-red-600
            to-rose-700
            p-8
            text-white
          "
        >
          <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-card/10 blur-3xl" />

          <div className="relative z-10">

            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-card/15
                px-4
                py-2
                text-sm
              "
            >
              <ShieldOff className="h-4 w-4" />

              Certificate Revocation

            </div>

            <DialogHeader className="mt-6 text-left">

              <DialogTitle className="text-4xl font-bold text-white">

                Revoke Certificate

              </DialogTitle>

              <DialogDescription
                className="
                  mt-4
                  max-w-2xl
                  text-base
                  leading-8
                  text-orange-100
                "
              >
                Revoking a certificate removes
                public verification and marks the
                credential as invalid.
              </DialogDescription>

            </DialogHeader>

          </div>

        </section>

        {/* Body */}

        <div className="space-y-6 p-8">

          <div className="rounded-2xl border bg-card p-6">

            <div className="flex gap-5">

              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-orange-100
                "
              >
                <Award className="h-8 w-8 text-[#B45309]" />
              </div>

              <div className="flex-1">

                <h3 className="text-2xl font-bold">
                  {certificate.title}
                </h3>

                <p className="mt-2 text-muted-foreground">
                  {certificate.studentName}
                </p>

                <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">

                  <Building2 className="h-4 w-4" />

                  {certificate.mentorName}

                </div>

              </div>

            </div>

          </div>

          {/* Reason */}

          <div className="space-y-3">

            <Label>
              Revocation Reason
            </Label>

            <Textarea
              rows={5}
              value={reason}
              onChange={(e) =>
                setReason(
                  e.target.value
                )
              }
              placeholder="Explain why this certificate is being revoked..."
              className="rounded-2xl resize-none"
            />

          </div>

          {/* Warning */}

          <div
            className="
              rounded-2xl
              border
              border-orange-200
              bg-orange-50
              p-6
            "
          >
            <div className="flex gap-4">

              <AlertTriangle className="mt-1 h-6 w-6 text-[#B45309]" />

              <div>

                <h3 className="text-lg font-bold text-orange-700">

                  What will happen?

                </h3>

                <ul className="mt-4 space-y-2 text-sm leading-7 text-orange-700">

                  <li>• Public verification will be disabled.</li>

                  <li>• QR verification will stop working.</li>

                  <li>• Credential status becomes Revoked.</li>

                  <li>• Student can no longer claim this credential.</li>

                  <li>• Admin logs will record this action.</li>

                </ul>

              </div>

            </div>

          </div>

        </div>

        {/* Footer */}

        <DialogFooter className="border-t bg-secondary px-8 py-6">

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
            disabled={
              reason.trim() === ""
            }
            onClick={() =>
              onConfirm(reason)
            }
          >
            <Ban className="mr-2 h-4 w-4" />

            Revoke Certificate

          </Button>

        </DialogFooter>

      </DialogContent>

    </Dialog>
  );
};

export default RevokeCertificateDialog;