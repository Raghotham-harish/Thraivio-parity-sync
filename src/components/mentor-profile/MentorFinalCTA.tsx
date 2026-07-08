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
            relative
            overflow-hidden
            rounded-[40px]
            shadow-2xl
            bg-gradient-to-br
            from-slate-900
via-blue-900
to-indigo-900
            p-10
            lg:p-14
            text-white
          "
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-blue-600 z-10"></div>

          {/* Background Glow */}

          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"></div>

          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"></div>

          <div className="relative z-10">

            {/* Badge */}

            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-blue-500/20
border
border-white/10
                backdrop-blur
                px-5
                py-2
                text-sm
                font-medium
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
                font-bold
                leading-tight
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
                text-slate-300
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
                  bg-white/10
backdrop-blur
border
border-white/10
p-6
hover:bg-white/15
transition-all
duration-300
rounded-3xl
hover:-translate-y-1
                "
              >

                <CheckCircle2
                  className="text-blue-300"
                  size={26}
                />

                <h3 className="font-semibold text-lg mt-4">

                  Personalized Roadmap

                </h3>

                <p className="text-slate-300 text-sm mt-2">

                  Clear action plan based on your
                  goals and experience.

                </p>

              </div>

              <div
                className="
                  bg-white/10
backdrop-blur
border
border-white/10
p-6
hover:bg-white/15
transition-all
duration-300
rounded-3xl
hover:-translate-y-1
                "
              >

                <CheckCircle2
                  className="text-blue-300"
                  size={26}
                />

                <h3 className="font-semibold text-lg mt-4">

                  Mock Interviews

                </h3>

                <p className="text-slate-300 text-sm mt-2">

                  Practice with real scenarios
                  and receive actionable feedback.

                </p>

              </div>

              <div
                className="
                  bg-white/10
backdrop-blur
border
border-white/10
p-6
hover:bg-white/15
transition-all
duration-300
rounded-3xl
hover:-translate-y-1
                "
              >

                <CheckCircle2
                  className="text-blue-300"
                  size={26}
                />

                <h3 className="font-semibold text-lg mt-4">

                  Resume Reviews

                </h3>

                <p className="text-slate-300 text-sm mt-2">

                  Improve your profile to stand
                  out in competitive hiring.

                </p>

              </div>

              <div
                className="
                  rounded-3xl
                  bg-white/10
backdrop-blur
border
border-white/10
p-6
hover:bg-white/15
transition-all
duration-300
hover:-translate-y-1
                "
              >

                <CheckCircle2
                  className="text-blue-300"
                  size={26}
                />

                <h3 className="font-semibold text-lg mt-4">

                  Career Strategy

                </h3>

                <p className="text-slate-300 text-sm mt-2">

                  Get long-term guidance for
                  promotions and leadership.

                </p>

              </div>

            </div>

            {/* Trust Stats */}

            <div className="grid md:grid-cols-3 gap-6 mt-12">

              <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5">

                <Star
                  className="text-yellow-400"
                  fill="currentColor"
                />

                <div>

                  <h3 className="text-3xl font-bold">

                    {mentor.rating}

                  </h3>

                  <p className="text-slate-300">

                    Average Rating

                  </p>

                </div>

              </div>

             <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5">

                <Users className="text-cyan-400" />

                <div>

                  <h3 className="text-3xl font-bold">

                    {mentor.studentsCoached}+

                  </h3>

                  <p className="text-slate-300">

                    Learners Guided

                  </p>

                </div>

              </div>

             <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5">

                <TrendingUp className="text-green-400" />

                <div>

                  <h3 className="text-3xl font-bold">

                    {mentor.reviewsCount}+

                  </h3>

                  <p className="text-slate-300">

                    Success Stories

                  </p>

                </div>

              </div>

            </div>
            <div className="h-px bg-white/10 mt-12"></div>

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
      rounded-2xl
      bg-white
      px-8
      py-4
      font-semibold
      text-slate-900
      hover:-translate-y-1
hover:shadow-xl
      transition-all
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
      rounded-2xl
      border
      border-white/20
     bg-white/10
      backdrop-blur
      px-8
      py-4
      font-semibold
      hover:bg-white/10
      transition-all
    "
  >

    Explore Programs

  </button>

</div>

{/* Trust Badges */}

<div className="flex flex-wrap gap-3 mt-10">

  <span
    className="
      rounded-full
      bg-white/10
border
border-white/10
      px-4
      py-2
      text-sm
      backdrop-blur
    "
  >
    🔒 Secure Booking
  </span>

  <span
    className="
      rounded-full
      bg-white/10
      border
border-white/10
      px-4
      py-2
      text-sm
      backdrop-blur
    "
  >
    ⚡ Fast Response
  </span>

  <span
    className="
      rounded-full
      bg-white/10
      border
border-white/10
      px-4
      py-2
      text-sm
      backdrop-blur
    "
  >
    🎯 Personalized Guidance
  </span>

  <span
    className="
      rounded-full
      bg-white/10
      border
border-white/10
      px-4
      py-2
      text-sm
      backdrop-blur
    "
  >
    💼 Industry Experience
  </span>

</div>

{/* Bottom Glass Panel */}

<div
  className="
    mt-14
    rounded-3xl
    border
    border-white/10
    shadow-lg
    bg-white/5
    backdrop-blur
    p-8
  "
>

  <div className="grid md:grid-cols-3 gap-8">

    <div>

      <p className="text-slate-400 text-sm">

        Average Rating

      </p>

      <h3 className="text-4xl font-bold mt-2">

        ⭐ {mentor.rating}

      </h3>

    </div>

    <div>

      <p className="text-slate-400 text-sm">

        Professionals Guided

      </p>

      <h3 className="text-4xl font-bold mt-2">

        👥 {mentor.studentsCoached}+

      </h3>

    </div>

    <div>

      <p className="text-slate-400 text-sm">

        Verified Reviews

      </p>

      <h3 className="text-4xl font-bold mt-2">

        💬 {mentor.reviewsCount}+

      </h3>

    </div>

  </div>

  <div className="h-px bg-white/10 my-8"></div>

  <div className="flex flex-col lg:flex-row justify-between items-center gap-5">

    <div>

      <h3 className="text-2xl font-bold">

        Invest In Your Career Today

      </h3>

      <p className="text-slate-300 mt-2 max-w-2xl">

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
        rounded-2xl
        bg-blue-600
hover:bg-blue-700
        px-8
        py-4
        font-semibold
        hover:-translate-y-1
hover:shadow-xl
        transition-all
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