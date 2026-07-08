import {
  Bell,
  CalendarDays,
  CreditCard,
  GraduationCap,
  BookOpen,
  Users,
  User,
  Clock3,
  Eye,
  CheckCircle2,
  Trash2,
} from "lucide-react";

import type { UserNotification } from "@/types/notification";

interface NotificationListCardProps {
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

const NotificationListCard = ({
  notification,
  onView,
  onDelete,
  onMarkRead,
}: NotificationListCardProps) => {
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

  const statusStyles = {
    unread:
      "bg-blue-100 text-blue-700",

    read:
      "bg-green-100 text-green-700",
  };

  return (
    <div
      className="
        bg-white

        border
        border-slate-200

        rounded-[30px]

        overflow-hidden

        hover:shadow-xl

        transition-all
        duration-300
      "
    >
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

        <div
          className="
            flex
            flex-col

            xl:flex-row
            xl:items-center

            gap-6
          "
        >
          {/* Left */}

          <div
            className="
              flex
              items-center
              gap-5

              xl:w-[380px]
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
                h-24
                w-24

                rounded-3xl

                object-cover

                border
              "
            />

            <div className="flex-1">

              <div
                className="
                  flex
                  flex-wrap

                  gap-2
                "
              >
                <span
                  className={`
                    px-3
                    py-1

                    rounded-full

                    text-xs
                    font-semibold

                    ${
                      statusStyles[
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

              <h2
                className="
                  text-2xl
                  font-bold

                  mt-4
                "
              >
                {
                  notification.title
                }
              </h2>

              <p
                className="
                  text-slate-500

                  mt-2
                "
              >
                {
                  notification.message
                }
              </p>

              <div
                className="
                  mt-3

                  flex
                  items-center
                  gap-2

                  text-slate-500
                "
              >
                <Clock3
                  size={15}
                />

                {
                  notification.createdAt
                }
              </div>

            </div>
          </div>

          {/* Center */}

          <div
            className="
              flex-1

              grid
              md:grid-cols-3

              gap-5
            "
          >
            <div
              className="
                bg-slate-50

                rounded-2xl

                p-5
              "
            >
              <Icon
                size={22}
                className="
                  text-blue-600
                "
              />

              <p
                className="
                  text-xs
                  text-slate-500

                  mt-3
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
                {
                  notification.type
                }
              </h4>
            </div>

            <div
              className="
                bg-slate-50

                rounded-2xl

                p-5
              "
            >
              <User
                size={22}
                className="
                  text-blue-600
                "
              />

              <p
                className="
                  text-xs
                  text-slate-500

                  mt-3
                "
              >
                Mentor
              </p>

              <h4
                className="
                  font-semibold

                  mt-1
                "
              >
                {
                  notification.mentorName
                }
              </h4>
            </div>

            <div
              className="
                bg-slate-50

                rounded-2xl

                p-5
              "
            >
              <Clock3
                size={22}
                className="
                  text-blue-600
                "
              />

              <p
                className="
                  text-xs
                  text-slate-500

                  mt-3
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
                {
                  notification.createdAt
                }
              </h4>
            </div>
          </div>

          {/* Right */}

          <div
            className="
              xl:w-[260px]

              shrink-0
            "
          >
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
                  flex-col

                  gap-3
                "
              >
                <button
                  onClick={() =>
                    onView(
                      notification
                    )
                  }
                  className="
                    border

                    py-3

                    rounded-xl

                    font-medium

                    flex
                    items-center
                    justify-center
                    gap-2
                  "
                >
                  <Eye
                    size={16}
                  />

                  View Details
                </button>

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
                  "
                >
                  <CheckCircle2
                    size={16}
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
                  "
                >
                  <Trash2
                    size={16}
                  />

                  Delete
                </button>

                {notification.actionLabel && (
                  <button
                    className="
                      border

                      py-3

                      rounded-xl

                      font-medium

                      hover:bg-white

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
          </div>

        </div>

      </div>
    </div>
  );
};

export default NotificationListCard;