import {
  Award,
  BadgeCheck,
  Building2,
  CalendarDays,
  Download,
  ExternalLink,
  Printer,
  X,
} from "lucide-react";

import type { Certificate } from "@/types/certificate";

interface CertificatePreviewModalProps {
  open: boolean;

  certificate: Certificate | null;

  onClose: () => void;

  onDownload: (
    certificate: Certificate
  ) => void;

  onVerify: (
    certificate: Certificate
  ) => void;
}

const CertificatePreviewModal = ({
  open,
  certificate,
  onClose,
  onDownload,
  onVerify,
}: CertificatePreviewModalProps) => {
  if (!open || !certificate)
    return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[999]

        bg-black/60
        backdrop-blur-sm

        flex
        items-center
        justify-center

        p-4
      "
    >
      <div
        className="
          bg-white

          w-full
          max-w-5xl

          rounded-[32px]

          overflow-hidden

          shadow-2xl

          max-h-[90vh]

          flex
          flex-col
        "
      >
        {/* Header */}

        <div
          className="
            sticky
            top-0
            z-10

            bg-white

            border-b

            px-8
            py-5

            flex
            items-center
            justify-between
          "
        >
          <div>
            <h2
              className="
                text-2xl
                font-bold
              "
            >
              Certificate Preview
            </h2>

            <p
              className="
                text-slate-500
                mt-1
              "
            >
              View and verify your
              achievement certificate.
            </p>
          </div>

          <button
            onClick={onClose}
            className="
              h-11
              w-11

              rounded-xl

              hover:bg-slate-100

              flex
              items-center
              justify-center

              transition
            "
          >
            <X size={20} />
          </button>
        </div>

        {/* Scroll Area */}

        <div
          className="
            flex-1

            overflow-y-auto

            p-8
          "
        >
          {/* Certificate */}

          <div
            className="
              bg-gradient-to-br
              from-amber-50
              via-white
              to-orange-50

              border-[10px]
              border-amber-400

              rounded-[40px]

              p-10
            "
          >
            {/* Top */}

            <div className="text-center">

              <div
                className="
                  h-24
                  w-24

                  mx-auto

                  rounded-full

                  bg-amber-100

                  flex
                  items-center
                  justify-center
                "
              >
                <Award
                  size={44}
                  className="
                    text-amber-600
                  "
                />
              </div>

              <h1
                className="
                  text-5xl
                  font-bold

                  mt-6
                "
              >
                Certificate
              </h1>

              <p
                className="
                  text-slate-500

                  mt-3
                "
              >
                Of Completion
              </p>
            </div>

            {/* Main */}

            <div
              className="
                text-center

                mt-12
              "
            >
              <p
                className="
                  text-slate-500
                "
              >
                This certificate is proudly awarded to
              </p>

              <h2
                className="
                  text-4xl
                  font-bold

                  mt-4
                "
              >
                Your Name
              </h2>

              <div
                className="
                  h-[2px]
                  bg-slate-200

                  mt-4
                "
              />

              <p
                className="
                  mt-8
                  text-lg
                  text-slate-600
                "
              >
                for successfully completing
              </p>

              <h3
                className="
                  text-3xl
                  font-bold

                  mt-4
                "
              >
                {certificate.title}
              </h3>

              <p
                className="
                  text-slate-500

                  mt-5

                  max-w-3xl
                  mx-auto
                "
              >
                Demonstrating excellence,
                commitment and mastery
                of the required learning objectives.
              </p>
            </div>

            {/* Mentor */}

            <div
              className="
                grid
                lg:grid-cols-2

                gap-8

                mt-16
              "
            >
              <div>
                <p
                  className="
                    text-sm
                    text-slate-500
                  "
                >
                  Issued By
                </p>

                <div
                  className="
                    flex
                    items-center
                    gap-4

                    mt-3
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
                    "
                  />

                  <div>
                    <h4
                      className="
                        font-bold
                        text-lg
                      "
                    >
                      {
                        certificate.mentorName
                      }
                    </h4>

                    <p
                      className="
                        text-slate-500
                      "
                    >
                      {
                        certificate.mentorRole
                      }
                    </p>

                    <div
                      className="
                        flex
                        items-center
                        gap-1

                        text-sm
                        text-slate-500
                      "
                    >
                      <Building2
                        size={14}
                      />
                      {
                        certificate.mentorCompany
                      }
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <p
                  className="
                    text-sm
                    text-slate-500
                  "
                >
                  Completion Date
                </p>

                <div
                  className="
                    flex
                    items-center
                    gap-2

                    mt-3
                  "
                >
                  <CalendarDays
                    size={18}
                  />

                  <span
                    className="
                      font-semibold
                    "
                  >
                    {
                      certificate.completionDate
                    }
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom */}

            <div
              className="
                mt-16

                grid
                md:grid-cols-3

                gap-4
              "
            >
              <div
                className="
                  bg-white

                  rounded-2xl

                  p-5
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

                    mt-2
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

                  p-5
                "
              >
                <p
                  className="
                    text-xs
                    text-slate-500
                  "
                >
                  Certificate Number
                </p>

                <p
                  className="
                    font-semibold

                    mt-2
                  "
                >
                  {
                    certificate.certificateNumber
                  }
                </p>
              </div>

              <div
                className="
                  bg-white

                  rounded-2xl

                  p-5
                "
              >
                <p
                  className="
                    text-xs
                    text-slate-500
                  "
                >
                  Score
                </p>

                <p
                  className="
                    font-bold
                    text-green-600

                    mt-2
                  "
                >
                  {
                    certificate.score ||
                    "N/A"
                  }
                </p>
              </div>
            </div>
          </div>

          {/* Skills */}

          <div
            className="
              mt-8

              bg-slate-50

              rounded-3xl

              p-6
            "
          >
            <h3
              className="
                font-bold
                text-lg
              "
            >
              Skills Earned
            </h3>

            <div
              className="
                flex
                flex-wrap

                gap-3

                mt-5
              "
            >
              {certificate.skills.map(
                (skill) => (
                  <span
                    key={skill}
                    className="
                      px-4
                      py-2

                      rounded-full

                      bg-blue-100
                      text-blue-700

                      text-sm
                      font-medium
                    "
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* Footer */}

        <div
          className="
            border-t

            p-5

            bg-white

            flex
            flex-wrap

            justify-end

            gap-3
          "
        >
          <button
            onClick={() =>
              window.print()
            }
            className="
              px-5
              py-3

              border

              rounded-xl

              font-medium

              flex
              items-center
              gap-2
            "
          >
            <Printer size={18} />
            Print
          </button>

          <button
            onClick={() =>
              onVerify(
                certificate
              )
            }
            className="
              px-5
              py-3

              bg-green-600
              hover:bg-green-700

              text-white

              rounded-xl

              font-medium

              flex
              items-center
              gap-2
            "
          >
            <BadgeCheck
              size={18}
            />
            Verify
          </button>

          <button
            onClick={() =>
              onDownload(
                certificate
              )
            }
            className="
              px-5
              py-3

              bg-blue-600
              hover:bg-blue-700

              text-white

              rounded-xl

              font-medium

              flex
              items-center
              gap-2
            "
          >
            <Download
              size={18}
            />
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertificatePreviewModal;