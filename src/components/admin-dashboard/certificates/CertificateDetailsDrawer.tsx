import { memo } from "react";

import {
  Award,
  BadgeCheck,
  Building2,
  CalendarDays,
  Download,
  Eye,
  ShieldCheck,
  User2,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
} from "@/components/ui/sheet";

import type {
  AdminCertificate,
} from "@/types/admin-certificate";

interface CertificateDetailsDrawerProps {
  open: boolean;

  certificate: AdminCertificate | null;

  onClose: () => void;

  onDownload: (
    certificate: AdminCertificate
  ) => void;

  onVerify: (
    certificate: AdminCertificate
  ) => void;

  onEdit: (
    certificate: AdminCertificate
  ) => void;
}

const statusStyles = {
  issued:
    "bg-[#ECFDF5] text-[#065F46]",

  pending:
    "bg-[#FFFBEB] text-[#B45309]",

  revoked:
    "bg-[#FFDAD6] text-[#BA1A1A]",

  expired:
    "bg-secondary text-foreground",
};

const verificationStyles = {
  verified:
    "bg-[#EFF6FF] text-[#2563EB]",

  unverified:
    "bg-orange-100 text-orange-700",
};

const CertificateDetailsDrawer = ({
  open,
  certificate,
  onClose,
  onDownload,
  onVerify,
  onEdit,
}: CertificateDetailsDrawerProps) => {
  if (!certificate) return null;

  return (
    <Sheet
      open={open}
      onOpenChange={onClose}
    >
      <SheetContent
        side="right"
        className="
          w-full

          sm:max-w-3xl

          overflow-y-auto

          p-0
        "
      >
        {/* Hero */}

        <section
          className="
            relative

            overflow-hidden

            
            bg-[#F59E0B]
            
            

            p-8

            text-white
          "
        >
          <div
            className="
              absolute

              -right-20
              -top-20

              h-64
              w-64

              rounded-full

              bg-card/10

              blur-3xl
            "
          />

          <div className="relative z-10">

            <div className="flex items-start justify-between">

              <div>

                <div
                  className="
                    inline-flex
                    items-center
                    gap-2

                    rounded-full

                    bg-card/10

                    px-4
                    py-2

                    text-sm

                    backdrop-blur
                  "
                >
                  <Award className="h-4 w-4" />

                  Certificate Details

                </div>

                <h2
                  className="
                    mt-6

                    text-4xl

                    font-bold
                  "
                >
                  {certificate.title}
                </h2>

                <div
                  className="
                    mt-5

                    flex
                    flex-wrap

                    gap-2
                  "
                >
                  <span
                    className={`
                      rounded-full

                      px-3
                      py-1

                      text-xs

                      font-semibold

                      ${
                        statusStyles[
                          certificate.status
                        ]
                      }
                    `}
                  >
                    {certificate.status}
                  </span>

                  <span
                    className={`
                      rounded-full

                      px-3
                      py-1

                      text-xs

                      font-semibold

                      ${
                        verificationStyles[
                          certificate
                            .verificationStatus
                        ]
                      }
                    `}
                  >
                    {
                      certificate.verificationStatus
                    }
                  </span>

                  <span
                    className="
                      rounded-full

                      bg-card/15

                      px-3
                      py-1

                      text-xs
                    "
                  >
                    {certificate.category}
                  </span>

                </div>

              </div>

              <Button
                size="icon"
                variant="secondary"
                onClick={onClose}
              >
                <X className="h-5 w-5" />
              </Button>

            </div>

          </div>

        </section>
                {/* Content */}

        <div className="space-y-8 p-8">

          {/* Student & Mentor */}

          <section className="grid gap-6 lg:grid-cols-2">

            {/* Student */}

            <div
              className="
                rounded-2xl
                border
                bg-card
                p-6
                shadow-sm
              "
            >
              <div className="flex items-center gap-4">

                <img
                  src={certificate.studentImage}
                  alt={certificate.studentName}
                  className="
                    h-20
                    w-20
                    rounded-2xl
                    object-cover
                    border
                  "
                />

                <div className="flex-1">

                  <div className="inline-flex items-center gap-2 rounded-full bg-[#EFF6FF] px-3 py-1 text-xs font-semibold text-[#2563EB]">

                    <User2 className="h-3.5 w-3.5" />

                    Student

                  </div>

                  <h3 className="mt-3 text-2xl font-bold">
                    {certificate.studentName}
                  </h3>

                  <p className="mt-1 text-muted-foreground">
                    {certificate.studentEmail}
                  </p>

                  <p className="mt-1 text-sm text-muted-foreground">
                    ID :
                    {" "}
                    {certificate.studentId}
                  </p>

                </div>

              </div>

            </div>

            {/* Mentor */}

            <div
              className="
                rounded-2xl
                border
                bg-card
                p-6
                shadow-sm
              "
            >
              <div className="flex items-center gap-4">

                <img
                  src={certificate.mentorImage}
                  alt={certificate.mentorName}
                  className="
                    h-20
                    w-20
                    rounded-2xl
                    object-cover
                    border
                  "
                />

                <div className="flex-1">

                  <div className="inline-flex items-center gap-2 rounded-full bg-[#ECFDF5] px-3 py-1 text-xs font-semibold text-[#065F46]">

                    <BadgeCheck className="h-3.5 w-3.5" />

                    Mentor

                  </div>

                  <h3 className="mt-3 text-2xl font-bold">
                    {certificate.mentorName}
                  </h3>

                  <div className="mt-2 flex items-center gap-2 text-muted-foreground">

                    <Building2 className="h-4 w-4" />

                    {certificate.mentorCompany}

                  </div>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {certificate.mentorRole}
                  </p>

                </div>

              </div>

            </div>

          </section>

          {/* Certificate Information */}

          <section
            className="
              rounded-2xl
              border
              bg-card
              p-6
              shadow-sm
            "
          >
            <div className="flex items-center justify-between">

              <div>

                <h3 className="text-2xl font-bold">
                  Certificate Information
                </h3>

                <p className="mt-1 text-muted-foreground">
                  Complete certificate metadata and identifiers.
                </p>

              </div>

              <Award className="h-10 w-10 text-amber-500" />

            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">

              <div>

                <p className="text-sm text-muted-foreground">
                  Certificate Number
                </p>

                <p className="mt-2 font-semibold">
                  {certificate.certificateNumber}
                </p>

              </div>

              <div>

                <p className="text-sm text-muted-foreground">
                  Credential ID
                </p>

                <p className="mt-2 font-mono text-sm font-semibold break-all">
                  {certificate.credentialId}
                </p>

              </div>

              <div>

                <p className="text-sm text-muted-foreground">
                  Issue Date
                </p>

                <div className="mt-2 flex items-center gap-2">

                  <CalendarDays className="h-4 w-4 text-amber-500" />

                  <span className="font-semibold">
                    {certificate.issueDate}
                  </span>

                </div>

              </div>

              <div>

                <p className="text-sm text-muted-foreground">
                  Completion Date
                </p>

                <div className="mt-2 flex items-center gap-2">

                  <CalendarDays className="h-4 w-4 text-[#0F8F65]" />

                  <span className="font-semibold">
                    {certificate.completionDate}
                  </span>

                </div>

              </div>

              <div>

                <p className="text-sm text-muted-foreground">
                  Grade
                </p>

                <p className="mt-2 font-semibold">
                  {certificate.grade}
                </p>

              </div>

              <div>

                <p className="text-sm text-muted-foreground">
                  Score
                </p>

                <p className="mt-2 text-lg font-bold text-[#0F8F65]">
                  {certificate.score}
                </p>

              </div>

            </div>

          </section>
                    {/* Skills */}

          <section
            className="
              rounded-2xl
              border
              bg-card
              p-6
              shadow-sm
            "
          >
            <div className="flex items-center justify-between">

              <div>

                <h3 className="text-2xl font-bold">
                  Skills Earned
                </h3>

                <p className="mt-1 text-muted-foreground">
                  Competencies achieved after successful completion.
                </p>

              </div>

              <BadgeCheck className="h-8 w-8 text-[#0F8F65]" />

            </div>

            <div className="mt-6 flex flex-wrap gap-3">

              {certificate.skills.map((skill) => (
                <span
                  key={skill}
                  className="
                    rounded-full
                    bg-blue-50
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-[#2563EB]
                  "
                >
                  {skill}
                </span>
              ))}

            </div>

          </section>

          {/* Program Details */}

          <section
            className="
              rounded-2xl
              border
              bg-card
              p-6
              shadow-sm
            "
          >
            <div className="flex items-center justify-between">

              <div>

                <h3 className="text-2xl font-bold">
                  Learning Details
                </h3>

                <p className="mt-1 text-muted-foreground">
                  Program, event or mentoring information.
                </p>

              </div>

              <Eye className="h-8 w-8 text-primary" />

            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">

              <div>

                <p className="text-sm text-muted-foreground">
                  Category
                </p>

                <p className="mt-2 font-semibold">
                  {certificate.category}
                </p>

              </div>

              <div>

                <p className="text-sm text-muted-foreground">
                  Program / Event
                </p>

                <p className="mt-2 font-semibold">
                  {certificate.programTitle}
                </p>

              </div>

              <div>

                <p className="text-sm text-muted-foreground">
                  Duration
                </p>

                <p className="mt-2 font-semibold">
                  {certificate.duration}
                </p>

              </div>

              <div>

                <p className="text-sm text-muted-foreground">
                  Completion Status
                </p>

                <p className="mt-2 font-semibold text-[#0F8F65]">
                  Successfully Completed
                </p>

              </div>

            </div>

          </section>

          {/* Verification */}

          <section
            className="
              rounded-2xl
              border
              bg-card
              p-6
              shadow-sm
            "
          >
            <div className="flex items-center justify-between">

              <div>

                <h3 className="text-2xl font-bold">
                  Verification
                </h3>

                <p className="mt-1 text-muted-foreground">
                  Credential verification details.
                </p>

              </div>

              <ShieldCheck className="h-8 w-8 text-[#0F8F65]" />

            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">

              <div
                className="
                  rounded-2xl
                  border
                  bg-secondary
                  p-5
                "
              >
                <p className="text-sm text-muted-foreground">
                  Verification Status
                </p>

                <div className="mt-3 flex items-center gap-2">

                  <ShieldCheck className="h-5 w-5 text-[#0F8F65]" />

                  <span className="font-semibold">
                    {certificate.verificationStatus}
                  </span>

                </div>

                <p className="mt-5 text-sm text-muted-foreground">
                  Verification URL
                </p>

                <p className="mt-2 break-all text-sm font-medium text-primary">
                  {certificate.verificationUrl}
                </p>

              </div>

              <div
                className="
                  flex
                  flex-col
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-dashed
                  bg-secondary
                  p-6
                "
              >
                <div
                  className="
                    flex
                    h-40
                    w-40
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    bg-card
                    text-sm
                    text-muted-foreground
                  "
                >
                  QR CODE
                </div>

                <p className="mt-4 text-sm text-muted-foreground">
                  Scan to verify this certificate
                </p>

              </div>

            </div>

          </section>

          {/* Statistics */}

          <section
            className="
              grid
              gap-6
              md:grid-cols-3
            "
          >
            <div
              className="
                rounded-2xl
                border
                bg-card
                p-6
                shadow-sm
              "
            >
              <p className="text-sm text-muted-foreground">
                Downloads
              </p>

              <h3 className="mt-3 text-4xl font-bold">
                {certificate.downloadCount}
              </h3>

            </div>

            <div
              className="
                rounded-2xl
                border
                bg-card
                p-6
                shadow-sm
              "
            >
              <p className="text-sm text-muted-foreground">
                Views
              </p>

              <h3 className="mt-3 text-4xl font-bold">
                {certificate.viewCount}
              </h3>

            </div>

            <div
              className="
                rounded-2xl
                border
                bg-card
                p-6
                shadow-sm
              "
            >
              <p className="text-sm text-muted-foreground">
                Last Updated
              </p>

              <h3 className="mt-3 text-lg font-bold">
                {certificate.updatedAt}
              </h3>

            </div>

          </section>
                    {/* Quick Actions */}

          <section
            className="
              rounded-2xl
              border
              
              bg-[#F59E0B]
              
              
              p-8
              text-white
              shadow-lg
            "
          >
            <div
              className="
                flex
                flex-col
                gap-8

                lg:flex-row
                lg:items-center
                lg:justify-between
              "
            >
              <div>

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

                  Certificate Actions

                </div>

                <h3 className="mt-5 text-3xl font-bold">
                  Manage Certificate
                </h3>

                <p
                  className="
                    mt-4
                    max-w-2xl
                    text-amber-100
                    leading-8
                  "
                >
                  Verify this credential, update
                  certificate information or
                  download a printable copy directly
                  from the admin dashboard.
                </p>

              </div>

              <div
                className="
                  flex
                  flex-wrap
                  gap-3
                "
              >
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() =>
                    onVerify(certificate)
                  }
                  className="
                    rounded-2xl
                  "
                >
                  <ShieldCheck className="mr-2 h-5 w-5" />

                  Verify

                </Button>

                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() =>
                    onDownload(
                      certificate
                    )
                  }
                  className="
                    rounded-2xl
                  "
                >
                  <Download className="mr-2 h-5 w-5" />

                  Download

                </Button>

                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() =>
                    onEdit(
                      certificate
                    )
                  }
                  className="
                    rounded-2xl
                  "
                >
                  Edit

                </Button>

              </div>

            </div>

          </section>

        </div>

      </SheetContent>

    </Sheet>
  );
};

export default memo(
  CertificateDetailsDrawer
);