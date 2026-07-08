import {
  Search,
  Users,
  Star,
  Briefcase,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

interface MentorListingHeroProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

const MentorListingHero = ({
  searchTerm,
  setSearchTerm,
}: MentorListingHeroProps) => {
  const navigate = useNavigate();

  const handleBrowseMentors = () => {
    const section =
      document.getElementById(
        "mentors-grid"
      );

    section?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleBecomeMentor = () => {
    navigate("/become-mentor");
  };

  const handleSearchKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      const section =
        document.getElementById(
          "mentors-grid"
        );

      section?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-br
from-blue-600
to-cyan-500
        py-12
      "
    >
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center">

          {/* Badge */}
          <span
            className="
inline-flex
items-center
gap-2
bg-white/15
border
border-white/20
text-white
px-4
py-2
rounded-full
text-sm
backdrop-blur
"          >
            🚀 Learn From Industry Experts
          </span>

          {/* Heading */}
          <h1
            className="
              mt-5
              text-3xl
              md:text-5xl
              font-bold
              text-white
              max-w-4xl
              mx-auto
              leading-tight
            "
          >
            Find The Right Mentor
            <br />
            For Your Career Growth
          </h1>

          {/* Description */}
          <p
            className="
              text-slate-300
              mt-4
              max-w-2xl
              mx-auto
            "
          >
            Connect with experienced mentors
            from top companies and accelerate
            your career with personalized guidance.
          </p>

          {/* Search */}
          <div
            className="
              max-w-2xl
              mx-auto
              mt-6
              relative
            "
          >
            <Search
              size={18}
              className="
                absolute
                left-5
                top-1/2
                -translate-y-1/2
                text-slate-400
              "
            />

            <input
              type="text"
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(
                  e.target.value
                )
              }
              onKeyDown={
                handleSearchKeyDown
              }
              placeholder="Search mentors, companies, skills..."
              className="
w-full
h-14
pl-12
pr-4
rounded-2xl
bg-white
border
border-slate-200
shadow-xl
focus:outline-none
focus:ring-2
focus:ring-blue-500
"
            />
          </div>

          {/* Buttons */}
          <div
            className="
              flex
              justify-center
              gap-3
              mt-5
              flex-wrap
            "
          >
            <button
              onClick={
                handleBrowseMentors
              }
              className="
                bg-white
                hover:bg-blue-50
                hover:text-blue-700
                text-slate-900
                px-6
                py-3
                rounded-xl
                font-semibold
                transition
              "
            >
              Browse Mentors
            </button>

            <button
              onClick={
                handleBecomeMentor
              }
              className="
                border
                border-white/40
                hover:bg-white/20
                text-white
                px-6
                py-3
                rounded-xl
                font-semibold
                transition
              "
            >
              Become A Mentor
            </button>
          </div>

          {/* Trust */}
          <p
            className="
              text-blue-100
              text-sm
              mt-5
            "
          >
            Trusted by 10,000+ professionals
          </p>

          {/* Small Stats */}
          <div
            className="
              flex
              justify-center
              flex-wrap
              gap-6
              mt-8
            "
          >
            <div
  className="
    bg-white/10
    backdrop-blur
    border
    border-white/10
    rounded-2xl
    px-6
    py-5
    min-w-[120px]
  "
>
              <Users
                size={20}
                className="mx-auto mb-1"
              />

              <h3 className="font-bold text-xl">
                500+
              </h3>

              <p className="text-xs text-slate-300">
                Mentors
              </p>
            </div>

            <div
  className="
    bg-white/10
    backdrop-blur
    border
    border-white/10
    rounded-2xl
    px-6
    py-5
    min-w-[120px]
  "
>
              <Briefcase
                size={20}
                className="mx-auto mb-1"
              />

              <h3 className="font-bold text-xl">
                10K+
              </h3>

              <p className="text-xs text-slate-300">
                Sessions
              </p>
            </div>

            <div
  className="
    bg-white/10
    backdrop-blur
    border
    border-white/10
    rounded-2xl
    px-6
    py-5
    min-w-[120px]
  "
>
              <Star
                size={20}
                className="
                  mx-auto
                  mb-1
                  text-yellow-400
                "
              />

              <h3 className="font-bold text-xl">
                4.9
              </h3>

              <p className="text-xs text-slate-300">
                Rating
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default MentorListingHero;