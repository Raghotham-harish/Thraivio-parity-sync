import { useState } from "react";

import {
  Building2,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

interface MentorExperienceProps {
  mentor: {
    role: string;
    company: string;
    experience: string;

    studentsCoached: number;
    sessionsCompleted: number;

    rating: number;
    reviewsCount: number;

    companiesWorked: string[];
  };
}

const MentorExperience = ({
  mentor,
}: MentorExperienceProps) => {
  const [showFullJourney, setShowFullJourney] =
  useState(false);
  return (
    <section className="pb-20">
      <div className="max-w-7xl mx-auto px-4">

        <div className="bg-white border border-slate-200 rounded-2xl p-10 shadow-sm">

          {/* Header */}
          <div>

            <span
              className="
inline-block
bg-blue-50
border
border-blue-200
text-blue-700
px-4
py-1
rounded-lg
text-sm
font-medium
"
            >
              Professional Journey
            </span>

            <h2 className="text-4xl font-semibold tracking-tight text-slate-900 mt-4">
              Experience & Impact
            </h2>

            <p className="text-slate-600 leading-7 mt-3">
              A track record of mentoring professionals,
              building teams, and driving career growth.
            </p>

          </div>

          <div className="mt-10 space-y-8">

  {/* Current */}

  <div className="
flex
gap-5
p-5
rounded-xl
bg-white
border
border-slate-200
hover:bg-white
hover:shadow-sm
transition-all
duration-300
">

    <div className="flex flex-col items-center">

      <div className="w-4 h-4 rounded-full bg-[#1677FF] ring-4 ring-blue-50"></div>

      <div className="w-1 flex-1 bg-slate-200"></div>

    </div>

    <div>

      <span className="
  inline-block
  px-3
  py-1
  rounded-lg
  bg-blue-50
border
border-blue-200
  text-blue-700
  text-xs
  font-semibold
">
  Current Position
</span>

      <h3 className="text-2xl font-bold">
        {mentor.role}
      </h3>

      <p className="text-blue-600 font-medium">
        {mentor.company}
      </p>

      <p className="mt-2 text-slate-600">
        Leading mentorship programs, helping professionals
        crack interviews and accelerate career growth.
      </p>

    </div>

  </div>

  {/* Experience */}

  <div className="
flex
gap-5
p-5
rounded-xl
bg-white
border
border-slate-200
hover:bg-white
hover:shadow-sm
transition-all
duration-300
">

    <div className="flex flex-col items-center">

      <div className="w-4 h-4 rounded-full bg-[#1677FF] ring-4 ring-blue-50"></div>      

      <div className="w-1 flex-1 bg-slate-200"></div>

    </div>

    <div>

      <span className="
  inline-block
  px-3
  py-1
  rounded-lg
  bg-blue-50
border
border-blue-200
text-blue-700
  text-xs
  font-semibold
">
  Experience
</span>

      <h3 className="text-xl font-bold">
        {mentor.experience}
      </h3>

      <p className="text-slate-600 mt-2">
        Years of industry leadership, coaching and product strategy.
      </p>

    </div>

  </div>

  {/* Today */}

  <div className="
flex
gap-5
p-5
rounded-xl
bg-white
border
border-slate-200
hover:bg-white
hover:shadow-sm
transition-all
duration-300
">

    <div className="flex flex-col items-center">

    <div className="w-4 h-4 rounded-full bg-[#1677FF] ring-4 ring-blue-50"></div>      

      <div className="w-1 flex-1 bg-slate-200"></div>

     </div>

    <div>
      <span className="
  inline-block
  px-3
  py-1
  rounded-lg
  bg-blue-50
border
border-blue-200
  text-blue-700
  text-xs
  font-semibold
">
  Today
</span>

      <h3 className="text-xl font-bold">
        Mentor & Career Coach
      </h3>

      <p className="text-slate-600 mt-2">
        Helping students and professionals achieve promotions,
        salary hikes and interview success.
      </p>

    </div>

  </div>

</div>
          

          {/* Companies */}
          <div className="mt-12">

            <div className="mb-8">

  <div className="flex items-center gap-3">

    <div
      className="
        h-12
        w-12
        rounded-xl
        bg-blue-50
        flex
        items-center
        justify-center
      "
    >
      <Building2
        size={22}
        className="text-blue-600"
      />
    </div>

    <div>

      <h3 className="text-2xl font-bold">
        Career Journey
      </h3>

      <p className="text-slate-500 mt-1 max-w-2xl">
        Explore the organizations and milestones that shaped
        this mentor's professional growth.
      </p>

    </div>

  </div>

</div>
           <div className="grid md:grid-cols-2 gap-4">

  {(
  showFullJourney
    ? mentor.companiesWorked
    : mentor.companiesWorked.slice(0, 3)
).map((company) => (

    <div
      key={company}
      className="
flex
items-center
gap-4
p-5
rounded-xl
bg-white
border
border-slate-200
hover:shadow-sm
hover:border-blue-500
transition-all
"
    >

      <div
        className="
          h-12
          w-12
          rounded-xl
          bg-blue-50
          flex
          items-center
          justify-center
        "
      >

        <Building2
          size={22}
          className="text-blue-600"
        />

      </div>

      <div>

        <h4 className="font-semibold">
          {company}
        </h4>

        <p className="text-sm text-slate-500">
        Professional Experience
       </p>

      </div>

    </div>

  ))}

</div>

{mentor.companiesWorked.length > 3 && (

  <div className="flex justify-center mt-8">

    <button
      onClick={() =>
        setShowFullJourney(!showFullJourney)
      }
      className="
        flex
        items-center
        gap-2
        px-6
        py-3
        rounded-xl
        bg-white
        border
      border-blue-200
        text-blue-600
        font-medium
        hover:bg-blue-50
        transition
      "
    >

      {showFullJourney
        ? "Show Less"
        : "View Full Career Journey"}

      <ChevronDown
        size={18}
        className={`transition-transform ${
          showFullJourney
            ? "rotate-180"
            : ""
        }`}
      />

    </button>
  
  </div>

)}

          </div>

          {/* Bottom Banner */}
          <div
            className="
              mt-14
              p-8
              bg-white
border
border-slate-200
rounded-2xl
shadow-sm
              text-slate-900
            "
          >

            <h3 className="text-2xl font-bold">
              Learn From Someone Who Has Done It
            </h3>

            <p className="mt-3 text-slate-600">
              Every mentorship session is backed by years of
              industry experience, leadership and practical
              career guidance tailored to your goals.
            </p>

            <button
  className="
mt-6
inline-flex
items-center
gap-2
border
border-slate-300
text-blue-600
px-6
py-3
rounded-lg
font-semibold
hover:shadow-md
transition
"
>
  Book Your First Mentorship Session
  <ArrowRight size={18} />
</button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default MentorExperience;