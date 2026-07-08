import {
  Bell,
  ChevronDown,
  Search,
} from "lucide-react";

const AdminTopbar = () => {
  const today = new Date().toLocaleDateString(
    "en-IN",
    {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

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

      <div className="flex items-center gap-6">

        {/* Search */}

        <div
          className="
            relative

            hidden
            lg:block
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
            placeholder="Search mentors, users, payments..."
            className="
              w-[420px]

              rounded-2xl

              border
              border-slate-200

              bg-slate-50

              py-3
              pl-11
              pr-4

              outline-none

              transition-all

              focus:border-blue-500
              focus:bg-white
            "
          />
        </div>

        {/* Date */}

        <div
          className="
            hidden
            xl:block
          "
        >
          <p
            className="
              text-sm
              font-medium

              text-slate-500
            "
          >
            {today}
          </p>
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
        {/* Notification */}

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

            transition

            hover:bg-slate-100
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

              rounded-full

              bg-red-500
            "
          />
        </button>

        {/* Admin */}

        <button
          className="
            flex
            items-center
            gap-3
          "
        >
          <img
            src="https://i.pravatar.cc/150?img=68"
            alt="Admin"
            className="
              h-11
              w-11

              rounded-full

              object-cover
            "
          />

          <div
            className="
              hidden
              md:block

              text-left
            "
          >
            <h4
              className="
                font-semibold
              "
            >
              Sunil Kumar
            </h4>

            <p
              className="
                text-xs

                text-slate-500
              "
            >
              Super Admin
            </p>
          </div>

          <ChevronDown size={18} />
        </button>
      </div>
    </header>
  );
};

export default AdminTopbar;