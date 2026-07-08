import {
  X,
  CalendarDays,
  Clock3,
  User,
  Bell,
  CreditCard,
  BookOpen,
  GraduationCap,
  Users,
  ExternalLink,
  CheckCircle2,
  Globe,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import type { UserNotification } from "@/types/notification";

interface NotificationDetailsModalProps {
  open: boolean;

  notification: UserNotification | null;

  onClose: () => void;

  onMarkRead: (id: string) => void;
}

const NotificationDetailsModal = ({
  open,
  notification,
  onClose,
  onMarkRead,
}: NotificationDetailsModalProps) => {
  const navigate = useNavigate();

  if (!open || !notification) return null;

  const typeIcons = {
    session: CalendarDays,

    payment: CreditCard,

    program: BookOpen,

    certificate: GraduationCap,

    event: Users,

    mentor: User,

    system: Bell,
  };

  const Icon =
    typeIcons[notification.type] ||
    Bell;

  const statusStyles = {
    unread:
      "bg-blue-100 text-blue-700",

    read:
      "bg-green-100 text-green-700",
  };

  const handleAction = () => {
    if (notification.actionLink) {
      navigate(notification.actionLink);
    }
  };

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
          max-w-6xl

          rounded-[34px]

          overflow-hidden

          max-h-[92vh]

          flex
          flex-col
        "
      >
                {/* Hero */}

        <div
          className="
            relative

            bg-gradient-to-r
            from-blue-600
            via-indigo-600
            to-purple-600

            text-white

            p-8
          "
        >
          <button
            onClick={onClose}
            className="
              absolute
              top-6
              right-6

              h-11
              w-11

              rounded-full

              bg-white/20

              flex
              items-center
              justify-center
            "
          >
            <X size={20} />
          </button>

          <div
            className="
              flex
              flex-col
              lg:flex-row

              lg:items-center

              gap-6
            "
          >
            <img
              src={notification.image}
              alt={notification.mentorName}
              className="
                h-24
                w-24

                rounded-3xl

                object-cover

                border-4
                border-white
              "
            />

            <div className="flex-1">

              <span
                className={`
                  inline-flex

                  px-3
                  py-1

                  rounded-full

                  text-xs
                  font-semibold

                  bg-white

                  ${statusStyles[notification.status]}
                `}
              >
                {notification.status}
              </span>

              <h2
                className="
                  text-4xl
                  font-bold

                  mt-4
                "
              >
                {notification.title}
              </h2>

              <p
                className="
                  mt-3

                  text-blue-100

                  max-w-3xl
                "
              >
                {notification.message}
              </p>

            </div>

          </div>

        </div>
                <div
          className="
            flex-1

            overflow-y-auto

            p-8
          "
        >
          <div
            className="
              grid
              xl:grid-cols-3

              gap-8
            "
          >
            {/* LEFT */}

            <div className="xl:col-span-2 space-y-6">
                              {/* Notification Information */}

              <div
                className="
                  border

                  rounded-3xl

                  p-6
                "
              >
                <h3
                  className="
                    text-xl
                    font-bold

                    mb-6
                  "
                >
                  Notification Information
                </h3>

                <div
                  className="
                    grid
                    md:grid-cols-2

                    gap-5
                  "
                >
                  <InfoCard
                    icon={<Icon size={18} />}
                    title="Notification Type"
                    value={notification.type}
                  />

                  <InfoCard
                    icon={<Clock3 size={18} />}
                    title="Received"
                    value={notification.createdAt}
                  />

                  <InfoCard
                    icon={<Bell size={18} />}
                    title="Status"
                    value={notification.status}
                  />

                  <InfoCard
                    icon={<Globe size={18} />}
                    title="Platform"
                    value="CoachCoaching"
                  />
                </div>
              </div>

              {/* Mentor */}

              <div
                className="
                  border

                  rounded-3xl

                  p-6
                "
              >
                <h3
                  className="
                    text-xl
                    font-bold

                    mb-5
                  "
                >
                  Related Mentor
                </h3>

                <div
                  className="
                    flex
                    items-center
                    gap-5
                  "
                >
                  <img
                    src={notification.image}
                    alt={notification.mentorName}
                    className="
                      h-20
                      w-20

                      rounded-3xl

                      object-cover
                    "
                  />

                  <div>

                    <h4
                      className="
                        text-xl
                        font-bold
                      "
                    >
                      {notification.mentorName}
                    </h4>

                    <p
                      className="
                        text-slate-500

                        mt-2
                      "
                    >
                      This notification is
                      associated with your
                      interaction with this
                      mentor.
                    </p>

                  </div>

                </div>

              </div>

              {/* Message */}

              <div
                className="
                  border

                  rounded-3xl

                  p-6
                "
              >
                <h3
                  className="
                    text-xl
                    font-bold

                    mb-4
                  "
                >
                  Notification Message
                </h3>

                <div
                  className="
                    bg-blue-50

                    rounded-2xl

                    p-6

                    leading-8

                    text-slate-700
                  "
                >
                  {notification.message}
                </div>
              </div>
                          </div>

            {/* RIGHT */}

            <div>

              <div
                className="
                  sticky
                  top-0

                  border

                  rounded-3xl

                  p-6

                  bg-slate-50
                "
              >
                <h3
                  className="
                    text-xl
                    font-bold
                  "
                >
                  Notification Summary
                </h3>

                <div
                  className="
                    mt-6

                    space-y-4
                  "
                >
                  <SummaryCard
                    icon={<Bell size={16} />}
                    title="Status"
                    value={notification.status}
                  />

                  <SummaryCard
                    icon={<Clock3 size={16} />}
                    title="Received"
                    value={notification.createdAt}
                  />

                  <SummaryCard
                    icon={<Icon size={16} />}
                    title="Category"
                    value={notification.type}
                  />

                  <SummaryCard
                    icon={<User size={16} />}
                    title="Mentor"
                    value={
                      notification.mentorName ??
                      "-"
                    }
                  />
                </div>

                <div
                  className="
                    mt-8

                    space-y-3
                  "
                >
                  {notification.actionLabel && (
                    <button
                      onClick={handleAction}
                      className="
                        w-full

                        bg-blue-600
                        hover:bg-blue-700

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
                      <ExternalLink size={18} />

                      {notification.actionLabel}
                    </button>
                  )}

                  {notification.status ===
                    "unread" && (
                    <button
                      onClick={() =>
                        onMarkRead(
                          notification.id
                        )
                      }
                      className="
                        w-full

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
                        size={18}
                      />

                      Mark as Read
                    </button>
                  )}

                  <button
                    onClick={onClose}
                    className="
                      w-full

                      border

                      py-3

                      rounded-xl

                      font-medium
                    "
                  >
                    Close
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default NotificationDetailsModal;

function InfoCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div
      className="
        bg-slate-50

        rounded-2xl

        p-5
      "
    >
      <div className="text-blue-600">
        {icon}
      </div>

      <p
        className="
          text-sm
          text-slate-500

          mt-3
        "
      >
        {title}
      </p>

      <h4
        className="
          capitalize

          font-semibold

          mt-1
        "
      >
        {value}
      </h4>
    </div>
  );
}

function SummaryCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div
      className="
        bg-white

        rounded-2xl

        p-4
      "
    >
      <div
        className="
          flex
          items-center
          gap-2

          text-sm
          text-slate-500
        "
      >
        {icon}

        {title}
      </div>

      <h4
        className="
          capitalize

          font-semibold

          mt-2
        "
      >
        {value}
      </h4>
    </div>
  );
}