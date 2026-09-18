import { Building2, RefreshCcw } from "lucide-react";

import { EmptyState } from "@/components/shared/EmptyState";
import folderIllustration from "@/assets/illustrations/folder.svg";

interface EmptyCompaniesProps {
  hasFilters?: boolean;

  onAddCompany: () => void;

  onReset?: () => void;
}

const EmptyCompanies = ({ hasFilters = false, onAddCompany, onReset }: EmptyCompaniesProps) => {
  return (
    <EmptyState
      illustration={folderIllustration}
      title={hasFilters ? "No Matching Companies" : "No Companies Yet"}
      description={
        hasFilters
          ? "No companies match your search. Try a different name or industry."
          : "Onboard your first B2B customer - a company account gives their team seats, its own admin, and a branded portal."
      }
      action={
        hasFilters
          ? { label: "Reset Search", onClick: onReset ?? (() => {}), icon: RefreshCcw }
          : { label: "Add Company", onClick: onAddCompany, icon: Building2 }
      }
    />
  );
};

export default EmptyCompanies;
