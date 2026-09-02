import {
  ArrowRight,
  CheckCircle2,
  Star,
  Users,
  TrendingUp,
  Sparkles,
} from "lucide-react";

interface MentorFinalCTAProps {
  mentor: {
    bookingLink: string;
    rating: number;
    reviewsCount: number;
    studentsCoached: number;
  };
}

const MentorFinalCTA = ({
  mentor,
}: MentorFinalCTAProps) => {

  return (

    <section className="pb-24">

      <div className="max-w-7xl mx-auto px-4">

        <div
          className="
            rounded-2xl
border
border-slate-200
bg-white
shadow-sm
            p-10
            lg:p-14
            text-white
          "
        >

          {/* Background Glow */}


          <div>

            {/* Badge */}

            <span
              className="
                inline-flex
                items-center
                gap-2
                bg-blue-50
border
border-blue-200
rounded-lg                
                px-5
                py-2
                text-sm
                font-semibold
                text-slate-900
              "
            >

              <Sparkles size={16} />

              Your Next Career Move Starts Here

            </span>

            {/* Heading */}

            <h2
              className="
                mt-7
                max-w-4xl
                text-4xl 
                 md:text-5xl
                font-semibold
                leading-tight
                text-slate-900
              "
            >

              Ready To Turn Your
              Ambitions Into
              Real Achievements?

            </h2>

            <p
              className="
                mt-6
                max-w-3xl
                text-lg
                leading-8
                text-slate-600
              "
            >

              Whether you're preparing for interviews,
              planning a career transition, seeking
              leadership guidance or aiming for faster
              professional growth, personalized mentorship
              can help you move forward with confidence.

            </p>

            {/* Benefits */}

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 mt-12">

              <div
                className="
            bg-white
border
border-slate-200
p-6
transition
duration-300
rounded-xl
hover:border-blue-300
                "
              >

                <CheckCircle2
                  className="text-blue-600"
                  size={26}
                />

                <h3 className="font-semibold text-lg mt-4 text-slate-700">

                  Personalized Roadmap

                </h3>

                <p className="text-slate-600 text-sm mt-2">

                  Clear action plan based on your
                  goals and experience.

                </p>

              </div>

              <div
                className="
                  bg-white
border
border-slate-200
p-6
transition
duration-300
rounded-xl
hover:border-blue-300
                "
              >

                <CheckCircle2
                  className="text-blue-600"
                  size={26}
                />

                <h3 className="font-semibold text-lg mt-4 text-slate-700">

                  Mock Interviews

                </h3>

                <p className="text-slate-600 text-sm mt-2">

                  Practice with real scenarios
                  and receive actionable feedback.

                </p>

              </div>

              <div
                className="
                  bg-white
border
border-slate-200
p-6
transition
duration-300
rounded-xl
hover:border-blue-300
                "
              >

                <CheckCircle2
                  className="text-blue-600"
                  size={26}
                />

                <h3 className="font-semibold text-lg mt-4 text-slate-700">

                  Resume Reviews

                </h3>

                <p className="text-slate-600 text-sm mt-2">

                  Improve your profile to stand
                  out in competitive hiring.

                </p>

              </div>

              <div
                className="
                  bg-white
border
border-slate-200
p-6
transition
duration-300
rounded-xl
hover:border-blue-300
                "
              >

                <CheckCircle2
                  className="text-blue-600"
                  size={26}
                />

                <h3 className="font-semibold text-lg mt-4 text-slate-700">

                  Career Strategy

                </h3>

                <p className="text-slate-600 text-sm mt-2">

                  Get long-term guidance for
                  promotions and leadership.

                </p>

              </div>

            </div>

            {/* Trust Stats */}

            <div className="grid md:grid-cols-3 gap-6 mt-12">

              <div className="flex items-center gap-4 bg-slate-50 border border-slate-200 text-slate-500 rounded-2xl p-5">

                <Star
                  className="text-yellow-400"
                  fill="currentColor"
                />

                <div>

                  <h3 className="text-3xl font-bold text-slate-700">

                    {mentor.rating}

                  </h3>

                  <p className="text-slate-600">

                    Average Rating

                  </p>

                </div>

              </div>

             <div className="flex items-center gap-4 bg-slate-50 border border-slate-200 rounded-2xl p-5">

                <Users className="text-cyan-400" />

                <div>

                  <h3 className="text-3xl font-bold text-slate-700">

                    {mentor.studentsCoached}+

                  </h3>

                  <p className="text-slate-600">

                    Learners Guided

                  </p>

                </div>

              </div>

             <div className="flex items-center gap-4 bg-slate-50 border border-slate-200 rounded-2xl p-5">

                <TrendingUp className="text-green-400" />

                <div>

                  <h3 className="text-3xl font-bold text-slate-700">

                    {mentor.reviewsCount}+

                  </h3>

                  <p className="text-slate-600">

                    Success Stories

                  </p>

                </div>

              </div>

            </div>
            <div className="h-px bg-slate-200 mt-12"></div>

            {/* CTA Buttons */}

<div className="mt-14 flex flex-col sm:flex-row gap-5">

  {/* Primary Button */}

  <a
    href={mentor.bookingLink}
    target="_blank"
    rel="noreferrer"
    className="
      inline-flex
      items-center
      justify-center
      gap-3
      rounded-lg
      bg-white
      border
      border-slate-300
      px-8
      py-4
      font-semibold
      text-slate-900
hover:shadow-sm
      transition
      duration-300
    "
  >

    Book Your Mentorship

    <ArrowRight size={20} />

  </a>

  {/* Secondary Button */}

  <button
    className="
inline-flex
items-center
justify-center
rounded-lg
border
border-slate-300
bg-white
px-8
py-4
font-semibold
text-slate-900
hover:bg-slate-50
transition
"
  >

    Explore Programs

  </button>

</div>

{/* Trust Badges */}

<div className="flex flex-wrap gap-3 mt-10 text-slate-700">

  <span
    className="
      rounded-lg
      bg-white
border
border-slate-200
      px-4
      py-2
      text-sm
    "
  >
    🔒 Secure Booking
  </span>

  <span
    className="
      rounded-lg
      bg-white
      border
border-slate-200
      px-4
      py-2
      text-sm
    "
  >
    ⚡ Fast Response
  </span>

  <span
    className="
      rounded-lg
      bg-white
      border
border-slate-200
      px-4
      py-2
      text-sm
    "
  >
    🎯 Personalized Guidance
  </span>

  <span
    className="
      rounded-lg
      bg-white
      border
border-slate-200
      px-4
      py-2
      text-sm
    "
  >
    💼 Industry Experience
  </span>

</div>

{/* Bottom Glass Panel */}

<div
  className="
    mt-14
    border
    p-8
    rounded-2xl
border-slate-200
shadow-sm
bg-slate-50
  "
>

  <div className="grid md:grid-cols-3 gap-8">

    <div>

      <p className="text-slate-700 text-sm">

        Average Rating

      </p>

      <h3 className="text-4xl font-bold mt-2 text-slate-700">

        ⭐ {mentor.rating}

      </h3>

    </div>

    <div>

      <p className="text-slate-700 text-sm">

        Professionals Guided

      </p>

      <h3 className="text-4xl font-bold mt-2 text-slate-700">

        👥 {mentor.studentsCoached}+

      </h3>

    </div>

    <div>

      <p className="text-slate-700 text-sm">

        Verified Reviews

      </p>

      <h3 className="text-4xl font-bold mt-2 text-slate-700">

        💬 {mentor.reviewsCount}+

      </h3>

    </div>

  </div>

  <div className="h-px bg-slate-200 my-8"></div>

  <div className="flex flex-col lg:flex-row justify-between items-center gap-5">

    <div>

      <h3 className="text-2xl font-semibold text-slate-700">

        Invest In Your Career Today

      </h3>

      <p className="text-slate-700 mt-2 max-w-2xl">

        Small actions today can create life-changing
        opportunities tomorrow. Take the first step
        toward achieving your career goals with
        personalized mentorship.

      </p>

    </div>

    <a
      href={mentor.bookingLink}
      target="_blank"
      rel="noreferrer"
      className="
        whitespace-nowrap
        rounded-lg
        bg-blue-600
hover:bg-blue-700
        px-8
        py-4
        font-semibold
hover:shadow-sm
        transition
      "
    >

      Get Started →

    </a>

  </div>

</div>
         </div>
        </div>

      </div>

    </section>

  );

};

export default MentorFinalCTA;