import {
  ArrowRight,
  BookOpen,
  FileQuestion,
  GraduationCap,
  PlayCircle,
  Rocket,
} from "lucide-react";

interface ResourcesCardProps {
  onOpenDocs: () => void;

  onOpenTutorials: () => void;

  onOpenFAQ: () => void;

  onGettingStarted: () => void;
}

const ResourcesCard = ({
  onOpenDocs,
  onOpenTutorials,
  onOpenFAQ,
  onGettingStarted,
}: ResourcesCardProps) => {
  const resources = [
    {
      title: "Documentation",

      description:
        "Complete guides, platform documentation and feature explanations.",

      icon: BookOpen,

      color: "bg-blue-50",

      iconColor: "text-blue-600",

      action: "Browse Docs",

      onClick: onOpenDocs,
    },

    {
      title: "Video Tutorials",

      description:
        "Watch premium video tutorials and platform walkthroughs.",

      icon: PlayCircle,

      color: "bg-red-50",

      iconColor: "text-red-600",

      action: "Watch Videos",

      onClick: onOpenTutorials,
    },

    {
      title: "Frequently Asked Questions",

      description:
        "Quick answers to the most common questions from learners.",

      icon: FileQuestion,

      color: "bg-amber-50",

      iconColor: "text-amber-600",

      action: "View FAQs",

      onClick: onOpenFAQ,
    },

    {
      title: "Getting Started",

      description:
        "Learn how to book mentors, join programs and use every feature.",

      icon: Rocket,

      color: "bg-emerald-50",

      iconColor: "text-emerald-600",

      action: "Start Learning",

      onClick: onGettingStarted,
    },
  ];

  return (
    <section className="mt-10">
      {/* Header */}

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
        <div>
          <div
            className="
              inline-flex
              items-center
              gap-2

              rounded-full

              bg-indigo-50

              px-4
              py-2

              text-sm
              font-medium

              text-indigo-700
            "
          >
            <GraduationCap size={16} />

            Learning Resources
          </div>

          <h2
            className="
              mt-5

              text-3xl
              font-bold
            "
          >
            Self Help Resources
          </h2>

          <p
            className="
              mt-3

              max-w-3xl

              text-slate-500
            "
          >
            Explore our documentation,
            tutorials and guides before
            contacting support. Most issues
            can be resolved in just a few
            minutes.
          </p>
        </div>
      </div>

      {/* Resource Cards */}

      <div
        className="
          mt-8

          grid

          gap-6

          md:grid-cols-2
        "
      >
        {resources.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="
                rounded-[30px]

                border
                border-slate-200

                bg-white

                p-7

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-blue-200
                hover:shadow-xl
              "
            >
              <div
                className="
                  flex
                  items-center
                  justify-between
                "
              >
                <div
                  className={`
                    flex
                    h-16
                    w-16

                    items-center
                    justify-center

                    rounded-3xl

                    ${item.color}
                  `}
                >
                  <Icon
                    size={30}
                    className={item.iconColor}
                  />
                </div>

                <div
                  className="
                    rounded-full

                    bg-green-100

                    px-3
                    py-1

                    text-xs
                    font-semibold

                    text-green-700
                  "
                >
                  Popular
                </div>
              </div>

              <h3
                className="
                  mt-7

                  text-2xl
                  font-bold
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-3

                  leading-7

                  text-slate-500
                "
              >
                {item.description}
              </p>

              <button
                onClick={item.onClick}
                className="
                  mt-8

                  inline-flex
                  items-center
                  gap-2

                  rounded-xl

                  bg-blue-600

                  px-6
                  py-3

                  font-medium

                  text-white

                  transition

                  hover:bg-blue-700
                "
              >
                {item.action}

                <ArrowRight size={18} />
              </button>
            </div>
          );
        })}
      </div>

      {/* Bottom Banner */}

      <div
        className="
          mt-10

          rounded-[32px]

          bg-gradient-to-r
          from-indigo-600
          via-blue-600
          to-cyan-600

          p-8

          text-white
        "
      >
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
          <div>
            <h3
              className="
                text-3xl
                font-bold
              "
            >
              Learn Faster
            </h3>

            <p
              className="
                mt-3

                max-w-2xl

                text-blue-100
              "
            >
              Thousands of learners solve
              their questions instantly
              using our knowledge base,
              tutorials and platform guides.
            </p>
          </div>

          <button
            onClick={onOpenDocs}
            className="
              rounded-2xl

              bg-white

              px-7
              py-3.5

              font-semibold

              text-blue-700

              transition

              hover:bg-slate-100
            "
          >
            Explore Resources
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResourcesCard;