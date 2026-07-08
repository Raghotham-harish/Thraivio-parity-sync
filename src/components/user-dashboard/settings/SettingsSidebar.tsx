import {
  Bell,
  ChevronRight,
  Laptop,
  Link2,
  Lock,
  Palette,
  Settings,
  Shield,
  Trash2,
  User,
} from "lucide-react";

interface SettingsSidebarProps {
  activeTab: string;

  onChangeTab: (
    tab: string
  ) => void;
}

const menuItems = [
  {
    id: "account",
    title: "Account",
    description:
      "Profile information",
    icon: User,
  },

  {
    id: "security",
    title: "Security",
    description:
      "Password & 2FA",
    icon: Lock,
  },

  {
    id: "notifications",
    title: "Notifications",
    description:
      "Email & Push",
    icon: Bell,
  },

  {
    id: "appearance",
    title: "Appearance",
    description:
      "Theme & Layout",
    icon: Palette,
  },

  {
    id: "privacy",
    title: "Privacy",
    description:
      "Visibility",
    icon: Shield,
  },

  {
    id: "accounts",
    title: "Connected Accounts",
    description:
      "Google • GitHub",
    icon: Link2,
  },

  {
    id: "devices",
    title: "Devices",
    description:
      "Logged in devices",
    icon: Laptop,
  },

  {
    id: "danger",
    title: "Danger Zone",
    description:
      "Delete account",
    icon: Trash2,
  },
];
const SettingsSidebar = ({
  activeTab,
  onChangeTab,
}: SettingsSidebarProps) => {
  return (
    <aside
      className="
        rounded-[32px]

        border
        border-slate-200

        bg-white

        p-6
      "
    >
      {/* Header */}

      <div
        className="
          flex
          items-center
          gap-3
        "
      >
        <div
          className="
            flex
            h-14
            w-14

            items-center
            justify-center

            rounded-2xl

            bg-blue-50
          "
        >
          <Settings
            size={28}
            className="
              text-blue-600
            "
          />
        </div>

        <div>
          <h2
            className="
              text-xl
              font-bold
            "
          >
            Settings
          </h2>

          <p
            className="
              text-sm
              text-slate-500
            "
          >
            Manage preferences
          </p>
        </div>
      </div>

      {/* Menu */}

      <div
        className="
          mt-8

          space-y-2
        "
      >

                {menuItems.map(
          (item) => {
            const Icon =
              item.icon;

            const active =
              activeTab ===
              item.id;

            return (
              <button
                key={item.id}
                onClick={() =>
                  onChangeTab(
                    item.id
                  )
                }
                className={`
                  w-full

                  rounded-2xl

                  p-4

                  transition-all
                  duration-300

                  ${
                    active
                      ? `
                        border
                        border-blue-200

                        bg-blue-50

                        shadow-sm
                      `
                      : `
                        hover:bg-slate-50
                      `
                  }
                `}
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
                      className={`
                        flex
                        h-12
                        w-12

                        items-center
                        justify-center

                        rounded-2xl

                        ${
                          active
                            ? "bg-blue-600 text-white"
                            : "bg-slate-100 text-slate-600"
                        }
                      `}
                    >
                      <Icon
                        size={22}
                      />
                    </div>

                    <div
                      className="
                        text-left
                      "
                    >
                      <h4
                        className="
                          font-semibold
                        "
                      >
                        {item.title}
                      </h4>

                      <p
                        className="
                          mt-1

                          text-xs

                          text-slate-500
                        "
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <ChevronRight
                    size={18}
                    className={`
                      ${
                        active
                          ? "text-blue-600"
                          : "text-slate-400"
                      }
                    `}
                  />
                </div>
              </button>
            );
          }
        )}
              </div>

      {/* Footer */}

      <div
        className="
          mt-8

          rounded-3xl

          bg-slate-50

          p-5
        "
      >
        <h3
          className="
            font-semibold
          "
        >
          Security Status
        </h3>

        <p
          className="
            mt-2

            text-sm

            text-slate-500
          "
        >
          Enable Two-Factor Authentication
          and connect more accounts to
          improve your account security.
        </p>

        <div
          className="
            mt-4

            inline-flex
            items-center

            rounded-full

            bg-green-100

            px-4
            py-2

            text-sm
            font-medium

            text-green-700
          "
        >
          Account Protected
        </div>
      </div>
    </aside>
  );
};

export default SettingsSidebar;