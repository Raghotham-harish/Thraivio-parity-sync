import type { UserRole } from "@/types/auth";

interface Props {
  value: UserRole;
  onChange: (
    role: UserRole
  ) => void;
}

const RoleSelector = ({
  value,
  onChange,
}: Props) => {
  return (
    <div>

      <label className="block text-sm font-semibold mb-3">
        Account Type
      </label>

      <div className="grid grid-cols-2 gap-3">

        <button
          type="button"
          onClick={() =>
            onChange("user")
          }
          className={`
            rounded-xl
            border
            py-3
            font-medium
            transition-all

            ${
              value === "user"
                ? "bg-blue-600 text-white border-blue-600"
                : "border-slate-200 hover:border-blue-200"
            }
          `}
        >
          User
        </button>

        <button
          type="button"
          onClick={() =>
            onChange("mentor")
          }
          className={`
            rounded-xl
            border
            py-3
            font-medium
            transition-all

            ${
              value === "mentor"
                ? "bg-blue-600 text-white border-blue-600"
                : "border-slate-200 hover:border-blue-200"
            }
          `}
        >
          Mentor
        </button>

      </div>

    </div>
  );
};

export default RoleSelector;