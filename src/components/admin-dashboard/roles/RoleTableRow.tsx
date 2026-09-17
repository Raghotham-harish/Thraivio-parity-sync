import {
  ShieldCheck,
  ShieldOff,
  BadgeCheck,
  Users,
  KeyRound,
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

import {
  TableCell,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";

import type {
  AdminRole,
} from "@/types/admin-role";

interface RoleTableRowProps {
  role: AdminRole;

  onView: (
    role: AdminRole
  ) => void;

  onEdit: (
    role: AdminRole
  ) => void;

  onDelete: (
    role: AdminRole
  ) => void;
}

export default function RoleTableRow({
  role,
  onView,
  onEdit,
  onDelete,
}: RoleTableRowProps) {
  return (
    <TableRow className="hover:bg-muted/40">

      <TableCell>

        <div className="flex items-center gap-3">

          <div
            className="flex h-11 w-11 items-center justify-center rounded-xl"
            style={{
              backgroundColor: `${role.color}20`,
            }}
          >
            <ShieldCheck
              className="h-5 w-5"
              style={{
                color: role.color,
              }}
            />
          </div>

          <div>

            <p className="font-semibold">
              {role.name}
            </p>

            <p className="text-xs text-muted-foreground">
              {role.roleId}
            </p>

          </div>

        </div>

      </TableCell>

      <TableCell>

        <Badge
          variant="outline"
          className="capitalize"
        >
          {role.type}
        </Badge>

      </TableCell>

      <TableCell>

        {role.status === "active" ? (
          <Badge className="bg-[#ECFDF5] hover:bg-[#ECFDF5]">
            <BadgeCheck className="mr-1 h-3 w-3" />
            Active
          </Badge>
        ) : (
          <Badge variant="secondary">
            <ShieldOff className="mr-1 h-3 w-3" />
            Inactive
          </Badge>
        )}

      </TableCell>

      <TableCell>

        <div className="flex items-center gap-2">

          <Users className="h-4 w-4 text-muted-foreground" />

          <span className="font-medium">
            {role.usersCount}
          </span>

        </div>

      </TableCell>

      <TableCell>

        <div className="flex items-center gap-2">

          <KeyRound className="h-4 w-4 text-muted-foreground" />

          <span className="font-medium">
            {role.permissionsCount}
          </span>

        </div>

      </TableCell>
            <TableCell>

        <p className="text-sm font-medium">
          {role.updatedAt}
        </p>

      </TableCell>

      <TableCell>

        <div className="flex items-center justify-end gap-2">

          <Button
            size="icon"
            variant="outline"
            onClick={() => onView(role)}
          >
            <Eye className="h-4 w-4" />
          </Button>

          <Button
            size="icon"
            variant="outline"
            onClick={() => onEdit(role)}
          >
            <Pencil className="h-4 w-4" />
          </Button>

          <Button
            size="icon"
            variant="destructive"
            onClick={() => onDelete(role)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>

        </div>

      </TableCell>
          </TableRow>
  );
}