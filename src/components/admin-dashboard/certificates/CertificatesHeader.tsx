import { memo } from "react";

import {
  Award,
  BadgeCheck,
  Download,
  FilePlus2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";

interface CertificatesHeaderProps {
  totalCertificates: number;

  issuedCertificates: number;

  verifiedCertificates: number;

  onIssueCertificate: () => void;

  onExport: () => void;

  onBulkVerify: () => void;
}

const CertificatesHeader = ({
  totalCertificates,
  issuedCertificates,
  verifiedCertificates,
  onIssueCertificate,
  onExport,
  onBulkVerify,
}: CertificatesHeaderProps) => {
  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-[34px]
        bg-gradient-to-br
        from-amber-500
        via-orange-500
        to-rose-600
        p-8
        lg:p-10
        text-white
        shadow-xl
      "
    >
      {/* Background */}

      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-yellow-300/10 blur-3xl" />

      <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}

        <div className="max-w-3xl">

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/20
              bg-white/10
              px-4
              py-2
              text-sm
              font-semibold
              backdrop-blur
            "
          >
            <Award size={16} />

            Certificates Management
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight lg:text-5xl">

            Manage Platform Certificates

          </h1>

          <p className="mt-5 max-w-2xl text-orange-100 leading-8">

            Issue, verify, revoke and manage certificates
            earned from Programs, Sessions and Events.
            Monitor verification status, downloads and
            learner achievements from one premium dashboard.

          </p>

          <div className="mt-8 flex flex-wrap gap-3">

            <span className="rounded-full bg-white/10 px-4 py-2 text-sm">

              🏆 {totalCertificates} Certificates

            </span>

            <span className="rounded-full bg-green-500/20 px-4 py-2 text-sm">

              ✅ {verifiedCertificates} Verified

            </span>

            <span className="rounded-full bg-white/10 px-4 py-2 text-sm">

              📄 {issuedCertificates} Issued

            </span>

            <span className="rounded-full bg-white/10 px-4 py-2 text-sm">

              QR Verification

            </span>

          </div>

        </div>

        {/* Right */}

        <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">

          <Button
            onClick={onIssueCertificate}
            size="lg"
            className="
              h-12
              rounded-2xl
              bg-white
              px-7
              text-slate-900
              hover:bg-slate-100
            "
          >
            <FilePlus2 className="mr-2 h-5 w-5" />

            Issue Certificate

          </Button>

          <Button
            onClick={onBulkVerify}
            size="lg"
            variant="secondary"
            className="
              h-12
              rounded-2xl
              border
              border-white/20
              bg-white/10
              px-7
              text-white
              hover:bg-white/20
            "
          >
            <ShieldCheck className="mr-2 h-5 w-5" />

            Bulk Verify

          </Button>

          <Button
            onClick={onExport}
            size="lg"
            variant="secondary"
            className="
              h-12
              rounded-2xl
              border
              border-white/20
              bg-white/10
              px-7
              text-white
              hover:bg-white/20
            "
          >
            <Download className="mr-2 h-5 w-5" />

            Export Data

          </Button>

        </div>

      </div>

      {/* Bottom Cards */}

      <div
        className="
          relative
          z-10
          mt-10
          grid
          gap-5
          md:grid-cols-3
        "
      >
        <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">

          <p className="text-sm text-orange-100">

            Total Certificates

          </p>

          <h2 className="mt-3 text-3xl font-bold">

            {totalCertificates}

          </h2>

        </div>

        <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">

          <div className="flex items-center gap-2">

            <BadgeCheck className="h-5 w-5 text-green-300" />

            <p className="text-sm text-orange-100">

              Verified Certificates

            </p>

          </div>

          <h2 className="mt-3 text-3xl font-bold">

            {verifiedCertificates}

          </h2>

        </div>

        <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">

          <div className="flex items-center gap-2">

            <Sparkles className="h-5 w-5 text-yellow-200" />

            <p className="text-sm text-orange-100">

              Platform Security

            </p>

          </div>

          <h2 className="mt-3 text-2xl font-bold">

            QR Verified

          </h2>

          <p className="mt-2 text-sm text-orange-100">

            Secure • Trusted • Downloadable

          </p>

        </div>

      </div>

    </section>
  );
};

export default memo(CertificatesHeader);