import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, CheckCircle } from "lucide-react";
interface MentorAboutProps {
  mentor: {
    id: number;
    about: string;
    expertise: string[];
    certifications: string[];
    languages: string[];
    companiesWorked: string[];
    achievements: string[];
  };
}

const MentorAbout = ({
  mentor,
}: MentorAboutProps) => {
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">

        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">

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
              Professional Background
            </span>

            <h2 className="text-4xl font-semibold tracking-tight text-slate-900 mt-4">
              Meet Your Mentor
            </h2>

            <p className="text-slate-600 leading-7 mt-3">
              Learn about experience, expertise, achievements and career journey.
            </p>

          </div>

          {/* About */}
          <div
  className="
    mt-8
    bg-white
rounded-2xl
p-6
border
border-slate-200
  "
>
  <p
    className={`text-slate-700 leading-7 ${
      !showMore && "line-clamp-4"
    }`}
  >
    {mentor.about}
  </p>

  <button
    onClick={() => setShowMore(!showMore)}
    className="
mt-4
flex
items-center
gap-2
text-blue-600
font-medium
hover:text-blue-700
transition
"
  >
    {showMore ? "Show Less" : "Know More"}

    <ChevronDown
      size={18}
      className={`transition ${
        showMore ? "rotate-180" : ""
      }`}
    />
  </button>
</div>

          {/* Expertise + Languages */}
          <div className="grid lg:grid-cols-2 gap-8 mt-10">

            {/* Expertise */}
            <div>

              <h3 className="text-xl font-semibold mb-4">
                Expertise
              </h3>

              <div className="flex flex-wrap gap-3">

                <div className="grid grid-cols-2 gap-4">

  {mentor.expertise?.map((item) => (

    <div
      key={item}
      className="
flex
items-center
gap-3
p-4
rounded-lg
border
border-slate-200
bg-white
hover:border-blue-500
hover:shadow-sm
transition-all
"
    >

      <CheckCircle
        size={18}
        className="text-green-500"
      />

      <span className="font-medium">
        {item}
      </span>

    </div>

  ))}

</div>

              </div>

            </div>

            {/* Languages */}
            <div>

              <h3 className="text-xl font-semibold mb-4">
                Languages
              </h3>

              <div className="flex flex-wrap gap-3">

                {mentor.languages?.map((lang) => (
                  <span
                    key={lang}
                    className="
px-4
py-2
bg-white
border
border-slate-200
text-blue-700
rounded-lg
text-sm
font-medium
hover:bg-blue-50
hover:border-blue-500
cursor-pointer
transition
"
                  >
                    {lang}
                  </span>
                ))}

              </div>

            </div>

          </div>

          {/* Career Journey */}
<div className="mt-12">

  <h3 className="text-xl font-semibold">
    Career Journey
  </h3>

  <p className="text-slate-500 mb-6">
  A snapshot of organizations where this mentor has contributed and grown professionally.
</p>

  <div className="grid md:grid-cols-2 gap-4">

    {mentor.companiesWorked?.map((company) => (

      <div
        key={company}
        className="
          flex
          items-center
          gap-4
          p-5
          bg-white
          border
          border-slate-200
          rounded-2xl
          hover:shadow-sm
          transition
        "
      >

        <div
          className="
            w-12
            h-12
            rounded-xl
            bg-blue-50
            flex
            items-center
            justify-center
            text-blue-600
            font-bold
            text-lg
          "
        >
          ✓
        </div>

        <div>

          <h4 className="font-semibold text-slate-900">
            {company}
          </h4>

          <p className="text-sm text-slate-500">
            Professional Experience
          </p>

        </div>

      </div>

    ))}

  </div>

</div>
          {/* Certifications */}

<div className="mt-12">

  <h3 className="text-2xl font-bold">
    Certifications
  </h3>

  <p className="text-slate-500 mt-2 mb-6">
    Industry certifications and verified professional credentials.
  </p>

  {/* Different thumbnail images */}
  {(() => {
    const certificateImages = [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300",
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=300",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=300",
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=300",
    ];

    return (
      <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

        {mentor.certifications?.slice(0, 3).map((cert, index) => (

          <div
            key={cert}
            className="
              bg-white
              border
              border-slate-200
              rounded-2xl
              p-5
              hover:shadow-md
              transition-all
            "
          >

            <div className="flex flex-col">

              {/* Thumbnail */}

              <img
                src={
                  certificateImages[
                    index % certificateImages.length
                  ]
                }
                alt={cert}
                className="
                  w-full
                  h-48
                  rounded-2xl
                  object-cover
                  border
                  border-slate-200
                  shrink-0
                "
              />

              {/* Content */}

              <div className="mt-4">

                <h4 className="font-bold text-base leading-snug">
                  {cert}
                </h4>

                <p className="text-sm text-slate-500 mt-1">
                  Verified Professional Certification
                </p>

                <span
                  className="
                    inline-flex
                    items-center
                    mt-3
                    px-3
                    py-1
                    rounded-xl
                    bg-green-50
                    text-green-700
                    text-xs
                    font-medium
                  "
                >
                  ✓ Verified
                </span>

              </div>

            </div>

          </div>

        ))}

      </div>

      {mentor.certifications.length > 3 && (

  <div className="flex justify-center mt-8">

    <button
      onClick={() =>
        navigate(`/mentor/${mentor.id}/certifications`)
      }
      className="
        px-6
        py-3
        rounded-lg
        border
        border-blue-600
        text-blue-600
        font-semibold
        hover:bg-blue-600
        hover:text-white
        transition
      "
    >
      View All Certifications
    </button>

  </div>

)}

</>
     
    );
  })()}

</div>
          {/* Achievements */}

<div className="mt-12">

  <h3 className="text-2xl font-bold">
    Key Achievements
  </h3>

  <p className="text-slate-500 mt-2 mb-6">
    Milestones and accomplishments throughout the mentor's journey.
  </p>

  {(() => {

    const achievementImages = [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=300",
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=300",
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=300",
    ];

    return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

        {mentor.achievements?.slice(0, 3).map((item, index) => (

          <div
            key={item}
            className="
              bg-white
              border
              border-slate-200
              rounded-2xl
              p-5
              hover:shadow-md
              transition-all
            "
          >

            <div className="flex gap-4">

              {/* Achievement Thumbnail */}

              <img
                src={
                  achievementImages[
                    index % achievementImages.length
                  ]
                }
                alt={item}
                className="
                  w-20
                  h-20
                  rounded-xl
                  object-cover
                  border
                  border-slate-200
                  shrink-0
                "
              />

              {/* Content */}

              <div className="flex-1">

                <h4 className="font-bold text-base leading-snug">
                  {item}
                </h4>

                <p className="text-sm text-slate-500 mt-1">
                  Career Milestone
                </p>

                <span
                  className="
                    inline-flex
                    items-center
                    mt-3
                    px-3
                    py-1
                    rounded-xl
                    bg-blue-50
                    text-blue-700
                    text-xs
                    font-medium
                  "
                >
                  🏆 Achievement
                </span>

              </div>

            </div>

          </div>

        ))}

      </div>

      {mentor.achievements.length > 3 && (

  <div className="flex justify-center mt-8">

    <button
      onClick={() =>
        navigate(`/mentor/${mentor.id}/achievements`)
      }
      className="
        px-6
        py-3
        rounded-lg
        border
        border-blue-600
        text-blue-600
        hover:bg-blue-600
        font-semibold
        hover:text-white
        transition
      "
    >
      View All Achievements
    </button>

  </div>

)}
</>
    );

  })()}

</div>

          {/* CTA */}

<div
  className="
    mt-16
    bg-white
border
border-slate-200
rounded-2xl
shadow-sm
    p-10
    text-center
    text-slate-900
  "
>

  <h3 className="text-3xl font-bold">
    Ready To Work With This Mentor?
  </h3>

  <p className="mt-4 max-w-2xl mx-auto text-slate-500">
    Book a personalized mentoring session, get career guidance,
    resume reviews, interview preparation and growth strategies.
  </p>

  <div className="flex justify-center gap-4 mt-8 flex-wrap">

    <button
      className="
        border
        border-slate-300
        text-blue-600
        px-8
        py-3
        rounded-xl
        font-semibold
        hover:shadow-lg
      "
    >
      Book Intro Call
    </button>

    <button
      className="
        border
        border-slate-300
        px-8
        py-3
        rounded-xl
        font-semibold
        hover:bg-blue-50
        hover:text-blue-600
        transition
      "
    >
      View Programs
    </button>

  </div>

</div>
        </div>

      </div>
    </section>
  );
};

export default MentorAbout;