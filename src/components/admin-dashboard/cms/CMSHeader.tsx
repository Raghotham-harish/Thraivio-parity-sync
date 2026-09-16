import { Download, FileText, Plus } from "lucide-react";

import { FeatureHeader } from "@/components/admin-dashboard/shared/FeatureHeader";

interface CMSHeaderProps {
  totalPages: number;
  totalViews: number;
  onCreate: () => void;
  onExport: () => void;
}

export default function CMSHeader({
  totalPages,
  totalViews,
  onCreate,
  onExport,
}: CMSHeaderProps) {
  return (
    <FeatureHeader
      icon={FileText}
      eyebrow="CMS Management"
      title="Content Management System"
      description="Manage landing pages, blogs, FAQs, policies, static pages, SEO content and website sections from one centralized dashboard."
      meta={[
        { icon: FileText, label: `${totalPages.toLocaleString()} Pages` },
        { label: `${totalViews.toLocaleString()} Views` },
      ]}
      primaryAction={{ label: "Create Page", icon: Plus, onClick: onCreate }}
      secondaryAction={{ label: "Export", icon: Download, onClick: onExport }}
    />
  );
}
