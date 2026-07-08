import { memo } from "react";

import type {
  AdminCertificate,
} from "@/types/admin-certificate";

import CertificateListRow from "./CertificateListRow";

interface CertificatesTableProps {
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

const CertificatesTable = ({
  certificates,

  onView,
  onEdit,
  onDelete,
  onVerify,
  onRevoke,
  onDownload,
}: CertificatesTableProps) => {
  return (
    <section
      className="
        space-y-6
      "
    >
      {certificates.map(
        (certificate) => (
          <CertificateListRow
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
  CertificatesTable
);