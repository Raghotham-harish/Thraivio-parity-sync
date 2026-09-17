import {
  Download,
  Eye,
  ShieldCheck,
} from "lucide-react";

import { StatusBadge, type StatusBadgeVariant } from "@/components/shared/StatusBadge";
import type { Certificate } from "@/types/certificate";

interface CertificateListCardProps {
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

const CertificateListCard = ({
  certificate,
  onView,
  onDownload,
  onVerify,
}: CertificateListCardProps) => {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-border bg-card px-4 py-3 shadow-sm transition-colors hover:bg-secondary/40">
      <img
        src={certificate.mentorImage}
        alt={certificate.mentorName}
        className="h-10 w-10 shrink-0 rounded-full object-cover"
      />
      <div className="min-w-0 flex-1">
        <h3 className="truncate text-sm font-semibold text-foreground">{certificate.title}</h3>
        <p className="truncate text-xs text-muted-foreground">
          {certificate.mentorName} · {certificate.credentialId}
        </p>
      </div>

      <div className="hidden shrink-0 text-center text-xs text-muted-foreground sm:block">
        <p className="font-semibold text-foreground">{certificate.issueDate}</p>
        {certificate.category}
      </div>

      <div className="hidden w-14 shrink-0 text-right text-xs lg:block">
        <span className="font-semibold text-foreground">{certificate.score ?? "—"}</span>
        <p className="text-muted-foreground">score</p>
      </div>

      <StatusBadge variant={statusVariant[certificate.status]} className="shrink-0">
        {certificate.status}
      </StatusBadge>

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
          onClick={() => onVerify(certificate)}
          aria-label="Verify credential"
          title="Verify"
          className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-[#EFF6FF] hover:text-primary"
        >
          <ShieldCheck className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default CertificateListCard;
