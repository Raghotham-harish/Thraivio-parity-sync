import {
  Archive,
  Eye,
  FileEdit,
  Globe,
  Pencil,
  Trash2,
} from "lucide-react";

import {
  TableCell,
  TableRow,
} from "@/components/ui/table";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import type {
  AdminCMSPage,
} from "@/types/admin-cms";

interface CMSTableRowProps {
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

export default function CMSTableRow({
  page,
  onView,
  onEdit,
  onDelete,
}: CMSTableRowProps) {
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
    <TableRow className="hover:bg-muted/40">
              <TableCell>

        <div className="flex items-center gap-3">

          <Avatar className="h-11 w-11">

            <AvatarImage
              src={page.author.avatar}
            />

            <AvatarFallback>
              {page.author.name.slice(0, 2)}
            </AvatarFallback>

          </Avatar>

          <div>

            <p className="font-medium">
              {page.author.name}
            </p>

            <p className="text-xs text-muted-foreground">
              {page.pageId}
            </p>

          </div>

        </div>

      </TableCell>

      <TableCell>

        <div className="space-y-1">

          <p className="font-medium line-clamp-1">
            {page.title}
          </p>

          <p className="text-xs text-muted-foreground line-clamp-1">
            {page.slug}
          </p>

        </div>

      </TableCell>

      <TableCell>

        <Badge
          variant="outline"
          className="capitalize"
        >
          {page.category}
        </Badge>

      </TableCell>

      <TableCell>

        {statusBadge()}

      </TableCell>

      <TableCell>

        <div className="space-y-1">

          <p className="font-medium">
            {page.views.toLocaleString()}
          </p>

          <p className="text-xs text-muted-foreground">
            Total Views
          </p>

        </div>

      </TableCell>

      <TableCell>

        <p className="text-sm font-medium">
          {page.updatedAt}
        </p>

      </TableCell>

      <TableCell>

        <div className="flex items-center justify-end gap-2">

          <Button
            size="icon"
            variant="outline"
            onClick={() => onView(page)}
            aria-label="View page"
            title="View"
          >
            <Eye className="h-4 w-4" />
          </Button>

          <Button
            size="icon"
            variant="outline"
            onClick={() => onEdit(page)}
            aria-label="Edit page"
            title="Edit"
          >
            <Pencil className="h-4 w-4" />
          </Button>

          <Button
            size="icon"
            variant="destructive"
            onClick={() => onDelete(page)}
            aria-label="Delete page"
            title="Delete"
          >
            <Trash2 className="h-4 w-4" />
          </Button>

        </div>

      </TableCell>
          </TableRow>
  );
}