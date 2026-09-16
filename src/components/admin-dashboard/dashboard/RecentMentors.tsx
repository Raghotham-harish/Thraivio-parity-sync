import {
  BadgeCheck,
  Check,
  Eye,
  MoreVertical,
  Search,
  Star,
  X,
} from "lucide-react";

import type {
  RecentMentor,
} from "@/types/admin-dashboard";

interface RecentMentorsProps {
  mentors: RecentMentor[];

  onView?: (id: string) => void;

  onApprove?: (id: string) => void;

  onReject?: (id: string) => void;
}

const RecentMentors = ({
  mentors,
  onView,
  onApprove,
  onReject,
}: RecentMentorsProps) => {
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

              bg-violet-50

              px-4
              py-2

              text-sm
              font-medium

              text-muted-foreground
            "
          >
            <BadgeCheck size={16} />

            Mentor Management
          </span>

          <h2
            className="
              mt-5

              text-3xl

              font-bold
            "
          >
            Recent Mentor Applications
          </h2>

          <p
            className="
              mt-3

              max-w-3xl

              leading-7

              text-muted-foreground
            "
          >
            Review mentor profiles,
            approve applications,
            reject requests and
            monitor mentor quality.
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
            placeholder="Search mentors..."

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
        {/* Header */}

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
            Mentor
          </div>

          <div className="col-span-2">
            Profession
          </div>

          <div className="col-span-2">
            Rating
          </div>

          <div className="col-span-2">
            Status
          </div>

          <div className="col-span-2 text-right">
            Actions
          </div>
        </div>

        {/* Rows */}

        {mentors.map((mentor) => (
          <div
            key={mentor.id}
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
            {/* Mentor */}
                        <div className="col-span-4">
              <div className="flex items-center gap-4">
                <img
                  src={mentor.avatar}
                  alt={mentor.name}
                  className="
                    h-14
                    w-14

                    rounded-2xl

                    object-cover
                  "
                />

                <div>
                  <div className="flex items-center gap-2">
                    <h4
                      className="
                        font-semibold

                        text-foreground
                      "
                    >
                      {mentor.name}
                    </h4>

                    {mentor.status ===
                      "approved" && (
                      <BadgeCheck
                        size={16}
                        className="
                          text-emerald-500
                        "
                      />
                    )}
                  </div>

                  <p
                    className="
                      mt-1

                      text-sm

                      text-muted-foreground
                    "
                  >
                    Mentor ID : {mentor.id}
                  </p>
                </div>
              </div>
            </div>

            {/* Profession */}

            <div className="col-span-2">
              <p
                className="
                  font-medium

                  text-foreground
                "
              >
                {mentor.profession}
              </p>
            </div>

            {/* Rating */}

            <div className="col-span-2">
              <div
                className="
                  inline-flex

                  items-center

                  gap-2

                  rounded-full

                  bg-amber-50

                  px-3
                  py-2
                "
              >
                <Star
                  size={16}
                  className="
                    fill-[#F59E0B]

                    text-[#F59E0B]
                  "
                />

                <span
                  className="
                    text-sm
                    font-semibold

                    text-[#B45309]
                  "
                >
                  {mentor.rating}
                </span>
              </div>
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
                    mentor.status ===
                    "approved"
                      ? "bg-[#ECFDF5] text-[#065F46]"

                      : "bg-[#FFFBEB] text-[#B45309]"
                  }
                `}
              >
                {mentor.status}
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
              {/* View */}

              <button
                onClick={() =>
                  onView?.(mentor.id)
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

              {/* Approve */}

              <button
                onClick={() =>
                  onApprove?.(mentor.id)
                }
                className="
                  flex

                  h-10
                  w-10

                  items-center
                  justify-center

                  rounded-xl

                  bg-[#ECFDF5]

                  text-[#0F8F65]

                  transition

                  hover:bg-[#ECFDF5]
                "
              >
                <Check size={18} />
              </button>

              {/* Reject */}

              <button
                onClick={() =>
                  onReject?.(mentor.id)
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
                <X size={18} />
              </button>

              {/* More */}

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
              {mentors.length}{" "}
            </span>
            latest mentor applications.
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
            View All Mentors
          </button>
        </div>

      </div>
    </section>
  );
};

export default RecentMentors;