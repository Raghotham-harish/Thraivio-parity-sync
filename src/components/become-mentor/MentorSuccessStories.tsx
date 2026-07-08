import {
  Star,
  ArrowRight,
  TrendingUp,
  Users,
  Briefcase,
} from "lucide-react";

const stories = [
  {
    name: "Sarah Johnson",
    role: "Product Mentor",
    company: "Google",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600",
    quote:
      "Mentoring helped me build my personal brand and connect with professionals globally.",
    impact: "250+ Sessions",
  },
  {
    name: "Michael Lee",
    role: "Engineering Mentor",
    company: "Microsoft",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600",
    quote:
      "I've met incredible founders and engineers while helping others grow their careers.",
    impact: "180+ Mentees",
  },
  {
    name: "Emily Carter",
    role: "Career Coach",
    company: "LinkedIn",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600",
    quote:
      "Mentoring allowed me to make a meaningful impact while expanding my professional network.",
    impact: "4.9 Rating",
  },
];

const MentorSuccessStories = () => {
  const scrollToForm = () => {
    const form =
      document.getElementById("mentor-form");

    form?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
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
            Mentor Success Stories
          </span>

          <h2 className="mt-5 text-3xl md:text-5xl font-bold">
            Hear From Our Mentors
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
            Learn how experienced mentors are
            building their personal brand,
            expanding their network and helping
            professionals succeed.
          </p>

        </div>

        {/* Stories */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

          {stories.map((story) => (
            <div
              key={story.name}
              className="
                bg-white
                border
                border-slate-200
                rounded-3xl
                p-8
                shadow-sm
hover:border-blue-200
hover:shadow-xl
hover:-translate-y-2
                transition-all
                duration-300
              "
            >

              <div className="flex items-center gap-4">

                <img
                  src={story.image}
                  alt={story.name}
                  className="
w-16
h-16
rounded-full
object-cover
border-2
border-blue-100
"
                />

                <div>

                  <h3 className="font-bold text-lg">
                    {story.name}
                  </h3>

                  <p className="text-slate-500 text-sm">
                    {story.role}
                  </p>

                  <p className="inline-block mt-1 bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs font-semibold">
                    {story.company}
                  </p>

                </div>

              </div>

              {/* Rating */}
              <div className="flex gap-1 mt-5 pb-4 border-b border-slate-100">

                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    fill="currentColor"
                    className="text-yellow-500"
                  />
                ))}

              </div>

              {/* Quote */}
              <p className="mt-5 bg-slate-50 rounded-xl p-4 text-slate-600 italic leading-relaxed">
                "{story.quote}"
              </p>

              {/* Impact */}
              <div
                className="
                  mt-5
                  inline-flex
                  bg-green-50 
                  border 
                  border-green-100
                  text-green-700
                  px-4
                  py-2
                  rounded-full
                  text-sm
                  font-semibold
                "
              >
                {story.impact}
              </div>

            </div>
          ))}

        </div>

        

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">

          <div
            className="
              bg-white
rounded-3xl
border
border-slate-200
shadow-sm
p-8
hover:border-blue-200
hover:shadow-lg
hover:-translate-y-1
transition-all
duration-300
              text-center
            "
          >
            <Users
              className="mx-auto text-blue-600"
              size={30}
            />

            <h3 className="text-4xl font-bold mt-4">
              500+
            </h3>

            <p className="text-slate-500 mt-2">
              Active Mentors
            </p>

          </div>

          <div
            className="
              bg-white
              rounded-3xl
              border
              p-8
              text-center
            "
          >
            <Briefcase
              className="mx-auto text-green-600"
              size={30}
            />

            <h3 className="text-4xl font-bold mt-4">
              10K+
            </h3>

            <p className="text-slate-500 mt-2">
              Sessions Completed
            </p>

          </div>

          <div
            className="
              bg-white
              rounded-3xl
              border
              p-8
              text-center
            "
          >
            <TrendingUp
              className="mx-auto text-purple-600"
              size={30}
            />

            <h3 className="text-4xl font-bold mt-4">
              95%
            </h3>

            <p className="text-slate-500 mt-2">
              Mentor Satisfaction
            </p>

          </div>

        </div>

        <div className="border-t border-slate-200 mt-16 pt-12"></div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-500 max-w-xl mx-auto mb-6">
  Join hundreds of industry experts who are already helping professionals grow their careers.
</p>

          <button
            onClick={scrollToForm}
            className="
              bg-blue-600
              text-white
              px-8
              py-4
              rounded-xl
              font-semibold
              inline-flex
              items-center
              gap-2
              hover:bg-blue-700
              transition-all
duration-300
hover:-translate-y-1
hover:shadow-xl
            "
          >
            Apply As Mentor

            <ArrowRight size={18} />
          </button>
          <p className="text-sm text-slate-400 mt-4">
  Trusted by 500+ mentors from leading companies worldwide.
</p>

        </div>

      </div>
      </div>
    </section>
  );
};

export default MentorSuccessStories;