import {
  FileText,
  Download,
  Plus,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
    <section className="rounded-3xl border bg-background p-6 shadow-sm">

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        <div className="space-y-4">

          <Badge
            variant="secondary"
            className="w-fit rounded-full px-4 py-1"
          >
            CMS Management
          </Badge>

          <div>

            <h1 className="text-3xl font-bold tracking-tight">
              Content Management System
            </h1>

            <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
              Manage landing pages, blogs,
              FAQs, policies, static pages,
              SEO content and website sections
              from one centralized dashboard.
            </p>

          </div>

          <div className="flex flex-wrap items-center gap-3">

            <div className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm">

              <FileText className="h-4 w-4 text-primary" />

              <span>
                {totalPages.toLocaleString()} Pages
              </span>

            </div>

            <div className="rounded-full border px-4 py-2 text-sm font-semibold">

              {totalViews.toLocaleString()} Views

            </div>

          </div>

        </div>

        <div className="flex flex-wrap gap-3">

          <Button
            variant="outline"
            className="rounded-xl"
            onClick={onExport}
          >
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>

          <Button
            className="rounded-xl"
            onClick={onCreate}
          >
            <Plus className="mr-2 h-4 w-4" />
            Create Page
          </Button>

        </div>

      </div>
          </section>
  );
}