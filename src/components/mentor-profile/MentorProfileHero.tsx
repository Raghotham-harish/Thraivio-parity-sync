import {
  BadgeCheck,
  MapPin,
  Briefcase,
  Star,
  Users,
  Calendar,
  Globe,
} from "lucide-react";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

interface MentorProfileHeroProps {
  mentor: {
    id: number;
    name: string;
    role: string;
    company: string;
    location: string;
    image: string;

    rating: number;
    reviewsCount: number;

    experience: string;

    studentsCoached: number;
    sessionsCompleted: number;

    companiesWorked: string[];

    isAvailable: boolean;
    languages: string[];

    pricing: {
      introCall: number;
      mentorshipCall: number;
      mockInterview: number;
      monthlyProgram: number;
    };
  };
}

const MentorProfileHero = ({
  mentor,
}: MentorProfileHeroProps) => {
  return (
    <section>
      {/* Cover */}
      <div className="relative h-72 overflow-hidden">

  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600" />

  <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3')] bg-cover bg-center" />

  <div
  className="
    absolute
    inset-0
    flex
    items-center
    justify-center
    text-center
    text-white
    z-10
  "
>
  <div>
    <p className="uppercase tracking-[5px] text-sm opacity-80">
      TOP RATED • VERIFIED • INDUSTRY EXPERT
    </p>

    <h2 className="text-4xl md:text-5xl font-bold mt-3">
      Learn Directly From Real Industry Leaders
    </h2>
  </div>
</div>

  </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="-mt-16 relative z-20">

          <div
  className="
    bg-white
    rounded-3xl
    shadow-2xl
    border
    border-slate-200
    p-8
  "
>

            <div className="flex flex-col xl:flex-row justify-between gap-10">

              {/* Left */}
              <div className="flex flex-col md:flex-row gap-6">

                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="
                    h-44
w-44
rounded-full
border-[6px]
border-white
object-cover
shadow-2xl
shrink-0
                  "
                />

                <div>

                  <div className="flex items-center gap-2 flex-wrap">

                    <h1 className="text-4xl md:text-5xl font-bold">
                    {mentor.name}
                    </h1>

                    <BadgeCheck
                      size={26}
                      className="text-blue-600"
                    />

                    <span
                    className={`
                    px-3
                    py-1
                    rounded-full
                    text-sm
                    font-medium
                  ${
                  mentor.isAvailable
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
                   }
                   `}
                   >
                    {mentor.isAvailable
                ? "Available Now"
                : "Fully Booked"}
                     </span>

                  </div>

                  <p className="text-blue-600 text-xl mt-2">
                    {mentor.role}
                  </p>

                  <p className="text-slate-500 mt-2 max-w-2xl">
  Trusted by professionals worldwide for career growth,
  interview preparation, leadership coaching and product strategy.
</p>

                  <div className="flex flex-wrap gap-3 mt-4">

  <span
    className="
      px-3
      py-1
      rounded-full
      bg-amber-50
      text-amber-700
      text-sm
      font-medium
    "
  >
    ⭐ {mentor.rating} Rating
  </span>

  <span
    className="
      px-3
      py-1
      rounded-full
      bg-green-50
      text-green-700
      text-sm
      font-medium
    "
  >
    {mentor.studentsCoached}+ Students
  </span>

  <span
    className="
      px-3
      py-1
      rounded-full
      bg-blue-50
      text-blue-700
      text-sm
      font-medium
    "
  >
    {mentor.sessionsCompleted}+ Sessions
  </span>

</div>

<div className="flex items-center mt-5">

  <div className="flex -space-x-3">

    <img
      src="https://randomuser.me/api/portraits/women/32.jpg"
      className="w-10 h-10 rounded-full border-2 border-white"
      alt=""
    />

    <img
      src="https://randomuser.me/api/portraits/men/44.jpg"
      className="w-10 h-10 rounded-full border-2 border-white"
      alt=""
    />

    <img
      src="https://randomuser.me/api/portraits/women/68.jpg"
      className="w-10 h-10 rounded-full border-2 border-white"
      alt=""
    />

  </div>

  <p className="ml-4 text-sm text-slate-600">
    <span className="font-semibold text-slate-900">
      120+
    </span>{" "}
    mentees have achieved career growth
  </p>

</div>

                  <div className="mt-5 space-y-3">

                    <div className="flex items-center gap-2 text-slate-600">
                      <Briefcase size={18} />
                      {mentor.company}
                    </div>

                    <div className="flex items-center gap-2 text-slate-600">
                      <MapPin size={18} />
                      {mentor.location}
                    </div>

                  </div>

                  <div className="flex flex-wrap gap-3 mt-5">

  <a
    href="https://www.linkedin.com"
    target="_blank"
    rel="noopener noreferrer"
    className="
      flex
      items-center
      gap-2
      px-4
      py-2
      rounded-xl
      bg-slate-100
      hover:bg-blue-100
      hover:text-blue-700
      transition
      font-medium
    "
  >
    <FaLinkedin size={18} />
    LinkedIn
  </a>

  <a
    href="https://www.youtube.com"
    target="_blank"
    rel="noopener noreferrer"
    className="
      flex
      items-center
      gap-2
      px-4
      py-2
      rounded-xl
      bg-slate-100
      hover:bg-red-100
      hover:text-red-600
      transition
      font-medium
    "
  >
    <FaYoutube size={18} />
    YouTube
  </a>

  <a
    href="https://www.google.com"
    target="_blank"
    rel="noopener noreferrer"
    className="
      flex
      items-center
      gap-2
      px-4
      py-2
      rounded-xl
      bg-slate-100
      hover:bg-green-100
      hover:text-green-700
      transition
      font-medium
    "
  >
    <Globe size={18} />
    Website
  </a>

</div>

                   {/* Companies Worked */}
<div className="mt-4">

  <p className="text-sm font-semibold text-slate-700 mb-2">
     Experience At
  </p>

  <div className="flex flex-wrap gap-2">

    {mentor.companiesWorked.map((company) => (
      <span
        key={company}
        className="
  px-4
  py-2
  bg-white
  border
  border-slate-200
  rounded-xl
  text-sm
  font-semibold
  shadow-sm
"
      >
        {company}
      </span>
    ))}

  </div>

  <p className="text-sm text-slate-500 mt-3">
  Worked with leading global organizations across product,
  engineering and leadership roles.
</p>

</div>

                </div>

              </div>

              {/* Right CTA */}
              <div className="xl:w-[350px] xl:pt-4">

                <div
  className="
    bg-white
    border
    border-slate-200
    rounded-3xl
    p-6
    shadow-sm
  "
>

                  <p className="text-slate-500">
                    Starting From
                  </p>

                  <h2 className="text-4xl font-bold mt-2">
                    ${mentor.pricing.introCall}
                  </h2>
                  <div className="mt-4 flex items-center gap-2 text-sm text-green-600 font-medium">
                 ● Usually responds within 2 hours
                  </div>
                  <div className="mt-3 space-y-2 text-sm text-slate-600">

                  <p>✅ Verified Mentor</p>

                  <p>⚡ 95% Response Rate</p>

                  <p>🎯 Personalized Career Guidance</p>

                  </div>

                  <p className="text-slate-500 text-sm mt-1">
                    Intro Discovery Call
                  </p>

                  <div className="mt-4 rounded-xl bg-blue-50 p-4">

                  <p className="text-sm text-slate-500">
                   Monthly Mentorship
                  </p>

                  <h4 className="text-2xl font-bold text-blue-700 mt-1">
                  ${mentor.pricing.monthlyProgram}
                  </h4>

                  <p className="text-xs text-slate-500 mt-1">
                  Includes weekly 1:1 calls & priority support
                  </p>

                  </div>

                  <div className="mt-6 flex flex-col gap-3">

                    <Link
                      to="/login"
                      className="
                        bg-blue-600
                        text-white
                        py-3
                        rounded-xl
                        text-center
                        font-medium
                        hover:bg-blue-700
                        transition
                      "
                    >
                      Book Intro Call
                    </Link>

                    <Link
                      to="/login"
                      className="
border
border-slate-300
py-3
rounded-xl
text-center
font-medium
hover:bg-blue-50
hover:border-blue-300
hover:text-blue-700
transition-all
duration-300
"
                    >
                      Ask A Question
                    </Link>

                  </div>

                </div>

              </div>

            </div>

            {/* Stats */}
            <div
              className="
                grid
                md:grid-cols-2
                xl:grid-cols-5
                gap-5
                mt-10
              "
            >

              <div className="bg-blue-50 rounded-2xl p-5">

                <div className="flex items-center gap-2">
                  <Star
                    size={18}
                    className="text-amber-500"
                  />
                  <span className="font-medium">
                    Rating
                  </span>
                </div>

                <h3 className="text-3xl font-bold mt-2">
                  {mentor.rating}
                </h3>

                <p className="text-slate-500">
                  {mentor.reviewsCount}+ Reviews
                </p>

              </div>

              <div className="bg-blue-50 rounded-2xl p-5">

                <div className="flex items-center gap-2">
                  <Users size={18} />
                  <span className="font-medium">
                    Students
                  </span>
                </div>

                <h3 className="text-3xl font-bold mt-2">
                  {mentor.studentsCoached}+
                </h3>

                <p className="text-slate-500">
                  Students Trained
                </p>

              </div>

              <div className="bg-blue-50 rounded-2xl p-5">

                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span className="font-medium">
                    Sessions
                  </span>
                </div>

                <h3 className="text-3xl font-bold mt-2">
                  {mentor.sessionsCompleted}+
                </h3>

                <p className="text-slate-500">
                  Sessions Completed
                </p>

              </div>

              <div className="bg-blue-50 rounded-2xl p-5">

                <div className="flex items-center gap-2">
                  <Briefcase size={18} />
                  <span className="font-medium">
                    Experience
                  </span>
                </div>

                <h3 className="text-3xl font-bold mt-2">
                  {mentor.experience}
                </h3>

                <p className="text-slate-500">
                  Industry Experience
                </p>

              </div>

              <div className="bg-blue-50 rounded-2xl p-5">

  <div className="flex items-center gap-2 mb-3">

    <Globe
      size={18}
      className="text-cyan-600"
    />

    <span className="font-semibold text-slate-700">
      Languages
    </span>

  </div>

  <div className="flex flex-wrap gap-2">

    {mentor.languages.map((language) => (
      <span
        key={language}
        className="
          px-3
          py-1
          bg-white
          border
          border-cyan-200
          rounded-full
          text-sm
          font-medium
          text-cyan-700
        "
      >
        {language}
      </span>
    ))}

  </div>

  <p className="text-xs text-slate-500 mt-4">
    Fluent communication across multiple languages
  </p>

</div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default MentorProfileHero;