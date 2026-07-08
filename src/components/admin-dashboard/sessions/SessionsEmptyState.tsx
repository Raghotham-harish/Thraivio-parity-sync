import {
  CalendarPlus,
  RefreshCcw,
  SearchX,
} from "lucide-react";

interface SessionsEmptyStateProps {
  hasFilters?: boolean;

  onCreate?: () => void;

  onReset?: () => void;
}

const SessionsEmptyState = ({
  hasFilters = false,
  onCreate,
  onReset,
}: SessionsEmptyStateProps) => {
  return (
    <div
      className="
        overflow-hidden

        rounded-[32px]

        border
        border-slate-200

        bg-white

        shadow-sm
      "
    >
      {/* Top Gradient */}

      <div
        className="
          h-3

          bg-gradient-to-r
          from-blue-600
          via-indigo-600
          to-purple-600
        "
      />

      <div
        className="
          flex

          flex-col

          items-center

          px-8
          py-16

          text-center
        "
      >
        {/* Illustration */}

        <div
          className="
            relative

            flex
            h-40
            w-40

            items-center
            justify-center

            rounded-full

            bg-gradient-to-br
            from-blue-50
            via-indigo-50
            to-purple-100
          "
        >
          <div
            className="
              absolute

              h-28
              w-28

              rounded-full

              bg-white

              shadow-lg
            "
          />

          <SearchX
            size={60}
            className="
              relative

              text-indigo-600
            "
          />
        </div>

        {/* Heading */}

        <h2
          className="
            mt-10

            text-3xl

            font-bold

            text-slate-900
          "
        >
          {hasFilters
            ? "No Matching Sessions"
            : "No Sessions Found"}
        </h2>

        {/* Description */}

        <p
          className="
            mt-4

            max-w-2xl

            text-base

            leading-8

            text-slate-500
          "
        >
          {hasFilters
            ? "No sessions match your current filters. Try changing the search keyword or resetting filters to view all available mentoring sessions."
            : "You haven't created any mentoring sessions yet. Start by scheduling your first mentor session for students."}
        </p>

        {/* Stats */}

        <div
          className="
            mt-10

            grid

            w-full
            max-w-4xl

            gap-6

            md:grid-cols-3
          "
        >
          <div
            className="
              rounded-3xl

              bg-slate-50

              p-6
            "
          >
            <h3
              className="
                text-4xl

                font-bold

                text-blue-600
              "
            >
              0
            </h3>

            <p
              className="
                mt-2

                text-sm

                text-slate-500
              "
            >
              Scheduled Sessions
            </p>
          </div>

          <div
            className="
              rounded-3xl

              bg-slate-50

              p-6
            "
          >
            <h3
              className="
                text-4xl

                font-bold

                text-emerald-600
              "
            >
              0
            </h3>

            <p
              className="
                mt-2

                text-sm

                text-slate-500
              "
            >
              Active Mentors
            </p>
          </div>

          <div
            className="
              rounded-3xl

              bg-slate-50

              p-6
            "
          >
            <h3
              className="
                text-4xl

                font-bold

                text-purple-600
              "
            >
              0
            </h3>

            <p
              className="
                mt-2

                text-sm

                text-slate-500
              "
            >
              Registered Students
            </p>
          </div>
        </div>
                {/* Action Buttons */}

        <div
          className="
            mt-10

            flex
            flex-col

            gap-4

            sm:flex-row
          "
        >
          {hasFilters ? (
            <button
              onClick={onReset}
              className="
                inline-flex
                items-center
                justify-center
                gap-3

                rounded-2xl

                bg-gradient-to-r
                from-blue-600
                via-indigo-600
                to-purple-600

                px-8
                py-4

                font-semibold
                text-white

                shadow-lg

                transition-all

                hover:scale-[1.02]
                hover:shadow-xl
              "
            >
              <RefreshCcw size={20} />

              Reset Filters
            </button>
          ) : (
            <button
              onClick={onCreate}
              className="
                inline-flex
                items-center
                justify-center
                gap-3

                rounded-2xl

                bg-gradient-to-r
                from-blue-600
                via-indigo-600
                to-purple-600

                px-8
                py-4

                font-semibold
                text-white

                shadow-lg

                transition-all

                hover:scale-[1.02]
                hover:shadow-xl
              "
            >
              <CalendarPlus size={20} />

              Create First Session
            </button>
          )}

          <button
            className="
              rounded-2xl

              border
              border-slate-300

              bg-white

              px-8
              py-4

              font-semibold

              transition

              hover:bg-slate-50
            "
          >
            Learn More
          </button>
        </div>

        {/* Tips */}

        <div
          className="
            mt-14

            grid

            w-full
            max-w-5xl

            gap-6

            md:grid-cols-3
          "
        >
          <div
            className="
              rounded-3xl

              border
              border-slate-200

              bg-slate-50

              p-6

              text-left
            "
          >
            <h3
              className="
                text-lg
                font-semibold
              "
            >
              Create Sessions
            </h3>

            <p
              className="
                mt-3

                text-sm

                leading-7

                text-slate-500
              "
            >
              Schedule mentorship sessions
              with mentors and assign
              students in just a few clicks.
            </p>
          </div>

          <div
            className="
              rounded-3xl

              border
              border-slate-200

              bg-slate-50

              p-6

              text-left
            "
          >
            <h3
              className="
                text-lg
                font-semibold
              "
            >
              Track Progress
            </h3>

            <p
              className="
                mt-3

                text-sm

                leading-7

                text-slate-500
              "
            >
              Monitor attendance,
              completion, certificates,
              refunds and payments from one
              place.
            </p>
          </div>

          <div
            className="
              rounded-3xl

              border
              border-slate-200

              bg-slate-50

              p-6

              text-left
            "
          >
            <h3
              className="
                text-lg
                font-semibold
              "
            >
              Manage Everything
            </h3>

            <p
              className="
                mt-3

                text-sm

                leading-7

                text-slate-500
              "
            >
              Edit, cancel, reassign mentors,
              issue certificates and manage
              every mentoring session from
              one dashboard.
            </p>
          </div>
        </div>

      </div>

    </div>

  );

};

export default SessionsEmptyState;