import { memo } from "react";

import {
  Award,
  Plus,
  Search,
  FilterX,
  Sparkles,
  RefreshCw,
  ShieldCheck,
  FileBadge2,
  BookOpen,
  ArrowRight,
  Upload,
  RotateCcw,
} from "lucide-react";

import { Button } from "@/components/ui/button";

interface CertificatesEmptyStateProps {
  search: string;

  activeFilters: number;

  loading?: boolean;

  onIssueCertificate: () => void;

  onRefresh: () => void;

  onResetFilters: () => void;

  onImportCertificates: () => void;

  onDocumentation?: () => void;
}

const CertificatesEmptyState = ({
  search,
  activeFilters,
  loading = false,
  onIssueCertificate,
  onRefresh,
  onResetFilters,
  onImportCertificates,
  onDocumentation,
}: CertificatesEmptyStateProps) => {
  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-2xl
        border
        
        from-white
        
        
        p-10
        shadow-sm
      "
    >
      {/* Background */}

      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#F59E0B]/10 blur-3xl" />

      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#FFFBEB] blur-3xl" />

      <div className="relative z-10">

        {/* Hero */}

        <div className="flex flex-col items-center text-center">

          <div className="relative">

            <div
              className="
                absolute
                inset-0
                rounded-full
                bg-[#F59E0B]/20
                blur-3xl
              "
            />

            <div
              className="
                relative
                flex
                h-36
                w-36
                items-center
                justify-center
                rounded-full
                
                bg-[#F59E0B]
                
                
                text-white
                shadow-2xl
              "
            >
              <Award className="h-20 w-20" />
            </div>

          </div>

          <div
            className="
              mt-8
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-[#FFFBEB]
              px-4
              py-2
              text-sm
              font-medium
              text-[#B45309]
            "
          >
            <Sparkles className="h-4 w-4" />

            Certificates Management

          </div>

          <h2
            className="
              mt-6
              text-4xl
              font-bold
              tracking-tight
            "
          >
            No Certificates Found
          </h2>

          <p
            className="
              mt-5
              max-w-3xl
              text-base
              leading-8
              text-muted-foreground
            "
          >
            No certificates match your current search
            or filters. Issue a new certificate,
            import existing certificates, or adjust
            your filters to display available records.
          </p>
                    {/* Search & Filter Summary */}

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">

            {search.trim() !== "" && (
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  bg-card
                  px-5
                  py-3
                  shadow-sm
                "
              >
                <Search className="h-4 w-4 text-amber-600" />

                <span className="text-sm font-medium">
                  Search :
                </span>

                <span className="text-sm text-muted-foreground">
                  "{search}"
                </span>

              </div>
            )}

            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                bg-card
                px-5
                py-3
                shadow-sm
              "
            >
              <FilterX className="h-4 w-4 text-orange-500" />

              <span className="text-sm font-medium">
                Active Filters :
              </span>

              <span className="rounded-full bg-orange-100 px-2 py-1 text-xs font-semibold text-orange-700">
                {activeFilters}
              </span>

            </div>

            {loading && (
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  bg-card
                  px-5
                  py-3
                  shadow-sm
                "
              >
                <RefreshCw className="h-4 w-4 animate-spin text-amber-600" />

                <span className="text-sm font-medium">
                  Refreshing Certificates...
                </span>

              </div>
            )}

          </div>

          {/* Premium Tips */}

          <div
            className="
              mt-12
              grid
              w-full
              gap-6
              lg:grid-cols-3
            "
          >
            {/* Search */}

            <div
              className="
                rounded-2xl
                border
                bg-card
                p-6
                shadow-sm
                transition-all
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EFF6FF]">

                <Search className="h-7 w-7 text-primary" />

              </div>

              <h3 className="text-lg font-semibold">
                Improve Search
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Search using certificate title,
                student, mentor, credential ID
                or certificate number.
              </p>

            </div>

            {/* Reset */}

            <div
              className="
                rounded-2xl
                border
                bg-card
                p-6
                shadow-sm
                transition-all
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100">

                <RotateCcw className="h-7 w-7 text-[#B45309]" />

              </div>

              <h3 className="text-lg font-semibold">
                Reset Filters
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Remove status, category,
                verification and mentor filters
                to display every certificate.
              </p>

            </div>

            {/* Issue */}

            <div
              className="
                rounded-2xl
                border
                bg-card
                p-6
                shadow-sm
                transition-all
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ECFDF5]">

                <FileBadge2 className="h-7 w-7 text-[#0F8F65]" />

              </div>

              <h3 className="text-lg font-semibold">
                Issue Certificate
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Create and issue verified
                certificates for completed
                programs, sessions and events.
              </p>

            </div>

          </div>
                    {/* Documentation */}

          <div
            className="
              mt-10
              w-full
              rounded-[28px]
              border
              bg-card
              p-8
              shadow-sm
            "
          >
            <div
              className="
                flex
                flex-col
                gap-6

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
                    bg-[#EFF6FF]
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-[#2563EB]
                  "
                >
                  <BookOpen className="h-4 w-4" />

                  Documentation

                </div>

                <h3 className="mt-5 text-2xl font-bold">
                  Learn Certificate Management
                </h3>

                <p
                  className="
                    mt-3
                    max-w-2xl
                    text-muted-foreground
                    leading-7
                  "
                >
                  Learn how to issue certificates,
                  verify credentials, revoke access,
                  reissue certificates and manage
                  learner achievements from one place.
                </p>

              </div>

              <Button
                variant="outline"
                className="h-12 rounded-2xl px-7"
                onClick={onDocumentation}
              >
                Documentation

                <ArrowRight className="ml-2 h-4 w-4" />

              </Button>

            </div>

          </div>

          {/* Actions */}

          <div
            className="
              mt-12
              flex
              flex-wrap
              items-center
              justify-center
              gap-4
            "
          >
            <Button
              size="lg"
              onClick={onIssueCertificate}
              className="
                h-12
                rounded-2xl
                px-8
                shadow-lg
              "
            >
              <Plus className="mr-2 h-5 w-5" />

              Issue Certificate

            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={onImportCertificates}
              className="
                h-12
                rounded-2xl
                px-8
              "
            >
              <Upload className="mr-2 h-5 w-5" />

              Import Certificates

            </Button>

            <Button
              variant="outline"
              size="lg"
              disabled={loading}
              onClick={onRefresh}
              className="
                h-12
                rounded-2xl
                px-8
              "
            >
              <RefreshCw
                className={`mr-2 h-5 w-5 ${
                  loading
                    ? "animate-spin"
                    : ""
                }`}
              />

              Refresh

            </Button>

            <Button
              variant="secondary"
              size="lg"
              onClick={onResetFilters}
              className="
                h-12
                rounded-2xl
                px-8
              "
            >
              <RotateCcw className="mr-2 h-5 w-5" />

              Reset Filters

            </Button>

          </div>

          {/* Bottom Banner */}

          <div
            className="
              mt-14
              rounded-2xl
              border
              
              bg-[#F59E0B]
              
              
              p-8
              text-white
              shadow-xl
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
                    bg-card/10
                    px-4
                    py-2
                    text-sm
                    backdrop-blur
                  "
                >
                  <ShieldCheck className="h-4 w-4" />

                  Thraivio Certificates

                </div>

                <h3 className="mt-5 text-3xl font-bold">
                  Start Issuing Professional Certificates
                </h3>

                <p
                  className="
                    mt-4
                    max-w-2xl
                    text-amber-100
                    leading-8
                  "
                >
                  Reward learners with secure,
                  verifiable certificates for
                  completed programs, events and
                  mentoring sessions while keeping
                  complete administrative control.
                </p>

              </div>

              <Button
                size="lg"
                onClick={onIssueCertificate}
                className="
                  h-14
                  rounded-2xl
                  bg-card
                  px-8
                  text-[#B45309]
                  hover:bg-amber-50
                "
              >
                Issue First Certificate

                <ArrowRight className="ml-2 h-5 w-5" />

              </Button>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
};

export default memo(
  CertificatesEmptyState
);