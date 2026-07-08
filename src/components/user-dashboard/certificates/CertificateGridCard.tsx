import {
  Award,
  BadgeCheck,
  Building2,
  Download,
  Eye,
} from "lucide-react";

import type { Certificate } from "@/types/certificate";

interface CertificateGridCardProps {
  certificate: Certificate;

  onView: (
    certificate: Certificate
  ) => void;

  onDownload: (
    certificate: Certificate
  ) => void;

  onVerify: (
    certificate: Certificate
  ) => void;
}

const CertificateGridCard = ({
  certificate,
  onView,
  onDownload,
  onVerify,
}: CertificateGridCardProps) => {
  const statusStyles = {
    issued:
      "bg-green-100 text-green-700",

    pending:
      "bg-amber-100 text-amber-700",

    expired:
      "bg-red-100 text-red-700",
  };

  return (
    <div
      className="
        group

        bg-white

        border
        border-slate-200

        rounded-[32px]

        overflow-hidden

        hover:shadow-2xl
        hover:-translate-y-1

        transition-all
        duration-300
      "
    >
      {/* Top Gradient */}

      <div
        className="
          h-2

          bg-gradient-to-r
          from-amber-500
          via-orange-500
          to-yellow-500
        "
      />

      {/* Header */}

      <div className="p-6">

        <div
          className="
            flex
            justify-between
            items-start

            gap-4
          "
        >
          <div
            className="
              flex
              items-center

              gap-4
            "
          >
            <img
              src={
                certificate.mentorImage
              }
              alt={
                certificate.mentorName
              }
              className="
                h-16
                w-16

                rounded-2xl

                object-cover

                border-2
                border-slate-100
              "
            />

            <div>
              <h3
                className="
                  text-lg
                  font-bold
                "
              >
                {
                  certificate.mentorName
                }
              </h3>

              <div
                className="
                  flex
                  items-center
                  gap-2

                  text-sm
                  text-slate-500

                  mt-1
                "
              >
                <Building2
                  size={14}
                />

                {
                  certificate.mentorCompany
                }
              </div>

              <p
                className="
                  text-xs
                  text-slate-400

                  mt-1
                "
              >
                {
                  certificate.mentorRole
                }
              </p>
            </div>
          </div>

          <span
            className={`
              px-3
              py-1.5

              rounded-full

              text-xs
              font-semibold

              ${
                statusStyles[
                  certificate.status
                ]
              }
            `}
          >
            {
              certificate.status
            }
          </span>
        </div>

        {/* Certificate Badge */}

        <div
          className="
            mt-6

            bg-gradient-to-r
            from-amber-50
            to-orange-50

            border
            border-amber-200

            rounded-3xl

            p-5
          "
        >
          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            <div
              className="
                h-12
                w-12

                rounded-2xl

                bg-white

                flex
                items-center
                justify-center
              "
            >
              <Award
                size={24}
                className="
                  text-amber-600
                "
              />
            </div>

            <div>
              <p
                className="
                  text-xs
                  text-slate-500
                "
              >
                Certificate
              </p>

              <h4
                className="
                  font-bold
                  text-lg
                "
              >
                {
                  certificate.title
                }
              </h4>
            </div>
          </div>
        </div>

        {/* Info */}

        <div
          className="
            mt-6

            space-y-4
          "
        >
          <div
            className="
              flex
              justify-between
            "
          >
            <span
              className="
                text-slate-500
                text-sm
              "
            >
              Category
            </span>

            <span
              className="
                font-semibold
              "
            >
              {
                certificate.category
              }
            </span>
          </div>

          <div
            className="
              flex
              justify-between
            "
          >
            <span
              className="
                text-slate-500
                text-sm
              "
            >
              Issue Date
            </span>

            <span
              className="
                font-semibold
              "
            >
              {
                certificate.issueDate
              }
            </span>
          </div>

          <div
            className="
              flex
              justify-between
            "
          >
            <span
              className="
                text-slate-500
                text-sm
              "
            >
              Score
            </span>

            <span
              className="
                font-semibold
                text-green-600
              "
            >
              {certificate.score ||
                "N/A"}
            </span>
          </div>
        </div>

        {/* Credential */}

        <div
          className="
            mt-6

            bg-slate-50

            rounded-2xl

            p-4
          "
        >
          <p
            className="
              text-xs
              text-slate-500
            "
          >
            Credential ID
          </p>

          <p
            className="
              font-mono
              text-sm
              font-semibold

              mt-1
            "
          >
            {
              certificate.credentialId
            }
          </p>
        </div>

        {/* Skills */}

        <div
          className="
            mt-6
          "
        >
          <p
            className="
              text-sm
              text-slate-500

              mb-3
            "
          >
            Skills Earned
          </p>

          <div
            className="
              flex
              flex-wrap

              gap-2
            "
          >
            {certificate.skills
              .slice(0, 4)
              .map((skill) => (
                <span
                  key={skill}
                  className="
                    px-3
                    py-1

                    bg-blue-50
                    text-blue-700

                    rounded-full

                    text-xs
                    font-medium
                  "
                >
                  {skill}
                </span>
              ))}
          </div>
        </div>

        {/* Footer */}

        <div
          className="
            mt-8
            pt-6

            border-t

            space-y-3
          "
        >
          <button
            onClick={() =>
              onView(
                certificate
              )
            }
            className="
              w-full

              border

              py-3

              rounded-xl

              font-medium

              flex
              items-center
              justify-center
              gap-2

              hover:bg-slate-50

              transition
            "
          >
            <Eye size={18} />
            View Certificate
          </button>

          <button
            onClick={() =>
              onDownload(
                certificate
              )
            }
            className="
              w-full

              bg-blue-600
              hover:bg-blue-700

              text-white

              py-3

              rounded-xl

              font-medium

              flex
              items-center
              justify-center
              gap-2

              transition
            "
          >
            <Download
              size={18}
            />
            Download Certificate
          </button>

          <button
            onClick={() =>
              onVerify(
                certificate
              )
            }
            className="
              w-full

              bg-green-600
              hover:bg-green-700

              text-white

              py-3

              rounded-xl

              font-medium

              flex
              items-center
              justify-center
              gap-2

              transition
            "
          >
            <BadgeCheck
              size={18}
            />
            Verify Credential
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertificateGridCard;