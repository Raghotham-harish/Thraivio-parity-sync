import {
  useEffect,
  useState,
} from "react";

import {
  RotateCcw,
  Award,
  CalendarDays,
  BadgeCheck,
  RefreshCcw,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";

import type {
  AdminCertificate,
} from "@/types/admin-certificate";

interface ReissueCertificateDialogProps {
  open: boolean;

  certificate: AdminCertificate | null;

  onOpenChange: (
    open: boolean
  ) => void;

  onConfirm: (
    data: {
      credentialId: string;
      certificateNumber: string;
      issueDate: string;
    }
  ) => void;
}

const ReissueCertificateDialog = ({
  open,
  certificate,
  onOpenChange,
  onConfirm,
}: ReissueCertificateDialogProps) => {
  const [
    credentialId,
    setCredentialId,
  ] = useState("");

  const [
    certificateNumber,
    setCertificateNumber,
  ] = useState("");

  const [
    issueDate,
    setIssueDate,
  ] = useState("");

  useEffect(() => {
    if (certificate) {
      setCredentialId(
        certificate.credentialId
      );

      setCertificateNumber(
        certificate.certificateNumber
      );

      setIssueDate(
        certificate.issueDate
      );
    }
  }, [certificate]);

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
            from-blue-600
            via-indigo-600
            to-violet-700
            p-8
            text-white
          "
        >
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-card/10 blur-3xl" />

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
              <RotateCcw className="h-4 w-4" />

              Certificate Reissue

            </div>

            <DialogHeader className="mt-6 text-left">

              <DialogTitle className="text-4xl font-bold text-white">

                Reissue Certificate

              </DialogTitle>

              <DialogDescription
                className="
                  mt-4
                  max-w-2xl
                  text-base
                  leading-8
                  text-blue-100
                "
              >
                Generate a fresh credential
                while preserving the learner's
                achievement history.
              </DialogDescription>

            </DialogHeader>

          </div>

        </section>

        {/* Body */}

        <div className="space-y-8 p-8">

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
                  bg-[#EFF6FF]
                "
              >
                <Award className="h-8 w-8 text-primary" />
              </div>

              <div>

                <h3 className="text-2xl font-bold">

                  {certificate.title}

                </h3>

                <p className="mt-2 text-muted-foreground">

                  {certificate.studentName}

                </p>

              </div>

            </div>

          </div>

          <div className="grid gap-6 md:grid-cols-2">

            <div className="space-y-2">

              <Label>
                Credential ID
              </Label>

              <Input
                value={credentialId}
                onChange={(e) =>
                  setCredentialId(
                    e.target.value
                  )
                }
                className="h-12 rounded-2xl"
              />

            </div>

            <div className="space-y-2">

              <Label>
                Certificate Number
              </Label>

              <Input
                value={
                  certificateNumber
                }
                onChange={(e) =>
                  setCertificateNumber(
                    e.target.value
                  )
                }
                className="h-12 rounded-2xl"
              />

            </div>

            <div className="space-y-2">

              <Label>
                New Issue Date
              </Label>

              <div className="relative">

                <CalendarDays
                  className="
                    absolute
                    left-4
                    top-1/2
                    h-4
                    w-4
                    -translate-y-1/2
                    text-muted-foreground
                  "
                />

                <Input
                  type="date"
                  value={issueDate}
                  onChange={(e) =>
                    setIssueDate(
                      e.target.value
                    )
                  }
                  className="h-12 rounded-2xl pl-11"
                />

              </div>

            </div>

            <div
              className="
                rounded-2xl
                border
                bg-blue-50
                p-5
              "
            >
              <div className="flex items-center gap-3">

                <BadgeCheck className="h-6 w-6 text-primary" />

                <div>

                  <h4 className="font-semibold">

                    Verification

                  </h4>

                  <p className="text-sm text-muted-foreground">

                    A new verification record
                    will automatically be generated.

                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Summary */}

          <div
            className="
              rounded-2xl
              border
              border-blue-200
              bg-blue-50
              p-6
            "
          >
            <div className="flex gap-4">

              <RefreshCcw className="mt-1 h-6 w-6 text-primary" />

              <div>

                <h3 className="text-lg font-bold text-[#2563EB]">

                  Reissue Summary

                </h3>

                <ul className="mt-4 space-y-2 text-sm leading-7 text-[#2563EB]">

                  <li>
                    • New credential becomes active.
                  </li>

                  <li>
                    • Previous revoked credential remains in audit history.
                  </li>

                  <li>
                    • Student can download the new certificate.
                  </li>

                  <li>
                    • Verification page updates automatically.
                  </li>

                  <li>
                    • Certificate history remains preserved.
                  </li>

                </ul>

              </div>

            </div>

          </div>

        </div>

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
            onClick={() =>
              onConfirm({
                credentialId,
                certificateNumber,
                issueDate,
              })
            }
          >
            <RotateCcw className="mr-2 h-4 w-4" />

            Reissue Certificate

          </Button>

        </DialogFooter>

      </DialogContent>

    </Dialog>
  );
};

export default ReissueCertificateDialog;