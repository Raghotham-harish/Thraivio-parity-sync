const DangerZoneCard = () => {
  return (
    <div
      className="
        bg-white

        border
        border-red-200

        rounded-3xl

        p-6
      "
    >
      <div className="mb-6">

        <h2
          className="
            text-2xl
            font-bold

            text-red-600
          "
        >
          Danger Zone
        </h2>

        <p
          className="
            text-slate-500
            mt-2
          "
        >
          Permanent actions related to
          your mentor account.
        </p>

      </div>

      <div className="space-y-4">

        <button
          className="
            w-full

            bg-amber-500
            hover:bg-amber-600

            text-white

            py-4

            rounded-2xl

            font-medium

            transition
          "
        >
          Logout Account
        </button>

        <button
          className="
            w-full

            bg-red-600
            hover:bg-red-700

            text-white

            py-4

            rounded-2xl

            font-medium

            transition
          "
        >
          Deactivate Account
        </button>

      </div>

    </div>
  );
};

export default DangerZoneCard;