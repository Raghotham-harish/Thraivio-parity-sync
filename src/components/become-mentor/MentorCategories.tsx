import {
  Briefcase,
  Users,
  Rocket,
  TrendingUp,
  Code,
  Megaphone,
  Palette,
  Brain,
  ArrowRight,
} from "lucide-react";

const categories = [
  {
    title: "Leadership",
    icon: Users,
    mentors: "120+ Mentors",
    description:
      "Help professionals become stronger leaders and managers.",
  },
  {
    title: "Product",
    icon: Briefcase,
    mentors: "90+ Mentors",
    description:
      "Guide aspiring Product Managers and product leaders.",
  },
  {
    title: "Startup",
    icon: Rocket,
    mentors: "75+ Mentors",
    description:
      "Support founders with growth, fundraising and scaling.",
  },
  {
    title: "Career",
    icon: TrendingUp,
    mentors: "110+ Mentors",
    description:
      "Help job seekers accelerate their career journey.",
  },
  {
    title: "Engineering",
    icon: Code,
    mentors: "130+ Mentors",
    description:
      "Mentor developers, engineers and tech professionals.",
  },
  {
    title: "Marketing",
    icon: Megaphone,
    mentors: "85+ Mentors",
    description:
      "Share expertise in growth, branding and marketing.",
  },
  {
    title: "Design",
    icon: Palette,
    mentors: "60+ Mentors",
    description:
      "Guide designers in UI/UX, product design and creativity.",
  },
  {
    title: "AI & ML",
    icon: Brain,
    mentors: "50+ Mentors",
    description:
      "Help learners build careers in AI and machine learning.",
  },
];

const MentorCategories = () => {
  const handleCategoryClick = () => {
    const formSection =
      document.getElementById("mentor-form");

    if (formSection) {
      formSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="pb-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 lg:p-12 shadow-sm">

        {/* Header */}
        <div className="text-center mb-16">

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
font-semibold
"
          >
            Mentor Categories
          </span>

          <h2 className="mt-5 text-3xl md:text-5xl font-bold">
            Share Expertise In Your Field
          </h2>

          <p
            className="
              mt-4
              text-slate-600
              text-lg
              max-w-2xl
              mx-auto
            "
          >
            Join experienced mentors from leading
            companies and help learners achieve
            their career goals faster.
          </p>

        </div>

        {/* Categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <button
                key={category.title}
                onClick={handleCategoryClick}
                className="
                  group
                  text-left
                  bg-white
border
border-slate-200
rounded-3xl
p-6
shadow-sm
hover:border-blue-200
hover:shadow-xl
hover:-translate-y-2
transition-all
duration-300
                "
              >

                <div
                  className="
w-14
h-14
bg-blue-50
border
border-blue-200
rounded-2xl
flex
items-center
justify-center
"
                >
                  <Icon
                    size={28}
                    className="text-blue-600"
                  />
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  {category.title}
                </h3>

                <p className="inline-block mt-3 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                  {category.mentors}
                </p>

                <p className="mt-3 text-slate-500 text-sm leading-relaxed">
                  {category.description}
                </p>

                <div
                  
className="
mt-5
pt-4
border-t
border-slate-100
flex
items-center
text-blue-600
font-medium
text-sm
gap-2
"
>
                  Apply As Mentor

                  <ArrowRight
                    size={16}
                    className="
                      group-hover:translate-x-2
                      transition
                    "
                  />
                </div>

              </button>
            );
          })}

        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">

  <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 text-center">
    <h3 className="text-3xl font-bold text-blue-600">8+</h3>
    <p className="text-slate-500">Mentorship Categories</p>
  </div>

  <div className="bg-green-50 border border-green-100 rounded-2xl p-6 text-center">
    <h3 className="text-3xl font-bold text-green-600">700+</h3>
    <p className="text-slate-500">Expert Mentors</p>
  </div>

  <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6 text-center">
    <h3 className="text-3xl font-bold text-purple-600">10K+</h3>
    <p className="text-slate-500">Career Sessions</p>
  </div>

</div>

        {/* Bottom CTA */}
        <div
          className="
            mt-16
            bg-blue-600
           rounded-3xl
border
border-blue-500
p-10 
lg:p-12
            text-center
          "
        >

          <h3 className="text-3xl font-bold text-white">
            Don't See Your Category?
          </h3>

          <p className="text-blue-100 mt-3 max-w-xl mx-auto">
            We're always expanding our mentor network.
            Apply anyway and tell us about your expertise.
          </p>

          <button
            onClick={handleCategoryClick}
            className="
              mt-6
              bg-white
              text-blue-600
              px-8
              py-3
              rounded-xl
              font-semibold
              hover:bg-blue-50
               hover:scale-105
              transition-all 
              duration-300 
              hover:-translate-y-1
            "
          >
            Apply As Mentor
          </button>

        </div>

      </div>
      </div>
    </section>
  );
};

export default MentorCategories;