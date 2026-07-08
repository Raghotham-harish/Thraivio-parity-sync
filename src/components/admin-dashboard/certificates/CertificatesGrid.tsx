import { memo } from "react";

import type {
  AdminCertificate,
} from "@/types/admin-certificate";

import CertificateGridCard from "./CertificateGridCard";

interface CertificatesGridProps {
  certificates: AdminCertificate[];

  onView: (
    certificate: AdminCertificate
  ) => void;

  onEdit: (
    certificate: AdminCertificate
  ) => void;

  onDelete: (
    certificate: AdminCertificate
  ) => void;

  onVerify: (
    certificate: AdminCertificate
  ) => void;

  onRevoke: (
    certificate: AdminCertificate
  ) => void;

  onDownload: (
    certificate: AdminCertificate
  ) => void;
}

const CertificatesGrid = ({
  certificates,

  onView,
  onEdit,
  onDelete,
  onVerify,
  onRevoke,
  onDownload,
}: CertificatesGridProps) => {
  return (
    <section
      className="
        grid
        gap-6

        md:grid-cols-2

        2xl:grid-cols-3
      "
    >
      {certificates.map(
        (certificate) => (
          <CertificateGridCard
            key={certificate.id}
            certificate={
              certificate
            }
            onView={onView}
            onEdit={onEdit}
            onDelete={onDelete}
            onVerify={
              onVerify
            }
            onRevoke={
              onRevoke
            }
            onDownload={
              onDownload
            }
          />
        )
      )}
    </section>
  );
};

export default memo(
  CertificatesGrid
);