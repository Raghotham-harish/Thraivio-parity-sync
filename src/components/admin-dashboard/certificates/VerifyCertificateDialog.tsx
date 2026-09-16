import {
  BadgeCheck,
  Award,
  Building2,
  CalendarDays,
  ShieldCheck,
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

import { Button } from "@/components/ui/button";

import type {
  AdminCertificate,
} from "@/types/admin-certificate";

interface VerifyCertificateDialogProps {
  open: boolean;

  certificate: AdminCertificate | null;

  onOpenChange: (
    open: boolean
  ) => void;

  onConfirm: () => void;
}

const VerifyCertificateDialog = ({
  open,
  certificate,
  onOpenChange,
  onConfirm,
}: VerifyCertificateDialogProps) => {
  if (!certificate) return null;

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
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
            
            bg-[#10B981]
            
            
            px-8
            py-8
            text-white
          "
        >
          <div
            className="
              absolute
              -right-20
              -top-20
              h-72
              w-72
              rounded-full
              bg-card/10
              blur-3xl
            "
          />

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
                backdrop-blur
              "
            >
              <ShieldCheck className="h-4 w-4" />

              Certificate Verification

            </div>

            <DialogHeader className="mt-6 text-left">

              <DialogTitle
                className="
                  text-4xl
                  font-bold
                  text-white
                "
              >
                Verify Certificate
              </DialogTitle>

              <DialogDescription
                className="
                  mt-4
                  max-w-2xl
                  text-base
                  leading-8
                  text-green-100
                "
              >
                Verify this certificate to make it
                publicly trusted and accessible
                through credential verification.
              </DialogDescription>

            </DialogHeader>

          </div>

        </section>

        {/* Body */}

        <div className="space-y-6 p-8">

          {/* Certificate */}

          <div className="rounded-2xl border bg-card p-6">

            <div className="flex items-start gap-5">

              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#ECFDF5]
                "
              >
                <Award className="h-8 w-8 text-[#0F8F65]" />
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

              <BadgeCheck className="h-10 w-10 text-[#0F8F65]" />

            </div>

          </div>

          {/* Details */}

          <div className="grid gap-5 md:grid-cols-2">

            <div className="rounded-2xl border p-5">

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

            <div className="rounded-2xl border p-5">

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

          {/* Verification */}

          <div
            className="
              rounded-2xl
              border
              border-green-200
              bg-green-50
              p-6
            "
          >
            <div className="flex gap-4">

              <CheckCircle2 className="mt-1 h-7 w-7 text-[#0F8F65]" />

              <div>

                <h3 className="text-lg font-bold text-[#065F46]">
                  Ready for Verification
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#065F46]">

                  • Credential ID is valid

                  <br />

                  • Certificate details are complete

                  <br />

                  • Student information verified

                  <br />

                  • Mentor information verified

                  <br />

                  • Verification URL will become active

                  <br />

                  • Public verification will be enabled

                </p>

              </div>

            </div>

          </div>

          {/* Footer Info */}

          <div className="grid gap-4 md:grid-cols-2">

            <div className="rounded-2xl border p-5">

              <div className="flex items-center gap-2">

                <CalendarDays className="h-5 w-5 text-[#0F8F65]" />

                <span className="font-semibold">

                  Issue Date

                </span>

              </div>

              <p className="mt-3">

                {certificate.issueDate}

              </p>

            </div>

            <div className="rounded-2xl border p-5">

              <div className="flex items-center gap-2">

                <BadgeCheck className="h-5 w-5 text-[#0F8F65]" />

                <span className="font-semibold">

                  Current Status

                </span>

              </div>

              <p className="mt-3 capitalize">

                {certificate.verificationStatus}

              </p>

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
            className="
              bg-green-600
              hover:bg-green-700
            "
            onClick={onConfirm}
          >
            <ShieldCheck className="mr-2 h-4 w-4" />

            Verify Certificate

          </Button>

        </DialogFooter>

      </DialogContent>

    </Dialog>
  );
};

export default VerifyCertificateDialog;