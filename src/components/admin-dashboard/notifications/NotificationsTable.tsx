import type {
  AdminNotification,
} from "@/types/admin-notification";

import NotificationTableRow from "./NotificationTableRow";

import NotificationGridCard from "./NotificationGridCard";

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

interface NotificationsTableProps {
  notifications: AdminNotification[];

  onView: (
    notification: AdminNotification
  ) => void;

  onSend: (
    notification: AdminNotification
  ) => void;

  onDelete: (
    notification: AdminNotification
  ) => void;
}

export default function NotificationsTable({
  notifications,
  onView,
  onSend,
  onDelete,
}: NotificationsTableProps) {
  return (
    <Card className="rounded-2xl shadow-sm">

      <CardContent className="p-0">

        <div className="hidden lg:block">
        <div className="overflow-x-auto">

          <Table>

            <TableHeader>

              <TableRow>

                <TableHead>
                  Created By
                </TableHead>

                <TableHead>
                  Notification
                </TableHead>

                <TableHead>
                  Audience
                </TableHead>

                <TableHead>
                  Priority
                </TableHead>

                <TableHead>
                  Status
                </TableHead>

                <TableHead>
                  Delivered
                </TableHead>

                <TableHead className="text-right">
                  Actions
                </TableHead>

              </TableRow>

            </TableHeader>

            <TableBody>
                            {notifications.map((notification) => (

              <NotificationTableRow
                key={notification.id}
                notification={notification}
                onView={onView}
                onSend={onSend}
                onDelete={onDelete}
              />

            ))}

          </TableBody>

        </Table>

      </div>
        </div>

        <div className="grid gap-3 lg:hidden">
          {notifications.map((notification) => (
            <NotificationGridCard
              key={notification.id}
              notification={notification}
              onView={onView}
              onSend={onSend}
              onDelete={onDelete}
            />
          ))}
        </div>
            </CardContent>

    </Card>
  );
}