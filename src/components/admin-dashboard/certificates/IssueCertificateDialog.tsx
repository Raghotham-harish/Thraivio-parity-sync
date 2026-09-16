import {
  Award,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import CertificateForm from "./CertificateForm";

import type {
  AdminCertificate,
} from "@/types/admin-certificate";

interface Option {
  label: string;
  value: string;
}

interface IssueCertificateDialogProps {
  open: boolean;

  onOpenChange: (
    open: boolean
  ) => void;

  students: Option[];

  mentors: Option[];

  programs: Option[];

  onSubmit: (
    certificate: AdminCertificate
  ) => void;
}

const IssueCertificateDialog = ({
  open,
  onOpenChange,
  students,
  mentors,
  programs,
  onSubmit,
}: IssueCertificateDialogProps) => {
  return (
    <Dialog
      open={open}
      onOpenChange={
        onOpenChange
      }
    >
      <DialogContent
        className="
          max-h-[95vh]
          max-w-7xl
          overflow-y-auto
          rounded-2xl
          p-0
        "
      >
        {/* Hero */}

        <section
          className="
            relative
            overflow-hidden
            rounded-t-[32px]
            bg-gradient-to-r
            from-amber-500
            via-orange-500
            to-yellow-500
            px-10
            py-10
            text-white
          "
        >
          <div
            className="
              absolute
              -right-16
              -top-16
              h-72
              w-72
              rounded-full
              bg-card/10
              blur-3xl
            "
          />

          <div
            className="
              relative
              z-10
            "
          >
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
              <Award className="h-4 w-4" />

              Certificates Management

            </div>

            <DialogHeader className="mt-6 space-y-3 text-left">

              <DialogTitle
                className="
                  text-4xl
                  font-bold
                  text-white
                "
              >
                Issue New Certificate
              </DialogTitle>

              <DialogDescription
                className="
                  max-w-3xl
                  text-base
                  leading-8
                  text-amber-100
                "
              >
                Issue a professional,
                verifiable certificate for a
                completed program, event or
                mentoring session. Fill in all
                required details before issuing
                the credential.
              </DialogDescription>

            </DialogHeader>

            <div
              className="
                mt-8
                flex
                flex-wrap
                gap-3
              "
            >
              <span
                className="
                  rounded-full
                  bg-card/15
                  px-4
                  py-2
                  text-sm
                "
              >
                Secure Credential
              </span>

              <span
                className="
                  rounded-full
                  bg-card/15
                  px-4
                  py-2
                  text-sm
                "
              >
                QR Verification Ready
              </span>

              <span
                className="
                  rounded-full
                  bg-card/15
                  px-4
                  py-2
                  text-sm
                "
              >
                PDF Certificate
              </span>

            </div>

          </div>

        </section>

        {/* Form */}

        <div className="p-8">

          <CertificateForm
            students={students}
            mentors={mentors}
            programs={programs}
            onSubmit={(data) => {
              onSubmit(data);

              onOpenChange(false);
            }}
          />

        </div>

      </DialogContent>

    </Dialog>
  );
};

export default IssueCertificateDialog;