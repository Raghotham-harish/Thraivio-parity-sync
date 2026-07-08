import {
  Award,
  BookOpen,
  CalendarDays,
} from "lucide-react";

interface EmptyCertificatesProps {
  onBrowsePrograms: () => void;

  onBrowseEvents: () => void;
}

const EmptyCertificates = ({
  onBrowsePrograms,
  onBrowseEvents,
}: EmptyCertificatesProps) => {
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
      {/* Top Banner */}

      <div
        className="
          h-3

          bg-gradient-to-r
          from-amber-500
          via-orange-500
          to-yellow-500
        "
      />

      <div
        className="
          px-8
          py-16

          text-center
        "
      >
        {/* Icon */}

        <div
          className="
            h-32
            w-32

            mx-auto

            rounded-full

            bg-amber-100

            flex
            items-center
            justify-center
          "
        >
          <Award
            size={60}
            className="
              text-amber-600
            "
          />
        </div>

        {/* Heading */}

        <h2
          className="
            text-4xl
            font-bold

            mt-8
          "
        >
          No Certificates Yet
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
          Complete mentorship programs,
          attend events and finish learning
          sessions to earn verified
          certificates from industry mentors.
        </p>

        {/* Benefits */}

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
            <Award
              size={28}
              className="
                text-amber-600
                mx-auto
              "
            />

            <h3
              className="
                font-bold

                mt-4
              "
            >
              Verified Credentials
            </h3>

            <p
              className="
                text-sm
                text-slate-500

                mt-2
              "
            >
              Showcase mentor verified
              achievements.
            </p>
          </div>

          <div
            className="
              bg-slate-50

              rounded-3xl

              p-6
            "
          >
            <BookOpen
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
              Complete Programs
            </h3>

            <p
              className="
                text-sm
                text-slate-500

                mt-2
              "
            >
              Finish structured learning
              paths and mentorship journeys.
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
                text-green-600
                mx-auto
              "
            />

            <h3
              className="
                font-bold

                mt-4
              "
            >
              Attend Events
            </h3>

            <p
              className="
                text-sm
                text-slate-500

                mt-2
              "
            >
              Join workshops, webinars
              and live mentoring sessions.
            </p>
          </div>
        </div>

        {/* Actions */}

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
              onBrowseEvents
            }
            className="
              border
              border-slate-300

              px-8
              py-4

              rounded-2xl

              font-semibold

              hover:bg-slate-50

              transition-all
            "
          >
            Browse Events
          </button>
        </div>

        {/* Bottom Note */}

        <div
          className="
            mt-10

            inline-flex
            items-center

            bg-green-50
            text-green-700

            px-5
            py-3

            rounded-full

            text-sm
            font-medium
          "
        >
          🎓 Certificates are automatically
          issued after successful completion.
        </div>
      </div>
    </div>
  );
};

export default EmptyCertificates;