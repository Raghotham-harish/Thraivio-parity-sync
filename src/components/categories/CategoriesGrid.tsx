import {
  Users,
  Briefcase,
  Rocket,
  TrendingUp,
  Code,
  Megaphone,
  Brain,
  Palette,
  ArrowRight,
} from "lucide-react";

interface CategoriesGridProps {
  selectedCategory: string;
  setSelectedCategory: (
    value: string
  ) => void;
}

const categories = [
  {
    title: "Leadership",
    icon: Users,
    mentors: "120+ Mentors",
    description:
      "Leadership coaching, team management and executive growth.",
  },
  {
    title: "Product",
    icon: Briefcase,
    mentors: "90+ Mentors",
    description:
      "Product strategy, PM interviews and roadmap planning.",
  },
  {
    title: "Startup",
    icon: Rocket,
    mentors: "75+ Mentors",
    description:
      "Fundraising, growth, MVP validation and founder guidance.",
  },
  {
    title: "Career",
    icon: TrendingUp,
    mentors: "110+ Mentors",
    description:
      "Career transitions, promotions and personal branding.",
  },
  {
    title: "Engineering",
    icon: Code,
    mentors: "130+ Mentors",
    description:
      "System design, coding interviews and software architecture.",
  },
  {
    title: "Marketing",
    icon: Megaphone,
    mentors: "85+ Mentors",
    description:
      "Growth marketing, SEO, paid ads and brand strategy.",
  },
  {
    title: "AI & ML",
    icon: Brain,
    mentors: "50+ Mentors",
    description:
      "Machine learning, GenAI and data science mentorship.",
  },
  {
    title: "Design",
    icon: Palette,
    mentors: "60+ Mentors",
    description:
      "UI/UX design, portfolio reviews and product design.",
  },
];

const CategoriesGrid = ({
  selectedCategory,
  setSelectedCategory,
}: CategoriesGridProps) => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-14">

          <div>
            <h2 className="text-4xl font-bold">
              Browse Categories
            </h2>

            <p className="text-slate-600 mt-2">
              Explore mentorship based on your career goals.
            </p>
          </div>

          {selectedCategory && (
            <button
              onClick={() =>
                setSelectedCategory("")
              }
              className="
                bg-white
border
border-slate-200
hover:border-blue-300
hover:text-blue-600
transition-all
                px-5
                py-3
                rounded-xl
                font-medium
                hover:bg-slate-100
              "
            >
              Clear Filter
            </button>
          )}

        </div>

        {/* Active Filter */}
        {selectedCategory && (
          <div className="mb-8">

            <span
              className="
bg-blue-50
border
border-blue-200
text-blue-700
px-4
py-2
rounded-full
text-sm
font-medium
"
            >
              Selected: {selectedCategory}
            </span>

          </div>
        )}

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-7">

          {categories.map((category) => {
            const Icon = category.icon;

            const active =
              selectedCategory ===
              category.title;

            return (
              <button
                key={category.title}
                onClick={() =>
                  setSelectedCategory(
                    category.title
                  )
                }
                className={`
                  relative
                  overflow-hidden
                  group
                  text-left
                  rounded-3xl
                  p-7
                  border
                  transition-all
                  duration-300
                  ${
  active
    ? "bg-blue-600 border-blue-600 text-white shadow-2xl"
    : "bg-white border-slate-200 hover:border-blue-500 hover:bg-blue-50/30 hover:shadow-lg hover:-translate-y-1"
}
                `}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>

                {/* Icon */}
                <div
                  className={`
                    h-14
                    w-14
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300
                    ${
                      active
                        ? "bg-white/15 border border-white/20"
                        : "bg-blue-50 border border-blue-100"
                    }
                  `}
                >
                  <Icon
                    size={28}
                    className={
                      active
                        ? "text-white"
                        : "text-blue-600"
                    }
                  />
                </div>

                {/* Title */}
                <h3 className="mt-5 text-xl font-bold tracking-tight">
                  {category.title}
                </h3>

                {/* Description */}
                <p
                  className={`mt-3 text-sm leading-7 ${
                    active
                      ? "text-blue-100"
                      : "text-slate-500"
                  }`}
                >
                  {category.description}
                </p>

                {/* Footer */}
                <div className="mt-5 flex items-center justify-between">

                  <span
                    className={`text-sm font-medium ${
                      active
                        ? "text-white"
                        : "text-blue-700"
                    }`}
                  >
                    {category.mentors}
                  </span>

                  <ArrowRight
                    size={18}
                    className={`
                      transition-transform
                      group-hover:translate-x-2
                      ${
                        active
                          ? "text-white"
                          : "text-blue-400"
                      }
                    `}
                  />

                </div>

              </button>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default CategoriesGrid;