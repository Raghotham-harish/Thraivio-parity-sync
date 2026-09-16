import {
  Award,
  Pencil,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import type {
  AdminCertificate,
} from "@/types/admin-certificate";

import CertificateForm from "./CertificateForm";

interface Option {
  label: string;
  value: string;
}

interface EditCertificateDialogProps {
  open: boolean;

  certificate:
    | AdminCertificate
    | null;

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

const EditCertificateDialog = ({
  open,
  certificate,
  onOpenChange,
  students,
  mentors,
  programs,
  onSubmit,
}: EditCertificateDialogProps) => {
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
            
            bg-primary
            
            
            px-10
            py-10
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
              <Award className="h-4 w-4" />

              Certificate Management

            </div>

            <DialogHeader className="mt-6 space-y-3 text-left">

              <DialogTitle
                className="
                  flex
                  items-center
                  gap-3
                  text-4xl
                  font-bold
                  text-white
                "
              >
                <Pencil className="h-8 w-8" />

                Edit Certificate

              </DialogTitle>

              <DialogDescription
                className="
                  max-w-3xl
                  text-base
                  leading-8
                  text-blue-100
                "
              >
                Update certificate information,
                verification details, learner
                information, scores and issued
                credentials. All changes will
                be reflected immediately after
                saving.
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
                Edit Details
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
                Update Verification
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
                Keep History
              </span>

            </div>

          </div>

        </section>

        {/* Form */}

        <div className="p-8">

          <CertificateForm
            certificate={
              certificate
            }
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

export default EditCertificateDialog;