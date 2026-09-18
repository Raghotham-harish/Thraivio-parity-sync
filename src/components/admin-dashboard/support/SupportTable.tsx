import type {
  AdminSupportTicket,
} from "@/types/admin-support";

import SupportTableRow from "./SupportTableRow";

import SupportGridCard from "./SupportGridCard";

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

interface SupportTableProps {
  tickets: AdminSupportTicket[];

  onView: (
    ticket: AdminSupportTicket
  ) => void;

  onReply: (
    ticket: AdminSupportTicket
  ) => void;

  onClose: (
    ticket: AdminSupportTicket
  ) => void;
}

export default function SupportTable({
  tickets,
  onView,
  onReply,
  onClose,
}: SupportTableProps) {
  return (
    <Card className="rounded-2xl shadow-sm">

      <CardContent className="p-0">

        <div className="hidden lg:block">
        <div className="overflow-x-auto">

          <Table>

            <TableHeader>

              <TableRow>

                <TableHead>
                  Customer
                </TableHead>

                <TableHead>
                  Subject
                </TableHead>

                <TableHead>
                  Priority
                </TableHead>

                <TableHead>
                  Status
                </TableHead>

                <TableHead>
                  Assigned To
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
                            {tickets.map((ticket) => (

              <SupportTableRow
                key={ticket.id}
                ticket={ticket}
                onView={onView}
                onReply={onReply}
                onClose={onClose}
              />

            ))}

          </TableBody>

        </Table>

      </div>
        </div>

        <div className="grid gap-3 lg:hidden">
          {tickets.map((ticket) => (
            <SupportGridCard
              key={ticket.id}
              ticket={ticket}
              onView={onView}
              onReply={onReply}
              onClose={onClose}
            />
          ))}
        </div>
            </CardContent>

    </Card>
  );
}