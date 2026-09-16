import { memo } from "react";

import {
  Award,
  BadgeCheck,
  CalendarDays,
  Building2,
  User2,
  Eye,
  Download,
  ShieldCheck,
  MoreVertical,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import type {
  AdminCertificate,
} from "@/types/admin-certificate";

interface CertificateGridCardProps {
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

const CertificateGridCard = ({
  certificate,

  onView,
  onEdit,
  onDelete,
  onVerify,
  onRevoke,
  onDownload,
}: CertificateGridCardProps) => {
  return (
    <article
      className="
        group
        relative
        overflow-hidden

        rounded-2xl

        border

        bg-card

        shadow-sm

        transition-all
        duration-300

        hover:-translate-y-1
        hover:shadow-2xl
      "
    >
      {/* Top Gradient */}

      <div
        className="
          h-2

          bg-gradient-to-r
          bg-primary
          
          
        "
      />

      {/* Header */}

      <div className="p-6">

        <div
          className="
            flex
            items-start
            justify-between

            gap-4
          "
        >
          {/* Left */}

          <div
            className="
              flex
              items-center

              gap-4
            "
          >
            <div
              className="
                flex
                h-16
                w-16

                items-center
                justify-center

                rounded-2xl

                bg-gradient-to-br
                bg-primary
                
              "
            >
              <Award
                className="
                  h-8
                  w-8

                  text-amber-600
                "
              />
            </div>

            <div>

              <h3
                className="
                  line-clamp-2

                  text-lg
                  font-bold
                "
              >
                {certificate.title}
              </h3>

              <div
                className="
                  mt-2

                  flex
                  flex-wrap

                  items-center

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
                  {certificate.verificationStatus}
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

          {/* Right */}

          <Button
            size="icon"
            variant="ghost"
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
                {/* Student */}

        <div
          className="
            mt-7

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
                h-14
                w-14

                rounded-2xl

                object-cover

                border
              "
            />

            <div className="flex-1">

              <div className="flex items-center gap-2">

                <User2 className="h-4 w-4 text-muted-foreground" />

                <span className="text-xs font-medium text-muted-foreground">

                  Student

                </span>

              </div>

              <h4 className="mt-1 font-bold">

                {certificate.studentName}

              </h4>

              <p className="text-sm text-muted-foreground">

                {certificate.studentEmail}

              </p>

            </div>

          </div>

        </div>

        {/* Mentor */}

        <div
          className="
            mt-5

            rounded-2xl

            border

            bg-card

            p-5
          "
        >
          <div className="flex items-center gap-4">

            <img
              src={certificate.mentorImage}
              alt={certificate.mentorName}
              className="
                h-14
                w-14

                rounded-2xl

                object-cover

                border
              "
            />

            <div className="flex-1">

              <div className="flex items-center gap-2">

                <Building2 className="h-4 w-4 text-muted-foreground" />

                <span className="text-xs font-medium text-muted-foreground">

                  Mentor

                </span>

              </div>

              <h4 className="mt-1 font-bold">

                {certificate.mentorName}

              </h4>

              <p className="text-sm text-muted-foreground">

                {certificate.mentorRole}

              </p>

              <p className="text-xs text-muted-foreground">

                {certificate.mentorCompany}

              </p>

            </div>

          </div>

        </div>

        {/* Information */}

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

              bg-secondary

              p-4
            "
          >
            <p className="text-xs text-muted-foreground">

              Certificate No.

            </p>

            <p className="mt-2 text-sm font-bold">

              {certificate.certificateNumber}

            </p>

          </div>

          <div
            className="
              rounded-2xl

              bg-secondary

              p-4
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

          <div
            className="
              rounded-2xl

              bg-secondary

              p-4
            "
          >
            <div className="flex items-center gap-2">

              <CalendarDays className="h-4 w-4 text-muted-foreground" />

              <span className="text-xs text-muted-foreground">

                Issue Date

              </span>

            </div>

            <p className="mt-2 text-sm font-semibold">

              {certificate.issueDate}

            </p>

          </div>

          <div
            className="
              rounded-2xl

              bg-secondary

              p-4
            "
          >
            <div className="flex items-center gap-2">

              <BadgeCheck className="h-4 w-4 text-[#0F8F65]" />

              <span className="text-xs text-muted-foreground">

                Score

              </span>

            </div>

            <p
              className="
                mt-2

                text-sm

                font-bold

                text-[#0F8F65]
              "
            >
              {certificate.score ?? "--"}

            </p>

          </div>

        </div>

        {/* Skills */}

        <div className="mt-6">

          <p className="mb-3 text-sm font-semibold">

            Skills Earned

          </p>

          <div className="flex flex-wrap gap-2">

            {certificate.skills
              .slice(0, 5)
              .map((skill) => (
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
              ))}

          </div>

        </div>
                {/* Analytics */}

        <div
          className="
            mt-7

            grid

            grid-cols-2

            gap-4
          "
        >
          <div
            className="
              rounded-2xl

              border

              bg-card

              p-4

              text-center
            "
          >
            <Eye
              className="
                mx-auto

                h-5
                w-5

                text-primary
              "
            />

            <p
              className="
                mt-2

                text-2xl

                font-bold
              "
            >
              {certificate.viewCount}
            </p>

            <p
              className="
                mt-1

                text-xs

                text-muted-foreground
              "
            >
              Views
            </p>

          </div>

          <div
            className="
              rounded-2xl

              border

              bg-card

              p-4

              text-center
            "
          >
            <Download
              className="
                mx-auto

                h-5
                w-5

                text-[#0F8F65]
              "
            />

            <p
              className="
                mt-2

                text-2xl

                font-bold
              "
            >
              {certificate.downloadCount}
            </p>

            <p
              className="
                mt-1

                text-xs

                text-muted-foreground
              "
            >
              Downloads
            </p>

          </div>

        </div>

        {/* QR Verification */}

        <div
          className="
            mt-6

            rounded-2xl

            border

            bg-gradient-to-r
            bg-primary
            via-white
            

            p-5
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

              <div
                className="
                  flex

                  items-center

                  gap-2
                "
              >
                <ShieldCheck
                  className="
                    h-5
                    w-5

                    text-[#0F8F65]
                  "
                />

                <span
                  className="
                    font-semibold
                  "
                >
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
                Public QR verification available
              </p>

            </div>

            <div
              className="
                flex

                h-20
                w-20

                items-center
                justify-center

                rounded-2xl

                border-2
                border-dashed

                bg-card

                text-xs

                font-medium
              "
            >
              QR
            </div>

          </div>

        </div>

        {/* Footer */}

        <div
          className="
            mt-7

            border-t

            pt-6
          "
        >
          <div
            className="
              grid

              grid-cols-2

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
              <Eye
                className="
                  mr-2

                  h-4
                  w-4
                "
              />

              View
            </Button>

            <Button
              variant="outline"
              onClick={() =>
                onEdit(
                  certificate
                )
              }
            >
              Edit
            </Button>

            <Button
              onClick={() =>
                onVerify(
                  certificate
                )
              }
            >
              Verify
            </Button>

            <Button
              variant="secondary"
              onClick={() =>
                onDownload(
                  certificate
                )
              }
            >
              <Download
                className="
                  mr-2

                  h-4
                  w-4
                "
              />

              Download
            </Button>

            <Button
              variant="destructive"
              onClick={() =>
                onRevoke(
                  certificate
                )
              }
            >
              Revoke
            </Button>

            <Button
              variant="destructive"
              onClick={() =>
                onDelete(
                  certificate
                )
              }
            >
              Delete
            </Button>

          </div>

        </div>

      </div>

    </article>

  );
};

export default memo(
  CertificateGridCard
);