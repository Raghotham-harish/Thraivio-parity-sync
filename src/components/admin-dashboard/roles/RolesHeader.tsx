import {
  ShieldCheck,
  Download,
  Plus,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";

interface RolesHeaderProps {
  totalRoles: number;

  totalUsersAssigned: number;

  onCreate: () => void;

  onExport: () => void;
}

export default function RolesHeader({
  totalRoles,
  totalUsersAssigned,
  onCreate,
  onExport,
}: RolesHeaderProps) {
  return (
    <section className="rounded-3xl border bg-background p-6 shadow-sm">

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        <div className="space-y-4">

          <Badge
            variant="secondary"
            className="w-fit rounded-full px-4 py-1"
          >
            Roles & Permissions
          </Badge>

          <div>

            <h1 className="text-3xl font-bold tracking-tight">
              Access Control Management
            </h1>

            <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
              Manage administrator roles,
              permissions, access levels and
              platform security policies from
              a centralized dashboard.
            </p>

          </div>

          <div className="flex flex-wrap items-center gap-3">

            <div className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm">

              <ShieldCheck className="h-4 w-4 text-primary" />

              <span>
                {totalRoles.toLocaleString()} Roles
              </span>

            </div>

            <div className="rounded-full border px-4 py-2 text-sm font-semibold">

              {totalUsersAssigned.toLocaleString()} Assigned Users

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
            Create Role
          </Button>

        </div>

      </div>
          </section>
  );
}