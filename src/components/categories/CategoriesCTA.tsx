import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Briefcase,
  Star,
} from "lucide-react";

const CategoriesCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* Badge */}
        <span
          className="
inline-flex
items-center
gap-2
bg-white/10
border
border-white/20
text-white
px-4
py-2
rounded-full
text-sm
font-semibold
backdrop-blur
"
        >
          🚀 Join The Fastest Growing Mentorship Network
        </span>

        {/* Heading */}
        <h2
          className="
            mt-6
            text-3xl
            md:text-5xl
            font-bold
            text-white
            leading-tight
          "
        >
          Accelerate Your Career
          <br />
          With Expert Guidance
        </h2>

        {/* Description */}
        <p
          className="
            mt-6
            text-lg
            text-blue-100
            max-w-2xl
            mx-auto
          "
        >
          Learn from experienced professionals at
          Google, Microsoft, Amazon, Meta, Airbnb
          and leading startups. Whether you're
          looking for career growth or want to
          mentor others, we've got you covered.
        </p>

        {/* Buttons */}
        <div
          className="
            mt-12
            flex
            flex-col
            sm:flex-row
            justify-center
            gap-4
          "
        >

          <Link
            to="/mentors"
            className="
              bg-white
              text-blue-600
              px-8
              py-4
              rounded-xl
              font-semibold
             shadow-lg
hover:bg-slate-100
hover:-translate-y-1
hover:shadow-xl
transition-all
duration-300
              inline-flex
              items-center
              justify-center
              gap-2
            "
          >
            Find A Mentor
            <ArrowRight size={18} />
          </Link>

          <Link
            to="/become-mentor"
            className="
              border
              border-white
              text-white
              px-8
              py-4
              rounded-xl
              font-semibold
              hover:bg-white
hover:text-blue-600
hover:-translate-y-1
hover:shadow-xl
transition-all
duration-300
            "
          >
            Become A Mentor
          </Link>

        </div>

        <div className="w-24 h-1 bg-white/30 rounded-full mx-auto mt-10"></div>

        {/* Trust Text */}
        <p className="mt-6 text-blue-100 text-sm">
          TTrusted by 10,000+ professionals worldwide
        </p>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">

          <div
            className="
bg-white/10
border
border-white/10
backdrop-blur
rounded-3xl
p-6
hover:bg-white/15
hover:-translate-y-1
transition-all
duration-300
"
          >
            <Users
              className="mx-auto text-white"
              size={28}
            />

            <h3 className="text-3xl md:text-4xl font-bold text-white mt-4">
              500+
            </h3>

            <p className="text-blue-100 mt-2">
              Active Mentors
            </p>
          </div>

          <div
            className="
bg-white/10
border
border-white/10
backdrop-blur
rounded-3xl
p-6
hover:bg-white/15
hover:-translate-y-1
transition-all
duration-300
"
          >
            <Briefcase
              className="mx-auto text-white"
              size={28}
            />

            <h3 className="text-3xl md:text-4xl font-bold text-white mt-4">
              10K+
            </h3>

            <p className="text-blue-100 mt-2">
              Sessions Completed
            </p>
          </div>

          <div
            className="
bg-white/10
border
border-white/10
backdrop-blur
rounded-3xl
p-6
hover:bg-white/15
hover:-translate-y-1
transition-all
duration-300
"
          >
            <Star
              className="mx-auto text-yellow-400"
              size={28}
            />

            <h3 className="text-3xl md:text-4xl font-bold text-white mt-4">
              4.9
            </h3>

            <p className="text-blue-100 mt-2">
              Average Rating
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CategoriesCTA;