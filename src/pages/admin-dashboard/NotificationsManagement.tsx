import { useMemo, useState } from "react";

import NotificationsHeader from "@/components/admin-dashboard/notifications/NotificationsHeader";
import NotificationsStats from "@/components/admin-dashboard/notifications/NotificationsStats";
import NotificationsToolbar from "@/components/admin-dashboard/notifications/NotificationsToolbar";
import NotificationsGrid from "@/components/admin-dashboard/notifications/NotificationsGrid";
import NotificationsTable from "@/components/admin-dashboard/notifications/NotificationsTable";
import NotificationDetailsDialog from "@/components/admin-dashboard/notifications/NotificationDetailsDialog";
import SendNotificationDialog from "@/components/admin-dashboard/notifications/SendNotificationDialog";
import DeleteNotificationDialog from "@/components/admin-dashboard/notifications/DeleteNotificationDialog";
import EmptyNotifications from "@/components/admin-dashboard/notifications/EmptyNotifications";

import {
  notifications,
  notificationStats,
} from "@/data/admin-notifications";

import type {
  AdminNotification,
} from "@/types/admin-notification";

export default function NotificationsManagement() {
  const [search, setSearch] =
    useState("");

  const [status, setStatus] =
    useState("all");

  const [type, setType] =
    useState("all");

  const [audience, setAudience] =
    useState("all");

  const [priority, setPriority] =
    useState("all");

  const [view, setView] =
    useState<"grid" | "list">("grid");

  const [selectedNotification, setSelectedNotification] =
    useState<AdminNotification | null>(null);

  const [detailsOpen, setDetailsOpen] =
    useState(false);

  const [sendOpen, setSendOpen] =
    useState(false);

  const [deleteOpen, setDeleteOpen] =
    useState(false);
      const filteredNotifications = useMemo(() => {
    return notifications.filter((notification) => {
      const matchesSearch =
        notification.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        notification.message
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        notification.createdBy.name
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        status === "all" ||
        notification.status === status;

      const matchesType =
        type === "all" ||
        notification.type === type;

      const matchesAudience =
        audience === "all" ||
        notification.audience === audience;

      const matchesPriority =
        priority === "all" ||
        notification.priority === priority;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesType &&
        matchesAudience &&
        matchesPriority
      );
    });
  }, [
    search,
    status,
    type,
    audience,
    priority,
  ]);

  const handleView = (
    notification: AdminNotification
  ) => {
    setSelectedNotification(notification);
    setDetailsOpen(true);
  };

  const handleSend = (
    notification: AdminNotification
  ) => {
    setSelectedNotification(notification);
    setSendOpen(true);
  };

  const handleDelete = (
    notification: AdminNotification
  ) => {
    setSelectedNotification(notification);
    setDeleteOpen(true);
  };
    const handleRefresh = () => {
    console.log("Refresh Notifications");
  };

  const handleExport = () => {
    console.log("Export Notifications");
  };

  const handleCreate = () => {
    console.log("Create Notification");
  };

  const handleSendConfirm = () => {
    console.log(
      "Send Notification:",
      selectedNotification?.id
    );

    setSendOpen(false);
    setSelectedNotification(null);
  };

  const handleDeleteConfirm = () => {
    console.log(
      "Delete Notification:",
      selectedNotification?.id
    );

    setDeleteOpen(false);
    setSelectedNotification(null);
  };

  const handleResetFilters = () => {
    setSearch("");

    setStatus("all");

    setType("all");

    setAudience("all");

    setPriority("all");

    setView("grid");
  };

  return (
    <div className="space-y-8">

      <NotificationsHeader
        totalNotifications={
          notificationStats.totalNotifications
        }
        totalDelivered={
          notificationStats.totalDelivered
        }
        onCreate={handleCreate}
        onExport={handleExport}
      />

      <NotificationsStats
        totalNotifications={
          notificationStats.totalNotifications
        }
        sentNotifications={
          notificationStats.sentNotifications
        }
        scheduledNotifications={
          notificationStats.scheduledNotifications
        }
        draftNotifications={
          notificationStats.draftNotifications
        }
        failedNotifications={
          notificationStats.failedNotifications
        }
        totalDelivered={
          notificationStats.totalDelivered
        }
        totalOpened={
          notificationStats.totalOpened
        }
        openRate={
          notificationStats.openRate
        }
      />
            <NotificationsToolbar
        search={search}
        onSearchChange={setSearch}
        status={status}
        onStatusChange={setStatus}
        type={type}
        onTypeChange={setType}
        audience={audience}
        onAudienceChange={setAudience}
        priority={priority}
        onPriorityChange={setPriority}
        view={view}
        onViewChange={setView}
        onRefresh={handleRefresh}
      />

      {filteredNotifications.length === 0 ? (

        <EmptyNotifications
          onResetFilters={handleResetFilters}
        />

      ) : view === "grid" ? (

        <NotificationsGrid
          notifications={filteredNotifications}
          onView={handleView}
          onSend={handleSend}
          onDelete={handleDelete}
        />

      ) : (

        <NotificationsTable
          notifications={filteredNotifications}
          onView={handleView}
          onSend={handleSend}
          onDelete={handleDelete}
        />

      )}
            <NotificationDetailsDialog
        open={detailsOpen}
        notification={selectedNotification}
        onOpenChange={setDetailsOpen}
      />

      <SendNotificationDialog
        open={sendOpen}
        notification={selectedNotification}
        onSend={handleSendConfirm}
        onOpenChange={setSendOpen}
      />

      <DeleteNotificationDialog
        open={deleteOpen}
        notification={selectedNotification}
        onDelete={handleDeleteConfirm}
        onOpenChange={setDeleteOpen}
      />
          </div>
  );
}