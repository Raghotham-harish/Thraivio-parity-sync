import {
  Archive,
  CalendarDays,
  Eye,
  FileEdit,
  Globe,
  Tag,
  User,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import { Badge } from "@/components/ui/badge";

import type {
  AdminCMSPage,
} from "@/types/admin-cms";

interface CMSDetailsDialogProps {
  open: boolean;

  page: AdminCMSPage | null;

  onOpenChange: (
    open: boolean
  ) => void;
}

export default function CMSDetailsDialog({
  open,
  page,
  onOpenChange,
}: CMSDetailsDialogProps) {
  if (!page) return null;

  const statusBadge = () => {
    switch (page.status) {
      case "published":
        return (
          <Badge className="bg-emerald-500 hover:bg-emerald-500">
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
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="max-w-4xl rounded-3xl">

        <DialogHeader>

          <DialogTitle>
            CMS Page Details
          </DialogTitle>

          <DialogDescription>
            View complete information,
            SEO metadata and publishing
            details for this page.
          </DialogDescription>

        </DialogHeader>

        <div className="space-y-6">

          <div className="flex items-start justify-between">

            <div className="flex items-center gap-4">

              <Avatar className="h-16 w-16">

                <AvatarImage
                  src={page.author.avatar}
                />

                <AvatarFallback>
                  {page.author.name.slice(0, 2)}
                </AvatarFallback>

              </Avatar>

              <div>

                <h3 className="text-lg font-semibold">
                  {page.author.name}
                </h3>

                <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">

                  <User className="h-4 w-4" />

                  <span>
                    Content Author
                  </span>

                </div>

              </div>

            </div>

            {statusBadge()}

          </div>
                    <div className="grid gap-4 md:grid-cols-2">

            <div className="rounded-2xl border p-5">

              <div className="mb-4 flex items-center gap-2">

                <Tag className="h-5 w-5 text-primary" />

                <h4 className="font-semibold">
                  Page Information
                </h4>

              </div>

              <div className="space-y-3 text-sm">

                <div className="flex items-center justify-between">

                  <span className="text-muted-foreground">
                    Page ID
                  </span>

                  <span className="font-medium">
                    {page.pageId}
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-muted-foreground">
                    Category
                  </span>

                  <Badge
                    variant="outline"
                    className="capitalize"
                  >
                    {page.category}
                  </Badge>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-muted-foreground">
                    Slug
                  </span>

                  <span className="font-medium">
                    {page.slug}
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-muted-foreground">
                    Views
                  </span>

                  <div className="flex items-center gap-2">

                    <Eye className="h-4 w-4" />

                    <span className="font-medium">
                      {page.views.toLocaleString()}
                    </span>

                  </div>

                </div>

              </div>

            </div>

            <div className="rounded-2xl border p-5">

              <div className="mb-4 flex items-center gap-2">

                <CalendarDays className="h-5 w-5 text-primary" />

                <h4 className="font-semibold">
                  Publishing Timeline
                </h4>

              </div>

              <div className="space-y-3 text-sm">

                <div className="flex items-center justify-between">

                  <span className="text-muted-foreground">
                    Created
                  </span>

                  <span className="font-medium">
                    {page.createdAt}
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-muted-foreground">
                    Updated
                  </span>

                  <span className="font-medium">
                    {page.updatedAt}
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-muted-foreground">
                    Published
                  </span>

                  <span className="font-medium">
                    {page.publishedAt || "--"}
                  </span>

                </div>

              </div>

            </div>

          </div>

          <div className="rounded-2xl border p-5">

            <h3 className="text-lg font-semibold">
              {page.title}
            </h3>

            <p className="mt-4 leading-7 text-muted-foreground">
              {page.description}
            </p>

          </div>

          <div className="rounded-2xl border p-5">

            <h4 className="font-semibold">
              SEO Metadata
            </h4>

            <div className="mt-4 space-y-4">

              <div>

                <p className="text-sm font-medium">
                  SEO Title
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  {page.seoTitle}
                </p>

              </div>

              <div>

                <p className="text-sm font-medium">
                  SEO Description
                </p>

                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  {page.seoDescription}
                </p>

              </div>

            </div>

          </div>
                  </div>

      </DialogContent>

    </Dialog>
  );
}