import {
  Briefcase,
  Users,
  Star,
} from "lucide-react";

const CategoriesHero = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-slate-900
        via-blue-900
        to-indigo-900
        py-20 
        lg:py-24
      "
    >
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"></div>

<div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center">

          {/* Badge */}
          <span
            className="
              inline-flex
              items-center
              gap-2
              bg-blue-500/20
border
border-white/10
              text-white
              px-4
              py-2
              rounded-full
              text-sm
              font-medium
              backdrop-blur
            "
          >
            🚀 Career Growth Categories
          </span>

          {/* Heading */}
          <h1
            className="
              mt-6
             text-4xl 
             md:text-5xl 
             lg:text-6xl
              font-bold
              text-white
              max-w-3xl
              mx-auto
            "
          >
            Explore Mentorship
            Categories
          </h1>

          {/* Description */}
          <p
            className="
              mt-5
              text-slate-300
              text-base
               md:text-lg
              max-w-3xl
              mx-auto
            "
          >
            Discover mentors across Product,
            Engineering, Leadership, Marketing,
            Startup, Data and other high-growth
            career paths.
          </p>

          {/* Popular Categories */}
          <div
            className="
              flex
              flex-wrap
              justify-center
              gap-3
              mt-10
            "
          >

            {[
              "Product",
              "Engineering",
              "Leadership",
              "Marketing",
              "Startup",
              "Data",
            ].map((item) => (
              <span
                key={item}
                className="
                  bg-white/10
border
border-white/10
hover:bg-white/20
hover:-translate-y-1
transition-all
duration-300
                  text-white
                  px-4
                  py-2
                  rounded-full
                  text-sm
                  backdrop-blur
                "
              >
                {item}
              </span>
            ))}

          </div>

          {/* Stats */}
          <div
            className="
              grid
              md:grid-cols-3
              gap-6
              mt-14
              max-w-4xl
              mx-auto
            "
          >

            <div
              className="
                bg-white/10
backdrop-blur
border
border-white/10
rounded-3xl
shadow-lg
p-6
hover:bg-white/15
hover:-translate-y-1
transition-all
duration-300
              "
            >
              <Users
                className="mx-auto text-blue-300"
                size={28}
              />

              <h3 className="text-3xl font-bold text-white mt-3">
                500+
              </h3>

              <p className="text-slate-300">
                Expert Mentors
              </p>
            </div>

            <div
              className="
                bg-white/10
                backdrop-blur
                rounded-3xl
                p-6
              "
            >
              <Briefcase
                className="mx-auto text-blue-300"
                size={28}
              />

              <h3 className="text-3xl font-bold text-white mt-3">
                10K+
              </h3>

              <p className="text-slate-300">
                Sessions Completed
              </p>
            </div>

            <div
              className="
                bg-white/10
                backdrop-blur
                rounded-3xl
                p-6
              "
            >
              <Star
                className="mx-auto text-yellow-400"
                size={28}
              />

              <h3 className="text-3xl font-bold text-white mt-3">
                4.9
              </h3>

              <p className="text-slate-300">
                Average Rating
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CategoriesHero;