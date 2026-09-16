import { memo } from "react";

import {
  Award,
  BadgeCheck,
  Building2,
  User2,
  MoreVertical,
  ShieldCheck,
  Eye,
  Download,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import type {
  AdminCertificate,
} from "@/types/admin-certificate";

interface CertificateListRowProps {
  certificate: AdminCertificate;

  onView: (
    certificate: AdminCertificate
  ) => void;

  onEdit: (
    certificate: AdminCertificate
  ) => void;

  onDelete: (
    certificate: AdminCertificate
  ) => void;

  onVerify: (
    certificate: AdminCertificate
  ) => void;

  onRevoke: (
    certificate: AdminCertificate
  ) => void;

  onDownload: (
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

const CertificateListRow = ({
  certificate,

  onView,
  onEdit,
  onDelete,
  onVerify,
  onRevoke,
  onDownload,
}: CertificateListRowProps) => {
  return (
    <article
      className="
        rounded-2xl
        border
        bg-card
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:shadow-xl
      "
    >
      <div
        className="
          flex
          flex-col
          gap-8

          2xl:flex-row
          2xl:items-start
          2xl:justify-between
        "
      >
        {/* Left */}

        <div className="flex-1">

          {/* Header */}

          <div className="flex items-start justify-between">

            <div className="flex items-center gap-5">

              <div
                className="
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-2xl
                  
                  bg-[#F59E0B]
                  
                "
              >
                <Award
                  className="
                    h-10
                    w-10
                    text-amber-600
                  "
                />
              </div>

              <div>

                <h2
                  className="
                    text-2xl
                    font-bold
                  "
                >
                  {certificate.title}
                </h2>

                <div
                  className="
                    mt-3
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
                      bg-secondary
                      px-3
                      py-1
                      text-xs
                      font-medium
                    "
                  >
                    {certificate.category}
                  </span>

                </div>

              </div>

            </div>

            <Button
              variant="ghost"
              size="icon"
              className="rounded-xl"
            >
              <MoreVertical
                className="
                  h-5
                  w-5
                "
              />
            </Button>

          </div>

          {/* Student + Mentor */}

          <div
            className="
              mt-8
              grid
              gap-5
              lg:grid-cols-2
            "
          >
            {/* Student */}

            <div
              className="
                rounded-2xl
                border
                bg-secondary
                p-5
              "
            >
              <div className="flex items-center gap-4">

                <img
                  src={certificate.studentImage}
                  alt={certificate.studentName}
                  className="
                    h-16
                    w-16
                    rounded-2xl
                    object-cover
                  "
                />

                <div>

                  <div className="flex items-center gap-2">

                    <User2 className="h-4 w-4 text-muted-foreground" />

                    <span className="text-xs text-muted-foreground">
                      Student
                    </span>

                  </div>

                  <h3 className="mt-2 font-bold">
                    {certificate.studentName}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {certificate.studentEmail}
                  </p>

                </div>

              </div>

            </div>

            {/* Mentor */}

            <div
              className="
                rounded-2xl
                border
                p-5
              "
            >
              <div className="flex items-center gap-4">

                <img
                  src={certificate.mentorImage}
                  alt={certificate.mentorName}
                  className="
                    h-16
                    w-16
                    rounded-2xl
                    object-cover
                  "
                />

                <div>

                  <div className="flex items-center gap-2">

                    <Building2 className="h-4 w-4 text-muted-foreground" />

                    <span className="text-xs text-muted-foreground">
                      Mentor
                    </span>

                  </div>

                  <h3 className="mt-2 font-bold">
                    {certificate.mentorName}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {certificate.mentorRole}
                  </p>

                  <p className="text-xs text-muted-foreground">
                    {certificate.mentorCompany}
                  </p>

                </div>

              </div>

            </div>

          </div>
                    {/* Certificate Details */}

          <div
            className="
              mt-8

              grid

              gap-5

              md:grid-cols-2
              xl:grid-cols-4
            "
          >
            {/* Certificate Number */}

            <div
              className="
                rounded-2xl
                border
                bg-secondary
                p-5
              "
            >
              <p className="text-xs text-muted-foreground">
                Certificate Number
              </p>

              <p
                className="
                  mt-2
                  break-all
                  text-sm
                  font-bold
                "
              >
                {certificate.certificateNumber}
              </p>
            </div>

            {/* Credential */}

            <div
              className="
                rounded-2xl
                border
                bg-secondary
                p-5
              "
            >
              <p className="text-xs text-muted-foreground">
                Credential ID
              </p>

              <p
                className="
                  mt-2
                  break-all
                  text-sm
                  font-bold
                "
              >
                {certificate.credentialId}
              </p>
            </div>

            {/* Issue Date */}

            <div
              className="
                rounded-2xl
                border
                bg-secondary
                p-5
              "
            >
              <p className="text-xs text-muted-foreground">
                Issue Date
              </p>

              <p
                className="
                  mt-2
                  font-semibold
                "
              >
                {certificate.issueDate}
              </p>
            </div>

            {/* Score */}

            <div
              className="
                rounded-2xl
                border
                bg-secondary
                p-5
              "
            >
              <p className="text-xs text-muted-foreground">
                Score
              </p>

              <p
                className="
                  mt-2
                  text-lg
                  font-bold
                  text-[#0F8F65]
                "
              >
                {certificate.score ?? "--"}
              </p>
            </div>

          </div>

          {/* Skills */}

          <div className="mt-8">

            <h4
              className="
                text-sm
                font-semibold
              "
            >
              Skills Earned
            </h4>

            <div
              className="
                mt-4
                flex
                flex-wrap
                gap-2
              "
            >
              {certificate.skills.map(
                (skill) => (
                  <span
                    key={skill}
                    className="
                      rounded-full
                      bg-blue-50
                      px-3
                      py-1
                      text-xs
                      font-medium
                      text-[#2563EB]
                    "
                  >
                    {skill}
                  </span>
                )
              )}
            </div>

          </div>

        </div>

        {/* Right Sidebar */}

        <aside
          className="
            w-full

            xl:w-[330px]

            shrink-0
          "
        >
          {/* Analytics */}

          <div
            className="
              rounded-2xl
              border
              bg-secondary
              p-6
            "
          >
            <h3
              className="
                text-lg
                font-bold
              "
            >
              Analytics
            </h3>

            <div
              className="
                mt-6
                grid
                grid-cols-2
                gap-4
              "
            >
              <div
                className="
                  rounded-2xl
                  bg-card
                  p-5
                  text-center
                "
              >
                <p className="text-3xl font-bold">
                  {certificate.viewCount}
                </p>

                <p className="mt-2 text-xs text-muted-foreground">
                  Views
                </p>
              </div>

              <div
                className="
                  rounded-2xl
                  bg-card
                  p-5
                  text-center
                "
              >
                <p className="text-3xl font-bold">
                  {certificate.downloadCount}
                </p>

                <p className="mt-2 text-xs text-muted-foreground">
                  Downloads
                </p>
              </div>

            </div>

          </div>
                    {/* Verification */}

          <div
            className="
              mt-6

              rounded-2xl

              border

              
              bg-primary
              via-white
              

              p-6
            "
          >
            <div
              className="
                flex
                items-center
                justify-between
              "
            >
              <div>

                <div className="flex items-center gap-2">

                  <ShieldCheck
                    className="
                      h-5
                      w-5
                      text-[#0F8F65]
                    "
                  />

                  <span className="font-semibold">
                    Verification
                  </span>

                </div>

                <p
                  className="
                    mt-2
                    text-sm
                    text-muted-foreground
                  "
                >
                  Public QR verification enabled
                </p>

              </div>

              <div
                className="
                  flex
                  h-24
                  w-24
                  items-center
                  justify-center
                  rounded-2xl
                  border-2
                  border-dashed
                  bg-card
                  text-xs
                  font-semibold
                "
              >
                QR
              </div>

            </div>

          </div>

          {/* Actions */}

          <div
            className="
              mt-6

              grid

              gap-3
            "
          >
            <Button
              variant="outline"
              onClick={() =>
                onView(
                  certificate
                )
              }
            >
              <Eye className="mr-2 h-4 w-4" />

              View Certificate

            </Button>

            <Button
              variant="outline"
              onClick={() =>
                onEdit(
                  certificate
                )
              }
            >
              Edit Certificate
            </Button>

            <Button
              onClick={() =>
                onVerify(
                  certificate
                )
              }
            >
              <BadgeCheck className="mr-2 h-4 w-4" />

              Verify Certificate

            </Button>

            <Button
              variant="secondary"
              onClick={() =>
                onDownload(
                  certificate
                )
              }
            >
              <Download className="mr-2 h-4 w-4" />

              Download PDF

            </Button>

            <Button
              variant="destructive"
              onClick={() =>
                onRevoke(
                  certificate
                )
              }
            >
              Revoke Certificate
            </Button>

            <Button
              variant="destructive"
              onClick={() =>
                onDelete(
                  certificate
                )
              }
            >
              Delete Certificate
            </Button>

          </div>

        </aside>

      </div>

    </article>

  );
};

export default memo(
  CertificateListRow
);