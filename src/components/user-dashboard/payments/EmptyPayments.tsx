import {
  CalendarDays,
  CreditCard,
  GraduationCap,
  Sparkles,
  Users,
} from "lucide-react";

interface EmptyPaymentsProps {
  onBrowsePrograms: () => void;

  onBrowseSessions: () => void;

  onBrowseEvents: () => void;
}

const EmptyPayments = ({
  onBrowsePrograms,
  onBrowseSessions,
  onBrowseEvents,
}: EmptyPaymentsProps) => {
  return (
    <div
      className="
        bg-white

        border
        border-slate-200

        rounded-[32px]

        overflow-hidden
      "
    >
      {/* Top Gradient */}

      <div
        className="
          h-3

          bg-gradient-to-r
          from-emerald-500
          via-green-500
          to-teal-500
        "
      />

      <div
        className="
          px-8
          py-16

          text-center
        "
      >
        {/* Hero Icon */}

        <div
          className="
            h-32
            w-32

            mx-auto

            rounded-full

            bg-emerald-100

            flex
            items-center
            justify-center
          "
        >
          <CreditCard
            size={60}
            className="
              text-emerald-600
            "
          />
        </div>

        {/* Title */}

        <h2
          className="
            text-4xl
            font-bold

            mt-8
          "
        >
          No Payments Yet
        </h2>

        <p
          className="
            max-w-2xl
            mx-auto

            mt-4

            text-slate-500
            leading-7
          "
        >
          Start your mentorship journey by
          enrolling in programs, booking
          sessions or attending events.
          Your payment history, invoices and
          receipts will appear here.
        </p>

        {/* Stats Preview */}

        <div
          className="
            grid
            md:grid-cols-3

            gap-5

            mt-12
          "
        >
          <div
            className="
              bg-slate-50

              rounded-3xl

              p-6
            "
          >
            <GraduationCap
              size={28}
              className="
                text-blue-600
                mx-auto
              "
            />

            <h3
              className="
                font-bold

                mt-4
              "
            >
              Premium Programs
            </h3>

            <p
              className="
                text-sm
                text-slate-500

                mt-2
              "
            >
              Learn directly from
              world-class mentors.
            </p>
          </div>

          <div
            className="
              bg-slate-50

              rounded-3xl

              p-6
            "
          >
            <Users
              size={28}
              className="
                text-purple-600
                mx-auto
              "
            />

            <h3
              className="
                font-bold

                mt-4
              "
            >
              1:1 Sessions
            </h3>

            <p
              className="
                text-sm
                text-slate-500

                mt-2
              "
            >
              Personalized mentorship
              and career guidance.
            </p>
          </div>

          <div
            className="
              bg-slate-50

              rounded-3xl

              p-6
            "
          >
            <CalendarDays
              size={28}
              className="
                text-orange-600
                mx-auto
              "
            />

            <h3
              className="
                font-bold

                mt-4
              "
            >
              Live Events
            </h3>

            <p
              className="
                text-sm
                text-slate-500

                mt-2
              "
            >
              Join workshops,
              webinars and AMA sessions.
            </p>
          </div>
        </div>

        {/* CTA Buttons */}

        <div
          className="
            flex
            flex-col
            sm:flex-row

            justify-center

            gap-4

            mt-12
          "
        >
          <button
            onClick={
              onBrowsePrograms
            }
            className="
              bg-blue-600
              hover:bg-blue-700

              text-white

              px-8
              py-4

              rounded-2xl

              font-semibold

              transition-all
            "
          >
            Browse Programs
          </button>

          <button
            onClick={
              onBrowseSessions
            }
            className="
              bg-purple-600
              hover:bg-purple-700

              text-white

              px-8
              py-4

              rounded-2xl

              font-semibold

              transition-all
            "
          >
            Book Session
          </button>

          <button
            onClick={
              onBrowseEvents
            }
            className="
              bg-orange-600
              hover:bg-orange-700

              text-white

              px-8
              py-4

              rounded-2xl

              font-semibold

              transition-all
            "
          >
            Explore Events
          </button>
        </div>

        {/* Bottom Note */}

        <div
          className="
            mt-10

            inline-flex
            items-center
            gap-2

            bg-emerald-50
            text-emerald-700

            px-5
            py-3

            rounded-full

            text-sm
            font-medium
          "
        >
          <Sparkles size={16} />

          Secure payments, invoices and
          receipts are generated automatically.
        </div>
      </div>
    </div>
  );
};

export default EmptyPayments;