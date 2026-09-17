import { Award, Pencil, Trash2 } from "lucide-react";

import type { Certification } from "@/types/certification";

interface CertificationGridCardProps {
  certification: Certification;

  onEdit: (certification: Certification) => void;

  onDelete: (certification: Certification) => void;
}

const CertificationGridCard = ({
  certification,
  onEdit,
  onDelete,
}: CertificationGridCardProps) => {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:shadow-md">
      <div className="icon-bg flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
        <Award className="h-5 w-5 text-primary" />
      </div>
      <h3 className="min-w-0 flex-1 truncate font-semibold text-foreground">
        {certification.title}
      </h3>
      <div className="flex shrink-0 items-center gap-2">
        <button
          type="button"
          onClick={() => onEdit(certification)}
          aria-label="Edit certification"
          title="Edit"
          className="rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <Pencil className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => onDelete(certification)}
          aria-label="Delete certification"
          title="Delete"
          className="rounded-lg border border-border p-2 text-red-600 transition-colors hover:bg-[#FFDAD6]"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default CertificationGridCard;
