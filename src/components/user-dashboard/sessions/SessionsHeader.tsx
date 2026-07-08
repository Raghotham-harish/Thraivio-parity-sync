import {
  CalendarDays,
  Video,
  Sparkles,
} from "lucide-react";

interface SessionsHeaderProps {
  totalSessions: number;
}

const SessionsHeader = ({
  totalSessions,
}: SessionsHeaderProps) => {
  return (
    <div
      className="
        flex
        flex-col
        lg:flex-row

        lg:items-center
        lg:justify-between

        gap-6
      "
    >
      {/* Left */}

      <div>
        <div
          className="
            inline-flex
            items-center
            gap-2

            bg-blue-50
            text-blue-700

            px-4
            py-2

            rounded-full

            text-sm
            font-medium
          "
        >
          <Sparkles size={16} />

          Learning Sessions
        </div>

        <h1
          className="
            text-4xl
            font-bold

            mt-4
          "
        >
          My Sessions
        </h1>

        <p
          className="
            text-slate-500

            mt-3

            max-w-2xl
          "
        >
          Manage mentorship calls,
          mock interviews, career
          guidance sessions and
          coaching meetings with
          industry experts.
        </p>
      </div>

      {/* Right */}

      <div
        className="
          flex
            items-center
            gap-3
        "
      >
        {/* Total Sessions */}

        <div
          className="
            bg-white

            border
            border-slate-200

            rounded-3xl

            px-6
            py-5

            min-w-[220px]
          "
        >
          <div
            className="
              flex
              items-center
              gap-4
            "
          >
            <div
              className="
                h-14
                w-14

                rounded-2xl

                bg-blue-50

                flex
                items-center
                justify-center
              "
            >
              <CalendarDays
                size={24}
                className="
                  text-blue-600
                "
              />
            </div>

            <div>
              <p
                className="
                  text-sm
                  text-slate-500
                "
              >
                Total Sessions
              </p>

              <h3
                className="
                  text-3xl
                  font-bold
                "
              >
                {totalSessions}
              </h3>
            </div>
          </div>
        </div>

        {/* Marketplace */}

        <div
          className="
            bg-white

            border
            border-slate-200

            rounded-3xl

            px-6
            py-5

            min-w-[220px]
          "
        >
          <div
            className="
              flex
              items-center
              gap-4
            "
          >
            <div
              className="
                h-14
                w-14

                rounded-2xl

                bg-green-50

                flex
                items-center
                justify-center
              "
            >
              <Video
                size={24}
                className="
                  text-green-600
                "
              />
            </div>

            <div>
              <p
                className="
                  text-sm
                  text-slate-500
                "
              >
                Marketplace
              </p>

              <h3
                className="
                  text-lg
                  font-bold
                "
              >
                Multi Mentor
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionsHeader;