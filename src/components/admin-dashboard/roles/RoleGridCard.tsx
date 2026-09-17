import {
  ShieldCheck,
  Users,
  KeyRound,
  CalendarDays,
  Eye,
  Pencil,
  Trash2,
  BadgeCheck,
  ShieldOff,
} from "lucide-react";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";

import type {
  AdminRole,
} from "@/types/admin-role";

interface RoleGridCardProps {
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

export default function RoleGridCard({
  role,
  onView,
  onEdit,
  onDelete,
}: RoleGridCardProps) {
  return (
    <Card className="rounded-2xl border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      <CardContent className="space-y-6 p-6">

        <div className="flex items-start justify-between">

          <div className="flex items-center gap-4">

            <div
              className="flex h-14 w-14 items-center justify-center rounded-2xl"
              style={{
                backgroundColor: `${role.color}20`,
              }}
            >
              <ShieldCheck
                className="h-7 w-7"
                style={{
                  color: role.color,
                }}
              />
            </div>

            <div>

              <h3 className="text-lg font-semibold">
                {role.name}
              </h3>

              <p className="text-sm text-muted-foreground">
                {role.roleId}
              </p>

            </div>

          </div>

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

        </div>

        <p className="line-clamp-3 text-sm leading-6 text-muted-foreground">
          {role.description}
        </p>

        <div className="grid grid-cols-2 gap-4 rounded-2xl border bg-muted/30 p-4">

          <div className="flex items-center gap-2">

            <Users className="h-4 w-4 text-primary" />

            <div>

              <p className="text-xs text-muted-foreground">
                Users
              </p>

              <p className="font-semibold">
                {role.usersCount}
              </p>

            </div>

          </div>

          <div className="flex items-center gap-2">

            <KeyRound className="h-4 w-4 text-primary" />

            <div>

              <p className="text-xs text-muted-foreground">
                Permissions
              </p>

              <p className="font-semibold">
                {role.permissionsCount}
              </p>

            </div>

          </div>

          <div className="flex items-center gap-2">

            <CalendarDays className="h-4 w-4 text-primary" />

            <div>

              <p className="text-xs text-muted-foreground">
                Updated
              </p>

              <p className="font-semibold">
                {role.updatedAt}
              </p>

            </div>

          </div>

          <div>

            <Badge
              variant="outline"
              className="capitalize"
            >
              {role.type}
            </Badge>

          </div>

        </div>
                <div className="rounded-2xl border p-4">

          <p className="text-xs text-muted-foreground">
            Created By
          </p>

          <p className="mt-2 font-semibold">
            {role.createdBy}
          </p>

          <p className="mt-1 text-sm text-muted-foreground">
            Created on {role.createdAt}
          </p>

        </div>

        <div className="flex flex-wrap gap-3">

          <Button
            variant="outline"
            className="flex-1 rounded-xl"
            onClick={() => onView(role)}
          >
            <Eye className="mr-2 h-4 w-4" />
            View
          </Button>

          <Button
            variant="outline"
            className="flex-1 rounded-xl"
            onClick={() => onEdit(role)}
          >
            <Pencil className="mr-2 h-4 w-4" />
            Edit
          </Button>

          <Button
            variant="destructive"
            className="rounded-xl"
            onClick={() => onDelete(role)}
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Delete
          </Button>

        </div>
              </CardContent>

    </Card>
  );
}