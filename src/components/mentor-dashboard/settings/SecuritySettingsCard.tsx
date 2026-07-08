import {
  KeyRound,
  Shield,
  Smartphone,
} from "lucide-react";

const SecuritySettingsCard = () => {
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
          Security Settings
        </h2>

        <p
          className="
            text-slate-500
            mt-2
          "
        >
          Manage account security
          and authentication options.
        </p>

      </div>

      <div className="space-y-4">

        <button
          className="
            w-full

            flex
            items-center
            gap-3

            border

            rounded-2xl

            p-4

            hover:bg-slate-50
          "
        >
          <KeyRound size={20} />

          Change Password
        </button>

        <button
          className="
            w-full

            flex
            items-center
            gap-3

            border

            rounded-2xl

            p-4

            hover:bg-slate-50
          "
        >
          <Shield size={20} />

          Enable Two-Factor Authentication
        </button>

        <button
          className="
            w-full

            flex
            items-center
            gap-3

            border

            rounded-2xl

            p-4

            hover:bg-slate-50
          "
        >
          <Smartphone size={20} />

          Manage Connected Devices
        </button>

      </div>

    </div>
  );
};

export default SecuritySettingsCard;