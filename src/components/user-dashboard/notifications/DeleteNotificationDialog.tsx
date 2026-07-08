import {
  AlertTriangle,
  Bell,
  Clock3,
  User,
  X,
} from "lucide-react";

import type { UserNotification } from "@/types/notification";

interface DeleteNotificationDialogProps {
  open: boolean;

  notification: UserNotification | null;

  onClose: () => void;

  onConfirm: (
    notificationId: string
  ) => void;
}

const DeleteNotificationDialog = ({
  open,
  notification,
  onClose,
  onConfirm,
}: DeleteNotificationDialogProps) => {
  if (!open || !notification)
    return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-50

        bg-black/60
        backdrop-blur-sm

        flex
        items-center
        justify-center

        p-4
      "
    >
      <div
        className="
          bg-white

          w-full
          max-w-xl

          rounded-[34px]

          overflow-hidden
        "
      >
        {/* Header */}

        <div
          className="
            bg-red-50

            border-b

            p-6
          "
        >
          <div
            className="
              flex
              items-center
              justify-between
            "
          >
            <div
              className="
                flex
                items-center
                gap-4
              "
            >
              <div
                className="
                  h-14
                  w-14

                  rounded-2xl

                  bg-red-100

                  flex
                  items-center
                  justify-center
                "
              >
                <AlertTriangle
                  size={28}
                  className="
                    text-red-600
                  "
                />
              </div>

              <div>

                <h2
                  className="
                    text-2xl
                    font-bold
                  "
                >
                  Delete Notification
                </h2>

                <p
                  className="
                    text-slate-500

                    mt-1
                  "
                >
                  This notification will
                  be permanently removed.
                </p>

              </div>
            </div>

            <button
              onClick={onClose}
              className="
                h-10
                w-10

                rounded-full

                border

                flex
                items-center
                justify-center
              "
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Body */}

        <div className="p-6">

          {/* Notification Card */}

          <div
            className="
              bg-slate-50

              rounded-3xl

              p-5
            "
          >
            <div
              className="
                flex
                items-center
                gap-4
              "
            >
              <img
                src={notification.image}
                alt={
                  notification.mentorName
                }
                className="
                  h-16
                  w-16

                  rounded-2xl

                  object-cover
                "
              />

              <div>

                <h3
                  className="
                    text-lg
                    font-bold
                  "
                >
                  {notification.title}
                </h3>

                <p
                  className="
                    text-slate-500
                  "
                >
                  {notification.mentorName}
                </p>

              </div>

            </div>

            <div
              className="
                grid
                md:grid-cols-2

                gap-4

                mt-6
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-2
                "
              >
                <Bell size={16} />

                {notification.type}
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-2
                "
              >
                <Clock3 size={16} />

                {notification.createdAt}
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-2
                "
              >
                <User size={16} />

                {notification.status}
              </div>

            </div>

          </div>

          {/* Warning */}

          <div
            className="
              mt-6

              bg-red-50

              border
              border-red-100

              rounded-2xl

              p-5
            "
          >
            <h4
              className="
                font-semibold

                text-red-700
              "
            >
              Important
            </h4>

            <p
              className="
                text-sm

                text-red-600

                mt-2

                leading-7
              "
            >
              Once deleted, this
              notification cannot be
              recovered. Future
              notifications from the
              platform will continue to
              arrive normally.
            </p>
          </div>

          {/* Footer */}

          <div
            className="
              flex

              gap-4

              mt-8
            "
          >
            <button
              onClick={onClose}
              className="
                flex-1

                border

                py-3

                rounded-xl

                font-medium
              "
            >
              Cancel
            </button>

            <button
              onClick={() =>
                onConfirm(
                  notification.id
                )
              }
              className="
                flex-1

                bg-red-600
                hover:bg-red-700

                text-white

                py-3

                rounded-xl

                font-medium

                transition
              "
            >
              Delete Notification
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default DeleteNotificationDialog;