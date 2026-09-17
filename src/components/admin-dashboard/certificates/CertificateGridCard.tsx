import { memo } from "react";

import {
  Award,
  Ban,
  Download,
  Eye,
  Pencil,
  ShieldCheck,
  Trash2,
} from "lucide-react";

import { StatusBadge, type StatusBadgeVariant } from "@/components/admin-dashboard/shared/StatusBadge";
import type { AdminCertificate } from "@/types/admin-certificate";

interface CertificateGridCardProps {
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

const CertificateGridCard = ({
  certificate,
  onView,
  onEdit,
  onDelete,
  onVerify,
  onRevoke,
  onDownload,
}: CertificateGridCardProps) => {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:shadow-md">
      {/* Title + status */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex min-w-0 items-start gap-2">
          <div className="icon-bg mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg">
            <Award className="h-4 w-4 text-primary" />
          </div>
          <div className="min-w-0">
            <h3 className="truncate font-semibold text-foreground">
              {certificate.title}
            </h3>
            <p className="truncate text-xs text-muted-foreground">
              {certificate.certificateNumber} · {certificate.category}
            </p>
          </div>
        </div>
        <StatusBadge variant={statusVariant[certificate.status]} className="shrink-0">
          {certificate.status}
        </StatusBadge>
      </div>

      {/* Student -> mentor */}
      <div className="mt-3 flex items-center gap-2 rounded-xl bg-secondary px-3 py-2">
        <div className="flex min-w-0 flex-1 items-center gap-1.5">
          <img
            src={certificate.studentImage}
            alt={certificate.studentName}
            className="h-6 w-6 shrink-0 rounded-full object-cover"
          />
          <span className="truncate text-sm font-medium text-foreground">
            {certificate.studentName}
          </span>
        </div>
        <span className="shrink-0 text-[10px] text-muted-foreground">issued by</span>
        <div className="flex min-w-0 flex-1 items-center gap-1.5">
          <img
            src={certificate.mentorImage}
            alt={certificate.mentorName}
            className="h-6 w-6 shrink-0 rounded-full object-cover"
          />
          <span className="truncate text-sm font-medium text-foreground">
            {certificate.mentorName}
          </span>
        </div>
      </div>

      {/* Stat strip */}
      <div className="mt-3 grid grid-cols-3 divide-x divide-border rounded-xl bg-secondary py-2 text-center">
        <div>
          <p className="text-xs font-bold text-foreground">{certificate.issueDate}</p>
          <p className="text-[10px] text-muted-foreground">Issued</p>
        </div>
        <div>
          <p className="text-xs font-bold text-foreground">{certificate.score ?? "—"}</p>
          <p className="text-[10px] text-muted-foreground">Score</p>
        </div>
        <div>
          <p className="text-xs font-bold text-foreground">{certificate.downloadCount}</p>
          <p className="text-[10px] text-muted-foreground">Downloads</p>
        </div>
      </div>

      {/* Verification + skills */}
      <div className="mt-3 flex flex-wrap items-center gap-1.5 text-xs">
        <StatusBadge variant={verificationVariant[certificate.verificationStatus]}>
          {certificate.verificationStatus}
        </StatusBadge>
        {certificate.skills.slice(0, 2).map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-secondary px-2.5 py-1 text-[11px] text-muted-foreground"
          >
            {skill}
          </span>
        ))}
        {certificate.skills.length > 2 && (
          <span className="text-[11px] text-muted-foreground">
            +{certificate.skills.length - 2}
          </span>
        )}
      </div>

      {/* Actions */}
      <div className="mt-3 flex items-center gap-2">
        <button
          type="button"
          onClick={() => onView(certificate)}
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
        >
          <Eye className="h-4 w-4" />
          View
        </button>

        <button
          type="button"
          onClick={() => onDownload(certificate)}
          aria-label="Download certificate"
          title="Download"
          className="rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <Download className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={() => onEdit(certificate)}
          aria-label="Edit certificate"
          title="Edit"
          className="rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <Pencil className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={() => onVerify(certificate)}
          disabled={certificate.verificationStatus === "verified"}
          aria-label="Verify certificate"
          title="Verify"
          className="rounded-lg border border-border p-2 text-primary transition-colors hover:bg-[#EFF6FF] disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ShieldCheck className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={() => onRevoke(certificate)}
          disabled={certificate.status === "revoked"}
          aria-label="Revoke certificate"
          title="Revoke"
          className="rounded-lg border border-border p-2 text-[#B45309] transition-colors hover:bg-[#FFFBEB] disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Ban className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={() => onDelete(certificate)}
          aria-label="Delete certificate"
          title="Delete"
          className="rounded-lg border border-border p-2 text-red-600 transition-colors hover:bg-[#FFDAD6]"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default memo(CertificateGridCard);
