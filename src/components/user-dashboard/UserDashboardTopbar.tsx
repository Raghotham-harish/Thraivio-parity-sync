import {
  Bell,
  Search,
  ChevronDown,
} from "lucide-react";

const UserDashboardTopbar = () => {
  return (
    <header
      className="
        h-20
        bg-white
        border-b
        border-slate-200

        flex
        items-center
        justify-between

        px-8
      "
    >
      {/* Left */}

      <div className="flex items-center gap-4">

        <div
          className="
            relative
            hidden
            md:block
          "
        >
          <Search
            size={18}
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-slate-400
            "
          />

          <input
            type="text"
            placeholder="Search mentors, programs..."
            className="
              w-96
              pl-11
              pr-4
              py-3

              border
              border-slate-200

              rounded-2xl

              outline-none

              focus:border-blue-500
            "
          />
        </div>

      </div>

      {/* Right */}

      <div
        className="
          flex
          items-center
          gap-5
        "
      >
        <button
          className="
            relative

            h-11
            w-11

            rounded-2xl

            border
            border-slate-200

            flex
            items-center
            justify-center
          "
        >
          <Bell size={20} />

          <span
            className="
              absolute
              top-2
              right-2

              h-2
              w-2

              bg-red-500
              rounded-full
            "
          />
        </button>

        <button
          className="
            flex
            items-center
            gap-3
          "
        >
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="user"
            className="
              h-11
              w-11
              rounded-full
              object-cover
            "
          />

          <div className="text-left">

            <h4 className="font-semibold">
              Sunil Kumar
            </h4>

            <p
              className="
                text-xs
                text-slate-500
              "
            >
              Student
            </p>

          </div>

          <ChevronDown size={18} />
        </button>

      </div>
    </header>
  );
};

export default UserDashboardTopbar;