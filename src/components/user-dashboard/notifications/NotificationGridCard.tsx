import {
  Bell,
  CalendarDays,
  CreditCard,
  GraduationCap,
  BookOpen,
  Users,
  User,
  CheckCircle2,
  Trash2,
  Clock3,
} from "lucide-react";

import type { UserNotification } from "@/types/notification";

interface NotificationGridCardProps {
  notification: UserNotification;

  onView: (
    notification: UserNotification
  ) => void;

  onDelete: (
    notification: UserNotification
  ) => void;

  onMarkRead: (
    notificationId: string
  ) => void;
}

const NotificationGridCard = ({
  notification,
  onView,
  onDelete,
  onMarkRead,
}: NotificationGridCardProps) => {
  const typeIcons = {
    session: CalendarDays,

    payment: CreditCard,

    program: BookOpen,

    certificate:
      GraduationCap,

    event: Users,

    mentor: User,

    system: Bell,
  };

  const Icon =
    typeIcons[
      notification.type
    ] || Bell;

  const badgeStyles = {
    unread:
      "bg-blue-100 text-blue-700",

    read:
      "bg-green-100 text-green-700",
  };

  return (
    <div
      className="
        group

        bg-white

        border
        border-slate-200

        rounded-[30px]

        overflow-hidden

        hover:shadow-2xl
        hover:-translate-y-1

        transition-all
        duration-300
      "
    >
      {/* Top */}

      <div
        className="
          h-2

          bg-gradient-to-r
          from-blue-600
          via-indigo-600
          to-purple-600
        "
      />

      <div className="p-6">

        {/* Header */}

        <div
          className="
            flex
            items-start
            justify-between
            gap-4
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
              src={
                notification.image
              }
              alt={
                notification.mentorName
              }
              className="
                h-16
                w-16

                rounded-2xl

                object-cover

                border
              "
            />

            <div>
              <h3
                className="
                  text-lg
                  font-bold
                "
              >
                {
                  notification.title
                }
              </h3>

              <p
                className="
                  text-sm
                  text-slate-500

                  mt-1
                "
              >
                {
                  notification.mentorName
                }
              </p>
            </div>
          </div>

          <span
            className={`
              px-3
              py-1

              rounded-full

              text-xs
              font-semibold

              ${
                badgeStyles[
                  notification
                    .status
                ]
              }
            `}
          >
            {
              notification.status
            }
          </span>
        </div>


        {/* Notification Type */}

<div
  className="
    mt-6

    bg-slate-50

    rounded-2xl

    p-4
  "
>
  <div
    className="
      flex
      items-center
      gap-3
    "
  >
    <div
      className="
        h-12
        w-12

        rounded-xl

        bg-blue-100

        flex
        items-center
        justify-center
      "
    >
      <Icon
        size={22}
        className="
          text-blue-600
        "
      />
    </div>

    <div>
      <p
        className="
          text-xs
          text-slate-500
        "
      >
        Notification Type
      </p>

      <h4
        className="
          capitalize

          font-semibold

          mt-1
        "
      >
        {notification.type}
      </h4>
    </div>
  </div>
</div>

{/* Received */}

<div
  className="
    mt-4

    bg-slate-50

    rounded-2xl

    p-4
  "
>
  <div
    className="
      flex
      items-center
      gap-3
    "
  >
    <div
      className="
        h-12
        w-12

        rounded-xl

        bg-purple-100

        flex
        items-center
        justify-center
      "
    >
      <Clock3
        size={22}
        className="text-purple-600"
      />
    </div>

    <div>
      <p
        className="
          text-xs
          text-slate-500
        "
      >
        Received
      </p>

      <h4
        className="
          font-semibold

          mt-1
        "
      >
        {notification.createdAt}
      </h4>
    </div>
  </div>
</div>
        {/* Message */}

        <div
          className="
            mt-6
          "
        >
          <p
            className="
              text-slate-600

              leading-7
            "
          >
            {
              notification.message
            }
          </p>
        </div>

        {/* Footer */}
<div
  className="
    mt-6

    flex
    justify-end
  "
>
  <button
    onClick={() =>
      onView(notification)
    }
    className="
      text-blue-600
      font-medium
    "
  >
    View Details
  </button>
</div>
        {/* Buttons */}

        <div
          className="
            grid
            grid-cols-2

            gap-3

            mt-6
          "
        >
          <button
            onClick={() =>
              onMarkRead(
                notification.id
              )
            }
            className="
              bg-green-600
              hover:bg-green-700

              text-white

              py-3

              rounded-xl

              font-medium

              flex
              items-center
              justify-center
              gap-2

              transition
            "
          >
            <CheckCircle2
              size={17}
            />

            Mark Read
          </button>

          <button
            onClick={() =>
              onDelete(
                notification
              )
            }
            className="
              bg-red-600
              hover:bg-red-700

              text-white

              py-3

              rounded-xl

              font-medium

              flex
              items-center
              justify-center
              gap-2

              transition
            "
          >
            <Trash2
              size={17}
            />

            Delete
          </button>
        </div>

        {/* Action */}

        {notification.actionLabel && (
          <button
            className="
              w-full

              mt-3

              border

              py-3

              rounded-xl

              font-medium

              hover:bg-slate-50

              transition
            "
          >
            {
              notification.actionLabel
            }
          </button>
        )}
      </div>
    </div>
  );
};

export default NotificationGridCard;