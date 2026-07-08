import {
  useMemo,
  useState,
} from "react";

import { toast } from "sonner";

import CertificatesHeader from "@/components/admin-dashboard/certificates/CertificatesHeader";
import CertificatesStats from "@/components/admin-dashboard/certificates/CertificatesStats";
import CertificatesToolbar from "@/components/admin-dashboard/certificates/CertificatesToolbar";
import CertificatesGrid from "@/components/admin-dashboard/certificates/CertificatesGrid";
import CertificatesTable from "@/components/admin-dashboard/certificates/CertificatesTable";
import CertificatesPagination from "@/components/admin-dashboard/certificates/CertificatesPagination";
import CertificatesEmptyState from "@/components/admin-dashboard/certificates/CertificatesEmptyState";

import CertificateDetailsDrawer from "@/components/admin-dashboard/certificates/CertificateDetailsDrawer";

import IssueCertificateDialog from "@/components/admin-dashboard/certificates/IssueCertificateDialog";
import EditCertificateDialog from "@/components/admin-dashboard/certificates/EditCertificateDialog";
import DeleteCertificateDialog from "@/components/admin-dashboard/certificates/DeleteCertificateDialog";
import VerifyCertificateDialog from "@/components/admin-dashboard/certificates/VerifyCertificateDialog";
import RevokeCertificateDialog from "@/components/admin-dashboard/certificates/RevokeCertificateDialog";
import ReissueCertificateDialog from "@/components/admin-dashboard/certificates/ReissueCertificateDialog";

import {
  adminCertificates as certificatesData,
  certificateStats,
} from "@/data/admin-certificates";

import type {
  AdminCertificate,
  CertificateView,
} from "@/types/admin-certificate";

const PAGE_SIZE = 6;

export default function CertificatesManagement() {
  const [
    certificates,
    setCertificates,
  ] = useState<AdminCertificate[]>(
    certificatesData
  );

  const [
    selectedCertificate,
    setSelectedCertificate,
  ] =
    useState<AdminCertificate | null>(
      null
    );

  const [page, setPage] =
    useState(1);

  const [view, setView] =
    useState<CertificateView>("grid");

  const [search, setSearch] =
    useState("");

  const [status, setStatus] =
    useState("all");

  const [category, setCategory] =
    useState("all");

  const [mentor, setMentor] =
    useState("all");

  const [student, setStudent] =
    useState("all");

  const [
    verification,
    setVerification,
  ] = useState("all");

  const [date, setDate] =
    useState("");

  const [
    detailsOpen,
    setDetailsOpen,
  ] = useState(false);

  const [
    issueOpen,
    setIssueOpen,
  ] = useState(false);

  const [
    editOpen,
    setEditOpen,
  ] = useState(false);

  const [
    deleteOpen,
    setDeleteOpen,
  ] = useState(false);

  const [
    verifyOpen,
    setVerifyOpen,
  ] = useState(false);

  const [
    revokeOpen,
    setRevokeOpen,
  ] = useState(false);

  const [
    reissueOpen,
    setReissueOpen,
  ] = useState(false);

  /* -------------------------------- */
  /* Options                          */
  /* -------------------------------- */

  const statusOptions = [
    {
      label: "All Status",
      value: "all",
    },
    {
      label: "Issued",
      value: "issued",
    },
    {
      label: "Pending",
      value: "pending",
    },
    {
      label: "Revoked",
      value: "revoked",
    },
    {
      label: "Expired",
      value: "expired",
    },
  ];

  const categoryOptions = [
    {
      label: "All Categories",
      value: "all",
    },
    {
      label: "Program",
      value: "Program",
    },
    {
      label: "Session",
      value: "Session",
    },
    {
      label: "Event",
      value: "Event",
    },
  ];

  const verificationOptions = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "Verified",
      value: "verified",
    },
    {
      label: "Unverified",
      value: "unverified",
    },
  ];

  const mentorOptions = useMemo(() => {
    const mentors = Array.from(
      new Set(
        certificates.map(
          (item) => item.mentorName
        )
      )
    );

    return [
      {
        label: "All Mentors",
        value: "all",
      },
      ...mentors.map((mentor) => ({
        label: mentor,
        value: mentor,
      })),
    ];
  }, [certificates]);

  const studentOptions =
    useMemo(() => {
      const students = Array.from(
        new Set(
          certificates.map(
            (item) =>
              item.studentName
          )
        )
      );

      return [
        {
          label: "All Students",
          value: "all",
        },
        ...students.map(
          (student) => ({
            label: student,
            value: student,
          })
        ),
      ];
    }, [certificates]);

  const programOptions = useMemo(() => {
  const programs = Array.from(
    new Set(
      certificates
        .map((item) => item.programTitle)
        .filter(
          (program): program is string =>
            Boolean(program)
        )
    )
  );

  return programs.map((program) => ({
    label: program,
    value: program,
  }));
}, [certificates]);

  /* -------------------------------- */
  /* Filter                           */
  /* -------------------------------- */

  const filteredCertificates =
    useMemo(() => {
      return certificates.filter(
        (certificate) => {
          const keyword =
            search.toLowerCase();

          const matchesSearch =
            certificate.title
              .toLowerCase()
              .includes(keyword) ||
            certificate.studentName
              .toLowerCase()
              .includes(keyword) ||
            certificate.studentEmail
              .toLowerCase()
              .includes(keyword) ||
            certificate.mentorName
              .toLowerCase()
              .includes(keyword) ||
            certificate.certificateNumber
              .toLowerCase()
              .includes(keyword) ||
            certificate.credentialId
              .toLowerCase()
              .includes(keyword);

          const matchesStatus =
            status === "all" ||
            certificate.status ===
              status;

          const matchesCategory =
            category === "all" ||
            certificate.category ===
              category;

          const matchesMentor =
            mentor === "all" ||
            certificate.mentorName ===
              mentor;

          const matchesStudent =
            student === "all" ||
            certificate.studentName ===
              student;

          const matchesVerification =
            verification ===
              "all" ||
            certificate.verificationStatus ===
              verification;

          const matchesDate =
            !date ||
            certificate.issueDate ===
              date;

          return (
            matchesSearch &&
            matchesStatus &&
            matchesCategory &&
            matchesMentor &&
            matchesStudent &&
            matchesVerification &&
            matchesDate
          );
        }
      );
    }, [
      certificates,
      search,
      status,
      category,
      mentor,
      student,
      verification,
      date,
    ]);

  const totalPages = Math.ceil(
    filteredCertificates.length /
      PAGE_SIZE
  );

  const paginatedCertificates =
    filteredCertificates.slice(
      (page - 1) * PAGE_SIZE,
      page * PAGE_SIZE
    );

  const activeFilters =
    [
      status,
      category,
      mentor,
      student,
      verification,
      date,
    ].filter(
      (item) =>
        item !== "all" &&
        item !== ""
    ).length;
      /* -------------------------------- */
  /* Actions                          */
  /* -------------------------------- */

  const handleView = (
    certificate: AdminCertificate
  ) => {
    setSelectedCertificate(
      certificate
    );

    setDetailsOpen(true);
  };

  const handleEdit = (
    certificate: AdminCertificate
  ) => {
    setSelectedCertificate(
      certificate
    );

    setEditOpen(true);
  };

  const handleDelete = (
    certificate: AdminCertificate
  ) => {
    setSelectedCertificate(
      certificate
    );

    setDeleteOpen(true);
  };

  const handleVerify = (
    certificate: AdminCertificate
  ) => {
    setSelectedCertificate(
      certificate
    );

    setVerifyOpen(true);
  };

  const handleRevoke = (
    certificate: AdminCertificate
  ) => {
    setSelectedCertificate(
      certificate
    );

    setRevokeOpen(true);
  };

  const handleDownload = (
    certificate: AdminCertificate
  ) => {
    toast.success(
      `Downloading "${certificate.title}"`
    );
  };

  /* -------------------------------- */
  /* CRUD                             */
  /* -------------------------------- */

  const handleIssueCertificate = (
    certificate: AdminCertificate
  ) => {
    const newCertificate = {
      ...certificate,

      id: crypto.randomUUID(),

      createdAt:
        new Date().toLocaleDateString(),

      updatedAt:
        new Date().toLocaleDateString(),

      downloadCount: 0,

      viewCount: 0,
    };

    setCertificates((prev) => [
      newCertificate,
      ...prev,
    ]);

    toast.success(
      "Certificate issued successfully."
    );
  };

  const handleUpdateCertificate = (
    certificate: AdminCertificate
  ) => {
    setCertificates((prev) =>
      prev.map((item) =>
        item.id === certificate.id
          ? {
              ...certificate,
              updatedAt:
                new Date().toLocaleDateString(),
            }
          : item
      )
    );

    toast.success(
      "Certificate updated successfully."
    );
  };

  const confirmDelete = () => {
    if (!selectedCertificate) return;

    setCertificates((prev) =>
      prev.filter(
        (item) =>
          item.id !==
          selectedCertificate.id
      )
    );

    toast.success(
      "Certificate deleted successfully."
    );

    setDeleteOpen(false);

    setSelectedCertificate(null);
  };

  const confirmVerify = () => {
    if (!selectedCertificate) return;

    setCertificates((prev) =>
      prev.map((item) =>
        item.id ===
        selectedCertificate.id
          ? {
              ...item,

              verificationStatus:
                "verified",

              status: "issued",
            }
          : item
      )
    );

    toast.success(
      "Certificate verified successfully."
    );

    setVerifyOpen(false);

    setSelectedCertificate(null);
  };

  const confirmRevoke = (
    reason: string
  ) => {
    if (!selectedCertificate) return;

    setCertificates((prev) =>
      prev.map((item) =>
        item.id ===
        selectedCertificate.id
          ? {
              ...item,

              status: "revoked",

              verificationStatus:
                "unverified",

              notes: reason,
            }
          : item
      )
    );

    toast.success(
      "Certificate revoked successfully."
    );

    setRevokeOpen(false);

    setSelectedCertificate(null);
  };

  const confirmReissue = (
    data: {
      credentialId: string;

      certificateNumber: string;

      issueDate: string;
    }
  ) => {
    if (!selectedCertificate) return;

    setCertificates((prev) =>
      prev.map((item) =>
        item.id ===
        selectedCertificate.id
          ? {
              ...item,

              credentialId:
                data.credentialId,

              certificateNumber:
                data.certificateNumber,

              issueDate:
                data.issueDate,

              status: "issued",

              verificationStatus:
                "verified",

              updatedAt:
                new Date().toLocaleDateString(),
            }
          : item
      )
    );

    toast.success(
      "Certificate reissued successfully."
    );

    setReissueOpen(false);

    setSelectedCertificate(null);
  };

  /* -------------------------------- */
  /* Toolbar                          */
  /* -------------------------------- */

  const handleRefresh = () => {
    toast.success(
      "Certificates refreshed."
    );
  };

  const handleExport = () => {
    toast.success(
      "Export started."
    );
  };

  const handleBulkVerify = () => {
    setCertificates((prev) =>
      prev.map((item) => ({
        ...item,

        verificationStatus:
          "verified",

        status:
          item.status === "pending"
            ? "issued"
            : item.status,
      }))
    );

    toast.success(
      "All certificates verified."
    );
  };

  const handleResetFilters = () => {
    setSearch("");

    setStatus("all");

    setCategory("all");

    setMentor("all");

    setStudent("all");

    setVerification("all");

    setDate("");

    setPage(1);

    toast.success(
      "Filters reset successfully."
    );
  };

  const handleImportCertificates =
    () => {
      toast.success(
        "Import feature coming soon."
      );
    };

  const handleDocumentation =
    () => {
      toast.success(
        "Documentation coming soon."
      );
    };
      return (
    <>
      <div className="space-y-8">
        <CertificatesHeader
          totalCertificates={
            certificateStats.total
          }
          issuedCertificates={
            certificateStats.issued
          }
          verifiedCertificates={
            certificateStats.verified
          }
          onIssueCertificate={() =>
            setIssueOpen(true)
          }
          onExport={handleExport}
          onBulkVerify={
            handleBulkVerify
          }
        />

        <CertificatesStats
          total={certificateStats.total}
          issued={certificateStats.issued}
          pending={
            certificateStats.pending
          }
          revoked={
            certificateStats.revoked
          }
          expired={
            certificateStats.expired
          }
          verified={
            certificateStats.verified
          }
          downloads={
            certificateStats.downloads
          }
          averageScore={
            certificateStats.averageScore
          }
        />

        <CertificatesToolbar
          search={search}
          onSearchChange={setSearch}
          status={status}
          onStatusChange={setStatus}
          category={category}
          onCategoryChange={setCategory}
          mentor={mentor}
          onMentorChange={setMentor}
          student={student}
          onStudentChange={setStudent}
          verification={
            verification
          }
          onVerificationChange={
            setVerification
          }
          date={date}
          onDateChange={setDate}
          statusOptions={
            statusOptions
          }
          categoryOptions={
            categoryOptions
          }
          mentorOptions={
            mentorOptions
          }
          studentOptions={
            studentOptions
          }
          verificationOptions={
            verificationOptions
          }
          view={view}
          onViewChange={setView}
          onRefresh={
            handleRefresh
          }
          onExport={handleExport}
        />

        {filteredCertificates.length ===
        0 ? (
          <CertificatesEmptyState
            search={search}
            activeFilters={
              activeFilters
            }
            onIssueCertificate={() =>
              setIssueOpen(true)
            }
            onRefresh={
              handleRefresh
            }
            onResetFilters={
              handleResetFilters
            }
            onImportCertificates={
              handleImportCertificates
            }
            onDocumentation={
              handleDocumentation
            }
          />
        ) : view === "grid" ? (
          <CertificatesGrid
            certificates={
              paginatedCertificates
            }
            onView={handleView}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onVerify={handleVerify}
            onRevoke={
              handleRevoke
            }
            onDownload={
              handleDownload
            }
          />
        ) : (
          <CertificatesTable
            certificates={
              paginatedCertificates
            }
            onView={handleView}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onVerify={handleVerify}
            onRevoke={
              handleRevoke
            }
            onDownload={
              handleDownload
            }
          />
        )}

        <CertificatesPagination
          page={page}
          totalPages={totalPages}
          totalItems={
            filteredCertificates.length
          }
          pageSize={PAGE_SIZE}
          onPageChange={setPage}
        />
      </div>

      {/* Drawer */}

      <CertificateDetailsDrawer
        open={detailsOpen}
        certificate={
          selectedCertificate
        }
        onClose={() =>
          setDetailsOpen(false)
        }
        onDownload={
          handleDownload
        }
        onVerify={handleVerify}
        onEdit={handleEdit}
      />

      {/* Issue */}

      <IssueCertificateDialog
        open={issueOpen}
        onOpenChange={
          setIssueOpen
        }
        students={studentOptions.filter(
          (item) =>
            item.value !== "all"
        )}
        mentors={mentorOptions.filter(
          (item) =>
            item.value !== "all"
        )}
        programs={programOptions}
        onSubmit={
          handleIssueCertificate
        }
      />

      {/* Edit */}

      <EditCertificateDialog
        open={editOpen}
        certificate={
          selectedCertificate
        }
        onOpenChange={
          setEditOpen
        }
        students={studentOptions.filter(
          (item) =>
            item.value !== "all"
        )}
        mentors={mentorOptions.filter(
          (item) =>
            item.value !== "all"
        )}
        programs={programOptions}
        onSubmit={
          handleUpdateCertificate
        }
      />

      {/* Delete */}

      <DeleteCertificateDialog
        open={deleteOpen}
        certificate={
          selectedCertificate
        }
        onOpenChange={
          setDeleteOpen
        }
        onConfirm={
          confirmDelete
        }
      />

      {/* Verify */}

      <VerifyCertificateDialog
        open={verifyOpen}
        certificate={
          selectedCertificate
        }
        onOpenChange={
          setVerifyOpen
        }
        onConfirm={
          confirmVerify
        }
      />

      {/* Revoke */}

      <RevokeCertificateDialog
        open={revokeOpen}
        certificate={
          selectedCertificate
        }
        onOpenChange={
          setRevokeOpen
        }
        onConfirm={
          confirmRevoke
        }
      />

      {/* Reissue */}

      <ReissueCertificateDialog
        open={reissueOpen}
        certificate={
          selectedCertificate
        }
        onOpenChange={
          setReissueOpen
        }
        onConfirm={
          confirmReissue
        }
      />
    </>
  );
}
