import {
  Award,
  CalendarDays,
  ChevronRight,
  Download,
} from "lucide-react";

import { Link } from "react-router-dom";

import type {
  UserCertificatePreview,
} from "@/types/userProfile";

interface CertificatesPreviewProps {
  certificates: UserCertificatePreview[];
}

const CertificatesPreview = ({
  certificates,
}: CertificatesPreviewProps) => {
  const previewCertificates =
    certificates.slice(0, 3);

  return (
    <div
      className="
        bg-white

        border
        border-slate-200

        rounded-[32px]

        p-8
      "
    >
      {/* Header */}

      <div
        className="
          flex
          flex-col
          lg:flex-row

          lg:items-center
          lg:justify-between

          gap-5
        "
      >
        <div>

          <div
            className="
              inline-flex
              items-center
              gap-2

              rounded-full

              bg-amber-50

              px-4
              py-2

              text-sm
              font-medium

              text-amber-700
            "
          >
            <Award size={16} />

            Certificates
          </div>

          <h2
            className="
              mt-5

              text-3xl
              font-bold
            "
          >
            Recent Certifications
          </h2>

          <p
            className="
              mt-3

              max-w-2xl

              text-slate-500
            "
          >
            Showcase your verified learning
            achievements and completed
            programs.
          </p>

        </div>

        <Link
          to="/user-dashboard/certificates"
          className="
            inline-flex
            items-center
            gap-2

            rounded-xl

            border
            border-slate-200

            px-5
            py-3

            font-medium

            transition

            hover:bg-slate-50
          "
        >
          View All

          <ChevronRight
            size={18}
          />
        </Link>
      </div>

      {/* Certificate Cards */}

      <div
        className="
          mt-10

          space-y-5
        "
      >
        {previewCertificates.map(
          (certificate) => (
            <div
              key={certificate.id}
              className="
                rounded-3xl

                border
                border-slate-200

                p-6

                transition-all

                hover:border-amber-200
                hover:shadow-lg
              "
            >
              <div
                className="
                  flex
                  flex-col

                  lg:flex-row

                  lg:items-center
                  lg:justify-between

                  gap-6
                "
              >
                <div
                  className="
                    flex
                    gap-5

                    flex-1
                  "
                >
                  <div
                    className="
                      flex
                      h-16
                      w-16

                      shrink-0

                      items-center
                      justify-center

                      rounded-3xl

                      bg-amber-50
                    "
                  >
                    <Award
                      size={30}
                      className="
                        text-amber-600
                      "
                    />
                  </div>

                  <div className="flex-1">

                    <h3
                      className="
                        text-xl
                        font-bold
                      "
                    >
                      {certificate.title}
                    </h3>

                    <p
                      className="
                        mt-2

                        text-slate-600
                      "
                    >
                      {certificate.issuer}
                    </p>
                                        <div
                      className="
                        mt-5

                        grid

                        gap-4

                        md:grid-cols-3
                      "
                    >
                      {/* Issue Date */}

                      <div
                        className="
                          rounded-2xl

                          bg-slate-50

                          p-4
                        "
                      >
                        <div
                          className="
                            flex
                            items-center
                            gap-2

                            text-sm
                            text-slate-500
                          "
                        >
                          <CalendarDays
                            size={16}
                          />

                          Issued
                        </div>

                        <h4
                          className="
                            mt-2

                            font-semibold
                          "
                        >
                          {certificate.issueDate}
                        </h4>
                      </div>
                     
                     <div
  className="
    rounded-2xl

    bg-blue-50

    p-4
  "
>
  <p
    className="
      text-sm

      text-blue-600
    "
  >
    Issued By
  </p>

  <h4
    className="
      mt-2

      font-semibold
    "
  >
    {certificate.issuer}
  </h4>
</div>

                      {/* Status */}

                      <div
                        className="
                          rounded-2xl

                          bg-green-50

                          p-4
                        "
                      >
                        <p
                          className="
                            text-sm

                            text-green-600
                          "
                        >
                          Verification
                        </p>

                        <h4
                          className="
                            mt-2

                            font-semibold

                            text-green-700
                          "
                        >
                          Verified
                        </h4>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Actions */}

                <div
                  className="
                    flex

                    lg:flex-col

                    gap-3

                    shrink-0
                  "
                >
                  <button
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-2

                      rounded-xl

                      border
                      border-slate-200

                      px-4
                      py-2.5

                      font-medium

                      transition

                      hover:bg-slate-50
                    "
                  >
                    <Download
                      size={16}
                    />

                    Download
                  </button>

                  <Link
                    to="/user-dashboard/certificates"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-2

                      rounded-xl

                      bg-amber-500

                      px-4
                      py-2.5

                      font-medium

                      text-white

                      transition

                      hover:bg-amber-600
                    "
                  >
                    View
                  </Link>
                </div>

              </div>
            </div>
          )
        )}
        </div>
              {/* Empty State */}

      {previewCertificates.length === 0 && (
        <div
          className="
            mt-10

            rounded-3xl

            border-2
            border-dashed
            border-slate-200

            py-16

            text-center
          "
        >
          <div
            className="
              mx-auto

              flex
              h-20
              w-20

              items-center
              justify-center

              rounded-3xl

              bg-amber-50
            "
          >
            <Award
              size={36}
              className="
                text-amber-600
              "
            />
          </div>

          <h3
            className="
              mt-6

              text-2xl
              font-bold
            "
          >
            No Certificates Yet
          </h3>

          <p
            className="
              mx-auto

              mt-3

              max-w-lg

              text-slate-500
            "
          >
            Complete mentorship programs,
            live sessions and assessments
            to earn verified certificates
            that will appear here.
          </p>

          <Link
            to="/programs"
            className="
              mt-8

              inline-flex
              items-center
              gap-2

              rounded-xl

              bg-amber-500

              px-6
              py-3

              font-medium

              text-white

              transition

              hover:bg-amber-600
            "
          >
            Explore Programs

            <ChevronRight
              size={18}
            />
          </Link>
        </div>
      )}

      {/* Footer */}

      <div
        className="
          mt-10

          border-t
          border-slate-200

          pt-6

          flex
          flex-col
          lg:flex-row

          lg:items-center
          lg:justify-between

          gap-4
        "
      >
        <div>
          <h4
            className="
              font-semibold
            "
          >
            Verified Achievements
          </h4>

          <p
            className="
              mt-1

              max-w-2xl

              text-sm
              text-slate-500
            "
          >
            Your certificates showcase
            completed learning milestones
            and verified achievements
            across Thraivio.
          </p>
        </div>

        <div
          className="
            inline-flex
            items-center
            gap-2

            rounded-full

            bg-amber-50

            px-4
            py-2

            text-sm
            font-medium

            text-amber-700
          "
        >
          <Award size={16} />

          {certificates.length} Certificate
          {certificates.length !== 1
            ? "s Earned"
            : " Earned"}
        </div>
      </div>
    </div>
  );
};

export default CertificatesPreview;