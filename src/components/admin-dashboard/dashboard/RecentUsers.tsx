import {
  Ban,
  Eye,
  MoreVertical,
  Search,
  Trash2,
  Users,
} from "lucide-react";

import type {
  RecentUser,
} from "@/types/admin-dashboard";

interface RecentUsersProps {
  users: RecentUser[];

  onView?: (id: string) => void;

  onBlock?: (id: string) => void;

  onDelete?: (id: string) => void;
}

const RecentUsers = ({
  users,
  onView,
  onBlock,
  onDelete,
}: RecentUsersProps) => {
  return (
    <section className="mt-10">

      {/* Header */}

      <div
        className="
          flex
          flex-col

          gap-5

          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >
        <div>

          <span
            className="
              inline-flex

              items-center

              gap-2

              rounded-full

              bg-blue-50

              px-4
              py-2

              text-sm
              font-medium

              text-[#2563EB]
            "
          >
            <Users size={16} />

            Recent Users
          </span>

          <h2
            className="
              mt-5

              text-3xl

              font-bold
            "
          >
            Latest User Registrations
          </h2>

          <p
            className="
              mt-3

              max-w-3xl

              leading-7

              text-muted-foreground
            "
          >
            Monitor newly registered
            users and quickly review
            their activity from the
            admin dashboard.
          </p>

        </div>

        {/* Search */}

        <div
          className="
            relative
          "
        >
          <Search
            size={18}
            className="
              absolute

              left-4
              top-1/2

              -translate-y-1/2

              text-muted-foreground
            "
          />

          <input
            type="text"
            placeholder="Search users..."

            className="
              w-80

              rounded-2xl

              border
              border-border

              bg-card

              py-3

              pl-11
              pr-4

              outline-none

              transition

              focus:border-blue-500
            "
          />

        </div>

      </div>

      {/* Table */}

      <div
        className="
          mt-8

          overflow-hidden

          rounded-2xl

          border
          border-border

          bg-card
        "
      >
        {/* Table Header */}

        <div
          className="
            grid

            grid-cols-12

            border-b
            border-border

            bg-secondary

            px-6
            py-4

            text-sm
            font-semibold

            text-muted-foreground
          "
        >
          <div className="col-span-4">
            User
          </div>

          <div className="col-span-2">
            Joined
          </div>

          <div className="col-span-2">
            Status
          </div>

          <div className="col-span-2">
            User ID
          </div>

          <div className="col-span-2 text-right">
            Actions
          </div>

        </div>

        {/* Users */}

        {users.map((user) => (
          <div
            key={user.id}
            className="
              grid

              grid-cols-12

              items-center

              border-b
              border-slate-100

              px-6
              py-5

              transition

              hover:bg-secondary
            "
          >
            {/* User */}
                        <div className="col-span-4">
              <div className="flex items-center gap-4">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="
                    h-14
                    w-14

                    rounded-2xl

                    object-cover
                  "
                />

                <div>
                  <h4
                    className="
                      font-semibold

                      text-foreground
                    "
                  >
                    {user.name}
                  </h4>

                  <p
                    className="
                      mt-1

                      text-sm

                      text-muted-foreground
                    "
                  >
                    {user.email}
                  </p>
                </div>
              </div>
            </div>

            {/* Joined */}

            <div className="col-span-2">
              <span
                className="
                  text-sm

                  text-muted-foreground
                "
              >
                {user.joinedAt}
              </span>
            </div>

            {/* Status */}

            <div className="col-span-2">
              <span
                className={`
                  inline-flex

                  rounded-full

                  px-3
                  py-1.5

                  text-xs
                  font-semibold

                  ${
                    user.status === "active"
                      ? "bg-[#ECFDF5] text-[#065F46]"

                      : user.status === "pending"
                      ? "bg-[#FFFBEB] text-[#B45309]"

                      : "bg-[#FFDAD6] text-[#BA1A1A]"
                  }
                `}
              >
                {user.status}
              </span>
            </div>

            {/* User ID */}

            <div className="col-span-2">
              <span
                className="
                  font-medium

                  text-foreground
                "
              >
                {user.id}
              </span>
            </div>

            {/* Actions */}

            <div
              className="
                col-span-2

                flex
                items-center
                justify-end

                gap-2
              "
            >
              <button
                onClick={() =>
                  onView?.(user.id)
                }
                className="
                  flex

                  h-10
                  w-10

                  items-center
                  justify-center

                  rounded-xl

                  bg-blue-50

                  text-primary

                  transition

                  hover:bg-[#EFF6FF]
                "
              >
                <Eye size={18} />
              </button>

              <button
                onClick={() =>
                  onBlock?.(user.id)
                }
                className="
                  flex

                  h-10
                  w-10

                  items-center
                  justify-center

                  rounded-xl

                  bg-amber-50

                  text-amber-600

                  transition

                  hover:bg-[#FFFBEB]
                "
              >
                <Ban size={18} />
              </button>

              <button
                onClick={() =>
                  onDelete?.(user.id)
                }
                className="
                  flex

                  h-10
                  w-10

                  items-center
                  justify-center

                  rounded-xl

                  bg-red-50

                  text-red-600

                  transition

                  hover:bg-[#FFDAD6]
                "
              >
                <Trash2 size={18} />
              </button>

              <button
                className="
                  flex

                  h-10
                  w-10

                  items-center
                  justify-center

                  rounded-xl

                  transition

                  hover:bg-secondary
                "
              >
                <MoreVertical size={18} />
              </button>
            </div>
          </div>
        ))}

        {/* Footer */}

        <div
          className="
            flex
            flex-col

            gap-4

            border-t
            border-border

            bg-secondary

            px-6
            py-5

            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          <p
            className="
              text-sm

              text-muted-foreground
            "
          >
            Showing
            <span className="font-semibold">
              {" "}
              {users.length}{" "}
            </span>
            recently joined users.
          </p>

          <button
            className="
              rounded-2xl

              bg-primary

              px-6
              py-3

              font-semibold

              text-white

              transition

              hover:bg-primary/90
            "
          >
            View All Users
          </button>
        </div>

      </div>
    </section>
  );
};

export default RecentUsers;