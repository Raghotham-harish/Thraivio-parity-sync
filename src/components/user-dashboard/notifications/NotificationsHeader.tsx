import {
  Bell,
  BellRing,
  ShieldCheck,
} from "lucide-react";

interface NotificationsHeaderProps {
  totalNotifications: number;

  unreadNotifications: number;
}

const NotificationsHeader = ({
  totalNotifications,
  unreadNotifications,
}: NotificationsHeaderProps) => {
  return (
    <div
      className="
        flex
        flex-col
        xl:flex-row

        xl:items-center
        xl:justify-between

        gap-6
      "
    >
      {/* Left */}

      <div>

        <div
          className="
            inline-flex
            items-center
            gap-2

            px-4
            py-2

            rounded-full

            bg-blue-50
            text-blue-700

            text-sm
            font-medium
          "
        >
          <Bell size={16} />

          Notifications Center
        </div>

        <h1
          className="
            text-4xl
            font-bold

            mt-4
          "
        >
          Notifications
        </h1>

        <p
          className="
            mt-3

            max-w-2xl

            text-slate-500
          "
        >
          Stay updated with mentorship
          sessions, payments, programs,
          events, certificates and
          important platform activities
          from your favorite mentors.
        </p>

      </div>

      {/* Right */}

      <div
        className="
          flex
          flex-wrap

          gap-4
        "
      >

        {/* Total */}

        <div
          className="
            bg-white

            border
            border-slate-200

            rounded-[28px]

            px-6
            py-5

            min-w-[220px]
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

                bg-blue-50

                flex
                items-center
                justify-center
              "
            >
              <BellRing
                size={24}
                className="
                  text-blue-600
                "
              />
            </div>

            <div>

              <p
                className="
                  text-sm
                  text-slate-500
                "
              >
                Total Alerts
              </p>

              <h3
                className="
                  text-3xl
                  font-bold
                "
              >
                {totalNotifications}
              </h3>

            </div>
          </div>
        </div>

        {/* Unread */}

        <div
          className="
            bg-white

            border
            border-slate-200

            rounded-[28px]

            px-6
            py-5

            min-w-[220px]
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

                bg-red-50

                flex
                items-center
                justify-center
              "
            >
              <Bell
                size={24}
                className="
                  text-red-600
                "
              />
            </div>

            <div>

              <p
                className="
                  text-sm
                  text-slate-500
                "
              >
                Unread
              </p>

              <h3
                className="
                  text-3xl
                  font-bold
                "
              >
                {unreadNotifications}
              </h3>

            </div>
          </div>
        </div>

        {/* Status */}

        <div
          className="
            bg-white

            border
            border-slate-200

            rounded-[28px]

            px-6
            py-5

            min-w-[220px]
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

                bg-green-50

                flex
                items-center
                justify-center
              "
            >
              <ShieldCheck
                size={24}
                className="
                  text-green-600
                "
              />
            </div>

            <div>

              <p
                className="
                  text-sm
                  text-slate-500
                "
              >
                Notification Hub
              </p>

              <h3
                className="
                  text-lg
                  font-bold
                "
              >
                Real-Time
              </h3>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default NotificationsHeader;