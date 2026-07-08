const AccountSettingsCard = () => {
  return (
    <div
      className="
        bg-white
        border
        rounded-3xl
        p-6
      "
    >
      <h2
        className="
          text-2xl
          font-bold
          mb-6
        "
      >
        Account Settings
      </h2>

      <div className="space-y-4">

        <button
          className="
            w-full

            border

            py-4

            rounded-2xl

            font-medium

            hover:bg-slate-50

            transition
          "
        >
          Change Password
        </button>

        <button
          className="
            w-full

            border

            py-4

            rounded-2xl

            font-medium

            hover:bg-slate-50

            transition
          "
        >
          Privacy Settings
        </button>

      </div>

    </div>
  );
};

export default AccountSettingsCard;