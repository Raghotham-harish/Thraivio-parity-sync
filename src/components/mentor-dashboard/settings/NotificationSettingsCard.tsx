import type { MentorSettings } from "@/types/mentor-settings";

interface NotificationSettingsCardProps {
  settings: MentorSettings;

  setSettings: React.Dispatch<
    React.SetStateAction<MentorSettings>
  >;
}

const NotificationSettingsCard = ({
  settings,
  setSettings,
}: NotificationSettingsCardProps) => {
  return (
    <div
      className="
        bg-white

        border
        border-slate-200

        rounded-3xl

        p-6
      "
    >
      <div className="mb-6">

        <h2
          className="
            text-2xl
            font-bold
          "
        >
          Notification Preferences
        </h2>

        <p
          className="
            text-slate-500
            mt-2
          "
        >
          Control how and when you receive
          updates from the platform.
        </p>

      </div>

      <div className="space-y-5">

        <div
          className="
            flex
            items-center
            justify-between

            border
            rounded-2xl

            p-4
          "
        >
          <div>
            <h4 className="font-semibold">
              Email Notifications
            </h4>

            <p className="text-sm text-slate-500">
              Receive important account updates.
            </p>
          </div>

          <input
            type="checkbox"
            checked={
              settings.emailNotifications
            }
            onChange={(e) =>
              setSettings({
                ...settings,
                emailNotifications:
                  e.target.checked,
              })
            }
            className="h-5 w-5"
          />
        </div>

        <div
          className="
            flex
            items-center
            justify-between

            border
            rounded-2xl

            p-4
          "
        >
          <div>
            <h4 className="font-semibold">
              Booking Notifications
            </h4>

            <p className="text-sm text-slate-500">
              Get notified when new bookings arrive.
            </p>
          </div>

          <input
            type="checkbox"
            checked={
              settings.bookingNotifications
            }
            onChange={(e) =>
              setSettings({
                ...settings,
                bookingNotifications:
                  e.target.checked,
              })
            }
            className="h-5 w-5"
          />
        </div>

        <div
          className="
            flex
            items-center
            justify-between

            border
            rounded-2xl

            p-4
          "
        >
          <div>
            <h4 className="font-semibold">
              Session Reminders
            </h4>

            <p className="text-sm text-slate-500">
              Receive reminders before sessions.
            </p>
          </div>

          <input
            type="checkbox"
            checked={
              settings.sessionReminders
            }
            onChange={(e) =>
              setSettings({
                ...settings,
                sessionReminders:
                  e.target.checked,
              })
            }
            className="h-5 w-5"
          />
        </div>

        <div
          className="
            flex
            items-center
            justify-between

            border
            rounded-2xl

            p-4
          "
        >
          <div>
            <h4 className="font-semibold">
              Marketing Emails
            </h4>

            <p className="text-sm text-slate-500">
              Product updates, offers and news.
            </p>
          </div>

          <input
            type="checkbox"
            checked={
              settings.marketingEmails
            }
            onChange={(e) =>
              setSettings({
                ...settings,
                marketingEmails:
                  e.target.checked,
              })
            }
            className="h-5 w-5"
          />
        </div>

        <div
          className="
            flex
            items-center
            justify-between

            border
            rounded-2xl

            p-4
          "
        >
          <div>
            <h4 className="font-semibold">
              Weekly Reports
            </h4>

            <p className="text-sm text-slate-500">
              Weekly analytics and booking reports.
            </p>
          </div>

          <input
            type="checkbox"
            checked={
              settings.weeklyReports
            }
            onChange={(e) =>
              setSettings({
                ...settings,
                weeklyReports:
                  e.target.checked,
              })
            }
            className="h-5 w-5"
          />
        </div>

      </div>

    </div>
  );
};

export default NotificationSettingsCard;