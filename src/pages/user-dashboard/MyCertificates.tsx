import { useMemo, useState } from "react";

import type { Certificate } from "@/types/certificate";

import CertificatesHeader from "@/components/user-dashboard/certificates/CertificatesHeader";
import CertificatesStats from "@/components/user-dashboard/certificates/CertificatesStats";
import CertificatesToolbar from "@/components/user-dashboard/certificates/CertificatesToolbar";

import CertificateGridCard from "@/components/user-dashboard/certificates/CertificateGridCard";
import CertificateListCard from "@/components/user-dashboard/certificates/CertificateListCard";

import CertificatePreviewModal from "@/components/user-dashboard/certificates/CertificatePreviewModal";

import EmptyCertificates from "@/components/user-dashboard/certificates/EmptyCertificates";

const initialCertificates: Certificate[] = [
  {
    id: "1",

    mentorId: 1,

    mentorName: "Sarah Johnson",

    mentorRole:
      "Senior Product Mentor",

    mentorCompany: "Google",

    mentorImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600",

    title:
      "Product Management Mastery",

    category: "Program",

    issueDate:
      "15 June 2026",

    completionDate:
      "12 June 2026",

    certificateNumber:
      "PMM-2026-001",

    credentialId:
      "GOOGLE-PM-8H72K1",

    skills: [
      "Product Strategy",
      "Roadmapping",
      "Leadership",
      "Growth",
    ],

    status: "issued",

    certificateUrl: "#",

    verificationUrl: "#",

    score: "98%",
  },

  {
    id: "2",

    mentorId: 2,

    mentorName: "Michael Lee",

    mentorRole:
      "Senior Engineering Mentor",

    mentorCompany:
      "Microsoft",

    mentorImage:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600",

    title:
      "System Design Bootcamp",

    category: "Program",

    issueDate:
      "10 July 2026",

    completionDate:
      "08 July 2026",

    certificateNumber:
      "SYS-2026-092",

    credentialId:
      "MSFT-SD-29ABQ",

    skills: [
      "System Design",
      "Microservices",
      "Scalability",
      "Architecture",
    ],

    status: "issued",

    certificateUrl: "#",

    verificationUrl: "#",

    score: "95%",
  },

  {
    id: "3",

    mentorId: 3,

    mentorName:
      "Emily Carter",

    mentorRole:
      "Senior Career Coach",

    mentorCompany:
      "LinkedIn",

    mentorImage:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600",

    title:
      "Resume Building Masterclass",

    category: "Event",

    issueDate:
      "20 July 2026",

    completionDate:
      "18 July 2026",

    certificateNumber:
      "RBM-2026-201",

    credentialId:
      "LINKEDIN-RBM-99JQ",

    skills: [
      "Resume Writing",
      "Career Growth",
      "Interview Prep",
    ],

    status: "issued",

    certificateUrl: "#",

    verificationUrl: "#",

    score: "100%",
  },

  {
    id: "4",

    mentorId: 5,

    mentorName:
      "Priya Verma",

    mentorRole:
      "Leadership Mentor",

    mentorCompany:
      "Amazon",

    mentorImage:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600",

    title:
      "Leadership Excellence Program",

    category: "Program",

    issueDate: "",

    completionDate: "",

    certificateNumber:
      "LEP-2026-778",

    credentialId:
      "AMZN-LDR-782K",

    skills: [
      "Leadership",
      "Communication",
      "Management",
    ],

    status: "pending",

    certificateUrl: "#",

    verificationUrl: "#",

    score: "",
  },
];

