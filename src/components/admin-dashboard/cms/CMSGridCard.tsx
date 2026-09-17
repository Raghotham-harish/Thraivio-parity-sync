import {
  Archive,
  Eye,
  FileEdit,
  Globe,
  MoreHorizontal,
  Trash2,
} from "lucide-react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

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
          <Badge className="bg-[#ECFDF5] hover:bg-[#ECFDF5]">
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
    <Card className="rounded-2xl border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      <CardContent className="space-y-6 p-6">

        <div className="flex items-start justify-between">

          <div className="flex items-center gap-3">

            <Avatar className="h-14 w-14">

              <AvatarImage
                src={page.author.avatar}
              />

              <AvatarFallback>
                {page.author.name.slice(0, 2)}
              </AvatarFallback>

            </Avatar>

            <div>

              <h3 className="font-semibold">
                {page.author.name}
              </h3>

              <p className="text-sm text-muted-foreground">
                {page.pageId}
              </p>

            </div>

          </div>

          {statusBadge()}

        </div>
                <div className="space-y-3">

          <div className="flex items-center justify-between">

            <h4 className="line-clamp-1 text-lg font-semibold">
              {page.title}
            </h4>

            <Badge
              variant="outline"
              className="capitalize"
            >
              {page.category}
            </Badge>

          </div>

          <p className="line-clamp-3 text-sm leading-6 text-muted-foreground">
            {page.description}
          </p>

        </div>

        <div className="grid grid-cols-2 gap-4 rounded-2xl border bg-muted/30 p-4">

          <div>

            <p className="text-xs text-muted-foreground">
              Slug
            </p>

            <p className="mt-1 truncate font-medium">
              {page.slug}
            </p>

          </div>

          <div>

            <p className="text-xs text-muted-foreground">
              Views
            </p>

            <div className="mt-1 flex items-center gap-2">

              <Eye className="h-4 w-4 text-muted-foreground" />

              <span className="font-semibold">
                {page.views.toLocaleString()}
              </span>

            </div>

          </div>

          <div>

            <p className="text-xs text-muted-foreground">
              Updated
            </p>

            <p className="mt-1 font-medium">
              {page.updatedAt}
            </p>

          </div>

          <div>

            <p className="text-xs text-muted-foreground">
              Published
            </p>

            <p className="mt-1 font-medium">
              {page.publishedAt || "--"}
            </p>

          </div>

        </div>

        <div className="rounded-2xl border p-4">

          <p className="text-xs text-muted-foreground">
            SEO Title
          </p>

          <p className="mt-2 line-clamp-2 font-medium">
            {page.seoTitle}
          </p>

        </div>
                <div className="flex flex-wrap gap-3">

          <Button
            variant="outline"
            className="flex-1 rounded-xl"
            onClick={() => onView(page)}
          >
            <Eye className="mr-2 h-4 w-4" />
            View
          </Button>

          <Button
            variant="outline"
            className="flex-1 rounded-xl"
            onClick={() => onEdit(page)}
          >
            <MoreHorizontal className="mr-2 h-4 w-4" />
            Edit
          </Button>

          <Button
            variant="destructive"
            className="rounded-xl"
            onClick={() => onDelete(page)}
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Delete
          </Button>

        </div>

      </CardContent>

    </Card>
  );
}