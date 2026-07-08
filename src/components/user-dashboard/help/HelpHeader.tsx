import {
  Headphones,
  ShieldCheck,
} from "lucide-react";

interface HelpHeaderProps {
  openTickets: number;

  resolvedTickets: number;

  activeSection: string;
}

const HelpHeader = ({
  openTickets,
  resolvedTickets,
  activeSection,
}: HelpHeaderProps) => {
  const total =
    openTickets + resolvedTickets;

  const satisfaction =
    total === 0
      ? 100
      : Math.round(
          (resolvedTickets / total) * 100
        );

  return (
    <div
      className="
        flex
        flex-col
        gap-6

        lg:flex-row
        lg:items-center
        lg:justify-between
      "
    >
      {/* Left */}

      <div>
        <div
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

            text-blue-700
          "
        >
          <Headphones size={16} />

          Help & Support
        </div>

        <h1
          className="
            mt-5

            text-4xl
            font-bold
          "
        >
          Help Center
        </h1>

        <p
          className="
            mt-3

            max-w-3xl

            text-slate-500
          "
        >
          Need assistance? Browse FAQs,
          raise support tickets, contact our
          team or explore learning resources
          anytime.
        </p>
      </div>

      {/* Right */}

      <div
        className="
          w-full
          lg:w-[380px]

          rounded-[30px]

          border
          border-slate-200

          bg-white

          p-6
        "
      >
        <div
          className="
            flex
            items-center
            justify-between
          "
        >
          <div>
            <p
              className="
                text-sm
                text-slate-500
              "
            >
              Satisfaction
            </p>

            <h3
              className="
                mt-2

                text-4xl
                font-bold

                text-blue-600
              "
            >
              {satisfaction}%
            </h3>
          </div>

          <div
            className="
              flex

              h-16
              w-16

              items-center
              justify-center

              rounded-3xl

              bg-blue-50
            "
          >
            <ShieldCheck
              size={30}
              className="
                text-blue-600
              "
            />
          </div>
        </div>

        {/* Progress */}

        <div
          className="
            mt-6

            h-3

            overflow-hidden

            rounded-full

            bg-slate-200
          "
        >
          <div
            className="
              h-full

              rounded-full

              bg-gradient-to-r
              from-blue-600
              to-indigo-600
            "
            style={{
              width: `${satisfaction}%`,
            }}
          />
        </div>

        <div
          className="
            mt-5

            flex
            items-center
            justify-between
          "
        >
          <div>
            <p
              className="
                text-sm
                text-slate-500
              "
            >
              Current Section
            </p>

            <h4
              className="
                mt-1

                font-semibold
              "
            >
              {activeSection}
            </h4>
          </div>

          <div
            className="
              rounded-full

              bg-green-50

              px-4
              py-2

              text-sm
              font-medium

              text-green-700
            "
          >
            Online
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpHeader;