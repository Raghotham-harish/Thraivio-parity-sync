import { Save } from "lucide-react";

interface SettingsHeaderProps {
  onSave: () => void;
}

const SettingsHeader = ({
  onSave,
}: SettingsHeaderProps) => {
  return (
    <div
      className="
        flex
        flex-col
        lg:flex-row
        lg:items-center
        lg:justify-between
        gap-6
      "
    >
      <div>
        <div
          className="
            inline-flex
            items-center

            px-4
            py-2

            rounded-full

            bg-blue-50
            text-blue-700

            text-sm
            font-medium
          "
        >
          ⚙️ Mentor Settings
        </div>

        <h1
          className="
            text-4xl
            font-bold
            mt-4
          "
        >
          Account Settings
        </h1>

        <p
          className="
            mt-3
            text-slate-500
            max-w-2xl
          "
        >
          Manage profile information,
          social links, notifications,
          privacy and account preferences.
        </p>
      </div>

      <button
        onClick={onSave}
        className="
          bg-blue-600
          hover:bg-blue-700

          text-white

          px-6
          py-4

          rounded-2xl

          font-semibold

          flex
          items-center
          gap-2

          transition
          hover:shadow-lg
        "
      >
        <Save size={20} />

        Save Changes
      </button>
    </div>
  );
};

export default SettingsHeader;