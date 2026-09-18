import type {
  AdminCMSPage,
} from "@/types/admin-cms";

import CMSTableRow from "./CMSTableRow";

import CMSGridCard from "./CMSGridCard";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface CMSTableProps {
  pages: AdminCMSPage[];

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

export default function CMSTable({
  pages,
  onView,
  onEdit,
  onDelete,
}: CMSTableProps) {
  return (
    <Card className="rounded-2xl shadow-sm">

      <CardContent className="p-0">

        <div className="hidden lg:block">
        <div className="overflow-x-auto">

          <Table>

            <TableHeader>

              <TableRow>

                <TableHead>
                  Author
                </TableHead>

                <TableHead>
                  Page
                </TableHead>

                <TableHead>
                  Category
                </TableHead>

                <TableHead>
                  Status
                </TableHead>

                <TableHead>
                  Views
                </TableHead>

                <TableHead>
                  Updated
                </TableHead>

                <TableHead className="text-right">
                  Actions
                </TableHead>

              </TableRow>

            </TableHeader>

            <TableBody>
                            {pages.map((page) => (

              <CMSTableRow
                key={page.id}
                page={page}
                onView={onView}
                onEdit={onEdit}
                onDelete={onDelete}
              />

            ))}

          </TableBody>

        </Table>

      </div>
        </div>

        <div className="grid gap-3 lg:hidden">
          {pages.map((page) => (
            <CMSGridCard
              key={page.id}
              page={page}
              onView={onView}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </div>
            </CardContent>

    </Card>
  );
}