const MyCertificates = () => {
  const [
    certificates,
  ] = useState(
    initialCertificates
  );

  const [search, setSearch] =
    useState("");

  const [view, setView] =
    useState<"grid" | "list">(
      "grid"
    );

  const [
    categoryFilter,
    setCategoryFilter,
  ] = useState("all");

  const [
    statusFilter,
    setStatusFilter,
  ] = useState("all");

  const [
    selectedCertificate,
    setSelectedCertificate,
  ] = useState<Certificate | null>(
    null
  );

  const [
    previewOpen,
    setPreviewOpen,
  ] = useState(false);

  const filteredCertificates =
    useMemo(() => {
      return certificates.filter(
        (certificate) => {
          const matchesSearch =
            certificate.title
              .toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||
            certificate.mentorName
              .toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||
            certificate.credentialId
              .toLowerCase()
              .includes(
                search.toLowerCase()
              );

          const matchesCategory =
            categoryFilter ===
            "all"
              ? true
              : certificate.category ===
                categoryFilter;

          const matchesStatus =
            statusFilter === "all"
              ? true
              : certificate.status ===
                statusFilter;

          return (
            matchesSearch &&
            matchesCategory &&
            matchesStatus
          );
        }
      );
    }, [
      certificates,
      search,
      categoryFilter,
      statusFilter,
    ]);

  const issuedCertificates =
    certificates.filter(
      (certificate) =>
        certificate.status ===
        "issued"
    ).length;

  const pendingCertificates =
    certificates.filter(
      (certificate) =>
        certificate.status ===
        "pending"
    ).length;

  const verifiedCertificates =
    certificates.filter(
      (certificate) =>
        certificate.status ===
        "issued"
    ).length;

  const handleView =
    (
      certificate: Certificate
    ) => {
      setSelectedCertificate(
        certificate
      );

      setPreviewOpen(true);
    };

  const handleDownload =
    (
      certificate: Certificate
    ) => {
      console.log(
        "Download:",
        certificate.title
      );
    };

  const handleVerify =
    (
      certificate: Certificate
    ) => {
      window.open(
        certificate.verificationUrl ||
          "#",
        "_blank"
      );
    };

  const handleBrowsePrograms =
    () => {
      console.log(
        "Navigate Programs"
      );
    };

  const handleBrowseEvents =
    () => {
      console.log(
        "Navigate Events"
      );
    };

  return (
    <div className="space-y-8">

      <CertificatesHeader
        totalCertificates={
          certificates.length
        }
      />

      <CertificatesStats
        issuedCertificates={
          issuedCertificates
        }
        pendingCertificates={
          pendingCertificates
        }
        verifiedCertificates={
          verifiedCertificates
        }
        topScore="100%"
      />

      <CertificatesToolbar
        search={search}
        setSearch={setSearch}
        view={view}
        setView={setView}
        categoryFilter={
          categoryFilter
        }
        setCategoryFilter={
          setCategoryFilter
        }
        statusFilter={
          statusFilter
        }
        setStatusFilter={
          setStatusFilter
        }
      />

      {filteredCertificates.length ===
      0 ? (
        <EmptyCertificates
          onBrowsePrograms={
            handleBrowsePrograms
          }
          onBrowseEvents={
            handleBrowseEvents
          }
        />
      ) : (
        <>
          {view === "grid" && (
            <div
              className="
                grid
                xl:grid-cols-2

                gap-6
              "
            >
              {filteredCertificates.map(
                (
                  certificate
                ) => (
                  <CertificateGridCard
                    key={
                      certificate.id
                    }
                    certificate={
                      certificate
                    }
                    onView={
                      handleView
                    }
                    onDownload={
                      handleDownload
                    }
                    onVerify={
                      handleVerify
                    }
                  />
                )
              )}
            </div>
          )}

          {view === "list" && (
            <div className="space-y-6">

              {filteredCertificates.map(
                (
                  certificate
                ) => (
                  <CertificateListCard
                    key={
                      certificate.id
                    }
                    certificate={
                      certificate
                    }
                    onView={
                      handleView
                    }
                    onDownload={
                      handleDownload
                    }
                    onVerify={
                      handleVerify
                    }
                  />
                )
              )}

            </div>
          )}
        </>
      )}

      <CertificatePreviewModal
        open={previewOpen}
        certificate={
          selectedCertificate
        }
        onClose={() =>
          setPreviewOpen(false)
        }
        onDownload={
          handleDownload
        }
        onVerify={
          handleVerify
        }
      />

    </div>
  );
};

export default MyCertificates;