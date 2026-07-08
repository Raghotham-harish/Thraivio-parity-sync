import { Link } from "react-router-dom";
import {
  DollarSign,
  Award,
  Users,
  Clock,
  ArrowRight,
} from "lucide-react";

const BecomeMentorHero = () => {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-4">
  <div className="bg-white border border-slate-200 rounded-3xl p-8 lg:p-12 shadow-sm">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Side */}
          <div>

            <span
              className="
inline-block
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
              🚀 Join Our Mentor Network
            </span>

            <h1
              className="
                mt-6
                text-4xl
                lg:text-6xl
                font-bold
                leading-tight
              "
            >
              Turn Your Experience Into
              <span className="block text-blue-600">
                Mentorship Impact
              </span>
            </h1>

            <p
              className="
                mt-6
                text-base 
                md:text-lg
                text-slate-600
                leading-relaxed
              "
            >
              Guide professionals, students and founders
              through real-world challenges while building
              your personal brand, expanding your network
              and earning from your expertise.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">

              <a
                href="#mentor-form"
                className="
                  bg-blue-600
                  text-white
                  px-8
                  py-4
                  rounded-xl
                  font-semibold
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  shadow-lg
hover:bg-blue-700
hover:-translate-y-1
hover:shadow-xl
transition-all
duration-300
                "
              >
                Become A Mentor
                <ArrowRight size={18} />
              </a>

              <Link
                to="/mentors"
                className="
                  border
                  border-slate-300
                  px-8
                  py-4
                  rounded-xl
                  font-semibold
                  text-center
                  hover:bg-blue-50
hover:border-blue-300
hover:text-blue-600
transition-all
duration-300
                "
              >
                Explore Mentors
              </Link>

            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 mt-6">

              <span
                className="
                  bg-green-50
border
border-green-200
                  text-green-700
                  px-4
                  py-2
                  rounded-full
                  text-sm
                  font-medium
                "
              >
                ✓ Flexible Schedule
              </span>

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
                ✓ Personal Branding
              </span>

              <span
                className="
                  bg-purple-50
border
border-purple-200
                  text-purple-700
                  px-4
                  py-2
                  rounded-full
                  text-sm
                  font-medium
                "
              >
                ✓ Global Community
              </span>

            </div>

            <div className="flex gap-6 flex-wrap mt-8">

  <div>
    <h3 className="text-2xl font-bold text-blue-600">500+</h3>
    <p className="text-sm text-slate-500">Mentors</p>
  </div>

  <div>
    <h3 className="text-2xl font-bold text-blue-600">10K+</h3>
    <p className="text-sm text-slate-500">Sessions</p>
  </div>

  <div>
    <h3 className="text-2xl font-bold text-blue-600">4.9★</h3>
    <p className="text-sm text-slate-500">Rating</p>
  </div>

</div>

          </div>

          {/* Right Side */}
          <div className="grid gap-6">

            <div className="
            bg-white
border
border-slate-200
rounded-3xl
p-6
hover:-translate-y-1
hover:shadow-xl
transition-all
duration-300">

              <div className="flex items-center gap-4">

                <div className="bg-green-50 border border-green-200 p-4 rounded-2xl">
                  <DollarSign className="text-green-600" />
                </div>

                <div>

                  <h3 className="font-bold text-xl">
                    Earn Additional Income
                  </h3>

                  <p className="text-slate-500 mt-1">
                    Monetize your expertise through mentoring.
                  </p>

                </div>

              </div>

            </div>

            <div className="
            bg-white
border
border-slate-200
rounded-3xl
p-6
hover:-translate-y-1
hover:shadow-xl
transition-all
duration-300">

              <div className="flex items-center gap-4">

                <div className="bg-blue-50 border border-blue-200 p-4 rounded-2xl">
                  <Award className="text-blue-600" />
                </div>

                <div>

                  <h3 className="font-bold text-xl">
                    Build Your Personal Brand
                  </h3>

                  <p className="text-slate-500 mt-1">
                    Become a recognized expert in your field.
                  </p>

                </div>

              </div>

            </div>

            <div className="
            bg-white
border
border-slate-200
rounded-3xl
p-6
hover:-translate-y-1
hover:shadow-xl
transition-all
duration-300">

              <div className="flex items-center gap-4">

                <div className="bg-purple-50 border border-purple-200 p-4 rounded-2xl">
                  <Users className="text-purple-600" />
                </div>

                <div>

                  <h3 className="font-bold text-xl">
                    Help Future Leaders
                  </h3>

                  <p className="text-slate-500 mt-1">
                    Make a meaningful impact on careers.
                  </p>

                </div>

              </div>

            </div>

            <div className="
            bg-white
border
border-slate-200
rounded-3xl
p-6
hover:-translate-y-1
hover:shadow-xl
transition-all
duration-300">

              <div className="flex items-center gap-4">

                <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl">
                  <Clock className="text-amber-600" />
                </div>

                <div>

                  <h3 className="font-bold text-xl">
                    Flexible Schedule
                  </h3>

                  <p className="text-slate-500 mt-1">
                    Mentor whenever it suits your availability.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
      </div>
    </section>
  );
};

export default BecomeMentorHero;