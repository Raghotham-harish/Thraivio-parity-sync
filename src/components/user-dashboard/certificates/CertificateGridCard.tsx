import {
  Award,
  Download,
  Eye,
  ShieldCheck,
} from "lucide-react";

import { StatusBadge, type StatusBadgeVariant } from "@/components/shared/StatusBadge";
import type { Certificate } from "@/types/certificate";

interface CertificateGridCardProps {
  certificate: Certificate;

  onView: (certificate: Certificate) => void;

  onDownload: (certificate: Certificate) => void;

  onVerify: (certificate: Certificate) => void;
}

const statusVariant: Record<Certificate["status"], StatusBadgeVariant> = {
  issued: "success",
  pending: "warning",
  expired: "error",
};

const CertificateGridCard = ({
  certificate,
  onView,
  onDownload,
  onVerify,
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
            <h3 className="truncate font-semibold text-foreground">{certificate.title}</h3>
            <p className="truncate text-xs text-muted-foreground">
              {certificate.category} · {certificate.credentialId}
            </p>
          </div>
        </div>
        <StatusBadge variant={statusVariant[certificate.status]} className="shrink-0">
          {certificate.status}
        </StatusBadge>
      </div>

      {/* Mentor */}
      <div className="mt-3 flex items-center gap-2 rounded-xl bg-secondary px-3 py-2">
        <img
          src={certificate.mentorImage}
          alt={certificate.mentorName}
          className="h-6 w-6 shrink-0 rounded-full object-cover"
        />
        <span className="min-w-0 flex-1 truncate text-sm font-medium text-foreground">
          {certificate.mentorName}
        </span>
        <span className="shrink-0 text-xs text-muted-foreground">{certificate.mentorCompany}</span>
      </div>

      {/* Stat strip */}
      <div className="mt-3 grid grid-cols-2 divide-x divide-border rounded-xl bg-secondary py-2 text-center">
        <div>
          <p className="text-xs font-bold text-foreground">{certificate.issueDate}</p>
          <p className="text-[10px] text-muted-foreground">Issued</p>
        </div>
        <div>
          <p className="text-xs font-bold text-foreground">{certificate.score ?? "—"}</p>
          <p className="text-[10px] text-muted-foreground">Score</p>
        </div>
      </div>

      {/* Skills */}
      <div className="mt-3 flex flex-wrap items-center gap-1.5 text-xs">
        {certificate.skills.slice(0, 3).map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-secondary px-2.5 py-1 text-[11px] text-muted-foreground"
          >
            {skill}
          </span>
        ))}
        {certificate.skills.length > 3 && (
          <span className="text-[11px] text-muted-foreground">
            +{certificate.skills.length - 3}
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
          onClick={() => onVerify(certificate)}
          aria-label="Verify credential"
          title="Verify"
          className="rounded-lg border border-border p-2 text-primary transition-colors hover:bg-[#EFF6FF]"
        >
          <ShieldCheck className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default CertificateGridCard;
