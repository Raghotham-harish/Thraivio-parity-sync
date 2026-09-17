import {
  Archive,
  Eye,
  FileEdit,
  Globe,
  Pencil,
  Trash2,
} from "lucide-react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import { Badge } from "@/components/ui/badge";

import type {
  AdminCMSPage,
} from "@/types/admin-cms";

interface CMSGridCardProps {
  page: AdminCMSPage;

  onView: (
    page: AdminCMSPage
  ) => void;

  onEdit: (
    page: AdminCMSPage
  ) => void;

  onDelete: (
    page: AdminCMSPage
  ) => void;
}

export default function CMSGridCard({
  page,
  onView,
  onEdit,
  onDelete,
}: CMSGridCardProps) {
  const statusBadge = () => {
    switch (page.status) {
      case "published":
        return (
          <Badge className="bg-[#ECFDF5] text-[#065F46] hover:bg-[#ECFDF5]">
            <Globe className="mr-1 h-3 w-3" />
            Published
          </Badge>
        );

      case "draft":
        return (
          <Badge variant="secondary">
            <FileEdit className="mr-1 h-3 w-3" />
            Draft
          </Badge>
        );

      case "archived":
        return (
          <Badge variant="outline">
            <Archive className="mr-1 h-3 w-3" />
            Archived
          </Badge>
        );
    }
  };

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <Avatar className="h-10 w-10 shrink-0">
            <AvatarImage src={page.author.avatar} />
            <AvatarFallback>{page.author.name.slice(0, 2)}</AvatarFallback>
          </Avatar>

          <div className="min-w-0">
            <h3 className="truncate font-semibold text-foreground">
              {page.author.name}
            </h3>
            <p className="truncate text-xs text-muted-foreground">{page.pageId}</p>
          </div>
        </div>

        <div className="shrink-0">{statusBadge()}</div>
      </div>

      <div className="mt-3 flex items-center justify-between gap-2">
        <h4 className="truncate font-semibold text-foreground">{page.title}</h4>
        <Badge variant="outline" className="shrink-0 capitalize">
          {page.category}
        </Badge>
      </div>
      <p className="mt-1 line-clamp-2 text-sm leading-6 text-muted-foreground">
        {page.description}
      </p>

      {/* Meta row */}
      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
        <span className="truncate">/{page.slug}</span>
        <span className="flex items-center gap-1">
          <Eye className="h-3.5 w-3.5" />
          <span className="font-semibold text-foreground">{page.views.toLocaleString()}</span> views
        </span>
        <span>Updated {page.updatedAt}</span>
      </div>

      {/* Actions */}
      <div className="mt-3 flex items-center gap-2">
        <button
          type="button"
          onClick={() => onView(page)}
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
        >
          <Eye className="h-4 w-4" />
          View
        </button>

        <button
          type="button"
          onClick={() => onEdit(page)}
          aria-label="Edit page"
          title="Edit"
          className="rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <Pencil className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={() => onDelete(page)}
          aria-label="Delete page"
          title="Delete"
          className="rounded-lg border border-border p-2 text-red-600 transition-colors hover:bg-[#FFDAD6]"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
