import {
  Award,
  BadgeCheck,
} from "lucide-react";

interface CertificatesHeaderProps {
  totalCertificates: number;
}

const CertificatesHeader = ({
  totalCertificates,
}: CertificatesHeaderProps) => {
  return (
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
      <div>
        <div
          className="
            inline-flex
            items-center
            gap-2

            bg-amber-50
            text-amber-700

            px-4
            py-2

            rounded-full

            text-sm
            font-medium
          "
        >
          <Award size={16} />
          My Certificates
        </div>

        <h1
          className="
            text-4xl
            font-bold

            mt-4
          "
        >
          Certificates Dashboard
        </h1>

        <p
          className="
            mt-3

            text-slate-500

            max-w-2xl
          "
        >
          View, download and verify
          all certificates earned from
          mentorship programs,
          events and sessions.
        </p>
      </div>

      <div
        className="
          bg-white

          border

          rounded-3xl

          px-6
          py-5
        "
      >
        <div
          className="
            flex
            items-center
            gap-4
          "
        >
          <div
            className="
              h-14
              w-14

              rounded-2xl

              bg-green-50

              flex
              items-center
              justify-center
            "
          >
            <BadgeCheck
              size={24}
              className="
                text-green-600
              "
            />
          </div>

          <div>
            <p
              className="
                text-sm
                text-slate-500
              "
            >
              Earned Certificates
            </p>

            <h3
              className="
                text-3xl
                font-bold
              "
            >
              {totalCertificates}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificatesHeader;