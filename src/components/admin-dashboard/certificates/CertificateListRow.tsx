import { memo } from "react";

import {
  Ban,
  Download,
  Eye,
  Pencil,
  ShieldCheck,
  Trash2,
} from "lucide-react";

import { StatusBadge, type StatusBadgeVariant } from "@/components/shared/StatusBadge";
import type { AdminCertificate } from "@/types/admin-certificate";

interface CertificateListRowProps {
  certificate: AdminCertificate;

  onView: (certificate: AdminCertificate) => void;

  onEdit: (certificate: AdminCertificate) => void;

  onDelete: (certificate: AdminCertificate) => void;

  onVerify: (certificate: AdminCertificate) => void;

  onRevoke: (certificate: AdminCertificate) => void;

  onDownload: (certificate: AdminCertificate) => void;
}

const statusVariant: Record<AdminCertificate["status"], StatusBadgeVariant> = {
  issued: "success",
  pending: "warning",
  revoked: "error",
  expired: "neutral",
};

const verificationVariant: Record<AdminCertificate["verificationStatus"], StatusBadgeVariant> = {
  verified: "info",
  unverified: "warning",
};

const CertificateListRow = ({
  certificate,
  onView,
  onEdit,
  onDelete,
  onVerify,
  onRevoke,
  onDownload,
}: CertificateListRowProps) => {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-border bg-card px-4 py-3 shadow-sm transition-colors hover:bg-secondary/40">
      {/* Identity */}
      <img
        src={certificate.studentImage}
        alt={certificate.studentName}
        className="h-10 w-10 shrink-0 rounded-full object-cover"
      />
      <div className="min-w-0 flex-1">
        <h3 className="truncate text-sm font-semibold text-foreground">
          {certificate.title}
        </h3>
        <p className="truncate text-xs text-muted-foreground">
          {certificate.studentName} · {certificate.certificateNumber}
        </p>
      </div>

      {/* Mentor */}
      <div className="hidden shrink-0 items-center gap-1.5 sm:flex">
        <img
          src={certificate.mentorImage}
          alt={certificate.mentorName}
          className="h-7 w-7 rounded-full object-cover"
        />
        <span className="max-w-[8rem] truncate text-xs text-muted-foreground">
          {certificate.mentorName}
        </span>
      </div>

      {/* Issue date + score */}
      <div className="hidden shrink-0 text-center text-xs text-muted-foreground lg:block">
        <p className="font-semibold text-foreground">{certificate.issueDate}</p>
        {certificate.score ?? "—"}
      </div>

      {/* Downloads */}
      <div className="hidden w-16 shrink-0 text-right text-xs xl:block">
        <span className="font-semibold text-foreground">{certificate.downloadCount}</span>
        <p className="text-muted-foreground">downloads</p>
      </div>

      {/* Verification */}
      <StatusBadge variant={verificationVariant[certificate.verificationStatus]} className="hidden shrink-0 sm:inline-flex">
        {certificate.verificationStatus}
      </StatusBadge>

      {/* Status */}
      <StatusBadge variant={statusVariant[certificate.status]} className="shrink-0">
        {certificate.status}
      </StatusBadge>

      {/* Actions */}
      <div className="flex shrink-0 items-center gap-1.5">
        <button
          type="button"
          onClick={() => onView(certificate)}
          aria-label="View certificate"
          title="View"
          className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
        >
          <Eye className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => onDownload(certificate)}
          aria-label="Download certificate"
          title="Download"
          className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <Download className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => onEdit(certificate)}
          aria-label="Edit certificate"
          title="Edit"
          className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <Pencil className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => onVerify(certificate)}
          disabled={certificate.verificationStatus === "verified"}
          aria-label="Verify certificate"
          title="Verify"
          className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-[#EFF6FF] hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ShieldCheck className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => onRevoke(certificate)}
          disabled={certificate.status === "revoked"}
          aria-label="Revoke certificate"
          title="Revoke"
          className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-[#FFFBEB] hover:text-[#B45309] disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Ban className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => onDelete(certificate)}
          aria-label="Delete certificate"
          title="Delete"
          className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-[#FFDAD6] hover:text-red-600"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default memo(CertificateListRow);
