import {
  Award,
  BadgeCheck,
  Building2,
  CalendarDays,
  Download,
  Eye,
  Trophy,
} from "lucide-react";

import type { Certificate } from "@/types/certificate";

interface CertificateListCardProps {
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

const CertificateListCard = ({
  certificate,
  onView,
  onDownload,
  onVerify,
}: CertificateListCardProps) => {
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
        bg-white

        border
        border-slate-200

        rounded-[32px]

        overflow-hidden

        hover:shadow-2xl

        transition-all
        duration-300
      "
    >
      <div
        className="
          h-2

          bg-gradient-to-r
          from-amber-500
          via-orange-500
          to-yellow-500
        "
      />

      <div className="p-6">

        <div
          className="
            flex
            flex-col

            xl:flex-row

            xl:items-center
            xl:justify-between

            gap-6
          "
        >
          {/* LEFT */}

          <div
            className="
              flex
              gap-5

              flex-1
            "
          >
            {/* Mentor */}

            <div className="shrink-0">

              <img
                src={
                  certificate.mentorImage
                }
                alt={
                  certificate.mentorName
                }
                className="
                  h-24
                  w-24

                  rounded-3xl

                  object-cover

                  border-2
                  border-slate-100
                "
              />

            </div>

            {/* Content */}

            <div className="flex-1">

              {/* Badges */}

              <div
                className="
                  flex
                  flex-wrap

                  gap-2
                "
              >
                <span
                  className={`
                    px-3
                    py-1

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

                <span
                  className="
                    bg-blue-100
                    text-blue-700

                    px-3
                    py-1

                    rounded-full

                    text-xs
                    font-semibold
                  "
                >
                  {
                    certificate.category
                  }
                </span>

                <span
                  className="
                    bg-green-100
                    text-green-700

                    px-3
                    py-1

                    rounded-full

                    text-xs
                    font-semibold

                    flex
                    items-center
                    gap-1
                  "
                >
                  <BadgeCheck size={12} />
                  Verified
                </span>
              </div>

              {/* Title */}

              <h2
                className="
                  text-2xl
                  font-bold

                  mt-4
                "
              >
                {
                  certificate.title
                }
              </h2>

              {/* Mentor */}

              <div
                className="
                  flex
                  flex-wrap

                  items-center

                  gap-2

                  text-slate-600

                  mt-3
                "
              >
                <span className="font-semibold">
                  {
                    certificate.mentorName
                  }
                </span>

                <span>•</span>

                <div
                  className="
                    flex
                    items-center
                    gap-1
                  "
                >
                  <Building2 size={14} />

                  {
                    certificate.mentorCompany
                  }
                </div>
              </div>

              <p
                className="
                  text-sm
                  text-slate-500

                  mt-1
                "
              >
                {
                  certificate.mentorRole
                }
              </p>

              {/* Certificate Details */}

              <div
                className="
                  grid
                  md:grid-cols-2

                  gap-4

                  mt-6
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-2

                    text-slate-600
                  "
                >
                  <CalendarDays size={16} />

                  {
                    certificate.issueDate
                  }
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-2

                    text-slate-600
                  "
                >
                  <Trophy size={16} />

                  Score:
                  {" "}
                  {
                    certificate.score ||
                    "N/A"
                  }
                </div>
              </div>

              {/* Skills */}

              <div
                className="
                  flex
                  flex-wrap

                  gap-2

                  mt-5
                "
              >
                {certificate.skills
                  .slice(0, 6)
                  .map((skill) => (
                    <span
                      key={skill}
                      className="
                        bg-blue-50
                        text-blue-700

                        px-3
                        py-1

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

          </div>

          {/* RIGHT */}

          <div
            className="
              xl:w-96

              shrink-0
            "
          >
            <div
              className="
                bg-slate-50

                rounded-3xl

                p-5
              "
            >
              {/* Certificate Info */}

              <div
                className="
                  bg-white

                  rounded-2xl

                  p-4
                "
              >
                <p
                  className="
                    text-sm
                    text-slate-500
                  "
                >
                  Credential ID
                </p>

                <p
                  className="
                    mt-2

                    font-mono
                    text-sm
                    font-semibold

                    break-all
                  "
                >
                  {
                    certificate.credentialId
                  }
                </p>
              </div>

              <div
                className="
                  bg-white

                  rounded-2xl

                  p-4

                  mt-4
                "
              >
                <p
                  className="
                    text-sm
                    text-slate-500
                  "
                >
                  Certificate Number
                </p>

                <p
                  className="
                    mt-2

                    font-semibold
                  "
                >
                  {
                    certificate.certificateNumber
                  }
                </p>
              </div>

              {/* Actions */}

              <div
                className="
                  flex
                  flex-col

                  gap-3

                  mt-5
                "
              >
                <button
                  onClick={() =>
                    onView(
                      certificate
                    )
                  }
                  className="
                    border
                    border-slate-300

                    py-3

                    rounded-xl

                    font-medium

                    flex
                    items-center
                    justify-center
                    gap-2

                    hover:bg-slate-100

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
                  <Download size={18} />
                  Download PDF
                </button>

                <button
                  onClick={() =>
                    onVerify(
                      certificate
                    )
                  }
                  className="
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
                  <BadgeCheck size={18} />
                  Verify Credential
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default CertificateListCard;