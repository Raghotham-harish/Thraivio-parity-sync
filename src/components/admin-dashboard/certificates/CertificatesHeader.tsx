import { memo } from "react";

import {
  Award,
  BadgeCheck,
  Download,
  FilePlus2,
  ShieldCheck,
} from "lucide-react";

import { FeatureHeader } from "@/components/admin-dashboard/shared/FeatureHeader";

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
    <FeatureHeader
      icon={Award}
      eyebrow="Certificates Management"
      title="Manage Platform Certificates"
      description="Issue, verify, revoke and manage certificates earned from Programs, Sessions and Events. Monitor verification status, downloads and learner achievements from one dashboard."
      meta={[
        { label: `${totalCertificates.toLocaleString()} Total` },
        { icon: BadgeCheck, label: `${issuedCertificates.toLocaleString()} Issued` },
        { icon: ShieldCheck, label: `${verifiedCertificates.toLocaleString()} Verified` },
      ]}
      primaryAction={{ label: "Issue Certificate", icon: FilePlus2, onClick: onIssueCertificate }}
      extraActions={[{ label: "Bulk Verify", icon: ShieldCheck, onClick: onBulkVerify }]}
      secondaryAction={{ label: "Export Data", icon: Download, onClick: onExport }}
    />
  );
};

export default memo(CertificatesHeader);
