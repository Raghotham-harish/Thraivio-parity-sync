import {
  Brain,
  Code2,
  Cpu,
  Database,
  Globe,
  Lightbulb,
  Plus,
  X,
} from "lucide-react";

interface InterestsSectionProps {
  interests: string[];

  newInterest: string;

  onInterestChange: (
    value: string
  ) => void;

  onAddInterest: () => void;

  onRemoveInterest: (
    interest: string
  ) => void;
}

const suggestedInterests = [
  {
    label: "Artificial Intelligence",
    icon: Brain,
  },

  {
    label: "Web Development",
    icon: Globe,
  },

  {
    label: "Frontend Engineering",
    icon: Code2,
  },

  {
    label: "Backend Development",
    icon: Database,
  },

  {
    label: "Cloud Computing",
    icon: Cpu,
  },

  {
    label: "Innovation",
    icon: Lightbulb,
  },
];

const InterestsSection = ({
  interests,
  newInterest,
  onInterestChange,
  onAddInterest,
  onRemoveInterest,
}: InterestsSectionProps) => {
  return (
    <div
      className="
        bg-white

        border
        border-slate-200

        rounded-[32px]

        p-8
      "
    >
      {/* Header */}

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
        <div>

          <div
            className="
              inline-flex
              items-center
              gap-2

              rounded-full

              bg-purple-50

              px-4
              py-2

              text-sm
              font-medium

              text-purple-700
            "
          >
            <Brain size={16} />

            Learning Interests
          </div>

          <h2
            className="
              mt-5

              text-3xl
              font-bold
            "
          >
            Areas of Interest
          </h2>

          <p
            className="
              mt-3

              max-w-2xl

              text-slate-500
            "
          >
            Select the technologies,
            domains and topics you enjoy
            learning. These preferences
            help personalize mentor and
            program recommendations.
          </p>

        </div>

        <div
          className="
            flex
            h-16
            w-16

            items-center
            justify-center

            rounded-3xl

            bg-purple-50
          "
        >
          <Brain
            size={30}
            className="
              text-purple-600
            "
          />
        </div>

      </div>

      {/* Add Interest */}

      <div
        className="
          mt-10

          flex
          flex-col
          lg:flex-row

          gap-4
        "
      >
        <input
          type="text"
          value={newInterest}
          onChange={(e) =>
            onInterestChange(
              e.target.value
            )
          }
          placeholder="Add a learning interest..."
          className="
            flex-1

            rounded-2xl

            border
            border-slate-200

            px-5
            py-3.5

            outline-none

            transition

            focus:border-purple-500
            focus:ring-2
            focus:ring-purple-100
          "
        />

        <button
          onClick={onAddInterest}
          className="
            inline-flex
            items-center
            justify-center
            gap-2

            rounded-2xl

            bg-purple-600

            px-6
            py-3.5

            font-medium

            text-white

            transition

            hover:bg-purple-700
          "
        >
          <Plus size={18} />

          Add Interest
        </button>
      </div>

      {/* Selected Interests */}
            <div className="mt-8">
        {interests.length > 0 ? (
          <div
            className="
              flex
              flex-wrap

              gap-3
            "
          >
            {interests.map((interest) => (
              <div
                key={interest}
                className="
                  group

                  inline-flex
                  items-center
                  gap-2

                  rounded-full

                  bg-purple-50

                  px-4
                  py-2.5

                  text-sm
                  font-medium

                  text-purple-700

                  transition-all

                  hover:bg-purple-100
                "
              >
                <Brain size={15} />

                <span>{interest}</span>

                <button
                  onClick={() =>
                    onRemoveInterest(
                      interest
                    )
                  }
                  className="
                    flex
                    h-5
                    w-5

                    items-center
                    justify-center

                    rounded-full

                    transition

                    hover:bg-red-100
                    hover:text-red-600
                  "
                >
                  <X size={14} />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div
            className="
              rounded-3xl

              border-2
              border-dashed
              border-slate-200

              py-14

              text-center
            "
          >
            <Brain
              size={42}
              className="
                mx-auto

                text-slate-400
              "
            />

            <h3
              className="
                mt-5

                text-xl
                font-bold
              "
            >
              No Interests Added
            </h3>

            <p
              className="
                mt-2

                text-slate-500
              "
            >
              Add your learning interests
              to personalize mentor and
              course recommendations.
            </p>
          </div>
        )}
      </div>

      {/* Suggested Interests */}

      <div className="mt-10">
        <h3
          className="
            text-lg
            font-semibold
          "
        >
          Popular Learning Interests
        </h3>

        <p
          className="
            mt-2

            text-sm

            text-slate-500
          "
        >
          Explore popular learning
          categories across the platform.
        </p>

        <div
          className="
            mt-6

            grid

            gap-4

            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {suggestedInterests.map(
            (item) => {
              const Icon =
                item.icon;

              const selected =
                interests.includes(
                  item.label
                );

              return (
                <button
                  key={item.label}
                  disabled={selected}
                  className={`
                    rounded-2xl

                    border

                    p-5

                    text-left

                    transition-all

                    ${
                      selected
                        ? `
                          border-purple-200

                          bg-purple-50
                        `
                        : `
                          border-slate-200

                          hover:border-purple-200
                          hover:shadow-md
                        `
                    }
                  `}
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <div
                      className={`
                        flex
                        h-12
                        w-12

                        items-center
                        justify-center

                        rounded-2xl

                        ${
                          selected
                            ? "bg-purple-600 text-white"
                            : "bg-purple-50 text-purple-600"
                        }
                      `}
                    >
                      <Icon
                        size={22}
                      />
                    </div>

                    <div>
                      <h4
                        className="
                          font-semibold
                        "
                      >
                        {item.label}
                      </h4>

                      <p
                        className="
                          mt-1

                          text-xs

                          text-slate-500
                        "
                      >
                        {selected
                          ? "Already Added"
                          : "Click to add later"}
                      </p>
                    </div>
                  </div>
                </button>
              );
            }
          )}
        </div>
      </div>
            {/* Footer */}

      <div
        className="
          mt-10

          flex
          flex-col
          lg:flex-row

          lg:items-center
          lg:justify-between

          gap-4

          border-t
          border-slate-200

          pt-6
        "
      >
        <div>
          <h4
            className="
              font-semibold
            "
          >
            Personalized Learning
          </h4>

          <p
            className="
              mt-1

              max-w-2xl

              text-sm
              text-slate-500
            "
          >
            Your interests help Thraivio recommend
            the most relevant mentors, learning programs,
            live sessions and career opportunities based
            on your goals.
          </p>
        </div>

        <div
          className="
            inline-flex
            items-center
            gap-2

            rounded-full

            bg-purple-50

            px-4
            py-2

            text-sm
            font-medium

            text-purple-700
          "
        >
          <Brain size={16} />

          {interests.length} Interest
          {interests.length !== 1
            ? "s Selected"
            : " Selected"}
        </div>
      </div>
    </div>
  );
};

export default InterestsSection;