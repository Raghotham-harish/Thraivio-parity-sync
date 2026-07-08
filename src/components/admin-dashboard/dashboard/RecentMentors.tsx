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

              text-violet-700
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

              text-slate-500
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

              text-slate-400
            "
          />

          <input
            type="text"
            placeholder="Search mentors..."

            className="
              w-80

              rounded-2xl

              border
              border-slate-200

              bg-white

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

          rounded-[30px]

          border
          border-slate-200

          bg-white
        "
      >
        {/* Header */}

        <div
          className="
            grid

            grid-cols-12

            border-b
            border-slate-200

            bg-slate-50

            px-6
            py-4

            text-sm
            font-semibold

            text-slate-600
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

              hover:bg-slate-50
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

                        text-slate-900
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

                      text-slate-500
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

                  text-slate-700
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
                    fill-amber-400

                    text-amber-400
                  "
                />

                <span
                  className="
                    text-sm
                    font-semibold

                    text-amber-700
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
                      ? "bg-emerald-100 text-emerald-700"

                      : "bg-amber-100 text-amber-700"
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

                  text-blue-600

                  transition

                  hover:bg-blue-100
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

                  bg-emerald-50

                  text-emerald-600

                  transition

                  hover:bg-emerald-100
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

                  hover:bg-red-100
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

                  hover:bg-slate-100
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
            border-slate-200

            bg-slate-50

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

              text-slate-500
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

              bg-blue-600

              px-6
              py-3

              font-semibold

              text-white

              transition

              hover:bg-blue-700
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