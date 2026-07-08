import {
  useMemo,
  useState,
} from "react";

import { useNavigate } from "react-router-dom";

import { userNotifications } from "@/data/userNotifications";

import type { UserNotification } from "@/types/notification";

import NotificationsHeader from "@/components/user-dashboard/notifications/NotificationsHeader";

import NotificationsStats from "@/components/user-dashboard/notifications/NotificationsStats";

import NotificationsToolbar from "@/components/user-dashboard/notifications/NotificationsToolbar";

import NotificationGridCard from "@/components/user-dashboard/notifications/NotificationGridCard";

import NotificationListCard from "@/components/user-dashboard/notifications/NotificationListCard";

import NotificationDetailsModal from "@/components/user-dashboard/notifications/NotificationDetailsModal";

import DeleteNotificationDialog from "@/components/user-dashboard/notifications/DeleteNotificationDialog";

import EmptyNotifications from "@/components/user-dashboard/notifications/EmptyNotifications";

const Notifications = () => {
  const navigate = useNavigate();

  const [
    notifications,
    setNotifications,
  ] = useState(userNotifications);

  const [search, setSearch] =
    useState("");

  const [view, setView] =
    useState<"grid" | "list">(
      "grid"
    );

  const [
    selectedFilter,
    setSelectedFilter,
  ] = useState("All");

  const [
    selectedNotification,
    setSelectedNotification,
  ] =
    useState<UserNotification | null>(
      null
    );

  const [
    detailsOpen,
    setDetailsOpen,
  ] = useState(false);

  const [
    deleteOpen,
    setDeleteOpen,
  ] = useState(false);
    /* -------------------------- */

  const totalNotifications =
    notifications.length;

  const unreadNotifications =
    notifications.filter(
      (item) =>
        item.status === "unread"
    ).length;

  const readNotifications =
    notifications.filter(
      (item) =>
        item.status === "read"
    ).length;

  const actionRequired =
    notifications.filter(
      (item) =>
        item.status === "unread"
    ).length;

  const thisWeek =
    notifications.filter((item) =>
      [
        "2 hours ago",
        "Yesterday",
        "3 days ago",
      ].includes(item.createdAt)
    ).length;
      const filteredNotifications =
    useMemo(() => {
      return notifications.filter(
        (notification) => {

          const matchesSearch =
            notification.title
              .toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||

            notification.message
              .toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||

            notification.mentorName
              ?.toLowerCase()
              .includes(
                search.toLowerCase()
              );

          const filter =
            selectedFilter.toLowerCase();

          const matchesFilter =
            filter === "all"
              ? true
              : filter === "read"
              ? notification.status ===
                "read"
              : filter ===
                "unread"
              ? notification.status ===
                "unread"
              : notification.type ===
                filter;

          return (
            matchesSearch &&
            matchesFilter
          );
        }
      );
    }, [
      notifications,
      search,
      selectedFilter,
    ]);
      const handleView = (
    notification: UserNotification
  ) => {
    setSelectedNotification(
      notification
    );

    setDetailsOpen(true);
  };

  const handleDelete =
    (
      notification: UserNotification
    ) => {
      setSelectedNotification(
        notification
      );

      setDeleteOpen(true);
    };

  const handleDeleteConfirm =
    (id: string) => {
      setNotifications((prev) =>
        prev.filter(
          (item) => item.id !== id
        )
      );

      setDeleteOpen(false);

      setSelectedNotification(
        null
      );
    };

  const handleMarkRead = (
    id: string
  ) => {
    setNotifications((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              status: "read",
            }
          : item
      )
    );
  };

  const handleMarkAllRead =
    () => {
      setNotifications((prev) =>
        prev.map((item) => ({
          ...item,
          status: "read",
        }))
      );
    };

  const handleClearAll =
    () => {
      setNotifications([]);
    };

  const handleBrowseMentors =
    () => {
      navigate("/mentors");
    };
      return (
    <div className="space-y-8">

      {/* Header */}

      <NotificationsHeader
        totalNotifications={
          totalNotifications
        }
        unreadNotifications={
          unreadNotifications
        }
      />

      {/* Stats */}

      <NotificationsStats
        totalNotifications={
          totalNotifications
        }
        unreadNotifications={
          unreadNotifications
        }
        readNotifications={
          readNotifications
        }
        actionRequired={
          actionRequired
        }
        thisWeek={thisWeek}
      />

      {/* Toolbar */}

      <NotificationsToolbar
        search={search}
        setSearch={setSearch}
        view={view}
        setView={setView}
        selectedFilter={
          selectedFilter
        }
        setSelectedFilter={
          setSelectedFilter
        }
        onMarkAllRead={
          handleMarkAllRead
        }
        onClearAll={
          handleClearAll
        }
      />

      {/* Empty State */}

      {filteredNotifications.length ===
      0 ? (
        <EmptyNotifications
          onBrowseMentors={
            handleBrowseMentors
          }
        />
      ) : (
        <>
                  {view === "grid" && (
            <div
              className="
                grid
                md:grid-cols-2
                xl:grid-cols-3

                gap-6
              "
            >
              {filteredNotifications.map(
                (notification) => (
                  <NotificationGridCard
                    key={
                      notification.id
                    }
                    notification={
                      notification
                    }
                    onView={
                      handleView
                    }
                    onDelete={
                      handleDelete
                    }
                    onMarkRead={
                      handleMarkRead
                    }
                  />
                )
              )}
            </div>
          )}
                    {view === "list" && (
            <div
              className="
                space-y-6
              "
            >
              {filteredNotifications.map(
                (notification) => (
                  <NotificationListCard
                    key={
                      notification.id
                    }
                    notification={
                      notification
                    }
                    onView={
                      handleView
                    }
                    onDelete={
                      handleDelete
                    }
                    onMarkRead={
                      handleMarkRead
                    }
                  />
                )
              )}
            </div>
          )}
                  </>
      )}

      {/* Details */}

      <NotificationDetailsModal
        open={detailsOpen}
        notification={
          selectedNotification
        }
        onClose={() =>
          setDetailsOpen(false)
        }
        onMarkRead={
          handleMarkRead
        }
      />

      {/* Delete */}

      <DeleteNotificationDialog
        open={deleteOpen}
        notification={
          selectedNotification
        }
        onClose={() =>
          setDeleteOpen(false)
        }
        onConfirm={
          handleDeleteConfirm
        }
      />

    </div>
  );
};

export default Notifications;