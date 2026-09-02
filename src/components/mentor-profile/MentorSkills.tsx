import {
  Brain,
  Target,
  TrendingUp,
} from "lucide-react";

interface MentorSkillsProps {
  mentor: {
    skills: string[];
    expertise: string[];
  };
}

const MentorSkills = ({
  mentor,
}: MentorSkillsProps) => {

  const skillLevels = [
  9.9,
  9.7,
  9.5,
  9.3,
  9.1,
  8.9,
];

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
              Professional Strengths
            </span>

            <h2 className="text-4xl font-semibold tracking-tight text-slate-900 mt-4">
              Skills & Expertise
            </h2>

            <p className="text-slate-600 mt-3 leading-7">
              Key competencies developed through years of
              mentoring, leadership, and industry experience.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mt-8">

  <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-5">

    <p className="text-sm text-slate-500">
      Core Skills
    </p>

    <h3 className="text-3xl font-bold text-blue-600">
      6+
    </h3>

  </div>

  <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-5">

    <p className="text-sm text-slate-500">
      Expertise Areas
    </p>

    <h3 className="text-3xl font-bold text-blue-600">
      {mentor.expertise.length}
    </h3>

  </div>

  <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-5">

    <p className="text-sm text-slate-500">
      Avg Rating
    </p>

    <h3 className="text-3xl font-bold text-slate-900">
      9.5/10
    </h3>

  </div>

</div>

          </div>

          {/* Top Strengths */}

<div className="mt-12">

  <h3 className="text-2xl font-bold mb-6">
    Top Strengths
  </h3>

  <div className="grid md:grid-cols-3 gap-5">

    {mentor.skills.slice(0, 3).map((skill, index) => {

      const medals = ["🥇", "🥈", "🥉"];

      return (

        <div
          key={skill}
          className="
rounded-xl
border
border-slate-200
bg-white
p-6
hover:shadow-md
transition-all
duration-300
"
        >

          <div className="text-3xl">
            {medals[index]}
          </div>

          <h4 className="mt-3 font-bold text-lg">
            {skill}
          </h4>

          <p className="text-sm text-slate-500 mt-2">
            One of the mentor's strongest professional competencies.
          </p>

          <div className="mt-4 text-blue-600 font-semibold">
            {skillLevels[index]}/10
          </div>

        </div>

      );

    })}

  </div>

</div>

          {/* Skills Section */}
          <div className="mt-12">

            <div className="flex items-center gap-2 mb-6">

              <Brain
                size={24}
                className="text-blue-600"
              />

              <div>

  <h3 className="text-2xl font-bold">
    Core Skills Assessment
  </h3>

  <p className="text-slate-500 mt-1">
    Rated based on professional expertise and mentoring experience.
  </p>

</div>

            </div>

            <div className="space-y-6">

              {mentor.skills
               ?.slice(0, 6)
               .map(
                (skill, index) => (
                  <div key={skill}>

                    <div className="flex items-center justify-between mb-2">

  <span className="font-semibold">
    {skill}
  </span>

  <span
    className="
      bg-white
        border
      border-blue-200
      text-blue-700
      px-3
      py-1
      rounded-lg
      text-sm
      font-medium
    "
  >
    {
      skillLevels[
        index %
          skillLevels.length
      ]
    }
    /10
  </span>

</div>

                    <div
                      className="
                        h-3
                        bg-slate-100
                        rounded-full
                        overflow-hidden
                      "
                    >

                      <div
                        className="
h-full
bg-blue-600
rounded-full
shadow-sm
"
                        style={{
                          width: `${
                          skillLevels[
                          index %
                          skillLevels.length
                          ] * 10
                          }%`,
                        }}
                      />

                    </div>

                  </div>
                  
                )
              )}

            </div>

          </div>
          

          {/* Expertise Section */}
          <div className="mt-14">

            <div className="flex items-center gap-2 mb-6">

              <Target
                size={24}
                className="text-blue-600"
              />

              <h3 className="text-2xl font-semibold">
                Areas Of Expertise
              </h3>

            </div>

            <div className="grid md:grid-cols-2 gap-5">

              {mentor.expertise?.map((item) => (

                <div
                  key={item}
                  className="
                    p-5
                    rounded-2xl
                    border
                    bg-white
                    hover:shadow-md
                   hover:border-blue-500
                    transition-all
                    duration-300
                  "
                >

                  <div className="flex items-center gap-3">

                    <div
                      className="
h-10
w-10
rounded-xl
bg-blue-50
flex
items-center
justify-center
"
                    >
                      <TrendingUp
                        size={18}
                        className="text-blue-600"
                      />
                    </div>

                    <div>

                      <h4 className="font-semibold">
                        {item}
                      </h4>

                      <p className="text-sm text-slate-500">
  Proven mentoring experience
</p>

<div className="mt-2">

  <span
    className="
text-xs
bg-white
border
border-blue-200
text-blue-700
px-2
py-1
rounded-lg
"
  >
    Expert
  </span>

</div>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* Bottom CTA */}
          <div
            className="
              mt-12
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
              Ready To Accelerate Your Career?
            </h3>

            <p className="mt-3 text-slate-600">
              Get personalized mentorship, interview preparation,
leadership coaching and career guidance tailored to your goals.
            </p>

            <button
              className="
                mt-6
                border
              border-slate-300
                text-blue-600
                px-8
                py-3
                rounded-lg
                font-semibold
                hover:shadow-md
                transition
              "
            >
              Book A Mentorship Session
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default MentorSkills;