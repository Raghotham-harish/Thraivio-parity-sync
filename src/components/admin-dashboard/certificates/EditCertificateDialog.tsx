import {
  Pencil,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

import { DialogHeaderBand } from "@/components/admin-dashboard/shared/DialogHeaderBand";
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

        <DialogHeaderBand
          icon={Pencil}
          title="Edit Certificate"
          description="Update certificate information, verification details, learner information, scores and issued credentials. All changes will be reflected immediately after saving."
        />

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